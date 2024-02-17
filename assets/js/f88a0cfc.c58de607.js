"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9246],{13089:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(62540),i=r(65404);const o={title:"TypeScript reference"},l=void 0,a={id:"typescript",title:"TypeScript reference",description:"These are some of the TypeScript types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the react-querybuilder library, click here.",source:"@site/versioned_docs/version-4/typescript.mdx",sourceDirName:".",slug:"/typescript",permalink:"/docs/4/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/typescript.mdx",tags:[],version:"4",frontMatter:{title:"TypeScript reference"},sidebar:"mySidebar",previous:{title:"Compatibility packages",permalink:"/docs/4/compat"},next:{title:"UMD build",permalink:"/docs/4/umd"}},s={},d=[{value:"Fields",id:"fields",level:2},{value:"Rules and groups",id:"rules-and-groups",level:2},{value:"Export",id:"export",level:2},{value:"Import",id:"import",level:2},{value:"Validation",id:"validation",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["These are some of the ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the ",(0,t.jsx)(n.code,{children:"react-querybuilder"})," library, ",(0,t.jsx)(n.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/v4.2.3/packages/react-querybuilder/src/types",children:"click here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The minimum TypeScript version for this library is 4.1, but if you use TypeScript 4.5 or greater then the type ",(0,t.jsx)(n.code,{children:"RuleGroupTypeIC"})," (the type used for the ",(0,t.jsx)(n.code,{children:"query"})," prop when ",(0,t.jsx)(n.code,{children:"independentCombinators"})," is ",(0,t.jsx)(n.code,{children:"true"}),") will be more accurate and helpful. See the note in the ",(0,t.jsx)(n.a,{href:"#rules-and-groups",children:"Rules and groups"})," section below."]})}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Field {\n  id?: string; // The field identifier (if not provided, then `name` will be used)\n  name: string; // REQUIRED - the field name\n  label: string; // REQUIRED - the field label\n  operators?: NameLabelPair[] | OptionGroup[]; // Array of operators (if not provided, then `getOperators()` will be used)\n  valueEditorType?: ValueEditorType; // Value editor type for this field (if not provided, then `getValueEditorType()` will be used)\n  inputType?: string | null; // Input type for text box inputs, e.g. 'text', 'number', or 'date' (if not provided, then `getInputType()` will be used)\n  values?: NameLabelPair[]; // Array of values, applicable when valueEditorType is 'select' or 'radio' (if not provided, then `getValues()` will be used)\n  defaultOperator?: string; // Default operator for this field (if not provided, then `getDefaultOperator()` will be used)\n  defaultValue?: any; // Default value for this field (if not provided, then `getDefaultValue()` will be used)\n  placeholder?: string; // Value to be displayed in the placeholder of the text field\n  validator?: RuleValidator; // Called when a rule specifies this field\n  valueSources?: ValueSources | ((operator: string) => ValueSources); // List of allowed value sources (must contain \"value\", \"field\", or both)\n  comparator?: string | ((f: Field, operator: string) => boolean); // Determines which (other) fields to include in the list when valueSource is \"field\"\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"./api/valueeditor",children:"Click here"})," for documentation on the available options for ",(0,t.jsx)(n.code,{children:"valueEditorType"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"rules-and-groups",children:"Rules and groups"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type RuleType = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  field: string;\n  operator: string;\n  value: any;\n  valueSource?: ValueSource;\n};\n\ntype RuleGroupType = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  combinator: string;\n  rules: (RuleType | RuleGroupType)[];\n  not?: boolean;\n};\n\ntype RuleGroupTypeIC = {\n  path?: number[];\n  id?: string;\n  disabled?: boolean;\n  rules: (RuleType | RuleGroupTypeIC | string)[]; // see note below\n  not?: boolean;\n};\n\ntype RuleGroupTypeAny = RuleGroupType | RuleGroupTypeIC;\n\ntype RuleOrGroupArray = RuleGroupType['rules'] | RuleGroupTypeIC['rules'];\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RuleGroupTypeIC"})," is greatly simplified here for brevity. In reality, the following conditions will be enforced by TypeScript:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["All even indexes in the ",(0,t.jsx)(n.code,{children:"rules"})," array must be of type ",(0,t.jsx)(n.code,{children:"RuleType"})," or ",(0,t.jsx)(n.code,{children:"RuleGroupTypeIC"})]}),"\n",(0,t.jsxs)(n.li,{children:["All odd indexes in the ",(0,t.jsx)(n.code,{children:"rules"})," array must be of type ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:["The first and last elements of the ",(0,t.jsx)(n.code,{children:"rules"})," array must be of type ",(0,t.jsx)(n.code,{children:"RuleType"})," or ",(0,t.jsx)(n.code,{children:"RuleGroupTypeIC"})," (therefore the array length, unless it is zero, must be an odd number)"]}),"\n"]}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["That is, unless you're using a TypeScript version lower than 4.5, in which case what you see above is the actual type definition. I.e., the ",(0,t.jsx)(n.code,{children:"rules"})," array can be of any length, with elements of ",(0,t.jsx)(n.code,{children:"RuleType"}),", ",(0,t.jsx)(n.code,{children:"RuleGroupTypeIC"}),", or ",(0,t.jsx)(n.code,{children:"string"})," in any order, and TypeScript will not complain. However, invalid query objects can lead to unexpected behavior from the ",(0,t.jsx)(n.code,{children:"<QueryBuilder />"})," component, so TypeScript 4.5 or greater is strongly recommended if the ",(0,t.jsx)(n.a,{href:"./api/querybuilder#independentcombinators",children:(0,t.jsx)(n.code,{children:"independentCombinators"})})," option will be used. In any case, make sure query objects meet the conditions listed above."]}),"\n"]}),(0,t.jsxs)(n.p,{children:["For example, the following would be invalid because the first element in the ",(0,t.jsx)(n.code,{children:"rules"})," array (the ",(0,t.jsx)(n.code,{children:"0"}),"th index, which should be ",(0,t.jsx)(n.code,{children:"RuleType | RuleGroupTypeIC"}),") is a ",(0,t.jsx)(n.code,{children:"string"}),", and the second element (the ",(0,t.jsx)(n.code,{children:"1"}),"st index, which should be a ",(0,t.jsx)(n.code,{children:"string"}),") is a ",(0,t.jsx)(n.code,{children:"RuleType"}),". Also, the length (2) is an even number."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const ruleGroupInvalid: RuleGroupTypeIC = {\n  rules: ['and', { field: 'firstName', operator: '=', value: 'Steve' }],\n};\n"})}),(0,t.jsx)(n.p,{children:"Either removing the first element or inserting another rule before it will resolve the issue:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const ruleGroupValid1: RuleGroupTypeIC = {\n  rules: [{ field: 'firstName', operator: '=', value: 'Steve' }],\n};\n\n// OR\n\nconst ruleGroupValid2: RuleGroupTypeIC = {\n  rules: [\n    { field: 'lastName', operator: '=', value: 'Vai' },\n    'and',\n    { field: 'firstName', operator: '=', value: 'Steve' },\n  ],\n};\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"export",children:"Export"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type ExportFormat =\n  | 'json'\n  | 'sql'\n  | 'json_without_ids'\n  | 'parameterized'\n  | 'parameterized_named'\n  | 'mongodb'\n  | 'cel';\n\ntype ValueProcessor = (field: string, operator: string, value: any) => string;\n\ninterface FormatQueryOptions {\n  format?: ExportFormat;\n  valueProcessor?: ValueProcessor;\n  quoteFieldNamesWith?: string;\n  validator?: QueryValidator;\n  fields?: { name: string; validator?: RuleValidator; [k: string]: any }[];\n  fallbackExpression?: string;\n  paramPrefix?: string;\n  parseNumbers?: boolean;\n  placeholderFieldName?: string;\n  placeholderOperatorName?: string;\n}\n\ninterface ParameterizedSQL {\n  sql: string;\n  params: any[];\n}\n\ninterface ParameterizedNamedSQL {\n  sql: string;\n  params: { [p: string]: any };\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ParseSQLOptions {\n  independentCombinators?: boolean;\n  paramPrefix?: string;\n  params?: any[] | { [p: string]: any };\n  listsAsArrays?: boolean;\n  fields?: Field[] | OptionGroup<Field>[] | Record<string, Field>;\n  getValueSources?: (field: string, operator: string) => ValueSources;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ValidationResult {\n  valid: boolean;\n  reasons?: any[];\n}\n\ninterface ValidationMap {\n  [id: string]: boolean | ValidationResult;\n}\n\ntype QueryValidator = (query: RuleGroupTypeAny) => boolean | ValidationMap;\n\ntype RuleValidator = (rule: RuleType) => boolean | ValidationResult;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface NameLabelPair {\n  name: string;\n  label: string;\n  [x: string]: any;\n}\n\ninterface OptionGroup {\n  label: string;\n  options: NameLabelPair[];\n}\n\ntype ValueEditorType =\n  | 'text'\n  | 'select'\n  | 'checkbox'\n  | 'radio'\n  | 'textarea'\n  | 'multiselect'\n  | 'date'\n  | 'datetime-local'\n  | 'time'\n  | null;\n\ntype ValueSource = 'value' | 'field';\n\ntype ValueSources = ['value'] | ['value', 'field'] | ['field', 'value'] | ['field'];\n\ninterface Schema {\n  fields: Field[] | OptionGroup<NameLabelPair>[];\n  fieldMap: { [k: string]: Field };\n  classNames: Classnames;\n  combinators: NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  controls: Controls;\n  createRule(): RuleType;\n  createRuleGroup(): RuleGroupTypeAny;\n  getOperators(field: string): NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  getValueEditorType(field: string, operator: string): ValueEditorType;\n  getInputType(field: string, operator: string): string | null;\n  getValues(field: string, operator: string): NameLabelPair[] | OptionGroup<NameLabelPair>[];\n  isRuleGroup(ruleOrGroup: RuleType | RuleGroupTypeAny): ruleOrGroup is RuleGroupTypeAny;\n  onGroupAdd(group: RuleGroupTypeAny, parentPath: number[]): void;\n  onGroupRemove(path: number[]): void;\n  onPropChange(\n    prop: Exclude<keyof RuleType | keyof RuleGroupType, 'id' | 'path'>,\n    value: any,\n    path: number[]\n  ): void;\n  onRuleAdd(rule: RuleType, parentPath: number[]): void;\n  onRuleRemove(path: number[]): void;\n  updateIndependentCombinator(value: string, path: number[]): void;\n  showCombinatorsBetweenRules: boolean;\n  showNotToggle: boolean;\n  showCloneButtons: boolean;\n  autoSelectField: boolean;\n  placeholderFieldName: string;\n  autoSelectOperator: boolean;\n  placeholderOperatorName: string;\n  addRuleToNewGroups: boolean;\n  enableDragAndDrop: boolean;\n  validationMap: ValidationMap;\n  independentCombinators: boolean;\n  disabledPaths: number[][];\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},65404:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var t=r(63696);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);