"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8126],{10447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const i={title:"Custom bind variables",description:"Altering the SQL for certain RDBMS's",hide_table_of_contents:!0},o=void 0,l={unversionedId:"tips/custom-bind-variables",id:"version-4/tips/custom-bind-variables",title:"Custom bind variables",description:"Altering the SQL for certain RDBMS's",source:"@site/versioned_docs/version-4/tips/custom-bind-variables.mdx",sourceDirName:"tips",slug:"/tips/custom-bind-variables",permalink:"/docs/4/tips/custom-bind-variables",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/tips/custom-bind-variables.mdx",tags:[],version:"4",frontMatter:{title:"Custom bind variables",description:"Altering the SQL for certain RDBMS's",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Custom components with fallbacks",permalink:"/docs/4/tips/custom-with-fallback"},next:{title:"Adding and removing query properties",permalink:"/docs/4/tips/adding-removing-query-properties"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Different SQL flavors have different requirements for bind variable placeholders. Some use a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," character (which is what ",(0,a.kt)("inlineCode",{parentName:"p"},"formatQuery(query, 'parameterized')")," produces by default), and others require a bind variable placeholder to start with ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," and be followed by a unique string."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../api/export#named-parameters"},'"parameterized_named" export format')," will usually be sufficient to cover the latter case. But if the default parameter names (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},":fieldName_1"),') are not acceptable, you can use the "parameterized" format and replace the "?" with your choice of name.'),(0,a.kt)("p",null,'The following code will produce a SQL string with each bind variable placeholder being numbered from "$1" to "$',(0,a.kt)("em",{parentName:"p"},"n"),'", where ',(0,a.kt)("em",{parentName:"p"},"n")," is the number of bind variables (also, appropriately, the number of elements in the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," array)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let i = 0;\nconst { sql, params } = formatQuery(query, 'parameterized');\nconst numberedParams = {\n  params,\n  sql: sql.replaceAll('?', () => {\n    i++;\n    return `$${i}`;\n  }),\n};\n")),(0,a.kt)("p",null,"For example, if ",(0,a.kt)("inlineCode",{parentName:"p"},'formatQuery(query, "parameterized")')," produced the following object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sql": "(firstName = ? and lastName = ?)",\n  "params": ["Steve", "Vai"]\n}\n')),(0,a.kt)("p",null,"...then the code above would assign the following object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"numberedParams")," variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sql": "(firstName = $1 and lastName = $2)",\n  "params": ["Steve", "Vai"]\n}\n')))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);