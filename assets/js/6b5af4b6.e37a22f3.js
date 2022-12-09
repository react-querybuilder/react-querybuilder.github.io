"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1750],{41514:(e,t,n)=>{n.d(t,{L:()=>a});var r=n(67294);const a=e=>{let{option:t,disabled:n=!1,text:a}=e;return r.createElement("a",{href:"/demo#"+t+"="+!n},a||"Click here for demo"+(n?" with this feature disabled":""))}},44830:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(83117),a=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../typescript"},"TypeScript")," page for information about the types and interfaces referenced below.")))}i.isMDXComponent=!0},78601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(83117),a=(n(67294),n(3905)),o=n(41514),i=n(44830);const l={title:"Miscellaneous",hide_table_of_contents:!0,description:"Assorted utilities and other exports"},p=void 0,u={unversionedId:"api/misc",id:"version-5/api/misc",title:"Miscellaneous",description:"Assorted utilities and other exports",source:"@site/versioned_docs/version-5/api/misc.mdx",sourceDirName:"api",slug:"/api/misc",permalink:"/docs/api/misc",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/api/misc.mdx",tags:[],version:"5",frontMatter:{title:"Miscellaneous",hide_table_of_contents:!0,description:"Assorted utilities and other exports"},sidebar:"mySidebar",previous:{title:"Validation",permalink:"/docs/api/validation"},next:{title:"Tips & Tricks",permalink:"/docs/category/tips--tricks"}},s={},d=[{value:"Utilities",id:"utilities",level:2},{value:"<code>transformQuery</code>",id:"transformquery",level:3},{value:"<code>defaultValidator</code>",id:"defaultvalidator",level:3},{value:"<code>findPath</code>",id:"findpath",level:3},{value:"<code>convertQuery</code>",id:"convertquery",level:3},{value:"Query tools",id:"query-tools",level:2},{value:"<code>add</code>",id:"add",level:3},{value:"<code>remove</code>",id:"remove",level:3},{value:"<code>update</code>",id:"update",level:3},{value:"<code>move</code>",id:"move",level:3},{value:"Defaults",id:"defaults",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"TypeScriptAdmonition"}),(0,a.kt)("p",null,"A non-comprehensive list of exports from ",(0,a.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),"."),(0,a.kt)("h2",{id:"utilities"},"Utilities"),(0,a.kt)("h3",{id:"transformquery"},(0,a.kt)("inlineCode",{parentName:"h3"},"transformQuery")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function transformQuery(query: RuleGroupTypeAny, options: QueryTransformerOptions): any;\n")),(0,a.kt)("p",null,"This function recursively steps through a query object (",(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupType")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),"), passing each ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleType")," object to a provided ",(0,a.kt)("inlineCode",{parentName:"p"},"ruleProcessor")," function. Available options include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ruleProcessor"),": Custom processing for each rule."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ruleGroupProcessor"),": Custom processing for each rule group. (The ",(0,a.kt)("inlineCode",{parentName:"li"},"rules")," property will be retained.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"propertyMap"),": Keys in the rule or group objects that match keys in this object will be renamed to the corresponding value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"combinatorMap"),": Best explained with an example: ",(0,a.kt)("inlineCode",{parentName:"li"},'{and: "&&", or: "||"}'),' would translate "and"/"or" combinators to "&&"/"||", respectively.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operatorMap"),": Convert operators that match the keys in this object to the corresponding values, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'{"=": "=="}'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deleteRemappedProperties"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"; pass ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," to leave the remapped properties ",(0,a.kt)("em",{parentName:"li"},"and")," the original properties in the resulting object.")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/react-querybuilder/src/utils/transformQuery.test.ts"},"test suite")," for example usage."),(0,a.kt)("h3",{id:"defaultvalidator"},(0,a.kt)("inlineCode",{parentName:"h3"},"defaultValidator")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function defaultValidator(query: RuleGroupTypeAny): {\n  [id: string]: { valid: boolean; reasons?: string[] };\n};\n")),(0,a.kt)("p",null,"Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"validator={defaultValidator}")," to automatically validate groups (rules will be ignored). A group will be marked invalid if either 1) it has no child rules or groups (",(0,a.kt)("inlineCode",{parentName:"p"},"query.rules.length === 0"),"), or 2) it has a missing/invalid ",(0,a.kt)("inlineCode",{parentName:"p"},"combinator")," and more than one child rule or group (",(0,a.kt)("inlineCode",{parentName:"p"},"rules.length >= 2"),")."),(0,a.kt)("p",null,"You can see an example of the default validator in action in the ",(0,a.kt)("a",{parentName:"p",href:"/demo"},"demo")," if you check the ",(0,a.kt)(o.L,{option:"validateQuery",text:"'Use validation' option",mdxType:"DemoLink"}),'. Empty groups will have bold text on their "+Rule" button and a description of the situation where the rules normally appear.'),(0,a.kt)("h3",{id:"findpath"},(0,a.kt)("inlineCode",{parentName:"h3"},"findPath")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function findPath(path: number[], query: RuleGroupTypeAny): RuleType | RuleGroupTypeAny;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"findPath")," is a utility function for finding the rule or group within the query hierarchy that has a given ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),". Useful in custom ",(0,a.kt)("a",{parentName:"p",href:"./querybuilder#onaddrule"},(0,a.kt)("inlineCode",{parentName:"a"},"onAddRule"))," and ",(0,a.kt)("a",{parentName:"p",href:"./querybuilder#onaddgroup"},(0,a.kt)("inlineCode",{parentName:"a"},"onAddGroup"))," functions."),(0,a.kt)("h3",{id:"convertquery"},(0,a.kt)("inlineCode",{parentName:"h3"},"convertQuery")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function convertQuery(query: RuleGroupType): RuleGroupTypeIC;\n// OR\nfunction convertQuery(query: RuleGroupTypeIC): RuleGroupType;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"convertQuery")," toggles a query between the conventional ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupType"),' structure (with combinators at the group level) and the "independent combinators" structure (',(0,a.kt)("inlineCode",{parentName:"p"},"RuleGroupTypeIC"),", used with the ",(0,a.kt)("a",{parentName:"p",href:"./querybuilder#independentcombinators"},(0,a.kt)("inlineCode",{parentName:"a"},"independentCombinators")," prop"),")."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"convertToIC")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"convertFromIC")," do the same thing as ",(0,a.kt)("inlineCode",{parentName:"p"},"convertQuery"),", but only in the directions indicated by their respective names."),(0,a.kt)("h2",{id:"query-tools"},"Query tools"),(0,a.kt)("p",null,"Several methods are available to assist with programmatic manipulation of query objects. These methods are used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component itself, so they are guaranteed to achieve the same result as a corresponding UI-based update. Each of these methods returns the modified query."),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"../tips/external-controls"},'"External controls" Tips & Tricks page')," to see these methods used outside the context of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component."),(0,a.kt)("h3",{id:"add"},(0,a.kt)("inlineCode",{parentName:"h3"},"add")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(query: RuleGroupTypeAny, ruleOrGroup: RuleGroupTypeAny | RuleType, path: number[], options: AddOptions) => RuleGroupTypeAny")),(0,a.kt)("p",null,"Adds a rule or group (and an independent combinator if necessary, to keep the query valid)."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("code",null,"AddOptions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface AddOptions {\n  /** Only applicable for `RuleGroupTypeIC`. Default is `defaultCombinators`. */\n  combinators?: NameLabelPair[] | OptionGroup[];\n}\n"))),(0,a.kt)("h3",{id:"remove"},(0,a.kt)("inlineCode",{parentName:"h3"},"remove")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(query: RuleGroupTypeAny, path: number[]) => RuleGroupTypeAny")),(0,a.kt)("p",null,"Removes a rule or group (and the preceding independent combinator, if one exists)."),(0,a.kt)("h3",{id:"update"},(0,a.kt)("inlineCode",{parentName:"h3"},"update")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(query: RuleGroupTypeAny, prop: string, value: any, path: number[], options: UpdateOptions) => RuleGroupTypeAny")),(0,a.kt)("p",null,"Updates a property of a rule or group, or updates an independent combinator."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("code",null,"UpdateOptions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface UpdateOptions {\n  /** Resets `operator` and `value` when `field` changes. Default is `true`. */\n  resetOnFieldChange?: boolean;\n  /** Resets `value` when `operator` changes. Default is `false`. */\n  resetOnOperatorChange?: boolean;\n  /** Determines the default operator name for a given field. */\n  getRuleDefaultOperator?: (field: string) => string;\n  /** Determines the valid value sources for a given field and operator. */\n  getValueSources?: (field: string, operator: string) => ValueSources;\n  /** Used when the `value` property is reset (see `resetOn*Change` options). */\n  getRuleDefaultValue?: (rule: RuleType) => any;\n}\n"))),(0,a.kt)("h3",{id:"move"},(0,a.kt)("inlineCode",{parentName:"h3"},"move")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(query: RuleGroupTypeAny, oldPath: number[], newPath: number[], options: MoveOptions) => RuleGroupTypeAny")),(0,a.kt)("p",null,"Moves (or clones, with a new ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),") a rule or group to a new location in the query tree."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("code",null,"MoveOptions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface MoveOptions {\n  /** Copy the source rule/group instead of move. Default is `false`. */\n  clone?: boolean;\n  /** Only applicable for `RuleGroupTypeIC`. Default is `defaultCombinators`. */\n  combinators?: NameLabelPair[] | OptionGroup[];\n}\n"))),(0,a.kt)("h2",{id:"defaults"},"Defaults"),(0,a.kt)("p",null,"The following default configuration objects are exported for convenience."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultCombinators")," (see ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#combinators"},(0,a.kt)("inlineCode",{parentName:"a"},"combinators")," prop"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultOperators")," (see ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#operators"},(0,a.kt)("inlineCode",{parentName:"a"},"operators")," prop"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultTranslations")," (see ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#translations"},(0,a.kt)("inlineCode",{parentName:"a"},"translations")," prop"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultValueProcessor")," and variants for non-SQL formats (see ",(0,a.kt)("a",{parentName:"li",href:"./export"},"Export")," > ",(0,a.kt)("a",{parentName:"li",href:"./export#value-processor"},"Value processor"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultFields")," (see ",(0,a.kt)("a",{parentName:"li",href:"./querybuilder#fields"},(0,a.kt)("inlineCode",{parentName:"a"},"fields")," prop"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"standardClassnames")," (see ",(0,a.kt)("a",{parentName:"li",href:"./classnames"},"CSS classes"),")")),(0,a.kt)("p",null,"The default components are also exported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ActionElement")," - used for action buttons (to add rules, remove groups, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DragHandle")," - used for the drag handle on rules and group headers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InlineCombinator")," - used when either ",(0,a.kt)("inlineCode",{parentName:"li"},"showCombinatorsBetweenRules")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"independentCombinators")," are ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NotToggle"),' - used for the "Invert this group" toggle switch'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Rule")," - the default rule component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RuleGroup")," - the default rule group component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValueEditor")," - the default ",(0,a.kt)("inlineCode",{parentName:"li"},"valueEditor")," component"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValueSelector")," - used for drop-down lists (combinator, field, and operator selectors)")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);