"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1417],{96068:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(83117),r=(a(67294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../typescript"},"TypeScript")," page for information about the types and interfaces referenced below.")))}i.isMDXComponent=!0},85484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(83117),r=(a(67294),a(3905)),o=a(96068);const i={title:"Export",description:"Convert query builder objects to SQL, etc."},l=void 0,p={unversionedId:"api/export",id:"version-4/api/export",title:"Export",description:"Convert query builder objects to SQL, etc.",source:"@site/versioned_docs/version-4/api/export.mdx",sourceDirName:"api",slug:"/api/export",permalink:"/docs/4/api/export",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/api/export.mdx",tags:[],version:"4",frontMatter:{title:"Export",description:"Convert query builder objects to SQL, etc."},sidebar:"mySidebar",previous:{title:"CSS classes",permalink:"/docs/4/api/classnames"},next:{title:"Import",permalink:"/docs/4/api/import"}},s={},u=[{value:"Basic usage",id:"basic-usage",level:2},{value:"JSON",id:"json",level:3},{value:"JSON without identifiers",id:"json-without-identifiers",level:3},{value:"SQL",id:"sql",level:3},{value:"Parameterized SQL",id:"parameterized-sql",level:3},{value:"Named parameters",id:"named-parameters",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"Common Expression Language",id:"common-expression-language",level:3},{value:"Spring Expression Language",id:"spring-expression-language",level:3},{value:"JsonLogic",id:"jsonlogic",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Parse numbers",id:"parse-numbers",level:3},{value:"Value processor",id:"value-processor",level:3},{value:"Enhanced <code>valueProcessor</code> behavior",id:"enhanced-valueprocessor-behavior",level:4},{value:"Quote field names",id:"quote-field-names",level:3},{value:"Parameter prefix",id:"parameter-prefix",level:3},{value:"Fallback expression",id:"fallback-expression",level:3},{value:"Value sources",id:"value-sources",level:3},{value:"Placeholder values",id:"placeholder-values",level:3},{value:"Validation",id:"validation",level:2},{value:"Automatic validation",id:"automatic-validation",level:3}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"TypeScriptAdmonition"}),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery")," function to export queries in various formats. The function signature is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function formatQuery(\n  query: RuleGroupTypeAny,\n  options?: ExportFormat | FormatQueryOptions\n): string | ParameterizedSQL | ParameterizedNamedSQL | RQBJsonLogic;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery")," converts a given query into one of the following formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON (with or without ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"s)"),(0,r.kt)("li",{parentName:"ul"},"SQL ",(0,r.kt)("inlineCode",{parentName:"li"},"WHERE")," clause"),(0,r.kt)("li",{parentName:"ul"},"Parameterized SQL (with anonymous or named parameters)"),(0,r.kt)("li",{parentName:"ul"},"MongoDB"),(0,r.kt)("li",{parentName:"ul"},"Common Expression Language (CEL)"),(0,r.kt)("li",{parentName:"ul"},"Spring Expression Language (SpEL)"),(0,r.kt)("li",{parentName:"ul"},"JsonLogic")),(0,r.kt)("p",null,"For the next few sections, assume the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," variable has been defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      id: 'rule1',\n      field: 'firstName',\n      value: 'Steve',\n      operator: '=',\n    },\n    {\n      id: 'rule2',\n      field: 'lastName',\n      value: 'Vai',\n      operator: '=',\n    },\n  ],\n};\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("abbr",{title:"Too long; didn't read"},"TL;DR"),": For best results, use the ",(0,r.kt)("a",{parentName:"em",href:"./misc#defaults"},"default combinators and operators")," or map custom combinators/operators to the defaults with ",(0,r.kt)("a",{parentName:"em",href:"./misc#transformquery"},(0,r.kt)("inlineCode",{parentName:"a"},"transformQuery")),".")),(0,r.kt)("p",{parentName:"admonition"},"While ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery")," technically accepts query objects of type ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeAny")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupType")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),"), it is not guaranteed to process a query correctly unless the query also conforms to the type ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultRuleGroupTypeAny")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultRuleGroupType")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultRuleGroupTypeIC"),")."),(0,r.kt)("p",{parentName:"admonition"},"In practice, this means that all ",(0,r.kt)("inlineCode",{parentName:"p"},"combinator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," properties in the query must match the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of an element in ",(0,r.kt)("a",{parentName:"p",href:"./misc#defaults"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultCombinators")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"defaultOperators")),", respectively. If you implement custom combinator/operator names, you can use the ",(0,r.kt)("a",{parentName:"p",href:"./misc#transformquery"},(0,r.kt)("inlineCode",{parentName:"a"},"transformQuery")," function")," to map your query properties to the defaults."),(0,r.kt)("p",{parentName:"admonition"},'For example, assume your implementation replaces the default "between" operator (',(0,r.kt)("inlineCode",{parentName:"p"},'{ name: "between", label: "between" }'),") with ",(0,r.kt)("inlineCode",{parentName:"p"},'{ name: "b/w", label: "b/w" }'),". Any rules using this operator would have ",(0,r.kt)("inlineCode",{parentName:"p"},'operator: "b/w"')," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},'operator: "between"'),". So if a query looked like this..."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "combinator": "and",\n  "rules": [\n    {\n      "field": "someNumber",\n      "operator": "b/w",\n      "value": "12,14"\n    }\n  ]\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"...you could run it through ",(0,r.kt)("inlineCode",{parentName:"p"},"transformQuery")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMap")," option:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const newQuery = transformQuery(query, { operatorMap: { \'b/w\': \'between\' } });\n// {\n//   "combinator": "and",\n//   "rules": [\n//     {\n//       "field": "someNumber",\n//       "operator": "between",\n//       "value": "12,14"\n//     }\n//   ]\n// }\n')),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"newQuery")," object would be ready for processing by ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery"),', including its special handling of the "between" operator.')),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,"To export the internal query representation like what ",(0,r.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," passes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onQueryChange")," callback, formatted by ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),", simply pass the query to ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query);\n// or\nformatQuery(query, 'json');\n")),(0,r.kt)("p",null,"The output will be a multi-line string representation of the query using 2 spaces for indentation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'`{\n  "id": "root",\n  "combinator": "and",\n  "not": false,\n  "rules": [\n    {\n      "id": "rule1",\n      "field": "firstName",\n      "value": "Steve",\n      "operator": "="\n    },\n    {\n      "id": "rule2",\n      "field": "lastName",\n      "value": "Vai",\n      "operator": "="\n    }\n  ]\n}`;\n')),(0,r.kt)("h3",{id:"json-without-identifiers"},"JSON without identifiers"),(0,r.kt)("p",null,"To export the internal query representation without formatting (single-line, no indentation) and without the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),' attributes on each object, use the "json_without_ids" format. This is useful if you need to serialize the query for storage.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'json_without_ids');\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'`{"combinator":"and","not":false,"rules":[{"field":"firstName","value":"Steve","operator":"="},{"field":"lastName","value":"Vai","operator":"="}]}`;\n')),(0,r.kt)("h3",{id:"sql"},"SQL"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery")," can export SQL compatible with most RDBMS engines. To export a SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),' clause, use the "sql" format.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'sql');\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"`(firstName = 'Steve' and lastName = 'Vai')`;\n")),(0,r.kt)("h3",{id:"parameterized-sql"},"Parameterized SQL"),(0,r.kt)("p",null,"To export a SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),' clause with bind variables instead of explicit values, use the "parameterized" format. The output is an object with ',(0,r.kt)("inlineCode",{parentName:"p"},"sql")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," attributes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'parameterized');\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sql": "(firstName = ? and lastName = ?)",\n  "params": ["Steve", "Vai"]\n}\n')),(0,r.kt)("h3",{id:"named-parameters"},"Named parameters"),(0,r.kt)("p",null,"If anonymous parameters (aka bind variables) are not acceptable, ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery"),' can output named parameters based on the field names. Use the "parameterized_named" format. The output object is similar to the "parameterized" format, but the ',(0,r.kt)("inlineCode",{parentName:"p"},"params")," attribute is an object instead of an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'parameterized_named');\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sql": "(firstName = :firstName_1 and lastName = :lastName_1)",\n  "params": {\n    "firstName_1": "Steve",\n    "lastName_1": "Vai"\n  }\n}\n')),(0,r.kt)("h3",{id:"mongodb"},"MongoDB"),(0,r.kt)("p",null,'For MongoDB-compatible output, use the "mongodb" format.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'mongodb');\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'`{"$and":[{"firstName":{"$eq":"Steve"}},{"lastName":{"$eq":"Vai"}}]}`;\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The MongoDB export format does not support the inversion operator (setting ",(0,r.kt)("inlineCode",{parentName:"p"},"not: true")," for a rule group), however rules ",(0,r.kt)("em",{parentName:"p"},"can")," be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},'"!="')," operator.")),(0,r.kt)("h3",{id:"common-expression-language"},"Common Expression Language"),(0,r.kt)("p",null,'For Common Expression Language (CEL) output, use the "cel" format.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'cel');\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'`firstName = "Steve" && lastName = "Vai"`;\n')),(0,r.kt)("h3",{id:"spring-expression-language"},"Spring Expression Language"),(0,r.kt)("p",null,'For Spring Expression Language (SpEL) output, use the "spel" format.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'spel');\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"`firstName == 'Steve' and lastName == 'Vai'`;\n")),(0,r.kt)("h3",{id:"jsonlogic"},"JsonLogic"),(0,r.kt)("p",null,'The "jsonlogic" format produces an object that can be processed by the ',(0,r.kt)("inlineCode",{parentName:"p"},"jsonLogic.apply")," function (see ",(0,r.kt)("a",{parentName:"p",href:"https://jsonlogic.com/"},"https://jsonlogic.com/"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, 'jsonlogic');\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "and": [{ "==": [{ "var": "firstName" }, "Steve"] }, { "==": [{ "var": "lastName" }, "Vai"] }] }\n')),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"An object can be passed as the second argument instead of a string to have more fine-grained control over the output."),(0,r.kt)("h3",{id:"parse-numbers"},"Parse numbers"),(0,r.kt)("p",null,"Since HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," controls store values as strings (even when ",(0,r.kt)("inlineCode",{parentName:"p"},'type="number"'),"), exporting a query to various formats may produce a string representation of a value when a true numeric value is required or more appropriate. Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseNumbers")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery")," will attempt to convert all values to numbers, falling back to the original value if ",(0,r.kt)("inlineCode",{parentName:"p"},"parseFloat(value)")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," (not a number)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'digits',\n      operator: '=',\n      value: '20',\n    },\n    {\n      field: 'age',\n      operator: 'between',\n      value: '26, 52',\n    },\n    {\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n\n// Default configuration - all values are strings:\nformatQuery(query, { format: 'sql' });\n// Returns: \"(digits = '20' and age between '26' and '52' and lastName = 'Vai')\"\n\n// `parseNumbers: true` - numeric strings converted to actual numbers:\nformatQuery(query, { format: 'sql', parseNumbers: true });\n// Returns: \"(digits = 20 and age between 26 and 52 and lastName = 'Vai')\"\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'To avoid information loss, this option is more strict about what qualifies as "numeric" than ',(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat"},"the standard ",(0,r.kt)("inlineCode",{parentName:"a"},"parseFloat")," function"),". To oversimplify a bit, ",(0,r.kt)("inlineCode",{parentName:"p"},"parseFloat")," works with any string that ",(0,r.kt)("em",{parentName:"p"},"starts")," with a numeric sequence, ignoring the rest of the string beginning with the first non-numeric character. In contrast, when ",(0,r.kt)("inlineCode",{parentName:"p"},"parseNumbers")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery")," will only convert a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," if it appears to be numeric ",(0,r.kt)("em",{parentName:"p"},"in its entirety")," (after trimming whitespace)."),(0,r.kt)("p",{parentName:"admonition"},"The following expressions all evaluate to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"parseFloat('000111abcdef') === 111; // everything from the 'a' on is ignored by `parseFloat`\n\nformatQuery(\n  { rules: [{ field: 'f', operator: '=', value: '000111abcdef' }] },\n  { format: 'sql', parseNumbers: true }\n) === \"(f = '000111abcdef')\"; // `value` contains non-numeric characters, so remains as-is\n\nformatQuery(\n  { rules: [{ field: 'f', operator: '=', value: '  000111  ' }] },\n  { format: 'sql', parseNumbers: true }\n) === '(f = 111)'; // after trimming whitespace, `value` is wholly numeric\n"))),(0,r.kt)("h3",{id:"value-processor"},"Value processor"),(0,r.kt)("p",null,"If you need to control the way the value portion of the output is processed, you can specify a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"valueProcessor")," (only applicable for certain formats)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const query: RuleGroupType = {\n  combinator: 'and',\n  not: false,\n  rules: [\n    {\n      field: 'instrument',\n      operator: 'in',\n      value: ['Guitar', 'Vocals'],\n    },\n    {\n      field: 'lastName',\n      operator: '=',\n      value: 'Vai',\n    },\n  ],\n};\n\nconst customValueProcessor = (field, operator, value) => {\n  if (operator === 'in') {\n    // Assuming `value` is an array, such as from a multi-select\n    return `(${value.map(v => `\"${v.trim()}\"`).join(', ')})`;\n  }\n  // Fall back to the default value processor for other operators\n  return defaultValueProcessor(field, operator, value);\n};\n\nformatQuery(query, { format: 'sql', valueProcessor: customValueProcessor });\n// Returns: \"(instrument in ('Guitar', 'Vocals') and lastName = 'Vai')\"\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'When using the "mongodb", "cel", or "spel" export formats, ',(0,r.kt)("inlineCode",{parentName:"p"},"valueProcessor")," functions must produce the entire MongoDB rule object or CEL/SpEL rule string, not just the expression on the right-hand side of the operator like with SQL-based formats.")),(0,r.kt)("h4",{id:"enhanced-valueprocessor-behavior"},"Enhanced ",(0,r.kt)("inlineCode",{parentName:"h4"},"valueProcessor")," behavior"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery")," will invoke custom ",(0,r.kt)("inlineCode",{parentName:"p"},"valueProcessor")," functions with different arguments based on the function's ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," property, which is the number of arguments a function accepts excluding those with default values."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"valueProcessor")," function accepts fewer than three (3) arguments, it will be called like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"valueProcessor(rule, { parseNumbers });\n")),(0,r.kt)("p",null,"The first argument is the ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleType")," object directly from the query. The second argument is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ValueProcessorOptions"),", which is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},'Pick<FormatQueryOptions, "parseNumbers">'),")."),(0,r.kt)("p",null,"Invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"valueProcessor")," with the full ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleType")," object provides access to much more information about each rule. Standard properties that were previously unavailable include ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled"),", but any custom properties will also be accessible."),(0,r.kt)("p",null,"The default value processors have not changed from the legacy function signature, but alternate functions using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"fn(rule, options)")," signature are now available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultValueProcessorByRule")," (for SQL-based formats)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultValueProcessorCELByRule")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultValueProcessorMongoDBByRule")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultValueProcessorSpELByRule"))),(0,r.kt)("p",null,"To maintain the legacy signature (",(0,r.kt)("inlineCode",{parentName:"p"},"valueProcessor(field, operator, value, valueSource)"),"), make sure your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"valueProcessor")," function accepts at least three arguments ",(0,r.kt)("em",{parentName:"p"},"with no default values")," (i.e. do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," for the first three arguments). For example, the following code will log ",(0,r.kt)("inlineCode",{parentName:"p"},"length: 1")," and the function would be called with the ",(0,r.kt)("inlineCode",{parentName:"p"},"(rule, options)")," arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const valueProcessor = (field: string, operator = '=', value = '') => '...';\nconsole.log(`length: ${valueProcessor.length}`);\n")),(0,r.kt)("p",null,"Removing ",(0,r.kt)("inlineCode",{parentName:"p"},"= ...")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," argument declarations would increase the function's ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," to 3."),(0,r.kt)("p",null,"If you use TypeScript, these conditions will be enforced automatically."),(0,r.kt)("h3",{id:"quote-field-names"},"Quote field names"),(0,r.kt)("p",null,"Some database engines wrap field names in backticks (",(0,r.kt)("inlineCode",{parentName:"p"},"`"),"). This can be configured with the ",(0,r.kt)("inlineCode",{parentName:"p"},"quoteFieldNamesWith")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"formatQuery(query, { format: 'sql', quoteFieldNamesWith: '`' });\n// Returns: \"(`firstName` = 'Steve' and `lastName` = 'Vai')\"\n")),(0,r.kt)("h3",{id:"parameter-prefix"},"Parameter prefix"),(0,r.kt)("p",null,'If the "parameterized_named" format is used, configure the parameter prefix used in the ',(0,r.kt)("inlineCode",{parentName:"p"},"sql")," string with the ",(0,r.kt)("inlineCode",{parentName:"p"},"paramPrefix"),' option (should the default ":" be inappropriate).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const p = formatQuery(query, {\n  format: 'parameterized_named',\n  paramPrefix: '$',\n});\n// p.sql === \"(firstName = $firstName_1 and lastName = $lastName_1)\"\n")),(0,r.kt)("h3",{id:"fallback-expression"},"Fallback expression"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fallbackExpression")," is a string that will be part of the output when ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery")," can't quite figure out what to do for a particular rule or group. The intent is to maintain valid syntax while (hopefully) not detrimentally affecting the query criteria. If not provided, the default fallback expression for the given format will be used (see table below)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Default ",(0,r.kt)("inlineCode",{parentName:"th"},"fallbackExpression")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"sql"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"(1 = 1)"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"parameterized"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"(1 = 1)"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"parameterized_named"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"(1 = 1)"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"mongodb"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"{$and:[{$expr:true}]}"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"cel"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"1 == 1"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"spel"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"1 == 1"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"jsonlogic"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"value-sources"},"Value sources"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"valueSource"),' property for a rule is set to "field", ',(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery"),' will place the bare, unquoted value (which should be a valid field name) in the result for the "sql", "parameterized", "parameterized_named", "mongodb", "cel", and "spel" formats. No parameters will be generated for such rules.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pf = formatQuery(\n  {\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'lastName', valueSource: 'field' },\n      { field: 'firstName', operator: 'beginsWith', value: 'middleName', valueSource: 'field' },\n    ],\n  },\n  'parameterized_named'\n);\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sql": "(firstName = lastName and firstName like middleName || \'%\')",\n  "params": {}\n}\n')),(0,r.kt)("h3",{id:"placeholder-values"},"Placeholder values"),(0,r.kt)("p",null,"Any rule where the ",(0,r.kt)("inlineCode",{parentName:"p"},"field")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," matches the placeholder value (default ",(0,r.kt)("inlineCode",{parentName:"p"},'"~"'),") will be excluded from the output for most export formats (see ",(0,r.kt)("a",{parentName:"p",href:"#automatic-validation"},"Automatic validation"),"). To use a different string as the placeholder value, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholderFieldName")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholderOperatorName")," options. These correspond to the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields.placeholderName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"operators.placeholderName")," properties on the main component's ",(0,r.kt)("a",{parentName:"p",href:"./querybuilder#translations"},(0,r.kt)("inlineCode",{parentName:"a"},"translations")," prop")," object."),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"The validation options (",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," \u2013 see ",(0,r.kt)("a",{parentName:"p",href:"./validation"},"Validation")," for more information) only affect the output when ",(0,r.kt)("inlineCode",{parentName:"p"},"format"),' is not "json" or "json_without_ids". If the ',(0,r.kt)("inlineCode",{parentName:"p"},"validator")," function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"fallbackExpression")," will be returned. Otherwise, groups and rules marked as invalid (either by the validation map produced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," function or the result of the field-based ",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," function) will be ignored."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const query: RuleGroupType = {\n  id: 'root',\n  rules: [\n    {\n      id: 'r1',\n      field: 'firstName',\n      value: '',\n      operator: '=',\n    },\n    {\n      id: 'r2',\n      field: 'lastName',\n      value: 'Vai',\n      operator: '=',\n    },\n  ],\n  combinator: 'and',\n  not: false,\n};\n\n// Query is invalid based on the validator function\nformatQuery(query, {\n  format: 'sql',\n  validator: () => false,\n});\n// Returns: \"(1 = 1)\" <-- see `fallbackExpression` option\n\n// Rule \"r1\" is invalid based on the validation map\nformatQuery(query, {\n  format: 'sql',\n  validator: () => ({ r1: false }),\n});\n// Returns: \"(lastName = 'Vai')\" <-- skipped `firstName` rule with `id === 'r1'`\n\n// Rule \"r1\" is invalid based on the field validator for `firstName`\nformatQuery(query, {\n  format: 'sql',\n  fields: [{ name: 'firstName', validator: () => false }],\n});\n// Returns: \"(lastName = 'Vai')\" <-- skipped `firstName` rule because field validator returned `false`\n")),(0,r.kt)("h3",{id:"automatic-validation"},"Automatic validation"),(0,r.kt)("p",null,"A basic form of validation will be used by ",(0,r.kt)("inlineCode",{parentName:"p"},"formatQuery"),' for the "in", "notIn", "between", and "notBetween" operators when the output format is not "json" or "json_without_ids". This validation is used regardless of the presence of any ',(0,r.kt)("inlineCode",{parentName:"p"},"validator")," options at either the query level or field level:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Rules that specify an "in" or "notIn" ',(0,r.kt)("inlineCode",{parentName:"li"},"operator")," will be deemed invalid if the rule's ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," is neither an array with at least one element (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"value.length > 0"),") nor a non-empty string."),(0,r.kt)("li",{parentName:"ul"},'Rules that specify a "between" or "notBetween" ',(0,r.kt)("inlineCode",{parentName:"li"},"operator")," will be deemed invalid if the rule's ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," is neither an array with length of at least two (",(0,r.kt)("inlineCode",{parentName:"li"},"value.length >= 2"),") nor a string with at least one comma that isn't the first or last character (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"value.split(',').length >= 2"),", and neither element is an empty string)."),(0,r.kt)("li",{parentName:"ul"},"Rules where either the ",(0,r.kt)("inlineCode",{parentName:"li"},"field")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"operator")," match their respective placeholder will be deemed invalid (",(0,r.kt)("inlineCode",{parentName:"li"},"field === placeholderFieldName || operator === placeholderOperatorName"),").")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);