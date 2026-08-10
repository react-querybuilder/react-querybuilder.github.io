# External controls

React Query Builder exports the same [query tools](/docs/utils/query-management.md#query-tools) used internally for managing query updates. You can use these functions outside the `<QueryBuilder />` component for greater UI design flexibility while maintaining full query management capabilities.

Both examples below hide the default add/remove buttons and implement external controls above the query builder. The query methods (`add`, `remove`, `update`, and `move`) are called from event handlers, each returning a new query that replaces the current one.

## Uncontrolled component[​](#uncontrolled-component "Direct link to Uncontrolled component")

Give the query builder an explicit [`qbId`](/docs/components/querybuilder.md#qbid) and the external controls can address it by that identifier, reading and updating its query without your component owning the state.

* [`useQueryBuilderSelector`](/docs/utils/hooks.md#usequerybuilderselector) with [`getQuerySelectorById`](/docs/utils/hooks.md#usequerybuilderselector) reads the current query and re-renders the controls whenever it changes—including changes made from within the query builder itself.
* [`getDispatchQueryById`](/docs/utils/hooks.md#getdispatchquerybyid) applies a new query exactly as a user edit would, so `onQueryChange` still fires if you supply it.

Both need access to the internal store, which is why `QueryBuilderStateProvider` wraps the pair. The query builder renders its own provider internally, so this only extends that same store to components *outside* it.

tip

`getDispatchQueryById` returns `undefined` when no query builder with the given `qbId` is mounted, hence the optional call. Calling it from event handlers (rather than capturing it during render) means the controls always dispatch to the currently mounted query builder.

## Controlled component[​](#controlled-component "Direct link to Controlled component")

When your component already owns the query, the same query tools apply—call them from event handlers and assign the result to your state variable to keep everything synchronized.
