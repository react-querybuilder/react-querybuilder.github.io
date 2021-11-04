"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[936],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(f,a(a({ref:r},s),{},{components:t})):n.createElement(f,a({ref:r},s))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7686:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],p={title:"Adding and removing query properties"},u=void 0,l={unversionedId:"tips/adding-removing-query-properties",id:"tips/adding-removing-query-properties",isDocsHomePage:!1,title:"Adding and removing query properties",description:"Removing properties",source:"@site/docs/tips/adding-removing-query-properties.md",sourceDirName:"tips",slug:"/tips/adding-removing-query-properties",permalink:"/docs/tips/adding-removing-query-properties",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/tips/adding-removing-query-properties.md",tags:[],version:"current",frontMatter:{title:"Adding and removing query properties"},sidebar:"mySidebar",previous:{title:"Custom bind variables",permalink:"/docs/tips/custom-bind-variables"},next:{title:"Common mistakes",permalink:"/docs/tips/common-mistakes"}},s=[{value:"Removing properties",id:"removing-properties",children:[],level:2},{value:"Adding properties",id:"adding-properties",children:[],level:2}],c={toc:s};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"removing-properties"},"Removing properties"),(0,o.kt)("p",null,"To convert a standard query object to a JSON string containing only certain properties, you can take advantage of the second parameter of the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},(0,o.kt)("inlineCode",{parentName:"a"},"JSON.stringify")," function"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const query: RuleGroupType = {\n  id: "root",\n  combinator: "and",\n  rules: [\n    {\n      field: "firstName",\n      operator: "=",\n      value: "Steve",\n    },\n  ],\n};\n\n// This will leave off the `id` and `combinator` properties:\nconsole.log(JSON.stringify(query, ["rules", "field", "operator", "value"]));\n// \'{"rules":[{"field":"firstName","operator":"=","value":"Steve"}]}\'\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"formatQuery")," function also provides a shortcut for producing a JSON string representing everything in the query except the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(formatQuery(query, "json_without_ids"));\n// \'{"combinator":"and","rules":[{"field":"firstName","operator":"=","value":"Steve"}]}\'\n')),(0,o.kt)("h2",{id:"adding-properties"},"Adding properties"),(0,o.kt)("p",null,"To produce a query object with additional properties, you can loop through the ",(0,o.kt)("inlineCode",{parentName:"p"},"rules")," array recursively. In the example below (from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/issues/226"},"issue #226"),"), the ",(0,o.kt)("inlineCode",{parentName:"p"},"inputType")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," array is added to each rule."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Field, RuleGroupType, RuleType } from 'react-querybuilder';\n\nconst fields: Field[] = [\n  { name: 'description', label: 'Description', inputType: 'string' },\n  { name: 'price', label: 'Price', inputType: 'number' }\n];\n\nconst processRule = (r: RuleType): RuleType & { inputType?: string } => ({\n  ...r,\n  inputType: fields.find((f) => f.name === r.field)?.inputType\n});\n\nconst processGroup = (rg: RuleGroupType): RuleGroupType => ({\n  ...rg,\n  rules: rg.rules.map((r) => {\n    if ('field' in r) {\n      return processRule(r);\n    }\n    return processGroup(r);\n  })\n});\n\nconst result = processGroup(query);\n")))}d.isMDXComponent=!0}}]);