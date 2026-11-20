# Miscellaneous

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

A partial list of exports from `react-querybuilder`.

## Utilities

### `transformQuery`

```ts
function transformQuery(query: RuleGroupTypeAny, options: QueryTransformerOptions): any;
```

This function recursively processes a query object (`RuleGroupType` or `RuleGroupTypeIC`), passing each `RuleType` object to a provided `ruleProcessor` function. Available options include:

* `ruleProcessor`: Custom processing function for each rule.
* `ruleGroupProcessor`: Custom processing function for each rule group. Each group's `rules` property is retained and recursively processed regardless of other mutations.
* `propertyMap`: Keys in rule or group objects that match keys in this object are renamed to the corresponding value.
* `combinatorMap`: Translates combinators; for example, `{and: "&&", or: "||"}` would convert "and"/"or" combinators to "&&"/"||", respectively.
* `operatorMap`: Converts operators that match keys in this object to corresponding values, e.g., `{"=": "=="}`.
* `deleteRemappedProperties`: Defaults to `true`; pass `false` to retain both remapped properties *and* original properties in the resulting object.

See the [test suite](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/utils/transformQuery.test.ts) for example usage.

### `defaultValidator`

```ts
function defaultValidator(query: RuleGroupTypeAny): {
  [id: string]: { valid: boolean; reasons?: string[] };
};
```

Pass `validator={defaultValidator}` to automatically validate groups (rules are ignored). A group is marked invalid when either of these conditions are true:

1. The group has no child rules or groups (`query.rules.length === 0`)
2. The group has a missing/invalid `combinator` property and more than one child rule or group (`rules.length >= 2`)

You can see the default validator in action in the [demo](/demo) by checking the ['Use validation' option](/demo#validateQuery=true). Empty groups display bold text on their "+ Rule" button and a description where rules normally appear.

### `findPath`

```ts
function findPath(path: Path, query: RuleGroupTypeAny): RuleType | RuleGroupTypeAny | null;
```

`findPath` finds the rule or group within the query hierarchy that has a given `path`. This is useful in custom [`onAddRule`](/docs/components/querybuilder.md#onaddrule) and [`onAddGroup`](/docs/components/querybuilder.md#onaddgroup) functions.

More extensive documentation on the `path` property is [here](/docs/tips/path.md).

### `findID`

```ts
function findID(id: string, query: RuleGroupTypeAny): RuleType | RuleGroupTypeAny | null;
```

`findID` finds the rule or group within the query hierarchy that has a given `id`.

### `convertQuery`

```ts
function convertQuery(query: RuleGroupType): RuleGroupTypeIC;
// OR
function convertQuery(query: RuleGroupTypeIC): RuleGroupType;
```

`convertQuery` toggles a query between the conventional `RuleGroupType` structure (with combinators at the group level) and the "independent combinators" structure `RuleGroupTypeIC` (with combinators between every other rule/group).

`convertToIC` and `convertFromIC` perform the same function as `convertQuery` but only in the directions indicated by their names.

### `toArray`

```ts
function toArray(
  a: unknown,
  options?: { retainEmptyStrings?: boolean; splitChar?: string }
): unknown[];
```

Converts a value to an array. Strings are split by `splitChar` (default `","`; escaped separators are respected, see `splitBy`) and each element is trimmed. Arrays are returned with string elements trimmed. Empty (or whitespace-only) strings from splitting are removed unless `retainEmptyStrings` is `true`. Numbers are wrapped in an array; other values return an empty array.

```ts
toArray('a, b, ,c'); // ['a', 'b', 'c']
toArray('a | b', { splitChar: '|' }); // ['a', 'b']
toArray('a,,b', { retainEmptyStrings: true }); // ['a', '', 'b']
```

### `getDatatypeCategory`

```ts
function getDatatypeCategory(
  fieldData: FullField,
  options?: { datatypeMap?: DatatypeCategoryMap; hints?: boolean }
): FieldDatatypeCategory | FieldDatatypeCategory[] | null;
```

Normalizes a field's `datatype` (and, unless `hints` is `false`, other properties like `inputType` and `valueEditorType`) to a [datatype category](/docs/typescript.md#data-types). Returns an array for multi-type fields (e.g. `"string|number"`) and `null` when the category can't be determined. `datatypeMap` maps custom raw types to categories (case-insensitive; checked before built-in rules).

```ts
getDatatypeCategory({ name: 'f', value: 'f', label: 'F', datatype: 'VARCHAR(50)' }); // 'string'
getDatatypeCategory({ name: 'f', value: 'f', label: 'F', datatype: 'int|text' }); // ['number', 'string']
getDatatypeCategory({ name: 'f', value: 'f', label: 'F', inputType: 'date' }); // 'date'
getDatatypeCategory({ name: 'f', value: 'f', label: 'F', inputType: 'date' }, { hints: false }); // null
```

### `inferOperators`

```ts
function inferOperators(
  fieldData: FullField,
  options?: InferOperatorsOptions
): FlexibleOptionList<FullOperator>;
function getOperatorsByDatatype(options?: InferOperatorsOptions): GetOperatorsFunction;
```

Narrows an operator list based on the field's datatype category. `getOperatorsByDatatype` returns a ready-to-use [`getOperators`](/docs/components/querybuilder.md#getoperators) function. See [Inferring operators from `datatype`](/docs/tips/managing-operators.md#inferring-operators-from-datatype).

### `inferFieldDefaults`

```ts
function inferFieldDefaults<F extends FullField>(
  field: F,
  options?: { datatypeMap?: DatatypeCategoryMap }
): F;
```

Fills absent `inputType`/`valueEditorType` properties based on the field's `datatype` (the inverse of [`inferOperators`](#inferoperators)). Only `datatype` is considered (other properties are not used as hints), and explicit values are never overridden. Returns the same object if nothing was filled, otherwise a shallow copy.

| Category                    | Fills                         |
| --------------------------- | ----------------------------- |
| `number`                    | `inputType: "number"`         |
| `boolean`                   | `valueEditorType: "checkbox"` |
| `date`                      | `inputType: "date"`           |
| `datetime`                  | `inputType: "datetime-local"` |
| `time`                      | `inputType: "time"`           |
| `enum` (with `values`)      | `valueEditorType: "select"`   |
| Others, multi-type, or none | (nothing)                     |

```ts
const fields = rawFields.map(f => inferFieldDefaults(f));
```

Since the [date/time package](/docs/datetime.md) keys off `inputType: "date" | "datetime-local"`, date pickers are enabled automatically for `date`/`datetime` fields.

### `datatypeCategoryComparator`

Ready-made `comparator` for field-to-field comparisons that lists only fields with a compatible datatype category. See [Filtering the field list](/docs/components/valueeditor.md#filtering-the-field-list).

`getDatatypeCategoryComparator(options?)` creates an equivalent comparator with options. Currently the only option is `datatypeMap` (custom raw type → category; see [`getDatatypeCategory`](#getdatatypecategory)). Create it once, outside render:

```ts
const comparator = getDatatypeCategoryComparator({ datatypeMap: { geography: 'object' } });
```

### `datatypeOperatorValidator`

Query validator that checks operators (and optionally values) against each field's datatype category. See [Datatype validation](/docs/utils/validation.md#datatype-validation).

## Number parsing

HTML `<input>` controls store values as strings (even for `type="number"`), but your requirements may call for true numeric values. The [`parseNumbers`](/docs/components/querybuilder.md#parsenumbers) prop on the `QueryBuilder` component and the `formatQuery` function's [`parseNumbers`](/docs/utils/export.md#parse-numbers) option can be used to convert values to numeric types from the UI or during export, respectively. Both configuration options have the same valid values (per the type below) and behave similarly.

`boolean | "enhanced" | "enhanced-limited" | "native" | "native-limited" | "strict" | "strict-limited"`

> *Tip: Try the **`"strict-limited"`** option first.*

* The `"*-limited"` options are equivalent to their non-suffixed counterparts except that numeric parsing is only performed when the value editor's `inputType` is `"number"`.
  * Being based on the `inputType`, the `"*-limited"` suffix can only affect `formatQuery` output when a `fields` array is also provided.
* `true`, `"strict"`, and `"enhanced"` will retain the original value when numeric parsing fails.
* `"enhanced"` and `"native"` can lead to information loss since any trailing invalid characters will be removed.
* `true` and `"strict"` determine numericity using [`numeric-quantity`](https://www.npmjs.com/package/numeric-quantity) with `allowTrailingInvalid: false`. Values must be numeric *in their entirety* to be considered numeric, not just *start* with a number as with `parseFloat`.
* `"enhanced"` uses `numeric-quantity` with `allowTrailingInvalid: true`.
* `"native"` uses JavaScript's native `parseFloat` method, which is similar to the "enhanced" algorithm in that it will strip trailing invalid characters, but it will return `NaN` for non-numeric values instead of the original value.

#### Examples

```ts
const query: RuleGroupType = {
  combinator: 'and',
  not: false,
  rules: [
    { field: 'digits', operator: '=', value: '20' },
    { field: 'age', operator: 'between', value: '26, 52' },
    { field: 'lastName', operator: '=', value: 'Vai' },
  ],
};

// Default configuration - all values are strings:
formatQuery(query, { format: 'sql' });
// "(digits = '20' and age between '26' and '52' and lastName = 'Vai')"

// `parseNumbers: true` - numeric strings converted to actual numbers:
formatQuery(query, { format: 'sql', parseNumbers: true });
// "(digits = 20 and age between 26 and 52 and lastName = 'Vai')"
```

> **More about the "strict" option:** To avoid information loss, the `true` and `"strict*"` options are more strict about what qualifies as "numeric" than [the standard `parseFloat` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat). To oversimplify a bit, `parseFloat` works with any string that *starts* with a numeric sequence, ignoring the rest of the string beginning with the first non-numeric character. In contrast, when `parseNumbers` is `true`, `formatQuery` will only convert a `value` to a `number` if it appears to be numeric *in its entirety* (after trimming whitespace).
>
> Each of the following expressions evaluates to `true`:
>
> ```ts
> // Everything after the '3' is ignored by `parseFloat`
> parseFloat('000123abcdef') === 123;
>
> // `value` contains non-numeric characters, so remains as-is
> formatQuery(
>   { rules: [{ field: 'f', operator: '=', value: '000123abcdef' }] },
>   { format: 'sql', parseNumbers: true }
> ) === "(f = '000123abcdef')";
>
> // `value` is wholly numeric (after trimming whitespace) so it gets converted to a number
> formatQuery(
>   { rules: [{ field: 'f', operator: '=', value: '  000123  ' }] },
>   { format: 'sql', parseNumbers: true }
> ) === '(f = 123)';
> ```

## Defaults

The default configuration objects are exported for convenience, including the following.

* `defaultCombinators` (see [`combinators` prop](/docs/components/querybuilder.md#combinators))
* `defaultOperators` (see [`operators` prop](/docs/components/querybuilder.md#operators))
* `defaultInferOperatorsMap` and `defaultDatatypeOperatorLabels` (see [Inferring operators from `datatype`](/docs/tips/managing-operators.md#inferring-operators-from-datatype))
* `defaultTranslations` (see [`translations` prop](/docs/components/querybuilder.md#translations))
* `defaultValueProcessor` and variants for non-SQL formats (see [Export](/docs/utils/export.md) > [Value processor](/docs/utils/export.md#value-processor))
* `defaultFields` (see [`fields` prop](/docs/components/querybuilder.md#fields))
* `standardClassnames` (see [CSS classes](/docs/styling/classnames.md))

The default components are also exported:

* [`ActionElement`](/docs/components/actionelement.md) - used for action buttons (to add rules, remove groups, etc.)
* [`DragHandle`](/docs/components/draghandle.md) - used for the drag handle on rules and group headers
* [`InlineCombinator`](/docs/components/rulegroup.md) - used when either [`showCombinatorsBetweenRules`](/docs/components/querybuilder.md#showcombinatorsbetweenrules) is `true` or the query is using independent combinators.
* [`NotToggle`](/docs/components/nottoggle.md) - used for the "Invert this group" toggle switch
* [`Rule`](/docs/components/rule.md) - the default rule component
* [`RuleGroup`](/docs/components/rulegroup.md) - the default rule group component
* [`ShiftActions`](/docs/components/shiftactions.md) - used for the "shift up"/"shift down" buttons when [`showShiftActions`](/docs/components/querybuilder.md#showshiftactions) is `true`
* [`ValueEditor`](/docs/components/valueeditor.md) - the default `valueEditor` component
* [`ValueSelector`](/docs/components/valueselector.md) - used for drop-down lists (combinator, field, and operator selectors)
