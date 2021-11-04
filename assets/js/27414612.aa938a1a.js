"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[767],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9769:function(e,t,a){a.d(t,{ZP:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={toc:[]};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"../typescript"},"TypeScript")," page for information about the types and interfaces referenced below."))))}p.isMDXComponent=!0},5879:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(9769),l=["components"],p={title:"Export"},s=void 0,u={unversionedId:"api/export",id:"api/export",isDocsHomePage:!1,title:"Export",description:"Use the formatQuery function to export queries in various formats.",source:"@site/docs/api/export.md",sourceDirName:"api",slug:"/api/export",permalink:"/docs/api/export",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/api/export.md",tags:[],version:"current",frontMatter:{title:"Export"},sidebar:"mySidebar",previous:{title:"<QueryBuilder />",permalink:"/docs/api/querybuilder"},next:{title:"Import",permalink:"/docs/api/import"}},d=[{value:"Basic usage",id:"basic-usage",children:[{value:"JSON",id:"json",children:[],level:3},{value:"JSON without identifiers",id:"json-without-identifiers",children:[],level:3},{value:"SQL",id:"sql",children:[],level:3},{value:"Parameterized SQL",id:"parameterized-sql",children:[],level:3},{value:"Named parameters",id:"named-parameters",children:[],level:3},{value:"MongoDB",id:"mongodb",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Value processor",id:"value-processor",children:[],level:3},{value:"Quote field names",id:"quote-field-names",children:[],level:3},{value:"Parameter prefix",id:"parameter-prefix",children:[],level:3},{value:"Fallback expression",id:"fallback-expression",children:[],level:3}],level:2},{value:"Validation",id:"validation",children:[{value:"Automatic validation",id:"automatic-validation",children:[],level:3}],level:2}],m={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.ZP,{mdxType:"TypeScriptAdmonition"}),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery")," function to export queries in various formats."),(0,i.kt)("p",null,"The function signature is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function formatQuery(\n  query: RuleGroupTypeAny,\n  options?: ExportFormat | FormatQueryOptions\n): string | ParameterizedSQL | ParameterizedNamedSQL;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery")," parses a given query into one of the following formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JSON (with or without ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"s and ",(0,i.kt)("inlineCode",{parentName:"li"},"path"),"s)"),(0,i.kt)("li",{parentName:"ul"},"SQL ",(0,i.kt)("inlineCode",{parentName:"li"},"WHERE")," clause"),(0,i.kt)("li",{parentName:"ul"},"Parameterized SQL (with anonymous or named parameters)"),(0,i.kt)("li",{parentName:"ul"},"MongoDB")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The inversion operator (setting ",(0,i.kt)("inlineCode",{parentName:"p"},"not: true")," for a rule group) is currently unsupported for the MongoDB format, but rules can be created using the ",(0,i.kt)("inlineCode",{parentName:"p"},'"!="')," operator."))),(0,i.kt)("p",null,"For the next few sections, assume the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," variable has been defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      id: 'rule1',\n      field: 'firstName',\n      value: 'Steve',\n      operator: '='\n    },\n    {\n      id: 'rule2',\n      field: 'lastName',\n      value: 'Vai',\n      operator: '='\n    }\n  ]\n};\n")),(0,i.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,i.kt)("h3",{id:"json"},"JSON"),(0,i.kt)("p",null,"To export the internal query representation like what ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," passes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"onQueryChange")," callback, formatted by ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),", simply pass the query to ",(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query);\n// or\nformatQuery(query, 'json');\n")),(0,i.kt)("p",null,"The output will be a multi-line string representation of the query using 2 spaces for indentation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'`{\n  "id": "root",\n  "path": [],\n  "combinator": "and",\n  "not": false,\n  "rules": [\n    {\n      "id": "rule1",\n      "path": [\n        0\n      ],\n      "field": "firstName",\n      "value": "Steve",\n      "operator": "="\n    },\n    {\n      "id": "rule2",\n      "path": [\n        1\n      ],\n      "field": "lastName",\n      "value": "Vai",\n      "operator": "="\n    }\n  ]\n}`\n')),(0,i.kt)("h3",{id:"json-without-identifiers"},"JSON without identifiers"),(0,i.kt)("p",null,"To export the internal query representation without formatting (single-line, no indentation) and without the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),' attributes on each object, use the "json_without_ids" format. This is useful if you need to serialize the query for storage.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'json_without_ids');\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'`{"combinator":"and","not":false,"rules":[{"field":"firstName","value":"Steve","operator":"="},{"field":"lastName","value":"Vai","operator":"="}]}`\n')),(0,i.kt)("h3",{id:"sql"},"SQL"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery")," can export SQL compatible with most RDBMS engines. To export a SQL ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),' clause, use the "sql" format.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'sql');\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"`(firstName = 'Steve' and lastName = 'Vai')`\n")),(0,i.kt)("h3",{id:"parameterized-sql"},"Parameterized SQL"),(0,i.kt)("p",null,"To export a SQL ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),' clause with bind variables instead of explicit values, use the "parameterized" format. The output is an object with ',(0,i.kt)("inlineCode",{parentName:"p"},"sql")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'parameterized');\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  sql: "(firstName = ? and lastName = ?)",\n  params: ["Steve", "Vai"]\n}\n')),(0,i.kt)("h3",{id:"named-parameters"},"Named parameters"),(0,i.kt)("p",null,"If anonymous parameters (aka bind variables) are not acceptable, ",(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery"),' can output named parameters based on the field names. Use the "parameterized_named" format. The output object is similar to the "parameterized" format, but the ',(0,i.kt)("inlineCode",{parentName:"p"},"params")," attribute is an object instead of an array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'parameterized_named');\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  sql: "(firstName = :firstName_1 and lastName = :lastName_1)",\n  params: {\n    firstName_1: "Steve",\n    lastName_1: "Vai"\n  }\n}\n')),(0,i.kt)("h3",{id:"mongodb"},"MongoDB"),(0,i.kt)("p",null,'For MongoDB-compatible output, use the "mongodb" format.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'mongodb');\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'`{$and:[{firstName:{$eq:"Steve"}},{lastName:{$eq:"Vai"}}]}`\n')),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"An object can be passed as the second argument instead of a string in order to have more detailed control over the output."),(0,i.kt)("h3",{id:"value-processor"},"Value processor"),(0,i.kt)("p",null,"If you need to control the way the value portion of the output is processed, you can specify a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"valueProcessor"),' (only applicable for "sql" format).'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'instrument',\n      value: ['Guitar', 'Vocals'],\n      operator: 'in'\n    },\n    {\n      field: 'lastName',\n      value: 'Vai',\n      operator: '='\n    }\n  ]\n};\n\nconst valueProcessor = (field, operator, value) => {\n  if (operator === 'in') {\n    // Assuming `value` is an array, such as from a multi-select\n    return `(${value.map((v) => `\"${v.trim()}\"`).join(',')})`;\n  } else {\n    return defaultValueProcessor(field, operator, value);\n  }\n};\n\nformatQuery(query, { format: 'sql', valueProcessor });\n// Output: \"(instrument in ('Guitar','Vocals') and lastName = 'Vai')\"\n")),(0,i.kt)("h3",{id:"quote-field-names"},"Quote field names"),(0,i.kt)("p",null,"Some database engines wrap field names in backticks. This can be configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"quoteFieldNamesWith")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'formatQuery(query, { format: "sql", quoteFieldNamesWith: "`" });\n// Output: "(`firstName` = \'Steve\' and `lastName` = \'Vai\')"\n')),(0,i.kt)("h3",{id:"parameter-prefix"},"Parameter prefix"),(0,i.kt)("p",null,'If the "parameterized_named" format is used, configure the parameter prefix used in the ',(0,i.kt)("inlineCode",{parentName:"p"},"sql")," string with the ",(0,i.kt)("inlineCode",{parentName:"p"},"paramPrefix"),' option (should the default ":" be inappropriate).'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const p = formatQuery(query, { format: "parameterized_named", paramPrefix: "$" });\n// p.sql === "(firstName = $firstName_1 and lastName = $lastName_1)"\n')),(0,i.kt)("h3",{id:"fallback-expression"},"Fallback expression"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fallbackExpression")," is a string that will be part of the output when ",(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery")," can't quite figure out what to do for a particular rule or group. The intent is to maintain valid syntax while (hopefully) not detrimentally affecting the query criteria."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"fallbackExpression")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"(1 = 1)"'),' for the "sql", "parameterized", and "parameterized_named" formats, and ',(0,i.kt)("inlineCode",{parentName:"p"},'"{$and:[{$expr:true}]}"'),' for the "mongodb" format.'),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"The validation options (",(0,i.kt)("inlineCode",{parentName:"p"},"validator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," \u2013 see ",(0,i.kt)("a",{parentName:"p",href:"./validation"},"Validation")," for more information) only affect the output when ",(0,i.kt)("inlineCode",{parentName:"p"},"format"),' is "sql", "parameterized", "parameterized_named", or "mongodb". If the ',(0,i.kt)("inlineCode",{parentName:"p"},"validator")," function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"fallbackExpression")," will be returned. Otherwise, groups and rules marked as invalid (either by the validation map produced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"validator")," function or the result of the field-based ",(0,i.kt)("inlineCode",{parentName:"p"},"validator")," function) will be ignored."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const query: RuleGroupType = {\n  id: 'root',\n  rules: [\n    {\n      id: 'r1',\n      field: 'firstName',\n      value: '',\n      operator: '='\n    },\n    {\n      id: 'r2',\n      field: 'lastName',\n      value: 'Vai',\n      operator: '='\n    }\n  ],\n  combinator: 'and',\n  not: false\n};\n\n// Query is invalid based on the validator function\nformatQuery(query, {\n  format: 'sql',\n  validator: () => false\n});\n// Output: \"(1 = 1)\" <-- see `fallbackExpression` option\n\n// Rule \"r1\" is invalid based on the validation map\nformatQuery(query, {\n  format: 'sql',\n  validator: () => ({ r1: false })\n});\n// Output: \"(lastName = 'Vai')\" <-- skipped `firstName` rule with `id === 'r1'`\n\n// Rule \"r1\" is invalid based on the field validator for `firstName`\nformatQuery(query, {\n  format: 'sql',\n  fields: [{ name: 'firstName', validator: () => false }]\n});\n// Output: \"(lastName = 'Vai')\" <-- skipped `firstName` rule because field validator returned `false`\n")),(0,i.kt)("h3",{id:"automatic-validation"},"Automatic validation"),(0,i.kt)("p",null,"A basic form of validation will be used by ",(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery"),' for the "in", "notIn", "between", and "notBetween" operators when the output format is "sql", "parameterized", "parameterized_named", or "mongodb". This validation is used regardless of the presence of any ',(0,i.kt)("inlineCode",{parentName:"p"},"validator")," options either at the query or field level:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Rules that specify an "in" or "notIn" ',(0,i.kt)("inlineCode",{parentName:"li"},"operator")," will be deemed invalid if the rule's ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is neither an array with at least one element (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"value.length > 0"),") nor a non-empty string."),(0,i.kt)("li",{parentName:"ul"},'Rules that specify a "between" or "notBetween" ',(0,i.kt)("inlineCode",{parentName:"li"},"operator")," will be deemed invalid if the rule's ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is neither an array of length two (",(0,i.kt)("inlineCode",{parentName:"li"},"value.length === 2"),") nor a string with exactly one comma that isn't the first or last character (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"value.split(',').length === 2")," and neither element is an empty string).")))}c.isMDXComponent=!0}}]);