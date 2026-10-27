# Managing operators

Many React Query Builder implementations need to customize operators based on the selected field type. For example, date fields might use "before" as a more intuitive label than the default `"<"` operator. Number fields could display "less than" for the `<` operator, while text fields might exclude comparison operators entirely.

> **Tip:** For more information about option list props like `operators`, see [Working with option lists](/docs/tips/option-lists.md).

## Field `operators` property

One approach uses the field's `operators` property to specify which operators appear when users select a particular field. However, this method requires defining complete operator lists for each field, potentially creating duplication across fields with similar data types.

## `getOperators` prop

While the field `operators` property works well for individual field customizations, the `getOperators` function prop centralizes all operator logic in one location.

`getOperators` receives two arguments: the field identifier and a meta object containing the complete field definition. Using this information, you can reference the `fields` array (or other data sources) to return appropriate operator lists with custom names and labels.

This example demonstrates custom field properties for operator management. Each field includes a custom `datatype` property that determines operator selection and labeling. The `defaultOperators` export provides base functionality where needed. Note that when present, a field's `operators` property overrides `getOperators` results—observe how "Favorite Movie" shows only the "is" operator despite having `datatype: "text"`.

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
