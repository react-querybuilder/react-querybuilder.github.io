"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7753],{80092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(62540),o=r(65404),i=r(67650);const s={title:"Path concepts",description:'Explanation of the "path" property of rules and groups',hide_table_of_contents:!0},a=void 0,l={id:"tips/path",title:"Path concepts",description:'Explanation of the "path" property of rules and groups',source:"@site/versioned_docs/version-6/tips/path.mdx",sourceDirName:"tips",slug:"/tips/path",permalink:"/docs/6/tips/path",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/tips/path.mdx",tags:[],version:"6",frontMatter:{title:"Path concepts",description:'Explanation of the "path" property of rules and groups',hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Managing operators",permalink:"/docs/6/tips/managing-operators"},next:{title:"Limit rule groups",permalink:"/docs/6/tips/limit-groups"}},c={},d=[{value:"Finding a <code>path</code>",id:"finding-a-path",level:2},{value:"Example",id:"example",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["While the ",(0,n.jsx)(t.code,{children:"id"})," property can uniquely identify a rule or group, an ",(0,n.jsx)(t.code,{children:"id"})," won't naturally indicate anything about the ",(0,n.jsx)(t.em,{children:"position"}),' of the object within the query hierarchy. For that reason, React Query Builder uses the concept of a "path" to locate and update query objects.']}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"path"})," property is an array of integers unique to each rule and group within a query. The query object itself, aka the root group, has a ",(0,n.jsx)(t.code,{children:"path"})," of ",(0,n.jsx)(t.code,{children:"[]"}),". All other rules and groups within the query have a ",(0,n.jsx)(t.code,{children:"path"})," that corresponds to their position within the ",(0,n.jsx)(t.code,{children:"rules"})," array(s) of their ancestor group(s)."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"path"})," of any object (rule or group) is equivalent to the ",(0,n.jsx)(t.code,{children:"path"})," of its parent group plus another array element which is the index of the object within its parent's ",(0,n.jsx)(t.code,{children:"rules"})," array. You can think of it like this: ",(0,n.jsx)(t.code,{children:"path = [...parentPath, index]"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Consider the following query. The respective ",(0,n.jsx)(t.code,{children:"path"})," for each rule and group is commented above it, along with a short explanation."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// [] (the root group)\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    // [0] (the first, aka zeroth, element in the root rules array)\n    { field: 'f1', operator: '=', value: 'v1' },\n    // [1] (the second element in the root rules array is a sub-group)\n    {\n      combinator: 'or',\n      rules: [\n        // [1, 0] (the first element within the rules array\n        //         of the group occupying the second position\n        //         in the root rules array)\n        { field: 'f2', operator: '=', value: 'v2' },\n        // [1, 1] (the second element within the rules array\n        //         of the group occupying the second position\n        //         in the root rules array)\n        { field: 'f3', operator: '=', value: 'v3' },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"path"})," of the top-most rule in the query is ",(0,n.jsx)(t.code,{children:"[0]"}),", ",(0,n.jsx)(t.code,{children:"0"})," being the index of that rule within the root group's ",(0,n.jsx)(t.code,{children:"rules"})," array. The ",(0,n.jsx)(t.code,{children:"path"})," of the first sub-group in the query is ",(0,n.jsx)(t.code,{children:"[1]"}),", again according to its index within the outermost ",(0,n.jsx)(t.code,{children:"rules"})," array. Each child rule of ",(0,n.jsx)(t.em,{children:"that"})," group has a path that begins with ",(0,n.jsx)(t.code,{children:"1"})," (the ",(0,n.jsx)(t.code,{children:"path"})," of its parent), followed by its own index."]}),"\n",(0,n.jsxs)(t.h2,{id:"finding-a-path",children:["Finding a ",(0,n.jsx)(t.code,{children:"path"})]}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.a,{href:"../utils/misc#findpath",children:(0,n.jsx)(t.code,{children:"findPath"})})," function to locate a specific rule or group for examination or update. Given the query above:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"findPath([1, 0], query);\n"})}),"\n",(0,n.jsx)(t.p,{children:"would return this object:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{ "field": "f2", "operator": "=", "value": "v2" }\n'})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["In most scenarios you won't need to interact with the ",(0,n.jsx)(t.code,{children:"path"})," attribute, but it can come in handy in certain situations. One such situation is if you need to access other parts of the query from within a custom component."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["By default, custom components only receive props relevant to the rule or group they act on, but you can augment these default props with other data or information by using the ",(0,n.jsxs)(t.a,{href:"../components/querybuilder#context",children:[(0,n.jsx)(t.code,{children:"context"})," prop"]}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["Say you have a custom value editor that needs to know the ",(0,n.jsx)(t.code,{children:"value"})," of each of its sibling rules. We would recommend passing the entire query down through the ",(0,n.jsx)(t.code,{children:"context"})," prop and retrieving the sibling rules with a combination of ",(0,n.jsx)(t.code,{children:"getParentPath"})," and ",(0,n.jsx)(t.code,{children:"findPath"}),"."]}),"\n",(0,n.jsxs)(i.b,{rqbVersion:6,options:{editorHeight:444,activeFile:"/CustomValueEditor.tsx"},children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:"CustomValueEditor.tsx",children:"import {\n  findPath,\n  getParentPath,\n  RuleGroupType,\n  RuleType,\n  ValueEditor,\n  ValueEditorProps,\n} from 'react-querybuilder';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  // Get the path of this rule's parent group\n  const parentPath = getParentPath(props.path);\n  // Find the parent group object in the query\n  const parentGroup = findPath(parentPath, props.context.query) as RuleGroupType;\n  const id = findPath(props.path, props.context.query)!.id;\n  // Get a comma-separated list of all sibling rule values\n  const siblingValues = (\n    parentGroup.rules.filter(\n      r =>\n        // filter out groups\n        !('rules' in r) &&\n        // filter out self\n        r.id !== id\n    ) as RuleType[]\n  )\n    // map the `value` property\n    .map(r => r.value)\n    // join with comma\n    .join(', ');\n\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column' }}>\n      <ValueEditor {...props} />\n      <span>Others: {siblingValues}</span>\n    </div>\n  );\n};\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { defaultQuery, fields, operators } from './constants';\n\nexport default function App() {\n  const [query, setQuery] = useState(defaultQuery);\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      operators={operators}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      controlElements={{ valueEditor: CustomValueEditor }}\n      context={{ query }}\n    />\n  );\n}\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"constants.ts",children:"import { defaultOperators, Field, RuleGroupType } from 'react-querybuilder';\n\nexport const operators = defaultOperators.filter(op => op.name === '=');\n\nexport const fields: Field[] = [\n  { name: 'field1', label: 'Field 1' },\n  { name: 'field2', label: 'Field 2' },\n  { name: 'field3', label: 'Field 3' },\n  { name: 'field4', label: 'Field 4' },\n];\n\nexport const defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'field1', operator: '=', value: '1' },\n    { field: 'field2', operator: '=', value: '2' },\n    { field: 'field3', operator: '=', value: '3' },\n    { field: 'field4', operator: '=', value: '4' },\n  ],\n};\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:".queryBuilder .rule {\n  align-items: flex-start;\n}\n\nspan {\n  color: gray;\n}\n"})})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},67650:(e,t,r)=>{r.d(t,{b:()=>d});var n=r(62540),o=r(11871),i=r(64871),s=r(63696);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const d=({children:e,customSetup:t,options:r,rqbVersion:a=7})=>{var d,u;const p="dark"===(0,i.G)().colorMode,h=s.Children.toArray(e),f=p?"#343a46":"#ffffff";let m=!0;const y={};for(const n of h){const{props:e}=n.props.children;let t,r=!1,o=!1;if(e.metastring){const[n,...i]=e.metastring.split(" ");t="/"+n,r=i.includes("hidden"),o=i.includes("active")}else if("language-tsx"===e.className)t="/App.tsx";else if("language-js"===e.className)t="/App.js";else{if("language-css"!==e.className)throw new Error(`Code block is missing a filename: ${e.children}`);t="/styles.css"}if(y[t])throw new Error(`File ${t} was defined multiple times. Each file snippet should have a unique path name.`);"/styles.css"!==t||r||(m=!1),y[t]={code:e.children,hidden:r,active:o}}const g=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(null===(d=y["/App.tsx"])||void 0===d?void 0:d.code)?"":"@import 'react-querybuilder/dist/query-builder.css';",x=`\nbody {\n  background-color: ${f};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${p?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;var b;y["/styles.css"]={code:[g,x,null!==(b=null===(u=y["/styles.css"])||void 0===u?void 0:u.code)&&void 0!==b?b:""].join("\n\n"),hidden:m};const j=4===a?{"react-querybuilder":"^4"}:5===a?{"@react-querybuilder/dnd":"^5","react-querybuilder":"^5"}:6===a?{"@react-querybuilder/dnd":"^6","react-querybuilder":"^6"}:{"@react-querybuilder/dnd":"7.0.0-rc.0","react-querybuilder":"7.0.0-rc.0"},v=c(l({},t),{dependencies:l({},null==t?void 0:t.dependencies,j)});return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(o.OZ,{files:y,theme:p?"dark":void 0,template:"vite-react-ts",customSetup:v,options:r})},`v${a}`)}}}]);