# Hooks

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

These hooks are used internally by React Query Builder and exported for use in custom components.

## State access[​](#state-access "Direct link to State access")

React Query Builder uses Redux within a custom React context to manage state without interfering with existing Redux stores.

### `useQueryBuilderQuery`[​](#usequerybuilderquery "Direct link to usequerybuilderquery")

Retrieves the complete, current query object for the nearest ancestor `QueryBuilder` component.

The optional parameter should only be used when retrieving a query object from a different `QueryBuilder` than the nearest ancestor. It can be either a complete props object as passed to a custom component or any object matching the interface `{ schema: { qbId: string } }`.

```
function useQueryBuilderQuery(props?: { schema: { qbId: string } }): RuleGroupTypeAny;
```

tip

As a React hook, this function must follow the [appropriate rules](https://react.dev/warnings/invalid-hook-call-warning). It provides access to the current query during the render phase, *not in event handlers*.

**To access the current query from an event handler, use `props.schema.getQuery()` instead.**

### `useQueryBuilderHistory`[​](#usequerybuilderhistory "Direct link to usequerybuilderhistory")

Records undo/redo history for the query builder with the given `qbId`, and returns controls for navigating it. Available from the `react-querybuilder/history` entry point.

Unlike the other hooks in this section, it does not need to be rendered beneath a `QueryBuilder`, which is what allows external toolbars and keyboard shortcut handlers to drive a query builder's history.

```
function useQueryBuilderHistory(

  qbId: string,

  options?: { maxHistory?: number; coalesceMs?: number }

): {

  undo: () => void;

  redo: () => void;

  clear: () => void;

  canUndo: boolean;

  canRedo: boolean;

  past: RuleGroupTypeAny[];

  future: RuleGroupTypeAny[];

};
```

See [Undo/redo](/docs/tips/undo-redo.md) for the full guide.

### `useQueryBuilderSelector`[​](#usequerybuilderselector "Direct link to usequerybuilderselector")

tip

Prefer [`useQueryBuilderQuery`](#usequerybuilderquery) if you only need the query object for the nearest ancestor `QueryBuilder` component.

Returns the current query from the Redux store when used with `getQuerySelectorById` (see example below).

```
function useQueryBuilderSelector(selector: (state: RqbState) => RuleGroupTypeAny): RuleGroupTypeAny;
```

Example:

```
const CustomValueEditor = (props: ValueEditorProps) => {

  const fullQuery = useQueryBuilderSelector(getQuerySelectorById(props.schema.qbId));

  // Here you can use utilities like `findPath(getParentPath(props.path), fullQuery)`.

  // This allows you to, for example, inspect the parent group of the current rule.

  // You can then count sibling rules, check for unique `field` selections, etc.

  // That information can be used for validation, information to the user, or

  // anything else in your render function.

};
```

### `getDispatchQueryById`[​](#getdispatchquerybyid "Direct link to getdispatchquerybyid")

Not a hook, but the write-side counterpart to the selectors above. Returns the `dispatchQuery` function for the mounted query builder with the given `qbId`, or `undefined` if no such query builder is mounted.

```
function getDispatchQueryById(qbId: string): DispatchQueryFn | undefined;
```

Updating a query through this function is equivalent to a user edit: the query is applied to the internal store *and* the query builder's `onQueryChange` callback fires, so it works whether the query builder is [controlled or uncontrolled](/docs/components/querybuilder.md#query). That makes it possible to drive a query builder from outside its own component tree—an external toolbar, a keyboard shortcut handler, or the undo/redo controls in [`react-querybuilder/history`](/docs/tips/undo-redo.md), which use it to apply restored queries.

Requires an explicit [`qbId`](/docs/components/querybuilder.md#qbid) prop, since automatically generated identifiers are not discoverable from outside the component.

```
const dispatchQuery = getDispatchQueryById('main');

dispatchQuery?.(add(currentQuery, { field: 'firstName', operator: '=', value: '' }, []));
```

### `useQueryManager`[​](#usequerymanager "Direct link to usequerymanager")

Subscribes to a [`QueryManager`](/docs/utils/query-management.md#query-manager) and returns its current query alongside the manager itself, re-rendering whenever the query changes. Returns a `[query, manager]` tuple.

```
function useQueryManager<RG, F, O, C>(

  manager: QueryManager<RG, F, O, C>

): [RG, QueryManager<RG, F, O, C>];

function useQueryManager<RG, F, O, C>(

  query?: RG,

  options?: QueryManagerOptions<F, O, C>

): [RG, QueryManager<RG, F, O, C>];
```

Unlike every other hook in this section, `useQueryManager` does *not* use Redux and does not need to be rendered beneath a `QueryBuilder`. `QueryManager` maintains its own state, so queries managed this way are invisible to [`useQueryBuilderQuery`](#usequerybuilderquery), [`useQueryBuilderSelector`](#usequerybuilderselector), [`useQueryBuilderHistory`](#usequerybuilderhistory), and [`getDispatchQueryById`](#getdispatchquerybyid). Use it to build a headless or fully custom interface; it is not a replacement for the [`QueryBuilder`](/docs/components/querybuilder.md) component.

Pass an existing manager to control its lifetime yourself:

```
const qm = useMemo(() => new QueryManager(initialQuery, { fields }), []);



const CustomUI = () => {

  const [query] = useQueryManager(qm);

  // ...

};
```

Or let the hook create one. The manager is created on the first render and never recreated, so `query` is an *initial* value and `options` are captured once—later changes to either argument are ignored:

```
const CustomUI = () => {

  const [query, qm] = useQueryManager(initialQuery, { fields });



  return (

    <>

      <button onClick={() => qm.add(qm.createRule())}>Add rule</button>

      <pre>{JSON.stringify(query, null, 2)}</pre>

    </>

  );

};
```

Since the manager is stable, its methods are safe to call from event handlers and to use in dependency arrays. A [batch](/docs/utils/query-management.md#batching) triggers a single re-render regardless of how many changes it contains, and mutations that resolve to a no-op trigger none.

To change the configuration after the first render, call [`reconfigure`](/docs/utils/query-management.md#reconfiguration) on the manager. The hook subscribes to the manager's config version in addition to its query, so a reconfiguration re-renders the component even though the query object is unchanged.

```
useEffect(() => {

  qm.reconfigure({ translations });

}, [qm, translations]);
```

## Component logic[​](#component-logic "Direct link to Component logic")

The core logic of each component is encapsulated in a reusable hook. Each main component is little more than a call to its respective hook plus the JSX that uses the properties returned from that hook. This enables creating a custom presentation layer without copying logic code from the default components.

tip

The `@react-querybuilder/native` package demonstrates this concept well. It calls the hooks from its own query builder, rule group, and rule components, but nests the sub-components within React Native `View` elements instead of HTML `div` elements used by `react-querybuilder` components.

### `useRule`[​](#userule "Direct link to userule")

Called by the [`Rule`](/docs/components/rule.md) component. See [source code](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/hooks/useRule.ts) for returned properties.

```
function useRule(props: RuleProps): {

  // See source code for returned properties

};
```

The configuration-dependent half of its result—field data, operators, value editor type, value list, value sources, match modes, and validation result—is derived by the framework-agnostic `deriveRuleContext` utility from `@react-querybuilder/core`. [`QueryManager.getRuleContext()`](/docs/utils/query-management.md#rule-configuration) calls the same utility, so non-React implementations resolve rules identically. Its `classNames` and `outerClassName` come from the equally framework-agnostic [`deriveRuleClassNames`/`deriveRuleOuterClassName`](/docs/utils/query-management.md#classnames).

### `useRuleGroup`[​](#userulegroup "Direct link to userulegroup")

Called by the [`RuleGroup`](/docs/components/rulegroup.md) component. See [source code](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/hooks/useRuleGroup.ts) for returned properties.

```
function useRuleGroup(props: RuleGroupProps): {

  // See source code for returned properties

};
```

Its `classNames` and `outerClassName` come from [`deriveRuleGroupClassNames`/`deriveRuleGroupOuterClassName`](/docs/utils/query-management.md#classnames), and its combinator resolution from `getRuleGroupCombinator` (see [`QueryManager.getRuleGroupContext()`](/docs/utils/query-management.md#rule-configuration)).

### `useValueEditor`[​](#usevalueeditor "Direct link to usevalueeditor")

Called by the [`ValueEditor`](/docs/components/valueeditor.md) component. Accepts the same `ValueEditorProps` as the component and returns an object with these properties: the value as an array, a multi-value handler, a processed version of the `parseNumbers` prop, and the classname(s) to be applied to each editor in editor series.

```
function useValueEditor(props: ValueEditorProps): {

  valueAsArray: any[];

  multiValueHandler: (val: string, idx: number) => void;

  parseNumberMethod: ParseNumberMethod;

  valueListItemClassName: string;

};
```

This hook updates the `value` as a side effect when these conditions are true:

* `skipHook` is `false` (the value editors in the [compatibility packages](/docs/compat.md) set this to `true` to avoid infinite loops)
* `inputType` is `"number"`
* `operator` is something other than `"between"`, `"notBetween"`, `"in"`, or `"notIn"`
* `valueEditorType` is not "multiselect"
* `value` is an array or a string containing a comma (`,`) and at least one non-whitespace character on either side.

If all of these conditions are met, `handleOnChange` will be called with the first element of the array, or any characters before the first comma if `value` is a string.

Everything except that side effect is derived by the framework-agnostic [value editor utilities](/docs/utils/query-management.md#value-editors) from `@react-querybuilder/core`, so an implementation in another framework can reuse the logic without reimplementing it.

### `useValueSelector`[​](#usevalueselector "Direct link to usevalueselector")

Called by the [`ValueSelector`](/docs/components/valueselector.md) component. Returns the given value as an array (unchanged if already an array) and a memoized change handler.

```
function useValueSelector(

  props: Pick<ValueSelectorProps, 'handleOnChange' | 'listsAsArrays' | 'multiple' | 'value'>

): {

  onChange: (v: string | string[]) => void;

  val?: string | any[];

};
```

### `useSelectElementChangeHandler`[​](#useselectelementchangehandler "Direct link to useselectelementchangehandler")

Used by the [`ValueSelector`](/docs/components/valueselector.md) component. Returns a memoized change handler designed specifically for HTML `<select />` elements.

```
function useSelectElementChangeHandler(props: {

  multiple?: boolean;

  onChange: (v: string | string[]) => void;

}): (e: ChangeEvent<HTMLSelectElement>) => void;
```

### `useShiftActions`[​](#useshiftactions "Direct link to useshiftactions")

Used by the [`ShiftActions`](/docs/components/shiftactions.md) component. Generates `shiftUp` and `shiftDown` methods to move a rule/group up or down in the query hierarchy, plus `shiftUpDisabled`/`shiftDownDisabled` to indicate whether either button should be disabled (`shiftUpDisabled` is `true` for the first rule/group in the root group; `shiftDownDisabled` is `true` for the last rule/group in the root group).

```
function useShiftActions(

  props: { path: Path } & Pick<Schema, 'combinators' | 'dispatchQuery' | 'getQuery'>

): {

  shiftDown: () => void;

  shiftDownDisabled: boolean;

  shiftUp: () => void;

  shiftUpDisabled: boolean;

};
```

### `useStopEventPropagation`[​](#usestopeventpropagation "Direct link to usestopeventpropagation")

Used by the default [`Rule`](/docs/components/rule.md) and [`RuleGroup`](/docs/components/rulegroup.md) components to prevent default behavior and stop event propagation (e.g., a `MouseEvent` after clicking a `<button>`). Takes a function that accepts a `MouseEvent` and context parameters, then returns a new function that calls `event.preventDefault()` and `event.stopPropagation()` before calling the original function with the same arguments.

```
function useStopEventPropagation(

  method: (event: React.MouseEvent, context: any) => void

): (event: React.MouseEvent, context: any) => void;
```

This hook is *not* used in `RuleNative` and `RuleGroupNative`—the `Rule` and `RuleGroup` components for `@react-querybuilder/native`.

### `useQueryBuilder`[​](#usequerybuilder "Direct link to usequerybuilder")

Returns everything needed to render a [`QueryBuilder`](/docs/components/querybuilder.md) component. Internally, this hook passes the result of [`useQueryBuilderSetup`](#usequerybuildersetup) to [`useQueryBuilderSchema`](#usequerybuilderschema) and returns the result of `useQueryBuilderSchema`. The returned object combines the results of `useQueryBuilderSchema` and `useQueryBuilderSetup` (see below).

As with `useQueryBuilderSchema`, this Hook must be called from a descendant component of `QueryBuilderStateProvider`. See [`QueryBuilder` source code](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/components/QueryBuilder.tsx) for an example.

info

This hook is unlikely to be necessary unless you're reimplementing the *entire* `QueryBuilder` component structure.

### `useQueryBuilderSetup`[​](#usequerybuildersetup "Direct link to usequerybuildersetup")

Called by the internal component rendered by [`QueryBuilder`](/docs/components/querybuilder.md). Merges props and context values with the defaults and generates actions.

info

This hook is unlikely to be necessary unless you're reimplementing the *entire* `QueryBuilder` component structure.

```
function useQueryBuilderSetup(props: QueryBuilderProps): {

  qbId: qbId.current;

  rqbContext: ReturnType<typeof useMergedContext>;

  fields: OptionList<Field>;

  fieldMap: Record<string, Field>;

  combinators: OptionList<Combinator>;

  getOperatorsMain: (field: string) => OptionList<Operator>;

  getRuleDefaultOperator: (field: string) => string;

  getValueEditorTypeMain: (field: string, operator: string) => ValueEditorType;

  getValueSourcesMain: (field: string, operator: string) => ValueSources;

  getValuesMain: (field: string, operator: string) => OptionList;

  getRuleDefaultValue: (rule: RuleType) => any;

  getInputTypeMain: (field: string, operator: string) => string;

  createRule: () => RuleType;

  createRuleGroup: () => RuleGroupTypeAny;

};
```

### `useQueryBuilderSchema`[​](#usequerybuilderschema "Direct link to usequerybuilderschema")

Called by the internal component rendered by [`QueryBuilder`](/docs/components/querybuilder.md). Returns everything needed to render a wrapper element (e.g., `<div>`) and the root [`RuleGroup`](/docs/components/rulegroup.md) element based on the provided props and the result from [`useQueryBuilderSetup`](#usequerybuildersetup).

This Hook must be called from a descendant component of `QueryBuilderStateProvider`. See [`QueryBuilder` source code](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/components/QueryBuilder.tsx) for an example.

info

This hook is unlikely to be necessary unless you're reimplementing the *entire* `QueryBuilder` component structure.

```
function useQueryBuilderSchema(

  props: QueryBuilderProps,

  setup: ReturnType<typeof useQueryBuilderSetup>

): QueryBuilderProps & {

  actions: QueryActions;

  rootGroup: RuleGroupTypeAny;

  rootGroupDisabled: RuleGroupTypeAny;

  queryDisabled: boolean;

  rqbContext: ReturnType<typeof useMergedContext>;

  schema: Schema;

  translations: TranslationsFull;

  wrapperClassName: string;

  dndEnabledAttr: 'enabled' | 'disabled';

  inlineCombinatorsAttr: 'enabled' | 'disabled';

  combinatorPropObject: Pick<RuleGroupProps, 'combinator'>;

};
```

## Other utilities[​](#other-utilities "Direct link to Other utilities")

### `useAsyncOptionList`[​](#useasyncoptionlist "Direct link to useasyncoptionlist")

Augments a `ValueSelectorProps` or `ValueEditorProps` object with [async option loading](/docs/tips/async-option-lists.md).

```
import { type UseAsyncOptionListParams, useAsyncOptionList } from 'react-querybuilder';



const useAsyncOptionListParams: UseAsyncOptionListParams = {

  getCacheKey: 'field',

  loadOptionList: async (value, { ruleOrGroup }) => {

    const response = await fetch(`/api/operators?field=${ruleOrGroup.field}`);

    return response.json();

  },

};



const AsyncOperatorSelector = (props: ValueSelectorProps) => {

  const asyncProps = useAsyncOptionList(props, useAsyncOptionListParams);



  return <props.schema.controls.valueSelector {...asyncProps} />;

};



const App = () => <QueryBuilder controlElements={{ operatorSelector: AsyncOperatorSelector }} />;
```

### `useMergedContext`[​](#usemergedcontext "Direct link to usemergedcontext")

Merges the values inherited from the nearest ancestor `QueryBuilderContext.Provider` with the current component's props. For `controlClassnames`, `controlElements`, and `translations`, options that are not defined through either context or props will fall back to the defaults.

```
function useMergedContext(props: QueryBuilderContextProps): QueryBuilderContextProps;
```

### `usePreferProp`[​](#usepreferprop "Direct link to usepreferprop")

Given a default value, a prop value, and a context value (all `boolean` or `undefined`), returns the first one that is not `undefined` in the order of (1) prop, (2) context, (3) default.

```
function usePreferProp(default: boolean, prop?: boolean, context?: boolean): boolean;
```

### `usePrevious`[​](#useprevious "Direct link to useprevious")

Returns the value of a prop or state variable from the previous render.

```
function usePrevious<T>(prop: T): T | null;
```

## Internal[​](#internal "Direct link to Internal")

These hooks log error messages to the console in certain situations (only in "development" mode). They encourage correct usage of React Query Builder and aren't intended for use in custom components.

### `useControlledOrUncontrolled`[​](#usecontrolledoruncontrolled "Direct link to usecontrolledoruncontrolled")

Logs an error to the console if any of the following are true:

* Both `query` and `defaultQuery` props are defined.
* The `query` prop is defined during one render and undefined in a subsequent render.
* The `query` prop is undefined during one render and defined in a subsequent render.

### `useDeprecatedProps`[​](#usedeprecatedprops "Direct link to usedeprecatedprops")

Logs an error to the console if any of the following are true:

* `QueryBuilder` is rendered with `independentCombinators` prop (see [Independent combinators](/docs/components/querybuilder.md#independent-combinators))
* `RuleGroup` is rendered with `combinator` or `rules` props (deprecated in favor of `ruleGroup`)
* `Rule` is rendered with `field`, `operator`, or `value` props (deprecated in favor of `rule`)

### `useReactDndWarning`[​](#usereactdndwarning "Direct link to usereactdndwarning")

Logs an error to the console if the `enableDragAndDrop` prop is `true` but the `react-dnd` and `react-dnd-html5-backend` dependencies are not loaded.
