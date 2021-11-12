---
title: Custom bind variables
---

Different SQL flavors have different requirements for bind variable placeholders. Some use a simple `?` character (which is what `formatQuery(query, 'parameterized')` produces by default), and others require a bind variable placeholder to start with `$` and be followed by a unique string.

The ["parameterized_named" export format](../api/export#named-parameters) will usually be sufficient to cover the latter case. But if the default parameter names (e.g. `:fieldName_1`) are not acceptable, you can use the "parameterized" format and replace the "?" with your choice of name.

The following code will produce a SQL string with each bind variable placeholder being numbered from "$1" to "$_n_", where _n_ is the number of bind variables (also, appropriately, the number of elements in the `params` array).

```ts
let i = 0;
const sql = (
  formatQuery(query, "parameterized") as ParameterizedSQL
).sql.replaceAll("?", () => {
  i++;
  return `$${i}`;
});
```

For example, if `formatQuery(query, "parameterized")` produced the following object:

```ts
{
  sql: "(firstName = ? and lastName = ?)",
  params: ["Steve", "Vai"]
}
```

...then the code above would assign the following string to the `sql` variable:

```ts
"(firstName = $1 and lastName = $2)"
```