"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15695],{77903:(e,n,r)=>{r.d(n,{Ay:()=>i,RM:()=>a});var s=r(62540),o=r(65404);const a=[];function t(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please refer to the ",(0,s.jsx)(n.a,{href:"../typescript",children:"TypeScript"})," page for information about the types and interfaces referenced below."]})})}function i(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},83478:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(62540),o=r(65404),a=r(77903);const t={title:"Export",description:"Convert query builder objects to SQL, etc."},i=void 0,l={id:"api/export",title:"Export",description:"Convert query builder objects to SQL, etc.",source:"@site/versioned_docs/version-5/api/export.mdx",sourceDirName:"api",slug:"/api/export",permalink:"/docs/5/api/export",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/api/export.mdx",tags:[],version:"5",frontMatter:{title:"Export",description:"Convert query builder objects to SQL, etc."},sidebar:"mySidebar",previous:{title:"CSS classes",permalink:"/docs/5/api/classnames"},next:{title:"Import",permalink:"/docs/5/api/import"}},d={},c=[...a.RM,{value:"Basic usage",id:"basic-usage",level:2},{value:"JSON",id:"json",level:3},{value:"JSON without identifiers",id:"json-without-identifiers",level:3},{value:"SQL",id:"sql",level:3},{value:"Parameterized SQL",id:"parameterized-sql",level:3},{value:"Named parameters",id:"named-parameters",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"Common Expression Language",id:"common-expression-language",level:3},{value:"Spring Expression Language",id:"spring-expression-language",level:3},{value:"JsonLogic",id:"jsonlogic",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Parse numbers",id:"parse-numbers",level:3},{value:"Rule processor",id:"rule-processor",level:3},{value:"Value processor",id:"value-processor",level:3},{value:"Enhanced <code>valueProcessor</code> behavior",id:"enhanced-valueprocessor-behavior",level:4},{value:"Quote field names",id:"quote-field-names",level:3},{value:"Parameter prefix",id:"parameter-prefix",level:3},{value:"Fallback expression",id:"fallback-expression",level:3},{value:"Value sources",id:"value-sources",level:3},{value:"Placeholder values",id:"placeholder-values",level:3},{value:"Validation",id:"validation",level:2},{value:"Automatic validation",id:"automatic-validation",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"formatQuery"})," function to export queries in various formats. The function signature is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function formatQuery(\n  query: RuleGroupTypeAny,\n  options?: ExportFormat | FormatQueryOptions\n): string | ParameterizedSQL | ParameterizedNamedSQL | RQBJsonLogic;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"formatQuery"})," converts a given query into one of the following formats:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["JSON (with or without ",(0,s.jsx)(n.code,{children:"id"}),"s)"]}),"\n",(0,s.jsxs)(n.li,{children:["SQL ",(0,s.jsx)(n.code,{children:"WHERE"})," clause"]}),"\n",(0,s.jsx)(n.li,{children:"Parameterized SQL (with anonymous or named parameters)"}),"\n",(0,s.jsx)(n.li,{children:"MongoDB"}),"\n",(0,s.jsx)(n.li,{children:"Common Expression Language (CEL)"}),"\n",(0,s.jsx)(n.li,{children:"Spring Expression Language (SpEL)"}),"\n",(0,s.jsx)(n.li,{children:"JsonLogic"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For the next few sections, assume the ",(0,s.jsx)(n.code,{children:"query"})," variable has been defined as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      id: 'rule1',\n      field: 'firstName',\n      operator: '=',\n      value: 'Steve',\n    },\n    {\n      id: 'rule2',\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsx)("abbr",{title:"Too long; didn't read",children:"TL;DR"}),": For best results, use the ",(0,s.jsx)(n.a,{href:"./misc#defaults",children:"default combinators and operators"})," or map your custom combinators/operators to the defaults with ",(0,s.jsx)(n.a,{href:"./misc#transformquery",children:(0,s.jsx)(n.code,{children:"transformQuery"})}),"."]})})}),"\n"]}),(0,s.jsxs)(n.p,{children:["While ",(0,s.jsx)(n.code,{children:"formatQuery"})," technically accepts query objects of type ",(0,s.jsx)(n.code,{children:"RuleGroupTypeAny"})," (i.e. ",(0,s.jsx)(n.code,{children:"RuleGroupType"})," or ",(0,s.jsx)(n.code,{children:"RuleGroupTypeIC"}),"), it is not guaranteed to process a query correctly unless the query also conforms to the type ",(0,s.jsx)(n.code,{children:"DefaultRuleGroupTypeAny"})," (i.e. ",(0,s.jsx)(n.code,{children:"DefaultRuleGroupType"})," or ",(0,s.jsx)(n.code,{children:"DefaultRuleGroupTypeIC"}),")."]}),(0,s.jsxs)(n.p,{children:["In practice, this means that all ",(0,s.jsx)(n.code,{children:"combinator"})," and ",(0,s.jsx)(n.code,{children:"operator"})," properties in the query must match the ",(0,s.jsx)(n.code,{children:"name"})," of an element in ",(0,s.jsxs)(n.a,{href:"./misc#defaults",children:[(0,s.jsx)(n.code,{children:"defaultCombinators"})," or ",(0,s.jsx)(n.code,{children:"defaultOperators"})]}),", respectively. If you implement custom combinator/operator names, you can use the ",(0,s.jsxs)(n.a,{href:"./misc#transformquery",children:[(0,s.jsx)(n.code,{children:"transformQuery"})," function"]})," to map your query properties to the defaults."]}),(0,s.jsxs)(n.p,{children:['For example, assume your implementation replaces the default "between" operator (',(0,s.jsx)(n.code,{children:'{ name: "between", label: "between" }'}),") with ",(0,s.jsx)(n.code,{children:'{ name: "b/w", label: "b/w" }'}),". Any rules using this operator would have ",(0,s.jsx)(n.code,{children:'operator: "b/w"'})," instead of ",(0,s.jsx)(n.code,{children:'operator: "between"'}),". So if a query looked like this..."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "someNumber",\n      "operator": "b/w",\n      "value": "12,14"\n    }\n  ]\n}\n'})}),(0,s.jsxs)(n.p,{children:["...you could run it through ",(0,s.jsx)(n.code,{children:"transformQuery"})," with the ",(0,s.jsx)(n.code,{children:"operatorMap"})," option:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const newQuery = transformQuery(query, { operatorMap: { \'b/w\': \'between\' } });\n// {\n//   "combinator": "and",\n//   "rules": [\n//     {\n//       "field": "someNumber",\n//       "operator": "between",\n//       "value": "12,14"\n//     }\n//   ]\n// }\n'})}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"newQuery"})," object would be ready for processing by ",(0,s.jsx)(n.code,{children:"formatQuery"}),', including its special handling of the "between" operator.']})]}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,s.jsxs)(n.p,{children:["To export the internal query representation like what ",(0,s.jsx)(n.code,{children:"react-querybuilder"})," passes to the ",(0,s.jsx)(n.code,{children:"onQueryChange"})," callback, formatted by ",(0,s.jsx)(n.code,{children:"JSON.stringify"}),", simply pass the query to ",(0,s.jsx)(n.code,{children:"formatQuery"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query);\n// or\nformatQuery(query, 'json');\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output will be a multi-line string representation of the query using 2 spaces for indentation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'`{\n  "id": "root",\n  "combinator": "and",\n  "not": false,\n  "rules": [\n    {\n      "id": "rule1",\n      "field": "firstName",\n      "value": "Steve",\n      "operator": "="\n    },\n    {\n      "id": "rule2",\n      "field": "lastName",\n      "value": "Vai",\n      "operator": "="\n    }\n  ]\n}`;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"json-without-identifiers",children:"JSON without identifiers"}),"\n",(0,s.jsxs)(n.p,{children:["To export the internal query representation without formatting (single-line, no indentation) and without the ",(0,s.jsx)(n.code,{children:"id"})," or ",(0,s.jsx)(n.code,{children:"path"}),' attributes on each object, use the "json_without_ids" format. This is useful if you need to serialize the query for storage.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, 'json_without_ids');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'`{"combinator":"and","not":false,"rules":[{"field":"firstName","value":"Steve","operator":"="},{"field":"lastName","value":"Vai","operator":"="}]}`;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sql",children:"SQL"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"formatQuery"})," can export SQL compatible with most RDBMS engines. To export a SQL ",(0,s.jsx)(n.code,{children:"WHERE"}),' clause, use the "sql" format.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, 'sql');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"`(firstName = 'Steve' and lastName = 'Vai')`;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameterized-sql",children:"Parameterized SQL"}),"\n",(0,s.jsxs)(n.p,{children:["To export a SQL ",(0,s.jsx)(n.code,{children:"WHERE"}),' clause with bind variables instead of explicit values, use the "parameterized" format. The output is an object with ',(0,s.jsx)(n.code,{children:"sql"})," and ",(0,s.jsx)(n.code,{children:"params"})," attributes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, 'parameterized');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "sql": "(firstName = ? and lastName = ?)",\n  "params": ["Steve", "Vai"]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"named-parameters",children:"Named parameters"}),"\n",(0,s.jsxs)(n.p,{children:["If anonymous parameters (aka bind variables) are not acceptable, ",(0,s.jsx)(n.code,{children:"formatQuery"}),' can output named parameters based on the field names. Use the "parameterized_named" format. The output object is similar to the "parameterized" format, but the ',(0,s.jsx)(n.code,{children:"params"})," attribute is an object instead of an array."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, 'parameterized_named');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "sql": "(firstName = :firstName_1 and lastName = :lastName_1)",\n  "params": {\n    "firstName_1": "Steve",\n    "lastName_1": "Vai"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"mongodb",children:"MongoDB"}),"\n",(0,s.jsx)(n.p,{children:'For MongoDB-compatible output, use the "mongodb" format.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, 'mongodb');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'`{"$and":[{"firstName":"Steve"},{"lastName":"Vai"}]}`;\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The MongoDB export format does not support the inversion operator (setting ",(0,s.jsx)(n.code,{children:"not: true"})," for a rule group), however rules ",(0,s.jsx)(n.em,{children:"can"})," be created using the ",(0,s.jsx)(n.code,{children:'"!="'})," operator."]})}),"\n",(0,s.jsx)(n.h3,{id:"common-expression-language",children:"Common Expression Language"}),"\n",(0,s.jsx)(n.p,{children:'For Common Expression Language (CEL) output, use the "cel" format.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, 'cel');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'`firstName = "Steve" && lastName = "Vai"`;\n'})}),"\n",(0,s.jsx)(n.h3,{id:"spring-expression-language",children:"Spring Expression Language"}),"\n",(0,s.jsx)(n.p,{children:'For Spring Expression Language (SpEL) output, use the "spel" format.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, 'spel');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"`firstName == 'Steve' and lastName == 'Vai'`;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"jsonlogic",children:"JsonLogic"}),"\n",(0,s.jsxs)(n.p,{children:['The "jsonlogic" format produces an object that can be processed by the JsonLogic ',(0,s.jsx)(n.code,{children:"apply"})," function (see ",(0,s.jsx)(n.a,{href:"https://jsonlogic.com/",children:"https://jsonlogic.com/"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, 'jsonlogic');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "and": [{ "==": [{ "var": "firstName" }, "Steve"] }, { "==": [{ "var": "lastName" }, "Vai"] }] }\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Before using JsonLogic's ",(0,s.jsx)(n.code,{children:"apply()"})," method to apply the result of ",(0,s.jsx)(n.code,{children:"formatQuery(query, 'jsonlogic')"}),", register the additional operators ",(0,s.jsx)(n.code,{children:"startsWith"})," and ",(0,s.jsx)(n.code,{children:"endsWith"})," exported by ",(0,s.jsx)(n.code,{children:"react-querybuilder"}),". These are not ",(0,s.jsx)(n.a,{href:"https://jsonlogic.com/operations.html",children:"standard JsonLogic operations"}),', but they correspond to the "beginsWith" and "endsWith" operators, respectively, from ',(0,s.jsx)(n.code,{children:"react-querybuilder"}),"."]}),(0,s.jsxs)(n.p,{children:["The most future-proof way is to loop through the ",(0,s.jsx)(n.code,{children:"jsonLogicAdditionalOperators"})," entries like below. This way if any more custom operators are added in the future, they will be automatically available."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { add_operation, apply } from 'json-logic-js';\nimport { jsonLogicAdditionalOperators } from 'react-querybuilder';\n\nfor (const [op, func] of Object.entries(jsonLogicAdditionalOperators)) {\n  add_operation(op, func);\n}\n\napply({ startsWith: [{ var: 'firstName' }, 'Stev'] }, data);\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"An object can be passed as the second argument instead of a string to have more fine-grained control over the output."}),"\n",(0,s.jsx)(n.h3,{id:"parse-numbers",children:"Parse numbers"}),"\n",(0,s.jsxs)(n.p,{children:["Since HTML ",(0,s.jsx)(n.code,{children:"<input>"})," controls store values as strings (even when ",(0,s.jsx)(n.code,{children:'type="number"'}),"), exporting a query to various formats may produce a string representation of a value when a true numeric value is required or more appropriate. Set the ",(0,s.jsx)(n.code,{children:"parseNumbers"})," option to ",(0,s.jsx)(n.code,{children:"true"})," and ",(0,s.jsx)(n.code,{children:"formatQuery"})," will attempt to convert all values to numbers, falling back to the original value if ",(0,s.jsx)(n.code,{children:"parseFloat(value)"})," returns ",(0,s.jsx)(n.code,{children:"NaN"})," (not a number)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'digits',\n      operator: '=',\n      value: '20',\n    },\n    {\n      field: 'age',\n      operator: 'between',\n      value: '26, 52',\n    },\n    {\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n\n// Default configuration - all values are strings:\nformatQuery(query, { format: 'sql' });\n// Returns: \"(digits = '20' and age between '26' and '52' and lastName = 'Vai')\"\n\n// `parseNumbers: true` - numeric strings converted to actual numbers:\nformatQuery(query, { format: 'sql', parseNumbers: true });\n// Returns: \"(digits = 20 and age between 26 and 52 and lastName = 'Vai')\"\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:['To avoid information loss, this option is more strict about what qualifies as "numeric" than ',(0,s.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat",children:["the standard ",(0,s.jsx)(n.code,{children:"parseFloat"})," function"]}),". To oversimplify a bit, ",(0,s.jsx)(n.code,{children:"parseFloat"})," works with any string that ",(0,s.jsx)(n.em,{children:"starts"})," with a numeric sequence, ignoring the rest of the string beginning with the first non-numeric character. In contrast, when ",(0,s.jsx)(n.code,{children:"parseNumbers"})," is ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"formatQuery"})," will only convert a ",(0,s.jsx)(n.code,{children:"value"})," to a ",(0,s.jsx)(n.code,{children:"number"})," if it appears to be numeric ",(0,s.jsx)(n.em,{children:"in its entirety"})," (after trimming whitespace)."]}),(0,s.jsxs)(n.p,{children:["The following expressions all evaluate to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"parseFloat('000111abcdef') === 111; // everything from the 'a' on is ignored by `parseFloat`\n\nformatQuery(\n  { rules: [{ field: 'f', operator: '=', value: '000111abcdef' }] },\n  { format: 'sql', parseNumbers: true }\n) === \"(f = '000111abcdef')\"; // `value` contains non-numeric characters, so remains as-is\n\nformatQuery(\n  { rules: [{ field: 'f', operator: '=', value: '  000111  ' }] },\n  { format: 'sql', parseNumbers: true }\n) === '(f = 111)'; // after trimming whitespace, `value` is wholly numeric\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"rule-processor",children:"Rule processor"}),"\n",(0,s.jsxs)(n.p,{children:["To customize how rules are formatted, use the ",(0,s.jsx)(n.code,{children:"ruleProcessor"})," configuration option. Rules must pass validation before being passed to the provided function."]}),"\n",(0,s.jsxs)(n.p,{children:["The default rule processor for each non-SQL ",(0,s.jsx)("abbr",{title:"All formats except 'json' and 'json_without_ids'",children:"query language format"})," is available as a named export from ",(0,s.jsx)(n.code,{children:"react-querybuilder"}),", for use as a fallback in case your custom rule processor is not applicable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'firstName',\n      operator: 'has', // <-- non-standard operator\n      value: 'S',\n    },\n    {\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n\nconst customRuleProcessor = (rule, options) => {\n  if (operator === 'has') {\n    // \"has\" operator not handled by default \"jsonlogic\" rule processor\n    return { in: [rule.value, { var: rule.field }] };\n  }\n  // Fall back to the default rule processor for all other operators\n  return defaultRuleProcessorJsonLogic(rule, options);\n};\n\nformatQuery(query, { format: 'jsonlogic', ruleProcessor: customRuleProcessor });\n// Returns:\n// {\n//   and: [\n//     { in: [\"S\", { var: \"firstName\" }] },\n//     { \"==\": [{ var: \"lastName\" }, \"Vai\"] }\n//   ]\n// }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"value-processor",children:"Value processor"}),"\n",(0,s.jsxs)(n.p,{children:["If you only need to control the way the ",(0,s.jsx)(n.em,{children:"value"})," portion of the output is processed, you can specify a custom ",(0,s.jsx)(n.code,{children:"valueProcessor"})," applicable for query language formats."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'instrument',\n      operator: 'in',\n      value: ['Guitar', 'Vocals'],\n    },\n    {\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n\nconst customValueProcessor = (field, operator, value) => {\n  if (operator === 'in') {\n    // Assuming `value` is an array, such as from a multi-select\n    return `(${value.map(v => `\"${v.trim()}\"`).join(', ')})`;\n  }\n  // Fall back to the default value processor for other operators\n  return defaultValueProcessor(field, operator, value);\n};\n\nformatQuery(query, { format: 'sql', valueProcessor: customValueProcessor });\n// Returns: \"(instrument in ('Guitar', 'Vocals') and lastName = 'Vai')\"\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:['When producing non-SQL query language formats\u2014including "mongodb", "cel", "spel", and "jsonlogic"\u2014',(0,s.jsx)(n.code,{children:"valueProcessor"})," functions must produce the entire rule object (for MongoDB/JsonLogic) or rule string (for CEL/SpEL), not just the expression on the right-hand side of the operator like with SQL-based formats."]}),(0,s.jsxs)(n.p,{children:["This situation exists for backwards-compatibility reasons, but to increase the clarity of your own code we recommend using the ",(0,s.jsx)(n.code,{children:"ruleProcessor"})," option which has the same interface and effect as ",(0,s.jsx)(n.code,{children:"valueProcessor"})," for all non-SQL query language formats."]})]}),"\n",(0,s.jsxs)(n.h4,{id:"enhanced-valueprocessor-behavior",children:["Enhanced ",(0,s.jsx)(n.code,{children:"valueProcessor"})," behavior"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"formatQuery"})," will invoke custom ",(0,s.jsx)(n.code,{children:"valueProcessor"})," functions with different arguments based on the function's ",(0,s.jsx)(n.code,{children:"length"})," property, which is the number of arguments a function accepts excluding those with default values."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"valueProcessor"})," function accepts fewer than three (3) arguments, it will be called like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"valueProcessor(rule, { parseNumbers });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first argument is the ",(0,s.jsx)(n.code,{children:"RuleType"})," object directly from the query. The second argument is of type ",(0,s.jsx)(n.code,{children:"ValueProcessorOptions"}),", which is equivalent to ",(0,s.jsx)(n.code,{children:'Pick<FormatQueryOptions, "parseNumbers">'}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Invoking ",(0,s.jsx)(n.code,{children:"valueProcessor"})," with the full ",(0,s.jsx)(n.code,{children:"RuleType"})," object provides access to much more information about each rule. Standard properties that were previously unavailable include ",(0,s.jsx)(n.code,{children:"path"}),", ",(0,s.jsx)(n.code,{children:"id"}),", and ",(0,s.jsx)(n.code,{children:"disabled"}),". Perhaps more importantly, any custom properties will also be accessible."]}),"\n",(0,s.jsxs)(n.p,{children:["The default value processors have not changed from the legacy function signature, but alternate functions using the new ",(0,s.jsx)(n.code,{children:"fn(rule, options)"})," signature are now available:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"defaultValueProcessorByRule"})," (for SQL-based formats)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"defaultValueProcessorCELByRule"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"defaultValueProcessorMongoDBByRule"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"defaultValueProcessorSpELByRule"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["While these enhanced CEL, SpEL, and MongoDB value processors are available, we recommend using the ",(0,s.jsx)(n.code,{children:"ruleProcessor"})," option instead\u2014if for no other reason than clarity of your own code. As mentioned above, they ultimately do the same thing anyway."]})}),"\n",(0,s.jsxs)(n.p,{children:["To maintain the legacy signature (",(0,s.jsx)(n.code,{children:"valueProcessor(field, operator, value, valueSource)"}),"), make sure your custom ",(0,s.jsx)(n.code,{children:"valueProcessor"})," function accepts at least three arguments ",(0,s.jsx)(n.em,{children:"with no default values"})," (do not use ",(0,s.jsx)(n.code,{children:"="})," for the first three arguments). For example, the following code will log ",(0,s.jsx)(n.code,{children:"length: 1"})," and the function would be called with the ",(0,s.jsx)(n.code,{children:"(rule, options)"})," arguments:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const valueProcessor = (field: string, operator = '=', value = '') => '...';\nconsole.log(`length: ${valueProcessor.length}`);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Removing ",(0,s.jsx)(n.code,{children:"= ..."})," from the ",(0,s.jsx)(n.code,{children:"operator"})," and ",(0,s.jsx)(n.code,{children:"value"})," argument declarations would increase the function's ",(0,s.jsx)(n.code,{children:"length"})," to 3."]}),"\n",(0,s.jsx)(n.p,{children:"If you use TypeScript, these conditions will be enforced automatically."}),"\n",(0,s.jsx)(n.h3,{id:"quote-field-names",children:"Quote field names"}),"\n",(0,s.jsxs)(n.p,{children:["Some database engines wrap field names in backticks (",(0,s.jsx)(n.code,{children:"`"}),"). This can be configured with the ",(0,s.jsx)(n.code,{children:"quoteFieldNamesWith"})," option."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"formatQuery(query, { format: 'sql', quoteFieldNamesWith: '`' });\n// Returns: \"(`firstName` = 'Steve' and `lastName` = 'Vai')\"\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameter-prefix",children:"Parameter prefix"}),"\n",(0,s.jsxs)(n.p,{children:['If the "parameterized_named" format is used, configure the parameter prefix used in the ',(0,s.jsx)(n.code,{children:"sql"})," string with the ",(0,s.jsx)(n.code,{children:"paramPrefix"}),' option (should the default ":" be inappropriate).']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const p = formatQuery(query, {\n  format: 'parameterized_named',\n  paramPrefix: '$',\n});\n// p.sql === \"(firstName = $firstName_1 and lastName = $lastName_1)\"\n//                         ^                           ^\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fallback-expression",children:"Fallback expression"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fallbackExpression"})," is a string that will be part of the output when ",(0,s.jsx)(n.code,{children:"formatQuery"})," can't quite figure out what to do for a particular rule or group. The intent is to maintain valid syntax while (hopefully) not detrimentally affecting the query criteria. If not provided, the default fallback expression for the given format will be used (see table below)."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Format"}),(0,s.jsxs)(n.th,{children:["Default ",(0,s.jsx)(n.code,{children:"fallbackExpression"})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"sql"'}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'(1 = 1)'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"parameterized"'}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'(1 = 1)'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"parameterized_named"'}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'(1 = 1)'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"mongodb"'}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'\'{"$and":[{"$expr":true}]}\''})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"cel"'}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'1 == 1'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"spel"'}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'1 == 1'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"jsonlogic"'}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"value-sources",children:"Value sources"}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"valueSource"}),' property for a rule is set to "field", ',(0,s.jsx)(n.code,{children:"formatQuery"}),' will place the bare, unquoted value (which should be a valid field name) in the result for the "sql", "parameterized", "parameterized_named", "mongodb", "cel", and "spel" formats. No parameters will be generated for such rules.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pf = formatQuery(\n  {\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'lastName', valueSource: 'field' },\n      { field: 'firstName', operator: 'beginsWith', value: 'middleName', valueSource: 'field' },\n    ],\n  },\n  'parameterized_named'\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "sql": "(firstName = lastName and firstName like middleName || \'%\')",\n  "params": {}\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"placeholder-values",children:"Placeholder values"}),"\n",(0,s.jsxs)(n.p,{children:["Any rule where the ",(0,s.jsx)(n.code,{children:"field"})," or ",(0,s.jsx)(n.code,{children:"operator"})," matches the placeholder value (default ",(0,s.jsx)(n.code,{children:'"~"'}),") will be excluded from the output for most export formats (see ",(0,s.jsx)(n.a,{href:"#automatic-validation",children:"Automatic validation"}),"). To use a different string as the placeholder value, set the ",(0,s.jsx)(n.code,{children:"placeholderFieldName"})," and/or ",(0,s.jsx)(n.code,{children:"placeholderOperatorName"})," options. These correspond to the ",(0,s.jsx)(n.code,{children:"fields.placeholderName"})," and ",(0,s.jsx)(n.code,{children:"operators.placeholderName"})," properties on the main component's ",(0,s.jsxs)(n.a,{href:"./querybuilder#translations",children:[(0,s.jsx)(n.code,{children:"translations"})," prop"]})," object."]}),"\n",(0,s.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,s.jsxs)(n.p,{children:["The validation options (",(0,s.jsx)(n.code,{children:"validator"})," and ",(0,s.jsx)(n.code,{children:"fields"})," \u2013 see ",(0,s.jsx)(n.a,{href:"./validation",children:"Validation"})," for more information) only affect the output when ",(0,s.jsx)(n.code,{children:"format"}),' is not "json" or "json_without_ids". If the ',(0,s.jsx)(n.code,{children:"validator"})," function returns ",(0,s.jsx)(n.code,{children:"false"}),", the ",(0,s.jsx)(n.code,{children:"fallbackExpression"})," will be returned. Otherwise, groups and rules marked as invalid (either by the validation map produced by the ",(0,s.jsx)(n.code,{children:"validator"})," function or the result of the field-based ",(0,s.jsx)(n.code,{children:"validator"})," function) will be ignored."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  id: 'root',\n  rules: [\n    {\n      id: 'r1',\n      field: 'firstName',\n      value: '',\n      operator: '=',\n    },\n    {\n      id: 'r2',\n      field: 'lastName',\n      value: 'Vai',\n      operator: '=',\n    },\n  ],\n  combinator: 'and',\n  not: false,\n};\n\n// Query is invalid based on the validator function\nformatQuery(query, {\n  format: 'sql',\n  validator: () => false,\n});\n// Returns: \"(1 = 1)\" <-- see `fallbackExpression` option\n\n// Rule \"r1\" is invalid based on the validation map\nformatQuery(query, {\n  format: 'sql',\n  validator: () => ({ r1: false }),\n});\n// Returns: \"(lastName = 'Vai')\" <-- skipped `firstName` rule with `id === 'r1'`\n\n// Rule \"r1\" is invalid based on the field validator for `firstName`\nformatQuery(query, {\n  format: 'sql',\n  fields: [{ name: 'firstName', validator: () => false }],\n});\n// Returns: \"(lastName = 'Vai')\" <-- skipped `firstName` rule because field validator returned `false`\n"})}),"\n",(0,s.jsx)(n.h3,{id:"automatic-validation",children:"Automatic validation"}),"\n",(0,s.jsxs)(n.p,{children:["A basic form of validation will be used by ",(0,s.jsx)(n.code,{children:"formatQuery"}),' for the "in", "notIn", "between", and "notBetween" operators when the output format is not "json" or "json_without_ids". This validation is used regardless of the presence of any ',(0,s.jsx)(n.code,{children:"validator"})," options at either the query level or field level:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['Rules that specify an "in" or "notIn" ',(0,s.jsx)(n.code,{children:"operator"})," will be deemed invalid if the rule's ",(0,s.jsx)(n.code,{children:"value"})," is neither an array with at least one element (i.e. ",(0,s.jsx)(n.code,{children:"value.length > 0"}),") nor a non-empty string."]}),"\n",(0,s.jsxs)(n.li,{children:['Rules that specify a "between" or "notBetween" ',(0,s.jsx)(n.code,{children:"operator"})," will be deemed invalid if the rule's ",(0,s.jsx)(n.code,{children:"value"})," is neither an array with length of at least two (",(0,s.jsx)(n.code,{children:"value.length >= 2"}),") nor a string with at least one comma that isn't the first or last character (i.e. ",(0,s.jsx)(n.code,{children:"value.split(',').length >= 2"}),", and neither element is an empty string)."]}),"\n",(0,s.jsxs)(n.li,{children:["Rules where either the ",(0,s.jsx)(n.code,{children:"field"})," or ",(0,s.jsx)(n.code,{children:"operator"})," match their respective placeholder will be deemed invalid (",(0,s.jsx)(n.code,{children:"field === placeholderFieldName || operator === placeholderOperatorName"}),")."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},65404:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(63696);const o={},a=s.createContext(o);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);