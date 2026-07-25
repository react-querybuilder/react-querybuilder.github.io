# Import

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

Import/parser functions convert query strings or objects from specific languages to query objects for `<QueryBuilder />` components.

The optional second parameter configures parsing behavior and query generation (see [Configuration](#configuration)).

info

Importing `parse*` functions

Since `parse*` functions are used less frequently and rarely together, they were removed from the main export in version 7.

```
 // Version 6 only

-import { parseCEL } from '@react-querybuilder/core'

-import { parseJsonLogic } from '@react-querybuilder/core'

-import { parseMongoDB } from '@react-querybuilder/core'

-import { parseSQL } from '@react-querybuilder/core'



 // Version 6 or 7

+import { parseCEL } from '@react-querybuilder/core/parseCEL'

+import { parseJsonLogic } from '@react-querybuilder/core/parseJsonLogic'

+import { parseMongoDB } from '@react-querybuilder/core/parseMongoDB'

+import { parseSQL } from '@react-querybuilder/core/parseSQL'

 // (New in version 7)

+import { parseSpEL } from '@react-querybuilder/core/parseSpEL'

+import { parseJSONata } from '@react-querybuilder/core/parseJSONata'

 // (New in version 8)

+import { parseCypher } from '@react-querybuilder/core/parseCypher'

+import { parseGQL } from '@react-querybuilder/core/parseGQL'

+import { parseSPARQL } from '@react-querybuilder/core/parseSPARQL'

+import { parseGremlin } from '@react-querybuilder/core/parseGremlin'
```

These functions were available as separate exports in version 6 (along with [`formatQuery`](/docs/utils/export.md) and [`transformQuery`](/docs/utils/misc.md#transformquery)) but could also be imported from `"react-querybuilder"`. In version 7, they're *only* available as separate exports. (This reduced the main bundle size by almost 50%.)

## SQL[​](#sql "Direct link to SQL")

```
import { parseSQL } from '@react-querybuilder/core/parseSQL';



function parseSQL(sql: string, options?: ParseSQLOptions): RuleGroupTypeAny;
```

`parseSQL` accepts either a SQL `SELECT` statement or `WHERE` clause.

Click the "Import SQL" button in [the demo](/demo) to try it out.

### Options[​](#options "Direct link to Options")

Beyond standard [configuration](#configuration) options, `parseSQL` accepts these options for handling named or anonymous bind variables in SQL strings:

* `params` (`any[] | Record<string, any>`): An array of parameter values or a parameter-to-value mapping object.
* `paramPrefix` (`string`): Ignores this string at the beginning of parameter identifiers when matching to parameter names in the `params` object.
* `parseParameters` (`boolean | { prefix?: string | string[]; positional?: boolean }`): Preserves unresolved bind variables as parameter rules (`valueSource: 'parameter'`) instead of resolving them via `params`. Pass `true` to accept the default named prefix `':'` and positional `?`, or an object to configure one or more named `prefix`es (e.g. `'@'`, `'$'`) and toggle `positional` (default enabled). Positional `?` placeholders are named by 1-based ordinal (`?` → `1`). `params` substitution takes precedence when both are set.
* `getExpression` (`(node, ctx) => ExpressionNode | null`): A handler that converts an arithmetic/function operand subtree into an [expression](/docs/expr.md) node (`valueSource: 'expression'`, or a `lhs` when on the left of a comparison). Returning `null` drops the rule. Use [`expressionParserSQL`](/docs/expr.md#import-parsing) from `@react-querybuilder/expr` for the built-in SQL inverse, or `getExpressionParserSQL` to add custom functions/operators.

### Usage[​](#usage "Direct link to Usage")

All these statements produce the same result:

```
parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`);



parseSQL(`SELECT * FROM t WHERE firstName = ? AND lastName = ?`, {

  params: ['Steve', 'Vai'],

});



parseSQL(`SELECT * FROM t WHERE firstName = :p1 AND lastName = :p2`, {

  params: { p1: 'Steve', p2: 'Vai' },

});



parseSQL(`SELECT * FROM t WHERE firstName = $p1 AND lastName = $p2`, {

  params: { p1: 'Steve', p2: 'Vai' },

  paramPrefix: '$',

});
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "firstName",

      "operator": "=",

      "value": "Steve"

    },

    {

      "field": "lastName",

      "operator": "=",

      "value": "Vai"

    }

  ]

}
```

tip

Since v5.0, `parseSQL` detects `XOR` operators and converts them to rule groups with the "xor" combinator. Since "xor" isn't in `defaultCombinators`, specify `defaultCombinatorsExtended` in your `<QueryBuilder />` props if the original SQL might contain `XOR` clauses.

```
import { parseSQL } from '@react-querybuilder/core/parseSQL';

import { defaultCombinatorsExtended, QueryBuilder } from 'react-querybuilder';



const query = parseSQL(`SELECT * FROM tbl WHERE a = 'b' XOR c = 'd';`);



const App = () => {

  return (

    <QueryBuilder

      query={query}

      combinators={defaultCombinatorsExtended}

    />

  );

};
```

## MongoDB[​](#mongodb "Direct link to MongoDB")

```
import { parseMongoDB } from '@react-querybuilder/core/parseMongoDB';



function parseMongoDB(

  mongoDbQuery: string | Record<string, any>,

  options?: ParseMongoDbOptions

): RuleGroupTypeAny;
```

`parseMongoDB` accepts a MongoDB query as either a JSON object or `JSON.parse`-able string.

Click the "Import MongoDB" button in [the demo](/demo) to try it out.

### Usage[​](#usage-1 "Direct link to Usage")

```
parseMongoDB(`{ "firstName": "Steve", "lastName": { $eq: "Vai" } }`);

// OR

parseMongoDB({ firstName: 'Steve', lastName: { $eq: 'Vai' } });
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "firstName",

      "operator": "=",

      "value": "Steve"

    },

    {

      "field": "lastName",

      "operator": "=",

      "value": "Vai"

    }

  ]

}
```

### Custom operators[​](#custom-operators "Direct link to Custom operators")

`parseMongoDB` identifies and processes custom operators with the `additionalOperators` option. This option maps operators to their processing functions. Functions receive the operator, associated value, and other options, then should return `RuleType` or `RuleGroupType`. (Don't return `RuleGroupTypeIC`, even with [independent combinators](/docs/components/querybuilder.md#independent-combinators). If `independentCombinators` is `true`, `parseMongoDB` converts the final query to `RuleGroupTypeIC` before returning.)

Example:

```
parseMongoDB(

  {

    $myCustomOp: ['Vai', 'Vaughan'],

  },

  {

    additionalOperators: {

      $myCustomOp: (_op, val) => ({

        field: 'lastName',

        operator: 'in',

        value: val,

      }),

    },

  }

);
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "lastName",

      "operator": "in",

      "value": ["Vai", "Vaughan"]

    }

  ]

}
```

tip

Valid MongoDB query strings may not strictly conform to JSON. To handle extended formats, pre-parse query strings with a library like [mongodb-query-parser](https://www.npmjs.com/package/mongodb-query-parser) before passing them to `parseMongoDB`.

### Expressions[​](#expressions "Direct link to Expressions")

`parseMongoDB` accepts a `getExpression` option (`(node, ctx) => ExpressionNode | null`) that converts a MongoDB `$expr` aggregation-expression operand into an [expression](/docs/expr.md) node. An expression on the right of a comparison becomes the rule's `value` with `valueSource: 'expression'`; an expression on the left sets `field: ''` and stores the tree in `lhs`; inclusive-`between`/`notBetween` bounds become a two-element `value`. Only `$expr` operands are routed through this handler; bare field references and literals fall through to the stock logic. Returning `null` drops the rule. Use [`expressionParserMongoDB`](/docs/expr.md#import-parsing) from `@react-querybuilder/expr` for the built-in MongoDB inverse, or `getExpressionParserMongoDB` to add custom operations.

```
import { parseMongoDB } from '@react-querybuilder/core/parseMongoDB';

import { expressionParserMongoDB } from '@react-querybuilder/expr';



const query = parseMongoDB(mongoDbQuery, { getExpression: expressionParserMongoDB });
```

## JsonLogic[​](#jsonlogic "Direct link to JsonLogic")

```
import { parseJsonLogic } from '@react-querybuilder/core/parseJsonLogic';



function parseJsonLogic(

  jsonLogic: string | JsonLogic,

  options?: ParseJsonLogicOptions

): RuleGroupTypeAny;
```

`parseJsonLogic` accepts a [JsonLogic](https://jsonlogic.com/) object or `JSON.parse`-able string.

Click the "Import JsonLogic" button in [the demo](/demo) to try it out.

### Usage[​](#usage-2 "Direct link to Usage")

```
parseJsonLogic(

  `{ "and": [{ "===": [{ "var": "firstName" }, "Steve"] }, { "===": [{ "var": "lastName" }, "Vai"] }] }`

);

// OR

parseJsonLogic({

  and: [{ '===': [{ var: 'firstName' }, 'Steve'] }, { '===': [{ var: 'lastName' }, 'Vai'] }],

});
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "firstName",

      "operator": "=",

      "value": "Steve"

    },

    {

      "field": "lastName",

      "operator": "=",

      "value": "Vai"

    }

  ]

}
```

### Expressions[​](#expressions-1 "Direct link to Expressions")

`parseJsonLogic` accepts a `getExpression` option (`(node, ctx) => ExpressionNode | null`) that converts an arithmetic/function operand subtree into an [expression](/docs/expr.md) node. An expression on the right of a comparison becomes the rule's `value` with `valueSource: 'expression'`; an expression on the left sets `field: ''` and stores the tree in `lhs`; inclusive-`between`/`notBetween` bounds become a two-element `value`. Returning `null` drops the rule. Use [`expressionParserJsonLogic`](/docs/expr.md#import-parsing) from `@react-querybuilder/expr` for the built-in JsonLogic inverse, or `getExpressionParserJsonLogic` to add custom operations.

```
import { parseJsonLogic } from '@react-querybuilder/core/parseJsonLogic';

import { expressionParserJsonLogic } from '@react-querybuilder/expr';



const query = parseJsonLogic(jsonLogic, { getExpression: expressionParserJsonLogic });
```

### Custom operations[​](#custom-operations "Direct link to Custom operations")

By default, `parseJsonLogic` handles standard JsonLogic operations that correspond to default React Query Builder operators. Use the `jsonLogicOperations` option to handle custom operations.

`jsonLogicOperations` is `Record<string, (val: any) => RuleType | RuleGroupTypeAny>`. Keys are custom operations; values are functions returning a rule or group.

note

Including standard JsonLogic operations as keys in `jsonLogicOperations` overrides the default `parseJsonLogic` behavior for those operations.

This example uses a custom "regex" operation to produce a rule with the "contains" operator, using the regular expression's `source` property as the `value`.

```
parseJsonLogic(

  { regex: [{ var: 'firstName' }, /^Stev/] },

  {

    jsonLogicOperations: {

      regex: val => ({ field: val[0].var, operator: 'contains', value: val[1].source }),

    },

  }

);
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "firstName",

      "operator": "contains",

      "value": "^Stev"

    }

  ]

}
```

## Spring Expression Language (SpEL)[​](#spring-expression-language-spel "Direct link to Spring Expression Language (SpEL)")

```
import { parseSpEL } from '@react-querybuilder/core/parseSpEL';



function parseSpEL(spelQuery: string, options?: ParseSpELOptions): RuleGroupTypeAny;
```

`parseSpEL` accepts a [SpEL](https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html) string.

Click the "Import SpEL" button in [the demo](/demo) to try it out.

### Usage[​](#usage-3 "Direct link to Usage")

```
parseSpEL(`firstName == "Steve" && lastName == "Vai"`);
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "firstName",

      "operator": "=",

      "value": "Steve"

    },

    {

      "field": "lastName",

      "operator": "=",

      "value": "Vai"

    }

  ]

}
```

### Expressions[​](#expressions-2 "Direct link to Expressions")

`parseSpEL` accepts a `getExpression` option (`(node, ctx) => ExpressionNode | null`) that converts an arithmetic, method call, or function call operand subtree into an [expression](/docs/expr.md) node. An expression on the right of a comparison becomes the rule's `value` with `valueSource: 'expression'`; an expression on the left sets `field: ''` and stores the tree in `lhs`; inclusive-`between`/`notBetween` bounds become a two-element `value`. Returning `null` drops the rule. Use [`expressionParserSpEL`](/docs/expr.md#import-parsing) from `@react-querybuilder/expr` for the built-in SpEL inverse, or `getExpressionParserSpEL` to add custom operators, functions, and methods. Infix arithmetic, `T(java.lang.Math).abs/min/max(...)` static calls, and `.toUpperCase()`/`.toLowerCase()` instance methods are all invertible; see the [expr docs](/docs/expr.md#spel) for details.

```
import { parseSpEL } from '@react-querybuilder/core/parseSpEL';

import { expressionParserSpEL } from '@react-querybuilder/expr';



const query = parseSpEL(spelQuery, { getExpression: expressionParserSpEL });
```

## Common Expression Language (CEL)[​](#common-expression-language-cel "Direct link to Common Expression Language (CEL)")

```
import { parseCEL } from '@react-querybuilder/core/parseCEL';



function parseCEL(celQuery: string, options?: ParseCELOptions): RuleGroupTypeAny;
```

`parseCEL` accepts a [CEL](https://cel.dev) string.

Click the "Import CEL" button in [the demo](/demo) to try it out.

### Usage[​](#usage-4 "Direct link to Usage")

```
parseCEL(`firstName == "Steve" && lastName == "Vai"`);
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "firstName",

      "operator": "=",

      "value": "Steve"

    },

    {

      "field": "lastName",

      "operator": "=",

      "value": "Vai"

    }

  ]

}
```

### Custom expressions[​](#custom-expressions "Direct link to Custom expressions")

Provide a `customExpressionHandler` function to process any AST fragments not recognized by the default parser.

Example:

```
parseCEL('opted_in_at.isBirthday(-1)', {

  customExpressionHandler: expr => ({

    field: expr.left.value,

    operator: expr.right.value,

    value: expr.list.value[0].value,

  }),

});
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "opted_in_at",

      "operator": "isBirthday",

      "value": -1

    }

  ]

}
```

To assist with processing the AST fragments, all types, type guard functions, and other utilities used internally by `parseCEL` are exported.

### Expressions[​](#expressions-3 "Direct link to Expressions")

`parseCEL` accepts a `getExpression` option (`(node, ctx) => ExpressionNode | null`) that converts an arithmetic/function operand subtree into an [expression](/docs/expr.md) node. An expression on the right of a comparison becomes the rule's `value` with `valueSource: 'expression'`; an expression on the left sets `field: ''` and stores the tree in `lhs`; inclusive-`between`/`notBetween` bounds become a two-element `value`. Returning `null` drops the rule. Use [`expressionParserCEL`](/docs/expr.md#import-parsing) from `@react-querybuilder/expr` for the built-in CEL inverse, or `getExpressionParserCEL` to add custom functions. Note that `abs`/`upper`/`lower` are not invertible on the CEL side—see the [expr docs](/docs/expr.md#cel) for details.

```
import { parseCEL } from '@react-querybuilder/core/parseCEL';

import { expressionParserCEL } from '@react-querybuilder/expr';



const query = parseCEL(celQuery, { getExpression: expressionParserCEL });
```

## JSONata[​](#jsonata "Direct link to JSONata")

```
import { parseJSONata } from '@react-querybuilder/core/parseJSONata';



function parseJSONata(jsonataQuery: string, options?: ParseJSONataOptions): RuleGroupTypeAny;
```

`parseJSONata` accepts a [JSONata](https://jsonata.org/) string.

Click the "Import JSONata" button in [the demo](/demo) to try it out.

### Usage[​](#usage-5 "Direct link to Usage")

```
parseJSONata(`firstName = "Steve" and lastName in ["Vai", "Vaughan"]`);
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "firstName",

      "operator": "=",

      "value": "Steve"

    },

    {

      "field": "lastName",

      "operator": "in",

      "value": ["Vai", "Vaughan"]

    }

  ]

}
```

JSONata lists are always translated to arrays. The [`listsAsArrays` option](#lists-as-arrays) is ignored (effectively always `true`).

### Expressions[​](#expressions-4 "Direct link to Expressions")

`parseJSONata` accepts a `getExpression` option (`(node, ctx) => ExpressionNode | null`) that converts an arithmetic/function operand subtree into an [expression](/docs/expr.md) node. An expression on the right of a comparison becomes the rule's `value` with `valueSource: 'expression'`; an expression on the left sets `field: ''` and stores the tree in `lhs`; inclusive-`between`/`notBetween` bounds become a two-element `value`. Returning `null` drops the rule. Use [`expressionParserJSONata`](/docs/expr.md#import-parsing) from `@react-querybuilder/expr` for the built-in JSONata inverse, or `getExpressionParserJSONata` to add custom functions.

```
import { parseJSONata } from '@react-querybuilder/core/parseJSONata';

import { expressionParserJSONata } from '@react-querybuilder/expr';



const query = parseJSONata(jsonataQuery, { getExpression: expressionParserJSONata });
```

## Cypher[​](#cypher "Direct link to Cypher")

```
import { parseCypher } from '@react-querybuilder/core/parseCypher';



function parseCypher(cypherQuery: string, options?: ParseCypherOptions): RuleGroupTypeAny;
```

`parseCypher` accepts a [Cypher](https://neo4j.com/docs/cypher-manual/) query string, a `WHERE` clause, or a bare boolean expression. MATCH and RETURN clauses are consumed but discarded — only WHERE conditions are returned.

A `parseGQL` function is also exported since [GQL](https://www.iso.org/standard/76120.html) uses the same expression syntax.

note

`parseCypher` requires the `chevrotain` package (optional peer dependency).

### Usage[​](#usage-6 "Direct link to Usage")

```
// Full query — extracts WHERE conditions only

parseCypher('MATCH (n:Person) WHERE n.age > 30 AND n.name CONTAINS "Alice" RETURN n');



// WHERE clause only

parseCypher('WHERE n.age > 30');



// Bare expression

parseCypher('n.age > 30 AND n.name CONTAINS "Alice"');
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    { "field": "n.age", "operator": ">", "value": 30 },

    { "field": "n.name", "operator": "contains", "value": "Alice" }

  ]

}
```

## SPARQL[​](#sparql "Direct link to SPARQL")

```
import { parseSPARQL } from '@react-querybuilder/core/parseSPARQL';



function parseSPARQL(sparqlQuery: string, options?: ParseSPARQLOptions): RuleGroupTypeAny;
```

`parseSPARQL` accepts a [SPARQL](https://www.w3.org/TR/sparql11-query/) query string or a bare `FILTER` expression. Triple patterns (BGPs) are consumed but discarded — only FILTER conditions are returned.

note

`parseSPARQL` requires the `@traqula/parser-sparql-1-2` package (optional peer dependency).

### Usage[​](#usage-7 "Direct link to Usage")

```
// Full query — extracts FILTER conditions only

parseSPARQL('SELECT ?x WHERE { ?x foaf:name ?name . FILTER(?age > 30) }');



// Bare FILTER expression (auto-wrapped in a stub query)

parseSPARQL('?age > 30 && ?name != "Alice"');
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    { "field": "?age", "operator": ">", "value": 30 },

    { "field": "?name", "operator": "!=", "value": "Alice" }

  ]

}
```

## Gremlin[​](#gremlin "Direct link to Gremlin")

```
import { parseGremlin } from '@react-querybuilder/core/parseGremlin';



function parseGremlin(gremlinQuery: string, options?: ParseGremlinOptions): RuleGroupTypeAny;
```

`parseGremlin` accepts a [Gremlin](https://tinkerpop.apache.org/) traversal string or a chain of `.has()` steps. Pattern steps (`.hasLabel()`, `.out()`, `.in()`, `.as()`) are consumed but discarded — only `.has()` filter predicates are returned.

### Usage[​](#usage-8 "Direct link to Usage")

```
// Full traversal — extracts .has() conditions only

parseGremlin("g.V().hasLabel('Person').has('age', gt(30)).has('name', 'Alice')");



// Bare .has() chain

parseGremlin(".has('age', gt(30)).has('name', 'Alice')");
```

Output (`RuleGroupType`):

```
{

  "combinator": "and",

  "rules": [

    { "field": "age", "operator": ">", "value": 30 },

    { "field": "name", "operator": "=", "value": "Alice" }

  ]

}
```

## Configuration[​](#configuration "Direct link to Configuration")

### Lists as arrays[​](#lists-as-arrays "Direct link to Lists as arrays")

To generate arrays instead of comma-separated strings for "in"- and "between"-type operator values, use the `listsAsArrays` option.

```
parseSQL(`SELECT * FROM t WHERE lastName IN ('Vai', 'Vaughan') AND age BETWEEN 20 AND 100`, {

  listsAsArrays: true;

});
```

Output:

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "lastName",

      "operator": "in",

      "value": ["Vai", "Vaughan"]

    },

    {

      "field": "age",

      "operator": "between",

      "value": [20, 100]

    }

  ]

}
```

### Independent combinators[​](#independent-combinators "Direct link to Independent combinators")

When `independentCombinators` is `true`, `parse*` functions output queries with combinator identifiers *between* sibling rules/groups instead of at the group level.

```
parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`, {

  independentCombinators: true,

});
```

Output (`RuleGroupTypeIC`):

```
{

  "rules": [

    {

      "field": "firstName",

      "operator": "=",

      "value": "Steve"

    },

    "and",

    {

      "field": "lastName",

      "operator": "=",

      "value": "Vai"

    }

  ]

}
```

### Fields as value source[​](#fields-as-value-source "Direct link to Fields as value source")

When the `fields` option is provided (accepting the same types as the [`fields` prop](/docs/components/querybuilder.md#fields)), `parse*` functions validate clauses with field identifiers to the right of the operator instead of primitive values. A `getValueSources` function (same signature as the [prop](/docs/components/querybuilder.md#getvaluesources)) can also help validate rules.

For such rules to be valid, one of these must be an array including "field": (1) the `getValueSources` return value, (2) the field's `valueSources` function return value, or (3) the field's `valueSources` property. The code below demonstrates all three methods.

```
parseSQL(`SELECT * FROM t WHERE firstName = lastName`, {

  fields: [

    { name: 'firstName', label: 'First Name', valueSources: ['value', 'field'] },

    { name: 'lastName', label: 'Last Name', valueSources: () => ['value', 'field'] },

  ],

  getValueSources: () => ['value', 'field'],

});
```

Output:

```
{

  "combinator": "and",

  "rules": [

    {

      "field": "firstName",

      "operator": "=",

      "value": "lastName",

      "valueSource": "field"

    }

  ]

}
```

### Generating `id`s[​](#generating-ids "Direct link to generating-ids")

When `generateIDs` is `true`, `parse*` functions generate a unique `id` property for the output query object and each nested rule and group using `prepareRuleGroup`.

note

`parse*` functions only validate clauses where "field" is the *only* detected value source. Operators like "between" and "in" must have either only field names or only scalar values to the right of the operator—not mixed. See examples below.

#### Invalid clauses[​](#invalid-clauses "Direct link to Invalid clauses")

```
// 1 is a scalar value and `iq` is a field name

parseSQL(`SELECT * FROM tbl WHERE age between 1 and iq`);

// List contains a mix of scalar values and field names

parseSQL(`SELECT * FROM tbl WHERE firstName IN (lastName, 'Steve', 'Stevie')`);
```

#### Valid clauses[​](#valid-clauses "Direct link to Valid clauses")

```
// Both are field names

parseSQL(`SELECT * FROM tbl WHERE age between numChildren and iq`);

// Both are scalar values

parseSQL(`SELECT * FROM tbl WHERE age between 26 and 52`);

// All items are field names

parseSQL(`SELECT * FROM tbl WHERE firstName IN (lastName, middleName)`);

// All items are scalar values

parseSQL(`SELECT * FROM tbl WHERE firstName IN ('Steve', 'Stevie')`);
```
