# External parameter manager

This example wires an external "parameter manager" component to a query builder. The manager owns a user-supplied list of parameters—each with a **name** (like `p1`), an optional **label** (like `Param 1`), and an optional **value**. Its state is passed as the [`getParameters`](/docs/components/querybuilder.md#getparameters) prop, so rules whose [`valueSource`](/docs/components/valueeditor.md#the-parameter-value-source) is `"parameter"` present the managed names in their value editors.

The rendered SQL comes from the [`"parameterized_named"`](/docs/utils/export.md#named-parameters) `formatQuery` export, which registers each referenced parameter as a `params` key with a `null` placeholder. The example merges the manager's values over those placeholders, leaving `null` for parameters without a supplied value.

tip

Parameter names are stored **without** a prefix (e.g. `p1`, not `:p1`); `formatQuery` adds the dialect-appropriate prefix. The merge below strips any prefix from the `params` keys before matching them to the manager's entries.
