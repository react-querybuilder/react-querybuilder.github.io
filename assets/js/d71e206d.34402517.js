"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22802],{49579:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var n=i(62540),d=i(65404);const s={},l="FormatQueryOptions",t={id:"react-querybuilder/interfaces/FormatQueryOptions",title:"FormatQueryOptions",description:"Options object shape for formatQuery.",source:"@site/api/react-querybuilder/interfaces/FormatQueryOptions.md",sourceDirName:"react-querybuilder/interfaces",slug:"/react-querybuilder/interfaces/FormatQueryOptions",permalink:"/api/react-querybuilder/interfaces/FormatQueryOptions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/api/react-querybuilder/interfaces/FormatQueryOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"FieldSelectorProps\\<F\\>",permalink:"/api/react-querybuilder/interfaces/FieldSelectorProps"},next:{title:"FullCombinator\\<N\\>",permalink:"/api/react-querybuilder/interfaces/FullCombinator"}},a={},c=[{value:"Extended by",id:"extended-by",level:2},{value:"Properties",id:"properties",level:2},{value:"concatOperator?",id:"concatoperator",level:3},{value:"Default",id:"default",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"fallbackExpression?",id:"fallbackexpression",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"fieldIdentifierSeparator?",id:"fieldidentifierseparator",level:3},{value:"Default",id:"default-1",level:4},{value:"Example",id:"example",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"fields?",id:"fields",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"format?",id:"format",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"numberedParams?",id:"numberedparams",level:3},{value:"Default",id:"default-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"paramPrefix?",id:"paramprefix",level:3},{value:"Default",id:"default-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"paramsKeepPrefix?",id:"paramskeepprefix",level:3},{value:"Default",id:"default-4",level:4},{value:"Example",id:"example-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"parseNumbers?",id:"parsenumbers",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"placeholderFieldName?",id:"placeholderfieldname",level:3},{value:"Default",id:"default-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"placeholderOperatorName?",id:"placeholderoperatorname",level:3},{value:"Default",id:"default-6",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"preset?",id:"preset",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"quoteFieldNamesWith?",id:"quotefieldnameswith",level:3},{value:"Default",id:"default-7",level:4},{value:"Examples",id:"examples",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"quoteValuesWith?",id:"quotevalueswith",level:3},{value:"Default",id:"default-8",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"ruleProcessor?",id:"ruleprocessor",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"validator?",id:"validator",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"valueProcessor?",id:"valueprocessor",level:3},{value:"Defined in",id:"defined-in-16",level:4}];function o(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"formatqueryoptions",children:"FormatQueryOptions"})}),"\n",(0,n.jsxs)(r.p,{children:["Options object shape for ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/functions/formatQuery",children:"formatQuery"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/ValueProcessorOptions",children:(0,n.jsx)(r.code,{children:"ValueProcessorOptions"})})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"concatoperator",children:"concatOperator?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"concatOperator"}),": ",(0,n.jsx)(r.code,{children:"string"})," & ",(0,n.jsx)(r.code,{children:"object"}),' | "||" | ',(0,n.jsx)(r.code,{children:'"+"'})," | ",(0,n.jsx)(r.code,{children:'"CONCAT"'})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:['Operator to use when concatenating wildcard characters and field names in "sql" format.\nThe ANSI standard is ',(0,n.jsx)(r.code,{children:"||"}),", while SQL Server uses ",(0,n.jsx)(r.code,{children:"+"}),". MySQL does not implement a concatenation\noperator by default, and therefore requires use of the ",(0,n.jsx)(r.code,{children:"CONCAT"})," function."]}),"\n",(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"concatOperator"})," is set to ",(0,n.jsx)(r.code,{children:'"CONCAT"'})," (case-insensitive), the ",(0,n.jsx)(r.code,{children:"CONCAT"})," function will be\nused. Note that Oracle SQL does not support more than two values in the ",(0,n.jsx)(r.code,{children:"CONCAT"})," function,\nso this option should not be used in that context. The default setting (",(0,n.jsx)(r.code,{children:'"||"'}),") is already\ncompatible with Oracle SQL."]}),"\n",(0,n.jsx)(r.h4,{id:"default",children:"Default"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"'||'\n"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L175",children:"packages/react-querybuilder/src/types/importExport.ts:175"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"fallbackexpression",children:"fallbackExpression?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"fallbackExpression"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["This string will be inserted in place of invalid groups for non-JSON formats.\nDefaults to ",(0,n.jsx)(r.code,{children:"'(1 = 1)'"}),' for "sql"/"parameterized"/"parameterized_named" and\n',(0,n.jsx)(r.code,{children:"'$and:[{$expr:true}]'"}),' for "mongodb".']}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L111",children:"packages/react-querybuilder/src/types/importExport.ts:111"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"fieldidentifierseparator",children:"fieldIdentifierSeparator?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"fieldIdentifierSeparator"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["When used in conjunction with the ",(0,n.jsx)(r.code,{children:"quoteFieldNamesWith"})," option, field names will\nbe split by this string, each part being individually processed as per the rules\nof the ",(0,n.jsx)(r.code,{children:"quoteFieldNamesWith"})," configuration. The parts will then be re-joined\nby the same string."]}),"\n",(0,n.jsxs)(r.p,{children:["A common value for this option is ",(0,n.jsx)(r.code,{children:"'.'"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["A value of ",(0,n.jsx)(r.code,{children:"''"})," (the empty string) will disable splitting/rejoining."]}),"\n",(0,n.jsx)(r.h4,{id:"default-1",children:"Default"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"''\n"})}),"\n",(0,n.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, {\n  format: 'sql',\n  quoteFieldNamesWith: ['[', ']'],\n  fieldIdentifierSeparator: '.',\n})\n// \"[dbo].[Musicians].[First name] = 'Steve'\"\n"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L87",children:"packages/react-querybuilder/src/types/importExport.ts:87"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"fields?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"fields"}),": ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/FlexibleOptionList",children:(0,n.jsx)(r.code,{children:"FlexibleOptionList"})}),"<",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:(0,n.jsx)(r.code,{children:"FullField"})}),"<",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,n.jsx)(r.code,{children:"Option"})}),"<",(0,n.jsx)(r.code,{children:"string"}),">, ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/Option",children:(0,n.jsx)(r.code,{children:"Option"})}),"<",(0,n.jsx)(r.code,{children:"string"}),">>>"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["This can be the same ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/interfaces/FullField",children:"FullField"})," array passed to ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/functions/QueryBuilder",children:"QueryBuilder"}),", but\nreally all you need to provide is the ",(0,n.jsx)(r.code,{children:"name"})," and ",(0,n.jsx)(r.code,{children:"validator"})," for each field."]}),"\n",(0,n.jsxs)(r.p,{children:["The full field object from this array, where the field's identifying property\nmatches the rule's ",(0,n.jsx)(r.code,{children:"field"}),", will be passed to the rule processor."]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L105",children:"packages/react-querybuilder/src/types/importExport.ts:105"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"format",children:"format?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"format"}),": ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/ExportFormat",children:(0,n.jsx)(r.code,{children:"ExportFormat"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/ExportFormat",children:"ExportFormat"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L33",children:"packages/react-querybuilder/src/types/importExport.ts:33"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"numberedparams",children:"numberedParams?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"numberedParams"}),": ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Renders parameter placeholders as a series of sequential numbers\ninstead of '?' like the default. This option will respect the\n",(0,n.jsx)(r.code,{children:"paramPrefix"})," option like the 'parameterized_named' format."]}),"\n",(0,n.jsx)(r.h4,{id:"default-2",children:"Default"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"false\n"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L143",children:"packages/react-querybuilder/src/types/importExport.ts:143"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"paramprefix",children:"paramPrefix?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"paramPrefix"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:'This string will be placed in front of named parameters (aka bind variables)\nwhen using the "parameterized_named" export format.'}),"\n",(0,n.jsx)(r.h4,{id:"default-3",children:"Default"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:'":"\n'})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L118",children:"packages/react-querybuilder/src/types/importExport.ts:118"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"paramskeepprefix",children:"paramsKeepPrefix?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"paramsKeepPrefix"}),": ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Maintains the parameter prefix in the ",(0,n.jsx)(r.code,{children:"params"}),' object keys when using the\n"parameterized_named" export format. Recommended when using SQLite.']}),"\n",(0,n.jsx)(r.h4,{id:"default-4",children:"Default"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"false\n"})}),"\n",(0,n.jsx)(r.h4,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:'console.log(formatQuery(query, {\n  format: "parameterized_named",\n  paramPrefix: "$",\n  paramsKeepPrefix: true\n}).params)\n// { $firstName: "Stev" }\n// Default (`paramsKeepPrefix` is `false`):\n// { firstName: "Stev" }\n'})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L135",children:"packages/react-querybuilder/src/types/importExport.ts:135"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"parsenumbers",children:"parseNumbers?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"parseNumbers"}),": ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Renders values as either ",(0,n.jsx)(r.code,{children:"number"}),"-types or unquoted strings, as\nappropriate and when possible. Each ",(0,n.jsx)(r.code,{children:"string"}),"-type value is evaluated\nagainst ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/variables/numericRegex",children:"numericRegex"})," to determine if it can be represented as a\nplain numeric value. If so, ",(0,n.jsx)(r.code,{children:"parseFloat"})," is used to convert it to a number."]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L150",children:"packages/react-querybuilder/src/types/importExport.ts:150"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"placeholderfieldname",children:"placeholderFieldName?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"placeholderFieldName"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Any rules where the field is equal to this value will be ignored."}),"\n",(0,n.jsx)(r.h4,{id:"default-5",children:"Default"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"'~'\n"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L156",children:"packages/react-querybuilder/src/types/importExport.ts:156"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"placeholderoperatorname",children:"placeholderOperatorName?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"placeholderOperatorName"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Any rules where the operator is equal to this value will be ignored."}),"\n",(0,n.jsx)(r.h4,{id:"default-6",children:"Default"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"'~'\n"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L162",children:"packages/react-querybuilder/src/types/importExport.ts:162"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"preset",children:"preset?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"preset"}),": ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/SQLPreset",children:(0,n.jsx)(r.code,{children:"SQLPreset"})})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Option presets to maximize compatibility with various SQL dialects."}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L179",children:"packages/react-querybuilder/src/types/importExport.ts:179"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"quotefieldnameswith",children:"quoteFieldNamesWith?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"quoteFieldNamesWith"}),": ",(0,n.jsx)(r.code,{children:"string"})," | [",(0,n.jsx)(r.code,{children:"string"}),", ",(0,n.jsx)(r.code,{children:"string"}),"]"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:'In the "sql", "parameterized", "parameterized_named", and "jsonata" export\nformats, field names will be bracketed by this string. If an array of strings\nis passed, field names will be preceded by the first element and\nsucceeded by the second element.'}),"\n",(0,n.jsxs)(r.p,{children:["A common value for this option is the backtick (",(0,n.jsx)(r.code,{children:"'`'"}),")."]}),"\n",(0,n.jsxs)(r.p,{children:["Tip: Use ",(0,n.jsx)(r.code,{children:"fieldIdentifierSeparator"})," to bracket identifiers individually within field names."]}),"\n",(0,n.jsx)(r.h4,{id:"default-7",children:"Default"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"'' // the empty string\n"})}),"\n",(0,n.jsx)(r.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, { format: 'sql', quoteFieldNamesWith: '`' })\n// \"`First name` = 'Steve'\"\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"formatQuery(query, { format: 'sql', quoteFieldNamesWith: ['[', ']'] })\n// \"[First name] = 'Steve'\"\n"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L66",children:"packages/react-querybuilder/src/types/importExport.ts:66"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"quotevalueswith",children:"quoteValuesWith?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"quoteValuesWith"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Character to use for quoting string values in the SQL format."}),"\n",(0,n.jsx)(r.h4,{id:"default-8",children:"Default"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"'"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L92",children:"packages/react-querybuilder/src/types/importExport.ts:92"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"ruleprocessor",children:"ruleProcessor?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"ruleProcessor"}),": ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/RuleProcessor",children:(0,n.jsx)(r.code,{children:"RuleProcessor"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["This function will be used to process each rule for query language\nformats. If not defined, the appropriate ",(0,n.jsx)(r.code,{children:"defaultRuleProcessor"}),"\nfor the format will be used."]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L45",children:"packages/react-querybuilder/src/types/importExport.ts:45"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"validator",children:"validator?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"validator"}),": ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/QueryValidator",children:(0,n.jsx)(r.code,{children:"QueryValidator"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Validator function for the entire query. Can be the same function passed\nas ",(0,n.jsx)(r.code,{children:"validator"})," prop to ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/functions/QueryBuilder",children:"QueryBuilder"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-15",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L97",children:"packages/react-querybuilder/src/types/importExport.ts:97"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"valueprocessor",children:"valueProcessor?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"valueProcessor"}),": ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/ValueProcessorLegacy",children:(0,n.jsx)(r.code,{children:"ValueProcessorLegacy"})})," | ",(0,n.jsx)(r.a,{href:"/api/react-querybuilder/type-aliases/ValueProcessorByRule",children:(0,n.jsx)(r.code,{children:"ValueProcessorByRule"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["This function will be used to process the ",(0,n.jsx)(r.code,{children:"value"})," from each rule\nfor query language formats. If not defined, the appropriate\n",(0,n.jsx)(r.code,{children:"defaultValueProcessor"})," for the format will be used."]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-16",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/064d3297daed853d9842102c6c030d0b7a1f8f1b/packages/react-querybuilder/src/types/importExport.ts#L39",children:"packages/react-querybuilder/src/types/importExport.ts:39"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsxs)(r.p,{children:["API documentation is generated from the latest commit on the ",(0,n.jsxs)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main",children:[(0,n.jsx)(r.code,{children:"main"})," branch"]}),". It may be somewhat inconsistent with official releases of React Query Builder."]})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},65404:(e,r,i)=>{i.d(r,{R:()=>l,x:()=>t});var n=i(63696);const d={},s=n.createContext(d);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);