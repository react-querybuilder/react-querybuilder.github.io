"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3455],{15033:(e,n,r)=>{r.d(n,{Ay:()=>i});var o=r(62540),s=r(65404);function t(e){const n={a:"a",blockquote:"blockquote",em:"em",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["Refer to the ",(0,o.jsx)(n.a,{href:"../typescript",children:"TypeScript reference"})," page for information about the types and interfaces referenced below."]})}),"\n"]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},89982:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=r(62540),s=r(65404),t=(r(41485),r(15033));const i={title:"Hooks",description:"Reuse React Query Builder's logic in your own components"},d=void 0,l={id:"utils/hooks",title:"Hooks",description:"Reuse React Query Builder's logic in your own components",source:"@site/versioned_docs/version-6/utils/hooks.mdx",sourceDirName:"utils",slug:"/utils/hooks",permalink:"/docs/6/utils/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/utils/hooks.mdx",tags:[],version:"6",frontMatter:{title:"Hooks",description:"Reuse React Query Builder's logic in your own components"},sidebar:"mySidebar",previous:{title:"Import",permalink:"/docs/6/utils/import"},next:{title:"Validation",permalink:"/docs/6/utils/validation"}},c={},a=[{value:"Component logic",id:"component-logic",level:2},{value:"<code>useQueryBuilder</code>",id:"usequerybuilder",level:3},{value:"<code>useRuleGroup</code>",id:"userulegroup",level:3},{value:"<code>useRule</code>",id:"userule",level:3},{value:"<code>useValueEditor</code>",id:"usevalueeditor",level:3},{value:"<code>useValueSelector</code>",id:"usevalueselector",level:3},{value:"<code>useSelectElementChangeHandler</code>",id:"useselectelementchangehandler",level:3},{value:"<code>useStopEventPropagation</code>",id:"usestopeventpropagation",level:3},{value:"Utilities",id:"utilities",level:2},{value:"<code>useMergedContext</code>",id:"usemergedcontext",level:3},{value:"<code>usePreferProp</code>",id:"usepreferprop",level:3},{value:"<code>usePrevious</code>",id:"useprevious",level:3},{value:"Internal",id:"internal",level:2},{value:"<code>useControlledOrUncontrolled</code>",id:"usecontrolledoruncontrolled",level:3},{value:"<code>useDeprecatedProps</code>",id:"usedeprecatedprops",level:3},{value:"<code>useReactDndWarning</code>",id:"usereactdndwarning",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Ay,{}),"\n",(0,o.jsx)(n.p,{children:"These Hooks are used internally by React Query Builder."}),"\n",(0,o.jsx)(n.h2,{id:"component-logic",children:"Component logic"}),"\n",(0,o.jsx)(n.p,{children:"The core logic of each component is encapsulated in a reusable Hook. Each main component is itself little more than a call to its respective Hook and the JSX that utilizes the properties in the returned object. This enables the creation of one's own presentation layer without having to copy any code from the default components."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@react-querybuilder/native"})," package is a good example of this concept. It calls the Hooks from its own query builder, rule group, and rule components, but nests the sub-components within React Native ",(0,o.jsx)(n.code,{children:"View"})," elements instead of HTML ",(0,o.jsx)(n.code,{children:"div"})," elements like the standard components."]})}),"\n",(0,o.jsx)(n.h3,{id:"usequerybuilder",children:(0,o.jsx)(n.code,{children:"useQueryBuilder"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useQueryBuilder(props: QueryBuilderProps): {\n  actions: QueryActions;\n  query: RuleGroupTypeAny;\n  queryDisabled: boolean;\n  rqbContext: ReturnType<typeof useMergedContext>;\n  schema: Schema;\n  translations: TranslationsFull;\n  wrapperClassName: string;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the ",(0,o.jsx)(n.a,{href:"../components/querybuilder",children:(0,o.jsx)(n.code,{children:"QueryBuilder"})})," component. Returns everything needed to render a wrapper element (e.g. ",(0,o.jsx)(n.code,{children:"<div>"}),") and the root ",(0,o.jsx)(n.a,{href:"../components/rulegroup",children:(0,o.jsx)(n.code,{children:"RuleGroup"})})," element based on the provided props. Generates an ",(0,o.jsx)(n.code,{children:"id"})," for each rule and group in the query hierarchy that doesn't already have one."]}),"\n",(0,o.jsx)(n.h3,{id:"userulegroup",children:(0,o.jsx)(n.code,{children:"useRuleGroup"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useRuleGroup(props: RuleGroupProps): {\n  // See source code for returned properties:\n  // /packages/react-querybuilder/src/hooks/useRuleGroup.ts\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the ",(0,o.jsx)(n.a,{href:"../components/rulegroup",children:(0,o.jsx)(n.code,{children:"RuleGroup"})})," component."]}),"\n",(0,o.jsx)(n.h3,{id:"userule",children:(0,o.jsx)(n.code,{children:"useRule"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useRule(props: RuleProps): {\n  // See source code for returned properties:\n  // /packages/react-querybuilder/src/hooks/useRule.ts\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the ",(0,o.jsx)(n.a,{href:"../components/rule",children:(0,o.jsx)(n.code,{children:"Rule"})})," component."]}),"\n",(0,o.jsx)(n.h3,{id:"usevalueeditor",children:(0,o.jsx)(n.code,{children:"useValueEditor"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useValueEditor(\n  props: Pick<\n    ValueEditorProps,\n    | 'handleOnChange'\n    | 'inputType'\n    | 'operator'\n    | 'value'\n    | 'listsAsArrays'\n    | 'type'\n    | 'values'\n    | 'parseNumbers'\n    | 'skipHook'\n  >\n): { valueAsArray: any[]; multiValueHandler: (val: string, idx: number) => void };\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the ",(0,o.jsx)(n.a,{href:"../components/valueeditor",children:(0,o.jsx)(n.code,{children:"ValueEditor"})})," component. Accepts an object with a subset of ",(0,o.jsx)(n.code,{children:"ValueEditorProps"})," and returns the value as an array and a multi-value handler."]}),"\n",(0,o.jsxs)(n.p,{children:["This Hook updates the ",(0,o.jsx)(n.code,{children:"value"})," as a side effect if the following conditions are true:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"skipHook"})," is ",(0,o.jsx)(n.code,{children:"false"})," (the value editors in the ",(0,o.jsx)(n.a,{href:"../compat",children:"compatibility packages"})," set this to ",(0,o.jsx)(n.code,{children:"true"})," to avoid infinite loops)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"inputType"})," is ",(0,o.jsx)(n.code,{children:'"number"'})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"operator"})," is something other than ",(0,o.jsx)(n.code,{children:'"between"'}),", ",(0,o.jsx)(n.code,{children:'"notBetween"'}),", ",(0,o.jsx)(n.code,{children:'"in"'}),", or ",(0,o.jsx)(n.code,{children:'"notIn"'})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"value"})," is an array or a string containing a comma (",(0,o.jsx)(n.code,{children:","}),")."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If all of those conditions are met, ",(0,o.jsx)(n.code,{children:"handleOnChange"})," will be called with the first element of the array or, if ",(0,o.jsx)(n.code,{children:"value"})," is a string, any characters before the first comma."]}),"\n",(0,o.jsx)(n.h3,{id:"usevalueselector",children:(0,o.jsx)(n.code,{children:"useValueSelector"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useValueSelector(\n  props: Pick<ValueSelectorProps, 'handleOnChange' | 'listsAsArrays' | 'multiple' | 'value'>\n): {\n  onChange: (v: string | string[]) => void;\n  val?: string | any[];\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the ",(0,o.jsx)(n.a,{href:"../components/valueselector",children:(0,o.jsx)(n.code,{children:"ValueSelector"})})," component. Transforms the given value into an array when appropriate and provides a memoized change handler."]}),"\n",(0,o.jsx)(n.h3,{id:"useselectelementchangehandler",children:(0,o.jsx)(n.code,{children:"useSelectElementChangeHandler"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useSelectElementChangeHandler(props: {\n  multiple?: boolean;\n  onChange: (v: string | string[]) => void;\n}): (e: ChangeEvent<HTMLSelectElement>) => void;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the ",(0,o.jsx)(n.a,{href:"../components/valueselector",children:(0,o.jsx)(n.code,{children:"ValueSelector"})})," component. Returns a memoized change handler specifically for HTML ",(0,o.jsx)(n.code,{children:"<select />"})," elements."]}),"\n",(0,o.jsx)(n.h3,{id:"usestopeventpropagation",children:(0,o.jsx)(n.code,{children:"useStopEventPropagation"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useStopEventPropagation(\n  methods: Record<string, (event: React.MouseEvent, context: any) => void>\n): Record<string, (event: React.MouseEvent, context: any) => void>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Used by the default ",(0,o.jsx)(n.a,{href:"../components/rule",children:(0,o.jsx)(n.code,{children:"Rule"})})," and ",(0,o.jsx)(n.a,{href:"../components/rulegroup",children:(0,o.jsx)(n.code,{children:"RuleGroup"})})," components to prevent default behavior and stop propagation of events (e.g., a ",(0,o.jsx)(n.code,{children:"MouseEvent"})," after clicking a ",(0,o.jsx)(n.code,{children:"<button>"}),"). Takes an object where the value of each key is a function taking ",(0,o.jsx)(n.code,{children:"MouseEvent"})," and context parameters; returns the same object with the respective functions having the same signature but calling ",(0,o.jsx)(n.code,{children:"event.preventDefault()"})," and ",(0,o.jsx)(n.code,{children:"event.stopPropagation()"})," first."]}),"\n",(0,o.jsxs)(n.p,{children:["This hook is ",(0,o.jsx)(n.em,{children:"not"})," used in the ",(0,o.jsx)(n.code,{children:"Rule"})," and ",(0,o.jsx)(n.code,{children:"RuleGroup"})," components used/exported by ",(0,o.jsx)(n.code,{children:"@react-querybuilder/native"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"utilities",children:"Utilities"}),"\n",(0,o.jsx)(n.h3,{id:"usemergedcontext",children:(0,o.jsx)(n.code,{children:"useMergedContext"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function useMergedContext(\n  props: QueryBuilderContextProps & { translations: Translations }\n): QueryBuilderContextProps;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Merges the values inherited from the nearest ancestor ",(0,o.jsx)(n.code,{children:"QueryBuilderContext"})," provider with the current component's props."]}),"\n",(0,o.jsx)(n.h3,{id:"usepreferprop",children:(0,o.jsx)(n.code,{children:"usePreferProp"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function usePreferProp(default: boolean, prop?: boolean, context?: boolean): boolean;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Given a default value, a prop value, and a context value (all ",(0,o.jsx)(n.code,{children:"boolean"})," or ",(0,o.jsx)(n.code,{children:"undefined"}),"), returns the first one that is not ",(0,o.jsx)(n.code,{children:"undefined"})," in the order of (1) prop, (2) context, (3) default."]}),"\n",(0,o.jsx)(n.h3,{id:"useprevious",children:(0,o.jsx)(n.code,{children:"usePrevious"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function usePrevious<T>(prop: T): T | null;\n"})}),"\n",(0,o.jsx)(n.p,{children:"Returns the value of a prop or state variable from the previous render."}),"\n",(0,o.jsx)(n.h2,{id:"internal",children:"Internal"}),"\n",(0,o.jsx)(n.p,{children:"These Hooks log error messages to the console in certain situations (in development mode only). They encourage correct usage of React Query Builder and are not intended to be used in custom components."}),"\n",(0,o.jsx)(n.h3,{id:"usecontrolledoruncontrolled",children:(0,o.jsx)(n.code,{children:"useControlledOrUncontrolled"})}),"\n",(0,o.jsx)(n.p,{children:"Logs an error to the console if any of the following are true:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Both ",(0,o.jsx)(n.code,{children:"query"})," and ",(0,o.jsx)(n.code,{children:"defaultQuery"})," props are defined."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"query"})," prop is defined during the first render and undefined in a subsequent render."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"query"})," prop is undefined during the first render and defined in a subsequent render."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"usedeprecatedprops",children:(0,o.jsx)(n.code,{children:"useDeprecatedProps"})}),"\n",(0,o.jsxs)(n.p,{children:["Logs an error to the console if a ",(0,o.jsx)(n.code,{children:"RuleGroup"})," component is rendered with ",(0,o.jsx)(n.code,{children:"combinator"})," or ",(0,o.jsx)(n.code,{children:"rules"})," props, or if a ",(0,o.jsx)(n.code,{children:"Rule"})," component is rendered with ",(0,o.jsx)(n.code,{children:"field"}),", ",(0,o.jsx)(n.code,{children:"operator"}),", or ",(0,o.jsx)(n.code,{children:"value"})," props. These props are deprecated in favor of ",(0,o.jsx)(n.code,{children:"ruleGroup"})," and ",(0,o.jsx)(n.code,{children:"rule"}),", respectively."]}),"\n",(0,o.jsx)(n.h3,{id:"usereactdndwarning",children:(0,o.jsx)(n.code,{children:"useReactDndWarning"})}),"\n",(0,o.jsxs)(n.p,{children:["Logs an error to the console if the ",(0,o.jsx)(n.code,{children:"enableDragAndDrop"})," prop is ",(0,o.jsx)(n.code,{children:"true"})," but the ",(0,o.jsx)(n.code,{children:"react-dnd"})," and ",(0,o.jsx)(n.code,{children:"react-dnd-html5-backend"})," dependencies are not loaded."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},41485:(e,n,r)=>{r.d(n,{K:()=>s});var o=r(62540);const s=({option:e,disabled:n=!1,text:r})=>(0,o.jsx)("a",{href:`/demo#${e}=${!n}`,children:r||"Click here for demo"+(n?" with this feature disabled":"")})},65404:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var o=r(63696);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);