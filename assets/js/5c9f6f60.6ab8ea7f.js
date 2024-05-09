"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14440],{96811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=t(62540),i=t(65404);const d={title:"Buildless",hide_table_of_contents:!0},a=void 0,l={id:"buildless",title:"Buildless",description:"React Query Builder can be used directly in the browser without a build step using ESM. Babel can be used to parse JSX in a script tag.",source:"@site/versioned_docs/version-6/buildless.mdx",sourceDirName:".",slug:"/buildless",permalink:"/docs/6/buildless",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/buildless.mdx",tags:[],version:"6",frontMatter:{title:"Buildless",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"TypeScript reference",permalink:"/docs/6/typescript"},next:{title:"Migrating to v6",permalink:"/docs/6/migrate"}},s={},c=[{value:"Basic example",id:"basic-example",level:2},{value:"Drag-and-drop example",id:"drag-and-drop-example",level:2}];function o(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["React Query Builder can be used directly in the browser without a build step using ESM. Babel can be used to parse JSX in a ",(0,r.jsx)(n.code,{children:"script"})," tag."]}),"\n",(0,r.jsx)(n.h2,{id:"basic-example",children:"Basic example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>React Query Builder ESM</title>\n    <link\n      rel=\"stylesheet\"\n      href=\"https://cdn.jsdelivr.net/npm/react-querybuilder@6.5.2/dist/query-builder.css\" />\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\">\n      import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';\n      import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';\n      import { QueryBuilder } from 'https://cdn.jsdelivr.net/npm/react-querybuilder@6.5.2/+esm';\n      // Make the imports available to the Babel script below\n      window.React = React;\n      window.ReactDOM = ReactDOM;\n      window.QueryBuilder = QueryBuilder;\n    <\/script>\n    <script crossorigin src=\"https://unpkg.com/babel-standalone@6/babel.min.js\"><\/script>\n    <script type=\"text/babel\">\n      const fields = [\n        {\n          name: 'firstName',\n          label: 'First Name',\n          placeholder: 'Enter first name',\n        },\n        {\n          name: 'lastName',\n          label: 'Last Name',\n          placeholder: 'Enter last name',\n        },\n      ];\n\n      const defaultQuery = {\n        combinator: 'and',\n        rules: [\n          { field: 'firstName', operator: '=', value: 'Steve' },\n          { field: 'lastName', operator: '=', value: 'Vai' },\n        ],\n      };\n\n      ReactDOM.createRoot(document.getElementById('root')).render(\n        <QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n      );\n    <\/script>\n  </body>\n</html>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"drag-and-drop-example",children:"Drag-and-drop example"}),"\n",(0,r.jsxs)(n.p,{children:["To add drag-and-drop capability, import ",(0,r.jsx)(n.code,{children:"react-dnd"}),", ",(0,r.jsx)(n.code,{children:"react-dnd-html5-backend"}),", and ",(0,r.jsx)(n.code,{children:"@react-querybuilder/dnd"}),". Nest ",(0,r.jsx)(n.code,{children:"<QueryBuilder />"})," inside ",(0,r.jsx)(n.code,{children:"<QueryBuilderDnD />"})," and spread the ",(0,r.jsx)(n.code,{children:"react-dnd*"})," exports to the ",(0,r.jsx)(n.code,{children:"dnd"})," prop."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>React Query Builder ESM (DnD)</title>\n    <link\n      rel=\"stylesheet\"\n      href=\"https://cdn.jsdelivr.net/npm/react-querybuilder@6.5.2/dist/query-builder.css\" />\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\">\n      import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';\n      import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';\n      import { QueryBuilder } from 'https://cdn.jsdelivr.net/npm/react-querybuilder@6.5.2/+esm';\n      // highlight-start\n      import * as ReactDnD from 'https://cdn.jsdelivr.net/npm/react-dnd@16.0.0/+esm';\n      import * as ReactDndHtml5Backend from 'https://cdn.jsdelivr.net/npm/react-dnd-html5-backend@16.0.0/+esm';\n      import { QueryBuilderDnD } from 'https://cdn.jsdelivr.net/npm/@react-querybuilder/dnd@6.5.2/+esm';\n      // highlight-end\n      // Make the imports available to the Babel script below\n      window.React = React;\n      window.ReactDOM = ReactDOM;\n      window.QueryBuilder = QueryBuilder;\n      // highlight-start\n      window.ReactDnD = ReactDnD;\n      window.ReactDndHtml5Backend = ReactDndHtml5Backend;\n      window.QueryBuilderDnD = QueryBuilderDnD;\n      // highlight-end\n    <\/script>\n    <script crossorigin src=\"https://unpkg.com/babel-standalone@6/babel.min.js\"><\/script>\n    <script type=\"text/babel\">\n      const fields = [\n        {\n          name: 'firstName',\n          label: 'First Name',\n          placeholder: 'Enter first name',\n        },\n        {\n          name: 'lastName',\n          label: 'Last Name',\n          placeholder: 'Enter last name',\n        },\n      ];\n\n      const defaultQuery = {\n        combinator: 'and',\n        rules: [\n          { field: 'firstName', operator: '=', value: 'Steve' },\n          { field: 'lastName', operator: '=', value: 'Vai' },\n        ],\n      };\n\n      ReactDOM.createRoot(document.getElementById('root')).render(\n        // highlight-start\n        <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>\n          // highlight-end\n          <QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n          // highlight-start\n        </QueryBuilderDnD>\n        // highlight-end\n      );\n    <\/script>\n  </body>\n</html>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},65404:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(63696);const i={},d=r.createContext(i);function a(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);