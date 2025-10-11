# Maximizing rendering performance

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

TL;DR

Each prop passed to `QueryBuilder` should have a stable reference or be memoized.

Starting with version 7, all `QueryBuilder` props, components, and derived values use aggressive memoization through `React.memo`, `useMemo`, `useCallback`, and immutability tools like [`immer`](https://immerjs.github.io/immer/). These optimizations significantly improve rendering performance for complex queries, particularly when using certain style libraries. To benefit from these optimizations, every prop passed to `QueryBuilder` (except `query`, when used) must maintain a stable reference or be properly memoized. We recommend using `QueryBuilder` as an uncontrolled component (`defaultQuery` instead of `query`) for optimal performance.

## Avoiding common pitfalls[​](#avoiding-common-pitfalls "Direct link to Avoiding common pitfalls")

Prevent unstable references by defining static props (objects, arrays, functions) outside the component render function. This typically applies to the `fields` array and `onQueryChange` callback. For props that must be created within the component, use `useMemo` or `useCallback` for memoization. Most importantly, avoid defining non-primitive props inline within JSX.

* ✓ DO define variables that will remain unchanged outside the component if possible.

* ✓ DO memoize objects, arrays, and other values that must be created and/or calculated within the component with `useMemo`.

* ✓ DO memoize functions that must be created within the component with `useCallback`.

* ⚠ DO NOT define objects, arrays, or functions inline in the JSX prop declarations.

  * This includes subcomponents—see [Custom component as closure](/docs/tips/common-mistakes.md#custom-component-as-closure).
  * Inline assignment of primitives like strings, numbers, and booleans is usually not a problem.

## Exceptions[​](#exceptions "Direct link to Exceptions")

Certain props use more granular memoization. `QueryBuilder` internally memoizes individual properties of objects passed to these props:

* `controlClassnames`
* `controlElements`
* `translations` (even nested properties are memoized individually for `translations`)

## Examples[​](#examples "Direct link to Examples")

### "Bad" example[​](#bad-example "Direct link to \"Bad\" example")

These patterns negatively impact `QueryBuilder` performance:

```
function App() {
  const { t } = useTranslation(); // (<-- third-party i18n library)
  // ⚠ Even though this `useState` call only sets the initial `query` value once, the object
  // itself is still created on every render. This doesn't affect the stability of the reference,
  // but it's probably a good idea to define the object outside the component anyway.
  const [query, setQuery] = useState({ combinator: 'and', rules: [] });

  // ❌ This function is not memoized and will get recreated on each render.
  const getOperators = (field: Field) => t(defaultOperators);

  return (
    <QueryBuilder
      // ⚠ As a controlled component with potential for updates (not disabled), an unstable
      // reference to `query` is unavoidable. This is generally not a problem, but using
      // `defaultQuery` instead of `query` could avoid the issue entirely.
      query={query}
      //
      // ❌ Inline function definition. Also see note below about `useState`/`useReducer`.
      onQueryChange={q => setQuery(q)}
      //
      // ❌ Inline definition of an array that doesn't change over time.
      fields={[
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' },
      ]}
      //
      // This function is not defined inline in the JSX, but it does not have a stable
      // reference since it's recreated on each render (see its declaration above).
      getOperators={getOperators}
      //
      controlElements={{
        // ❌ Component function is defined inline and will be recreated during each render.
        // This can also cause bugs like "input loses focus after each keystroke."
        actionElement: props => <button onClick={props.handleOnClick}>{props.label}</button>,
      }}
    />
  );
}
```

### "Good" example[​](#good-example "Direct link to \"Good\" example")

Use these patterns to optimize `QueryBuilder` performance:

✓

```
// ✅ Fields array that never changes defined outside the component.
const fields: Field[] = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

// ✅ Custom subcomponent defined outside the main component render function.
const MyActionElement = (props: ActionProps) => (
  <button onClick={props.handleOnClick}>{props.label}</button>
);

// ✅ Default query, which is only access once, defined outside the component.
const defaultQuery: RuleGroupType = { combinator: 'and', rules: [] };

function App() {
  const { t } = useTranslation(); // (<-- third-party i18n library)
  // ✅ `useState` parameter (the initial value of `query`) defined outside the component.
  const [query, setQuery] = useState(defaultQuery);

  // ✅ Function defined inside the component memoized with `useCallback`. Since `t`
  // _probably_ has a stable reference, this function will rarely, if ever, be recreated.
  const getOperators = useCallback((field: Field) => t(defaultOperators), [t]);

  return (
    <QueryBuilder
      // ✅ The value passed to `defaultQuery` is only used once, so the stability of
      // its reference is unimportant.
      defaultQuery={query}
      //
      // ✅ `useState` setters and `useReducer` dispatchers always have stable references.
      onQueryChange={setQuery}
      //
      // ✅ `fields` array defined outside the component.
      fields={fields}
      //
      // ✅ Function memoized with `useCallback`.
      getOperators={getOperators}
      //
      // See "Exceptions" section above regarding the following props.
      controlElements={{
        // ✅ Subcomponent defined outside the current component.
        actionElement: MyActionElement,
      }}
      // ✅ `translations` is memoized down to the sub-property level.
      translations={{
        addGroup: {
          label: 'Add Group',
        },
        addRule: {
          label: 'Add Rule',
        },
      }}
    />
  );
}
```
