"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9204],{95731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(52685),a=(t(27378),t(35318));const i={title:"TypeScript reference"},o=void 0,l={unversionedId:"typescript",id:"version-4/typescript",title:"TypeScript reference",description:"These are some of the TypeScript types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the react-querybuilder library, click here.",source:"@site/versioned_docs/version-4/typescript.mdx",sourceDirName:".",slug:"/typescript",permalink:"/docs/4/typescript",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/typescript.mdx",tags:[],version:"4",frontMatter:{title:"TypeScript reference"},sidebar:"mySidebar",previous:{title:"Compatibility packages",permalink:"/docs/4/compat"},next:{title:"UMD build",permalink:"/docs/4/umd"}},p={},u=[{value:"Fields",id:"fields",level:2},{value:"Rules and groups",id:"rules-and-groups",level:2},{value:"Export",id:"export",level:2},{value:"Import",id:"import",level:2},{value:"Validation",id:"validation",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],s={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are some of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," library, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/packages/ts/src"},"click here"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The minimum TypeScript version for this library is 4.1, but if you use TypeScript 4.5 or greater then the type ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC")," (the type used for the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," prop when ",(0,a.kt)("inlineCode",{parentName:"p"},"independentCombinators")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),") will be more accurate and helpful. See the note in the ",(0,a.kt)("a",{parentName:"p",href:"#rules-and-groups"},"Rules and groups")," section below.")),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Field {\n  id?: string; // The field identifier (if not provided, then `name` will be used)\n  name: string; // REQUIRED - the field name\n  label: string; // REQUIRED - the field label\n  operators?: NameLabelPair[] | OptionGroup[]; // Array of operators (if not provided, then `getOperators()` will be used)\n  valueEditorType?: ValueEditorType; // Value editor type for this field (if not provided, then `getValueEditorType()` will be used)\n  inputType?: string | null; // Input type for text box inputs, e.g. 'text', 'number', or 'date' (if not provided, then `getInputType()` will be used)\n  values?: NameLabelPair[]; // Array of values, applicable when valueEditorType is 'select' or 'radio' (if not provided, then `getValues()` will be used)\n  defaultOperator?: string; // Default operator for this field (if not provided, then `getDefaultOperator()` will be used)\n  defaultValue?: any; // Default value for this field (if not provided, then `getDefaultValue()` will be used)\n  placeholder?: string; // Value to be displayed in the placeholder of the text field\n  validator?: RuleValidator; // Called when a rule specifies this field\n  valueSources?: ValueSources | ((operator: string) => ValueSources); // List of allowed value sources (must contain \"value\", \"field\", or both)\n  comparator?: string | ((f: Field, operator: string) => boolean); // Determines which (other) fields to include in the list when valueSource is \"field\"\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./api/valueeditor"},"Click here")," for documentation on the available options for ",(0,a.kt)("inlineCode",{parentName:"p"},"valueEditorType"),"."),(0,a.kt)("h2",{id:"rules-and-groups"},"Rules and groups"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type RuleType = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  field: string;\n  operator: string;\n  value: any;\n  valueSource?: ValueSource;\n};\n\ntype RuleGroupType = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  combinator: string;\n  rules: (RuleType | RuleGroupType)[];\n  not?: boolean;\n};\n\ntype RuleGroupTypeIC = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  rules: (RuleType | RuleGroupTypeIC | string)[]; // see note below\n  not?: boolean;\n};\n\ntype RuleGroupTypeAny = RuleGroupType | RuleGroupTypeIC;\n\ntype RuleOrGroupArray = RuleGroupType['rules'] | RuleGroupTypeIC['rules'];\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC")," is greatly simplified here for brevity. In reality, the following conditions will be enforced by TypeScript:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"All even indexes in the ",(0,a.kt)("inlineCode",{parentName:"li"},"rules")," array must be of type ",(0,a.kt)("inlineCode",{parentName:"li"},"RuleType")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"RuleGroupTypeIC")),(0,a.kt)("li",{parentName:"ul"},"All odd indexes in the ",(0,a.kt)("inlineCode",{parentName:"li"},"rules")," array must be of type ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"The first and last elements of the ",(0,a.kt)("inlineCode",{parentName:"li"},"rules")," array must be of type ",(0,a.kt)("inlineCode",{parentName:"li"},"RuleType")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"RuleGroupTypeIC")," (therefore the array length, unless it is zero, must be an odd number)")),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"That is, unless you're using a TypeScript version lower than 4.5, in which case what you see above is the actual type definition. I.e., the ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," array can be of any length, with elements of ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleType"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," in any order, and TypeScript will not complain. However, invalid query objects can lead to unexpected behavior from the ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component, so TypeScript 4.5 or greater is strongly recommended if the ",(0,a.kt)("a",{parentName:"p",href:"./api/querybuilder#independentcombinators"},(0,a.kt)("inlineCode",{parentName:"a"},"independentCombinators"))," option will be used. In any case, make sure query objects meet the conditions listed above.")),(0,a.kt)("p",{parentName:"admonition"},"For example, the following would be invalid because the first element in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," array (the ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"th index, which should be ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleType | RuleGroupTypeIC"),") is a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", and the second element (the ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"st index, which should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") is a ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleType"),". Also, the length (2) is an even number."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const ruleGroupInvalid: RuleGroupTypeIC = {\n  rules: ['and', { field: 'firstName', operator: '=', value: 'Steve' }],\n};\n")),(0,a.kt)("p",{parentName:"admonition"},"Either removing the first element or inserting another rule before it will resolve the issue:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const ruleGroupValid1: RuleGroupTypeIC = {\n  rules: [{ field: 'firstName', operator: '=', value: 'Steve' }],\n};\n\n// OR\n\nconst ruleGroupValid2: RuleGroupTypeIC = {\n  rules: [\n    { field: 'lastName', operator: '=', value: 'Vai' },\n    'and',\n    { field: 'firstName', operator: '=', value: 'Steve' },\n  ],\n};\n"))),(0,a.kt)("h2",{id:"export"},"Export"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type ExportFormat =\n  | 'json'\n  | 'sql'\n  | 'json_without_ids'\n  | 'parameterized'\n  | 'parameterized_named'\n  | 'mongodb'\n  | 'cel';\n\ntype ValueProcessor = (field: string, operator: string, value: any) => string;\n\ninterface FormatQueryOptions {\n  format?: ExportFormat;\n  valueProcessor?: ValueProcessor;\n  quoteFieldNamesWith?: string;\n  validator?: QueryValidator;\n  fields?: { name: string; validator?: RuleValidator; [k: string]: any }[];\n  fallbackExpression?: string;\n  paramPrefix?: string;\n  parseNumbers?: boolean;\n  placeholderFieldName?: string;\n  placeholderOperatorName?: string;\n}\n\ninterface ParameterizedSQL {\n  sql: string;\n  params: any[];\n}\n\ninterface ParameterizedNamedSQL {\n  sql: string;\n  params: { [p: string]: any };\n}\n")),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ParseSQLOptions {\n  independentCombinators?: boolean;\n  paramPrefix?: string;\n  params?: any[] | { [p: string]: any };\n  listsAsArrays?: boolean;\n  fields?: Field[] | OptionGroup<Field>[] | Record<string, Field>;\n  getValueSources?: (field: string, operator: string) => ValueSources;\n}\n")),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ValidationResult {\n  valid: boolean;\n  reasons?: any[];\n}\n\ninterface ValidationMap {\n  [id: string]: boolean | ValidationResult;\n}\n\ntype QueryValidator = (query: RuleGroupTypeAny) => boolean | ValidationMap;\n\ntype RuleValidator = (rule: RuleType) => boolean | ValidationResult;\n")),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface NameLabelPair {\n  name: string;\n  label: string;\n  [x: string]: any;\n}\n\ninterface OptionGroup {\n  label: string;\n  options: NameLabelPair[];\n}\n\ntype ValueEditorType =\n  | 'text'\n  | 'select'\n  | 'checkbox'\n  | 'radio'\n  | 'textarea'\n  | 'multiselect'\n  | 'date'\n  | 'datetime-local'\n  | 'time'\n  | null;\n\ntype ValueSource = 'value' | 'field';\n\ntype ValueSources = ['value'] | ['value', 'field'] | ['field', 'value'] | ['field'];\n\ninterface Schema {\n  fields: Field[] | OptionGroup<NameLabelPair>[];\n  fieldMap: { [k: string]: Field };\n  classNames: Classnames;\n  combinators: NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  controls: Controls;\n  createRule(): RuleType;\n  createRuleGroup(): RuleGroupTypeAny;\n  getOperators(field: string): NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  getValueEditorType(field: string, operator: string): ValueEditorType;\n  getInputType(field: string, operator: string): string | null;\n  getValues(field: string, operator: string): NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  isRuleGroup(ruleOrGroup: RuleType | RuleGroupTypeAny): ruleOrGroup is RuleGroupTypeAny;\n  onGroupAdd(group: RuleGroupTypeAny, parentPath: number[]): void;\n  onGroupRemove(path: number[]): void;\n  onPropChange(\n    prop: Exclude<keyof RuleType | keyof RuleGroupType, 'id' | 'path'>,\n    value: any,\n    path: number[]\n  ): void;\n  onRuleAdd(rule: RuleType, parentPath: number[]): void;\n  onRuleRemove(path: number[]): void;\n  updateIndependentCombinator(value: string, path: number[]): void;\n  showCombinatorsBetweenRules: boolean;\n  showNotToggle: boolean;\n  showCloneButtons: boolean;\n  autoSelectField: boolean;\n  placeholderFieldName: string;\n  autoSelectOperator: boolean;\n  placeholderOperatorName: string;\n  addRuleToNewGroups: boolean;\n  enableDragAndDrop: boolean;\n  validationMap: ValidationMap;\n  independentCombinators: boolean;\n  disabledPaths: number[][];\n}\n")))}m.isMDXComponent=!0},35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,y=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);