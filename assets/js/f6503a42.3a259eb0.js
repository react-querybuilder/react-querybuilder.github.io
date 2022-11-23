"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4310],{25681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(83117),a=(n(67294),n(3905));const o={title:"Migrating to newer versions"},i=void 0,l={unversionedId:"migrate",id:"version-5/migrate",title:"Migrating to newer versions",description:"From v4 to v5",source:"@site/versioned_docs/version-5/migrate.mdx",sourceDirName:".",slug:"/migrate",permalink:"/docs/migrate",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/migrate.mdx",tags:[],version:"5",frontMatter:{title:"Migrating to newer versions"},sidebar:"mySidebar",previous:{title:"UMD Build",permalink:"/docs/umd"}},p={},d=[{value:"From v4 to v5",id:"from-v4-to-v5",level:2},{value:"Drag-and-drop",id:"drag-and-drop",level:3},{value:"Compatibility packages",id:"compatibility-packages",level:3},{value:"From v3 to v4",id:"from-v3-to-v4",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"from-v4-to-v5"},"From v4 to v5"),(0,a.kt)("p",null,"The transition from v4 to v5 should be fairly seemless. Core functionality has not been affected much since v4, other than a few bug fixes (see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/blob/main/CHANGELOG.md"},"changelog"),"). Significant code changes will only be necessary if you set the ",(0,a.kt)("a",{parentName:"p",href:"#drag-and-drop"},(0,a.kt)("inlineCode",{parentName:"a"},"enableDragAndDrop")," prop to ",(0,a.kt)("inlineCode",{parentName:"a"},"true"))," and/or you use one of the ",(0,a.kt)("a",{parentName:"p",href:"#compatibility-packages"},"compatibility packages"),"."),(0,a.kt)("h3",{id:"drag-and-drop"},"Drag-and-drop"),(0,a.kt)("p",null,"To enable drag-and-drop in v5, you'll need to make two changes."),(0,a.kt)("p",null,"First, install ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-dnd"},(0,a.kt)("inlineCode",{parentName:"a"},"react-dnd"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-dnd-html5-backend"},(0,a.kt)("inlineCode",{parentName:"a"},"react-dnd-html5-backend"))," explicitly, along with the companion package ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@react-querybuilder/dnd"},(0,a.kt)("inlineCode",{parentName:"a"},"@react-querybuilder/dnd")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-dnd react-dnd-html5-backend @react-querybuilder/dnd --save\n# OR\nyarn add react-dnd react-dnd-html5-backend @react-querybuilder/dnd\n")),(0,a.kt)("p",null,"Second, instead of setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableDragAndDrop")," prop explicitly, wrap your ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," element in ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilderDnD />")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-querybuilder/dnd"),". This will automatically set ",(0,a.kt)("inlineCode",{parentName:"p"},"enableDragAndDrop={true}")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," export function App() {\n   return (\n-    <QueryBuilder enableDragAndDrop />\n+    <QueryBuilderDnD>\n+      <QueryBuilder />\n+    </QueryBuilderDnD>\n   );\n }\n")),(0,a.kt)("p",null,"We also ",(0,a.kt)("em",{parentName:"p"},"strongly")," recommended passing all the exports from ",(0,a.kt)("inlineCode",{parentName:"p"},"react-dnd")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"react-dnd-html5-backend")," in to ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilderDnD />")," through its ",(0,a.kt)("inlineCode",{parentName:"p"},"dnd")," prop. Otherwise the query builder will initially be rendered with drag-and-drop disabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilderDnD } from '@react-querybuilder/dnd';\n// highlight-start\nimport * as ReactDnD from 'react-dnd';\nimport * as ReactDndHtml5Backend from 'react-dnd-html5-backend';\n// highlight-end\nimport { QueryBuilder } from 'react-querybuilder';\n\nexport function App() {\n  return (\n    {/* highlight-start */}\n    <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>\n      {/* highlight-end */}\n      <QueryBuilder />\n    </QueryBuilderDnD>\n  );\n};\n")),(0,a.kt)("p",null,"More information is available in the ",(0,a.kt)("a",{parentName:"p",href:"./api/querybuilder#enabledraganddrop"},"full API documentation"),"."),(0,a.kt)("h3",{id:"compatibility-packages"},"Compatibility packages"),(0,a.kt)("p",null,"The recommended implementation of ",(0,a.kt)("a",{parentName:"p",href:"./compat"},"compatibility packages")," has been simplified in v5. Instead of explicitly passing the replacement components in to the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlElements")," prop, you can wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," element in the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilder* />")," context provider that will automatically apply the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"controlElements"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"controlClassnames"),", and any other relevant props (now or in the future!). The example below uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@react-querybuilder/bootstrap"},"Bootstrap-compatible package"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"-import {\n-  bootstrapControlClassnames,\n-  bootstrapControlElements\n-} from '@react-querybuilder/bootstrap';\n+import { QueryBuilderBootstrap } from '@react-querybuilder/bootstrap';\n import 'bootstrap-icons/font/bootstrap-icons.scss';\n import 'bootstrap/scss/bootstrap.scss';\n import { QueryBuilder } from 'react-querybuilder';\n\n export function App() {\n   return (\n-    <QueryBuilder\n-      controlClassnames={bootstrapControlClassnames}\n-      controlElements={bootstrapControlElements}\n-    />\n+    <QueryBuilderBootstrap>\n+      <QueryBuilder />\n+    </QueryBuilderBootstrap>\n   );\n };\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"./compat"},"compatibility package documentation")," for more information about specific packages, particularly ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-querybuilder/material"),".")),(0,a.kt)("h2",{id:"from-v3-to-v4"},"From v3 to v4"),(0,a.kt)("p",null,"React Query Builder v4 was mainly a feature release, but changes to the structure of the rendered HTML necessitated a major version bump."),(0,a.kt)("p",null,"A new drag handle ",(0,a.kt)("inlineCode",{parentName:"p"},"<span />")," element will always be rendered at the front of every rule and rule group header element, regardless of whether you enable the drag-and-drop feature. If drag-and-drop is disabled (the default setting), you should hide the drag handle by either 1) using the default stylesheet which hides it automatically when drag-and-drop is disabled, or 2) hiding it with a style rule like ",(0,a.kt)("inlineCode",{parentName:"p"},".queryBuilder-dragHandle { display: none; }"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The default stylesheet can be loaded as CSS or SCSS:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import 'react-querybuilder/dist/query-builder.css';\n// OR\nimport 'react-querybuilder/dist/query-builder.scss';\n"))),(0,a.kt)("p",null,"If using TypeScript, custom ",(0,a.kt)("inlineCode",{parentName:"p"},"operatorSelector")," components will need to accommodate ",(0,a.kt)("inlineCode",{parentName:"p"},"OptionGroup<NameLabelPair>[]")," in addition to the normal ",(0,a.kt)("inlineCode",{parentName:"p"},"NameLabelPair[]"),"."),(0,a.kt)("p",null,"Internal methods for immutably updating queries have been moved from the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," prop to the new ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," prop on both ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleProps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupProps"),". Custom ",(0,a.kt)("inlineCode",{parentName:"p"},"<Rule />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<RuleGroup />")," components will need to adjust their prop declarations."))}s.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,y=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);