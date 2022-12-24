(self.webpackChunk=self.webpackChunk||[]).push([[2306],{26482:(e,l,t)=>{"use strict";t.d(l,{e:()=>i});var a=t(67294),o=t(61236),r=t(3612);const i=e=>{let{version:l,...t}=e;const i=4===l?r.zk:o.zk;return a.createElement("div",{key:"v"+(null!=l?l:5),className:"queryBuilderEmbed"},a.createElement(i,t))}},5422:(e,l,t)=>{"use strict";t.r(l),t.d(l,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=t(83117),o=(t(67294),t(3905)),r=t(9320),i=t(26482),n=t(61236);const s={title:"CSS classes",hide_table_of_contents:!0,description:"Visual guide to CSS classes for each component element"},u=void 0,d={unversionedId:"api/classnames",id:"api/classnames",title:"CSS classes",description:"Visual guide to CSS classes for each component element",source:"@site/docs/api/classnames.mdx",sourceDirName:"api",slug:"/api/classnames",permalink:"/docs/next/api/classnames",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/api/classnames.mdx",tags:[],version:"current",frontMatter:{title:"CSS classes",hide_table_of_contents:!0,description:"Visual guide to CSS classes for each component element"},sidebar:"mySidebar",previous:{title:"<ValueEditor />",permalink:"/docs/next/api/valueeditor"},next:{title:"Export",permalink:"/docs/next/api/export"}},p={},c=[],m={toc:c};function b(e){let{components:l,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:l,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," component assigns ",(0,o.kt)("a",{parentName:"p",href:"./misc#defaults"},"standard classes")," to each element. In the (fully operational) query builder below, the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," for each element have been set to the element's standard class."),(0,o.kt)("p",null,"The following standard classnames are not labeled below, but for most of them the elements they apply to can be identified by outline color:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".queryBuilder")," (",(0,o.kt)("code",{style:{fontWeight:"bold",color:"black",backgroundColor:"white",fontFamily:"unset",borderColor:"white"}},"black")," outline; the outer-most ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"maroon"}},"maroon")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup-header")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"rebeccapurple"}},"purple")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".ruleGroup-body")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"blue"}},"blue")," outline)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-disabled")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"gray"}},"gray")," outline for locked/disabled rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-valid")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"green"}},"green")," outline for valid rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".rule.queryBuilder-invalid")," (",(0,o.kt)("span",{style:{fontWeight:"bold",color:"red"}},"red")," outline for invalid rules)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".dndDragging"),' (applied to "preview" element while dragging)'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".dndOver"),' (applied to "hovered over" element while dragging)')),(0,o.kt)(r.yC,{mdxType:"QueryBuilderDnD"},(0,o.kt)(i.e,{showNotToggle:!0,showCloneButtons:!0,showLockButtons:!0,enableDragAndDrop:!0,fields:[{name:"f1",label:"."+n.q0.fields,defaultValue:"This rule is valid",validator:()=>!0},{name:"f2",label:"."+n.q0.fields,defaultValue:"This rule is invalid",validator:()=>!1},{name:"f3",label:"."+n.q0.valueSource,valueSources:["value","field"]},{name:"fb1",label:"Value list",operators:[{name:"between",label:"between"}],valueSources:["field","value"],comparator:e=>"fb2"===e.name},{name:"fb2",label:"."+n.q0.valueListItem}],combinators:[{name:"and",label:"."+n.q0.combinators}],getOperators:()=>[{name:"=",label:"."+n.q0.operators}],controlClassnames:{queryBuilder:"rqb-structure"},translations:{fields:{title:"."+n.q0.fields},operators:{title:"."+n.q0.operators},value:{title:"."+n.q0.value},removeRule:{label:"."+n.q0.removeRule,title:"."+n.q0.removeRule},removeGroup:{label:"."+n.q0.removeGroup,title:"."+n.q0.removeGroup},addRule:{label:"."+n.q0.addRule,title:"."+n.q0.addRule},addGroup:{label:"."+n.q0.addGroup,title:"."+n.q0.addGroup},combinators:{title:"."+n.q0.combinators},notToggle:{label:"."+n.q0.notToggle,title:"."+n.q0.notToggle},cloneRule:{label:"."+n.q0.cloneRule,title:"."+n.q0.cloneRule},cloneRuleGroup:{label:"."+n.q0.cloneGroup,title:"."+n.q0.cloneGroup},dragHandle:{label:"."+n.q0.dragHandle,title:"."+n.q0.dragHandle},lockRule:{label:"."+n.q0.lockRule,title:"."+n.q0.lockRule},lockGroup:{label:"."+n.q0.lockGroup,title:"."+n.q0.lockGroup},lockRuleDisabled:{label:"."+n.q0.lockRuleDisabled,title:"."+n.q0.lockRuleDisabled},lockGroupDisabled:{label:"."+n.q0.lockGroupDisabled,title:"."+n.q0.lockGroupDisabled},valueSourceSelector:{title:"."+n.q0.valueSource}},defaultQuery:{combinator:"and",rules:[{field:"f1",operator:"=",value:"."+n.q0.value},{combinator:"and",rules:[{field:"f1",operator:"=",value:"This rule is valid"},{field:"f2",operator:"=",value:"This rule is invalid"},{disabled:!0,combinator:"and",rules:[{field:"f1",operator:"=",value:"This rule's group is disabled, therefore this rule is also disabled"}]}]},{field:"f3",operator:"=",value:"f1"},{field:"fb1",operator:"between",value:"fb2,fb2",valueSource:"field"}]},mdxType:"QueryBuilderEmbed"})))}b.isMDXComponent=!0},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},52361:()=>{},94616:()=>{}}]);