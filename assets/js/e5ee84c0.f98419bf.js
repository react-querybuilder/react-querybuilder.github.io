"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={title:"UMD Build",hide_table_of_contents:!0},o=void 0,l={unversionedId:"umd",id:"umd",title:"UMD Build",description:"To use the UMD build of react-querybuilder, link a ` tag to the /dist/index.umd.js file from any version >=4.2.0`, plus the UMD builds of the following dependencies:",source:"@site/docs/umd.mdx",sourceDirName:".",slug:"/umd",permalink:"/docs/next/umd",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/umd.mdx",tags:[],version:"current",frontMatter:{title:"UMD Build",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"TypeScript reference",permalink:"/docs/next/typescript"}},c={},d=[{value:"Example",id:"example",level:2}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use the UMD build of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),", link a ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/dist/index.umd.js")," file from any version ",(0,i.kt)("inlineCode",{parentName:"p"},">=4.2.0"),", plus the UMD builds of the following dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react@17")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"@18"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-dom@17")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"@18"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-dnd@14")," (no higher)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-dnd-html5-backend@14")," (no higher)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"immer@6")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"@7"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"@8"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"@9"),")")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://react-querybuilder.js.org/react-querybuilder/umd.html"},"Live demo")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>React Query Builder UMD Build</title>\n    <link rel="stylesheet" href="https://unpkg.com/react-querybuilder@4/dist/query-builder.css" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>\n    <script\n      crossorigin\n      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script>\n    <script crossorigin src="https://unpkg.com/immer@9/dist/immer.umd.production.min.js"><\/script>\n    <script crossorigin src="https://unpkg.com/react-dnd@14/dist/umd/ReactDnD.min.js"><\/script>\n    <script\n      crossorigin\n      src="https://unpkg.com/react-dnd-html5-backend@14/dist/umd/ReactDnDHTML5Backend.min.js"><\/script>\n    <script crossorigin src="https://unpkg.com/react-querybuilder@4/dist/index.umd.js"><\/script>\n    <script>\n      const fields = [\n        { name: \'firstName\', label: \'First Name\', placeholder: \'Enter first name\' },\n        { name: \'lastName\', label: \'Last Name\' },\n      ];\n      const defaultQuery = {\n        combinator: \'and\',\n        rules: [\n          { field: \'firstName\', operator: \'=\', value: \'Steve\' },\n          { field: \'lastName\', operator: \'=\', value: \'Vai\' },\n        ],\n      };\n      ReactDOM.createRoot(document.getElementById(\'root\')).render(\n        React.createElement(ReactQueryBuilder.QueryBuilder, {\n          fields,\n          defaultQuery,\n          enableDragAndDrop: true,\n        })\n      );\n    <\/script>\n  </body>\n</html>\n')))}s.isMDXComponent=!0}}]);