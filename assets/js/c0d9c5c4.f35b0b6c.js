"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[374],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8511:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Custom bind variables"},u=void 0,p={unversionedId:"tips/custom-bind-variables",id:"tips/custom-bind-variables",isDocsHomePage:!1,title:"Custom bind variables",description:"Different SQL flavors have different requirements for bind variable placeholders. Some use a simple ? character (which is what formatQuery(query, 'parameterized') produces by default), and others require a bind variable placeholder to start with $ and be followed by a unique string.",source:"@site/docs/tips/custom-bind-variables.md",sourceDirName:"tips",slug:"/tips/custom-bind-variables",permalink:"/docs/tips/custom-bind-variables",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/tips/custom-bind-variables.md",tags:[],version:"current",frontMatter:{title:"Custom bind variables"},sidebar:"mySidebar",previous:{title:"Custom components with fallbacks",permalink:"/docs/tips/custom-with-fallback"},next:{title:"Adding and removing query properties",permalink:"/docs/tips/adding-removing-query-properties"}},c=[],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Different SQL flavors have different requirements for bind variable placeholders. Some use a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," character (which is what ",(0,i.kt)("inlineCode",{parentName:"p"},"formatQuery(query, 'parameterized')")," produces by default), and others require a bind variable placeholder to start with ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," and be followed by a unique string."),(0,i.kt)("p",null,'The "parameterized_named" export format will usually be sufficient to cover the latter case. But if the default parameter names (e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},":fieldName_1"),') are not acceptable, you can use the "parameterized" format and replace the "?" with your choice of name.'),(0,i.kt)("p",null,'The following code will produce a SQL string with each bind variable placeholder being numbered from "$1" to "$',(0,i.kt)("em",{parentName:"p"},"n"),'", where ',(0,i.kt)("em",{parentName:"p"},"n")," is the number of bind variables (also, appropriately, the number of elements in the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," array)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'let i = 0;\nconst sql = (\n  formatQuery(query, "parameterized") as ParameterizedSQL\n).sql.replaceAll("?", () => {\n  i++;\n  return `$${i}`;\n});\n')),(0,i.kt)("p",null,"For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},'formatQuery(query, "parameterized")')," produced the following object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  sql: "(firstName = ? and lastName = ?)",\n  params: ["Steve", "Vai"]\n}\n')),(0,i.kt)("p",null,"...then the code above would assign the following string to the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," variable:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"(firstName = $1 and lastName = $2)"')))}d.isMDXComponent=!0}}]);