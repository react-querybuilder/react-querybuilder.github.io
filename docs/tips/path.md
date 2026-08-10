# Path concepts

While the `id` property uniquely identifies rules and groups, it doesn't indicate their position within the query hierarchy. React Query Builder uses a "path" concept to locate and update query objects based on their structural position.

The `path` property is an integer array that uniquely identifies each rule and group's location within a query. The root query group has a `path` of `[]`, while all nested rules and groups have paths reflecting their position within their ancestor groups' `rules` arrays.

Each object's `path` equals its parent group's `path` plus its index within the parent's `rules` array: `path = [...parentPath, index]`.

This example query shows the `path` for each rule and group with explanatory comments:

```
// [] (the root group)

const query: RuleGroupType = {

  combinator: 'and',

  rules: [

    // [0] (the first, aka zeroth, element in the root rules array)

    { field: 'f1', operator: '=', value: 'v1' },

    // [1] (the second element in the root rules array is a sub-group)

    {

      combinator: 'or',

      rules: [

        // [1, 0] (the first element within the rules array

        //         of the group occupying the second position

        //         in the root rules array)

        { field: 'f2', operator: '=', value: 'v2' },

        // [1, 1] (the second element within the rules array

        //         of the group occupying the second position

        //         in the root rules array)

        { field: 'f3', operator: '=', value: 'v3' },

      ],

    },

  ],

};
```

The first rule has `path` `[0]` (index 0 in the root `rules` array). The sub-group has `path` `[1]` (index 1 in the root array). Child rules within that group have paths starting with `1` (their parent's path) followed by their own indices.

## Finding a `path`[​](#finding-a-path "Direct link to finding-a-path")

The [`findPath`](/docs/utils/misc.md#findpath) function locates specific rules or groups for examination or updates. Using the query above:

```
findPath([1, 0], query);
```

Returns:

```
{ "field": "f2", "operator": "=", "value": "v2" }
```

## Example[​](#example "Direct link to Example")

While most scenarios don't require direct `path` interaction, it's useful when custom components need to access other query parts.

For example, if a custom value editor needs sibling rule values, you can retrieve the full query object using the [`useQueryBuilderQuery`](/docs/utils/hooks.md#usequerybuilderquery) hook (which connects to React Query Builder's Redux store), then find sibling rules using `getParentPath` and `findPath`.

info

Before version 7, custom components only received props for their specific rule or group. Additional data (like the root query) required the [`context` prop](/docs/components/querybuilder.md#context).

The `context` prop remains available, but query retrieval no longer requires it.
