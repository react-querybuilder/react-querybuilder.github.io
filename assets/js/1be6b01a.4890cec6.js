"use strict";(self.webpackChunkreact_querybuilder_github_io=self.webpackChunkreact_querybuilder_github_io||[]).push([[377],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return y}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),y=a,f=c["".concat(u,".").concat(y)]||c[y]||d[y]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7760:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"TypeScript"},u=void 0,p={unversionedId:"typescript",id:"typescript",isDocsHomePage:!1,title:"TypeScript",description:"These are some of the TypeScript types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the react-querybuilder library, click here.",source:"@site/docs/typescript.md",sourceDirName:".",slug:"/typescript",permalink:"/docs/typescript",editUrl:"https://github.com/react-querybuilder/react-querybuilder.github.io/edit/main/docs/typescript.md",tags:[],version:"current",frontMatter:{title:"TypeScript"},sidebar:"mySidebar",previous:{title:"Common mistakes",permalink:"/docs/tips/common-mistakes"}},s=[{value:"Fields",id:"fields",children:[],level:2},{value:"Rules and groups",id:"rules-and-groups",children:[],level:2},{value:"Export",id:"export",children:[],level:2},{value:"Import",id:"import",children:[],level:2},{value:"Validation",id:"validation",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],d={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These are some of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," library, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/blob/master/src/types.ts"},"click here"),"."),(0,o.kt)("h2",{id:"fields"},"Fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Field {\n  id?: string; // The field identifier (if not provided, then `name` will be used)\n  name: string; // REQUIRED - the field name\n  label: string; // REQUIRED - the field label\n  operators?: NameLabelPair[]; // Array of operators (if not provided, then `getOperators()` will be used)\n  valueEditorType?: ValueEditorType; // Value editor type for this field (if not provided, then `getValueEditorType()` will be used)\n  inputType?: string | null; // Input type for text box inputs, e.g. 'text', 'number', or 'date' (if not provided, then `getInputType()` will be used)\n  values?: NameLabelPair[]; // Array of values, applicable when valueEditorType is 'select' or 'radio' (if not provided, then `getValues()` will be used)\n  defaultOperator?: string; // Default operator for this field (if not provided, then `getDefaultOperator()` will be used)\n  defaultValue?: any; // Default value for this field (if not provided, then `getDefaultValue()` will be used)\n  placeholder?: string; // Value to be displayed in the placeholder of the text field\n  validator?: RuleValidator; // Called when a rule specifies this field\n}\n")),(0,o.kt)("h2",{id:"rules-and-groups"},"Rules and groups"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface RuleType {\n  path?: number[];\n  id?: string;\n  field: string;\n  operator: string;\n  value: any;\n}\n\ninterface RuleGroupType {\n  path?: number[];\n  id?: string;\n  combinator: string;\n  rules: (RuleType | RuleGroupType)[];\n  not?: boolean;\n}\n\ninterface RuleGroupTypeIC {\n  path?: number[];\n  id?: string;\n  rules: (RuleType | RuleGroupTypeIC | string)[];\n  not?: boolean;\n}\n\ntype RuleGroupTypeAny = RuleGroupType | RuleGroupTypeIC;\n\ntype RuleOrGroupArray =\n  | (RuleType | RuleGroupType)[]\n  | (RuleType | RuleGroupTypeIC | string)[];\n\ninterface Schema {\n  fields: Field[];\n  fieldMap: { [k: string]: Field };\n  classNames: Classnames;\n  combinators: NameLabelPair[];\n  controls: Controls;\n  createRule(): RuleType;\n  createRuleGroup(): RuleGroupTypeAny;\n  getOperators(field: string): NameLabelPair[];\n  getValueEditorType(field: string, operator: string): ValueEditorType;\n  getInputType(field: string, operator: string): string | null;\n  getValues(field: string, operator: string): NameLabelPair[];\n  isRuleGroup(ruleOrGroup: RuleType | RuleGroupTypeAny): ruleOrGroup is RuleGroupTypeAny;\n  onGroupAdd(group: RuleGroupTypeAny, parentPath: number[]): void;\n  onGroupRemove(path: number[]): void;\n  onPropChange(\n    prop: Exclude<keyof RuleType | keyof RuleGroupType, 'id' | 'path'>,\n    value: any,\n    path: number[]\n  ): void;\n  onRuleAdd(rule: RuleType, parentPath: number[]): void;\n  onRuleRemove(path: number[]): void;\n  updateInlineCombinator(value: string, path: number[]): void;\n  showCombinatorsBetweenRules: boolean;\n  showNotToggle: boolean;\n  showCloneButtons: boolean;\n  autoSelectField: boolean;\n  addRuleToNewGroups: boolean;\n  validationMap: ValidationMap;\n  inlineCombinators: boolean;\n}\n")),(0,o.kt)("h2",{id:"export"},"Export"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type ExportFormat =\n  | 'json'\n  | 'sql'\n  | 'json_without_ids'\n  | 'parameterized'\n  | 'parameterized_named'\n  | 'mongodb';\n\ntype ValueProcessor = (field: string, operator: string, value: any) => string;\n\ninterface FormatQueryOptions {\n  format?: ExportFormat;\n  valueProcessor?: ValueProcessor;\n  quoteFieldNamesWith?: string;\n  validator?: QueryValidator;\n  fields?: { name: string; validator?: RuleValidator; [k: string]: any }[];\n  fallbackExpression?: string;\n  paramPrefix?: string;\n}\n\ninterface ParameterizedSQL {\n  sql: string;\n  params: any[];\n}\n\ninterface ParameterizedNamedSQL {\n  sql: string;\n  params: { [p: string]: any };\n}\n")),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface ParseSQLOptions {\n  inlineCombinators?: boolean;\n  paramPrefix?: string;\n  params?: any[] | { [p: string]: any };\n}\n")),(0,o.kt)("h2",{id:"validation"},"Validation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface ValidationResult {\n  valid: boolean;\n  reasons?: any[];\n}\n\ninterface ValidationMap {\n  [id: string]: boolean | ValidationResult;\n}\n\ntype QueryValidator = (query: RuleGroupTypeAny) => boolean | ValidationMap;\n\ntype RuleValidator = (rule: RuleType) => boolean | ValidationResult;\n")),(0,o.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface NameLabelPair {\n  name: string;\n  label: string;\n  [x: string]: any;\n}\n\ntype ValueEditorType = 'text' | 'select' | 'checkbox' | 'radio' | null;\n")))}c.isMDXComponent=!0}}]);