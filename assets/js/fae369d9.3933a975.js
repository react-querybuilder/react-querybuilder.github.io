"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8647],{39973:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(83117),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Refer to the ",(0,r.kt)("a",{parentName:"em",href:"../typescript"},"TypeScript reference")," page for information about the types and interfaces referenced below."))))}i.isMDXComponent=!0},87824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(83117),r=(n(67294),n(3905)),o=n(39973);const i={title:"Import",description:"Convert SQL and other formats to query builder objects"},l=void 0,s={unversionedId:"utils/import",id:"version-6/utils/import",title:"Import",description:"Convert SQL and other formats to query builder objects",source:"@site/versioned_docs/version-6/utils/import.mdx",sourceDirName:"utils",slug:"/utils/import",permalink:"/docs/utils/import",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/utils/import.mdx",tags:[],version:"6",frontMatter:{title:"Import",description:"Convert SQL and other formats to query builder objects"},sidebar:"mySidebar",previous:{title:"Export",permalink:"/docs/utils/export"},next:{title:"Hooks",permalink:"/docs/utils/hooks"}},p={},u=[{value:"SQL",id:"sql",level:2},{value:"Options",id:"options",level:3},{value:"Usage",id:"usage",level:3},{value:"MongoDB",id:"mongodb",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Common Expression Language (CEL)",id:"common-expression-language-cel",level:2},{value:"Usage",id:"usage-2",level:3},{value:"JsonLogic",id:"jsonlogic",level:2},{value:"Usage",id:"usage-3",level:3},{value:"Custom operations",id:"custom-operations",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Lists as arrays",id:"lists-as-arrays",level:3},{value:"Independent combinators",id:"independent-combinators",level:3},{value:"Fields as value source",id:"fields-as-value-source",level:3}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"TypeScriptAdmonition"}),(0,r.kt)("p",null,"Import/parser functions take a string or object representing a query in a specific language and translate it to a query suitable for the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultQuery")," props in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component."),(0,r.kt)("p",null,"The optional second parameter is an options object to configure the parsing behavior or query generation (see ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"Configuration"),")."),(0,r.kt)("h2",{id:"sql"},"SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function parseSQL(sql: string, options?: ParseSQLOptions): RuleGroupTypeAny;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," accepts a SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement (either the full statement or the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause by itself)."),(0,r.kt)("p",null,'Click the "Import SQL" button in ',(0,r.kt)("a",{parentName:"p",href:"/demo"},"the demo")," to try it out."),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"In addition to the standard ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," options, ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," accepts two options that configure the handling of named or anonymous bind variables within the SQL string."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," (",(0,r.kt)("inlineCode",{parentName:"li"},"any[] | Record<string, any>"),"): An array of parameter values or a parameter-to-value mapping object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paramPrefix")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): Ignores this string at the beginning of parameter identifiers when matching to parameter names in the ",(0,r.kt)("inlineCode",{parentName:"li"},"params")," object.")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Running any of the following statements will produce the same result (see output below)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`);\n\nparseSQL(`SELECT * FROM t WHERE firstName = ? AND lastName = ?`, {\n  params: ['Steve', 'Vai'],\n});\n\nparseSQL(`SELECT * FROM t WHERE firstName = :p1 AND lastName = :p2`, {\n  params: { p1: 'Steve', p2: 'Vai' },\n});\n\nparseSQL(`SELECT * FROM t WHERE firstName = $p1 AND lastName = $p2`, {\n  params: { p1: 'Steve', p2: 'Vai' },\n  paramPrefix: '$',\n});\n")),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since v5.0, ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," can detect ",(0,r.kt)("inlineCode",{parentName:"p"},"XOR"),' operators and convert the expressions into rule groups with combinator "xor". However, since "xor" is not one of the members of ',(0,r.kt)("inlineCode",{parentName:"p"},"defaultCombinators"),", you will need to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultCombinatorsExtended")," (or some derivation of that) in your ",(0,r.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," props if you believe the original SQL might contain ",(0,r.kt)("inlineCode",{parentName:"p"},"XOR")," clauses."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defaultCombinatorsExtended, parseSQL, QueryBuilder } from 'react-querybuilder';\n\nconst query = parseSQL(`SELECT * FROM tbl WHERE a = 'b' XOR c = 'd';`);\n\nconst App = () => {\n  return (\n    <QueryBuilder\n      query={query}\n      // highlight-start\n      combinators={defaultCombinatorsExtended}\n      // highlight-end\n    />\n  );\n};\n"))),(0,r.kt)("h2",{id:"mongodb"},"MongoDB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function parseMongoDB(\n  mongoDbQuery: string | Record<string, any>,\n  options?: ParseMongoDbOptions\n): RuleGroupTypeAny;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseMongoDB")," takes a MongoDB query as a JSON object or ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"-able string."),(0,r.kt)("p",null,'Click the "Import MongoDB" button in ',(0,r.kt)("a",{parentName:"p",href:"/demo"},"the demo")," to try it out."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'parseMongoDB(`{ "firstName": "Steve", "lastName": { $eq: "Vai" } }`);\n// OR\nparseMongoDB({ firstName: \'Steve\', lastName: { $eq: \'Vai\' } });\n')),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Valid MongoDB query strings may not strictly conform to the JSON specification. To cover the extended format, you may want to pre-parse query strings with a library like ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongodb-query-parser"},"mongodb-query-parser")," before passing them to ",(0,r.kt)("inlineCode",{parentName:"p"},"parseMongoDB"),".")),(0,r.kt)("h2",{id:"common-expression-language-cel"},"Common Expression Language (CEL)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function parseCEL(celQuery: string, options?: ParseCELOptions): RuleGroupTypeAny;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseCEL")," takes a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/cel-spec"},"CEL")," string."),(0,r.kt)("p",null,'Click the "Import CEL" button in ',(0,r.kt)("a",{parentName:"p",href:"/demo"},"the demo")," to try it out."),(0,r.kt)("h3",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'parseCEL(`firstName == "Steve" && lastName == "Vai"`);\n')),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"jsonlogic"},"JsonLogic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function parseJsonLogic(\n  jsonLogic: string | JsonLogic,\n  options?: ParseJsonLogicOptions\n): RuleGroupTypeAny;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseJsonLogic")," takes a ",(0,r.kt)("a",{parentName:"p",href:"https://jsonlogic.com/"},"JsonLogic")," object or ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"-able string."),(0,r.kt)("p",null,'Click the "Import JsonLogic" button in ',(0,r.kt)("a",{parentName:"p",href:"/demo"},"the demo")," to try it out."),(0,r.kt)("h3",{id:"usage-3"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'parseJsonLogic(\n  `{ "and": [{ "===": [{ "var": "firstName" }, "Steve"] }, { "===": [{ "var": "lastName" }, "Vai"] }] }`\n);\n// OR\nparseJsonLogic({\n  and: [{ \'===\': [{ var: \'firstName\' }, \'Steve\'] }, { \'===\': [{ var: \'lastName\' }, \'Vai\'] }],\n});\n')),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"custom-operations"},"Custom operations"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"parseJsonLogic")," handles the standard JsonLogic operations that correspond to one of the default operators in React Query Builder. To handle custom operations, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonLogicOperations")," option."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jsonLogicOperations")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, (val: any) => RuleType | RuleGroupTypeAny"),". The keys of the object should be the custom operations, and the corresponding values should be functions that return a rule or group."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Including any of the standard JsonLogic operations as keys in the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonLogicOperations")," object will override the default ",(0,r.kt)("inlineCode",{parentName:"p"},"parseJsonLogic")," behavior for those operations.")),(0,r.kt)("p",null,'The example below uses a custom "regex" operation to produce a rule with the "contains" operator, the ',(0,r.kt)("inlineCode",{parentName:"p"},"value")," being the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," of the regular expression in the JsonLogic rule."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseJsonLogic(\n  { regex: [{ var: 'firstName' }, /^Stev/] },\n  {\n    jsonLogicOperations: {\n      regex: val => ({ field: val[0].var, operator: 'contains', value: val[1].source }),\n    },\n  }\n);\n")),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "contains",\n      "value": "^Stev"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"lists-as-arrays"},"Lists as arrays"),(0,r.kt)("p",null,'To generate arrays instead of comma-separated strings for lists of values following "in"- and "between"-type operators, use the ',(0,r.kt)("inlineCode",{parentName:"p"},"listsAsArrays")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE lastName IN ('Vai', 'Vaughan') AND age BETWEEN 20 AND 100`, {\n  listsAsArrays: true;\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "lastName",\n      "operator": "in",\n      // highlight-start\n      "value": ["Vai", "Vaughan"]\n      // highlight-end\n    },\n    {\n      "field": "age",\n      "operator": "between",\n      // highlight-start\n      "value": [20, 100]\n      // highlight-end\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"independent-combinators"},"Independent combinators"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"independentCombinators")," option is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"parse*")," functions will output a query with combinator identifiers between sibling rules/groups instead of the group level. (For these queries to be valid for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," prop, the ",(0,r.kt)("inlineCode",{parentName:"p"},"independentCombinators")," prop must also be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`, {\n  independentCombinators: true,\n});\n")),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    // highlight-start\n    "and",\n    // highlight-end\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"fields-as-value-source"},"Fields as value source"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," option (which accepts the same types as the ",(0,r.kt)("a",{parentName:"p",href:"../components/querybuilder#fields"},(0,r.kt)("inlineCode",{parentName:"a"},"fields")," prop"),") is provided, and ",(0,r.kt)("em",{parentName:"p"},"only")," if it is provided, then ",(0,r.kt)("inlineCode",{parentName:"p"},"parse*")," functions will validate clauses that have a field identifier to the right of the operator instead of a primitive value. A ",(0,r.kt)("inlineCode",{parentName:"p"},"getValueSources")," function (with the same signature as the ",(0,r.kt)("a",{parentName:"p",href:"../components/querybuilder#getvaluesources"},"prop of the same name"),") can also be provided to help validate rules."),(0,r.kt)("p",null,'In order for such a rule to be considered valid, one of the following must be an array that includes the string "field": 1) the ',(0,r.kt)("inlineCode",{parentName:"p"},"getValueSources")," return value, 2) the field's ",(0,r.kt)("inlineCode",{parentName:"p"},"valueSources")," function return value, or 3) the field's ",(0,r.kt)("inlineCode",{parentName:"p"},"valueSources")," property itself. The code below demonstrates all three methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE firstName = lastName`, {\n  fields: [\n    { name: 'firstName', label: 'First Name', valueSources: ['value', 'field'] },\n    { name: 'lastName', label: 'Last Name', valueSources: () => ['value', 'field'] },\n  ],\n  getValueSources: () => ['value', 'field'],\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "lastName",\n      // highlight-start\n      "valueSource": "field"\n      // highlight-end\n    }\n  ]\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"parse*"),' functions will only validate clauses where "field" is the ',(0,r.kt)("em",{parentName:"p"},"only"),' detected value source. Operators like "between" and "in" that take multiple values must only have field names or only scalar values to the right of the operator, not a mix of field names and scalar values. See examples below.'),(0,r.kt)("h4",{parentName:"admonition",id:"clauses-that-will-be-deemed-invalid"},"Clauses that will be deemed invalid"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// 1 is a scalar value and `iq` is a field name\nparseSQL(`SELECT * FROM tbl WHERE age between 1 and iq`);\n// List contains a mix of scalar values and field names\nparseSQL(`SELECT * FROM tbl WHERE firstName IN (lastName, 'Steve', 'Stevie')`);\n")),(0,r.kt)("h4",{parentName:"admonition",id:"clauses-that-will-probably-be-deemed-valid"},"Clauses that will (probably) be deemed valid"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Both are field names\nparseSQL(`SELECT * FROM tbl WHERE age between numChildren and iq`);\n// Both are scalar values\nparseSQL(`SELECT * FROM tbl WHERE age between 26 and 52`);\n// All items are field names\nparseSQL(`SELECT * FROM tbl WHERE firstName IN (lastName, middleName)`);\n// All items are scalar values\nparseSQL(`SELECT * FROM tbl WHERE firstName IN ('Steve', 'Stevie')`);\n"))))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);