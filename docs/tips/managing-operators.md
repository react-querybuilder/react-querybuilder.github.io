# Managing operators

Many React Query Builder implementations need to customize operators based on the selected field type. For example, date fields might use "before" as a more intuitive label than the default `"<"` operator. Number fields could display "less than" for the `<` operator, while text fields might exclude comparison operators entirely.

> **Tip:** For more information about option list props like `operators`, see [Working with option lists](/docs/tips/option-lists.md).

## Field `operators` property

One approach uses the field's `operators` property to specify which operators appear when users select a particular field. However, this method requires defining complete operator lists for each field, potentially creating duplication across fields with similar data types.

## `getOperators` prop

While the field `operators` property works well for individual field customizations, the `getOperators` function prop centralizes all operator logic in one location.

`getOperators` receives two arguments: the field identifier and a meta object containing the complete field definition. Using this information, you can reference the `fields` array (or other data sources) to return appropriate operator lists with custom names and labels.

This example demonstrates field properties for operator management. Each field includes a `datatype` property that determines operator selection and labeling. The `defaultOperators` export provides base functionality where needed. Note that when present, a field's `operators` property overrides `getOperators` results—observe how "Favorite Movie" shows only the "is" operator despite having `datatype: "text"`.

## Inferring operators from `datatype`

The `inferOperators` utility narrows an operator list to those compatible with a field's [datatype category](/docs/typescript.md#data-types). The category comes from `datatype` (raw database types like `"VARCHAR(50)"` or `"timestamp with time zone"` are normalized), falling back to hints from `inputType`, `valueEditorType`, `values`, `matchModes`, and `subproperties`. Fields with no hints are not filtered.

```tsx
import { getOperatorsByDatatype, inferOperators } from 'react-querybuilder';

<QueryBuilder fields={fields} getOperators={(_f, { fieldData }) => inferOperators(fieldData)} />;

// Equivalent; create outside render for a stable reference
const getOperators = getOperatorsByDatatype();
<QueryBuilder fields={fields} getOperators={getOperators} />;
```

The [`inferOperators` prop](/docs/components/querybuilder.md#inferoperators) applies the same logic to the [`operators`](/docs/components/querybuilder.md#operators) prop list without a `getOperators` function. It accepts `true` or the options below (except `operators`), and also works with [`QueryManager`](/docs/utils/query-management.md) (`inferOperators` option). Unlike `getOperators`, a field's own `operators` and an explicit `getOperators` both take precedence over the prop.

```tsx
<QueryBuilder fields={fields} operators={myOperators} inferOperators />
```

Default operators by category (`defaultInferOperatorsMap`):

| Category                                       | Operators                                                                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `string`                                       | `=` `!=` `contains` `beginsWith` `endsWith` `doesNotContain` `doesNotBeginWith` `doesNotEndWith` `in` `notIn` |
| `number`, `bigint`, `date`, `datetime`, `time` | `=` `!=` `<` `<=` `>` `>=` `between` `notBetween` `in` `notIn`                                                |
| `boolean`                                      | `=` `!=`                                                                                                      |
| `enum`                                         | `=` `!=` `in` `notIn`                                                                                         |
| `array`, `object`, `unknown`                   | (not filtered)                                                                                                |

Rules:

* `null`/`notNull` are always retained.
* Only operators named in `defaultOperators` are filtered. Custom operators pass through unless `dropUnknownOperators` is `true`.
* Multi-type fields (`datatype: "string|number"`) get the union of each category's operators. If any member category is unfiltered (`array`/`object`/`unknown`), nothing is filtered.
* Fields with `valueEditorType: "multiselect"` are limited to `in`/`notIn` (plus `null`/`notNull`), since the value is always a list. Fields with any category lacking a `map` entry (by default `array`/`object`/`unknown`) are still not filtered; an explicit entry (e.g. `map: { object: ["in"] }`) enables filtering for that category. Explicit `map` entries for the field's categories narrow the list ops further.
* Option groups and the input order are preserved; empty groups are removed.
* A field's own `operators` property still takes precedence over `getOperators`.

Options:

| Option                 | Description                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `operators`            | Operator list to narrow (default `defaultOperators`)                                                                                 |
| `map`                  | Category → operator names, merged over `defaultInferOperatorsMap` (each category is replaced, not merged)                            |
| `datatypeMap`          | Custom raw datatype → category map (case-insensitive), e.g. `{ geography: "object" }`                                                |
| `dropUnknownOperators` | Remove operators not in `defaultOperators` (default `false`)                                                                         |
| `labels`               | Type-specific operator labels; `true` uses `defaultDatatypeOperatorLabels` (see below)                                               |
| `warn`                 | Development-only `console.warn` when a field's `operators` property lists operators incompatible with its datatype (default `false`) |

```ts
const getOperators = getOperatorsByDatatype({
  operators: myOperators,
  map: { boolean: ['='] },
  datatypeMap: { geography: 'object' },
});
```

### Type-specific labels

With `labels: true`, `defaultDatatypeOperatorLabels` replaces labels for `date`/`datetime`/`time` fields (`<` "before", `<=` "on or before", `>` "after", `>=` "on or after") and `boolean` fields (`=` "is", `!=` "is not"). Pass an object to provide your own (e.g. translated) labels; spread `defaultDatatypeOperatorLabels` to extend the defaults.

```ts
const getOperators = getOperatorsByDatatype({
  labels: { ...defaultDatatypeOperatorLabels, string: { contains: 'includes' } },
});
```

* Lookup order: exact category, then family (`bigint` → `number`, `datetime` → `date`).
* Only labels still equal to the default label are replaced, so explicit custom labels win.
* Multi-type fields keep their original labels.

> **Tip:** To validate existing queries against the same rules (e.g. queries loaded from storage or parsed with `parseSQL`), use [`datatypeOperatorValidator`](/docs/utils/validation.md#datatype-validation).

## Regular expression operators

The `matches` and `doesNotMatch` operators test a field against a regular expression. They are not part of `defaultOperators`; opt in with `defaultOperatorsWithRegex` (or append `defaultRegexOperators` to your own list).

```ts
import { defaultOperatorsWithRegex, type Field } from 'react-querybuilder';

const fields: Field[] = [{ name: 'sku', label: 'SKU', operators: defaultOperatorsWithRegex }];
```

The rule `value` is the pattern string (no slashes), so the default text `ValueEditor` works as-is. Flags go in the optional `regexFlags` rule property:

```json
{ "field": "sku", "operator": "matches", "value": "^AB-\\d+", "regexFlags": "i" }
```

There's no built-in control for `regexFlags`; use a custom `valueEditor` if users need to set flags. `matches` uses unanchored "find" semantics (like `RegExp#test`) in every export format. See [Export > Regular expressions](/docs/utils/export.md#regular-expressions) for per-format output and [Import > Regular expressions](/docs/utils/import.md#regular-expressions) for parser support.
