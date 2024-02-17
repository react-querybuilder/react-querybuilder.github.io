"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[322],{69203:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=n(62540),i=n(65404);const s={title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},o=void 0,c={id:"tips/adding-removing-query-properties",title:"Adding and removing query properties",description:"Customizing the query object",source:"@site/docs/tips/adding-removing-query-properties.mdx",sourceDirName:"tips",slug:"/tips/adding-removing-query-properties",permalink:"/docs/next/tips/adding-removing-query-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/tips/adding-removing-query-properties.mdx",tags:[],version:"current",frontMatter:{title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom bind variables",permalink:"/docs/next/tips/custom-bind-variables"},next:{title:"Common mistakes",permalink:"/docs/next/tips/common-mistakes"}},d={},p=[{value:"Adding properties",id:"adding-properties",level:2},{value:"Removing properties",id:"removing-properties",level:2}];function a(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"adding-properties",children:"Adding properties"}),"\n",(0,t.jsxs)(r.p,{children:["To produce a query object with additional properties, you can loop through the ",(0,t.jsx)(r.code,{children:"rules"})," array recursively. The ",(0,t.jsx)(r.a,{href:"../utils/misc#transformquery",children:(0,t.jsx)(r.code,{children:"transformQuery"})})," function is provided for use cases such as this."]}),"\n",(0,t.jsxs)(r.p,{children:["In the example below (inspired by ",(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/issues/226",children:"issue #226"}),"), the ",(0,t.jsx)(r.code,{children:"inputType"})," from the ",(0,t.jsx)(r.code,{children:"fields"})," array is added to each rule."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\nimport { transformQuery } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst ruleProcessor = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst result = transformQuery(query, { ruleProcessor });\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Manual recursion"}),(0,t.jsxs)(r.p,{children:["This example (",(0,t.jsx)(r.em,{children:"directly"})," from ",(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/issues/226",children:"issue #226"}),") demonstrates manual recursion to achieve exactly the same result as the ",(0,t.jsx)(r.code,{children:"transformQuery"})," example above."]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst processRule = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst processGroup = (rg: RuleGroupType): RuleGroupType => ({\n  ...rg,\n  rules: rg.rules.map(r => {\n    if ('field' in r) {\n      return processRule(r);\n    }\n    return processGroup(r);\n  }),\n});\n\nconst result = processGroup(query);\n"})})]}),"\n",(0,t.jsx)(r.h2,{id:"removing-properties",children:"Removing properties"}),"\n",(0,t.jsxs)(r.p,{children:["To convert a standard query object to a JSON string containing only certain properties, you can take advantage of the second parameter of the ",(0,t.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",children:[(0,t.jsx)(r.code,{children:"JSON.stringify"})," function"]}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  rules: [\n    {\n      field: 'firstName',\n      operator: '=',\n      value: 'Steve',\n    },\n  ],\n};\n\n// This will leave off the `id` and `combinator` properties:\nconsole.log(JSON.stringify(query, ['rules', 'field', 'operator', 'value']));\n// '{\"rules\":[{\"field\":\"firstName\",\"operator\":\"=\",\"value\":\"Steve\"}]}'\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"formatQuery"})," function also provides a shortcut for producing a JSON string representing everything in the query except the ",(0,t.jsx)(r.code,{children:"id"})," and ",(0,t.jsx)(r.code,{children:"path"})," properties:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'console.log(formatQuery(query, \'json_without_ids\'));\n// \'{"combinator":"and","rules":[{"field":"firstName","operator":"=","value":"Steve"}]}\'\n'})})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},65404:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(63696);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);