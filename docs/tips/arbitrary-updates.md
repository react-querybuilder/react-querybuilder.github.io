# Arbitrary updates

Sometimes standard component actions don't meet specific requirements. React Query Builder provides tools to extend or replace the default behavior with custom implementations.

## Multiple action elements[​](#multiple-action-elements "Direct link to Multiple action elements")

The default `addRuleAction` component always creates rules using the default configuration. However, you might need to provide multiple buttons that add rules with different pre-selected fields based on which button is clicked.

This example demonstrates a custom component that renders two buttons in place of the standard `addRuleAction`. Each button corresponds to a specific field. The click handler uses `props.schema.getQuery()` to retrieve the current query and `props.schema.dispatchQuery()` to update the query with the appropriate field selection.

## Custom query properties[​](#custom-query-properties "Direct link to Custom query properties")

While the standard query structure works well, it may not contain all the information you need. You might require additional properties in the query hierarchy and want to manage these properties through custom controls within the query builder. This example adds a `caseSensitive` property to each rule, using a checkbox alongside the default value editor to toggle this setting.

This example also demonstrates how the `caseSensitive` property integrates with a custom [rule processor](/docs/utils/export.md#rule-processor) for `formatQuery`. When `caseSensitive` is false, the processor wraps the field with SQL's `LOWER` function and converts the value to lowercase before passing it to the default rule processor.

The example displays both the generated SQL query and the raw query object below the query builder interface.

> *Related: [Adding and removing query properties](/docs/tips/adding-removing-query-properties.md)*
