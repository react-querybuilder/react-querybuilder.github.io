"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1703],{41514:(e,t,n)=>{n.d(t,{L:()=>r});var a=n(67294);const r=e=>{let{option:t,disabled:n=!1,text:r}=e;return a.createElement("a",{href:`/demo#${t}=${!n}`},r||"Click here for demo"+(n?" with this feature disabled":""))}},39973:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(83117),r=(n(67294),n(3905));const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Refer to the ",(0,r.kt)("a",{parentName:"em",href:"../typescript"},"TypeScript reference")," page for information about the types and interfaces referenced below."))))}l.isMDXComponent=!0},60530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(83117),r=(n(67294),n(3905)),i=n(41514),l=n(39973);const o={title:"Validation",description:"Query validation methods and configuration"},d=void 0,u={unversionedId:"utils/validation",id:"version-6/utils/validation",title:"Validation",description:"Query validation methods and configuration",source:"@site/versioned_docs/version-6/utils/validation.mdx",sourceDirName:"utils",slug:"/utils/validation",permalink:"/docs/utils/validation",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/utils/validation.mdx",tags:[],version:"6",frontMatter:{title:"Validation",description:"Query validation methods and configuration"},sidebar:"mySidebar",previous:{title:"Hooks",permalink:"/docs/utils/hooks"},next:{title:"Miscellaneous",permalink:"/docs/utils/misc"}},p={},s=[{value:"Query-level validation",id:"query-level-validation",level:2},{value:"Field-based validation",id:"field-based-validation",level:2},{value:"Effect on HTML",id:"effect-on-html",level:2},{value:"Effect on exports",id:"effect-on-exports",level:2},{value:"Default validator",id:"default-validator",level:2}],c={toc:s};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.ZP,{mdxType:"TypeScriptAdmonition"}),(0,r.kt)("p",null,"Two methods are provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," for validating queries: query-level validation and field-based validation."),(0,r.kt)("h2",{id:"query-level-validation"},"Query-level validation"),(0,r.kt)("p",null,"Validating at the query level can result in the entire query being treated as valid or invalid, or you can report validation results for specific rules/groups within the query based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,r.kt)("p",null,"To mark an entire query as valid or invalid, return a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," callback function (",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for valid, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for invalid)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilder, RuleGroupType } from 'react-querybuilder';\n\n/**\n * This function returns false (indicating \"invalid\") if there are no rules present.\n */\nconst validator = (q: RuleGroupType) => q.rules.length > 0;\n\nconst App = () => {\n  return <QueryBuilder validator={validator} />;\n};\n")),(0,r.kt)("p",null,"The alternate return value from a query-level validator is a validation map, which is an object where each key represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of a rule or group. Associated values are either ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," (",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for valid, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for invalid) or a validation result. Validation results are objects with two keys: a required ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,r.kt)("inlineCode",{parentName:"p"},"valid")," key and an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"reasons")," array specifying why that rule/group is valid or invalid. (Reasons are assumed to be strings, but the type is ",(0,r.kt)("inlineCode",{parentName:"p"},"any[]")," since the QueryBuilder default components ignore them. Feel free to use them any way you please in your custom components.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilder, RuleGroupType, ValidationMap } from 'react-querybuilder';\n\n/**\n * This function returns a validation map. A real validator function would\n * have some logic to determine which rules are valid/invalid and why, but\n * this function is simple for brevity.\n */\nconst validator: QueryValidator = (q): ValidationMap => ({\n  r1: true, // valid rule\n  r2: false, // invalid rule\n  r3: { valid: true, reasons: ['awesome rule'] }, // valid rule\n  r4: { valid: false, reasons: ['lame rule'] }, // invalid rule\n});\n\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { id: 'r1', field: 'field1', operator: '=', value: 'Value 1' },\n    { id: 'r2', field: 'field2', operator: '=', value: 'Value 2' },\n    { id: 'r3', field: 'field3', operator: '=', value: 'Value 3' },\n    { id: 'r4', field: 'field4', operator: '=', value: 'Value 4' },\n  ],\n};\n\nconst App = () => {\n  return <QueryBuilder query={query} validator={validator} />;\n};\n")),(0,r.kt)("h2",{id:"field-based-validation"},"Field-based validation"),(0,r.kt)("p",null,"Assigning a ",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," to individual fields allows you to provide a separate callback function depending on the field's value type or other attributes."),(0,r.kt)("p",null,"In the following configuration, any rule that specifies ",(0,r.kt)("inlineCode",{parentName:"p"},"field2")," as the field (e.g. the second rule) will be marked invalid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  Field,\n  QueryBuilder,\n  RuleGroupType,\n  RuleValidator,\n  ValidationResult,\n} from 'react-querybuilder';\n\n/**\n * This function returns a validation result.\n */\nconst validator: RuleValidator = (q): ValidationResult => ({\n  valid: false,\n  reasons: ['this field is always invalid'],\n});\n\nconst fields: Field[] = [\n  { name: 'field1', label: 'Field 1' },\n  { name: 'field2', label: 'Field 2', validator },\n  { name: 'field3', label: 'Field 3' },\n  { name: 'field4', label: 'Field 4' },\n];\n\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'field1', operator: '=', value: 'Value 1' },\n    { field: 'field2', operator: '=', value: 'Value 2' },\n    { field: 'field3', operator: '=', value: 'Value 3' },\n    { field: 'field4', operator: '=', value: 'Value 4' },\n  ],\n};\n\nconst App = () => {\n  return <QueryBuilder query={query} fields={fields} />;\n};\n")),(0,r.kt)("h2",{id:"effect-on-html"},"Effect on HTML"),(0,r.kt)("p",null,"If you provide a query- or field-level validator function then the wrapper ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," for each evaluated query object (rule, group, or the entire query) will be assigned one of two classes: ",(0,r.kt)("inlineCode",{parentName:"p"},"queryBuilder-valid")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"queryBuilder-invalid"),". You can use these classes to style the elements with CSS."),(0,r.kt)("admonition",{title:"See it in action",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In the ",(0,r.kt)(i.L,{option:"validateQuery",text:"demo",mdxType:"DemoLink"}),', check the "Use validation" option and create an empty group or a text input without a value. Empty groups will show a message where the rules usually appear (using the ',(0,r.kt)("inlineCode",{parentName:"p"},":after")," pseudo-selector), and text fields without values will have a ",(0,r.kt)("a",{parentName:"p",href:"https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/"},"purple")," background.")),(0,r.kt)("h2",{id:"effect-on-exports"},"Effect on exports"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./export#validation"},"validation section on the Export page")," for more information."),(0,r.kt)("h2",{id:"default-validator"},"Default validator"),(0,r.kt)("p",null,"You can pass the provided ",(0,r.kt)("a",{parentName:"p",href:"./misc#defaultvalidator"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultValidator"))," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," prop to check for invalid combinators, empty groups, or (if ",(0,r.kt)("inlineCode",{parentName:"p"},"independentCombinators")," is true) out-of-sequence ",(0,r.kt)("inlineCode",{parentName:"p"},"rules")," arrays. The ",(0,r.kt)("a",{parentName:"p",href:"/demo"},"demo")," uses the default validator."))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,v=c["".concat(d,".").concat(f)]||c[f]||s[f]||i;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);