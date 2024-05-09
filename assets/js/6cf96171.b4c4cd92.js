"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74438],{6323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(62540),o=n(65404),s=n(67650);const i={title:"External controls",description:"Managing queries outside the main component",hide_table_of_contents:!0},a=void 0,l={id:"tips/external-controls",title:"External controls",description:"Managing queries outside the main component",source:"@site/versioned_docs/version-4/tips/external-controls.mdx",sourceDirName:"tips",slug:"/tips/external-controls",permalink:"/docs/4/tips/external-controls",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/tips/external-controls.mdx",tags:[],version:"4",frontMatter:{title:"External controls",description:"Managing queries outside the main component",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom components with fallbacks",permalink:"/docs/4/tips/custom-with-fallback"},next:{title:"Custom bind variables",permalink:"/docs/4/tips/custom-bind-variables"}},u={},d=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["React Query Builder exports the same ",(0,r.jsx)(t.a,{href:"../api/misc#query-tools",children:"query tools"})," it uses internally to manage query updates. These functions can be used outside the context of the ",(0,r.jsx)(t.code,{children:"<QueryBuilder />"})," component, giving developers greater flexibility in UI design while enabling the same query management features."]}),"\n",(0,r.jsxs)(t.p,{children:["In the example below, the default add/remove buttons have been hidden. The internal query methods (",(0,r.jsx)(t.code,{children:"add"}),", ",(0,r.jsx)(t.code,{children:"remove"}),", ",(0,r.jsx)(t.code,{children:"update"}),", and ",(0,r.jsx)(t.code,{children:"move"}),") are used within the event handlers assigned to the controls above the query builder. The function return values are assigned to the same state variable that the query builder uses, so the updates are synchronized."]}),"\n",(0,r.jsx)(s.b,{rqbVersion:5,options:{editorHeight:480},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  add,\n  defaultCombinators,\n  Field,\n  move,\n  QueryBuilder,\n  remove,\n  RuleGroupType,\n  update,\n} from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nconst initialQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'firstName', operator: '=', value: 'Steve' },\n    { field: 'lastName', operator: '=', value: 'Vai' },\n  ],\n};\n\nconst NullComponent = () => null;\n\nexport default () => {\n  const [query, setQuery] = useState(initialQuery);\n\n  // add\n  const addRule = () =>\n    setQuery(add(query, { field: 'firstName', operator: '=', value: 'Steve' }, []));\n\n  // remove\n  const removeFirstRule = () => setQuery(remove(query, [0]));\n\n  // update\n  const updateCombinator = (e: ChangeEvent<HTMLSelectElement>) =>\n    setQuery(update(query, 'combinator', e.target.value, []));\n\n  // move\n  const moveBottomRuleToTop = () => setQuery(move(query, [query.rules.length - 1], [0]));\n\n  return (\n    <div>\n      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>\n        <button onClick={addRule} title=\"Add a rule at the bottom of the group\">\n          Add rule\n        </button>\n        <button onClick={removeFirstRule} title=\"Remove the top-most rule\">\n          Remove first rule\n        </button>\n        <button onClick={moveBottomRuleToTop} title=\"Move the bottom-most rule to the top\">\n          Move bottom rule to top\n        </button>\n        <select value={query.combinator} onChange={updateCombinator} title=\"Update the combinator\">\n          {defaultCombinators.map(c => (\n            <option key={c.name} value={c.name}>\n              Update combinator to {c.label}\n            </option>\n          ))}\n        </select>\n      </div>\n      <QueryBuilder\n        fields={fields}\n        query={query}\n        onQueryChange={q => setQuery(q)}\n        controlElements={{\n          // These declarations prevent the \"+Rule\", \"+Group\",\n          // and \"x\" (rule removal) buttons from rendering:\n          addGroupAction: NullComponent,\n          addRuleAction: NullComponent,\n          removeRuleAction: NullComponent,\n        }}\n      />\n    </div>\n  );\n};\n"})})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},67650:(e,t,n)=>{n.d(t,{b:()=>d});var r=n(62540),o=n(11871),s=n(64871),i=n(63696);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}const d=({children:e,customSetup:t,options:n,rqbVersion:a=7})=>{var d,c;const p="dark"===(0,s.G)().colorMode,m=i.Children.toArray(e),b=p?"#343a46":"#ffffff";let h=!0;const y={};for(const r of m){const{props:e}=r.props.children;let t,n=!1,o=!1;if(e.metastring){const[r,...s]=e.metastring.split(" ");t="/"+r,n=s.includes("hidden"),o=s.includes("active")}else if("language-tsx"===e.className)t="/App.tsx";else if("language-js"===e.className)t="/App.js";else{if("language-css"!==e.className)throw new Error(`Code block is missing a filename: ${e.children}`);t="/styles.css"}if(y[t])throw new Error(`File ${t} was defined multiple times. Each file snippet should have a unique path name.`);"/styles.css"!==t||n||(h=!1),y[t]={code:e.children,hidden:n,active:o}}const f=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(null===(d=y["/App.tsx"])||void 0===d?void 0:d.code)?"":"@import 'react-querybuilder/dist/query-builder.css';",v=`\nbody {\n  background-color: ${b};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${p?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;var g;y["/styles.css"]={code:[f,v,null!==(g=null===(c=y["/styles.css"])||void 0===c?void 0:c.code)&&void 0!==g?g:""].join("\n\n"),hidden:h};const x=4===a?{"react-querybuilder":"^4"}:{"@react-querybuilder/dnd":`^${a||"7"}`,"react-querybuilder":`^${a||"7"}`,"react-dnd":">=14","react-dnd-html5-backend":">=14"},q=u(l({},t),{dependencies:l({},null==t?void 0:t.dependencies,x)});return(0,r.jsx)("div",{className:"sandpackrqb",children:(0,r.jsx)(o.OZ,{files:y,theme:p?"dark":void 0,template:"vite-react-ts",customSetup:q,options:n})},`v${a}`)}}}]);