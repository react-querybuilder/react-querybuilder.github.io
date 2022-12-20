"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9083],{2274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(83117),a=(t(67294),t(3905));const o={title:"TypeScript reference"},i=void 0,l={unversionedId:"typescript",id:"typescript",title:"TypeScript reference",description:"These are some of the TypeScript types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the react-querybuilder library, click here.",source:"@site/docs/typescript.mdx",sourceDirName:".",slug:"/typescript",permalink:"/docs/next/typescript",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/typescript.mdx",tags:[],version:"current",frontMatter:{title:"TypeScript reference"},sidebar:"mySidebar",previous:{title:"Compatibility packages",permalink:"/docs/next/compat"},next:{title:"UMD build",permalink:"/docs/next/umd"}},p={},s=[{value:"Fields",id:"fields",level:2},{value:"Rules and groups",id:"rules-and-groups",level:2},{value:"Export",id:"export",level:2},{value:"Import",id:"import",level:2},{value:"Validation",id:"validation",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are some of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," library, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/packages/ts/src"},"click here"),"."),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Field {\n  id?: string; // The field identifier (if not provided, then `name` will be used)\n  name: string; // REQUIRED - the field name\n  label: string; // REQUIRED - the field label\n  operators?: Operator[] | OptionGroup<Operator>[]; // Array of operators (if not provided, then `getOperators()` will be used)\n  valueEditorType?: ValueEditorType; // Value editor type for this field (if not provided, then `getValueEditorType()` will be used)\n  inputType?: string | null; // Input type for text box inputs, e.g. 'text', 'number', or 'date' (if not provided, then `getInputType()` will be used)\n  values?: OptionList; // Array of value options, applicable when valueEditorType is 'select' or 'radio' (if not provided, then `getValues()` will be used)\n  defaultOperator?: string; // Default operator for this field (if not provided, then `getDefaultOperator()` will be used)\n  defaultValue?: any; // Default value for this field (if not provided, then `getDefaultValue()` will be used)\n  placeholder?: string; // Value to be displayed in the placeholder of the text field\n  validator?: RuleValidator; // Called when a rule specifies this field\n  valueSources?: ValueSources | ((operator: string) => ValueSources); // List of allowed value sources (must contain \"value\", \"field\", or both)\n  comparator?: string | ((f: Field, operator: string) => boolean); // Determines which (other) fields to include in the list when valueSource is \"field\"\n  className?: Classname; // Assigned to rules where this field is selected\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./api/valueeditor"},"Click here")," for documentation on the available options for ",(0,a.kt)("inlineCode",{parentName:"p"},"valueEditorType"),"."),(0,a.kt)("h2",{id:"rules-and-groups"},"Rules and groups"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type RuleType = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  field: string;\n  operator: string;\n  value: any;\n  valueSource?: ValueSource;\n};\n\ntype RuleGroupType = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  combinator: string;\n  rules: (RuleType | RuleGroupType)[];\n  not?: boolean;\n};\n\ntype RuleGroupTypeIC = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  rules: (RuleType | RuleGroupTypeIC | string)[]; // see note below\n  not?: boolean;\n};\n\ntype RuleGroupTypeAny = RuleGroupType | RuleGroupTypeIC;\n\ntype RuleOrGroupArray = RuleGroupType['rules'] | RuleGroupTypeIC['rules'];\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC")," is greatly simplified here for brevity. In reality, the following conditions will be enforced by TypeScript:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"All even indexes in the ",(0,a.kt)("inlineCode",{parentName:"li"},"rules")," array must be of type ",(0,a.kt)("inlineCode",{parentName:"li"},"RuleType")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"RuleGroupTypeIC")),(0,a.kt)("li",{parentName:"ul"},"All odd indexes in the ",(0,a.kt)("inlineCode",{parentName:"li"},"rules")," array must be of type ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"The first and last elements of the ",(0,a.kt)("inlineCode",{parentName:"li"},"rules")," array must be of type ",(0,a.kt)("inlineCode",{parentName:"li"},"RuleType")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"RuleGroupTypeIC")," (therefore the array length, unless it is zero, must be an odd number)")),(0,a.kt)("p",{parentName:"admonition"},"For example, the following would be invalid because the first element in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," array (the ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"th index, which should be ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleType | RuleGroupTypeIC"),") is a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", and the second element (the ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"st index, which should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") is a ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleType"),". Also, the length (2) is an even number."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const ruleGroupInvalid: RuleGroupTypeIC = {\n  rules: ['and', { field: 'firstName', operator: '=', value: 'Steve' }],\n};\n")),(0,a.kt)("p",{parentName:"admonition"},"Either removing the first element or inserting another rule before it will resolve the issue:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const ruleGroupValid1: RuleGroupTypeIC = {\n  rules: [{ field: 'firstName', operator: '=', value: 'Steve' }],\n};\n\n// OR\n\nconst ruleGroupValid2: RuleGroupTypeIC = {\n  rules: [\n    { field: 'lastName', operator: '=', value: 'Vai' },\n    'and',\n    { field: 'firstName', operator: '=', value: 'Steve' },\n  ],\n};\n"))),(0,a.kt)("h2",{id:"export"},"Export"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type ExportFormat =\n  | 'json'\n  | 'sql'\n  | 'json_without_ids'\n  | 'parameterized'\n  | 'parameterized_named'\n  | 'mongodb'\n  | 'cel'\n  | 'jsonlogic'\n  | 'spel';\n\ntype ValueProcessor = (field: string, operator: string, value: any) => string;\n\ninterface FormatQueryOptions {\n  format?: ExportFormat;\n  valueProcessor?: ValueProcessor;\n  ruleProcessor?: RuleProcessor;\n  quoteFieldNamesWith?: string;\n  validator?: QueryValidator;\n  fields?: { name: string; validator?: RuleValidator; [k: string]: any }[];\n  fallbackExpression?: string;\n  paramPrefix?: string;\n  parseNumbers?: boolean;\n  placeholderFieldName?: string;\n  placeholderOperatorName?: string;\n}\n\ninterface ParameterizedSQL {\n  sql: string;\n  params: any[];\n}\n\ninterface ParameterizedNamedSQL {\n  sql: string;\n  params: { [p: string]: any };\n}\n")),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ParserCommonOptions {\n  fields?: Field[] | OptionGroup<Field>[] | Record<string, Field>;\n  getValueSources?: (field: string, operator: string) => ValueSources;\n  listsAsArrays?: boolean;\n  independentCombinators?: boolean;\n}\n\ninterface ParseSQLOptions extends ParserCommonOptions {\n  paramPrefix?: string;\n  params?: any[] | Record<string, any>;\n}\n\ntype ParseCELOptions = ParserCommonOptions;\n\ntype ParseJsonLogicOptions = ParserCommonOptions;\n\ntype ParseMongoDbOptions = ParserCommonOptions;\n")),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ValidationResult {\n  valid: boolean;\n  reasons?: any[];\n}\n\ninterface ValidationMap {\n  [id: string]: boolean | ValidationResult;\n}\n\ntype QueryValidator = (query: RuleGroupTypeAny) => boolean | ValidationMap;\n\ntype RuleValidator = (rule: RuleType) => boolean | ValidationResult;\n")),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Formerly `NameLabelPair`\ninterface Option {\n  name: string;\n  label: string;\n  [x: string]: any;\n}\n\ninterface OptionGroup {\n  label: string;\n  options: Option[];\n}\n\ntype OptionList = Option[] | OptionGroup[];\n\ninterface Combinator extends Option {\n  className?: Classname; // Assigned to groups where this combinator is selected\n}\n\ninterface Operator extends Option {\n  arity?: number | 'unary' | 'binary' | 'ternary';\n  className?: Classname; // Assigned to rules where this operator is selected\n}\n\ntype ValueEditorType =\n  | 'text'\n  | 'select'\n  | 'checkbox'\n  | 'radio'\n  | 'textarea'\n  | 'multiselect'\n  | 'date'\n  | 'datetime-local'\n  | 'time'\n  | null;\n\ntype ValueSource = 'value' | 'field';\n\ntype ValueSources = ['value'] | ['value', 'field'] | ['field', 'value'] | ['field'];\n\ninterface Schema {\n  fields: Field[] | OptionGroup<Field>[];\n  fieldMap: { [k: string]: Field };\n  classNames: Classnames;\n  combinators: OptionList;\n  controls: Controls;\n  createRule(): RuleType;\n  createRuleGroup(): RuleGroupTypeAny;\n  getOperators(field: string): Operator[] | OptionGroup<Operator>[];\n  getValueEditorType(field: string, operator: string): ValueEditorType;\n  getValueSources(field: string, operator: string): ValueSources;\n  getInputType(field: string, operator: string): string | null;\n  getValues(field: string, operator: string): OptionList;\n  getRuleClassname(rule: RuleType): Classname;\n  getRuleGroupClassname(ruleGroup: RuleGroupTypeAny): Classname;\n  isRuleGroup(ruleOrGroup: RuleType | RuleGroupTypeAny): ruleOrGroup is RuleGroupTypeAny;\n  updateIndependentCombinator(value: string, path: number[]): void;\n  showCombinatorsBetweenRules: boolean;\n  showNotToggle: boolean;\n  showCloneButtons: boolean;\n  showLockButtons: boolean;\n  autoSelectField: boolean;\n  placeholderFieldName: string;\n  autoSelectField: boolean;\n  autoSelectOperator: boolean;\n  placeholderOperatorName: string;\n  addRuleToNewGroups: boolean;\n  enableDragAndDrop: boolean;\n  validationMap: ValidationMap;\n  independentCombinators: boolean;\n  listsAsArrays: boolean;\n  disabledPaths: number[][];\n}\n\ninterface QueryActions {\n  onGroupAdd(group: RuleGroupTypeAny, parentPath: number[]): void;\n  onGroupRemove(path: number[]): void;\n  onPropChange(\n    prop: Exclude<keyof RuleType | keyof RuleGroupType, 'id' | 'path'>,\n    value: any,\n    path: number[]\n  ): void;\n  onRuleAdd(rule: RuleType, parentPath: number[]): void;\n  onRuleRemove(path: number[]): void;\n  moveRule(oldPath: number[], newPath: number[], clone?: boolean): void;\n}\n")))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);