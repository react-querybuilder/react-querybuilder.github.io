"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7888],{45179:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=n(71948),o=n(63460),s=n(67784),i=n(38056);const l={title:"Miscellaneous",hide_table_of_contents:!0,description:"Assorted utilities and other exports"},c=void 0,d={id:"utils/misc",title:"Miscellaneous",description:"Assorted utilities and other exports",source:"@site/docs/utils/misc.mdx",sourceDirName:"utils",slug:"/utils/misc",permalink:"/docs/next/utils/misc",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/utils/misc.mdx",tags:[],version:"current",frontMatter:{title:"Miscellaneous",hide_table_of_contents:!0,description:"Assorted utilities and other exports"},sidebar:"mySidebar",previous:{title:"Validation",permalink:"/docs/next/utils/validation"},next:{title:"Tips & tricks",permalink:"/docs/next/category/tips--tricks"}},a={},u=[{value:"Utilities",id:"utilities",level:2},{value:"<code>transformQuery</code>",id:"transformquery",level:3},{value:"<code>defaultValidator</code>",id:"defaultvalidator",level:3},{value:"<code>findPath</code>",id:"findpath",level:3},{value:"<code>convertQuery</code>",id:"convertquery",level:3},{value:"Query tools",id:"query-tools",level:2},{value:"<code>add</code>",id:"add",level:3},{value:"<code>remove</code>",id:"remove",level:3},{value:"<code>update</code>",id:"update",level:3},{value:"<code>move</code>",id:"move",level:3},{value:"Defaults",id:"defaults",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.em,{children:["Refer to the ",(0,t.jsx)(r.a,{href:"../typescript",children:"TypeScript reference"})," page for information about the types and interfaces referenced below."]})}),"\n"]})}),"\n",(0,t.jsxs)(r.p,{children:["A non-comprehensive list of exports from ",(0,t.jsx)(r.code,{children:"react-querybuilder"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"utilities",children:"Utilities"}),"\n",(0,t.jsx)(r.h3,{id:"transformquery",children:(0,t.jsx)(r.code,{children:"transformQuery"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"function transformQuery(query: RuleGroupTypeAny, options: QueryTransformerOptions): any;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This function recursively steps through a query object (",(0,t.jsx)(r.code,{children:"RuleGroupType"})," or ",(0,t.jsx)(r.code,{children:"RuleGroupTypeIC"}),"), passing each ",(0,t.jsx)(r.code,{children:"RuleType"})," object to a provided ",(0,t.jsx)(r.code,{children:"ruleProcessor"})," function. Available options include:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"ruleProcessor"}),": Custom processing for each rule."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"ruleGroupProcessor"}),": Custom processing for each rule group. Each group's ",(0,t.jsx)(r.code,{children:"rules"})," property will be retained and recursively processed regardless of any other mutations."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"propertyMap"}),": Keys in the rule or group objects that match keys in this object will be renamed to the corresponding value."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"combinatorMap"}),": Best explained with an example: ",(0,t.jsx)(r.code,{children:'{and: "&&", or: "||"}'}),' would translate "and"/"or" combinators to "&&"/"||", respectively.']}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"operatorMap"}),": Convert operators that match the keys in this object to the corresponding values, e.g. ",(0,t.jsx)(r.code,{children:'{"=": "=="}'}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"deleteRemappedProperties"}),": Defaults to ",(0,t.jsx)(r.code,{children:"true"}),"; pass ",(0,t.jsx)(r.code,{children:"false"})," to leave the remapped properties ",(0,t.jsx)(r.em,{children:"and"})," the original properties in the resulting object."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/utils/transformQuery.test.ts",children:"test suite"})," for example usage."]}),"\n",(0,t.jsx)(r.h3,{id:"defaultvalidator",children:(0,t.jsx)(r.code,{children:"defaultValidator"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"function defaultValidator(query: RuleGroupTypeAny): {\n  [id: string]: { valid: boolean; reasons?: string[] };\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Pass ",(0,t.jsx)(r.code,{children:"validator={defaultValidator}"})," to automatically validate groups (rules will be ignored). A group will be marked invalid if either of the following are true:"]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["The group has no child rules or groups (",(0,t.jsx)(r.code,{children:"query.rules.length === 0"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["The group has a missing/invalid ",(0,t.jsx)(r.code,{children:"combinator"})," property and more than one child rule or group (",(0,t.jsx)(r.code,{children:"rules.length >= 2"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["You can see an example of the default validator in action in the ",(0,t.jsx)(r.a,{href:"/demo",children:"demo"})," if you check the ",(0,t.jsx)(s.k,{option:"validateQuery",text:"'Use validation' option"}),'. Empty groups will have bold text on their "+ Rule" button and a description of the situation where the rules normally appear.']}),"\n",(0,t.jsx)(r.h3,{id:"findpath",children:(0,t.jsx)(r.code,{children:"findPath"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"function findPath(path: Path, query: RuleGroupTypeAny): RuleType | RuleGroupTypeAny;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"findPath"})," is a utility function for finding the rule or group within the query hierarchy that has a given ",(0,t.jsx)(r.code,{children:"path"}),". Useful in custom ",(0,t.jsx)(r.a,{href:"../components/querybuilder#onaddrule",children:(0,t.jsx)(r.code,{children:"onAddRule"})})," and ",(0,t.jsx)(r.a,{href:"../components/querybuilder#onaddgroup",children:(0,t.jsx)(r.code,{children:"onAddGroup"})})," functions."]}),"\n",(0,t.jsxs)(r.p,{children:["More extensive documentation on the ",(0,t.jsx)(r.code,{children:"path"})," property is ",(0,t.jsx)(r.a,{href:"../tips/path",children:"here"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"convertquery",children:(0,t.jsx)(r.code,{children:"convertQuery"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"function convertQuery(query: RuleGroupType): RuleGroupTypeIC;\n// OR\nfunction convertQuery(query: RuleGroupTypeIC): RuleGroupType;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"convertQuery"})," toggles a query between the conventional ",(0,t.jsx)(r.code,{children:"RuleGroupType"}),' structure\u2013with combinators at the group level\u2013and the "independent combinators" structure ',(0,t.jsx)(r.code,{children:"RuleGroupTypeIC"}),"\u2013with combinators between every other rule/group."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"convertToIC"})," and ",(0,t.jsx)(r.code,{children:"convertFromIC"})," do the same thing as ",(0,t.jsx)(r.code,{children:"convertQuery"}),", but only in the directions indicated by their respective names."]}),"\n",(0,t.jsx)(r.h2,{id:"query-tools",children:"Query tools"}),"\n",(0,t.jsxs)(r.p,{children:["Several methods are available to assist with programmatic manipulation of query objects. These methods are used by the ",(0,t.jsx)(r.code,{children:"<QueryBuilder />"})," component itself, so they are guaranteed to achieve the same result as a corresponding UI-based update. Each of these methods returns the modified query."]}),"\n",(0,t.jsxs)(r.p,{children:["Check out the ",(0,t.jsx)(r.a,{href:"../tips/external-controls",children:'"External controls" Tips & Tricks page'})," to see these methods used outside the context of the ",(0,t.jsx)(r.code,{children:"<QueryBuilder />"})," component."]}),"\n",(0,t.jsx)(r.h3,{id:"add",children:(0,t.jsx)(r.code,{children:"add"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"(query: RuleGroupTypeAny, ruleOrGroup: RuleGroupTypeAny | RuleType, path: Path, options: AddOptions) => RuleGroupTypeAny"})}),"\n",(0,t.jsx)(r.p,{children:"Adds a rule or group (and an independent combinator if necessary, to keep the query valid)."}),"\n",(0,t.jsx)(i.c,{summary:"AddOptions",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"interface AddOptions {\n  /** Only applicable for `RuleGroupTypeIC`. Default is `defaultCombinators`. */\n  combinators?: OptionList;\n}\n"})})}),"\n",(0,t.jsx)(r.h3,{id:"remove",children:(0,t.jsx)(r.code,{children:"remove"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"(query: RuleGroupTypeAny, path: Path) => RuleGroupTypeAny"})}),"\n",(0,t.jsx)(r.p,{children:"Removes a rule or group (and the preceding independent combinator, if one exists)."}),"\n",(0,t.jsx)(r.h3,{id:"update",children:(0,t.jsx)(r.code,{children:"update"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"(query: RuleGroupTypeAny, prop: string, value: any, path: Path, options: UpdateOptions) => RuleGroupTypeAny"})}),"\n",(0,t.jsx)(r.p,{children:"Updates a property of a rule or group, or updates an independent combinator."}),"\n",(0,t.jsx)(i.c,{summary:"UpdateOptions",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"interface UpdateOptions {\n  /** Resets `operator` and `value` when `field` changes. Default is `true`. */\n  resetOnFieldChange?: boolean;\n  /** Resets `value` when `operator` changes. Default is `false`. */\n  resetOnOperatorChange?: boolean;\n  /** Determines the default operator name for a given field. */\n  getRuleDefaultOperator?: (field: string) => string;\n  /** Determines the valid value sources for a given field and operator. */\n  getValueSources?: (field: string, operator: string) => ValueSources;\n  /** Used when the `value` property is reset (see `resetOn*Change` options). */\n  getRuleDefaultValue?: (rule: RuleType) => any;\n}\n"})})}),"\n",(0,t.jsx)(r.h3,{id:"move",children:(0,t.jsx)(r.code,{children:"move"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"(query: RuleGroupTypeAny, oldPath: Path, newPath: Path, options: MoveOptions) => RuleGroupTypeAny"})}),"\n",(0,t.jsxs)(r.p,{children:["Moves (or clones, with a new ",(0,t.jsx)(r.code,{children:"id"}),") a rule or group to a new location in the query tree."]}),"\n",(0,t.jsx)(i.c,{summary:"MoveOptions",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"interface MoveOptions {\n  /** Copy the source rule/group instead of move. Default is `false`. */\n  clone?: boolean;\n  /** Only applicable for `RuleGroupTypeIC`. Default is `defaultCombinators`. */\n  combinators?: OptionList;\n}\n"})})}),"\n",(0,t.jsx)(r.h2,{id:"defaults",children:"Defaults"}),"\n",(0,t.jsx)(r.p,{children:"The default configuration objects are exported for convenience, including the following."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"defaultCombinators"})," (see ",(0,t.jsxs)(r.a,{href:"../components/querybuilder#combinators",children:[(0,t.jsx)(r.code,{children:"combinators"})," prop"]}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"defaultOperators"})," (see ",(0,t.jsxs)(r.a,{href:"../components/querybuilder#operators",children:[(0,t.jsx)(r.code,{children:"operators"})," prop"]}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"defaultTranslations"})," (see ",(0,t.jsxs)(r.a,{href:"../components/querybuilder#translations",children:[(0,t.jsx)(r.code,{children:"translations"})," prop"]}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"defaultValueProcessor"})," and variants for non-SQL formats (see ",(0,t.jsx)(r.a,{href:"./export",children:"Export"})," > ",(0,t.jsx)(r.a,{href:"./export#value-processor",children:"Value processor"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"defaultFields"})," (see ",(0,t.jsxs)(r.a,{href:"../components/querybuilder#fields",children:[(0,t.jsx)(r.code,{children:"fields"})," prop"]}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"standardClassnames"})," (see ",(0,t.jsx)(r.a,{href:"../styling/classnames",children:"CSS classes"}),")"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"The default components are also exported:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/actionelement",children:(0,t.jsx)(r.code,{children:"ActionElement"})})," - used for action buttons (to add rules, remove groups, etc.)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/draghandle",children:(0,t.jsx)(r.code,{children:"DragHandle"})})," - used for the drag handle on rules and group headers"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/rulegroup",children:(0,t.jsx)(r.code,{children:"InlineCombinator"})})," - used when either ",(0,t.jsx)(r.a,{href:"../components/querybuilder#showcombinatorsbetweenrules",children:(0,t.jsx)(r.code,{children:"showCombinatorsBetweenRules"})})," is ",(0,t.jsx)(r.code,{children:"true"})," or the query is using independent combinators."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/nottoggle",children:(0,t.jsx)(r.code,{children:"NotToggle"})}),' - used for the "Invert this group" toggle switch']}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/rule",children:(0,t.jsx)(r.code,{children:"Rule"})})," - the default rule component"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/rulegroup",children:(0,t.jsx)(r.code,{children:"RuleGroup"})})," - the default rule group component"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/shiftactions",children:(0,t.jsx)(r.code,{children:"ShiftActions"})}),' - used for the "shift up"/"shift down" buttons when ',(0,t.jsx)(r.a,{href:"../components/querybuilder#showshiftactions",children:(0,t.jsx)(r.code,{children:"showShiftActions"})})," is ",(0,t.jsx)(r.code,{children:"true"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/valueeditor",children:(0,t.jsx)(r.code,{children:"ValueEditor"})})," - the default ",(0,t.jsx)(r.code,{children:"valueEditor"})," component"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../components/valueselector",children:(0,t.jsx)(r.code,{children:"ValueSelector"})})," - used for drop-down lists (combinator, field, and operator selectors)"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,o.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},38056:(e,r,n)=>{n.d(r,{c:()=>v});var t=n(71948),o=n(96952),s=n(68112),i=n(75964),l=n(77904),c=n(12896);const d={details:"details_IpIu",isBrowser:"isBrowser_QD4r",collapsibleContent:"collapsibleContent_Fd2D"};function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function h(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function j(e,r){return!!e&&(e===r||j(e.parentElement,r))}function f(e){var{summary:r,children:n}=e,f=h(e,["summary","children"]);(0,i.c)().collectAnchor(f.id);const x=(0,l.c)(),y=(0,o.useRef)(null),{collapsed:m,setCollapsed:b}=(0,c.a)({initialState:!f.open}),[g,v]=(0,o.useState)(f.open),O=o.isValidElement(r)?r:(0,t.jsx)("summary",{children:null!=r?r:"Details"});return(0,t.jsxs)("details",u(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({},f),{ref:y,open:g,"data-collapsed":m,className:(0,s.c)(d.details,x&&d.isBrowser,f.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const r=e.target;p(r)&&j(r,y.current)&&(e.preventDefault(),m?(b(!1),v(!0)):b(!0))},children:[O,(0,t.jsx)(c.U,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),v(!e)},children:(0,t.jsx)("div",{className:d.collapsibleContent,children:n})})]}))}const x={details:"details_jERq"};function y(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)}function b(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}const g="alert alert--info";function v(e){var r=m({},function(e){if(null==e)throw new TypeError("Cannot destructure "+e);return e}(e));return(0,t.jsx)(f,b(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){y(e,r,n[r])}))}return e}({},r),{className:(0,s.c)(g,x.details,r.className)}))}},67784:(e,r,n)=>{n.d(r,{k:()=>o});var t=n(71948);const o=({option:e,disabled:r=!1,text:n})=>(0,t.jsx)("a",{href:`/demo#${e}=${!r}`,children:n||"Click here for demo"+(r?" with this feature disabled":"")})},63460:(e,r,n)=>{n.d(r,{I:()=>l,M:()=>i});var t=n(96952);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);