# Comparison with other libraries

The query builder library most often compared to React Query Builder (RQB) is [react-awesome-query-builder](https://github.com/ukrbublik/react-awesome-query-builder) (RAQB). Both render an interactive UI for building filter criteria, and both can export those criteria to several query languages, but they take meaningfully different approaches.

This page summarizes the differences as of RQB v8 and RAQB v6.6.15 (May 2025). If you're moving an existing RAQB implementation to RQB, see [Migrating from react-awesome-query-builder](/docs/tips/migrate-from-raqb.md).

## Philosophy[​](#philosophy "Direct link to Philosophy")

|                 | React Query Builder                                                                      | react-awesome-query-builder                                                      |
| --------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Query storage   | Plain JSON ([`RuleGroupType`](/docs/typescript.md#rules-and-groups)), serializable as-is | [immutable.js](https://immutable-js.com/) tree; plain JSON via `Utils.getTree()` |
| Configuration   | Discrete props (`fields`, `operators`, `combinators`, `controlElements`, etc.)           | One monolithic `Config` object (types, widgets, operators, funcs, settings)      |
| Packaging       | Composable packages — core, React, UI styles, and optional feature packages              | Core package plus UI-specific packages                                           |
| Non-React usage | `@react-querybuilder/core` has no React dependency (server-safe)                         | Core depends on React                                                            |

RQB's plain-JSON query format means you can store queries in a database, send them over the wire, diff them, and hand-edit them without any conversion step. RQB's discrete props mean you only configure (and only bundle) the parts you use.

## Query model[​](#query-model "Direct link to Query model")

| Aspect         | React Query Builder                                                                                                                           | react-awesome-query-builder                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Group children | `rules`                                                                                                                                       | `children1` (array, or keyed object when `children1AsArray: false`) |
| Combinators    | `combinator` on the group, *or* [independent combinators](/docs/components/querybuilder.md#independent-combinators) interleaved between rules | `conjunction` on the group only                                     |
| Negation       | `not` on groups                                                                                                                               | `not` on groups                                                     |
| Rule value     | Scalar or array, depending on the operator                                                                                                    | Always an array (one entry per operand)                             |
| Subqueries     | [Match modes](/docs/tips/subqueries.md) — `all`, `some`, `none`, `atLeast`, `atMost`, `exactly` (with threshold)                              | `!group` fields with `some`/`all`/`none` and count operators        |
| Disabled rules | `disabled`                                                                                                                                    | `isLocked`                                                          |
| Muted rules    | [`muted`](/docs/utils/export.md#muted-rules-and-groups) (kept in the query, excluded from exports)                                            | —                                                                   |
| Ternary/CASE   | —                                                                                                                                             | `switch_group` / `case_group`                                       |
| Value sources  | `value`, `field`, [expressions](/docs/expr.md), [parameters](/docs/tips/parameter-manager.md)                                                 | `value`, `field`, `func`                                            |
| Left-hand side | Expressions supported on the LHS as well as the RHS                                                                                           | `fieldSrc: "func"`                                                  |

## Formats[​](#formats "Direct link to Formats")

RQB's [`formatQuery`](/docs/utils/export.md) supports considerably more export targets, and its [parsers](/docs/utils/import.md) support more import sources.

| Direction | React Query Builder                                                                                                                                                                                       | react-awesome-query-builder                                          |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Export    | JSON, SQL (plain/parameterized/named), MongoDB, CEL, JsonLogic, SpEL, ElasticSearch, JSONata, LDAP, natural language, Drizzle, TanStack DB, Prisma, Sequelize, Cypher, GraphQL, SPARQL, Gremlin, and more | SQL, MongoDB, JsonLogic, SpEL, ElasticSearch (partial), query string |
| Import    | SQL, CEL, JsonLogic, MongoDB, SpEL, JSONata, Cypher, GraphQL, SPARQL, Gremlin, **RAQB**                                                                                                                   | JsonLogic, SpEL, SQL (separate package)                              |

## Ecosystem[​](#ecosystem "Direct link to Ecosystem")

| Aspect               | React Query Builder                                                                           | react-awesome-query-builder                          |
| -------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| UI style packs       | Ant Design, Bootstrap, Bulma, Chakra UI, Fluent UI, Mantine, MUI/Material, PrimeReact, Tremor | Ant Design, MUI, Material (v4), Bootstrap, Fluent UI |
| React Native         | `@react-querybuilder/native`                                                                  | —                                                    |
| Drag-and-drop        | [`@react-querybuilder/dnd`](/docs/dnd.md) (opt-in)                                            | Built in                                             |
| Date/time            | [`@react-querybuilder/datetime`](/docs/datetime.md) (relative dates, per-dialect formatting)  | Built in (widgets and functions)                     |
| Expressions          | [`@react-querybuilder/expr`](/docs/expr.md)                                                   | Built in (config `funcs`)                            |
| Rules engine         | [`@react-querybuilder/rules-engine`](/docs/rules-engine.md)                                   | —                                                    |
| Accessibility        | ARIA attributes, keyboard navigation, `data-testid` hooks                                     | Not documented                                       |
| Internationalization | `translations` prop accepting strings or JSX                                                  | i18next-based locale packs                           |
| Validation           | Per-field `validator` plus [`defaultValidator`](/docs/utils/validation.md)                    | `sanitizeTree` / `validateTree` / `isValidTree`      |
| Styling              | Unstyled by default with CSS custom properties; official style packs                          | Bundled SCSS per UI package                          |

## Feature-by-feature notes[​](#feature-by-feature-notes "Direct link to Feature-by-feature notes")

Most RAQB concepts have a direct RQB counterpart. These are the exceptions:

* **Ternary (`switch_group`)** — RAQB can build CASE/WHEN-style expressions. RQB has no equivalent in the query builder itself; conditional logic is generally modeled with [`@react-querybuilder/rules-engine`](/docs/rules-engine.md) instead.
* **`proximity` operator** — RAQB's full-text proximity operator (and its `operatorOptions`) has no RQB equivalent.
* **`is_empty` / `is_not_empty`** — RQB expresses these as `=` and `!=` against an empty string.
* **Locking** — RQB models this with the `disabled` property rather than a separate `locked` property, but the behavior and UI are equivalent. The [`showLockButtons`](/docs/components/querybuilder.md#showlockbuttons) prop displays "Lock rule"/"Lock group" toggle buttons, which set `disabled` on the rule or group. As in RAQB, a locked group disables its header elements and all descendants. RQB has no equivalent to RAQB's `canDeleteLocked` setting.
* **Date/time functions** — RAQB models `NOW`, `TODAY`, `RELATIVE_DATETIME`, etc. as functions. RQB treats the same concept as a *value*: [`@react-querybuilder/datetime`](/docs/datetime.md) relative date/time values, which each rule processor serializes symbolically (e.g. `current_timestamp - interval '7 days'`).
* **Cardinality operators** — RQB's match modes are a superset of RAQB's `!group` count operators, except that RQB has no strict-inequality modes (RAQB's `less`/`greater` counts).
