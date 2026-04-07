# Miscellaneous

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

A partial list of exports from `react-querybuilder`.

## Utilities[​](#utilities "Direct link to Utilities")

### `transformQuery`[​](#transformquery "Direct link to transformquery")

```
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

### `defaultValidator`[​](#defaultvalidator "Direct link to defaultvalidator")

```
function defaultValidator(query: RuleGroupTypeAny): {

  [id: string]: { valid: boolean; reasons?: string[] };

};
```

Pass `validator={defaultValidator}` to automatically validate groups (rules are ignored). A group is marked invalid when either of these conditions are true:

1. The group has no child rules or groups (`query.rules.length === 0`)
2. The group has a missing/invalid `combinator` property and more than one child rule or group (`rules.length >= 2`)

You can see the default validator in action in the [demo](/demo) by checking the ['Use validation' option](/demo#validateQuery=true). Empty groups display bold text on their "+ Rule" button and a description where rules normally appear.

### `findPath`[​](#findpath "Direct link to findpath")

```
function findPath(path: Path, query: RuleGroupTypeAny): RuleType | RuleGroupTypeAny | null;
```

`findPath` finds the rule or group within the query hierarchy that has a given `path`. This is useful in custom [`onAddRule`](/docs/components/querybuilder.md#onaddrule) and [`onAddGroup`](/docs/components/querybuilder.md#onaddgroup) functions.

More extensive documentation on the `path` property is [here](/docs/tips/path.md).

### `findID`[​](#findid "Direct link to findid")

```
function findID(id: string, query: RuleGroupTypeAny): RuleType | RuleGroupTypeAny | null;
```

`findID` finds the rule or group within the query hierarchy that has a given `id`.

### `convertQuery`[​](#convertquery "Direct link to convertquery")

```
function convertQuery(query: RuleGroupType): RuleGroupTypeIC;

// OR

function convertQuery(query: RuleGroupTypeIC): RuleGroupType;
```

`convertQuery` toggles a query between the conventional `RuleGroupType` structure (with combinators at the group level) and the "independent combinators" structure `RuleGroupTypeIC` (with combinators between every other rule/group).

`convertToIC` and `convertFromIC` perform the same function as `convertQuery` but only in the directions indicated by their names.

## Query tools[​](#query-tools "Direct link to Query tools")

Several methods are available to assist with programmatic manipulation of query objects. These methods are used by the `<QueryBuilder />` component itself, so they're guaranteed to achieve the same result as a corresponding UI-based update. Each method returns the modified query.

Check out the ["External controls" Tips & Tricks page](/docs/tips/external-controls.md) to see these methods used outside the `<QueryBuilder />` component context.

### `add`[​](#add "Direct link to add")

`(query: RuleGroupTypeAny, ruleOrGroup: RuleGroupTypeAny | RuleType, parentPathOrID: Path | string, options: AddOptions) => RuleGroupTypeAny`

Adds a rule or group (and an independent combinator if necessary to keep the query valid) to the group at the specified `path` or with the given `id`.

AddOptions

```
export interface AddOptions {

  /**

   * If the query extends `RuleGroupTypeIC` (i.e. the query has independent

   * combinators), then the first combinator in this list will be inserted

   * before the new rule/group if the parent group is not empty. This option

   * is overridden by `combinatorPreceding`.

   */

  combinators?: OptionList;

  /**

   * If the query extends `RuleGroupTypeIC` (i.e. the query has independent

   * combinators), then this combinator will be inserted before the new rule/group

   * if the parent group is not empty. This option will supersede `combinators`.

   */

  combinatorPreceding?: string;

  /**

   * ID generator.

   */

  idGenerator?: () => string;

}
```

> *Source: [/packages/core/src/utils/queryTools.ts#L34-L52](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/utils/queryTools.ts#L34-L52)*

### `remove`[​](#remove "Direct link to remove")

`(query: RuleGroupTypeAny, pathOrID: Path | string) => RuleGroupTypeAny`

Removes a rule or group (and the preceding independent combinator if one exists) at the specified `path` or with the given `id`.

### `update`[​](#update "Direct link to update")

`(query: RuleGroupTypeAny, prop: string, value: any, pathOrID: Path | string, options: UpdateOptions) => RuleGroupTypeAny`

Updates a property of a rule or group, or an independent combinator, at the specified `path` or with the given `id`.

UpdateOptions

```
export interface UpdateOptions {

  /**

   * When updating the `field` of a rule, the rule's `operator`, `value`, and `valueSource`

   * will be reset to their respective defaults. Defaults to `true`.

   */

  resetOnFieldChange?: boolean;

  /**

   * When updating the `operator` of a rule, the rule's `value` and `valueSource`

   * will be reset to their respective defaults. Defaults to `false`.

   */

  resetOnOperatorChange?: boolean;

  /**

   * Determines the default operator name for a given field.

   */

  getRuleDefaultOperator?: (field: string) => string;

  /**

   * Determines the valid value sources for a given field and operator.

   */

  getValueSources?: (field: string, operator: string) => ValueSources | ValueSourceFlexibleOptions;

  /**

   * Gets the default value for a given rule, in case the value needs to be reset.

   */

  // oxlint-disable-next-line typescript/no-explicit-any

  getRuleDefaultValue?: (rule: RuleType) => any;

  /**

   * Determines the valid match modes for a given field.

   */

  getMatchModes?: (field: string) => MatchModeOptions;

}
```

> *Source: [/packages/core/src/utils/queryTools.ts#L122-L150](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/utils/queryTools.ts#L122-L150)*

### `move`[​](#move "Direct link to move")

`(query: RuleGroupTypeAny, oldPathOrID: Path | string, newPath: Path | 'up' | 'down', options: MoveOptions) => RuleGroupTypeAny`

Moves (or clones with a new `id`) a rule or group at the specified `path` or with the given `id` to a new location in the query tree. Using `"up"` or `"down"` as the `newPath` will "shift" the rule or group higher or lower, respectively.

MoveOptions

```
export interface MoveOptions {

  /**

   * When `true`, the source rule/group will not be removed from its original path.

   */

  clone?: boolean;

  /**

   * If the query extends `RuleGroupTypeIC` (i.e. the query is using independent

   * combinators), then the first combinator in this list will be inserted before

   * the rule/group if necessary.

   */

  combinators?: OptionList;

  /**

   * ID generator.

   */

  idGenerator?: () => string;

}
```

> *Source: [/packages/core/src/utils/queryTools.ts#L420-L435](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/utils/queryTools.ts#L420-L435)*

### `insert`[​](#insert "Direct link to insert")

`(query: RuleGroupTypeAny, ruleOrGroup: RuleGroupTypeAny | RuleType, path: Path, options: InsertOptions) => RuleGroupTypeAny`

Inserts a rule or group (and an independent combinator if necessary to keep the query valid) at the specified `path`.

InsertOptions

```
export interface InsertOptions {

  /**

   * If the query extends `RuleGroupTypeIC` (i.e. the query has independent

   * combinators), then the first combinator in this list will be inserted

   * before the new rule/group if the parent group is not empty. This option

   * is overridden by `combinatorPreceding`.

   */

  combinators?: OptionList;

  /**

   * If the query extends `RuleGroupTypeIC` (i.e. the query has independent

   * combinators), then this combinator will be inserted before the new rule/group

   * if the parent group is not empty and the new rule/group is not the first in the

   * group (`path.at(-1) > 0`). This option will supersede `combinators`.

   */

  combinatorPreceding?: string;

  /**

   * If the query extends `RuleGroupTypeIC` (i.e. the query has independent

   * combinators), then this combinator will be inserted after the new rule/group

   * if the parent group is not empty and the new rule/group is the first in the

   * group (`path.at(-1) === 0`). This option will supersede `combinators`.

   */

  combinatorSucceeding?: string;

  /**

   * ID generator.

   *

   * @default generateID

   */

  idGenerator?: () => string;

  /**

   * When `true`, the new rule/group will replace the rule/group at `path`.

   */

  replace?: boolean;

}
```

> *Source: [/packages/core/src/utils/queryTools.ts#L581-L613](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/utils/queryTools.ts#L581-L613)*

### `group`[​](#group "Direct link to group")

`(query: RuleGroupTypeAny, sourcePathOrID: Path | string, targetPathOrID: Path | string, options: GroupOptions) => RuleGroupTypeAny`

Creates a new group at the target `path` (based on the specified `path` or given `id`) containing the existing rule/group at that path and the rule/group at the source path (or with the source `id`), in that order, in its `rules` array.

GroupOptions

```
export interface GroupOptions {

  /**

   * When `true`, the source rule/group will not be removed from its original path.

   */

  clone?: boolean;

  /**

   * If the query extends `RuleGroupTypeIC` (i.e. the query is using independent

   * combinators), then the first combinator in this list will be inserted between

   * the two rules/groups.

   */

  combinators?: OptionList;

  /**

   * ID generator.

   */

  idGenerator?: () => string;

}
```

> *Source: [/packages/core/src/utils/queryTools.ts#L710-L725](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/utils/queryTools.ts#L710-L725)*

## Number parsing[​](#number-parsing "Direct link to Number parsing")

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

#### Examples[​](#examples "Direct link to Examples")

```
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

More about the "strict" option

To avoid information loss, the `true` and `"strict*"` options are more strict about what qualifies as "numeric" than [the standard `parseFloat` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat). To oversimplify a bit, `parseFloat` works with any string that *starts* with a numeric sequence, ignoring the rest of the string beginning with the first non-numeric character. In contrast, when `parseNumbers` is `true`, `formatQuery` will only convert a `value` to a `number` if it appears to be numeric *in its entirety* (after trimming whitespace).

Each of the following expressions evaluates to `true`:

```
// Everything after the '3' is ignored by `parseFloat`

parseFloat('000123abcdef') === 123;



// `value` contains non-numeric characters, so remains as-is

formatQuery(

  { rules: [{ field: 'f', operator: '=', value: '000123abcdef' }] },

  { format: 'sql', parseNumbers: true }

) === "(f = '000123abcdef')";



// `value` is wholly numeric (after trimming whitespace) so it gets converted to a number

formatQuery(

  { rules: [{ field: 'f', operator: '=', value: '  000123  ' }] },

  { format: 'sql', parseNumbers: true }

) === '(f = 123)';
```

## Defaults[​](#defaults "Direct link to Defaults")

The default configuration objects are exported for convenience, including the following.

* `defaultCombinators` (see [`combinators` prop](/docs/components/querybuilder.md#combinators))
* `defaultOperators` (see [`operators` prop](/docs/components/querybuilder.md#operators))
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
