"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8254],{49781:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>b});var n=t(62540),i=t(65404),a=t(23009),o=t(29717),l=t(67650),s=t(18597);const c={title:"Getting started",hide_table_of_contents:!0},u=void 0,d={id:"intro",title:"Getting started",description:"TL;DR",source:"@site/versioned_docs/version-5/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/5/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/intro.mdx",tags:[],version:"5",frontMatter:{title:"Getting started",hide_table_of_contents:!0},sidebar:"mySidebar",next:{title:"API",permalink:"/docs/5/category/api"}},p={},b=[{value:"TL;DR",id:"tldr",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Exporting queries",id:"exporting-queries",level:2},{value:"Onward and upward!",id:"onward-and-upward",level:2},{value:"Training",id:"training",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic-ts",children:"Basic example (TypeScript)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/basic",children:"Basic example (JavaScript)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/examples/",children:"More examples"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(r.p,{children:["To install ",(0,n.jsx)(r.code,{children:"react-querybuilder"}),", use a package manager like ",(0,n.jsx)(r.a,{href:"https://www.npmjs.com/",children:"npm"}),", ",(0,n.jsx)(r.a,{href:"https://yarnpkg.com/",children:"Yarn"}),", ",(0,n.jsx)(r.a,{href:"https://pnpm.io/",children:"pnpm"}),", or ",(0,n.jsx)(r.a,{href:"https://bun.sh/",children:"Bun"}),". A ",(0,n.jsx)(r.a,{href:"./umd",children:"UMD build"})," is also available."]}),"\n",(0,n.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,n.jsx)(o.A,{value:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm i react-querybuilder\n"})})}),(0,n.jsx)(o.A,{value:"Bun",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"bun add react-querybuilder\n"})})}),(0,n.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"yarn add react-querybuilder\n"})})}),(0,n.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"pnpm add react-querybuilder\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"basics",children:"Basics"}),"\n",(0,n.jsxs)(r.p,{children:["The simplest way to create a query builder is to render the ",(0,n.jsx)(r.code,{children:"QueryBuilder"})," component with no props. (Be sure to import the official stylesheet, which is available in ",(0,n.jsx)(r.code,{children:".css"})," and ",(0,n.jsx)(r.code,{children:".scss"})," flavors.)"]}),"\n",(0,n.jsx)(l.b,{rqbVersion:5,options:{editorHeight:160},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nexport default () => <QueryBuilder />;\n"})})}),"\n",(0,n.jsxs)(r.p,{children:["Functional, but not very useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from. We can pass the ",(0,n.jsx)(r.code,{children:"fields"})," array into the query builder through the ",(0,n.jsx)(r.code,{children:"fields"})," prop."]}),"\n",(0,n.jsx)(r.p,{children:'In the query builder below, click the "+Rule" button and then the field selector to see the field choices.'}),"\n",(0,n.jsx)(l.b,{rqbVersion:5,options:{editorHeight:240},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => <QueryBuilder fields={fields} />;\n"})})}),"\n",(0,n.jsxs)(r.p,{children:["Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,n.jsx)(r.code,{children:"useState"}),". This will store our query object and allow us to pass it on to other components, event handlers, etc."]}),"\n",(0,n.jsxs)(r.p,{children:["The state variable ",(0,n.jsx)(r.code,{children:"query"})," will be passed to the ",(0,n.jsx)(r.code,{children:"query"})," prop, and the setter method ",(0,n.jsx)(r.code,{children:"setQuery"})," will be used in the ",(0,n.jsx)(r.code,{children:"onQueryChange"})," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,n.jsx)(r.code,{children:"field"})," property of each rule matches the ",(0,n.jsx)(r.code,{children:"name"})," property of one of our fields."]}),"\n",(0,n.jsx)(l.b,{rqbVersion:5,options:{editorHeight:480},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"})})}),"\n",(0,n.jsx)(s.A,{summary:"Non-TypeScript version",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"})})}),"\n",(0,n.jsx)(r.h2,{id:"exporting-queries",children:"Exporting queries"}),"\n",(0,n.jsxs)(r.p,{children:["To convert a query object into other formats like ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/SQL",children:"SQL"}),", ",(0,n.jsx)(r.a,{href:"https://www.mongodb.com/",children:"MongoDB"}),", and ",(0,n.jsx)(r.a,{href:"https://github.com/google/cel-spec",children:"CEL"}),", you can use the ",(0,n.jsx)(r.code,{children:"formatQuery"})," function (",(0,n.jsx)(r.a,{href:"./api/export",children:"full documentation here"}),"). The example below demonstrates the conversion of a query to its equivalent SQL form. Modify the query by manipulating the form elements and the SQL will update accordingly."]}),"\n",(0,n.jsx)(l.b,{rqbVersion:5,options:{editorHeight:480},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Field, formatQuery, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: 'beginsWith', value: 'Stev' },\n      { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },\n    ],\n  });\n\n  return (\n    <>\n      <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />\n      <h4>\n        SQL as result of <code>formatQuery(query, 'sql')</code>:\n      </h4>\n      <pre>{formatQuery(query, 'sql')}</pre>\n    </>\n  );\n};\n"})})}),"\n",(0,n.jsx)(r.h2,{id:"onward-and-upward",children:"Onward and upward!"}),"\n",(0,n.jsxs)(r.p,{children:["To discover all the options of React Query Builder, check out the ",(0,n.jsx)(r.a,{href:"./api/querybuilder",children:"API documentation"}),". To play around with various configurations, including other export formats and ",(0,n.jsx)(r.a,{href:"./api/import",children:"importing from SQL"}),", check out the ",(0,n.jsx)(r.a,{href:"/demo",children:"demo"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"training",children:"Training"}),"\n",(0,n.jsxs)(r.p,{children:["For an extended tutorial on configuration and customization of ",(0,n.jsx)(r.code,{children:"react-querybuilder"}),", including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course ",(0,n.jsx)(r.a,{href:"https://www.newline.co/courses/building-advanced-admin-reporting-in-react",children:"Building Advanced Admin Reporting in React"}),", which is taught by one of this library's maintainers, over at ",(0,n.jsx)(r.a,{href:"https://www.newline.co/",children:"newline"}),"."]})]})}function f(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},18597:(e,r,t)=>{t.d(r,{A:()=>x});var n=t(62540),i=t(63696),a=t(11750),o=t(20218),l=t(20373),s=t(46732);const c={details:"details_IpIu",isBrowser:"isBrowser_QD4r",collapsibleContent:"collapsibleContent_Fd2D"};function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function b(e){return!!e&&("SUMMARY"===e.tagName||b(e.parentElement))}function h(e,r){return!!e&&(e===r||h(e.parentElement,r))}function f(e){var{summary:r,children:t}=e,f=p(e,["summary","children"]);(0,o.A)().collectAnchor(f.id);const y=(0,l.A)(),m=(0,i.useRef)(null),{collapsed:j,setCollapsed:g}=(0,s.u)({initialState:!f.open}),[v,x]=(0,i.useState)(f.open),w=i.isValidElement(r)?r:(0,n.jsx)("summary",{children:null!=r?r:"Details"});return(0,n.jsxs)("details",d(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}({},f),{ref:m,open:v,"data-collapsed":j,className:(0,a.A)(c.details,y&&c.isBrowser,f.className),onMouseDown:e=>{b(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const r=e.target;b(r)&&h(r,m.current)&&(e.preventDefault(),j?(g(!1),x(!0)):g(!0))},children:[w,(0,n.jsx)(s.N,{lazy:!1,collapsed:j,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),x(!e)},children:(0,n.jsx)("div",{className:c.collapsibleContent,children:t})})]}))}const y={details:"details_jERq"};function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(){return j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function g(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}const v="alert alert--info";function x(e){var r=j({},function(e){if(null==e)throw new TypeError("Cannot destructure "+e);return e}(e));return(0,n.jsx)(f,g(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){m(e,r,t[r])}))}return e}({},r),{className:(0,a.A)(v,y.details,r.className)}))}},29717:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(62540),i=(t(63696),t(11750));const a={tabItem:"tabItem_wHwb"};function o({children:e,hidden:r,className:t}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,t),hidden:r,children:e})}},23009:(e,r,t)=>{t.d(r,{A:()=>N});var n=t(62540),i=t(63696),a=t(11750),o=t(2474),l=t(49519),s=t(22583),c=t(18911),u=t(23876),d=t(35040);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function h(e){var r,t;return null!==(t=null===(r=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==t?t:[]}function f(e){const{values:r,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=r?r:function(e){return h(e).map((({props:{value:e,label:r,attributes:t,default:n}})=>({value:e,label:r,attributes:t,default:n})))}(t);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function y({value:e,tabValues:r}){return r.some((r=>r.value===e))}function m({queryString:e=!1,groupId:r}){const t=(0,l.W6)(),n=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),a=(0,c.aZ)(n),o=(0,i.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(t.location.search);r.set(n,e),t.replace(b(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){p(e,r,t[r])}))}return e}({},t.location),{search:r.toString()}))}),[n,t]);return[a,o]}function j(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=f(e),[o,l]=(0,i.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const n=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,u]=m({queryString:t,groupId:n}),[p,b]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,n]=(0,d.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:n}),h=(()=>{const e=null!=c?c:p;return y({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!y({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var g=t(20373);const v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){x(e,r,t[r])}))}return e}function O(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function q({className:e,block:r,selectedValue:t,selectValue:i,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,n=s.indexOf(r),a=l[n].value;a!==t&&(c(r),i(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;var t;r=null!==(t=s[n])&&void 0!==t?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;var n;r=null!==(n=s[t])&&void 0!==n?n:s[s.length-1];break}}null==r||r.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},e),children:l.map((({value:e,label:r,attributes:i})=>(0,n.jsx)("li",O(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>s.push(e),onKeyDown:d,onClick:u},i),{className:(0,a.A)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e}),children:null!=r?r:e}),e)))})}function P({lazy:e,children:r,selectedValue:t}){const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function S(e){const r=j(e);return(0,n.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,n.jsx)(q,w({},e,r)),(0,n.jsx)(P,w({},e,r))]})}function N(e){const r=(0,g.A)();return(0,n.jsx)(S,O(w({},e),{children:h(e.children)}),String(r))}},67650:(e,r,t)=>{t.d(r,{b:()=>u});var n=t(62540),i=t(11871),a=t(64871),o=t(63696);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}function c(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}const u=({children:e,customSetup:r,options:t,rqbVersion:l=6})=>{var u,d;const p="dark"===(0,a.G)().colorMode,b=o.Children.toArray(e),h=p?"#343a46":"#ffffff";let f=!0;const y={};for(const n of b){const{props:e}=n.props.children;let r,t=!1,i=!1;if(e.metastring){const[n,...a]=e.metastring.split(" ");r="/"+n,t=a.includes("hidden"),i=a.includes("active")}else if("language-tsx"===e.className)r="/App.tsx";else if("language-js"===e.className)r="/App.js";else{if("language-css"!==e.className)throw new Error(`Code block is missing a filename: ${e.children}`);r="/styles.css"}if(y[r])throw new Error(`File ${r} was defined multiple times. Each file snippet should have a unique path name.`);"/styles.css"!==r||t||(f=!1),y[r]={code:e.children,hidden:t,active:i}}const m=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(null===(u=y["/App.tsx"])||void 0===u?void 0:u.code)?"":"@import 'react-querybuilder/dist/query-builder.css';",j=`\nbody {\n  background-color: ${h};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${p?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;var g;y["/styles.css"]={code:[m,j,null!==(g=null===(d=y["/styles.css"])||void 0===d?void 0:d.code)&&void 0!==g?g:""].join("\n\n"),hidden:f};const v=4===l?{"react-querybuilder":"^4.5.3"}:5===l?{"@react-querybuilder/dnd":"^5.4.1","react-querybuilder":"^5.4.1"}:{"@react-querybuilder/dnd":"^6.0.7","react-querybuilder":"^6.0.7"},x=c(s({},r),{dependencies:s({},null==r?void 0:r.dependencies,v)});return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(i.OZ,{files:y,theme:p?"dark":void 0,template:"vite-react-ts",customSetup:x,options:t})},`v${l}`)}}}]);