# Subqueries and nested data

Modern applications frequently handle complex, nested data structures such as object arrays or hierarchical JSON. React Query Builder's **subquery** feature enables sophisticated queries against these nested structures through intuitive match modes like "all," "some," or "none."

<!-- -->

<!-- -->

https\://example.com

AND (and)+ Rule+ Group

Nested String Array (nestedStringArray)at most (atMost)2

AND (and)+ Rule+ Group

⨯

containsabc⨯

Nested Number Array (nestedNumberArray)Several (some)

AND (and)+ Rule+ Group

⨯

between1214⨯

Nested Object Array (nestedObjectArray)all

AND (and)+ Rule+ Group

⨯

First Name (firstName)begins with (beginsWith)S⨯

Last Name (lastName)does not end with (doesNotEndWith)s⨯

## Configuring subqueries[​](#configuring-subqueries "Direct link to Configuring subqueries")

Enable subqueries for a field by adding a `matchModes` property to its field definition. This property determines available match modes and their labels. You can also control subquery behavior globally using the `getMatchModes` and `getSubQueryBuilderProps` props.

### Match modes configuration[​](#match-modes-configuration "Direct link to Match modes configuration")

The `matchModes` property accepts several formats:

* **`true`** - Enables all available match modes with default labels
* **`MatchMode[]`** - Array of match mode names (e.g., `['all', 'some', 'none']`)
* **`Option<MatchMode>[]`** - Array of objects with custom labels (e.g., `[{ name: 'all', label: 'Every' }]`)

```
const fields: Field[] = [

  {

    name: 'nestedStringArray',

    label: 'Nested String Array',

    // Enable all match modes with default labels

    matchModes: true,

  },

  {

    name: 'nestedNumberArray',

    label: 'Nested Number Array',

    // Enable specific match modes with custom labels

    matchModes: [

      { name: 'all', label: 'Every' },

      { name: 'none', label: 'Not one' },

      { name: 'some', label: 'Several' },

    ],

  },

  {

    name: 'nestedObjectArray',

    label: 'Nested Object Array',

    // Enable specific match modes with default labels

    matchModes: ['all', 'none', 'some'],

    // Define properties of objects in the nested array

    subproperties: [

      { name: 'firstName', label: 'First Name' },

      { name: 'lastName', label: 'Last Name' },

    ],

  },

];
```

### Dynamic match mode configuration[​](#dynamic-match-mode-configuration "Direct link to Dynamic match mode configuration")

Configure match modes dynamically using the `getMatchModes` prop at the query builder level. This function executes for each field, enabling conditional match mode configuration based on field properties:

```
const getMatchModes = (field: string, misc: { fieldData: Field }) => {

  // Return true to enable all match modes for any field

  if (field === 'flexibleArray') return true;



  // Return specific match modes based on field type

  if (misc.fieldData.datatype === 'array') {

    return ['all', 'some', 'none'];

  }



  // Return false or undefined to disable subqueries for this field

  return false;

};



<QueryBuilder

  fields={fields}

  getMatchModes={getMatchModes}

  // ... other props

/>;
```

### Customizing subquery builder props[​](#customizing-subquery-builder-props "Direct link to Customizing subquery builder props")

The `getSubQueryBuilderProps` prop customizes individual subquery builder configurations. Use this to provide different field sets, operators, or other settings for nested queries:

```
const getSubQueryBuilderProps = (field: string, misc: { fieldData: Field }) => {

  // Return props that should override the parent query builder's configuration

  if (field === 'nestedObjectArray') {

    return {

      fields: misc.fieldData.subproperties || [],

      operators: [

        { name: '=', label: 'equals' },

        { name: 'contains', label: 'contains' },

        { name: 'beginsWith', label: 'begins with' },

      ],

      // Disable certain features for subqueries

      showCloneButtons: false,

      showLockButtons: false,

    };

  }



  // For primitive arrays, don't show field selector

  if (field === 'nestedStringArray') {

    return {

      fields: [{ name: '', label: '' }],

      autoSelectField: true,

    };

  }



  return {};

};



<QueryBuilder

  fields={fields}

  getSubQueryBuilderProps={getSubQueryBuilderProps}

  // ... other props

/>;
```

**Note:** Props like `query`, `onQueryChange`, and `enableDragAndDrop` are automatically managed and cannot be overridden for subquery builders.

### Available match modes[​](#available-match-modes "Direct link to Available match modes")

React Query Builder supports six match modes:

| Mode      | Type      | Description                                         | Requires threshold |
| --------- | --------- | --------------------------------------------------- | ------------------ |
| `all`     | Unary     | Every item in the array matches the subquery        | No                 |
| `some`    | Unary     | At least one item in the array matches the subquery | No                 |
| `none`    | Unary     | No items in the array match the subquery            | No                 |
| `atLeast` | Threshold | At least N items match the subquery                 | Yes                |
| `atMost`  | Threshold | At most N items match the subquery                  | Yes                |
| `exactly` | Threshold | Exactly N items match the subquery                  | Yes                |

## Working with object properties[​](#working-with-object-properties "Direct link to Working with object properties")

For object arrays (not primitive arrays), use the `subproperties` configuration to specify which object properties are available in subqueries. This functions identically to the main `fields` prop.

When `subproperties` is undefined, subquery rules don't render a field selector, and the `field` property should remain an empty string.

## Query structure[​](#query-structure "Direct link to Query structure")

Subqueries store as nested `RuleGroupType` objects in the rule's `value` property. The `match` property contains the mode and optional threshold:

```
const exampleQuery: RuleGroupType = {

  combinator: 'and',

  rules: [

    {

      field: 'nestedStringArray',

      operator: '=', // Ignored when match is present

      match: { mode: 'atMost', threshold: 2 },

      value: {

        combinator: 'and',

        rules: [{ field: '', operator: 'contains', value: 'abc' }],

      },

    },

    {

      field: 'nestedObjectArray',

      operator: '=',

      match: { mode: 'all' },

      value: {

        combinator: 'and',

        rules: [

          { field: 'firstName', operator: 'beginsWith', value: 'S' },

          { field: 'lastName', operator: 'doesNotEndWith', value: 's' },

        ],

      },

    },

  ],

};
```

info

When a rule has a valid `match` property, the `operator` property is ignored. The match mode determines subquery evaluation logic.

## Export format support[​](#export-format-support "Direct link to Export format support")

Export format support for subqueries varies by implementation:

| Support level | Formats                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Full          | "jsonlogic"[1](#user-content-fn-1), "jsonata", "cel", "spel", "natural\_language", ~~"mongodb"~~, "mongodb\_query"                             |
| Partial       | "sql"[2](#user-content-fn-2), "parameterized"[2](#user-content-fn-2), "drizzle"[2](#user-content-fn-2), "elasticsearch"[3](#user-content-fn-3) |
| None          | "parameterized\_named"[4](#user-content-fn-4), "prisma", "sequelize", "tanstack\_db", "ldap"                                                   |

caution

In unsupported formats, rules with valid `match` properties are treated as invalid and ignored during export.

<!-- -->

## Footnotes[​](#footnote-label "Direct link to Footnotes")

1. JsonLogic was the original inspiration for this feature. [↩](#user-content-fnref-1)

2. SQL-based formats only support primitive value arrays when `preset` is "postgresql". Other RDBMS platforms lack support for nested tables or have overly complex implementations. [↩](#user-content-fnref-2) [↩2](#user-content-fnref-2-2) [↩3](#user-content-fnref-2-3)

3. ElasticSearch nested queries only support `"some"` and `"none"` match modes. [↩](#user-content-fnref-3)

4. PostgreSQL does not support named parameters [↩](#user-content-fnref-4)
