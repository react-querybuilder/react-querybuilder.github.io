"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9241],{26482:(e,t,l)=>{l.d(t,{e:()=>i});var r=l(67294),o=l(61785),n=l(3612),a=l(43256);const i=e=>{let{version:t,...l}=e;const i=4===t?n.zk:5===t?a.zk:o.zk;return r.createElement("div",{key:`v${t??5}`,className:"queryBuilderEmbed"},r.createElement(i,l))}},26416:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var r=l(83117),o=(l(67294),l(3905)),n=l(98265),a=l(26482),i=l(61785);const d={title:"CSS classes",hide_table_of_contents:!0,description:"Visual guide to CSS classes for each component element"},s=void 0,u={unversionedId:"api/classnames",id:"version-5/api/classnames",title:"CSS classes",description:"Visual guide to CSS classes for each component element",source:"@site/versioned_docs/version-5/api/classnames.mdx",sourceDirName:"api",slug:"/api/classnames",permalink:"/docs/api/classnames",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/api/classnames.mdx",tags:[],version:"5",frontMatter:{title:"CSS classes",hide_table_of_contents:!0,description:"Visual guide to CSS classes for each component element"},sidebar:"mySidebar",previous:{title:"<ValueEditor />",permalink:"/docs/api/valueeditor"},next:{title:"Export",permalink:"/docs/api/export"}},p={},c=[],m={toc:c};function b(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component assigns ",(0,o.kt)("a",{parentName:"p",href:"./misc#defaults"},"standard classes")," to each element. In the (fully operational) query builder below, the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," for each element have been set to the element's standard class."),(0,o.kt)("p",null,"The following standard classnames are not labeled below, but for most of them the elements they apply to can be identified by outline color:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".queryBuilder")," (",(0,o.kt)("code",{style:{fontWeight:"bold",color:"black",backgroundColor:"white",fontFamily:"unset",borderColor:"white"}},"black")," outline; the outer-most ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"maroon"}},"maroon")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup-header")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"rebeccapurple"}},"purple")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup-body")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"blue"}},"blue")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-disabled")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"gray"}},"gray")," outline for locked/disabled rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-valid")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"green"}},"green")," outline for valid rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-invalid")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"red"}},"red")," outline for invalid rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".dndDragging"),' (applied to "preview" element while dragging)'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".dndOver"),' (applied to "hovered over" element while dragging)')),(0,o.kt)(n.yC,{mdxType:"QueryBuilderDnD"},(0,o.kt)(a.e,{showNotToggle:!0,showCloneButtons:!0,showLockButtons:!0,enableDragAndDrop:!0,fields:[{name:"f1",label:`.${i.q0.fields}`,defaultValue:"This rule is valid",validator:()=>!0},{name:"f2",label:`.${i.q0.fields}`,defaultValue:"This rule is invalid",validator:()=>!1},{name:"f3",label:`.${i.q0.valueSource}`,valueSources:["value","field"]},{name:"fb1",label:"Value list",operators:[{name:"between",label:"between"}],valueSources:["field","value"],comparator:e=>"fb2"===e.name},{name:"fb2",label:`.${i.q0.valueListItem}`}],combinators:[{name:"and",label:`.${i.q0.combinators}`}],getOperators:()=>[{name:"=",label:`.${i.q0.operators}`}],controlClassnames:{queryBuilder:"rqb-structure"},translations:{fields:{title:`.${i.q0.fields}`},operators:{title:`.${i.q0.operators}`},value:{title:`.${i.q0.value}`},removeRule:{label:`.${i.q0.removeRule}`,title:`.${i.q0.removeRule}`},removeGroup:{label:`.${i.q0.removeGroup}`,title:`.${i.q0.removeGroup}`},addRule:{label:`.${i.q0.addRule}`,title:`.${i.q0.addRule}`},addGroup:{label:`.${i.q0.addGroup}`,title:`.${i.q0.addGroup}`},combinators:{title:`.${i.q0.combinators}`},notToggle:{label:`.${i.q0.notToggle}`,title:`.${i.q0.notToggle}`},cloneRule:{label:`.${i.q0.cloneRule}`,title:`.${i.q0.cloneRule}`},cloneRuleGroup:{label:`.${i.q0.cloneGroup}`,title:`.${i.q0.cloneGroup}`},dragHandle:{label:`.${i.q0.dragHandle}`,title:`.${i.q0.dragHandle}`},lockRule:{label:`.${i.q0.lockRule}`,title:`.${i.q0.lockRule}`},lockGroup:{label:`.${i.q0.lockGroup}`,title:`.${i.q0.lockGroup}`},lockRuleDisabled:{label:`.${i.q0.lockRuleDisabled}`,title:`.${i.q0.lockRuleDisabled}`},lockGroupDisabled:{label:`.${i.q0.lockGroupDisabled}`,title:`.${i.q0.lockGroupDisabled}`},valueSourceSelector:{title:`.${i.q0.valueSource}`}},defaultQuery:{combinator:"and",rules:[{field:"f1",operator:"=",value:`.${i.q0.value}`},{combinator:"and",rules:[{field:"f1",operator:"=",value:"This rule is valid"},{field:"f2",operator:"=",value:"This rule is invalid"},{disabled:!0,combinator:"and",rules:[{field:"f1",operator:"=",value:"This rule's group is disabled, therefore this rule is also disabled"}]}]},{field:"f3",operator:"=",value:"f1"},{field:"fb1",operator:"between",value:"fb2,fb2",valueSource:"field"}]},mdxType:"QueryBuilderEmbed"})))}b.isMDXComponent=!0},98265:(e,t,l)=>{l.d(t,{yC:()=>g});var r=l(85893),o=l(67294),n=l(61785);const a=e=>{const[t,r]=(0,o.useState)(e??null);return(0,o.useEffect)((()=>{let e=!1;return t||(async()=>{const[t,o]=await Promise.all([Promise.all([l.e(4891),l.e(5413)]).then(l.bind(l,15413)).catch((()=>null)),l.e(2250).then(l.bind(l,42250)).catch((()=>null))]);e||t&&o&&r((()=>({...t,...o})))})(),()=>{e=!0}}),[]),t},i=({type:e,path:t,disabled:l,moveRule:r,useDrag:o})=>o((()=>({type:e,item:{path:t},canDrag:!l,collect:e=>({isDragging:!l&&e.isDragging(),dragMonitorId:e.getHandlerId()??""}),end(e,t){const l=t.getDropResult();if(!l)return;const o=(0,n.Il)(l.path),a=l.path[l.path.length-1],i="ruleGroup"===l.type?[...l.path,0]:"inlineCombinator"===l.type?[...o,a]:[...o,a+1];r(e.path,i,"copy"===l.dropEffect)}})),[l,t]),{rule:d,ruleGroup:s,combinatorSelector:u}=n.PN,p=(0,o.createContext)({baseControls:{rule:d,ruleGroup:s,combinatorSelector:u}});p.displayName="QueryBuilderDndContext";const c=({component:e,path:t,independentCombinators:l,...a})=>{const{useDrop:i}=(0,o.useContext)(p),{dropRef:d,dropMonitorId:s,isOver:u}=(({path:e,independentCombinators:t,useDrop:l})=>{const r=(0,o.useRef)(null),[{isOver:a,dropMonitorId:i},d]=l((()=>({accept:["rule","ruleGroup"],canDrop:l=>{const r=(0,n.Il)(e),o=(0,n.Il)(l.path),a=e[e.length-1],i=l.path[l.path.length-1];return!((0,n.jg)(l.path,e)||(0,n.H4)(l.path,e)||(0,n.H4)(r,o)&&a-1===i||t&&(0,n.H4)(r,o)&&a===i-1)},collect:e=>({isOver:e.canDrop()&&e.isOver(),dropMonitorId:e.getHandlerId()??"",dropEffect:(e.getDropResult()??{}).dropEffect}),drop:()=>({type:"inlineCombinator",path:e})})),[e,t]);return d(r),{dropRef:r,dropMonitorId:i,isOver:a}})({path:t,independentCombinators:l,useDrop:i}),c=u?n.q0.dndOver:"",m=`${n.q0.betweenRules}${c?` ${c}`:""}`;return(0,r.jsx)("div",{ref:d,className:m,"data-dropmonitorid":s,"data-testid":n.O3.inlineCombinator,children:(0,r.jsx)(e,{...a,path:t,testID:n.O3.combinators})},"dnd")};c.displayName="InlineCombinatorDnD";const m=e=>{const t=(0,o.useContext)(p),{useDrag:l,useDrop:a}=t,{path:d,disabled:s,parentDisabled:u,actions:{moveRule:c},schema:{independentCombinators:m}}=e,b=(({path:e,disabled:t,independentCombinators:l,moveRule:r,useDrag:a,useDrop:d})=>{const s=(0,o.useRef)(null),u=(0,o.useRef)(null),[{isDragging:p,dragMonitorId:c},m,b]=i({type:"rule",path:e,disabled:t,independentCombinators:l,moveRule:r,useDrag:a}),[{isOver:g,dropMonitorId:h,dropEffect:f},v]=d((()=>({accept:["rule","ruleGroup"],canDrop:t=>{const r=(0,n.Il)(e),o=(0,n.Il)(t.path),a=e[e.length-1],i=t.path[t.path.length-1];return!((0,n.jg)(t.path,e)||(0,n.H4)(r,o)&&(a===i||a===i-1||l&&a===i-2))},collect:e=>({isOver:e.canDrop()&&e.isOver(),dropMonitorId:e.getHandlerId()??"",dropEffect:(e.getDropResult()??{}).dropEffect}),drop:()=>({type:"rule",path:e})})),[t,l,r,e]);return m(u),b(v(s)),{isDragging:p,dragMonitorId:c,isOver:g,dropMonitorId:h,dndRef:s,dragRef:u,dropEffect:f}})({path:d,disabled:!!u||!!s,independentCombinators:m,moveRule:c,useDrag:l,useDrop:a}),{rule:g}=t.baseControls;return(0,r.jsx)(p.Provider,{value:t,children:(0,r.jsx)(g,{...e,...b})})};m.displayName="RuleDnD";const b=e=>{const t=(0,o.useContext)(p),{useDrag:l,useDrop:a}=t,{path:d,disabled:s,parentDisabled:u,actions:{moveRule:c},schema:{independentCombinators:m}}=e,b=(({disabled:e,path:t,independentCombinators:l,moveRule:r,useDrag:a,useDrop:d})=>{const s=(0,o.useRef)(null),u=(0,o.useRef)(null),p=(0,o.useRef)(null),[{isDragging:c,dragMonitorId:m},b,g]=i({type:"ruleGroup",path:t,disabled:e,independentCombinators:l,moveRule:r,useDrag:a}),[{isOver:h,dropMonitorId:f,dropEffect:v},D]=d((()=>({accept:["rule","ruleGroup"],canDrop:l=>{if(e)return!1;const r=(0,n.Il)(l.path),o=l.path[l.path.length-1];return!((0,n.jg)(l.path,t)||(0,n.H4)(t,r)&&0===o||(0,n.H4)(t,l.path))},collect:e=>({isOver:e.canDrop()&&e.isOver(),dropMonitorId:e.getHandlerId()??"",dropEffect:(e.getDropResult()??{}).dropEffect}),drop:(e,l)=>l.getDropResult()??{type:"ruleGroup",path:t}})),[e,r,t]);return t.length>0&&(b(u),g(s)),D(p),{isDragging:c,dragMonitorId:m,isOver:h,dropMonitorId:f,previewRef:s,dragRef:u,dropRef:p,dropEffect:v}})({disabled:!!u||!!s,path:d,independentCombinators:m,moveRule:c,useDrag:l,useDrop:a}),{ruleGroup:g}=t.baseControls;return(0,r.jsx)(g,{...e,...b})};b.displayName="RuleGroupDnD";const g=e=>{const{controlClassnames:t,controlElements:l,debugMode:o,enableDragAndDrop:i,enableMountQueryChange:d,translations:s}=e,u=(0,n.Qr)({controlClassnames:t,controlElements:l,debugMode:o,enableDragAndDrop:i??!0,enableMountQueryChange:d,translations:s??{}}),{enableDragAndDrop:p}=u,c=a(e.dnd),m=p&&c?"dnd":"no-dnd";if(!p||!c)return(0,r.jsx)(n.TF.Provider,{value:{...u,enableDragAndDrop:!1,debugMode:o},children:e.children},m);const{DndProvider:b,HTML5Backend:g}=c;return(0,r.jsx)(b,{backend:g,debugMode:o,children:(0,r.jsx)(n.TF.Provider,{value:{...u,enableDragAndDrop:p,debugMode:o},children:(0,r.jsx)(h,{dnd:c,children:e.children})},m)},m)};g.displayName="QueryBuilderDnD";const h=e=>{const t=(0,o.useContext)(n.TF),l=(0,o.useContext)(p),i=a(e.dnd),d=(0,n.HP)(!1,e.debugMode,t.debugMode),s=(0,n.HP)(!0,e.enableDragAndDrop,t.enableDragAndDrop),u=s&&i?"dnd":"no-dnd";if(!s||!i)return(0,r.jsx)(n.TF.Provider,{value:{...t,enableDragAndDrop:!1,debugMode:d},children:e.children},u);const{DndContext:g,useDrag:h,useDrop:f}=i,v={rule:e.controlElements?.rule??t.controlElements?.rule??l.baseControls.rule,ruleGroup:e.controlElements?.ruleGroup??t.controlElements?.ruleGroup??l.baseControls.ruleGroup,combinatorSelector:e.controlElements?.combinatorSelector??t.controlElements?.combinatorSelector??l.baseControls.combinatorSelector},D={...t,controlElements:{...t.controlElements,ruleGroup:b,rule:m,inlineCombinator:c}};return(0,r.jsx)(g.Consumer,{children:()=>(0,r.jsx)(n.TF.Provider,{value:D,children:(0,r.jsx)(p.Provider,{value:{useDrag:h,useDrop:f,baseControls:v},children:e.children})},u)},u)};h.displayName="QueryBuilderDndWithoutProvider"}}]);