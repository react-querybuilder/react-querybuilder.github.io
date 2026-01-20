# Working with option lists

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

Option list props in React Query Builder—such as [`fields`](/docs/components/querybuilder.md#fields), [`combinators`](/docs/components/querybuilder.md#combinators), and [`operators`](/docs/components/querybuilder.md#operators)—use the [`OptionList`](/docs/typescript.md#option-lists) type. `OptionList` is a union type supporting two array formats: `Option[]` and `OptionGroup[]`. While this design provides flexibility, it introduces complexity when consuming option list props in custom subcomponents.

This guide offers strategies for managing the inherent ambiguity in option list TypeScript types.

info

* `Option` objects have `label`, `name`, and `value` properties, all of which extend `string`.
* `OptionGroup` objects have a `label` property along with an `options` property which is an array of `Option` objects.

This mirrors the `children` prop structure of `<select>` elements, which can contain either `<option>` elements directly or `<optgroup>` elements with nested `<option>` lists.

## An incorrect assumption[​](#an-incorrect-assumption "Direct link to An incorrect assumption")

You may have found this page after seeing a TypeScript error message similar to this:

```
Property 'name' does not exist on type 'FullOption<string> | OptionGroup<FullOption<string>>'.
  Property 'name' does not exist on type 'OptionGroup<FullOption<string>>'. ts(2339)
```

This typically occurs when treating option list elements as guaranteed `Option` types. For example, mapping through the list to access the `name` property:

```
const ListAllOptionNames = (props: ValueSelectorProps) => {
  return <div>{props.options.map(opt => opt.name).join(', ')}</div>;
  //                                        ^^^^ error
};
```

While it seems logical that an option list passed to `QueryBuilder` as `Option[]` would remain `Option[]` in subcomponents, React Query Builder's type generics only infer the option types within the list, not the list structure itself.

tip

All options in subcomponent props are guaranteed to include both `name` and `value` properties, even if the original `QueryBuilder` prop omitted one of them.

As an example, consider this `fields` array:

```
const fields: Field[] = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];
```

When this array is assigned to the [`fields` prop](/docs/components/querybuilder.md#fields), the `fieldSelector` component will receive the same array but with each option object augmented with a `value` property equivalent to the original `name`:

```
const MyFieldSelector = (props: FieldSelectorProps) => {
  console.log(props.options); // =>
  // [
  //   { name: 'firstName', value: 'firstName', label: 'First Name' },
  //   { name: 'lastName', value: 'lastName', label: 'Last Name' }],
  // ]
  return <ValueSelector {...props} />;
};

const App = () => (
  <QueryBuilder fields={fields} controlElements={{ fieldSelector: MyFieldSelector }} />
);
```

**If `name` and `value` differ for a given option, `value` takes precedence.**

## Workarounds[​](#workarounds "Direct link to Workarounds")

Several approaches can handle this ambiguity. One option is casting option list props to `Option[]` using the `as` keyword. While this may work if your option list is definitely `Option[]`, the `as` keyword only suppresses TypeScript errors without affecting runtime behavior. This essentially misleads the TypeScript compiler and prevents proper type checking, making it an unrecommended approach.

```
const MyComponent(props: ValueSelectorProps) => {
  return <div>{(props.options as Option[]).map(opt => opt.name).join(', ')}</div>;
  //                          ^^^^^^^^^^^ avoids TypeScript error; may have issues during execution
};
```

info

All [default option lists](/docs/utils/misc.md#defaults) (`defaultCombinators`, `defaultOperators`, etc.) are type `Option[]`.

A better solution uses the [`isOptionGroupArray`](#isoptiongrouparray) type guard to determine the option list type. This approach avoids the deception of type casting while enabling different behaviors for `Option[]` versus `OptionGroup[]` arrays.

```
const MyComponent(props: ValueSelectorProps) => {
  if (isOptionGroupArray(props.options)) {
    return <div>{props.options.flatMap(og => og.options).map(opt => opt.name).join(', ')}</div>;
  }
  return <div>{(props.options).map(opt => opt.name).join(', ')}</div>;
};
```

## Utilities[​](#utilities "Direct link to Utilities")

Several utility functions simplify working with option list props without requiring type guards or `as` casting.

### `getOption`[​](#getoption "Direct link to getoption")

```
function getOption(arr: OptionList, identifier: string): Option;
```

Retrieves the complete option object from an option list using the given identifier (`name` or `value`), working with both `Option[]` and `OptionGroup[]` formats.

#### Examples[​](#examples "Direct link to Examples")

```
getOption(
  [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
  ],
  'lastName'
);
// => { name: 'lastName', label: 'Last Name' }

getOption(
  [
    { label: 'First', options: [{ name: 'firstName', label: 'First Name' }] },
    { label: 'Last', options: [{ name: 'lastName', label: 'Last Name' }] },
  ],
  'lastName'
);
// => { name: 'lastName', label: 'Last Name' }
```

### `getFirstOption`[​](#getfirstoption "Direct link to getfirstoption")

```
function getFirstOption(arr: OptionList): Option;
```

Returns the identifier value (`name` or `value`) of the first `Option` in the list, supporting both `Option[]` and `OptionGroup[]` formats.

`QueryBuilder` uses this function to establish default values for option lists in new rules and groups when no other default determination method is available.

#### Examples[​](#examples-1 "Direct link to Examples")

```
getFirstOption([
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
]);
// => 'firstName'

getFirstOption([
  { label: 'First', options: [{ name: 'firstName', label: 'First Name' }] },
  { label: 'Last', options: [{ name: 'lastName', label: 'Last Name' }] },
]);
// => 'firstName'
```

### `toOptions`[​](#tooptions "Direct link to tooptions")

```
function toOptions(arr: OptionList): ReactElement;
```

Creates `<option>` elements for `Option` arrays or `<optgroup>` elements for `OptionGroup` arrays. Designed for use as the `children` prop of `<select>` elements, as implemented in [`ValueSelector`](/docs/components/valueselector.md).

info

Some of the [compatibility packages](/docs/compat.md) implement their own `toOptions` method that generates "option" elements appropriate for their respective style library.

#### Usage[​](#usage "Direct link to Usage")

```
const MyComponent(props: ValueSelectorProps) => {
  return (
    <select value={props.value} onChange={e => props.handleOnChange(e.target.value)}>
      {toOptions(props.options)}
    </select>
  )
}
```

Examples

#### `Option[]` example[​](#option-example "Direct link to option-example")

```
toOptions([
  { value: 'firstName', label: 'First Name' },
  { value: 'lastName', label: 'Last Name' },
]);
// yields (approximately):
[
  <option key={'firstName'} value={'firstName'}>
    First Name
  </option>,
  <option key={'lastName'} value={'lastName'}>
    Last Name
  </option>,
];
```

#### `OptionGroup[]` example[​](#optiongroup-example "Direct link to optiongroup-example")

```
toOptions([
  { label: 'First', options: [{ value: 'firstName', label: 'First Name' }] },
  { label: 'Last', options: [{ value: 'lastName', label: 'Last Name' }] },
]);
// yields (approximately):
[
  <optgroup key={'First'} label={'First'}>
    <option key={'firstName'} value={'firstName'}>
      First Name
    </option>
  </optgroup>,
  <optgroup key={'Last'} label={'Last'}>
    <option key={'lastName'} value={'lastName'}>
      Last Name
    </option>
  </optgroup>,
];
```

### `toFlatOptionArray`[​](#toflatoptionarray "Direct link to toflatoptionarray")

```
function toFlatOptionArray(arr: any): boolean;
```

Converts `OptionGroup` arrays to flattened `Option` arrays using [`Array.prototype.flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) when grouped structures are unsuitable, while leaving `Option` arrays unchanged. The result is deduplicated using [`uniqByIdentifier`](#uniqbyidentifier).

### `isOptionGroupArray`[​](#isoptiongrouparray "Direct link to isoptiongrouparray")

```
function isOptionGroupArray(arr: any): boolean;
```

A type guard that distinguishes between the two array types in `OptionList`. When this returns `true`, the array is `OptionGroup[]`, meaning actual options are nested within each group's `options` property.

Examples

```
isOptionGroupArray([
  { value: 'firstName', label: 'First Name' },
  { value: 'lastName', label: 'Last Name' },
]);
// => false

isOptionGroupArray([
  { label: 'First', options: [{ value: 'firstName', label: 'First Name' }] },
  { label: 'Last', options: [{ value: 'lastName', label: 'Last Name' }] },
]);
// => true
```

### `uniqOptList`[​](#uniqoptlist "Direct link to uniqoptlist")

```
function uniqOptList(arr: any): boolean;
```

Removes duplicate options from an `OptionList` by comparing identifier properties (`name` or `value`), working with both `Option[]` and `OptionGroup[]` formats.

### `uniqByIdentifier`[​](#uniqbyidentifier "Direct link to uniqbyidentifier")

```
function uniqByIdentifier(arr: any): boolean;
```

Removes duplicate options from an `Option` array by comparing identifier properties (`name` or `value`).

## String option lists[​](#string-option-lists "Direct link to String option lists")

Option list props also accept `string[]`. Each string becomes an option with `name`, `value`, and `label` all set to that string.

```
// These are equivalent:
<QueryBuilder combinators={['and', 'or']} />
<QueryBuilder combinators={[{ name: 'and', label: 'and' }, { name: 'or', label: 'or' }]} />
```

Strings can be mixed with option objects:

```
<QueryBuilder operators={['=', '!=', { name: 'contains', label: 'Contains' }]} />
```

This shorthand is convenient for simple option lists but lacks the flexibility of full option objects, such as custom labels.
