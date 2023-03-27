"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8391],{74898:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(16668),a=n(55421),o=n(27378);const i=e=>{var t;let{children:n,customSetup:i,options:p,rqbVersion:s=6}=e;const l="dark"===(0,a.I)().colorMode,u=o.Children.toArray(n),d=l?"#343a46":"#ffffff";let c=!0;const h=u.reduce(((e,t)=>{if("pre"!==t.props.mdxType)return e;const{props:n}=t.props.children;let r,a=!1,o=!1;if(n.metastring){const[e,...t]=n.metastring.split(" ");r="/"+e,t.includes("hidden")&&(a=!0),t.includes("active")&&(o=!0)}else if("language-tsx"===n.className)r="/App.tsx";else if("language-js"===n.className)r="/App.js";else{if("language-css"!==n.className)throw new Error(`Code block is missing a filename: ${n.children}`);r="/styles.css"}if(e[r])throw new Error(`File ${r} was defined multiple times. Each file snippet should have a unique path name.`);return"/styles.css"!==r||a||(c=!1),e[r]={code:n.children,hidden:a,active:o},e}),{}),m=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(h["/App.tsx"].code)?"":"@import 'react-querybuilder/dist/query-builder.css';",f=`\nbody {\n  background-color: ${d};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${l?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;h["/styles.css"]={code:[m,f,(null==(t=h["/styles.css"])?void 0:t.code)??""].join("\n\n"),hidden:c};const y=4===s?{"react-querybuilder":"^4.5.3"}:5===s?{"@react-querybuilder/dnd":"^5.4.1","react-querybuilder":"^5.4.1"}:{"@react-querybuilder/dnd":"^6.0.7","react-querybuilder":"^6.0.7"},g={...i,dependencies:{...null==i?void 0:i.dependencies,...y}};return o.createElement("div",{key:`v${s}`,className:"sandpackrqb"},o.createElement(r.xR,{files:h,theme:l?"dark":void 0,template:"vite-react-ts",customSetup:g,options:p}))}},56379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(52685),a=(n(27378),n(35318)),o=n(74898);const i={title:"Path concepts",description:'Explanation of the "path" property of rules and groups',hide_table_of_contents:!0},p=void 0,s={unversionedId:"tips/path",id:"version-6/tips/path",title:"Path concepts",description:'Explanation of the "path" property of rules and groups',source:"@site/versioned_docs/version-6/tips/path.mdx",sourceDirName:"tips",slug:"/tips/path",permalink:"/docs/tips/path",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/tips/path.mdx",tags:[],version:"6",frontMatter:{title:"Path concepts",description:'Explanation of the "path" property of rules and groups',hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Managing operators",permalink:"/docs/tips/managing-operators"},next:{title:"Limit rule groups",permalink:"/docs/tips/limit-groups"}},l={},u=[{value:"Finding a <code>path</code>",id:"finding-a-path",level:2},{value:"Example",id:"example",level:2}],d={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property can uniquely identify a rule or group, an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," won't naturally indicate anything about the ",(0,a.kt)("em",{parentName:"p"},"position"),' of the object within the query hierarchy. For that reason, React Query Builder uses the concept of a "path" to locate and update query objects.'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," property is an array of integers unique to each rule and group within a query. The query object itself, aka the root group, has a ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),". All other rules and groups within the query have a ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," that corresponds to their position within the ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," array(s) of their ancestor group(s)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," of any object (rule or group) is equivalent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," of its parent group plus another array element which is the index of the object within its parent's ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," array. You can think of it like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"path = [...parentPath, index]"),"."),(0,a.kt)("p",null,"Consider the following query. The respective ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," for each rule and group is commented above it, along with a short explanation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// [] (the root group)\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    // [0] (the first, aka zeroth, element in the root rules array)\n    { field: 'f1', operator: '=', value: 'v1' },\n    // [1] (the second element in the root rules array is a sub-group)\n    {\n      combinator: 'or',\n      rules: [\n        // [1, 0] (the first element within the rules array\n        //         of the group occupying the second position\n        //         in the root rules array)\n        { field: 'f2', operator: '=', value: 'v2' },\n        // [1, 1] (the second element within the rules array\n        //         of the group occupying the second position\n        //         in the root rules array)\n        { field: 'f3', operator: '=', value: 'v3' },\n      ],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," of the top-most rule in the query is ",(0,a.kt)("inlineCode",{parentName:"p"},"[0]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," being the index of that rule within the root group's ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," array. The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," of the first sub-group in the query is ",(0,a.kt)("inlineCode",{parentName:"p"},"[1]"),", again according to its index within the outermost ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," array. Each child rule of ",(0,a.kt)("em",{parentName:"p"},"that")," group has a path that begins with ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," (the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," of its parent), followed by its own index."),(0,a.kt)("h2",{id:"finding-a-path"},"Finding a ",(0,a.kt)("inlineCode",{parentName:"h2"},"path")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"../utils/misc#findpath"},(0,a.kt)("inlineCode",{parentName:"a"},"findPath"))," function to locate a specific rule or group for examination or update. Given the query above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"findPath([1, 0], query);\n")),(0,a.kt)("p",null,"would return this object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "field": "f2", "operator": "=", "value": "v2" }\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In most scenarios you won't need to interact with the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," attribute, but it can come in handy in certain situations. One such situation is if you need to access other parts of the query from within a custom component."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"By default, custom components only receive props relevant to the rule or group they act on, but you can augment these default props with other data or information by using the ",(0,a.kt)("a",{parentName:"p",href:"../components/querybuilder#context"},(0,a.kt)("inlineCode",{parentName:"a"},"context")," prop"),".")),(0,a.kt)("p",null,"Say you have a custom value editor that needs to know the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," of each of its sibling rules. We would recommend passing the entire query down through the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," prop and retrieving the sibling rules with a combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"getParentPath")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"findPath"),"."),(0,a.kt)(o.c,{rqbVersion:6,options:{editorHeight:444,activeFile:"/CustomValueEditor.tsx"},mdxType:"SandpackRQB"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"CustomValueEditor.tsx","CustomValueEditor.tsx":!0},"import {\n  findPath,\n  getParentPath,\n  RuleGroupType,\n  RuleType,\n  ValueEditor,\n  ValueEditorProps,\n} from 'react-querybuilder';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  // Get the path of this rule's parent group\n  const parentPath = getParentPath(props.path);\n  // Find the parent group object in the query\n  const parentGroup = findPath(parentPath, props.context.query) as RuleGroupType;\n  const id = findPath(props.path, props.context.query)!.id;\n  // Get a comma-separated list of all sibling rule values\n  const siblingValues = (\n    parentGroup.rules.filter(\n      r =>\n        // filter out groups\n        !('rules' in r) &&\n        // filter out self\n        r.id !== id\n    ) as RuleType[]\n  )\n    // map the `value` property\n    .map(r => r.value)\n    // join with comma\n    .join(', ');\n\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column' }}>\n      <ValueEditor {...props} />\n      <span>Others: {siblingValues}</span>\n    </div>\n  );\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { defaultQuery, fields, operators } from './constants';\nimport { CustomValueEditor } from './CustomValueEditor';\n\nexport default function App() {\n  const [query, setQuery] = useState(defaultQuery);\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      operators={operators}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      controlElements={{ valueEditor: CustomValueEditor }}\n      context={{ query }}\n    />\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"constants.ts","constants.ts":!0},"import { defaultOperators, Field, RuleGroupType } from 'react-querybuilder';\n\nexport const operators = defaultOperators.filter(op => op.name === '=');\n\nexport const fields: Field[] = [\n  { name: 'field1', label: 'Field 1' },\n  { name: 'field2', label: 'Field 2' },\n  { name: 'field3', label: 'Field 3' },\n  { name: 'field4', label: 'Field 4' },\n];\n\nexport const defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'field1', operator: '=', value: '1' },\n    { field: 'field2', operator: '=', value: '2' },\n    { field: 'field3', operator: '=', value: '3' },\n    { field: 'field4', operator: '=', value: '4' },\n  ],\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".queryBuilder .rule {\n  align-items: flex-start;\n}\n\nspan {\n  color: gray;\n}\n"))))}h.isMDXComponent=!0}}]);