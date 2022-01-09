"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[18],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,m=c["".concat(d,".").concat(f)]||c[f]||s[f]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9769:function(e,t,n){n.d(t,{ZP:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"../typescript"},"TypeScript")," page for information about the types and interfaces referenced below."))))}d.isMDXComponent=!0},1839:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9769),l=["components"],d={title:"Validation",description:"Query validation methods and configuration"},u=void 0,p={unversionedId:"api/validation",id:"api/validation",title:"Validation",description:"Query validation methods and configuration",source:"@site/docs/api/validation.mdx",sourceDirName:"api",slug:"/api/validation",permalink:"/docs/api/validation",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/api/validation.mdx",tags:[],version:"current",frontMatter:{title:"Validation",description:"Query validation methods and configuration"},sidebar:"mySidebar",previous:{title:"Import",permalink:"/docs/api/import"},next:{title:"Miscellaneous",permalink:"/docs/api/misc"}},s=[{value:"Query-level validation",id:"query-level-validation",children:[],level:2},{value:"Field-based validation",id:"field-based-validation",children:[],level:2},{value:"Effect on HTML",id:"effect-on-html",children:[],level:2},{value:"Effect on exports",id:"effect-on-exports",children:[],level:2},{value:"Default validator",id:"default-validator",children:[],level:2}],c={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.ZP,{mdxType:"TypeScriptAdmonition"}),(0,i.kt)("p",null,"Two methods are provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," for validating queries: query-level validation and field-based validation."),(0,i.kt)("h2",{id:"query-level-validation"},"Query-level validation"),(0,i.kt)("p",null,"Validating at the query level can result in the entire query being treated as valid or invalid, or you can report validation results for specific rules/groups within the query based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,i.kt)("p",null,"To mark an entire query as valid or invalid, return a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," value from the ",(0,i.kt)("inlineCode",{parentName:"p"},"validator")," callback function (",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for valid, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for invalid)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import QueryBuilder, { RuleGroupType } from 'react-querybuilder';\n\n/**\n * This function returns false (indicating \"invalid\") if there are no rules present.\n */\nconst validator = (q: RuleGroupType) => q.rules.length > 0;\n\nconst App = () => {\n  return <QueryBuilder validator={validator} />;\n};\n")),(0,i.kt)("p",null,"The alternate return value from a query-level validator is a validation map, which is an object where each key represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of a rule or group. Associated values are either ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," (",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for valid, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for invalid) or a validation result. Validation results are objects with two keys: a required ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,i.kt)("inlineCode",{parentName:"p"},"valid")," key and an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"reasons")," array specifying why that rule/group is valid or invalid. (Reasons are assumed to be strings, but the type is ",(0,i.kt)("inlineCode",{parentName:"p"},"any[]")," since the QueryBuilder default components ignore them. Feel free to use them any way you please in your custom components.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import QueryBuilder, { RuleGroupType, ValidationMap } from 'react-querybuilder';\n\n/**\n * This function returns a validation map. A real validator function would\n * have some logic to determine which rules are valid/invalid and why, but\n * this function is simple for brevity.\n */\nconst validator: QueryValidator = (q): ValidationMap => ({\n  r1: true, // valid rule\n  r2: false, // invalid rule\n  r3: { valid: true, reasons: ['awesome rule'] }, // valid rule\n  r4: { valid: false, reasons: ['lame rule'] }, // invalid rule\n});\n\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { id: 'r1', field: 'field1', operator: '=', value: 'Value 1' },\n    { id: 'r2', field: 'field2', operator: '=', value: 'Value 2' },\n    { id: 'r3', field: 'field3', operator: '=', value: 'Value 3' },\n    { id: 'r4', field: 'field4', operator: '=', value: 'Value 4' },\n  ],\n};\n\nconst App = () => {\n  return <QueryBuilder query={query} validator={validator} />;\n};\n")),(0,i.kt)("h2",{id:"field-based-validation"},"Field-based validation"),(0,i.kt)("p",null,"Assigning a ",(0,i.kt)("inlineCode",{parentName:"p"},"validator")," to individual fields allows you to provide a separate callback function depending on the field's value type or other attributes."),(0,i.kt)("p",null,"In the following configuration, any rule that specifies ",(0,i.kt)("inlineCode",{parentName:"p"},"field1")," as the field (e.g. the second rule) will be marked invalid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import QueryBuilder, {\n  Field,\n  RuleGroupType,\n  RuleValidator,\n  ValidationResult,\n} from 'react-querybuilder';\n\n/**\n * This function returns a validation result.\n */\nconst validator: RuleValidator = (q): ValidationResult => ({\n  valid: false,\n  reasons: ['this field is always invalid'],\n});\n\nconst fields: Field[] = [\n  { name: 'field1', label: 'Field 1' },\n  { name: 'field2', label: 'Field 2', validator },\n  { name: 'field3', label: 'Field 3' },\n  { name: 'field4', label: 'Field 4' },\n];\n\nconst query: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'field1', operator: '=', value: 'Value 1' },\n    { field: 'field2', operator: '=', value: 'Value 2' },\n    { field: 'field3', operator: '=', value: 'Value 3' },\n    { field: 'field4', operator: '=', value: 'Value 4' },\n  ],\n};\n\nconst App = () => {\n  return <QueryBuilder query={query} fields={fields} />;\n};\n")),(0,i.kt)("h2",{id:"effect-on-html"},"Effect on HTML"),(0,i.kt)("p",null,"If you provide a query- or field-level validator function then the wrapper ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," for each evaluated query object (rule, group, or the entire query) will be assigned one of two classes: ",(0,i.kt)("inlineCode",{parentName:"p"},"queryBuilder-valid")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"queryBuilder-invalid"),". You can use these classes to style the elements with CSS."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"See it in action")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the ",(0,i.kt)("a",{parentName:"p",href:"https://react-querybuilder.github.io/react-querybuilder/"},"demo"),', check the "Use validation" option and create an empty group or a text input without a value. Empty groups will show a message where the rules usually appear (using the ',(0,i.kt)("inlineCode",{parentName:"p"},":after")," pseudo-selector), and text fields without values will have a ",(0,i.kt)("a",{parentName:"p",href:"https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/"},"purple")," outline."))),(0,i.kt)("h2",{id:"effect-on-exports"},"Effect on exports"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"./export#validation"},"validation section on the Export page")," for more information."),(0,i.kt)("h2",{id:"default-validator"},"Default validator"),(0,i.kt)("p",null,"You can pass the provided ",(0,i.kt)("a",{parentName:"p",href:"./misc#defaultvalidator"},(0,i.kt)("inlineCode",{parentName:"a"},"defaultValidator"))," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"validator")," prop to check for invalid combinators, empty groups, or (if ",(0,i.kt)("inlineCode",{parentName:"p"},"independentCombinators")," is true) out-of-sequence ",(0,i.kt)("inlineCode",{parentName:"p"},"rules")," arrays. The ",(0,i.kt)("a",{parentName:"p",href:"https://react-querybuilder.github.io/react-querybuilder/"},"demo")," uses the default validator."))}f.isMDXComponent=!0}}]);