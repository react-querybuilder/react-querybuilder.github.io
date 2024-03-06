"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2117],{27267:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(62540),o=r(65404);const i={title:"TypeScript reference"},l=void 0,s={id:"typescript",title:"TypeScript reference",description:"These are some of the TypeScript types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript, you can use the information below to understand the required shape of the props and function parameters.",source:"@site/versioned_docs/version-6/typescript.mdx",sourceDirName:".",slug:"/typescript",permalink:"/docs/6/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/typescript.mdx",tags:[],version:"6",frontMatter:{title:"TypeScript reference"},sidebar:"mySidebar",previous:{title:"Compatibility packages",permalink:"/docs/6/compat"},next:{title:"Buildless",permalink:"/docs/6/buildless"}},a={},d=[{value:"Fields",id:"fields",level:2},{value:"Rules and groups",id:"rules-and-groups",level:2},{value:"Export",id:"export",level:2},{value:"Import",id:"import",level:2},{value:"Validation",id:"validation",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["These are some of the ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," types and interfaces you'll see throughout the documentation. Even if you are not using TypeScript, you can use the information below to understand the required shape of the props and function parameters."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Some of the definitions below have been simplified from their actual implementations for legibility and ease of comprehension."}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/api",children:"API documentation"})}),", however, is generated directly from the source code and provides direct links to the actual definitions of each type within the repository should you need more detailed information."]})]}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Field {\n  id?: string; // The field identifier (if not provided, `name` will be used)\n  name: string; // The field name (REQUIRED)\n  label: string; // The field label (REQUIRED)\n  operators?: OptionList<Operator>[]; // Array of operators (if not provided, `getOperators()` will be used)\n  valueEditorType?: ValueEditorType; // Value editor type for this field (if not provided, `getValueEditorType()` will be used)\n  inputType?: string | null; // @type attribute for the <input /> rendered by ValueEditor, e.g. 'text', 'number', or 'date' (if not provided, `getInputType()` will be used)\n  values?: OptionList; // Array of value options, applicable when valueEditorType is 'select', 'radio', or 'multiselect' (if not provided, `getValues()` will be used)\n  defaultOperator?: string; // Default operator for this field (if not provided, `getDefaultOperator()` will be used)\n  defaultValue?: any; // Default value for this field (if not provided, `getDefaultValue()` will be used)\n  placeholder?: string; // Placeholder text for the value editor when this field is selected\n  validator?: RuleValidator; // Validation function for rules that specify this field\n  valueSources?: ValueSources | ((operator: string) => ValueSources); // List of allowed value sources (must contain \"value\", \"field\", or both)\n  comparator?: string | ((f: Field, operator: string) => boolean); // Determines which (other) fields to include in the list when the rule's valueSource is \"field\"\n  className?: Classname; // Assigned to rules where this field is selected\n  separator?: ReactNode; // Rendered between multiple value editors, e.g. when the operator is \"between\" or \"notBetween\"\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"./components/valueeditor",children:"Click here"})," for documentation on the available options for ",(0,t.jsx)(n.code,{children:"valueEditorType"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"rules-and-groups",children:"Rules and groups"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type RuleType = {\n  path?: Path;\n  id?: string;\n  disabled?: boolean;\n  field: string;\n  operator: string;\n  value: any;\n  valueSource?: ValueSource;\n};\n\ntype RuleGroupType = {\n  path?: Path;\n  id?: string;\n  disabled?: boolean;\n  combinator: string;\n  rules: (RuleType | RuleGroupType)[];\n  not?: boolean;\n};\n\ntype RuleGroupTypeIC = {\n  path?: Path;\n  id?: string;\n  disabled?: boolean;\n  rules: (RuleType | RuleGroupTypeIC | string)[]; // see note below\n  not?: boolean;\n};\n\ntype RuleGroupTypeAny = RuleGroupType | RuleGroupTypeIC;\n\ntype RuleOrGroupArray = RuleGroupType['rules'] | RuleGroupTypeIC['rules'];\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RuleGroupTypeIC['rules']"})," is ",(0,t.jsx)(n.em,{children:"greatly"})," simplified here for brevity. In reality, the following conditions will be enforced by TypeScript:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["All even indexes in the ",(0,t.jsx)(n.code,{children:"rules"})," array must be of type ",(0,t.jsx)(n.code,{children:"RuleType"})," or ",(0,t.jsx)(n.code,{children:"RuleGroupTypeIC"})]}),"\n",(0,t.jsxs)(n.li,{children:["All odd indexes in the ",(0,t.jsx)(n.code,{children:"rules"})," array must be of type ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:["The first and last elements of the ",(0,t.jsx)(n.code,{children:"rules"})," array must be of type ",(0,t.jsx)(n.code,{children:"RuleType"})," or ",(0,t.jsx)(n.code,{children:"RuleGroupTypeIC"})]}),"\n",(0,t.jsx)(n.li,{children:"The array length must be an odd number (unless it is zero)"}),"\n"]}),(0,t.jsxs)(n.p,{children:["For example, the following would be invalid because the first element in the ",(0,t.jsx)(n.code,{children:"rules"})," array (the ",(0,t.jsx)(n.code,{children:"0"}),"th index, which should be ",(0,t.jsx)(n.code,{children:"RuleType | RuleGroupTypeIC"}),") is a ",(0,t.jsx)(n.code,{children:"string"}),", and the second element (the ",(0,t.jsx)(n.code,{children:"1"}),"st index, which should be a ",(0,t.jsx)(n.code,{children:"string"}),") is a ",(0,t.jsx)(n.code,{children:"RuleType"}),". Also, the length is an even number (2)."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const ruleGroupInvalid: RuleGroupTypeIC = {\n  rules: ['and', { field: 'firstName', operator: '=', value: 'Steve' }],\n};\n"})}),(0,t.jsx)(n.p,{children:"Either removing the first element or inserting another rule before it will resolve the issue:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const ruleGroupValid1: RuleGroupTypeIC = {\n  rules: [{ field: 'firstName', operator: '=', value: 'Steve' }],\n};\n\n// OR\n\nconst ruleGroupValid2: RuleGroupTypeIC = {\n  rules: [\n    { field: 'lastName', operator: '=', value: 'Vai' },\n    'and',\n    { field: 'firstName', operator: '=', value: 'Steve' },\n  ],\n};\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"export",children:"Export"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type ExportFormat =\n  | 'json'\n  | 'sql'\n  | 'json_without_ids'\n  | 'parameterized'\n  | 'parameterized_named'\n  | 'mongodb'\n  | 'cel'\n  | 'jsonlogic'\n  | 'spel';\n\ntype ValueProcessor = (field: string, operator: string, value: any) => string;\n\ntype RuleProcessor = (rule: RuleType, options?: ValueProcessorOptions) => any;\n\ninterface FormatQueryOptions {\n  format?: ExportFormat;\n  valueProcessor?: ValueProcessor;\n  ruleProcessor?: RuleProcessor;\n  quoteFieldNamesWith?: string | [string, string];\n  validator?: QueryValidator;\n  fields?: { name: string; validator?: RuleValidator; [k: string]: any }[];\n  fallbackExpression?: string;\n  paramPrefix?: string;\n  parseNumbers?: boolean;\n  placeholderFieldName?: string;\n  placeholderOperatorName?: string;\n}\n\ninterface ParameterizedSQL {\n  sql: string;\n  params: any[];\n}\n\ninterface ParameterizedNamedSQL {\n  sql: string;\n  params: { [p: string]: any };\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ParserCommonOptions {\n  fields?: OptionList<Field>[] | Record<string, Field>;\n  getValueSources?: (field: string, operator: string) => ValueSources;\n  listsAsArrays?: boolean;\n  independentCombinators?: boolean;\n}\n\ninterface ParseSQLOptions extends ParserCommonOptions {\n  paramPrefix?: string;\n  params?: any[] | Record<string, any>;\n}\n\ntype ParseCELOptions = ParserCommonOptions;\n\ntype ParseJsonLogicOptions = ParserCommonOptions;\n\ntype ParseMongoDbOptions = ParserCommonOptions;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ValidationResult {\n  valid: boolean;\n  reasons?: any[];\n}\n\ninterface ValidationMap {\n  [id: string]: boolean | ValidationResult;\n}\n\ntype QueryValidator = (query: RuleGroupTypeAny) => boolean | ValidationMap;\n\ntype RuleValidator = (rule: RuleType) => boolean | ValidationResult;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["For more information about the ",(0,t.jsx)(n.code,{children:"Path"})," type, see ",(0,t.jsx)(n.a,{href:"./tips/path",children:"Path concepts"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Path = number[];\n\n// Formerly `NameLabelPair`\ninterface Option {\n  name: string;\n  label: string;\n  [x: string]: any;\n}\n\ninterface OptionGroup {\n  label: string;\n  options: Option[];\n}\n\ntype OptionList = Option[] | OptionGroup[];\n\ninterface Combinator extends Option {\n  className?: Classname; // Assigned to groups where this combinator is selected\n}\n\ninterface Operator extends Option {\n  arity?: number | 'unary' | 'binary' | 'ternary';\n  className?: Classname; // Assigned to rules where this operator is selected\n}\n\ntype ValueEditorType =\n  | 'text'\n  | 'select'\n  | 'checkbox'\n  | 'radio'\n  | 'textarea'\n  | 'multiselect'\n  | 'date'\n  | 'datetime-local'\n  | 'time'\n  | null;\n\ntype ValueSource = 'value' | 'field';\n\ntype ValueSources = ['value'] | ['value', 'field'] | ['field', 'value'] | ['field'];\n\ninterface Schema {\n  fields: OptionList<Field>[];\n  fieldMap: Record<string, Field>;\n  classNames: Classnames;\n  combinators: OptionList<Combinator>;\n  controls: Controls;\n  createRule(): RuleType;\n  createRuleGroup(): RuleGroupTypeAny;\n  getOperators(field: string): OptionList<Operator>[];\n  getValueEditorType(field: string, operator: string): ValueEditorType;\n  getValueEditorSeparator(field: string, operator: string): ReactNode;\n  getValueSources(field: string, operator: string): ValueSources;\n  getInputType(field: string, operator: string): string | null;\n  getValues(field: string, operator: string): OptionList;\n  getRuleClassname(rule: RuleType): Classname;\n  getRuleGroupClassname(ruleGroup: RuleGroupTypeAny): Classname;\n  isRuleGroup(ruleOrGroup: RuleType | RuleGroupTypeAny): ruleOrGroup is RuleGroupTypeAny;\n  showCombinatorsBetweenRules: boolean;\n  showNotToggle: boolean;\n  showCloneButtons: boolean;\n  showLockButtons: boolean;\n  autoSelectField: boolean;\n  autoSelectOperator: boolean;\n  addRuleToNewGroups: boolean;\n  enableDragAndDrop: boolean;\n  validationMap: ValidationMap;\n  independentCombinators: boolean;\n  listsAsArrays: boolean;\n  parseNumbers: ParseNumbersMethod;\n  disabledPaths: Path[];\n}\n\ninterface QueryActions {\n  onGroupAdd(group: RuleGroupTypeAny, parentPath: Path, context?: any): void;\n  onGroupRemove(path: Path): void;\n  onPropChange(\n    prop: Exclude<keyof RuleType | keyof RuleGroupType, 'id' | 'path'>,\n    value: any,\n    path: Path\n  ): void;\n  onRuleAdd(rule: RuleType, parentPath: Path, context?: any): void;\n  onRuleRemove(path: Path): void;\n  moveRule(oldPath: Path, newPath: Path, clone?: boolean): void;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},65404:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var t=r(63696);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);