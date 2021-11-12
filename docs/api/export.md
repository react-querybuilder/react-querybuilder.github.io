---
title: Export
---

import TypeScriptAdmonition from './_ts_admonition.md'

<TypeScriptAdmonition />

Use the `formatQuery` function to export queries in various formats. The function signature is:

```ts
function formatQuery(
  query: RuleGroupTypeAny,
  options?: ExportFormat | FormatQueryOptions
): string | ParameterizedSQL | ParameterizedNamedSQL;
```

`formatQuery` parses a given query into one of the following formats:

- JSON (with or without `id`s)
- SQL `WHERE` clause
- Parameterized SQL (with anonymous or named parameters)
- MongoDB

:::info

The inversion operator (setting `not: true` for a rule group) is currently unsupported for the MongoDB format, but rules can be created using the `"!="` operator.

:::

For the next few sections, assume the `query` variable has been defined as:

```ts
const query: RuleGroupType = {
  id: 'root',
  combinator: 'and',
  not: false,
  rules: [
    {
      id: 'rule1',
      field: 'firstName',
      value: 'Steve',
      operator: '='
    },
    {
      id: 'rule2',
      field: 'lastName',
      value: 'Vai',
      operator: '='
    }
  ]
};
```

## Basic usage

### JSON

To export the internal query representation like what `react-querybuilder` passes to the `onQueryChange` callback, formatted by `JSON.stringify`, simply pass the query to `formatQuery`:

```ts
formatQuery(query);
// or
formatQuery(query, 'json');
```

The output will be a multi-line string representation of the query using 2 spaces for indentation.

```ts
`{
  "id": "root",
  "combinator": "and",
  "not": false,
  "rules": [
    {
      "id": "rule1",
      "field": "firstName",
      "value": "Steve",
      "operator": "="
    },
    {
      "id": "rule2",
      "field": "lastName",
      "value": "Vai",
      "operator": "="
    }
  ]
}`
```

### JSON without identifiers

To export the internal query representation without formatting (single-line, no indentation) and without the `id` attribute on each object, use the "json_without_ids" format. This is useful if you need to serialize the query for storage.

```ts
formatQuery(query, 'json_without_ids');
```

Output:

```ts
`{"combinator":"and","not":false,"rules":[{"field":"firstName","value":"Steve","operator":"="},{"field":"lastName","value":"Vai","operator":"="}]}`
```

### SQL

`formatQuery` can export SQL compatible with most RDBMS engines. To export a SQL `WHERE` clause, use the "sql" format.

```ts
formatQuery(query, 'sql');
```

Output:

```ts
`(firstName = 'Steve' and lastName = 'Vai')`
```

### Parameterized SQL

To export a SQL `WHERE` clause with bind variables instead of explicit values, use the "parameterized" format. The output is an object with `sql` and `params` attributes.

```ts
formatQuery(query, 'parameterized');
```

Output:

```ts
{
  sql: "(firstName = ? and lastName = ?)",
  params: ["Steve", "Vai"]
}
```

### Named parameters

If anonymous parameters (aka bind variables) are not acceptable, `formatQuery` can output named parameters based on the field names. Use the "parameterized_named" format. The output object is similar to the "parameterized" format, but the `params` attribute is an object instead of an array.

```ts
formatQuery(query, 'parameterized_named');
```

Output:

```ts
{
  sql: "(firstName = :firstName_1 and lastName = :lastName_1)",
  params: {
    firstName_1: "Steve",
    lastName_1: "Vai"
  }
}
```

### MongoDB

For MongoDB-compatible output, use the "mongodb" format.

```ts
formatQuery(query, 'mongodb');
```

Output:

```ts
`{$and:[{firstName:{$eq:"Steve"}},{lastName:{$eq:"Vai"}}]}`
```

## Configuration

An object can be passed as the second argument instead of a string in order to have more detailed control over the output.

### Value processor

If you need to control the way the value portion of the output is processed, you can specify a custom `valueProcessor` (only applicable for "sql" format).

```ts
const query: RuleGroupType = {
  combinator: 'and',
  not: false,
  rules: [
    {
      field: 'instrument',
      value: ['Guitar', 'Vocals'],
      operator: 'in'
    },
    {
      field: 'lastName',
      value: 'Vai',
      operator: '='
    }
  ]
};

const valueProcessor = (field, operator, value) => {
  if (operator === 'in') {
    // Assuming `value` is an array, such as from a multi-select
    return `(${value.map((v) => `"${v.trim()}"`).join(',')})`;
  }
  return defaultValueProcessor(field, operator, value);
};

formatQuery(query, { format: 'sql', valueProcessor });
// Output: "(instrument in ('Guitar','Vocals') and lastName = 'Vai')"
```

### Quote field names

Some database engines wrap field names in backticks. This can be configured with the `quoteFieldNamesWith` option.

```ts
formatQuery(query, { format: "sql", quoteFieldNamesWith: "`" });
// Output: "(`firstName` = 'Steve' and `lastName` = 'Vai')"
```

### Parameter prefix

If the "parameterized_named" format is used, configure the parameter prefix used in the `sql` string with the `paramPrefix` option (should the default ":" be inappropriate).

```ts
const p = formatQuery(query, { format: "parameterized_named", paramPrefix: "$" });
// p.sql === "(firstName = $firstName_1 and lastName = $lastName_1)"
```

### Fallback expression

The `fallbackExpression` is a string that will be part of the output when `formatQuery` can't quite figure out what to do for a particular rule or group. The intent is to maintain valid syntax while (hopefully) not detrimentally affecting the query criteria.

By default, `fallbackExpression` is `"(1 = 1)"` for the "sql", "parameterized", and "parameterized_named" formats, and `"{$and:[{$expr:true}]}"` for the "mongodb" format.

## Validation

The validation options (`validator` and `fields` – see [Validation](./validation) for more information) only affect the output when `format` is "sql", "parameterized", "parameterized_named", or "mongodb". If the `validator` function returns `false`, the `fallbackExpression` will be returned. Otherwise, groups and rules marked as invalid (either by the validation map produced by the `validator` function or the result of the field-based `validator` function) will be ignored.

Example:

```ts
const query: RuleGroupType = {
  id: 'root',
  rules: [
    {
      id: 'r1',
      field: 'firstName',
      value: '',
      operator: '='
    },
    {
      id: 'r2',
      field: 'lastName',
      value: 'Vai',
      operator: '='
    }
  ],
  combinator: 'and',
  not: false
};

// Query is invalid based on the validator function
formatQuery(query, {
  format: 'sql',
  validator: () => false
});
// Output: "(1 = 1)" <-- see `fallbackExpression` option

// Rule "r1" is invalid based on the validation map
formatQuery(query, {
  format: 'sql',
  validator: () => ({ r1: false })
});
// Output: "(lastName = 'Vai')" <-- skipped `firstName` rule with `id === 'r1'`

// Rule "r1" is invalid based on the field validator for `firstName`
formatQuery(query, {
  format: 'sql',
  fields: [{ name: 'firstName', validator: () => false }]
});
// Output: "(lastName = 'Vai')" <-- skipped `firstName` rule because field validator returned `false`
```

### Automatic validation

A basic form of validation will be used by `formatQuery` for the "in", "notIn", "between", and "notBetween" operators when the output format is "sql", "parameterized", "parameterized_named", or "mongodb". This validation is used regardless of the presence of any `validator` options either at the query or field level:

- Rules that specify an "in" or "notIn" `operator` will be deemed invalid if the rule's `value` is neither an array with at least one element (i.e. `value.length > 0`) nor a non-empty string.
- Rules that specify a "between" or "notBetween" `operator` will be deemed invalid if the rule's `value` is neither an array of length two (`value.length === 2`) nor a string with exactly one comma that isn't the first or last character (i.e. `value.split(',').length === 2` and neither element is an empty string).