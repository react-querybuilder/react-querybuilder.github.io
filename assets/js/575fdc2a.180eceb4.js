"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9241],{26482:(e,l,t)=>{t.d(l,{e:()=>i});var r=t(67294),o=t(61785),n=t(3612),a=t(43256);const i=e=>{let{version:l,...t}=e;const i=4===l?n.zk:5===l?a.zk:o.zk;return r.createElement("div",{key:"v"+(null!=l?l:5),className:"queryBuilderEmbed"},r.createElement(i,t))}},26416:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var r=t(83117),o=(t(67294),t(3905)),n=t(98265),a=t(26482),i=t(61785);const d={title:"CSS classes",hide_table_of_contents:!0,description:"Visual guide to CSS classes for each component element"},s=void 0,u={unversionedId:"api/classnames",id:"version-5/api/classnames",title:"CSS classes",description:"Visual guide to CSS classes for each component element",source:"@site/versioned_docs/version-5/api/classnames.mdx",sourceDirName:"api",slug:"/api/classnames",permalink:"/docs/api/classnames",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/api/classnames.mdx",tags:[],version:"5",frontMatter:{title:"CSS classes",hide_table_of_contents:!0,description:"Visual guide to CSS classes for each component element"},sidebar:"mySidebar",previous:{title:"<ValueEditor />",permalink:"/docs/api/valueeditor"},next:{title:"Export",permalink:"/docs/api/export"}},p={},c=[],m={toc:c};function b(e){let{components:l,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:l,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component assigns ",(0,o.kt)("a",{parentName:"p",href:"./misc#defaults"},"standard classes")," to each element. In the (fully operational) query builder below, the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," for each element have been set to the element's standard class."),(0,o.kt)("p",null,"The following standard classnames are not labeled below, but for most of them the elements they apply to can be identified by outline color:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".queryBuilder")," (",(0,o.kt)("code",{style:{fontWeight:"bold",color:"black",backgroundColor:"white",fontFamily:"unset",borderColor:"white"}},"black")," outline; the outer-most ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"maroon"}},"maroon")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup-header")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"rebeccapurple"}},"purple")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup-body")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"blue"}},"blue")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-disabled")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"gray"}},"gray")," outline for locked/disabled rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-valid")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"green"}},"green")," outline for valid rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-invalid")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"red"}},"red")," outline for invalid rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".dndDragging"),' (applied to "preview" element while dragging)'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".dndOver"),' (applied to "hovered over" element while dragging)')),(0,o.kt)(n.yC,{mdxType:"QueryBuilderDnD"},(0,o.kt)(a.e,{showNotToggle:!0,showCloneButtons:!0,showLockButtons:!0,enableDragAndDrop:!0,fields:[{name:"f1",label:"."+i.q0.fields,defaultValue:"This rule is valid",validator:()=>!0},{name:"f2",label:"."+i.q0.fields,defaultValue:"This rule is invalid",validator:()=>!1},{name:"f3",label:"."+i.q0.valueSource,valueSources:["value","field"]},{name:"fb1",label:"Value list",operators:[{name:"between",label:"between"}],valueSources:["field","value"],comparator:e=>"fb2"===e.name},{name:"fb2",label:"."+i.q0.valueListItem}],combinators:[{name:"and",label:"."+i.q0.combinators}],getOperators:()=>[{name:"=",label:"."+i.q0.operators}],controlClassnames:{queryBuilder:"rqb-structure"},translations:{fields:{title:"."+i.q0.fields},operators:{title:"."+i.q0.operators},value:{title:"."+i.q0.value},removeRule:{label:"."+i.q0.removeRule,title:"."+i.q0.removeRule},removeGroup:{label:"."+i.q0.removeGroup,title:"."+i.q0.removeGroup},addRule:{label:"."+i.q0.addRule,title:"."+i.q0.addRule},addGroup:{label:"."+i.q0.addGroup,title:"."+i.q0.addGroup},combinators:{title:"."+i.q0.combinators},notToggle:{label:"."+i.q0.notToggle,title:"."+i.q0.notToggle},cloneRule:{label:"."+i.q0.cloneRule,title:"."+i.q0.cloneRule},cloneRuleGroup:{label:"."+i.q0.cloneGroup,title:"."+i.q0.cloneGroup},dragHandle:{label:"."+i.q0.dragHandle,title:"."+i.q0.dragHandle},lockRule:{label:"."+i.q0.lockRule,title:"."+i.q0.lockRule},lockGroup:{label:"."+i.q0.lockGroup,title:"."+i.q0.lockGroup},lockRuleDisabled:{label:"."+i.q0.lockRuleDisabled,title:"."+i.q0.lockRuleDisabled},lockGroupDisabled:{label:"."+i.q0.lockGroupDisabled,title:"."+i.q0.lockGroupDisabled},valueSourceSelector:{title:"."+i.q0.valueSource}},defaultQuery:{combinator:"and",rules:[{field:"f1",operator:"=",value:"."+i.q0.value},{combinator:"and",rules:[{field:"f1",operator:"=",value:"This rule is valid"},{field:"f2",operator:"=",value:"This rule is invalid"},{disabled:!0,combinator:"and",rules:[{field:"f1",operator:"=",value:"This rule's group is disabled, therefore this rule is also disabled"}]}]},{field:"f3",operator:"=",value:"f1"},{field:"fb1",operator:"between",value:"fb2,fb2",valueSource:"field"}]},mdxType:"QueryBuilderEmbed"})))}b.isMDXComponent=!0},98265:(e,l,t)=>{t.d(l,{yC:()=>g});var r=t(85893),o=t(67294),n=t(61785);const a=e=>{const[l,r]=(0,o.useState)(e??null);return(0,o.useEffect)((()=>{let e=!1;return l||(async()=>{const[l,o]=await Promise.all([Promise.all([t.e(4891),t.e(5413)]).then(t.bind(t,15413)).catch((()=>null)),t.e(2250).then(t.bind(t,42250)).catch((()=>null))]);e||l&&o&&r((()=>({...l,...o})))})(),()=>{e=!0}}),[]),l},i=({type:e,path:l,disabled:t,moveRule:r,useDrag:o})=>o((()=>({type:e,item:{path:l},canDrag:!t,collect:e=>({isDragging:!t&&e.isDragging(),dragMonitorId:e.getHandlerId()??""}),end(e,l){const t=l.getDropResult();if(!t)return;const o=(0,n.Il)(t.path),a=t.path[t.path.length-1],i="ruleGroup"===t.type?[...t.path,0]:"inlineCombinator"===t.type?[...o,a]:[...o,a+1];r(e.path,i,"copy"===t.dropEffect)}})),[t,l]),{rule:d,ruleGroup:s,combinatorSelector:u}=n.PN,p=(0,o.createContext)({baseControls:{rule:d,ruleGroup:s,combinatorSelector:u}});p.displayName="QueryBuilderDndContext";const c=({component:e,path:l,independentCombinators:t,...a})=>{const{useDrop:i}=(0,o.useContext)(p),{dropRef:d,dropMonitorId:s,isOver:u}=(({path:e,independentCombinators:l,useDrop:t})=>{const r=(0,o.useRef)(null),[{isOver:a,dropMonitorId:i},d]=t((()=>({accept:["rule","ruleGroup"],canDrop:t=>{const r=(0,n.Il)(e),o=(0,n.Il)(t.path),a=e[e.length-1],i=t.path[t.path.length-1];return!((0,n.jg)(t.path,e)||(0,n.H4)(t.path,e)||(0,n.H4)(r,o)&&a-1===i||l&&(0,n.H4)(r,o)&&a===i-1)},collect:e=>({isOver:e.canDrop()&&e.isOver(),dropMonitorId:e.getHandlerId()??"",dropEffect:(e.getDropResult()??{}).dropEffect}),drop:()=>({type:"inlineCombinator",path:e})})),[e,l]);return d(r),{dropRef:r,dropMonitorId:i,isOver:a}})({path:l,independentCombinators:t,useDrop:i}),c=u?n.q0.dndOver:"",m=`${n.q0.betweenRules}${c?` ${c}`:""}`;return(0,r.jsx)("div",{ref:d,className:m,"data-dropmonitorid":s,"data-testid":n.O3.inlineCombinator,children:(0,r.jsx)(e,{...a,path:l,testID:n.O3.combinators})},"dnd")};c.displayName="InlineCombinatorDnD";const m=e=>{const l=(0,o.useContext)(p),{useDrag:t,useDrop:a}=l,{path:d,disabled:s,parentDisabled:u,actions:{moveRule:c},schema:{independentCombinators:m}}=e,b=(({path:e,disabled:l,independentCombinators:t,moveRule:r,useDrag:a,useDrop:d})=>{const s=(0,o.useRef)(null),u=(0,o.useRef)(null),[{isDragging:p,dragMonitorId:c},m,b]=i({type:"rule",path:e,disabled:l,independentCombinators:t,moveRule:r,useDrag:a}),[{isOver:g,dropMonitorId:h,dropEffect:f},v]=d((()=>({accept:["rule","ruleGroup"],canDrop:l=>{const r=(0,n.Il)(e),o=(0,n.Il)(l.path),a=e[e.length-1],i=l.path[l.path.length-1];return!((0,n.jg)(l.path,e)||(0,n.H4)(r,o)&&(a===i||a===i-1||t&&a===i-2))},collect:e=>({isOver:e.canDrop()&&e.isOver(),dropMonitorId:e.getHandlerId()??"",dropEffect:(e.getDropResult()??{}).dropEffect}),drop:()=>({type:"rule",path:e})})),[l,t,r,e]);return m(u),b(v(s)),{isDragging:p,dragMonitorId:c,isOver:g,dropMonitorId:h,dndRef:s,dragRef:u,dropEffect:f}})({path:d,disabled:!!u||!!s,independentCombinators:m,moveRule:c,useDrag:t,useDrop:a}),{rule:g}=l.baseControls;return(0,r.jsx)(p.Provider,{value:l,children:(0,r.jsx)(g,{...e,...b})})};m.displayName="RuleDnD";const b=e=>{const l=(0,o.useContext)(p),{useDrag:t,useDrop:a}=l,{path:d,disabled:s,parentDisabled:u,actions:{moveRule:c},schema:{independentCombinators:m}}=e,b=(({disabled:e,path:l,independentCombinators:t,moveRule:r,useDrag:a,useDrop:d})=>{const s=(0,o.useRef)(null),u=(0,o.useRef)(null),p=(0,o.useRef)(null),[{isDragging:c,dragMonitorId:m},b,g]=i({type:"ruleGroup",path:l,disabled:e,independentCombinators:t,moveRule:r,useDrag:a}),[{isOver:h,dropMonitorId:f,dropEffect:v},D]=d((()=>({accept:["rule","ruleGroup"],canDrop:t=>{if(e)return!1;const r=(0,n.Il)(t.path),o=t.path[t.path.length-1];return!((0,n.jg)(t.path,l)||(0,n.H4)(l,r)&&0===o||(0,n.H4)(l,t.path))},collect:e=>({isOver:e.canDrop()&&e.isOver(),dropMonitorId:e.getHandlerId()??"",dropEffect:(e.getDropResult()??{}).dropEffect}),drop:(e,t)=>t.getDropResult()??{type:"ruleGroup",path:l}})),[e,r,l]);return l.length>0&&(b(u),g(s)),D(p),{isDragging:c,dragMonitorId:m,isOver:h,dropMonitorId:f,previewRef:s,dragRef:u,dropRef:p,dropEffect:v}})({disabled:!!u||!!s,path:d,independentCombinators:m,moveRule:c,useDrag:t,useDrop:a}),{ruleGroup:g}=l.baseControls;return(0,r.jsx)(g,{...e,...b})};b.displayName="RuleGroupDnD";const g=e=>{const{controlClassnames:l,controlElements:t,debugMode:o,enableDragAndDrop:i,enableMountQueryChange:d,translations:s}=e,u=(0,n.Qr)({controlClassnames:l,controlElements:t,debugMode:o,enableDragAndDrop:i??!0,enableMountQueryChange:d,translations:s??{}}),{enableDragAndDrop:p}=u,c=a(e.dnd),m=p&&c?"dnd":"no-dnd";if(!p||!c)return(0,r.jsx)(n.TF.Provider,{value:{...u,enableDragAndDrop:!1,debugMode:o},children:e.children},m);const{DndProvider:b,HTML5Backend:g}=c;return(0,r.jsx)(b,{backend:g,debugMode:o,children:(0,r.jsx)(n.TF.Provider,{value:{...u,enableDragAndDrop:p,debugMode:o},children:(0,r.jsx)(h,{dnd:c,children:e.children})},m)},m)};g.displayName="QueryBuilderDnD";const h=e=>{const l=(0,o.useContext)(n.TF),t=(0,o.useContext)(p),i=a(e.dnd),d=(0,n.HP)(!1,e.debugMode,l.debugMode),s=(0,n.HP)(!0,e.enableDragAndDrop,l.enableDragAndDrop),u=s&&i?"dnd":"no-dnd";if(!s||!i)return(0,r.jsx)(n.TF.Provider,{value:{...l,enableDragAndDrop:!1,debugMode:d},children:e.children},u);const{DndContext:g,useDrag:h,useDrop:f}=i,v={rule:e.controlElements?.rule??l.controlElements?.rule??t.baseControls.rule,ruleGroup:e.controlElements?.ruleGroup??l.controlElements?.ruleGroup??t.baseControls.ruleGroup,combinatorSelector:e.controlElements?.combinatorSelector??l.controlElements?.combinatorSelector??t.baseControls.combinatorSelector},D={...l,controlElements:{...l.controlElements,ruleGroup:b,rule:m,inlineCombinator:c}};return(0,r.jsx)(g.Consumer,{children:()=>(0,r.jsx)(n.TF.Provider,{value:D,children:(0,r.jsx)(p.Provider,{value:{useDrag:h,useDrop:f,baseControls:v},children:e.children})},u)},u)};h.displayName="QueryBuilderDndWithoutProvider"}}]);