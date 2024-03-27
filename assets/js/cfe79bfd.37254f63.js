"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3367],{38699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(62540),i=r(65404);const s={title:"Custom bind variables",description:"Altering the SQL for certain RDBMS's",hide_table_of_contents:!0},a=void 0,o={id:"tips/custom-bind-variables",title:"Custom bind variables",description:"Altering the SQL for certain RDBMS's",source:"@site/versioned_docs/version-7/tips/custom-bind-variables.md",sourceDirName:"tips",slug:"/tips/custom-bind-variables",permalink:"/docs/tips/custom-bind-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-7/tips/custom-bind-variables.md",tags:[],version:"7",frontMatter:{title:"Custom bind variables",description:"Altering the SQL for certain RDBMS's",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Adding and removing query properties",permalink:"/docs/tips/adding-removing-query-properties"},next:{title:"Common mistakes",permalink:"/docs/tips/common-mistakes"}},c={},d=[];function l(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Different SQL flavors have different requirements for bind variable placeholders. Some use a simple ",(0,n.jsx)(t.code,{children:"?"})," character (which is what ",(0,n.jsx)(t.code,{children:"formatQuery(query, 'parameterized')"})," produces by default), and others require a bind variable placeholder to start with ",(0,n.jsx)(t.code,{children:"$"})," and be followed by a unique string."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"../utils/export#named-parameters",children:'"parameterized_named" export format'})," will usually be sufficient to cover the latter case. But if the default parameter names (e.g. ",(0,n.jsx)(t.code,{children:":fieldName_1"}),') are not acceptable, you can use the "parameterized" format and replace the "?" with your choice of name.']}),"\n",(0,n.jsxs)(t.p,{children:['The following code will produce a SQL string with each bind variable placeholder being numbered from "$1" to "$',(0,n.jsx)(t.em,{children:"n"}),'", where ',(0,n.jsx)(t.em,{children:"n"})," is the number of bind variables (also, appropriately, the number of elements in the ",(0,n.jsx)(t.code,{children:"params"})," array)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"let i = 0;\nconst fq = formatQuery(query, 'parameterized');\nconst fqWithNumberedParams = {\n  ...fq,\n  sql: fq.sql.replaceAll('?', () => `$${++i}`),\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For example, if ",(0,n.jsx)(t.code,{children:'formatQuery(query, "parameterized")'})," produced the following object:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "sql": "(firstName = ? and lastName = ?)",\n  "params": ["Steve", "Vai"]\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["...then the code above would assign the following object to the ",(0,n.jsx)(t.code,{children:"fqWithNumberedParams"})," variable:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "sql": "(firstName = $1 and lastName = $2)",\n  "params": ["Steve", "Vai"]\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},65404:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(63696);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);