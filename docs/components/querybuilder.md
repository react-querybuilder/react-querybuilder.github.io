# QueryBuilder

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

The primary export of `react-querybuilder` is the `<QueryBuilder />` React component.

`QueryBuilder` uses the [`useQueryBuilder`](/docs/utils/hooks.md#usequerybuilder) hook to merge props with context values and default values, generate update methods, and prepare the query schema.

## Subcomponents[​](#subcomponents "Direct link to Subcomponents")

`QueryBuilder` renders a [`RuleGroup`](/docs/components/rulegroup.md) representing the root of the query.

The root `RuleGroup` is wrapped in a `<div>` with the [standard `queryBuilder` class](/docs/styling/classnames.md), custom classes from [`controlClassnames.queryBuilder`](#controlclassnames), and `data-` attributes indicating enabled features like [drag-and-drop](#enabledraganddrop) and inline combinators.

Everything is wrapped in `<QueryBuilderStateProvider>` and `<QueryBuilderContext.Provider>`, which inherit ancestor context values and propagate them to subcomponents. Props take precedence over context values.

## Props[​](#props "Direct link to Props")

All `QueryBuilder` props are optional, but `fields` and `onQueryChange` are typically required for useful functionality (see [getting started guide](/docs/intro.md)).

note

`RuleGroupTypeAny` refers to either `RuleGroupType` or `RuleGroupTypeIC` types. See [independent combinators](#independent-combinators) for `RuleGroupTypeIC` details.

### `fields`[​](#fields "Direct link to fields")

`OptionList<Field> | Record<string, Field>`

Array of [fields](/docs/typescript.md#fields) or [option groups](/docs/typescript.md#miscellaneous) containing field arrays. Alternatively, pass an object where keys are field `name`s and values are field definitions. Object format sorts field options alphabetically by `label` in the [`fieldSelector` component](/docs/components/querybuilder-controlelements.md#fieldselector).

tip

Field objects can include custom properties. The complete field object is passed as `fieldData` to `OperatorSelector` and `ValueEditor` components (see [`controlElements`](#controlelements)).

For more information about option list props like `fields`, see [Working with option lists](/docs/tips/option-lists.md).

### `onQueryChange`[​](#onquerychange "Direct link to onquerychange")

`(query: RuleGroupTypeAny) => void`

Called with the updated query whenever changes are made within the component.

### `query`[​](#query "Direct link to query")

`RuleGroupTypeAny`

Query object of type `RuleGroupType` or `RuleGroupTypeIC`. When provided, makes `<QueryBuilder />` a [controlled component](https://reactjs.org/docs/forms.html#controlled-components).

Use with [`onQueryChange`](#onquerychange) for controlled component behavior. See [examples here](https://github.com/react-querybuilder/react-querybuilder/blob/main/examples).

### `defaultQuery`[​](#defaultquery "Direct link to defaultquery")

`RuleGroupTypeAny`

The initial query when `<QueryBuilder />` is uncontrolled.

caution

Don't provide both `query` and `defaultQuery` props. Use `query` + `onQueryChange` for controlled components, or `defaultQuery` (or neither) for uncontrolled components. `onQueryChange` fires on every update regardless.

Providing both props logs errors in development mode. Switching between defined/undefined `query` across renders also logs errors.

### `context`[​](#context "Direct link to context")

`any`

Container for passing arbitrary props to custom components. Default components ignore this prop, but it's passed to all components throughout the `QueryBuilder` tree.

### `operators`[​](#operators "Direct link to operators")

`OptionList<Operator>`

Array of available operators. Custom operators require `label` and either `name` or `value` (`value` takes precedence). Optional `arity` property ("unary", "binary", or number) determines value editor rendering—no value editor shows when `arity` is "unary" or < 2.

Use [`getOperators`](#getoperators) to build operator lists dynamically per field. Non-null `getOperators` results override this prop.

The default operator list is below.

```
export const defaultOperators: DefaultOperators = [

  { name: '=', value: '=', label: '=' },

  { name: '!=', value: '!=', label: '!=' },

  { name: '<', value: '<', label: '<' },

  { name: '>', value: '>', label: '>' },

  { name: '<=', value: '<=', label: '<=' },

  { name: '>=', value: '>=', label: '>=' },

  { name: 'contains', value: 'contains', label: 'contains' },

  { name: 'beginsWith', value: 'beginsWith', label: 'begins with' },

  { name: 'endsWith', value: 'endsWith', label: 'ends with' },

  { name: 'doesNotContain', value: 'doesNotContain', label: 'does not contain' },

  { name: 'doesNotBeginWith', value: 'doesNotBeginWith', label: 'does not begin with' },

  { name: 'doesNotEndWith', value: 'doesNotEndWith', label: 'does not end with' },

  { name: 'null', value: 'null', label: 'is null' },

  { name: 'notNull', value: 'notNull', label: 'is not null' },

  { name: 'in', value: 'in', label: 'in' },

  { name: 'notIn', value: 'notIn', label: 'not in' },

  { name: 'between', value: 'between', label: 'between' },

  { name: 'notBetween', value: 'notBetween', label: 'not between' },

];
```

> *Source: [/packages/core/src/defaults.ts#L176-L195](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/defaults.ts#L176-L195)*

For more information about option list props like `operators`, see [Working with option lists](/docs/tips/option-lists.md).

### `combinators`[​](#combinators "Direct link to combinators")

`OptionList`

Array of combinators for RuleGroups. Default combinator list:

```
export const defaultCombinators: DefaultCombinators = [

  { name: 'and', value: 'and', label: 'AND' } as const,

  { name: 'or', value: 'or', label: 'OR' } as const,

];
```

> *Source: [/packages/core/src/defaults.ts#L232-L235](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/defaults.ts#L232-L235)*

For more information about option list props like `combinators`, see [Working with option lists](/docs/tips/option-lists.md).

### `baseField`[​](#basefield "Direct link to basefield")

`Record<string, unknown>`

Properties applied to all field objects. Individual field properties override base properties.

### `baseOperator`[​](#baseoperator "Direct link to baseoperator")

`Record<string, unknown>`

Properties applied to all operator objects from `operators` prop or [`getOperators`](#getoperators). Individual operator properties override base properties.

### `baseCombinator`[​](#basecombinator "Direct link to basecombinator")

`Record<string, unknown>`

Properties applied to all combinator objects. Individual combinator properties override base properties.

### `controlClassnames`[​](#controlclassnames "Direct link to controlclassnames")

`Partial<Classnames>`

Assign custom CSS classes to QueryBuilder controls. Each property accepts `Classname` types: `string`, `string[]`, or `Record<string, any>` (see [`clsx` docs](https://www.npmjs.com/package/clsx)):

#### Usage example[​](#usage-example "Direct link to Usage example")

Example: Adding "bold" class to "+ Rule" buttons (with CSS rule `.bold { font-weight: bold; }`):

```
function App() {

  return (

    <QueryBuilder controlClassnames={{ addRule: 'bold' }}>

  )

}
```

| Property         | Class(es) applied to...                                                           |
| ---------------- | --------------------------------------------------------------------------------- |
| `queryBuilder`   | the outermost `<div>` element                                                     |
| `ruleGroup`      | each `<div>` wrapping a group                                                     |
| `header`         | each `<div>` wrapping a group's header controls                                   |
| `body`           | each `<div>` wrapping a group's body elements (child rules/groups)                |
| `combinators`    | each `<select>` control for combinators                                           |
| `addRule`        | each `<button>` that adds a rule                                                  |
| `addGroup`       | each `<button>` that adds a group                                                 |
| `cloneRule`      | each `<button>` that clones a rule                                                |
| `cloneGroup`     | each `<button>` that clones a group                                               |
| `removeGroup`    | each `<button>` that removes a group                                              |
| `lockRule`       | each `<button>` that locks/disables a rule                                        |
| `lockGroup`      | each `<button>` that locks/disables a group                                       |
| `notToggle`      | each `<label>` on a "not" (aka "inversion") toggle                                |
| `rule`           | each `<div>` containing a rule                                                    |
| `fields`         | each `<select>` control for selecting a field                                     |
| `matchMode`      | each `<select>` control for match modes                                           |
| `matchThreshold` | each `<input>` for match thresholds                                               |
| `operators`      | each `<select>` control for selecting an operator                                 |
| `value`          | each `<input>` for entering a value                                               |
| `removeRule`     | each `<button>` that removes a rule                                               |
| `shiftActions`   | each `<span>` wrapping the up/down controls for shifting rules/groups             |
| `dragHandle`     | each `<span>` acting as a drag handle                                             |
| `valueSource`    | each `<select>` control for selecting a value source                              |
| `actionElement`  | each `<button>` control                                                           |
| `valueSelector`  | each `<select>` control                                                           |
| `betweenRules`   | inline combinator elements                                                        |
| `valid`          | valid rules and groups                                                            |
| `invalid`        | invalid rules and groups                                                          |
| `dndDragging`    | rules and groups while being dragged                                              |
| `dndOver`        | rules and groups hovered over by a dragged element                                |
| `dndCopy`        | rules and groups hovered over by a dragged element when the drop effect is "copy" |
| `dndGroup`       | rules and groups hovered over by a dragged element when the `Ctrl` key is pressed |
| `disabled`       | disabled elements                                                                 |
| `valueListItem`  | each element in a series of value editors                                         |
| `branches`       | (not applied, but see [Styling overview](/docs/styling/overview.md#branch-lines)) |
| `hasSubQuery`    | rules that render a subquery                                                      |
| `loading`        | [async value selectors](/docs/tips/async-option-lists.md) during "loading" state  |

### `controlElements`[​](#controlelements "Direct link to controlelements")

`Partial<Controls>`

See [`controlElements`](/docs/components/querybuilder-controlelements.md) for a list of all control elements and their props.

### `getOperators`[​](#getoperators "Direct link to getoperators")

`(field: string, misc: { fieldData: Field }) => OptionList<Operator> | null`

Returns allowed operators for the given `field`. Returning `null` uses the [operators](#operators) prop (or defaults).

`fieldData` provides the complete `Field` object for accessing custom properties.

For more information about option list props like `operators`, see [Working with option lists](/docs/tips/option-lists.md).

### `getValueEditorType`[​](#getvalueeditortype "Direct link to getvalueeditortype")

`(field: string, operator: string, misc: { fieldData: Field }) => ValueEditorType`

Returns the [`ValueEditor`](/docs/components/valueeditor.md) type for the given `field` and `operator`. Options: `"text"` (default), `"select"`, `"multiselect"`, `"checkbox"`, `"radio"`, `"textarea"`, `"switch"`.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getValueSources`[​](#getvaluesources "Direct link to getvaluesources")

`(field: string, operator: string, misc: { fieldData: Field }) => ValueSources | ValueSourceFullOptions`;

Returns allowed value sources for a given `field` and `operator`. Must return array with `"value"`, `"field"`, or both. Array elements can be `FlexibleOption` objects with `name`/`value` of `"value"` or `"field"`.

Defaults to `() => ["value"]`. First array element becomes the initial selection.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getValueEditorSeparator`[​](#getvalueeditorseparator "Direct link to getvalueeditorseparator")

`(field: string, operator: string, misc: { fieldData: Field }) => ReactNode`;

Returns separator element between multiple value editors (e.g., for "between" operator). Can return any React element, including strings ("and", "to") or HTML elements.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getInputType`[​](#getinputtype "Direct link to getinputtype")

`(field: string, operator: string, misc: { fieldData: Field }) => string`

Returns the `type` attribute for `<input />` elements. Only applies when [`getValueEditorType`](#getvalueeditortype) returns `"text"` or falsy. Defaults to `"text"`.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getValues`[​](#getvalues "Direct link to getvalues")

`(field: string, operator: string, misc: { fieldData: Field }) => OptionList`

Returns allowed values for the given `field` and `operator`. Only applies when [`getValueEditorType`](#getvalueeditortype) returns `"select"`, `"multiselect"`, or `"radio"`. Defaults to empty array.

`fieldData` provides the complete `Field` object for accessing custom properties.

For more information about option list props, see [Working with option lists](/docs/tips/option-lists.md).

### `getMatchModes`[​](#getmatchmodes "Direct link to getmatchmodes")

`(field: string, misc: { fieldData: Field }) => boolean | MatchMode[] | FlexibleOption<MatchMode>[]`

Returns valid `MatchMode`s for a field. Must return `MatchMode[]`, `Option<MatchMode>[]`, or `boolean`. `true` allows all match modes; other values disable match modes.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getSubQueryBuilderProps`[​](#getsubquerybuilderprops "Direct link to getsubquerybuilderprops")

`(field: string, misc: { fieldData: Field }) => QueryBuilderProps`

Returns props for subqueries (see [Subqueries](/docs/tips/subqueries.md)) to override parent query builder props. Props like `query`, `onQueryChange`, and `enableDragAndDrop` are ignored for subqueries.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getDefaultField`[​](#getdefaultfield "Direct link to getdefaultfield")

`string | ((fieldsData: OptionList<Field>) => string)`

Default `field` for new rules. Accepts field `name` string or function returning field `name` based on `fields` prop.

### `getDefaultOperator`[​](#getdefaultoperator "Direct link to getdefaultoperator")

`string | ((field: string, misc: { fieldData: Field }) => string)`

Default `operator` for new rules. Accepts operator `name` string or function returning operator `name`.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getDefaultValue`[​](#getdefaultvalue "Direct link to getdefaultvalue")

`(rule: RuleType, misc: { fieldData: Field }) => any`

Returns default `value` for new rules based on existing rule properties.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getRuleClassname`[​](#getruleclassname "Direct link to getruleclassname")

`(rule: RuleType, misc: { fieldData: Field }) => Classname`

Generates custom classes for rule outer `div` based on rule properties.

`fieldData` provides the complete `Field` object for accessing custom properties.

### `getRuleGroupClassname`[​](#getrulegroupclassname "Direct link to getrulegroupclassname")

`(ruleGroup: RuleGroupTypeAny) => Classname`

Generates custom classes for group outer `div` based on group properties.

### `onAddRule`[​](#onaddrule "Direct link to onaddrule")

`(rule: RuleType, parentPath: Path, query: RuleGroupTypeAny, context?: any) => RuleType | false`

Called before adding a new rule. Return modified `RuleType` object to proceed, or `false` to cancel. Use [`findPath`](/docs/utils/misc.md#findpath) to locate the parent group. The `context` parameter passes data from custom [`addRuleAction`](/docs/components/querybuilder-controlelements.md#addruleaction) components.

For [independent combinators](#independent-combinators), add `combinatorPreceding` property to specify the combinator before the new rule. Otherwise uses the last rule's combinator or first default combinator.

tip

To [prevent adding new rules](/docs/tips/limit-groups.md), use `controlElements={{ addRuleAction: null }}` to hide the "+ Rule" button.

### `onAddGroup`[​](#onaddgroup "Direct link to onaddgroup")

`<RG extends RuleGroupTypeAny>(ruleGroup: RG, parentPath: Path, query: RG, context?: any) => RG | false`

Called before adding a new group. Return modified group object (same type: `RuleGroupType` or `RuleGroupTypeIC`) to proceed, or `false` to cancel. Use [`findPath`](/docs/utils/misc.md#findpath) to locate the parent group. The `context` parameter passes data from custom [`addGroupAction`](/docs/components/querybuilder-controlelements.md#addgroupaction) components.

For [independent combinators](#independent-combinators), add `combinatorPreceding` property to specify the combinator before the new group. Otherwise uses the last rule's combinator or first default combinator.

tip

To [prevent adding new groups](/docs/tips/limit-groups.md), use `controlElements={{ addGroupAction: null }}` to hide the "+ Group" button.

### `onMoveRule`[​](#onmoverule "Direct link to onmoverule")

```
<RG extends RuleGroupTypeAny>(

  rule: RuleType,

  fromPath: Path,

  toPath: Path | 'up' | 'down',

  query: RG,

  nextQuery: RG,

  options: MoveOptions,

  context?: any

) => RG | boolean;
```

Called before a rule is moved or shifted. Return:

1. `true` - Allow the move/shift
2. `false` - Cancel the move/shift
3. New query object (based on `query` or `nextQuery` parameters)

### `onMoveGroup`[​](#onmovegroup "Direct link to onmovegroup")

```
<RG extends RuleGroupTypeAny>(

  ruleGroup: RG,

  fromPath: Path,

  toPath: Path | 'up' | 'down',

  query: RG,

  nextQuery: RG,

  options: MoveOptions,

  context?: any

) => RG | boolean;
```

Called before a group is moved or shifted. Return:

1. `true` - Allow the move/shift
2. `false` - Cancel the move/shift
3. New query object (based on `query` or `nextQuery` parameters)

### `onRemove`[​](#onremove "Direct link to onremove")

`<RG extends RuleGroupTypeAny>(ruleOrGroup: RG | RuleType, path: Path, query: RG, context?: any) => boolean`

Called before removing a rule or group. Return `true` to proceed or `false` to abort removal.

### `translations`[​](#translations "Direct link to translations")

`Partial<Translations>`

Provides internationalization (i18n) support by overriding translatable texts for specific locales.

All object keys and properties are optional. The `translations` object deep-merges with defaults below. Default placeholder names are `"~"` and labels are `"------"`.

```
export const defaultTranslations: BaseTranslationsFull = {

  fields: {

    title: 'Field',

    placeholderName: defaultPlaceholderFieldName,

    placeholderLabel: defaultPlaceholderFieldLabel,

    placeholderGroupLabel: defaultPlaceholderFieldGroupLabel,

  } as const,

  operators: {

    title: 'Operator',

    placeholderName: defaultPlaceholderOperatorName,

    placeholderLabel: defaultPlaceholderOperatorLabel,

    placeholderGroupLabel: defaultPlaceholderOperatorGroupLabel,

  } as const,

  values: {

    title: 'Values',

    placeholderName: defaultPlaceholderValueName,

    placeholderLabel: defaultPlaceholderValueLabel,

    placeholderGroupLabel: defaultPlaceholderValueGroupLabel,

  } as const,

  matchMode: { title: 'Match mode' } as const,

  matchThreshold: { title: 'Match threshold', placeholderName: '#' } as const,

  value: { title: 'Value' } as const,

  removeRule: { label: '⨯', title: 'Remove rule' } as const,

  removeGroup: { label: '⨯', title: 'Remove group' } as const,

  addRule: { label: '+ Rule', title: 'Add rule' } as const,

  addGroup: { label: '+ Group', title: 'Add group' } as const,

  combinators: { title: 'Combinator' } as const,

  notToggle: { label: 'Not', title: 'Invert this group' } as const,

  cloneRule: { label: '⧉', title: 'Clone rule' } as const,

  cloneRuleGroup: { label: '⧉', title: 'Clone group' } as const,

  shiftActionUp: { label: '˄', title: 'Shift up' } as const,

  shiftActionDown: { label: '˅', title: 'Shift down' } as const,

  dragHandle: { label: '⁞⁞', title: 'Drag handle' } as const,

  lockRule: { label: '🔓', title: 'Lock rule' } as const,

  lockGroup: { label: '🔓', title: 'Lock group' } as const,

  lockRuleDisabled: { label: '🔒', title: 'Unlock rule' } as const,

  lockGroupDisabled: { label: '🔒', title: 'Unlock group' } as const,

  muteRule: { label: '🔊', title: 'Mute rule' } as const,

  muteGroup: { label: '🔊', title: 'Mute group' } as const,

  unmuteRule: { label: '🔇', title: 'Unmute rule' } as const,

  unmuteGroup: { label: '🔇', title: 'Unmute group' } as const,

  valueSourceSelector: { title: 'Value source' } as const,

} satisfies BaseTranslationsFull;
```

> *Source: [/packages/core/src/defaults.ts#L89-L131](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/defaults.ts#L89-L131)*

### `showCombinatorsBetweenRules`[​](#showcombinatorsbetweenrules "Direct link to showcombinatorsbetweenrules")

`boolean` (default `false`) *[Click here for demo](/demo#showCombinatorsBetweenRules=true)*

Renders combinator selectors between child rules/groups instead of in the group header, encouraging more natural query reading.

The `combinator` property remains group-level—inline selectors update all combinators within the same group. For independently managed inline combinators, use [independent combinators](#independent-combinators).

### `showNotToggle`[​](#shownottoggle "Direct link to shownottoggle")

`boolean` (default `false`) *[Click here for demo](/demo#showNotToggle=true)*

Displays "Not" (inversion) toggle switch for each rule group.

### `showCloneButtons`[​](#showclonebuttons "Direct link to showclonebuttons")

`boolean` (default `false`) *[Click here for demo](/demo#showCloneButtons=true)*

Displays "clone" button on each group header and rule. Clicking creates an exact duplicate (with new `id`) positioned immediately after the original.

### `showLockButtons`[​](#showlockbuttons "Direct link to showlockbuttons")

`boolean` (default `false`) *[Click here for demo](/demo#showLockButtons=true)*

Displays "Lock rule" and "Lock group" buttons. Locked rules disable all elements except the lock button. Locked groups disable header elements (except lock button) and all child elements (including child lock buttons).

### `showMuteButtons`[​](#showmutebuttons "Direct link to showmutebuttons")

`boolean` (default `false`) *[Click here for demo](/demo#showMuteButtons=true)*

Displays "Mute rule" and "Mute group" buttons. By default, the `muted` property only affects `formatQuery`, which will ignore muted rules and groups (similar to "invalid" rules/groups).

### `showShiftActions`[​](#showshiftactions "Direct link to showshiftactions")

`boolean` (default `false`) *[Click here for demo](/demo#showShiftActions=true)*

Displays "shift up"/"shift down" buttons at the front of each rule and group (except root), stacked vertically by default. Upper button shifts up one position, lower button shifts down. Configure button labels via `translations.shiftActionUp` and `translations.shiftActionDown`.

### `resetOnFieldChange`[​](#resetonfieldchange "Direct link to resetonfieldchange")

`boolean` (default `true`) *[Click here for demo with this feature disabled](/demo#resetOnFieldChange=false)*

Pass `false` to preserve `operator` and `value` when `field` changes.

### `resetOnOperatorChange`[​](#resetonoperatorchange "Direct link to resetonoperatorchange")

`boolean` (default `false`) *[Click here for demo](/demo#resetOnOperatorChange=true)*

Resets `value` when `operator` changes.

### `enableMountQueryChange`[​](#enablemountquerychange "Direct link to enablemountquerychange")

`boolean` (default `true`)

Pass `false` to disable `onQueryChange` on initial mount. Enabled by default because `query`/`defaultQuery` props are processed during first render and may differ from input (e.g., generated `id`s).

### `autoSelectField`[​](#autoselectfield "Direct link to autoselectfield")

`boolean` (default `true`) *[Click here for demo with this feature disabled](/demo#autoSelectField=false)*

Pass `false` to add an "empty" option (value `"~"`, label `"------"`) as first element in `fields` array. This becomes the initial selection for new rules. Empty field selection hides operator selector and value components. Customize via [`translations.fields.placeholder*`](#translations).

### `autoSelectOperator`[​](#autoselectoperator "Direct link to autoselectoperator")

`boolean` (default `true`) *[Click here for demo with this feature disabled](/demo#autoSelectOperator=false)*

Pass `false` to add an "empty" option (value `"~"`, label `"------"`) as first element in `operators` array. This becomes the initial selection for new rules. Empty operator selection hides value components. Customize via [`translations.operators.placeholder*`](#translations).

### `autoSelectValue`[​](#autoselectvalue "Direct link to autoselectvalue")

`boolean` (default `true`) *[Click here for demo with this feature disabled](/demo#autoSelectValue=false)*

Pass `false` to add an "empty" option (value `"~"`, label `"------"`) as first element in `values` array. This becomes the initial selection for rules with select list value editors. Customize via [`translations.values.placeholder*`](#translations).

### `addRuleToNewGroups`[​](#addruletonewgroups "Direct link to addruletonewgroups")

`boolean` (default `false`) *[Click here for demo](/demo#addRuleToNewGroups=true)*

Automatically adds a rule to new groups. When no `query`/`defaultQuery` prop is provided, adds a rule to the root group on mount. Groups with empty `rules` arrays don't receive automatic rules.

### `listsAsArrays`[​](#listsasarrays "Direct link to listsasarrays")

`boolean` (default `false`) *[Click here for demo](/demo#listsAsArrays=true)*

Updates rule values representing lists with proper arrays instead of comma-separated strings. Applies when `valueEditorType` is `"multiselect"` or `operator` is `"between"`, `"notBetween"`, `"in"`, or `"notIn"`.

For example, the default behavior for the "between" operator might produce this rule:

```
{

  "field": "f1",

  "operator": "between",

  "value": "f2,f3",

  "valueSource": "field"

}
```

When `listsAsArrays` is true, the rule's `value` will be an array:

```
{

  "field": "f1",

  "operator": "between",

  "value": ["f2", "f3"],

  "valueSource": "field"

}
```

### `parseNumbers`[​](#parsenumbers "Direct link to parsenumbers")

`boolean | "enhanced" | "enhanced-limited" | "native" | "native-limited" | "strict" | "strict-limited"` (default `false`) *[Click here for demo](/demo#parseNumbers=true)*

Sets `value` type as `number` instead of `string` when possible. See [Number parsing](/docs/utils/misc.md#number-parsing) and [formatQuery option](/docs/utils/export.md#parse-numbers).

info

Implemented in [`ValueEditor`](/docs/components/valueeditor.md), not `QueryBuilder`. Custom value editors receive this prop but must implement the behavior themselves.

### `enableDragAndDrop`[​](#enabledraganddrop "Direct link to enabledraganddrop")

`boolean` (default `false`) *[Click here for demo](/demo#enableDragAndDrop=true)*

caution

No need to set this prop directly—it only works when:

1. `QueryBuilderDnD` context provider from [`@react-querybuilder/dnd`](https://www.npmjs.com/package/@react-querybuilder/dnd) exists higher in the component tree
2. [`react-dnd`](https://www.npmjs.com/package/react-dnd) and [`react-dnd-html5-backend`](https://www.npmjs.com/package/react-dnd-html5-backend) are installed

When conditions are met and `enableDragAndDrop` isn't explicitly `false`, it becomes implicitly `true`.

When `true`, displays a [drag handle](/docs/components/draghandle.md) on the left side of each group header and rule for visual reordering.

#### Recommended usage[​](#recommended-usage "Direct link to Recommended usage")

```
npm i react-querybuilder @react-querybuilder/dnd react-dnd react-dnd-html5-backend

# OR yarn add / pnpm add / bun add
```

```
import { QueryBuilderDnD } from '@react-querybuilder/dnd';

import * as ReactDnD from 'react-dnd';

import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';

import { QueryBuilder } from 'react-querybuilder';



const App = () => (

  <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>

    <QueryBuilder />

  </QueryBuilderDnD>

);
```

tip

If your app already uses [`react-dnd`](https://react-dnd.github.io/react-dnd/), use `QueryBuilderDndWithoutProvider` instead of `QueryBuilderDnD`. Both are functionally equivalent, but the former assumes an existing `<DndProvider />` higher in the tree. The latter renders its own `DndProvider`, causing conflicts with pre-existing ones (error: "Cannot have two HTML5 backends at the same time").

### `disabled`[​](#disabled "Direct link to disabled")

`boolean | Path[]` (default `false`) *[Click here for demo](/demo#disabled=true)*

Pass `true` to disable all subcomponents and prevent query changes. Pass path array to disable specific rules/groups. Example: `disabled={[[0]]}` disables the top-most rule/group and its subcomponents only.

### `suppressStandardClassnames`[​](#suppressstandardclassnames "Direct link to suppressstandardclassnames")

`boolean` (default `false`) *[Click here for demo](/demo#suppressStandardClassnames=true)*

Disables standard classnames, including conditional and event-based classes for validation, drag-and-drop, etc.

### `debugMode`[​](#debugmode "Direct link to debugmode")

`boolean` (default `false`) *[Click here for demo](/demo#debugMode=true)*

Enables debug logging with the [`onLog` function](#onlog).

### `onLog`[​](#onlog "Direct link to onlog")

`(message: any) => void` (default `console.log`)

Receives logging messages when [`debugMode`](#debugmode) is enabled.

### `idGenerator`[​](#idgenerator "Direct link to idgenerator")

`() => string` (default `generateID`)

Generates `id`s for rules and groups without them, or clones needing new `id`s. Default generates valid v4 UUIDs per [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122) using `crypto` package or `Math.random()` fallback.

### `accessibleDescriptionGenerator`[​](#accessibledescriptiongenerator "Direct link to accessibledescriptiongenerator")

`(props: { path: Path; qbId: string; }) => string` (default `generateAccessibleDescription`)

Generates `title` attribute for each rule group's outermost `<div>`. For accessibility, output should be meaningful, descriptive, and unique within the page.

### `maxLevels`[​](#maxlevels "Direct link to maxlevels")

`number` (default `Infinity`)

Limits query nesting levels. Adding groups beyond this limit gets ignored. Useful for preventing overly complex queries.

### `validator`[​](#validator "Direct link to validator")

`QueryValidator` *[Click here for demo](/demo#validateQuery=true)*

Executed on each render. Return boolean (`true` = valid, `false` = invalid) or object with rule/group `id`s as keys. Object values can be boolean or `{ valid: boolean, reasons?: array }`. The validation object gets passed to rule/group components. See [validation documentation](/docs/utils/validation.md).

## Independent combinators[​](#independent-combinators "Direct link to Independent combinators")

Props specifying `RuleGroupTypeAny` are inferred as [`RuleGroupType` or `RuleGroupTypeIC`](/docs/typescript.md#rules-and-groups). `RuleGroupTypeIC` queries use "independent combinators."

This places combinator values between each neighboring rule/group pair (every odd-numbered index). Similar to [`showCombinatorsBetweenRules`](#showcombinatorsbetweenrules), but each combinator is independently controlled. Users often find this more natural as it mirrors natural language query expression.

A standard query (`RuleGroupType`) might look like this:

```
const query: RuleGroupType = {

  combinator: 'and',

  rules: [

    { field: 'f1', operator: '=', value: 'v1' },

    { field: 'f2', operator: '=', value: 'v2' },

  ],

};
```

The same query using independent combinators would look like this:

```
const query: RuleGroupTypeIC = {

  rules: [

    { field: 'f1', operator: '=', value: 'v1' },

    'and',

    { field: 'f2', operator: '=', value: 'v2' },

  ],

};
```

Click [here](/demo#independentCombinators=true) to load the demo with a query using independent combinators.
