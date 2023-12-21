"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1781],{98998:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(24246),a=n(71670);const o={title:"Export",description:"Convert query builder objects to SQL, etc."},t=void 0,i={id:"utils/export",title:"Export",description:"Convert query builder objects to SQL, etc.",source:"@site/docs/utils/export.md",sourceDirName:"utils",slug:"/utils/export",permalink:"/docs/next/utils/export",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/utils/export.md",tags:[],version:"current",frontMatter:{title:"Export",description:"Convert query builder objects to SQL, etc."},sidebar:"mySidebar",previous:{title:"Utilities",permalink:"/docs/next/category/utilities"},next:{title:"Import",permalink:"/docs/next/utils/import"}},l={},d=[{value:"Basic usage",id:"basic-usage",level:2},{value:"JSON",id:"json",level:3},{value:"JSON without identifiers",id:"json-without-identifiers",level:3},{value:"SQL",id:"sql",level:3},{value:"Parameterized SQL",id:"parameterized-sql",level:4},{value:"Named parameters",id:"named-parameters",level:4},{value:"MongoDB",id:"mongodb",level:3},{value:"Common Expression Language",id:"common-expression-language",level:3},{value:"Spring Expression Language",id:"spring-expression-language",level:3},{value:"JsonLogic",id:"jsonlogic",level:3},{value:"ElasticSearch",id:"elasticsearch",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Parse numbers",id:"parse-numbers",level:3},{value:"Rule processor",id:"rule-processor",level:3},{value:"Value processor",id:"value-processor",level:3},{value:"Legacy <code>valueProcessor</code> behavior",id:"legacy-valueprocessor-behavior",level:4},{value:"Quote field names",id:"quote-field-names",level:3},{value:"Parameter prefix",id:"parameter-prefix",level:3},{value:"Fallback expression",id:"fallback-expression",level:3},{value:"Value sources",id:"value-sources",level:3},{value:"Placeholder values",id:"placeholder-values",level:3},{value:"Validation",id:"validation",level:2},{value:"Automatic validation",id:"automatic-validation",level:3}];function c(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.em,{children:["Refer to the ",(0,s.jsx)(r.a,{href:"../typescript",children:"TypeScript reference"})," page for information about the types and interfaces referenced below."]})}),"\n"]})}),"\n",(0,s.jsxs)(r.p,{children:["Use the ",(0,s.jsx)(r.code,{children:"formatQuery"})," function to export queries in various formats. The function signature is:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"function formatQuery(\n  query: RuleGroupTypeAny,\n  options?: ExportFormat | FormatQueryOptions\n): string | ParameterizedSQL | ParameterizedNamedSQL | RQBJsonLogic;\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"formatQuery"})," converts a given query into one of the following formats:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"JSON (either the full query object or only the required properties)"}),"\n",(0,s.jsxs)(r.li,{children:["SQL ",(0,s.jsx)(r.code,{children:"WHERE"})," clause"]}),"\n",(0,s.jsx)(r.li,{children:"Parameterized SQL (with either anonymous or named parameters)"}),"\n",(0,s.jsx)(r.li,{children:"MongoDB"}),"\n",(0,s.jsx)(r.li,{children:"Common Expression Language (CEL)"}),"\n",(0,s.jsx)(r.li,{children:"Spring Expression Language (SpEL)"}),"\n",(0,s.jsx)(r.li,{children:"JsonLogic"}),"\n",(0,s.jsx)(r.li,{children:"ElasticSearch"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["For the next few sections, assume the ",(0,s.jsx)(r.code,{children:"query"})," variable has been defined as:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      id: 'rule1',\n      field: 'firstName',\n      operator: '=',\n      value: 'Steve',\n    },\n    {\n      id: 'rule2',\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(r.admonition,{type:"tip",children:[(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:(0,s.jsxs)(r.em,{children:[(0,s.jsx)("abbr",{title:"Too long; didn't read",children:"TL;DR"}),": For best results, use the ",(0,s.jsx)(r.a,{href:"./misc#defaults",children:"default combinators and operators"})," or map your custom combinators/operators to the defaults with ",(0,s.jsx)(r.a,{href:"./misc#transformquery",children:(0,s.jsx)(r.code,{children:"transformQuery"})}),"."]})})}),"\n"]}),(0,s.jsxs)(r.p,{children:["While ",(0,s.jsx)(r.code,{children:"formatQuery"})," technically accepts query objects of type ",(0,s.jsx)(r.code,{children:"RuleGroupTypeAny"})," (i.e. ",(0,s.jsx)(r.code,{children:"RuleGroupType"})," or ",(0,s.jsx)(r.code,{children:"RuleGroupTypeIC"}),"), it is not guaranteed to process a query correctly unless the query also conforms to the type ",(0,s.jsx)(r.code,{children:"DefaultRuleGroupTypeAny"})," (i.e. ",(0,s.jsx)(r.code,{children:"DefaultRuleGroupType"})," or ",(0,s.jsx)(r.code,{children:"DefaultRuleGroupTypeIC"}),")."]}),(0,s.jsxs)(r.p,{children:["In practice, this means that all ",(0,s.jsx)(r.code,{children:"combinator"})," and ",(0,s.jsx)(r.code,{children:"operator"})," properties in the query must match the ",(0,s.jsx)(r.code,{children:"name"})," of an element in ",(0,s.jsxs)(r.a,{href:"./misc#defaults",children:[(0,s.jsx)(r.code,{children:"defaultCombinators"})," or ",(0,s.jsx)(r.code,{children:"defaultOperators"})]}),", respectively. If you implement custom combinator/operator names, you can use the ",(0,s.jsxs)(r.a,{href:"./misc#transformquery",children:[(0,s.jsx)(r.code,{children:"transformQuery"})," function"]})," to map your query properties to the defaults."]}),(0,s.jsxs)(r.p,{children:['For example, assume your implementation replaces the default "between" operator (',(0,s.jsx)(r.code,{children:'{ name: "between", label: "between" }'}),") with ",(0,s.jsx)(r.code,{children:'{ name: "b/w", label: "b/w" }'}),". Any rules using this operator would have ",(0,s.jsx)(r.code,{children:'operator: "b/w"'})," instead of ",(0,s.jsx)(r.code,{children:'operator: "between"'}),". So if a query looked like this..."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "someNumber",\n      "operator": "b/w",\n      "value": "12,14"\n    }\n  ]\n}\n'})}),(0,s.jsxs)(r.p,{children:["...you could run it through ",(0,s.jsx)(r.code,{children:"transformQuery"})," with the ",(0,s.jsx)(r.code,{children:"operatorMap"})," option:"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:'const newQuery = transformQuery(query, { operatorMap: { \'b/w\': \'between\' } });\n// {\n//   "combinator": "and",\n//   "rules": [\n//     {\n//       "field": "someNumber",\n//       "operator": "between",\n//       "value": "12,14"\n//     }\n//   ]\n// }\n'})}),(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"newQuery"})," object would be ready for processing by ",(0,s.jsx)(r.code,{children:"formatQuery"}),', including its special handling of the "between" operator.']})]}),"\n",(0,s.jsx)(r.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(r.h3,{id:"json",children:"JSON"}),"\n",(0,s.jsxs)(r.p,{children:["To export the internal query representation like what ",(0,s.jsx)(r.code,{children:"react-querybuilder"})," passes to the ",(0,s.jsx)(r.code,{children:"onQueryChange"})," callback, formatted by ",(0,s.jsx)(r.code,{children:"JSON.stringify"}),", simply pass the query to ",(0,s.jsx)(r.code,{children:"formatQuery"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query);\n// or\nformatQuery(query, 'json');\n"})}),"\n",(0,s.jsx)(r.p,{children:"The output will be a multi-line string representation of the query using 2 spaces for indentation."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:'`{\n  "id": "root",\n  "combinator": "and",\n  "not": false,\n  "rules": [\n    {\n      "id": "rule1",\n      "field": "firstName",\n      "value": "Steve",\n      "operator": "="\n    },\n    {\n      "id": "rule2",\n      "field": "lastName",\n      "value": "Vai",\n      "operator": "="\n    }\n  ]\n}`;\n'})}),"\n",(0,s.jsx)(r.h3,{id:"json-without-identifiers",children:"JSON without identifiers"}),"\n",(0,s.jsxs)(r.p,{children:["To export the internal query representation without formatting (single-line, no indentation) and without the ",(0,s.jsx)(r.code,{children:"id"})," or ",(0,s.jsx)(r.code,{children:"path"}),' attributes on each object, use the "json_without_ids" format. This is useful if you need to serialize the query for storage.']}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'json_without_ids');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:'`{"combinator":"and","not":false,"rules":[{"field":"firstName","value":"Steve","operator":"="},{"field":"lastName","value":"Vai","operator":"="}]}`;\n'})}),"\n",(0,s.jsx)(r.h3,{id:"sql",children:"SQL"}),"\n",(0,s.jsxs)(r.p,{children:["To export a SQL ",(0,s.jsx)(r.code,{children:"WHERE"}),' clause, use the "sql" format. The output should be compatible with almost all major RDBMS engines, but may require ',(0,s.jsx)(r.a,{href:"#configuration",children:"configuration"})," in some cases."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'sql');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"`(firstName = 'Steve' and lastName = 'Vai')`;\n"})}),"\n",(0,s.jsx)(r.h4,{id:"parameterized-sql",children:"Parameterized SQL"}),"\n",(0,s.jsxs)(r.p,{children:["To export a SQL ",(0,s.jsx)(r.code,{children:"WHERE"}),' clause with bind variables instead of inline values, use the "parameterized" format. The output is an object with ',(0,s.jsx)(r.code,{children:"sql"})," and ",(0,s.jsx)(r.code,{children:"params"})," attributes."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'parameterized');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "sql": "(firstName = ? and lastName = ?)",\n  "params": ["Steve", "Vai"]\n}\n'})}),"\n",(0,s.jsx)(r.h4,{id:"named-parameters",children:"Named parameters"}),"\n",(0,s.jsxs)(r.p,{children:["If anonymous parameters (aka bind variables) are not acceptable, ",(0,s.jsx)(r.code,{children:"formatQuery"}),' can name each parameter based on the field name when the "parameterized_named" format is used. The output object is similar to the "parameterized" format, but the ',(0,s.jsx)(r.code,{children:"params"})," attribute is an object instead of an array."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'parameterized_named');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "sql": "(firstName = :firstName_1 and lastName = :lastName_1)",\n  "params": {\n    "firstName_1": "Steve",\n    "lastName_1": "Vai"\n  }\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["See also: ",(0,s.jsx)(r.a,{href:"#parameter-prefix",children:(0,s.jsx)(r.code,{children:"paramPrefix"})}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"mongodb",children:"MongoDB"}),"\n",(0,s.jsx)(r.p,{children:'For MongoDB-compatible output, use the "mongodb" format.'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'mongodb');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:'`{"$and":[{"firstName":"Steve"},{"lastName":"Vai"}]}`;\n'})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["The MongoDB export format does not support the inversion operator (setting ",(0,s.jsx)(r.code,{children:"not: true"})," for a rule group), however rules ",(0,s.jsx)(r.em,{children:"can"})," be created using the ",(0,s.jsx)(r.code,{children:'"!="'})," operator."]})}),"\n",(0,s.jsx)(r.h3,{id:"common-expression-language",children:"Common Expression Language"}),"\n",(0,s.jsx)(r.p,{children:'For Common Expression Language (CEL) output, use the "cel" format.'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'cel');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:'`firstName = "Steve" && lastName = "Vai"`;\n'})}),"\n",(0,s.jsx)(r.h3,{id:"spring-expression-language",children:"Spring Expression Language"}),"\n",(0,s.jsx)(r.p,{children:'For Spring Expression Language (SpEL) output, use the "spel" format.'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'spel');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"`firstName == 'Steve' and lastName == 'Vai'`;\n"})}),"\n",(0,s.jsx)(r.h3,{id:"jsonlogic",children:"JsonLogic"}),"\n",(0,s.jsxs)(r.p,{children:['The "jsonlogic" format produces an object that can be processed by the JsonLogic ',(0,s.jsx)(r.code,{children:"apply"})," function (see ",(0,s.jsx)(r.a,{href:"https://jsonlogic.com/",children:"https://jsonlogic.com/"}),")."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'jsonlogic');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{ "and": [{ "==": [{ "var": "firstName" }, "Steve"] }, { "==": [{ "var": "lastName" }, "Vai"] }] }\n'})}),"\n",(0,s.jsxs)(r.admonition,{type:"tip",children:[(0,s.jsxs)(r.p,{children:["Before using JsonLogic's ",(0,s.jsx)(r.code,{children:"apply()"})," method to apply the result of ",(0,s.jsx)(r.code,{children:"formatQuery(query, 'jsonlogic')"}),", register the additional operators ",(0,s.jsx)(r.code,{children:"startsWith"})," and ",(0,s.jsx)(r.code,{children:"endsWith"})," exported by ",(0,s.jsx)(r.code,{children:"react-querybuilder"}),". These are not ",(0,s.jsx)(r.a,{href:"https://jsonlogic.com/operations.html",children:"standard JsonLogic operations"}),', but they correspond to the "beginsWith" and "endsWith" operators, respectively, from ',(0,s.jsx)(r.code,{children:"react-querybuilder"}),"."]}),(0,s.jsxs)(r.p,{children:["The most future-proof way is to loop through the ",(0,s.jsx)(r.code,{children:"jsonLogicAdditionalOperators"})," entries like below. This way if any more custom operators are added in the future, they will be automatically available."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { add_operation, apply } from 'json-logic-js';\nimport { jsonLogicAdditionalOperators } from 'react-querybuilder';\n\nfor (const [op, func] of Object.entries(jsonLogicAdditionalOperators)) {\n  add_operation(op, func);\n}\n\napply({ startsWith: [{ var: 'firstName' }, 'Stev'] }, data);\n"})})]}),"\n",(0,s.jsx)(r.h3,{id:"elasticsearch",children:"ElasticSearch"}),"\n",(0,s.jsxs)(r.p,{children:['The "elasticsearch" format produces an object that can be processed by ',(0,s.jsx)(r.a,{href:"https://www.elastic.co/",children:"ElasticSearch"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, 'elasticsearch');\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{ "bool": { "must": [{ "term": { "firstName": "Steve" } }, { "term": { "lastName": "Vai" } }] } }\n'})}),"\n",(0,s.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(r.p,{children:"An object can be passed as the second argument instead of a string to have more fine-grained control over the output."}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"parseNumbers"}),' is the only configuration option that applies to the "json" and "json_without_ids" formats.']})}),"\n",(0,s.jsx)(r.h3,{id:"parse-numbers",children:"Parse numbers"}),"\n",(0,s.jsxs)(r.p,{children:["Since HTML ",(0,s.jsx)(r.code,{children:"<input>"})," controls store values as strings (even when ",(0,s.jsx)(r.code,{children:'type="number"'}),"), exporting a query to various formats may produce a string representation of a value when a true numeric value is required or more appropriate. Set the ",(0,s.jsx)(r.code,{children:"parseNumbers"})," option to ",(0,s.jsx)(r.code,{children:"true"})," and ",(0,s.jsx)(r.code,{children:"formatQuery"})," will attempt to convert all values to numbers, falling back to the original value if ",(0,s.jsx)(r.code,{children:"parseFloat(value)"})," returns ",(0,s.jsx)(r.code,{children:"NaN"})," (not a number)."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'digits',\n      operator: '=',\n      value: '20',\n    },\n    {\n      field: 'age',\n      operator: 'between',\n      value: '26, 52',\n    },\n    {\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n\n// Default configuration - all values are strings:\nformatQuery(query, { format: 'sql' });\n// Returns: \"(digits = '20' and age between '26' and '52' and lastName = 'Vai')\"\n\n// `parseNumbers: true` - numeric strings converted to actual numbers:\nformatQuery(query, { format: 'sql', parseNumbers: true });\n// Returns: \"(digits = 20 and age between 26 and 52 and lastName = 'Vai')\"\n"})}),"\n",(0,s.jsxs)(r.admonition,{type:"info",children:[(0,s.jsxs)(r.p,{children:['To avoid information loss, this option is more strict about what qualifies as "numeric" than ',(0,s.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat",children:["the standard ",(0,s.jsx)(r.code,{children:"parseFloat"})," function"]}),". To oversimplify a bit, ",(0,s.jsx)(r.code,{children:"parseFloat"})," works with any string that ",(0,s.jsx)(r.em,{children:"starts"})," with a numeric sequence, ignoring the rest of the string beginning with the first non-numeric character. In contrast, when ",(0,s.jsx)(r.code,{children:"parseNumbers"})," is ",(0,s.jsx)(r.code,{children:"true"}),", ",(0,s.jsx)(r.code,{children:"formatQuery"})," will only convert a ",(0,s.jsx)(r.code,{children:"value"})," to a ",(0,s.jsx)(r.code,{children:"number"})," if it appears to be numeric ",(0,s.jsx)(r.em,{children:"in its entirety"})," (after trimming whitespace)."]}),(0,s.jsxs)(r.p,{children:["Each of the following expressions evaluates to ",(0,s.jsx)(r.code,{children:"true"}),":"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"// Everything after the '3' is ignored by `parseFloat`\nparseFloat('000123abcdef') === 123;\n\n// `value` contains non-numeric characters, so remains as-is\nformatQuery(\n  { rules: [{ field: 'f', operator: '=', value: '000123abcdef' }] },\n  { format: 'sql', parseNumbers: true }\n) === \"(f = '000123abcdef')\";\n\n// `value` is wholly numeric (after trimming whitespace) so it gets converted to a number\nformatQuery(\n  { rules: [{ field: 'f', operator: '=', value: '  000123  ' }] },\n  { format: 'sql', parseNumbers: true }\n) === '(f = 123)';\n"})})]}),"\n",(0,s.jsx)(r.h3,{id:"rule-processor",children:"Rule processor"}),"\n",(0,s.jsxs)(r.p,{children:["To customize the format of exported rules, use the ",(0,s.jsx)(r.code,{children:"ruleProcessor"})," configuration option. Rules will only be passed to the provided processor function if they first pass ",(0,s.jsx)(r.a,{href:"#validation",children:"validation"}),". The function will be called like this:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"ruleProcessor(rule, { parseNumbers, escapeQuotes });\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The first argument is the ",(0,s.jsx)(r.code,{children:"RuleType"})," object from the query. The second argument is a ",(0,s.jsx)(r.code,{children:"ValueProcessorOptions"})," object. ",(0,s.jsx)(r.code,{children:"parseNumbers"})," is copied directly from the ",(0,s.jsx)(r.code,{children:"formatQuery"})," options (default ",(0,s.jsx)(r.code,{children:"false"}),"), and ",(0,s.jsx)(r.code,{children:"escapeQuotes"})," is ",(0,s.jsx)(r.code,{children:"true"})," or ",(0,s.jsx)(r.code,{children:"false"})," when appropriate as determined by the internal ",(0,s.jsx)(r.code,{children:"formatQuery"})," logic (generally speaking, quotes are escaped for string values and not escaped otherwise, as when values represent field names)."]}),"\n",(0,s.jsxs)(r.p,{children:["The default rule processors for each format are available as exports from ",(0,s.jsx)(r.code,{children:"react-querybuilder"}),":"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultRuleProcessorCEL"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultRuleProcessorJsonLogic"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultRuleProcessorMongoDB"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultRuleProcessorSpEL"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultRuleProcessorSQL"})}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"ruleProcessor"}),' does not apply to the "parameterized" or "parameterized_named" formats (yet), but ',(0,s.jsx)(r.code,{children:"valueProcessor"})," is available."]})}),"\n",(0,s.jsx)(r.p,{children:"You can use the appropriate default rule processor as a fallback so your custom rule processor doesn't have to cover all cases, as shown below."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'firstName',\n      operator: 'has', // <-- non-standard operator\n      value: 'S',\n    },\n    {\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n\nconst customRuleProcessor: RuleProcessor = (rule, options) => {\n  // The \"has\" operator is not handled by the default processor\n  if (rule.operator === 'has') {\n    return { in: [rule.value, { var: rule.field }] };\n  }\n\n  // Defer to the default processor for all other operators\n  return defaultRuleProcessorJsonLogic(rule, options);\n};\n\nformatQuery(query, { format: 'jsonlogic', ruleProcessor: customRuleProcessor });\n// Returns:\n// {\n//   and: [\n//     { in: [\"S\", { var: \"firstName\" }] },\n//     { \"==\": [{ var: \"lastName\" }, \"Vai\"] }\n//   ]\n// }\n"})}),"\n",(0,s.jsx)(r.p,{children:"This SQL example (using Oracle syntax) demonstrates the generation of a case-insensitive condition:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"// `query` is the same as in the previous example\n\nconst customRuleProcessor: RuleProcessor = (rule, options) => {\n  if (rule.operator === 'has') {\n    return `UPPER(${rule.field}) LIKE UPPER('%${rule.value}%')`;\n  }\n\n  return defaultRuleProcessorSQL(rule, options);\n};\n\nformatQuery(query, { format: 'sql', ruleProcessor: customRuleProcessor });\n// Returns: \"(UPPER(firstName) LIKE UPPER('%S%') and lastName = 'Vai')\"\n//            ^------------custom--------------^ ^------default-----^\n"})}),"\n",(0,s.jsx)(r.h3,{id:"value-processor",children:"Value processor"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"valueProcessor"})," accepts the same arguments as ",(0,s.jsx)(r.code,{children:"ruleProcessor"}),', but only affects the "value" portion of the output (to the right of the operator) for the "sql" format. If both options are provided, ',(0,s.jsx)(r.code,{children:"ruleProcessor"})," takes precedence."]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:['For all formats except "sql", ',(0,s.jsx)(r.code,{children:"valueProcessor"})," is merely a synonym for ",(0,s.jsx)(r.code,{children:"ruleProcessor"}),". We recommend using ",(0,s.jsx)(r.code,{children:"ruleProcessor"})," unless you are exporting SQL and only need to customize the value."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"// `query` is the same as in the previous example\n\nconst customValueProcessor: ValueProcessorByRule = (rule, options) => {\n  if (rule.operator === 'has') {\n    return `'%${rule.value}%'`;\n  }\n\n  return defaultValueProcessorByRule(rule, options);\n};\n\nformatQuery(query, { format: 'sql', valueProcessor: customValueProcessor });\n// Returns: \"(firstName like '%S%' and lastName = 'Vai')\"\n//    default-^------------^ ^---^-custom  ^----------^-default\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"legacy-valueprocessor-behavior",children:["Legacy ",(0,s.jsx)(r.code,{children:"valueProcessor"})," behavior"]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["The legacy ",(0,s.jsx)(r.code,{children:"valueProcessor"})," signature exists for backwards compatibility, but we recommend avoiding it. For one reason, the options are not passed in so it becomes more difficult to correctly call a default processor."]})}),"\n",(0,s.jsxs)(r.p,{children:["If the function assigned to ",(0,s.jsx)(r.code,{children:"valueProcessor"})," accepts three or more arguments (not including those with default values), it will be called like this:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"valueProcessor(field, operator, value, valueSource);\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Notice that no options or additional properties of the rule are passed as arguments. Among other problems, this prevents ",(0,s.jsx)(r.code,{children:"formatQuery"})," from setting the ",(0,s.jsx)(r.code,{children:"escapeQuotes"})," option."]}),"\n",(0,s.jsx)(r.p,{children:"This legacy behavior is documented here for completeness but, as stated above, is not recommended."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'instrument',\n      operator: 'in',\n      value: ['Guitar', 'Vocals'],\n    },\n    {\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n\nconst customValueProcessor = (field, operator, value) => {\n  if (operator === 'in') {\n    // Assuming `value` is an array, such as from a multi-select\n    return `(${value.map(v => `'${v.trim()}'`).join(',')})`;\n  }\n\n  return defaultValueProcessor(field, operator, value);\n};\n\nformatQuery(query, { format: 'sql', valueProcessor: customValueProcessor });\n// Returns: \"(instrument in ('Guitar','Vocals') and lastName = 'Vai')\"\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Versions of the default value processors using the newer ",(0,s.jsx)(r.code,{children:"fn(rule, options)"}),' signature as well as the legacy signature are available for all query language formats except "jsonlogic" (',(0,s.jsxs)(r.a,{href:"#ruleprocessor",children:["use ",(0,s.jsx)(r.code,{children:"ruleProcessor"})," instead"]}),")."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Current signature (recommended):","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"defaultValueProcessorByRule"})," (for all SQL-based formats)"]}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultValueProcessorCELByRule"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultValueProcessorMongoDBByRule"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultValueProcessorSpELByRule"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Legacy signature:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"defaultValueProcessor"})," (for all SQL-based formats)"]}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultMongoDBValueProcessor"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultCELValueProcessor"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"defaultSpELValueProcessor"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"quote-field-names",children:"Quote field names"}),"\n",(0,s.jsxs)(r.p,{children:["Some database engines wrap field names in backticks (",(0,s.jsx)(r.code,{children:"`"}),") or square brackets (",(0,s.jsx)(r.code,{children:"[]"}),"). This can be configured with the ",(0,s.jsx)(r.code,{children:"quoteFieldNamesWith"})," option which can be assigned a string or an array of two strings."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, { format: 'sql', quoteFieldNamesWith: '`' });\n// Returns: \"(`firstName` = 'Steve' and `lastName` = 'Vai')\"\n\nformatQuery(query, { format: 'sql', quoteFieldNamesWith: ['[', ']'] });\n// Returns: \"([firstName] = 'Steve' and [lastName] = 'Vai')\"\n"})}),"\n",(0,s.jsx)(r.h3,{id:"parameter-prefix",children:"Parameter prefix"}),"\n",(0,s.jsxs)(r.p,{children:['If the "parameterized_named" format is used, configure the parameter prefix used in the ',(0,s.jsx)(r.code,{children:"sql"})," string with the ",(0,s.jsx)(r.code,{children:"paramPrefix"}),' option (should the default ":" be inappropriate).']}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const p = formatQuery(query, {\n  format: 'parameterized_named',\n  paramPrefix: '$',\n});\n// p.sql === \"(firstName = $firstName_1 and lastName = $lastName_1)\"\n//                         ^                           ^\n"})}),"\n",(0,s.jsx)(r.h3,{id:"fallback-expression",children:"Fallback expression"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"fallbackExpression"})," is a string that will be part of the output when ",(0,s.jsx)(r.code,{children:"formatQuery"})," can't quite figure out what to do for a particular rule or group. The intent is to maintain valid syntax while (hopefully) not detrimentally affecting the query criteria. If not provided, the default fallback expression for the given format will be used (see table below)."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Format"}),(0,s.jsxs)(r.th,{children:["Default ",(0,s.jsx)(r.code,{children:"fallbackExpression"})]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:'"sql"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"'(1 = 1)'"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:'"parameterized"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"'(1 = 1)'"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:'"parameterized_named"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"'(1 = 1)'"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:'"mongodb"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'\'{"$and":[{"$expr":true}]}\''})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:'"cel"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"'1 == 1'"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:'"spel"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"'1 == 1'"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:'"jsonlogic"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"false"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:'"elasticsearch"'}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"{}"})})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"value-sources",children:"Value sources"}),"\n",(0,s.jsxs)(r.p,{children:["When the ",(0,s.jsx)(r.code,{children:"valueSource"}),' property for a rule is set to "field", ',(0,s.jsx)(r.code,{children:"formatQuery"}),' will place the bare, unquoted value (which should be a valid field name) in the result for the "sql", "parameterized", "parameterized_named", "mongodb", "cel", and "spel" formats. No parameters will be generated for such rules.']}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const pf = formatQuery(\n  {\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'lastName', valueSource: 'field' },\n      { field: 'firstName', operator: 'beginsWith', value: 'middleName', valueSource: 'field' },\n    ],\n  },\n  'parameterized_named'\n);\n"})}),"\n",(0,s.jsx)(r.p,{children:"Output:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "sql": "(firstName = lastName and firstName like middleName || \'%\')",\n  "params": {}\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"placeholder-values",children:"Placeholder values"}),"\n",(0,s.jsxs)(r.p,{children:["Any rule where the ",(0,s.jsx)(r.code,{children:"field"})," or ",(0,s.jsx)(r.code,{children:"operator"})," matches the placeholder value (default ",(0,s.jsx)(r.code,{children:'"~"'}),") will be excluded from the output for most export formats (see ",(0,s.jsx)(r.a,{href:"#automatic-validation",children:"Automatic validation"}),"). To use a different string as the placeholder value, set the ",(0,s.jsx)(r.code,{children:"placeholderFieldName"})," and/or ",(0,s.jsx)(r.code,{children:"placeholderOperatorName"})," options. These correspond to the ",(0,s.jsx)(r.code,{children:"fields.placeholderName"})," and ",(0,s.jsx)(r.code,{children:"operators.placeholderName"})," properties on the main component's ",(0,s.jsxs)(r.a,{href:"../components/querybuilder#translations",children:[(0,s.jsx)(r.code,{children:"translations"})," prop"]})," object."]}),"\n",(0,s.jsx)(r.h2,{id:"validation",children:"Validation"}),"\n",(0,s.jsxs)(r.p,{children:["The validation options (",(0,s.jsx)(r.code,{children:"validator"})," and ",(0,s.jsx)(r.code,{children:"fields"})," \u2013 see ",(0,s.jsx)(r.a,{href:"./validation",children:"Validation"})," for more information) only affect the output when ",(0,s.jsx)(r.code,{children:"format"}),' is not "json" or "json_without_ids". If the ',(0,s.jsx)(r.code,{children:"validator"})," function returns ",(0,s.jsx)(r.code,{children:"false"}),", the ",(0,s.jsx)(r.code,{children:"fallbackExpression"})," will be returned. Otherwise, groups and rules marked as invalid (either by the validation map produced by the ",(0,s.jsx)(r.code,{children:"validator"})," function or the result of the field-based ",(0,s.jsx)(r.code,{children:"validator"})," function) will be ignored."]}),"\n",(0,s.jsx)(r.p,{children:"Example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  id: 'root',\n  rules: [\n    {\n      id: 'r1',\n      field: 'firstName',\n      value: '',\n      operator: '=',\n    },\n    {\n      id: 'r2',\n      field: 'lastName',\n      value: 'Vai',\n      operator: '=',\n    },\n  ],\n  combinator: 'and',\n  not: false,\n};\n\n// Example 1\n// Query is invalid based on the validator function\nformatQuery(query, {\n  format: 'sql',\n  validator: () => false,\n});\n// Returns: \"(1 = 1)\" <-- see `fallbackExpression` option\n\n// Example 2\n// Rule \"r1\" is invalid based on the validation map\nformatQuery(query, {\n  format: 'sql',\n  validator: () => ({ r1: false }),\n});\n// Returns: \"(lastName = 'Vai')\" <-- skipped `firstName` rule with `id === 'r1'`\n\n// Example 3\n// Rule \"r1\" is invalid based on the field validator for `firstName`\nformatQuery(query, {\n  format: 'sql',\n  fields: [{ name: 'firstName', validator: () => false }],\n});\n// Returns: \"(lastName = 'Vai')\" <-- skipped `firstName` rule because field validator returned `false`\n"})}),"\n",(0,s.jsx)(r.h3,{id:"automatic-validation",children:"Automatic validation"}),"\n",(0,s.jsxs)(r.p,{children:["To minimize the chance of invalid syntax, some basic validation will be performed by ",(0,s.jsx)(r.code,{children:"formatQuery"}),' for the "in", "notIn", "between", and "notBetween" operators for all formats except "json" and "json_without_ids", even if no validator function or field validators are specified.']}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:['Rules that specify an "in" or "notIn" ',(0,s.jsx)(r.code,{children:"operator"})," will be deemed invalid if the rule's ",(0,s.jsx)(r.code,{children:"value"})," is neither an array with at least one element (i.e. ",(0,s.jsx)(r.code,{children:"value.length > 0"}),") nor a non-empty string."]}),"\n",(0,s.jsxs)(r.li,{children:['Rules that specify a "between" or "notBetween" ',(0,s.jsx)(r.code,{children:"operator"})," will be deemed invalid if the rule's ",(0,s.jsx)(r.code,{children:"value"})," is neither an array with length of at least two (",(0,s.jsx)(r.code,{children:"value.length >= 2"}),") nor a string with at least one comma that isn't the first or last character (i.e. ",(0,s.jsx)(r.code,{children:"value.split(',').length >= 2"}),", and neither element is an empty string)."]}),"\n",(0,s.jsxs)(r.li,{children:["Rules where either the ",(0,s.jsx)(r.code,{children:"field"})," or ",(0,s.jsx)(r.code,{children:"operator"})," match their respective placeholder will be deemed invalid (i.e. ",(0,s.jsx)(r.code,{children:"field === placeholderFieldName || operator === placeholderOperatorName"}),")."]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},71670:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>t});var s=n(27378);const a={},o=s.createContext(a);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);