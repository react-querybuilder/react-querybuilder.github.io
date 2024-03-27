"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4900],{82248:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(62540),s=t(65404),o=t(67650);const i={title:"Arbitrary updates",description:"Non-standard query management from custom components",hide_table_of_contents:!0},a=void 0,l={id:"tips/arbitrary-updates",title:"Arbitrary updates",description:"Non-standard query management from custom components",source:"@site/docs/tips/arbitrary-updates.mdx",sourceDirName:"tips",slug:"/tips/arbitrary-updates",permalink:"/docs/next/tips/arbitrary-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/tips/arbitrary-updates.mdx",tags:[],version:"current",frontMatter:{title:"Arbitrary updates",description:"Non-standard query management from custom components",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom components with fallbacks",permalink:"/docs/next/tips/custom-with-fallback"},next:{title:"External controls",permalink:"/docs/next/tips/external-controls"}},c={},d=[{value:"Multiple action elements",id:"multiple-action-elements",level:2},{value:"Custom query properties",id:"custom-query-properties",level:2}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Standard component actions may be insufficient for a particular use case. React Query Builder provides tools to augment or replace the standard methods."}),"\n",(0,n.jsx)(r.h2,{id:"multiple-action-elements",children:"Multiple action elements"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"addRuleAction"})," component adds a new rule to the current group when clicked, ",(0,n.jsx)(r.em,{children:"always"})," using the default configuration. But your requirement may be to provide the user ",(0,n.jsx)(r.em,{children:"two"})," buttons that add a rule with a different field selected depending on which button was clicked."]}),"\n",(0,n.jsxs)(r.p,{children:["The example below uses a custom component that renders two buttons in the ",(0,n.jsx)(r.code,{children:"addRuleAction"})," position, one for each field. The click event handler calls ",(0,n.jsx)(r.code,{children:"props.schema.getQuery()"})," to retrieve the current query and ",(0,n.jsx)(r.code,{children:"props.schema.dispatchQuery()"})," to update the query state appropriately for the given button."]}),"\n",(0,n.jsx)(o.b,{rqbVersion:7,options:{editorHeight:480},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  ActionElement,\n  ActionWithRulesAndAddersProps,\n  add,\n  Field,\n  QueryBuilder,\n  RuleGroupType,\n} from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst AddRulesAction = (props: ActionWithRulesAndAddersProps) => {\n  const onClick = (field: string) => {\n    props.schema.dispatchQuery(\n      add(props.schema.getQuery(), { field, operator: '=', value: '' }, props.path)\n    );\n  };\n  return (\n    <>\n      <ActionElement\n        {...props}\n        label=\"+ First Name Rule\"\n        handleOnClick={() => onClick('firstName')}\n      />\n      <ActionElement\n        {...props}\n        label=\"+ Last Name Rule\"\n        handleOnClick={() => onClick('lastName')}\n      />\n    </>\n  );\n};\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nconst initialQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [],\n};\n\nexport default () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  return (\n    <div>\n      <QueryBuilder\n        fields={fields}\n        query={query}\n        onQueryChange={setQuery}\n        controlElements={{ addRuleAction: AddRulesAction }}\n      />\n    </div>\n  );\n};\n"})})}),"\n",(0,n.jsx)(r.h2,{id:"custom-query-properties",children:"Custom query properties"}),"\n",(0,n.jsxs)(r.p,{children:["Sometimes the structure of the query object is appropriate but doesn't carry enough information. You may need additional properties in the query hierarchy, and you probably want to update those properties from controls within the query builder. The example below uses a ",(0,n.jsx)(r.code,{children:"caseSensitive"})," property on each rule, with a checkbox rendered beside the default value editor to update the property."]}),"\n",(0,n.jsxs)(r.p,{children:["To further illustrate this scenario, the ",(0,n.jsx)(r.code,{children:"caseSensitive"})," property is used by a custom ",(0,n.jsx)(r.a,{href:"../utils/export#rule-processor",children:"rule processor"})," for ",(0,n.jsx)(r.code,{children:"formatQuery"}),". When ",(0,n.jsx)(r.code,{children:"caseSensitive"})," is falsey, the ",(0,n.jsx)(r.code,{children:"field"})," is augmented with a call to the SQL ",(0,n.jsx)(r.code,{children:"LOWER"})," function and the ",(0,n.jsx)(r.code,{children:"value"})," is converted to lowercase before being passed to the default rule processor."]}),"\n",(0,n.jsx)(r.p,{children:"The generated SQL and the raw query object are displayed below the query builder."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["Related: ",(0,n.jsx)(r.a,{href:"./adding-removing-query-properties",children:"Adding and removing query properties"})]})}),"\n"]}),"\n",(0,n.jsx)(o.b,{rqbVersion:7,options:{editorHeight:480},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  defaultRuleProcessorSQL,\n  Field,\n  formatQuery,\n  QueryBuilder,\n  RuleGroupType,\n  RuleProcessor,\n  update,\n  ValueEditor,\n  ValueEditorProps,\n} from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst CaseSensitivityValueEditor = (props: ValueEditorProps) => {\n  const onChange = () => {\n    props.schema.dispatchQuery(\n      update(props.schema.getQuery(), 'caseSensitive', !props.rule.caseSensitive, props.path)\n    );\n  };\n  return (\n    <>\n      <ValueEditor {...props} />\n      <label>\n        <input type=\"checkbox\" checked={!!props.rule.caseSensitive} onChange={onChange} />\n        {' Case sensitive'}\n      </label>\n    </>\n  );\n};\n\nconst ruleProcessor: RuleProcessor = (rule, opts) => {\n  if (!rule.caseSensitive) {\n    return defaultRuleProcessorSQL(\n      { ...rule, field: `LOWER(${rule.field})`, value: rule.value.toLocaleLowerCase() },\n      opts\n    );\n  }\n  return defaultRuleProcessorSQL(rule, opts);\n};\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nconst initialQuery: RuleGroupType = {\n  combinator: 'or',\n  rules: [\n    { field: 'firstName', operator: '=', value: 'Adam', caseSensitive: true },\n    { field: 'firstName', operator: '=', value: 'Steve', caseSensitive: false },\n  ],\n};\n\nexport default () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  return (\n    <div>\n      <QueryBuilder\n        fields={fields}\n        query={query}\n        onQueryChange={setQuery}\n        controlElements={{ valueEditor: CaseSensitivityValueEditor }}\n      />\n      <pre>\n        <code>{formatQuery(query, { format: 'sql', ruleProcessor })}</code>\n      </pre>\n      <pre>\n        <code>{JSON.stringify(query, null, 2)}</code>\n      </pre>\n    </div>\n  );\n};\n"})})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},67650:(e,r,t)=>{t.d(r,{b:()=>d});var n=t(62540),s=t(11871),o=t(64871),i=t(63696);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}function c(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}const d=({children:e,customSetup:r,options:t,rqbVersion:a=7})=>{var d,u;const p="dark"===(0,o.G)().colorMode,h=i.Children.toArray(e),m=p?"#343a46":"#ffffff";let y=!0;const b={};for(const n of h){const{props:e}=n.props.children;let r,t=!1,s=!1;if(e.metastring){const[n,...o]=e.metastring.split(" ");r="/"+n,t=o.includes("hidden"),s=o.includes("active")}else if("language-tsx"===e.className)r="/App.tsx";else if("language-js"===e.className)r="/App.js";else{if("language-css"!==e.className)throw new Error(`Code block is missing a filename: ${e.children}`);r="/styles.css"}if(b[r])throw new Error(`File ${r} was defined multiple times. Each file snippet should have a unique path name.`);"/styles.css"!==r||t||(y=!1),b[r]={code:e.children,hidden:t,active:s}}const f=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(null===(d=b["/App.tsx"])||void 0===d?void 0:d.code)?"":"@import 'react-querybuilder/dist/query-builder.css';",g=`\nbody {\n  background-color: ${m};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${p?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;var v;b["/styles.css"]={code:[f,g,null!==(v=null===(u=b["/styles.css"])||void 0===u?void 0:u.code)&&void 0!==v?v:""].join("\n\n"),hidden:y};const x=4===a?{"react-querybuilder":"^4"}:5===a?{"@react-querybuilder/dnd":"^5","react-querybuilder":"^5"}:6===a?{"@react-querybuilder/dnd":"^6","react-querybuilder":"^6"}:{"@react-querybuilder/dnd":"^7","react-querybuilder":"^7"},j=c(l({},r),{dependencies:l({},null==r?void 0:r.dependencies,x)});return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(s.OZ,{files:b,theme:p?"dark":void 0,template:"vite-react-ts",customSetup:j,options:t})},`v${a}`)}}}]);