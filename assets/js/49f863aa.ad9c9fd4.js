"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18767],{50483:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=r(62540),s=r(65404);r(41485);const t={title:"Hooks",description:"Reuse React Query Builder's logic in your own components"},i=void 0,l={id:"utils/hooks",title:"Hooks",description:"Reuse React Query Builder's logic in your own components",source:"@site/versioned_docs/version-7/utils/hooks.mdx",sourceDirName:"utils",slug:"/utils/hooks",permalink:"/docs/utils/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-7/utils/hooks.mdx",tags:[],version:"7",frontMatter:{title:"Hooks",description:"Reuse React Query Builder's logic in your own components"},sidebar:"mySidebar",previous:{title:"Import",permalink:"/docs/utils/import"},next:{title:"Validation",permalink:"/docs/utils/validation"}},d={},c=[{value:"State access",id:"state-access",level:2},{value:"<code>useQueryBuilderSelector</code>",id:"usequerybuilderselector",level:3},{value:"Component logic",id:"component-logic",level:2},{value:"<code>useRule</code>",id:"userule",level:3},{value:"<code>useRuleGroup</code>",id:"userulegroup",level:3},{value:"<code>useValueEditor</code>",id:"usevalueeditor",level:3},{value:"<code>useValueSelector</code>",id:"usevalueselector",level:3},{value:"<code>useSelectElementChangeHandler</code>",id:"useselectelementchangehandler",level:3},{value:"<code>useShiftActions</code>",id:"useshiftactions",level:3},{value:"<code>useStopEventPropagation</code>",id:"usestopeventpropagation",level:3},{value:"<code>useQueryBuilderSetup</code>",id:"usequerybuildersetup",level:3},{value:"<code>useQueryBuilderSchema</code>",id:"usequerybuilderschema",level:3},{value:"Other utilities",id:"other-utilities",level:2},{value:"<code>useMergedContext</code>",id:"usemergedcontext",level:3},{value:"<code>usePreferProp</code>",id:"usepreferprop",level:3},{value:"<code>usePrevious</code>",id:"useprevious",level:3},{value:"Internal",id:"internal",level:2},{value:"<code>useControlledOrUncontrolled</code>",id:"usecontrolledoruncontrolled",level:3},{value:"<code>useDeprecatedProps</code>",id:"usedeprecatedprops",level:3},{value:"<code>useReactDndWarning</code>",id:"usereactdndwarning",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["Refer to the ",(0,o.jsx)(n.a,{href:"../typescript",children:"TypeScript reference"})," page for information about the types and interfaces referenced below."]})}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:"These Hooks are used internally by React Query Builder and are exported for use by custom components."}),"\n",(0,o.jsx)(n.h2,{id:"state-access",children:"State access"}),"\n",(0,o.jsx)(n.p,{children:"React Query Builder uses Redux to manage state within a custom React context to avoid interfering with existing Redux stores."}),"\n",(0,o.jsx)(n.h3,{id:"usequerybuilderselector",children:(0,o.jsx)(n.code,{children:"useQueryBuilderSelector"})}),"\n",(0,o.jsxs)(n.p,{children:["Returns the current query from the Redux store when used in conjunction with ",(0,o.jsx)(n.code,{children:"getQuerySelectorById"})," (see example below)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useQueryBuilderSelector(selector: (state: RqbState) => RuleGroupTypeAny): RuleGroupTypeAny;\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["As a React Hook, this function must follow the ",(0,o.jsx)(n.a,{href:"https://react.dev/warnings/invalid-hook-call-warning",children:"appropriate rules"}),". It is intended to provide access to the current query during the render phase, ",(0,o.jsx)(n.em,{children:"not in an event handler"}),"."]}),(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["To access the current query from an event handler, use ",(0,o.jsx)(n.code,{children:"props.schema.getQuery()"})," instead."]})})]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const CustomValueEditor = (props: ValueEditorProps) => {\n  const fullQuery = useQueryBuilderSelector(getQuerySelectorById(props.schema.qbId));\n  // Here you can use utilities like `findPath(getParentPath(props.path), fullQuery)`.\n  // This allows you to, for example, inspect the parent group of the current rule.\n  // You can then count sibling rules, check for unique `field` selections, etc.\n  // That information can be used for validation, information to the user, or\n  // anything else in your render function.\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"component-logic",children:"Component logic"}),"\n",(0,o.jsx)(n.p,{children:"The core logic of each component is encapsulated in a reusable Hook. Each main component is itself little more than a call to its respective Hook and the JSX that utilizes the properties in the object returned from that Hook. This enables the creation of a custom presentation layer without having to copy the logic code from the default components."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@react-querybuilder/native"})," package is a good example of this concept. It calls the Hooks from its own query builder, rule group, and rule components, but nests the sub-components within React Native ",(0,o.jsx)(n.code,{children:"View"})," elements instead of HTML ",(0,o.jsx)(n.code,{children:"div"})," elements like the ",(0,o.jsx)(n.code,{children:"react-querybuilder"})," components."]})}),"\n",(0,o.jsx)(n.h3,{id:"userule",children:(0,o.jsx)(n.code,{children:"useRule"})}),"\n",(0,o.jsxs)(n.p,{children:["Called by the ",(0,o.jsx)(n.a,{href:"../components/rule",children:(0,o.jsx)(n.code,{children:"Rule"})})," component. See ",(0,o.jsx)(n.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/hooks/useRule.ts",children:"source code"})," for returned properties."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useRule(props: RuleProps): {\n  // See source code for returned properties\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"userulegroup",children:(0,o.jsx)(n.code,{children:"useRuleGroup"})}),"\n",(0,o.jsxs)(n.p,{children:["Called by the ",(0,o.jsx)(n.a,{href:"../components/rulegroup",children:(0,o.jsx)(n.code,{children:"RuleGroup"})})," component. See ",(0,o.jsx)(n.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/hooks/useRuleGroup.ts",children:"source code"})," for returned properties."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useRuleGroup(props: RuleGroupProps): {\n  // See source code for returned properties\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"usevalueeditor",children:(0,o.jsx)(n.code,{children:"useValueEditor"})}),"\n",(0,o.jsxs)(n.p,{children:["Called by the ",(0,o.jsx)(n.a,{href:"../components/valueeditor",children:(0,o.jsx)(n.code,{children:"ValueEditor"})})," component. Accepts the same ",(0,o.jsx)(n.code,{children:"ValueEditorProps"})," as the component and returns an object with two properties: the value as an array and a multi-value handler."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useValueEditor(props: ValueEditorProps): {\n  valueAsArray: any[];\n  multiValueHandler: (val: string, idx: number) => void;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This Hook updates the ",(0,o.jsx)(n.code,{children:"value"})," as a side effect if the following conditions are true:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"skipHook"})," is ",(0,o.jsx)(n.code,{children:"false"})," (the value editors in the ",(0,o.jsx)(n.a,{href:"../compat",children:"compatibility packages"})," set this to ",(0,o.jsx)(n.code,{children:"true"})," to avoid infinite loops)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"inputType"})," is ",(0,o.jsx)(n.code,{children:'"number"'})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"operator"})," is something other than ",(0,o.jsx)(n.code,{children:'"between"'}),", ",(0,o.jsx)(n.code,{children:'"notBetween"'}),", ",(0,o.jsx)(n.code,{children:'"in"'}),", or ",(0,o.jsx)(n.code,{children:'"notIn"'})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"valueEditorType"}),' is not "multiselect"']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"value"})," is an array or a string containing a comma (",(0,o.jsx)(n.code,{children:","}),") and at least one non-whitespace character on either side."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If all of these conditions are met, ",(0,o.jsx)(n.code,{children:"handleOnChange"})," will be called with the first element of the array, or any characters before the first comma if ",(0,o.jsx)(n.code,{children:"value"})," is a string."]}),"\n",(0,o.jsx)(n.h3,{id:"usevalueselector",children:(0,o.jsx)(n.code,{children:"useValueSelector"})}),"\n",(0,o.jsxs)(n.p,{children:["Called by the ",(0,o.jsx)(n.a,{href:"../components/valueselector",children:(0,o.jsx)(n.code,{children:"ValueSelector"})})," component. Returns the given value as an array (untouched if already an array) and a memoized change handler."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useValueSelector(\n  props: Pick<ValueSelectorProps, 'handleOnChange' | 'listsAsArrays' | 'multiple' | 'value'>\n): {\n  onChange: (v: string | string[]) => void;\n  val?: string | any[];\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"useselectelementchangehandler",children:(0,o.jsx)(n.code,{children:"useSelectElementChangeHandler"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the ",(0,o.jsx)(n.a,{href:"../components/valueselector",children:(0,o.jsx)(n.code,{children:"ValueSelector"})})," component. Returns a memoized change handler specifically for HTML ",(0,o.jsx)(n.code,{children:"<select />"})," elements."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useSelectElementChangeHandler(props: {\n  multiple?: boolean;\n  onChange: (v: string | string[]) => void;\n}): (e: ChangeEvent<HTMLSelectElement>) => void;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"useshiftactions",children:(0,o.jsx)(n.code,{children:"useShiftActions"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the ",(0,o.jsx)(n.a,{href:"../components/shiftactions",children:(0,o.jsx)(n.code,{children:"ShiftActions"})})," component. Generates ",(0,o.jsx)(n.code,{children:"shiftUp"})," and ",(0,o.jsx)(n.code,{children:"shiftDown"})," methods to move a rule/group up or down, respectively, in the query hierarchy, as well as ",(0,o.jsx)(n.code,{children:"shiftUpDisabled"}),"/",(0,o.jsx)(n.code,{children:"shiftDownDisabled"})," to indicate whether either button should be disabled (",(0,o.jsx)(n.code,{children:"shiftUpDisabled"})," is ",(0,o.jsx)(n.code,{children:"true"})," for the first rule/group in the root group; ",(0,o.jsx)(n.code,{children:"shiftDownDisabled"})," is ",(0,o.jsx)(n.code,{children:"true"})," for the last rule/group in the root group)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useShiftActions(\n  props: { path: Path } & Pick<Schema, 'combinators' | 'dispatchQuery' | 'getQuery'>\n): {\n  shiftDown: () => void;\n  shiftDownDisabled: boolean;\n  shiftUp: () => void;\n  shiftUpDisabled: boolean;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"usestopeventpropagation",children:(0,o.jsx)(n.code,{children:"useStopEventPropagation"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the default ",(0,o.jsx)(n.a,{href:"../components/rule",children:(0,o.jsx)(n.code,{children:"Rule"})})," and ",(0,o.jsx)(n.a,{href:"../components/rulegroup",children:(0,o.jsx)(n.code,{children:"RuleGroup"})})," components to prevent default behavior and stop propagation of events (e.g., a ",(0,o.jsx)(n.code,{children:"MouseEvent"})," after clicking a ",(0,o.jsx)(n.code,{children:"<button>"}),"). Takes a function that accepts a ",(0,o.jsx)(n.code,{children:"MouseEvent"})," and context parameters; returns a new function that calls ",(0,o.jsx)(n.code,{children:"event.preventDefault()"})," and ",(0,o.jsx)(n.code,{children:"event.stopPropagation()"})," before calling the original function with the same arguments."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useStopEventPropagation(\n  method: (event: React.MouseEvent, context: any) => void\n): (event: React.MouseEvent, context: any) => void;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This hook is ",(0,o.jsx)(n.em,{children:"not"})," used in the ",(0,o.jsx)(n.code,{children:"@react-querybuilder/native"})," ",(0,o.jsx)(n.code,{children:"Rule"})," and ",(0,o.jsx)(n.code,{children:"RuleGroup"})," components, ",(0,o.jsx)(n.code,{children:"RuleNative"})," and ",(0,o.jsx)(n.code,{children:"RuleGroupNative"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"usequerybuildersetup",children:(0,o.jsx)(n.code,{children:"useQueryBuilderSetup"})}),"\n",(0,o.jsxs)(n.p,{children:["Called by the ",(0,o.jsx)(n.a,{href:"../components/querybuilder",children:(0,o.jsx)(n.code,{children:"QueryBuilder"})})," component. Merges props and context values with the defaults and generates actions."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This Hook is unlikely to be necessary unless you are reimplementing the entire ",(0,o.jsx)(n.code,{children:"QueryBuilder"})," component structure."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useQueryBuilderSetup(props: QueryBuilderProps): {\n  qbId: qbId.current;\n  rqbContext: ReturnType<typeof useMergedContext>;\n  fields: OptionList<Field>;\n  fieldMap: Record<string, Field>;\n  combinators: OptionList<Combinator>;\n  getOperatorsMain: (field: string) => OptionList<Operator>;\n  getRuleDefaultOperator: (field: string) => string;\n  getValueEditorTypeMain: (field: string, operator: string) => ValueEditorType;\n  getValueSourcesMain: (field: string, operator: string) => ValueSources;\n  getValuesMain: (field: string, operator: string) => OptionList;\n  getRuleDefaultValue: (rule: RuleType) => any;\n  getInputTypeMain: (field: string, operator: string) => string;\n  createRule: () => RuleType;\n  createRuleGroup: () => RuleGroupTypeAny;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"usequerybuilderschema",children:(0,o.jsx)(n.code,{children:"useQueryBuilderSchema"})}),"\n",(0,o.jsxs)(n.p,{children:["Called by the internal component rendered by ",(0,o.jsx)(n.a,{href:"../components/querybuilder",children:(0,o.jsx)(n.code,{children:"QueryBuilder"})}),". Returns everything needed to render a wrapper element (e.g., ",(0,o.jsx)(n.code,{children:"<div>"}),") and the root ",(0,o.jsx)(n.a,{href:"../components/rulegroup",children:(0,o.jsx)(n.code,{children:"RuleGroup"})})," element based on the provided props and the result from ",(0,o.jsx)(n.a,{href:"#usequerybuildersetup",children:(0,o.jsx)(n.code,{children:"useQueryBuilderSetup"})}),". Generates an ",(0,o.jsx)(n.code,{children:"id"})," for each rule and group in the query hierarchy that doesn't already have one."]}),"\n",(0,o.jsxs)(n.p,{children:["This Hook must be called from a descendant component of ",(0,o.jsx)(n.code,{children:"QueryBuilderStateProvider"}),". See ",(0,o.jsxs)(n.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/components/QueryBuilder.tsx",children:[(0,o.jsx)(n.code,{children:"QueryBuilder"})," source code"]})," for an example."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This Hook is unlikely to be necessary unless you are reimplementing the entire ",(0,o.jsx)(n.code,{children:"QueryBuilder"})," component structure."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useQueryBuilderSchema(\n  props: QueryBuilderProps,\n  setup: ReturnType<typeof useQueryBuilderSetup>\n): QueryBuilderProps & {\n  actions: QueryActions;\n  rootGroup: RuleGroupTypeAny;\n  rootGroupDisabled: RuleGroupTypeAny;\n  queryDisabled: boolean;\n  rqbContext: ReturnType<typeof useMergedContext>;\n  schema: Schema;\n  translations: TranslationsFull;\n  wrapperClassName: string;\n  dndEnabledAttr: 'enabled' | 'disabled';\n  inlineCombinatorsAttr: 'enabled' | 'disabled';\n  combinatorPropObject: Pick<RuleGroupProps, 'combinator'>;\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"other-utilities",children:"Other utilities"}),"\n",(0,o.jsx)(n.h3,{id:"usemergedcontext",children:(0,o.jsx)(n.code,{children:"useMergedContext"})}),"\n",(0,o.jsxs)(n.p,{children:["Merges the values inherited from the nearest ancestor ",(0,o.jsx)(n.code,{children:"QueryBuilderContext.Provider"})," with the current component's props. For ",(0,o.jsx)(n.code,{children:"controlClassnames"}),", ",(0,o.jsx)(n.code,{children:"controlElements"}),", and ",(0,o.jsx)(n.code,{children:"translations"}),", options that are not defined through either context or props will fall back to the defaults."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useMergedContext(props: QueryBuilderContextProps): QueryBuilderContextProps;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"usepreferprop",children:(0,o.jsx)(n.code,{children:"usePreferProp"})}),"\n",(0,o.jsxs)(n.p,{children:["Given a default value, a prop value, and a context value (all ",(0,o.jsx)(n.code,{children:"boolean"})," or ",(0,o.jsx)(n.code,{children:"undefined"}),"), returns the first one that is not ",(0,o.jsx)(n.code,{children:"undefined"})," in the order of (1) prop, (2) context, (3) default."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function usePreferProp(default: boolean, prop?: boolean, context?: boolean): boolean;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"useprevious",children:(0,o.jsx)(n.code,{children:"usePrevious"})}),"\n",(0,o.jsx)(n.p,{children:"Returns the value of a prop or state variable from the previous render."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function usePrevious<T>(prop: T): T | null;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"internal",children:"Internal"}),"\n",(0,o.jsx)(n.p,{children:'These Hooks log error messages to the console in certain situations (and only in "development" mode). They encourage correct usage of React Query Builder and are not intended to be used in custom components.'}),"\n",(0,o.jsx)(n.h3,{id:"usecontrolledoruncontrolled",children:(0,o.jsx)(n.code,{children:"useControlledOrUncontrolled"})}),"\n",(0,o.jsx)(n.p,{children:"Logs an error to the console if any of the following are true:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Both ",(0,o.jsx)(n.code,{children:"query"})," and ",(0,o.jsx)(n.code,{children:"defaultQuery"})," props are defined."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"query"})," prop is defined during one render and undefined in a subsequent render."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"query"})," prop is undefined during one render and defined in a subsequent render."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"usedeprecatedprops",children:(0,o.jsx)(n.code,{children:"useDeprecatedProps"})}),"\n",(0,o.jsx)(n.p,{children:"Logs an error to the console if any of the following are true:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"QueryBuilder"})," is rendered with ",(0,o.jsx)(n.code,{children:"independentCombinators"})," prop (see ",(0,o.jsx)(n.a,{href:"../components/querybuilder#independent-combinators",children:"Independent combinators"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"RuleGroup"})," is rendered with ",(0,o.jsx)(n.code,{children:"combinator"})," or ",(0,o.jsx)(n.code,{children:"rules"})," props (deprecated in favor of ",(0,o.jsx)(n.code,{children:"ruleGroup"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Rule"})," is rendered with ",(0,o.jsx)(n.code,{children:"field"}),", ",(0,o.jsx)(n.code,{children:"operator"}),", or ",(0,o.jsx)(n.code,{children:"value"})," props (deprecated in favor of ",(0,o.jsx)(n.code,{children:"rule"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"usereactdndwarning",children:(0,o.jsx)(n.code,{children:"useReactDndWarning"})}),"\n",(0,o.jsxs)(n.p,{children:["Logs an error to the console if the ",(0,o.jsx)(n.code,{children:"enableDragAndDrop"})," prop is ",(0,o.jsx)(n.code,{children:"true"})," but the ",(0,o.jsx)(n.code,{children:"react-dnd"})," and ",(0,o.jsx)(n.code,{children:"react-dnd-html5-backend"})," dependencies are not loaded."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},41485:(e,n,r)=>{r.d(n,{K:()=>s});var o=r(62540);const s=({option:e,disabled:n=!1,text:r})=>(0,o.jsx)("a",{href:`/demo#${e}=${!n}`,children:r||"Click here for demo"+(n?" with this feature disabled":"")})},65404:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(63696);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);