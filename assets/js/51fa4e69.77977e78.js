"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1582],{4214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(83117),i=(n(67294),n(3905));const a={title:"UMD build",hide_table_of_contents:!0},s=void 0,c={unversionedId:"umd",id:"version-5/umd",title:"UMD build",description:"To use the UMD build of react-querybuilder, link ` tags to the /dist/index.umd.js file, plus the same version of @react-querybuilder/ctx` and the UMD builds of the following dependencies:",source:"@site/versioned_docs/version-5/umd.mdx",sourceDirName:".",slug:"/umd",permalink:"/docs/umd",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/umd.mdx",tags:[],version:"5",frontMatter:{title:"UMD build",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"TypeScript reference",permalink:"/docs/typescript"},next:{title:"Migrating to newer versions",permalink:"/docs/migrate"}},l={},o=[{value:"Basic example",id:"basic-example",level:2},{value:"Drag-and-drop example",id:"drag-and-drop-example",level:2}],d={toc:o};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use the UMD build of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", link ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tags to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/dist/index.umd.js")," file, plus the same version of ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-querybuilder/ctx")," and the UMD builds of the following dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react@17")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"@18"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-dom@17")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"@18"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"immer@6")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"@7"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"@8"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"@9"),")")),(0,i.kt)("h2",{id:"basic-example"},"Basic example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>React Query Builder UMD</title>\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/react-querybuilder@5/dist/query-builder.css\" />\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script>\n      var process = { env: { NODE_ENV: 'development' } };\n    <\/script>\n    <script crossorigin src=\"https://unpkg.com/react@18/umd/react.development.js\"><\/script>\n    <script crossorigin src=\"https://unpkg.com/react-dom@18/umd/react-dom.development.js\"><\/script>\n    <script crossorigin src=\"https://unpkg.com/immer@9/dist/immer.umd.development.js\"><\/script>\n    <script\n      crossorigin\n      src=\"https://unpkg.com/@react-querybuilder/ctx@5/dist/index.umd.js\"><\/script>\n    <script crossorigin src=\"https://unpkg.com/react-querybuilder@5/dist/index.umd.js\"><\/script>\n    <script crossorigin src=\"https://unpkg.com/babel-standalone@6/babel.min.js\"><\/script>\n    <script type=\"text/babel\">\n      const fields = [\n        { name: 'firstName', label: 'First Name', placeholder: 'Enter first name' },\n        { name: 'lastName', label: 'Last Name' },\n      ];\n      const defaultQuery = {\n        combinator: 'and',\n        rules: [\n          { field: 'firstName', operator: '=', value: 'Steve' },\n          { field: 'lastName', operator: '=', value: 'Vai' },\n        ],\n      };\n      ReactDOM.createRoot(document.getElementById('root')).render(\n        <ReactQueryBuilder.QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n      );\n    <\/script>\n  </body>\n</html>\n")),(0,i.kt)("h2",{id:"drag-and-drop-example"},"Drag-and-drop example"),(0,i.kt)("p",null,"To add drag-and-drop capability, include ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dnd@14")," (no higher), ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dnd-html5-backend@14")," (no higher), and ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-querybuilder/dnd"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>React Query Builder UMD (DnD)</title>\n    <link rel="stylesheet" href="https://unpkg.com/react-querybuilder@5/dist/query-builder.css" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script>\n      var process = { env: { NODE_ENV: \'development\' } };\n    <\/script>\n    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n    <script crossorigin src="https://unpkg.com/immer@9/dist/immer.umd.development.js"><\/script>\n    \x3c!-- highlight-start --\x3e\n    <script crossorigin src="https://unpkg.com/react-dnd@14/dist/umd/ReactDnD.min.js"><\/script>\n    <script\n      crossorigin\n      src="https://unpkg.com/react-dnd-html5-backend@14/dist/umd/ReactDnDHTML5Backend.min.js"><\/script>\n    \x3c!-- highlight-end --\x3e\n    <script\n      crossorigin\n      src="https://unpkg.com/@react-querybuilder/ctx@5/dist/index.umd.js"><\/script>\n    <script crossorigin src="https://unpkg.com/react-querybuilder@5/dist/index.umd.js"><\/script>\n    \x3c!-- highlight-start --\x3e\n    <script\n      crossorigin\n      src="https://unpkg.com/@react-querybuilder/dnd@5/dist/index.umd.js"><\/script>\n    \x3c!-- highlight-end --\x3e\n    <script crossorigin src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n    <script type="text/babel">\n      const fields = [\n        { name: \'firstName\', label: \'First Name\', placeholder: \'Enter first name\' },\n        { name: \'lastName\', label: \'Last Name\' },\n      ];\n      const defaultQuery = {\n        combinator: \'and\',\n        rules: [\n          { field: \'firstName\', operator: \'=\', value: \'Steve\' },\n          { field: \'lastName\', operator: \'=\', value: \'Vai\' },\n        ],\n      };\n      ReactDOM.createRoot(document.getElementById(\'root\')).render(\n        // highlight-start\n        <ReactQueryBuilderDnD.QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDnDHTML5Backend }}>\n          <ReactQueryBuilder.QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n        </ReactQueryBuilderDnD.QueryBuilderDnD>\n        // highlight-end\n      );\n    <\/script>\n  </body>\n</html>\n')))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=o(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var o=2;o<a;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);