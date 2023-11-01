"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2865],{43502:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var i=n(24246),t=n(71670);const s={title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},o=void 0,d={id:"tips/adding-removing-query-properties",title:"Adding and removing query properties",description:"Customizing the query object",source:"@site/versioned_docs/version-4/tips/adding-removing-query-properties.mdx",sourceDirName:"tips",slug:"/tips/adding-removing-query-properties",permalink:"/docs/4/tips/adding-removing-query-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/tips/adding-removing-query-properties.mdx",tags:[],version:"4",frontMatter:{title:"Adding and removing query properties",description:"Customizing the query object",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom bind variables",permalink:"/docs/4/tips/custom-bind-variables"},next:{title:"Common mistakes",permalink:"/docs/4/tips/common-mistakes"}},a={},p=[{value:"Removing properties",id:"removing-properties",level:2},{value:"Adding properties",id:"adding-properties",level:2}];function c(e){const r=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre"},(0,t.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"removing-properties",children:"Removing properties"}),"\n",(0,i.jsxs)(r.p,{children:["To convert a standard query object to a JSON string containing only certain properties, you can take advantage of the second parameter of the ",(0,i.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",children:[(0,i.jsx)(r.code,{children:"JSON.stringify"})," function"]}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"const query: RuleGroupType = {\n  id: 'root',\n  combinator: 'and',\n  rules: [\n    {\n      field: 'firstName',\n      operator: '=',\n      value: 'Steve',\n    },\n  ],\n};\n\n// This will leave off the `id` and `combinator` properties:\nconsole.log(JSON.stringify(query, ['rules', 'field', 'operator', 'value']));\n// '{\"rules\":[{\"field\":\"firstName\",\"operator\":\"=\",\"value\":\"Steve\"}]}'\n"})}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"formatQuery"})," function also provides a shortcut for producing a JSON string representing everything in the query except the ",(0,i.jsx)(r.code,{children:"id"})," properties:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:'console.log(formatQuery(query, \'json_without_ids\'));\n// \'{"combinator":"and","rules":[{"field":"firstName","operator":"=","value":"Steve"}]}\'\n'})}),"\n",(0,i.jsx)(r.h2,{id:"adding-properties",children:"Adding properties"}),"\n",(0,i.jsxs)(r.p,{children:["To produce a query object with additional properties, you can loop through the ",(0,i.jsx)(r.code,{children:"rules"})," array recursively. In the example below (from ",(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/issues/226",children:"issue #226"}),"), the ",(0,i.jsx)(r.code,{children:"inputType"})," from the ",(0,i.jsx)(r.code,{children:"fields"})," array is added to each rule."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' },\n];\n\nconst processRule = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find(f => f.name === r.field)?.inputType,\n});\n\nconst processGroup = (rg: RuleGroupType): RuleGroupType => ({\n  ...rg,\n  rules: rg.rules.map(r => {\n    if ('field' in r) {\n      return processRule(r);\n    }\n    return processGroup(r);\n  }),\n});\n\nconst result = processGroup(query);\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,t.a)(),e.components);return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},71670:(e,r,n)=>{n.d(r,{a:()=>o});var i=n(27378);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}}}]);