"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47529],{5552:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>u});var r=n(62540),a=n(65404),l=n(41485);const t={title:"Validation",description:"Query validation methods and configuration"},o=void 0,d={id:"utils/validation",title:"Validation",description:"Query validation methods and configuration",source:"@site/docs/utils/validation.mdx",sourceDirName:"utils",slug:"/utils/validation",permalink:"/docs/next/utils/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/utils/validation.mdx",tags:[],version:"current",frontMatter:{title:"Validation",description:"Query validation methods and configuration"},sidebar:"mySidebar",previous:{title:"Hooks",permalink:"/docs/next/utils/hooks"},next:{title:"Miscellaneous",permalink:"/docs/next/utils/misc"}},s={},u=[{value:"Query-level validation",id:"query-level-validation",level:2},{value:"Field-based validation",id:"field-based-validation",level:2},{value:"Effect on HTML",id:"effect-on-html",level:2},{value:"Effect on exports",id:"effect-on-exports",level:2},{value:"Default validator",id:"default-validator",level:2}];function c(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsxs)(i.em,{children:["Refer to the ",(0,r.jsx)(i.a,{href:"../typescript",children:"TypeScript reference"})," page for information about the types and interfaces referenced below."]})}),"\n"]})}),"\n",(0,r.jsxs)(i.p,{children:["Two methods are provided by ",(0,r.jsx)(i.code,{children:"react-querybuilder"})," for validating queries: query-level validation and field-based validation."]}),"\n",(0,r.jsx)(i.h2,{id:"query-level-validation",children:"Query-level validation"}),"\n",(0,r.jsxs)(i.p,{children:["Validating at the query level can result in the entire query being treated as valid or invalid, or you can report validation results for specific rules/groups within the query based on the ",(0,r.jsx)(i.code,{children:"id"})," property."]}),"\n",(0,r.jsxs)(i.p,{children:["To mark an entire query as valid or invalid, return a ",(0,r.jsx)(i.code,{children:"boolean"})," value from the ",(0,r.jsx)(i.code,{children:"validator"})," callback function (",(0,r.jsx)(i.code,{children:"true"})," for valid, ",(0,r.jsx)(i.code,{children:"false"})," for invalid)."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"import { QueryBuilder, RuleGroupType } from 'react-querybuilder';\n\n/**\n * This function returns false (indicating \"invalid\") if there are no rules present.\n */\nconst validator = (q: RuleGroupType) => q.rules.length > 0;\n\nconst App = () => {\n  return <QueryBuilder validator={validator} />;\n};\n"})}),"\n",(0,r.jsxs)(i.p,{children:["The alternate return value from a query-level validator is a validation map, which is an object where each key represents the ",(0,r.jsx)(i.code,{children:"id"})," of a rule or group. Associated values are either ",(0,r.jsx)(i.code,{children:"boolean"})," (",(0,r.jsx)(i.code,{children:"true"})," for valid, ",(0,r.jsx)(i.code,{children:"false"})," for invalid) or a validation result. Validation results are objects with two keys: a required ",(0,r.jsx)(i.code,{children:"boolean"})," ",(0,r.jsx)(i.code,{children:"valid"})," key and an optional ",(0,r.jsx)(i.code,{children:"reasons"})," array specifying why that rule/group is valid or invalid. (Reasons are assumed to be strings, but the type is ",(0,r.jsx)(i.code,{children:"any[]"})," since the QueryBuilder default components ignore them. Feel free to use them any way you please in your custom components.)"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"import { QueryBuilder, RuleGroupType, ValidationMap } from 'react-querybuilder';\n\n/**\n * This function returns a validation map. A real validator function would\n * have some logic to determine which rules are valid/invalid and why, but\n * this function is simple for brevity.\n */\nconst validator: QueryValidator = (q): ValidationMap => ({\n  r1: true, // valid rule\n  r2: false, // invalid rule\n  r3: { valid: true, reasons: ['awesome rule'] }, // valid rule\n  r4: { valid: false, reasons: ['lame rule'] }, // invalid rule\n});\n\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { id: 'r1', field: 'field1', operator: '=', value: 'Value 1' },\n    { id: 'r2', field: 'field2', operator: '=', value: 'Value 2' },\n    { id: 'r3', field: 'field3', operator: '=', value: 'Value 3' },\n    { id: 'r4', field: 'field4', operator: '=', value: 'Value 4' },\n  ],\n};\n\nconst App = () => {\n  return <QueryBuilder query={query} validator={validator} />;\n};\n"})}),"\n",(0,r.jsx)(i.h2,{id:"field-based-validation",children:"Field-based validation"}),"\n",(0,r.jsxs)(i.p,{children:["Assigning a ",(0,r.jsx)(i.code,{children:"validator"})," to individual fields allows you to provide a separate callback function depending on the field's value type or other attributes."]}),"\n",(0,r.jsxs)(i.p,{children:["In the following configuration, any rule that specifies ",(0,r.jsx)(i.code,{children:"field2"})," as the field (e.g. the second rule) will be marked invalid."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"import {\n  Field,\n  QueryBuilder,\n  RuleGroupType,\n  RuleValidator,\n  ValidationResult,\n} from 'react-querybuilder';\n\n/**\n * This function returns a validation result.\n */\nconst validator: RuleValidator = (q): ValidationResult => ({\n  valid: false,\n  reasons: ['this field is always invalid'],\n});\n\nconst fields: Field[] = [\n  { name: 'field1', label: 'Field 1' },\n  { name: 'field2', label: 'Field 2', validator },\n  { name: 'field3', label: 'Field 3' },\n  { name: 'field4', label: 'Field 4' },\n];\n\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'field1', operator: '=', value: 'Value 1' },\n    { field: 'field2', operator: '=', value: 'Value 2' },\n    { field: 'field3', operator: '=', value: 'Value 3' },\n    { field: 'field4', operator: '=', value: 'Value 4' },\n  ],\n};\n\nconst App = () => {\n  return <QueryBuilder query={query} fields={fields} />;\n};\n"})}),"\n",(0,r.jsx)(i.h2,{id:"effect-on-html",children:"Effect on HTML"}),"\n",(0,r.jsxs)(i.p,{children:["If you provide a query- or field-level validator function then the wrapper ",(0,r.jsx)(i.code,{children:"<div>"})," for each evaluated query object (rule, group, or the entire query) will be assigned one of two classes: ",(0,r.jsx)(i.code,{children:"queryBuilder-valid"})," or ",(0,r.jsx)(i.code,{children:"queryBuilder-invalid"}),". You can use these classes to style the elements with CSS."]}),"\n",(0,r.jsx)(i.admonition,{title:"See it in action",type:"tip",children:(0,r.jsxs)(i.p,{children:["In the ",(0,r.jsx)(l.K,{option:"validateQuery",text:"demo"}),', check the "Use validation" option and create an empty group or a text input without a value. Empty groups will show a message where the rules usually appear (using the ',(0,r.jsx)(i.code,{children:":after"})," pseudo-selector), and text fields without values will have a ",(0,r.jsx)(i.a,{href:"https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/",children:"purple"})," background."]})}),"\n",(0,r.jsx)(i.h2,{id:"effect-on-exports",children:"Effect on exports"}),"\n",(0,r.jsxs)(i.p,{children:["See the ",(0,r.jsx)(i.a,{href:"./export#validation",children:"validation section on the Export page"})," for more information."]}),"\n",(0,r.jsx)(i.h2,{id:"default-validator",children:"Default validator"}),"\n",(0,r.jsxs)(i.p,{children:["You can pass the provided ",(0,r.jsx)(i.a,{href:"./misc#defaultvalidator",children:(0,r.jsx)(i.code,{children:"defaultValidator"})})," to the ",(0,r.jsx)(i.code,{children:"validator"})," prop to check for invalid combinators, empty groups, or, if the query is using independent combinators, out-of-sequence ",(0,r.jsx)(i.code,{children:"rules"})," arrays. The ",(0,r.jsx)(i.a,{href:"/demo",children:"demo"})," uses the default validator."]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},41485:(e,i,n)=>{n.d(i,{K:()=>a});var r=n(62540);const a=({option:e,disabled:i=!1,text:n})=>(0,r.jsx)("a",{href:`/demo#${e}=${!i}`,children:n||"Click here for demo"+(i?" with this feature disabled":"")})},65404:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>o});var r=n(63696);const a={},l=r.createContext(a);function t(e){const i=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);