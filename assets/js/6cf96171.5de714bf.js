"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4823],{19557:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(39423),o=n(70524),a=n(67294);const i=e=>{var t;let{children:n,customSetup:i,options:s,rqbVersion:l=5}=e;const u="dark"===(0,o.I)().colorMode,d=a.Children.toArray(n),c=u?"#343a46":"#ffffff";let p=!0;const m=d.reduce(((e,t)=>{if("pre"!==t.props.mdxType)return e;const{props:n}=t.props.children;let r,o=!1,a=!1;if(n.metastring){const[e,...t]=n.metastring.split(" ");r="/"+e,t.includes("hidden")&&(o=!0),t.includes("active")&&(a=!0)}else if("language-tsx"===n.className)r="/App.tsx";else if("language-js"===n.className)r="/App.js";else{if("language-css"!==n.className)throw new Error(`Code block is missing a filename: ${n.children}`);r="/styles.css"}if(e[r])throw new Error(`File ${r} was defined multiple times. Each file snippet should have a unique path name.`);return"/styles.css"!==r||o||(p=!1),e[r]={code:n.children,hidden:o,active:a},e}),{}),h=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(m["/App.tsx"].code)?"":"@import 'react-querybuilder/dist/query-builder.css';",b=`\nbody {\n  background-color: ${c};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\n${u?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;m["/styles.css"]={code:[h,b,(null==(t=m["/styles.css"])?void 0:t.code)??""].join("\n\n"),hidden:p};const y=4===l?{"react-querybuilder":"^4.5.3"}:5===l?{"@react-querybuilder/dnd":"^5.3.3","react-querybuilder":"^5.3.3"}:{"@react-querybuilder/dnd":"6.0.0","react-querybuilder":"6.0.0"},v={...i,dependencies:{...null==i?void 0:i.dependencies,...y}};return a.createElement("div",{key:`v${l}`,className:"sandpackrqb"},a.createElement(r.xR,{files:m,theme:u?"dark":void 0,template:"react-ts",customSetup:v,options:s}))}},46144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(83117),o=(n(67294),n(3905)),a=n(19557);const i={title:"External controls",description:"Managing queries outside the main component",hide_table_of_contents:!0},s=void 0,l={unversionedId:"tips/external-controls",id:"version-4/tips/external-controls",title:"External controls",description:"Managing queries outside the main component",source:"@site/versioned_docs/version-4/tips/external-controls.mdx",sourceDirName:"tips",slug:"/tips/external-controls",permalink:"/docs/4/tips/external-controls",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/tips/external-controls.mdx",tags:[],version:"4",frontMatter:{title:"External controls",description:"Managing queries outside the main component",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom components with fallbacks",permalink:"/docs/4/tips/custom-with-fallback"},next:{title:"Custom bind variables",permalink:"/docs/4/tips/custom-bind-variables"}},u={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React Query Builder exports the same ",(0,o.kt)("a",{parentName:"p",href:"../api/misc#query-tools"},"query tools")," it uses internally to manage query updates. These functions can be used outside the context of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component, giving developers greater flexibility in UI design while enabling the same query management features."),(0,o.kt)("p",null,"In the example below, the default add/remove buttons have been hidden. The internal query methods (",(0,o.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"move"),") are used within the event handlers assigned to the controls above the query builder. The function return values are assigned to the same state variable that the query builder uses, so the updates are synchronized."),(0,o.kt)(a.c,{rqbVersion:5,options:{editorHeight:480},mdxType:"SandpackRQB"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport {\n  add,\n  defaultCombinators,\n  Field,\n  move,\n  QueryBuilder,\n  remove,\n  RuleGroupType,\n  update,\n} from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.scss';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nconst initialQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'firstName', operator: '=', value: 'Steve' },\n    { field: 'lastName', operator: '=', value: 'Vai' },\n  ],\n};\n\nconst NullComponent = () => null;\n\nexport default () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  // add\n  const addRule = () =>\n    setQuery(add(query, { field: 'firstName', operator: '=', value: 'Steve' }, []));\n\n  // remove\n  const removeFirstRule = () => setQuery(remove(query, [0]));\n\n  // update\n  const updateCombinator = (e: ChangeEvent<HTMLSelectElement>) =>\n    setQuery(update(query, 'combinator', e.target.value, []));\n\n  // move\n  const moveBottomRuleToTop = () => setQuery(move(query, [query.rules.length - 1], [0]));\n\n  return (\n    <div>\n      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>\n        <button onClick={addRule} title=\"Add a rule at the bottom of the group\">\n          Add rule\n        </button>\n        <button onClick={removeFirstRule} title=\"Remove the top-most rule\">\n          Remove first rule\n        </button>\n        <button onClick={moveBottomRuleToTop} title=\"Move the bottom-most rule to the top\">\n          Move bottom rule to top\n        </button>\n        <select value={query.combinator} onChange={updateCombinator} title=\"Update the combinator\">\n          {defaultCombinators.map(c => (\n            <option key={c.name} value={c.name}>\n              Update combinator to {c.label}\n            </option>\n          ))}\n        </select>\n      </div>\n      <QueryBuilder\n        fields={fields}\n        query={query}\n        onQueryChange={q => setQuery(q)}\n        controlElements={{\n          // These declarations prevent the \"+Rule\", \"+Group\",\n          // and \"x\" (rule removal) buttons from rendering:\n          addGroupAction: NullComponent,\n          addRuleAction: NullComponent,\n          removeRuleAction: NullComponent,\n        }}\n      />\n    </div>\n  );\n};\n"))))}p.isMDXComponent=!0}}]);