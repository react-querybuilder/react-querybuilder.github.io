"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[83],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2717:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"TypeScript reference"},p=void 0,u={unversionedId:"typescript",id:"typescript",title:"TypeScript reference",description:"These are some of the TypeScript types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the react-querybuilder library, click here.",source:"@site/docs/typescript.mdx",sourceDirName:".",slug:"/typescript",permalink:"/docs/typescript",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/typescript.mdx",tags:[],version:"current",frontMatter:{title:"TypeScript reference"},sidebar:"mySidebar",previous:{title:"Compatibility packages",permalink:"/docs/compat"}},s=[{value:"Fields",id:"fields",children:[],level:2},{value:"Rules and groups",id:"rules-and-groups",children:[],level:2},{value:"Export",id:"export",children:[],level:2},{value:"Import",id:"import",children:[],level:2},{value:"Validation",id:"validation",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],d={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These are some of the ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," library, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/tree/master/packages/react-querybuilder/src/types"},"click here"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The minimum TypeScript version for this library is 4.1, but if you use TypeScript 4.5 or greater then the type ",(0,i.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC")," (used when ",(0,i.kt)("inlineCode",{parentName:"p"},"independentCombinators")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),") will be more accurate and helpful. Specifically, the ",(0,i.kt)("inlineCode",{parentName:"p"},"rules")," property will 1) only allow zero- or odd-length arrays, 2) require all even indexes to be ",(0,i.kt)("inlineCode",{parentName:"p"},"RuleType")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),", and 3) require all odd indexes to be ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("p",{parentName:"div"},"Using TypeScript >=4.1 and <4.5 allows the ",(0,i.kt)("inlineCode",{parentName:"p"},"rules")," property to be an array of any length, with elements of ",(0,i.kt)("inlineCode",{parentName:"p"},"RuleType"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," in any order. This can lead to invalid queries and unexpected behavior from the ",(0,i.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component."))),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Field {\n  id?: string; // The field identifier (if not provided, then `name` will be used)\n  name: string; // REQUIRED - the field name\n  label: string; // REQUIRED - the field label\n  operators?: NameLabelPair[]; // Array of operators (if not provided, then `getOperators()` will be used)\n  valueEditorType?: ValueEditorType; // Value editor type for this field (if not provided, then `getValueEditorType()` will be used)\n  inputType?: string | null; // Input type for text box inputs, e.g. 'text', 'number', or 'date' (if not provided, then `getInputType()` will be used)\n  values?: NameLabelPair[]; // Array of values, applicable when valueEditorType is 'select' or 'radio' (if not provided, then `getValues()` will be used)\n  defaultOperator?: string; // Default operator for this field (if not provided, then `getDefaultOperator()` will be used)\n  defaultValue?: any; // Default value for this field (if not provided, then `getDefaultValue()` will be used)\n  placeholder?: string; // Value to be displayed in the placeholder of the text field\n  validator?: RuleValidator; // Called when a rule specifies this field\n}\n")),(0,i.kt)("h2",{id:"rules-and-groups"},"Rules and groups"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type RuleType = {\n  path?: number[];\n  id?: string;\n  field: string;\n  operator: string;\n  value: any;\n};\n\ntype RuleGroupType = {\n  path?: number[];\n  id?: string;\n  combinator: string;\n  rules: (RuleType | RuleGroupType)[];\n  not?: boolean;\n};\n\ntype RuleGroupTypeIC = {\n  path?: number[];\n  id?: string;\n  rules: (RuleType | RuleGroupTypeIC | string)[]; // see note below\n  not?: boolean;\n};\n\ntype RuleGroupTypeAny = RuleGroupType | RuleGroupTypeIC;\n\ntype RuleOrGroupArray = RuleGroupType['rules'] | RuleGroupTypeIC['rules'];\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC")," is greatly simplified here for brevity. In reality:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Only even-numbered indexes in the ",(0,i.kt)("inlineCode",{parentName:"li"},"rules")," array can be ",(0,i.kt)("inlineCode",{parentName:"li"},"RuleType | RuleGroupTypeIC")),(0,i.kt)("li",{parentName:"ul"},"Only odd-numbered indexes can be ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"rules")," array length must be odd or zero")),(0,i.kt)("p",{parentName:"div"},"For example, the following would be invalid because the first element (the ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"th index, which should be ",(0,i.kt)("inlineCode",{parentName:"p"},"RuleType | RuleGroupTypeIC"),") is a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and the second element (the ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"st index, which should be a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") is a ",(0,i.kt)("inlineCode",{parentName:"p"},"RuleType"),". Also the length (2) is even."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const ruleGroup: RuleGroupTypeIC = {\n  rules: ['and', { field: 'firstName', operator: '=', value: 'Steve' }],\n};\n")),(0,i.kt)("p",{parentName:"div"},"Either removing the first element or inserting another rule before it will resolve the issue:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const ruleGroupFixed1: RuleGroupTypeIC = {\n  rules: [{ field: 'firstName', operator: '=', value: 'Steve' }],\n};\n")),(0,i.kt)("p",{parentName:"div"},"or"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const ruleGroupFixed2: RuleGroupTypeIC = {\n  rules: [\n    { field: 'lastName', operator: '=', value: 'Vai' },\n    'and',\n    { field: 'firstName', operator: '=', value: 'Steve' },\n  ],\n};\n")))),(0,i.kt)("h2",{id:"export"},"Export"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type ExportFormat =\n  | 'json'\n  | 'sql'\n  | 'json_without_ids'\n  | 'parameterized'\n  | 'parameterized_named'\n  | 'mongodb';\n\ntype ValueProcessor = (field: string, operator: string, value: any) => string;\n\ninterface FormatQueryOptions {\n  format?: ExportFormat;\n  valueProcessor?: ValueProcessor;\n  quoteFieldNamesWith?: string;\n  validator?: QueryValidator;\n  fields?: { name: string; validator?: RuleValidator; [k: string]: any }[];\n  fallbackExpression?: string;\n  paramPrefix?: string;\n}\n\ninterface ParameterizedSQL {\n  sql: string;\n  params: any[];\n}\n\ninterface ParameterizedNamedSQL {\n  sql: string;\n  params: { [p: string]: any };\n}\n")),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface ParseSQLOptions {\n  independentCombinators?: boolean;\n  paramPrefix?: string;\n  params?: any[] | { [p: string]: any };\n  listsAsArrays?: boolean;\n}\n")),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface ValidationResult {\n  valid: boolean;\n  reasons?: any[];\n}\n\ninterface ValidationMap {\n  [id: string]: boolean | ValidationResult;\n}\n\ntype QueryValidator = (query: RuleGroupTypeAny) => boolean | ValidationMap;\n\ntype RuleValidator = (rule: RuleType) => boolean | ValidationResult;\n")),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface NameLabelPair {\n  name: string;\n  label: string;\n  [x: string]: any;\n}\n\ninterface OptionGroup {\n  label: string;\n  options: NameLabelPair[];\n}\n\ntype ValueEditorType = 'text' | 'select' | 'checkbox' | 'radio' | null;\n\ninterface Schema {\n  fields: Field[] | OptionGroup<NameLabelPair>[];\n  fieldMap: { [k: string]: Field };\n  classNames: Classnames;\n  combinators: NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  controls: Controls;\n  createRule(): RuleType;\n  createRuleGroup(): RuleGroupTypeAny;\n  getOperators(field: string): NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  getValueEditorType(field: string, operator: string): ValueEditorType;\n  getInputType(field: string, operator: string): string | null;\n  getValues(field: string, operator: string): NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  isRuleGroup(ruleOrGroup: RuleType | RuleGroupTypeAny): ruleOrGroup is RuleGroupTypeAny;\n  onGroupAdd(group: RuleGroupTypeAny, parentPath: number[]): void;\n  onGroupRemove(path: number[]): void;\n  onPropChange(\n    prop: Exclude<keyof RuleType | keyof RuleGroupType, 'id' | 'path'>,\n    value: any,\n    path: number[]\n  ): void;\n  onRuleAdd(rule: RuleType, parentPath: number[]): void;\n  onRuleRemove(path: number[]): void;\n  updateIndependentCombinator(value: string, path: number[]): void;\n  showCombinatorsBetweenRules: boolean;\n  showNotToggle: boolean;\n  showCloneButtons: boolean;\n  autoSelectField: boolean;\n  addRuleToNewGroups: boolean;\n  enableDragAndDrop: boolean;\n  validationMap: ValidationMap;\n  independentCombinators: boolean;\n  disabledPaths: number[][];\n}\n")))}c.isMDXComponent=!0}}]);