# Migrating from jQuery QueryBuilder

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

This guide covers moving an existing [jQuery QueryBuilder](https://querybuilder.js.org/) (jQQB) implementation to React Query Builder (RQB). For a broader overview, see [Comparison with other libraries](/docs/tips/comparison.md).

RQB's original API was modeled on jQQB, so most concepts map directly. Both libraries store queries as plain JSON with nearly the same structure. Most of the work is renaming properties and operators.

> **Tip:** Not moving to React? Official [Solid, Svelte, and Vue ports](/docs/compat.md#other-frameworks) use the same query format, fields, operators, and import/export utilities, so everything below except the component examples applies to them as well.

## Concept mapping

| jQuery QueryBuilder                         | React Query Builder                                                                                                                                                                                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$('#builder').queryBuilder({ ... })`       | A [`<QueryBuilder />`](/docs/components/querybuilder.md) element                                                                                                                                                                                   |
| `filters`                                   | [`fields`](/docs/tips/managing-fields.md)                                                                                                                                                                                                          |
| `operators` (global)                        | [`operators`](/docs/components/querybuilder.md#operators) / [`getOperators`](/docs/components/querybuilder.md#getoperators)                                                                                                                        |
| `conditions`                                | [`combinators`](/docs/components/querybuilder.md#combinators)                                                                                                                                                                                      |
| `default_condition`                         | `combinator` of the initial query                                                                                                                                                                                                                  |
| `rules` option / `setRules()`               | [`query`](/docs/components/querybuilder.md#query) / [`defaultQuery`](/docs/components/querybuilder.md#defaultquery)                                                                                                                                |
| `getRules()`                                | The query object itself ([`onQueryChange`](/docs/components/querybuilder.md#onquerychange))                                                                                                                                                        |
| `getSQL()` / `getMongo()`                   | [`formatQuery(query, 'sql')`](/docs/utils/export.md) / `formatQuery(query, 'mongodb_query')`                                                                                                                                                       |
| `setRulesFromSQL()` / `setRulesFromMongo()` | [`parseSQL`](/docs/utils/import.md#sql) / [`parseMongoDB`](/docs/utils/import.md#mongodb)                                                                                                                                                          |
| `validate()`                                | [`validator`](/docs/components/querybuilder.md#validator) prop, per-field `validator`, [`defaultValidator`](/docs/utils/validation.md)                                                                                                             |
| `reset()`                                   | Set the query to `{ combinator: 'and', rules: [] }`                                                                                                                                                                                                |
| `templates`, `icons`                        | [`controlElements`](/docs/components/querybuilder.md#controlelements), [`controlClassnames`](/docs/components/querybuilder.md#controlclassnames), [`translations`](/docs/components/querybuilder.md#translations)                                  |
| `lang_code` / `lang` / i18n files           | [`translations`](/docs/components/querybuilder.md#translations)                                                                                                                                                                                    |
| `*.queryBuilder` events                     | [`onQueryChange`](/docs/components/querybuilder.md#onquerychange), [`onAddRule`](/docs/components/querybuilder.md#onaddrule), [`onAddGroup`](/docs/components/querybuilder.md#onaddgroup), [`onRemove`](/docs/components/querybuilder.md#onremove) |
| Rule/group `data`                           | Arbitrary extra properties on rules and groups (preserved as-is)                                                                                                                                                                                   |

## Settings

| jQQB setting                    | RQB equivalent                                                                                                                                                         |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allow_groups: false`           | `maxLevels={0}` (see also [Limiting groups](/docs/tips/limit-groups.md))                                                                                               |
| `allow_groups: <n>`             | [`maxLevels={n}`](/docs/components/querybuilder.md#maxlevels)                                                                                                          |
| `allow_empty`                   | Return `true` from a query-level [`validator`](/docs/components/querybuilder.md#validator) for empty queries (RQB doesn't fail validation on empty queries by default) |
| `default_filter`                | [`getDefaultField`](/docs/components/querybuilder.md#getdefaultfield)                                                                                                  |
| `display_empty_filter: false`   | [`autoSelectField`](/docs/components/querybuilder.md#autoselectfield) (default `true`)                                                                                 |
| `select_placeholder`            | `translations.fields.placeholderLabel`                                                                                                                                 |
| `sort_filters`                  | Sort the `fields` array before passing it in                                                                                                                           |
| `optgroups` / filter `optgroup` | [Option groups](/docs/tips/option-lists.md) in `fields`, `operators`, or `values`                                                                                      |
| `inputs_separator`              | Custom [`valueEditor`](/docs/components/valueeditor.md)                                                                                                                |

## Plugins

| jQQB plugin                                                    | RQB equivalent                                                                                                                      |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `sortable`                                                     | [`@react-querybuilder/dnd`](/docs/dnd.md) with [`enableDragAndDrop`](/docs/components/querybuilder.md#enabledraganddrop)            |
| `not-group`                                                    | [`showNotToggle`](/docs/components/querybuilder.md#shownottoggle)                                                                   |
| `sql-support`                                                  | [`formatQuery`](/docs/utils/export.md) (`sql`, `parameterized`, `parameterized_named`) and [`parseSQL`](/docs/utils/import.md#sql)  |
| `mongodb-support`                                              | [`formatQuery`](/docs/utils/export.md) (`mongodb_query`) and [`parseMongoDB`](/docs/utils/import.md#mongodb)                        |
| `invert`                                                       | No built-in action. Toggle `not` on the group, or write a custom action using [query tools](/docs/utils/query-management.md)        |
| `unique-filter`                                                | Filter the field list in a custom [`fieldSelector`](/docs/components/querybuilder.md#controlelements)                               |
| `change-filters`                                               | Pass a new `fields` array, since props are reactive                                                                                 |
| `filter-description`                                           | Custom [`fieldSelector`](/docs/components/querybuilder.md#controlelements) or field `label`                                         |
| `bt-tooltip-errors`                                            | Validation results are applied as `queryBuilder-valid`/`queryBuilder-invalid` classes and passed to every component as `validation` |
| `bt-checkbox`, `bt-selectpicker`, `chosen-selectpicker`        | A [compatibility package](/docs/compat.md) (e.g. Bootstrap) or a custom [`valueEditor`](/docs/components/valueeditor.md)            |
| Filter `plugin` / `plugin_config` (datepickers, sliders, etc.) | A custom [`valueEditor`](/docs/components/valueeditor.md), or [`@react-querybuilder/datetime`](/docs/datetime.md) for dates         |

## Rendering the component

Before (jQQB)

```html
<div id="builder"></div>
<button id="btn-sql">Get SQL</button>

<script>
  $('#builder').queryBuilder({
    plugins: ['sortable', 'not-group'],
    allow_groups: 2,
    filters: [
      { id: 'name', label: 'Name', type: 'string' },
      {
        id: 'category',
        label: 'Category',
        type: 'integer',
        input: 'select',
        values: { 1: 'Books', 2: 'Movies' },
        operators: ['equal', 'not_equal', 'in', 'not_in'],
      },
      { id: 'price', label: 'Price', type: 'double', validation: { min: 0, step: 0.01 } },
    ],
    rules: {
      condition: 'AND',
      rules: [{ id: 'price', operator: 'less', value: 10.25 }],
    },
  });

  $('#btn-sql').on('click', () => {
    console.log($('#builder').queryBuilder('getSQL', 'question_mark'));
  });
</script>
```

After (RQB)

```tsx
import { useState } from 'react';
import type { Field, RuleGroupType } from 'react-querybuilder';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import { QueryBuilderDnD } from '@react-querybuilder/dnd';
import * as ReactDnD from 'react-dnd';
import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';
import 'react-querybuilder/dist/query-builder.css';

const fields: Field[] = [
  { name: 'name', label: 'Name' },
  {
    name: 'category',
    label: 'Category',
    valueEditorType: 'select',
    values: [
      { name: '1', label: 'Books' },
      { name: '2', label: 'Movies' },
    ],
    operators: [
      { name: '=', label: '=' },
      { name: '!=', label: '!=' },
      { name: 'in', label: 'in' },
      { name: 'notIn', label: 'not in' },
    ],
  },
  {
    name: 'price',
    label: 'Price',
    inputType: 'number',
    validator: ({ value }) => Number(value) >= 0,
  },
];

const initialQuery: RuleGroupType = {
  combinator: 'and',
  rules: [{ field: 'price', operator: '<', value: 10.25 }],
};

export const App = () => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <>
      <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>
        <QueryBuilder
          fields={fields}
          query={query}
          onQueryChange={setQuery}
          showNotToggle
          maxLevels={2}
          parseNumbers="strict-limited"
        />
      </QueryBuilderDnD>
      <pre>{JSON.stringify(formatQuery(query, 'parameterized'), null, 2)}</pre>
    </>
  );
};
```

Notable differences:

* There's no imperative instance. The query is React state, so "get rules" means reading the state and "set rules" means updating it.
* `formatQuery(query, 'parameterized')` returns `{ sql, params }`, like `getSQL('question_mark')`. Use `'parameterized_named'` for named parameters (like `getSQL('named')`) and `'sql'` for inline values (like `getSQL(false)`).
* jQQB's `type: 'integer' | 'double'` makes values numeric. RQB value editors produce strings by default; use [`parseNumbers`](/docs/components/querybuilder.md#parsenumbers) to get numbers.

## Operator mapping

| jQQB                              | RQB                               |
| --------------------------------- | --------------------------------- |
| `equal` / `not_equal`             | `=` / `!=`                        |
| `less` / `less_or_equal`          | `<` / `<=`                        |
| `greater` / `greater_or_equal`    | `>` / `>=`                        |
| `in` / `not_in`                   | `in` / `notIn`                    |
| `between` / `not_between`         | `between` / `notBetween`          |
| `begins_with` / `not_begins_with` | `beginsWith` / `doesNotBeginWith` |
| `contains` / `not_contains`       | `contains` / `doesNotContain`     |
| `ends_with` / `not_ends_with`     | `endsWith` / `doesNotEndWith`     |
| `is_null` / `is_not_null`         | `null` / `notNull`                |
| `is_empty` / `is_not_empty`       | `=` / `!=` with an empty string   |

Custom jQQB operators (`{ type, nb_inputs, multiple, apply_to }`) become RQB operators with an [`arity`](/docs/tips/managing-operators.md) (`'unary'` for `nb_inputs: 0`, `'binary'` for 1, `'ternary'` for 2). You'll also need a [custom rule processor](/docs/utils/export.md#rule-processor) for each export format the operator should support.

## Converting filters and rules

There's no migration package for jQQB, since the conversion is small enough to include in your own code. The utilities below convert jQQB `filters` to RQB `fields` and `getRules()` output to an RQB query. Copy them into your project and adjust as needed.

convertJQQB.ts

```ts
import type { Field, Option, RuleGroupType, RuleType } from 'react-querybuilder';

type JQQBValues =
  | (string | number)[]
  | Record<string, string>
  | Record<string, string>[]
  | { value: string | number; label: string; optgroup?: string }[];

export interface JQQBFilter {
  id: string;
  field?: string;
  label?: string | Record<string, string>;
  type: 'string' | 'integer' | 'double' | 'date' | 'time' | 'datetime' | 'boolean';
  input?:
    | 'text'
    | 'number'
    | 'textarea'
    | 'radio'
    | 'checkbox'
    | 'select'
    | ((...args: unknown[]) => string);
  values?: JQQBValues;
  multiple?: boolean;
  operators?: string[];
  default_operator?: string;
  default_value?: unknown;
  placeholder?: string;
}

export interface JQQBRule {
  id?: string;
  field?: string;
  operator?: string;
  value?: unknown;
  flags?: Record<string, boolean>;
  data?: unknown;
}

export interface JQQBGroup {
  condition?: string;
  not?: boolean;
  rules: (JQQBRule | JQQBGroup)[];
  flags?: Record<string, boolean>;
  data?: unknown;
}

export const operatorMap: Record<string, string> = {
  equal: '=',
  not_equal: '!=',
  less: '<',
  less_or_equal: '<=',
  greater: '>',
  greater_or_equal: '>=',
  in: 'in',
  not_in: 'notIn',
  between: 'between',
  not_between: 'notBetween',
  begins_with: 'beginsWith',
  not_begins_with: 'doesNotBeginWith',
  contains: 'contains',
  not_contains: 'doesNotContain',
  ends_with: 'endsWith',
  not_ends_with: 'doesNotEndWith',
  is_null: 'null',
  is_not_null: 'notNull',
  is_empty: '=',
  is_not_empty: '!=',
};

const inputTypeMap: Partial<Record<JQQBFilter['type'], string>> = {
  integer: 'number',
  double: 'number',
  date: 'date',
  time: 'time',
  datetime: 'datetime-local',
};

const convertValues = (values: JQQBValues): Option[] => {
  if (Array.isArray(values)) {
    return values.flatMap((v): Option[] => {
      if (typeof v !== 'object') return [{ name: `${v}`, label: `${v}` }];
      if ('value' in v && 'label' in v) return [{ name: `${v.value}`, label: `${v.label}` }];
      return Object.entries(v).map(([name, label]) => ({ name, label: `${label}` }));
    });
  }
  return Object.entries(values).map(([name, label]) => ({ name, label }));
};

export const convertJQQBFilters = (filters: JQQBFilter[], lang = 'en'): Field[] =>
  filters.map(f => {
    const field: Field = {
      // jQQB allows several filters per field; RQB field names must be unique
      name: f.id,
      label:
        typeof f.label === 'object' ? (f.label[lang] ?? f.label.en) : (f.label ?? f.field ?? f.id),
    };
    const inputType = inputTypeMap[f.type];
    if (inputType) field.inputType = inputType;
    if (f.input === 'select') field.valueEditorType = f.multiple ? 'multiselect' : 'select';
    else if (f.input === 'radio') field.valueEditorType = 'radio';
    else if (f.input === 'textarea') field.valueEditorType = 'textarea';
    else if (f.input === 'checkbox') field.valueEditorType = f.values ? 'multiselect' : 'checkbox';
    else if (f.type === 'boolean') field.valueEditorType = 'checkbox';
    if (f.values) field.values = convertValues(f.values);
    if (f.operators) {
      field.operators = f.operators.map(op => ({
        name: operatorMap[op] ?? op,
        label: op.replaceAll('_', ' '),
      }));
    }
    if (f.default_operator)
      field.defaultOperator = operatorMap[f.default_operator] ?? f.default_operator;
    if (f.default_value !== undefined) field.defaultValue = f.default_value;
    if (f.placeholder) field.placeholder = f.placeholder;
    return field;
  });

const isGroup = (r: JQQBRule | JQQBGroup): r is JQQBGroup => 'rules' in r && Array.isArray(r.rules);

const isReadonly = (flags?: Record<string, boolean>) =>
  !!flags && (flags.readonly || flags.filter_readonly || flags.condition_readonly);

export const convertJQQBRules = (group: JQQBGroup): RuleGroupType => ({
  combinator: (group.condition ?? 'AND').toLowerCase(),
  ...(group.not ? { not: true } : {}),
  ...(isReadonly(group.flags) ? { disabled: true } : {}),
  ...(group.data === undefined ? {} : { data: group.data }),
  rules: group.rules.map(r => (isGroup(r) ? convertJQQBRules(r) : convertJQQBRule(r))),
});

const convertJQQBRule = (r: JQQBRule): RuleType => {
  const operator = r.operator ?? 'equal';
  const value = operator === 'is_empty' || operator === 'is_not_empty' ? '' : (r.value ?? '');
  return {
    field: r.id ?? r.field ?? '',
    operator: operatorMap[operator] ?? operator,
    value,
    ...(isReadonly(r.flags) ? { disabled: true } : {}),
    ...(r.data === undefined ? {} : { data: r.data }),
  };
};
```

Usage

```ts
import { convertJQQBFilters, convertJQQBRules } from './convertJQQB';

const fields = convertJQQBFilters(jqqbFilters);
const query = convertJQQBRules($('#builder').queryBuilder('getRules', { get_flags: true }));
```

Translation notes:

* **Field identity.** jQQB rules reference a filter by `id`, and several filters can share one `field`. RQB fields are identified by `name`, so the converter uses the jQQB `id`. If your filters use `id` and `field` differently, set each RQB field's [`name`](/docs/tips/managing-fields.md) to the `id` and rename it in exports with a custom [`ruleProcessor`](/docs/utils/export.md#rule-processor).
* **Values.** Multi-value operators (`between`, `in`, `multiple` selects) produce arrays in both libraries, and RQB accepts arrays as is. Pass [`listsAsArrays`](/docs/components/querybuilder.md#listsasarrays) so RQB's value editors also emit arrays instead of comma-separated strings.
* **Flags.** RQB has a single [`disabled`](/docs/components/querybuilder.md#disabled) state. The converter maps `readonly`, `filter_readonly`, and `condition_readonly` to `disabled`. Finer-grained flags (`operator_readonly`, `value_readonly`, `no_delete`, `no_add_rule`, `no_add_group`) need custom [`controlElements`](/docs/components/querybuilder.md#controlelements) that read the rule's properties. Keep the `flags` object on the rule if you need them.
* **`is_empty` / `is_not_empty`.** These become `=` / `!=` with an empty string. If you need a true "empty" check (e.g. `NULL OR ''`), define custom operators.
* **Validation.** jQQB's declarative `validation` (`min`, `max`, `step`, `format`, `allow_empty_value`, `callback`) becomes a per-field [`validator`](/docs/utils/validation.md) function. Number bounds and `step` can also be passed to the value editor via [`inputType`](/docs/tips/managing-fields.md) and custom value editor props.
* **SQL and MongoDB round-trips.** If your queries are stored as SQL or MongoDB rather than jQQB JSON, skip `convertJQQBRules` and use [`parseSQL`](/docs/utils/import.md#sql) or [`parseMongoDB`](/docs/utils/import.md#mongodb) directly.
