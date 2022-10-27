"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75553:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(83117),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../typescript"},"TypeScript")," page for information about the types and interfaces referenced below.")))}i.isMDXComponent=!0},18048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(83117),r=(n(67294),n(3905)),o=n(75553);const i={title:"Import",description:"Convert SQL and other formats to query builder objects"},l=void 0,p={unversionedId:"api/import",id:"version-4/api/import",title:"Import",description:"Convert SQL and other formats to query builder objects",source:"@site/versioned_docs/version-4/api/import.mdx",sourceDirName:"api",slug:"/api/import",permalink:"/docs/4/api/import",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/api/import.mdx",tags:[],version:"4",frontMatter:{title:"Import",description:"Convert SQL and other formats to query builder objects"},sidebar:"mySidebar",previous:{title:"Export",permalink:"/docs/4/api/export"},next:{title:"Validation",permalink:"/docs/4/api/validation"}},s={},u=[{value:"SQL",id:"sql",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Common Expression Language (CEL)",id:"common-expression-language-cel",level:2},{value:"JsonLogic",id:"jsonlogic",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Lists as arrays",id:"lists-as-arrays",level:3},{value:"Independent combinators",id:"independent-combinators",level:3},{value:"Fields as value source",id:"fields-as-value-source",level:3}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"TypeScriptAdmonition"}),(0,r.kt)("h2",{id:"sql"},"SQL"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," function to convert SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statements into a format suitable for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component's ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," prop. The function signature is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function parseSQL(sql: string, options?: ParseSQLOptions): RuleGroupTypeAny;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," takes a SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement (either the full statement or the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause by itself). Try it out in the ",(0,r.kt)("a",{parentName:"p",href:"/demo"},"demo"),' by clicking the "Load from SQL" button.'),(0,r.kt)("p",null,"The optional second parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSQL")," is an options object that configures how the function handles named or anonymous bind variables within the SQL string."),(0,r.kt)("p",null,'Click the "Import SQL" button in ',(0,r.kt)("a",{parentName:"p",href:"/demo"},"the demo")," to try it out."),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"Running any of the following statements will produce the same result (see below):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`);\n\nparseSQL(`SELECT * FROM t WHERE firstName = ? AND lastName = ?`, {\n  params: ['Steve', 'Vai'],\n});\n\nparseSQL(`SELECT * FROM t WHERE firstName = :p1 AND lastName = :p2`, {\n  params: { p1: 'Steve', p2: 'Vai' },\n});\n\nparseSQL(`SELECT * FROM t WHERE firstName = $p1 AND lastName = $p2`, {\n  params: { p1: 'Steve', p2: 'Vai' },\n  paramPrefix: '$',\n});\n")),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"common-expression-language-cel"},"Common Expression Language (CEL)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseCEL")," takes a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/cel-spec"},"CEL")," string and converts it to ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"."),(0,r.kt)("p",null,'Click the "Import CEL" button in ',(0,r.kt)("a",{parentName:"p",href:"/demo"},"the demo")," to try it out."),(0,r.kt)("h2",{id:"jsonlogic"},"JsonLogic"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseJsonLogic")," takes a ",(0,r.kt)("a",{parentName:"p",href:"https://jsonlogic.com/"},"JsonLogic")," object and converts it to ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),"."),(0,r.kt)("p",null,'Click the "Import JsonLogic" button in ',(0,r.kt)("a",{parentName:"p",href:"/demo"},"the demo")," to try it out."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"lists-as-arrays"},"Lists as arrays"),(0,r.kt)("p",null,"To generate actual arrays instead of comma-separated strings for lists of values following ",(0,r.kt)("inlineCode",{parentName:"p"},"IN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BETWEEN")," operators, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"listsAsArrays")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE lastName IN ('Vai', 'Vaughan') AND age BETWEEN 20 AND 100`, {\n  listsAsArrays: true;\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "lastName",\n      "operator": "in",\n      "value": ["Vai", "Vaughan"]\n    },\n    {\n      "field": "age",\n      "operator": "between",\n      "value": [20, 100]\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"independent-combinators"},"Independent combinators"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"independentCombinators")," option is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"parse*")," functions will output a query with combinator identifiers between sibling rules/groups."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE firstName = 'Steve' AND lastName = 'Vai'`, {\n  independentCombinators: true,\n});\n")),(0,r.kt)("p",null,"Output (",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "Steve"\n    },\n    "and",\n    {\n      "field": "lastName",\n      "operator": "=",\n      "value": "Vai"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"fields-as-value-source"},"Fields as value source"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," option (which accepts the same types as the ",(0,r.kt)("a",{parentName:"p",href:"./querybuilder#fields"},(0,r.kt)("inlineCode",{parentName:"a"},"fields")," prop"),") is provided, and ",(0,r.kt)("em",{parentName:"p"},"only")," if it is provided, then ",(0,r.kt)("inlineCode",{parentName:"p"},"parse*")," functions will validate clauses that have a field identifier to the right of the operator instead of a primitive value. A ",(0,r.kt)("inlineCode",{parentName:"p"},"getValueSources")," function (with the same signature as the ",(0,r.kt)("a",{parentName:"p",href:"./querybuilder#getvaluesources"},"prop of the same name"),") can also be provided to help validate rules."),(0,r.kt)("p",null,'In order for such a rule to be considered valid, one of the following must be an array that includes the string "field": 1) the ',(0,r.kt)("inlineCode",{parentName:"p"},"getValueSources")," return value, 2) the field's ",(0,r.kt)("inlineCode",{parentName:"p"},"valueSources")," property return value, or 3) the field's ",(0,r.kt)("inlineCode",{parentName:"p"},"valueSources")," property itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseSQL(`SELECT * FROM t WHERE firstName = lastName`, {\n  fields: [\n    { name: 'firstName', label: 'First Name' },\n    { name: 'lastName', label: 'Last Name' },\n  ],\n  getValueSources: () => ['value', 'field'],\n});\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "firstName",\n      "operator": "=",\n      "value": "lastName",\n      "valueSource": "field"\n    }\n  ]\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"parse*"),' functions will only validate clauses where "field" is the ',(0,r.kt)("em",{parentName:"p"},"only"),' value source. Operators that take multiple values, like "between" and "in", must only have field names to the right of the operator, not a mix of field names and primitive values.')))}d.isMDXComponent=!0}}]);