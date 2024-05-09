"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20955],{34987:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var r=s(62540),a=s(65404);const i={title:"Import",description:"Convert SQL and other formats to query builder objects"},o=void 0,t={id:"utils/import",title:"Import",description:"Convert SQL and other formats to query builder objects",source:"@site/docs/utils/import.md",sourceDirName:"utils",slug:"/utils/import",permalink:"/docs/next/utils/import",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/utils/import.md",tags:[],version:"current",frontMatter:{title:"Import",description:"Convert SQL and other formats to query builder objects"},sidebar:"mySidebar",previous:{title:"Export",permalink:"/docs/next/utils/export"},next:{title:"Hooks",permalink:"/docs/next/utils/hooks"}},l={},d=[{value:"SQL",id:"sql",level:2},{value:"Options",id:"options",level:3},{value:"Usage",id:"usage",level:3},{value:"MongoDB",id:"mongodb",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Custom operators",id:"custom-operators",level:3},{value:"JsonLogic",id:"jsonlogic",level:2},{value:"Usage",id:"usage-2",level:3},{value:"Custom operations",id:"custom-operations",level:3},{value:"Spring Expression Language (SpEL)",id:"spring-expression-language-spel",level:2},{value:"Usage",id:"usage-3",level:3},{value:"Common Expression Language (CEL)",id:"common-expression-language-cel",level:2},{value:"Usage",id:"usage-4",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Lists as arrays",id:"lists-as-arrays",level:3},{value:"Independent combinators",id:"independent-combinators",level:3},{value:"Fields as value source",id:"fields-as-value-source",level:3},{value:"Clauses that will be deemed invalid",id:"clauses-that-will-be-deemed-invalid",level:4},{value:"Clauses that will (probably) be deemed valid",id:"clauses-that-will-probably-be-deemed-valid",level:4}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Refer to the ",(0,r.jsx)(n.a,{href:"../typescript",children:"TypeScript reference"})," page for information about the types and interfaces referenced below."]})}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["Import/parser functions take a string or object representing a query in a specific language and translate it to a query suitable for the ",(0,r.jsx)(n.code,{children:"query"})," or ",(0,r.jsx)(n.code,{children:"defaultQuery"})," props in a ",(0,r.jsx)(n.code,{children:"<QueryBuilder />"})," component."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional second parameter is an options object to configure the parsing behavior or query generation (see ",(0,r.jsx)(n.a,{href:"#configuration",children:"Configuration"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"sql",children:"SQL"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function parseSQL(sql: string, options?: ParseSQLOptions): RuleGroupTypeAny;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseSQL"})," accepts a SQL ",(0,r.jsx)(n.code,{children:"SELECT"})," statement (either the full statement or the ",(0,r.jsx)(n.code,{children:"WHERE"})," clause by itself)."]}),"\n",(0,r.jsxs)(n.p,{children:['Click the "Import SQL" button in ',(0,r.jsx)(n.a,{href:"/demo",children:"the demo"})," to try it out."]}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the standard ",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"})," options, ",(0,r.jsx)(n.code,{children:"parseSQL"})," accepts two options that configure the handling of named or anonymous bind variables within the SQL string."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"params"})," (",(0,r.jsx)(n.code,{children:"any[] | Record<string, any>"}),"): An array of parameter values or a parameter-to-value mapping object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"paramPrefix"})," (",(0,r.jsx)(n.code,{children:"string"}),"): Ignores this string at the beginning of parameter identifiers when matching to parameter names in the ",(0,r.jsx)(n.code,{children:"params"})," object."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"Running any of the following statements will produce the same result (see output below)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`);\n\nparseSQL(`SELECT * FROM t WHERE firstName = ? AND lastName = ?`, {\n  params: ['Steve', 'Vai'],\n});\n\nparseSQL(`SELECT * FROM t WHERE firstName = :p1 AND lastName = :p2`, {\n  params: { p1: 'Steve', p2: 'Vai' },\n});\n\nparseSQL(`SELECT * FROM t WHERE firstName = $p1 AND lastName = $p2`, {\n  params: { p1: 'Steve', p2: 'Vai' },\n  paramPrefix: '$',\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Output (",(0,r.jsx)(n.code,{children:"RuleGroupType"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Since v5.0, ",(0,r.jsx)(n.code,{children:"parseSQL"})," can detect ",(0,r.jsx)(n.code,{children:"XOR"}),' operators and convert the expressions into rule groups with combinator "xor". However, since "xor" is not one of the members of ',(0,r.jsx)(n.code,{children:"defaultCombinators"}),", you will need to specify ",(0,r.jsx)(n.code,{children:"defaultCombinatorsExtended"})," (or some derivation of that) in your ",(0,r.jsx)(n.code,{children:"<QueryBuilder />"})," props if you believe the original SQL might contain ",(0,r.jsx)(n.code,{children:"XOR"})," clauses."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { defaultCombinatorsExtended, parseSQL, QueryBuilder } from 'react-querybuilder';\n\nconst query = parseSQL(`SELECT * FROM tbl WHERE a = 'b' XOR c = 'd';`);\n\nconst App = () => {\n  return (\n    <QueryBuilder\n      query={query}\n      // highlight-start\n      combinators={defaultCombinatorsExtended}\n      // highlight-end\n    />\n  );\n};\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"mongodb",children:"MongoDB"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function parseMongoDB(\n  mongoDbQuery: string | Record<string, any>,\n  options?: ParseMongoDbOptions\n): RuleGroupTypeAny;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseMongoDB"})," takes a MongoDB query as a JSON object or ",(0,r.jsx)(n.code,{children:"JSON.parse"}),"-able string."]}),"\n",(0,r.jsxs)(n.p,{children:['Click the "Import MongoDB" button in ',(0,r.jsx)(n.a,{href:"/demo",children:"the demo"})," to try it out."]}),"\n",(0,r.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'parseMongoDB(`{ "firstName": "Steve", "lastName": { $eq: "Vai" } }`);\n// OR\nparseMongoDB({ firstName: \'Steve\', lastName: { $eq: \'Vai\' } });\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Output (",(0,r.jsx)(n.code,{children:"RuleGroupType"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"custom-operators",children:"Custom operators"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseMongoDB"})," can identify and process custom operators with the ",(0,r.jsx)(n.code,{children:"additionalOperators"})," option. The option is a map of operators to their respective processing functions. Functions are passed the operator, the associated value, and any other options that were set. They should return a ",(0,r.jsx)(n.code,{children:"RuleType"})," or ",(0,r.jsx)(n.code,{children:"RuleGroupType"}),". (They should ",(0,r.jsx)(n.em,{children:"not"})," return ",(0,r.jsx)(n.code,{children:"RuleGroupTypeIC"}),", even if using ",(0,r.jsx)(n.a,{href:"../components/querybuilder#independent-combinators",children:"independent combinators"}),". If the ",(0,r.jsx)(n.code,{children:"independentCombinators"})," option is ",(0,r.jsx)(n.code,{children:"true"}),", ",(0,r.jsx)(n.code,{children:"parseMongoDB"})," will convert the final query to ",(0,r.jsx)(n.code,{children:"RuleGroupTypeIC"})," before returning it.)"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"parseMongoDB(\n  {\n    $myCustomOp: ['Vai', 'Vaughan'],\n  },\n  {\n    additionalOperators: {\n      $myCustomOp: (_op, val) => ({\n        field: 'lastName',\n        operator: 'in',\n        value: val,\n      }),\n    },\n  }\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Output (",(0,r.jsx)(n.code,{children:"RuleGroupType"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "lastName",\n      "operator": "in",\n      "value": ["Vai", "Vaughan"]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Valid MongoDB query strings may not strictly conform to the JSON specification. To cover the extended format, you may want to pre-parse query strings with a library like ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/mongodb-query-parser",children:"mongodb-query-parser"})," before passing them to ",(0,r.jsx)(n.code,{children:"parseMongoDB"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"jsonlogic",children:"JsonLogic"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function parseJsonLogic(\n  jsonLogic: string | JsonLogic,\n  options?: ParseJsonLogicOptions\n): RuleGroupTypeAny;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseJsonLogic"})," takes a ",(0,r.jsx)(n.a,{href:"https://jsonlogic.com/",children:"JsonLogic"})," object or ",(0,r.jsx)(n.code,{children:"JSON.parse"}),"-able string."]}),"\n",(0,r.jsxs)(n.p,{children:['Click the "Import JsonLogic" button in ',(0,r.jsx)(n.a,{href:"/demo",children:"the demo"})," to try it out."]}),"\n",(0,r.jsx)(n.h3,{id:"usage-2",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'parseJsonLogic(\n  `{ "and": [{ "===": [{ "var": "firstName" }, "Steve"] }, { "===": [{ "var": "lastName" }, "Vai"] }] }`\n);\n// OR\nparseJsonLogic({\n  and: [{ \'===\': [{ var: \'firstName\' }, \'Steve\'] }, { \'===\': [{ var: \'lastName\' }, \'Vai\'] }],\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Output (",(0,r.jsx)(n.code,{children:"RuleGroupType"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"custom-operations",children:"Custom operations"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"parseJsonLogic"})," handles the standard JsonLogic operations that correspond to one of the default operators in React Query Builder. To handle custom operations, use the ",(0,r.jsx)(n.code,{children:"jsonLogicOperations"})," option."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"jsonLogicOperations"})," is ",(0,r.jsx)(n.code,{children:"Record<string, (val: any) => RuleType | RuleGroupTypeAny"}),". The keys of the object should be the custom operations, and the corresponding values should be functions that return a rule or group."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Including any of the standard JsonLogic operations as keys in the ",(0,r.jsx)(n.code,{children:"jsonLogicOperations"})," object will override the default ",(0,r.jsx)(n.code,{children:"parseJsonLogic"})," behavior for those operations."]})}),"\n",(0,r.jsxs)(n.p,{children:['The example below uses a custom "regex" operation to produce a rule with the "contains" operator, the ',(0,r.jsx)(n.code,{children:"value"})," being the ",(0,r.jsx)(n.code,{children:"source"})," of the regular expression in the JsonLogic rule."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"parseJsonLogic(\n  { regex: [{ var: 'firstName' }, /^Stev/] },\n  {\n    jsonLogicOperations: {\n      regex: val => ({ field: val[0].var, operator: 'contains', value: val[1].source }),\n    },\n  }\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Output (",(0,r.jsx)(n.code,{children:"RuleGroupType"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "contains",\n      "value": "^Stev"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"spring-expression-language-spel",children:"Spring Expression Language (SpEL)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function parseSpEL(spelQuery: string, options?: ParseSpELOptions): RuleGroupTypeAny;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseSpEL"})," takes a ",(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html",children:"SpEL"})," string."]}),"\n",(0,r.jsxs)(n.p,{children:['Click the "Import SpEL" button in ',(0,r.jsx)(n.a,{href:"/demo",children:"the demo"})," to try it out."]}),"\n",(0,r.jsx)(n.h3,{id:"usage-3",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'parseSpEL(`firstName == "Steve" && lastName == "Vai"`);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Output (",(0,r.jsx)(n.code,{children:"RuleGroupType"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"common-expression-language-cel",children:"Common Expression Language (CEL)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function parseCEL(celQuery: string, options?: ParseCELOptions): RuleGroupTypeAny;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parseCEL"})," takes a ",(0,r.jsx)(n.a,{href:"https://github.com/google/cel-spec",children:"CEL"})," string."]}),"\n",(0,r.jsxs)(n.p,{children:['Click the "Import CEL" button in ',(0,r.jsx)(n.a,{href:"/demo",children:"the demo"})," to try it out."]}),"\n",(0,r.jsx)(n.h3,{id:"usage-4",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'parseCEL(`firstName == "Steve" && lastName == "Vai"`);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Output (",(0,r.jsx)(n.code,{children:"RuleGroupType"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"lists-as-arrays",children:"Lists as arrays"}),"\n",(0,r.jsxs)(n.p,{children:['To generate arrays instead of comma-separated strings for lists of values following "in"- and "between"-type operators, use the ',(0,r.jsx)(n.code,{children:"listsAsArrays"})," option."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"parseSQL(`SELECT * FROM t WHERE lastName IN ('Vai', 'Vaughan') AND age BETWEEN 20 AND 100`, {\n  listsAsArrays: true;\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "lastName",\n      "operator": "in",\n      // highlight-start\n      "value": ["Vai", "Vaughan"]\n      // highlight-end\n    },\n    {\n      "field": "age",\n      "operator": "between",\n      // highlight-start\n      "value": [20, 100]\n      // highlight-end\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"independent-combinators",children:"Independent combinators"}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"independentCombinators"})," option is ",(0,r.jsx)(n.code,{children:"true"}),", ",(0,r.jsx)(n.code,{children:"parse*"})," functions will output a query with combinator identifiers ",(0,r.jsx)(n.em,{children:"between"})," sibling rules/groups instead of the group level."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`, {\n  independentCombinators: true,\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Output (",(0,r.jsx)(n.code,{children:"RuleGroupTypeIC"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    // highlight-start\n    "and",\n    // highlight-end\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"fields-as-value-source",children:"Fields as value source"}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"fields"})," option (which accepts the same types as the ",(0,r.jsxs)(n.a,{href:"../components/querybuilder#fields",children:[(0,r.jsx)(n.code,{children:"fields"})," prop"]}),") is provided, and ",(0,r.jsx)(n.em,{children:"only"})," if it is provided, then ",(0,r.jsx)(n.code,{children:"parse*"})," functions will validate clauses that have a field identifier to the right of the operator instead of a primitive value. A ",(0,r.jsx)(n.code,{children:"getValueSources"})," function (with the same signature as the ",(0,r.jsx)(n.a,{href:"../components/querybuilder#getvaluesources",children:"prop of the same name"}),") can also be provided to help validate rules."]}),"\n",(0,r.jsxs)(n.p,{children:['In order for such a rule to be considered valid, one of the following must be an array that includes the string "field": 1) the ',(0,r.jsx)(n.code,{children:"getValueSources"})," return value, 2) the field's ",(0,r.jsx)(n.code,{children:"valueSources"})," function return value, or 3) the field's ",(0,r.jsx)(n.code,{children:"valueSources"})," property itself. The code below demonstrates all three methods."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"parseSQL(`SELECT * FROM t WHERE firstName = lastName`, {\n  fields: [\n    { name: 'firstName', label: 'First Name', valueSources: ['value', 'field'] },\n    { name: 'lastName', label: 'Last Name', valueSources: () => ['value', 'field'] },\n  ],\n  getValueSources: () => ['value', 'field'],\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "lastName",\n      // highlight-start\n      "valueSource": "field"\n      // highlight-end\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"parse*"}),' functions will only validate clauses where "field" is the ',(0,r.jsx)(n.em,{children:"only"}),' detected value source. Operators like "between" and "in" that take multiple values must only have field names or only scalar values to the right of the operator, not a mix of field names and scalar values. See examples below.']}),(0,r.jsx)(n.h4,{id:"clauses-that-will-be-deemed-invalid",children:"Clauses that will be deemed invalid"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// 1 is a scalar value and `iq` is a field name\nparseSQL(`SELECT * FROM tbl WHERE age between 1 and iq`);\n// List contains a mix of scalar values and field names\nparseSQL(`SELECT * FROM tbl WHERE firstName IN (lastName, 'Steve', 'Stevie')`);\n"})}),(0,r.jsx)(n.h4,{id:"clauses-that-will-probably-be-deemed-valid",children:"Clauses that will (probably) be deemed valid"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Both are field names\nparseSQL(`SELECT * FROM tbl WHERE age between numChildren and iq`);\n// Both are scalar values\nparseSQL(`SELECT * FROM tbl WHERE age between 26 and 52`);\n// All items are field names\nparseSQL(`SELECT * FROM tbl WHERE firstName IN (lastName, middleName)`);\n// All items are scalar values\nparseSQL(`SELECT * FROM tbl WHERE firstName IN ('Steve', 'Stevie')`);\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65404:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var r=s(63696);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);