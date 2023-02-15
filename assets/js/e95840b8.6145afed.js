"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7543],{38112:(e,t,r)=>{r.d(t,{U:()=>p});var a=r(86010),n=r(67294);const l="browserWindow_my1Q",s="browserWindowHeader_jXSR",o="buttons_uHc7",i="browserWindowAddressBar_Pd8y",d="dot_giz1",u="browserWindowMenuIcon_Vhuh",c="bar_rrRL",m="browserWindowBody_Idgs",p=e=>{let{children:t,minHeight:r,url:p="https://example.com"}=e;return n.createElement("div",{className:l,style:{minHeight:r}},n.createElement("div",{className:s},n.createElement("div",{className:o},n.createElement("span",{className:d,style:{background:"#f25f58"}}),n.createElement("span",{className:d,style:{background:"#fbbe3c"}}),n.createElement("span",{className:d,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,a.Z)(i,"text--truncate")},p),n.createElement("div",{className:u},n.createElement("div",null,n.createElement("span",{className:c}),n.createElement("span",{className:c}),n.createElement("span",{className:c})))),n.createElement("div",{className:m},t))}},26482:(e,t,r)=>{r.d(t,{e:()=>o});var a=r(67294),n=r(61785),l=r(3612),s=r(43256);const o=e=>{let{version:t,...r}=e;const o=4===t?l.zk:5===t?s.zk:n.zk;return a.createElement("div",{key:"v"+(null!=t?t:5),className:"queryBuilderEmbed"},a.createElement(o,r))}},34843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,fields:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=r(83117),n=(r(67294),r(3905)),l=r(38112),s=r(26482);const o={title:"Styling overview",description:"How to tweak or overhaul the default styles"},i=void 0,d={unversionedId:"styling/overview",id:"styling/overview",title:"Styling overview",description:"How to tweak or overhaul the default styles",source:"@site/docs/styling/overview.mdx",sourceDirName:"styling",slug:"/styling/overview",permalink:"/docs/next/styling/overview",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/styling/overview.mdx",tags:[],version:"current",frontMatter:{title:"Styling overview",description:"How to tweak or overhaul the default styles"},sidebar:"mySidebar",previous:{title:"Styling",permalink:"/docs/next/category/styling"},next:{title:"CSS classes",permalink:"/docs/next/styling/classnames"}},u={},c=[{value:"Branch lines",id:"branch-lines",level:2},{value:"Drag-and-drop",id:"drag-and-drop",level:2},{value:"Miscellaneous tips",id:"miscellaneous-tips",level:2},{value:"Inline independent combinators",id:"inline-independent-combinators",level:3}],m=[{name:"firstName",label:"First name"},{name:"lastName",label:"Last name"}],p={toc:c,fields:m};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"React Query Builder has a ",(0,n.kt)("a",{parentName:"p",href:"./classnames"},"flexible structure with specific classes assigned")," to each element in the component hierarchy, enabling a wide range of styling possibilities."),(0,n.kt)("p",null,"The default stylesheet comes in CSS and SCSS flavors. Using SCSS allows you to override variables to tweak styles without having to replicate the entire rule set."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import 'react-querybuilder/dist/query-builder.scss'; // recommended\n// OR\nimport 'react-querybuilder/dist/query-builder.css';\n")),(0,n.kt)("p",null,"The default SCSS variables include:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scss"},"$rqb-spacing: 0.5rem !default;\n$rqb-background-color: rgba(0, 75, 183, 0.2) !default;\n$rqb-border-color: #8081a2 !default;\n$rqb-border-style: solid !default;\n$rqb-border-radius: 0.25rem !default;\n$rqb-border-width: 1px !default;\n")),(0,n.kt)("h2",{id:"branch-lines"},"Branch lines"),(0,n.kt)("p",null,"To add branch lines to the left side of rule groups, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"queryBuilder-branches")," class to the query builder using the ",(0,n.kt)("a",{parentName:"p",href:"../components/querybuilder#controlclassnames"},(0,n.kt)("inlineCode",{parentName:"a"},"controlClassnames")," prop"),", or to any ancestor element."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"export default () => (\n  <QueryBuilder\n    controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}\n    {...otherProps}\n  />\n);\n")),(0,n.kt)(l.U,{mdxType:"BrowserWindow"},(0,n.kt)(s.e,{fields:m,controlClassnames:{queryBuilder:["queryBuilder-branches","red-branch-lines"]},defaultQuery:{combinator:"and",rules:[{field:"firstName",operator:"beginsWith",value:"Stev"},{combinator:"or",rules:[{field:"lastName",operator:"=",value:"Vai"},{field:"lastName",operator:"=",value:"Vaughan"}]}]},mdxType:"QueryBuilderEmbed"})),(0,n.kt)("p",null,"The branch lines are colored ",(0,n.kt)("span",{style:{color:"red"}},"red")," in the example above to stand out, but by default the branch lines use the same color, width, and style as the group borders. The following SCSS variables can be overridden to customize the branch lines."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scss"},"$rqb-branch-indent: $rqb-spacing !default;\n$rqb-branch-color: $rqb-border-color !default;\n$rqb-branch-width: $rqb-border-width !default;\n$rqb-branch-radius: $rqb-border-radius !default;\n$rqb-branch-style: $rqb-border-style !default;\n")),(0,n.kt)("h2",{id:"drag-and-drop"},"Drag-and-drop"),(0,n.kt)("p",null,"When ",(0,n.kt)("a",{parentName:"p",href:"../components/querybuilder#enabledraganddrop"},"drag-and-drop is enabled"),", the following variables control the hover styles."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scss"},"$rqb-dnd-hover-border-bottom-color: rebeccapurple !default;\n$rqb-dnd-hover-copy-border-bottom-color: #669933 !default;\n$rqb-dnd-hover-border-bottom-style: dashed !default;\n$rqb-dnd-hover-border-bottom-width: 2px !default;\n")),(0,n.kt)("p",null,"You can also assign styles to the following classes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dndDragging"),': Assigned to the clone of the dragged element (the "ghost" that follows the mouse cursor)'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dndOver"),": Assigned to a drop target when the cursor hovers over it"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dndCopy"),": Assigned to a drop target when the cursor hovers over it while the modifier key is pressed (",(0,n.kt)("inlineCode",{parentName:"li"},"Alt")," on Windows/Linux, ",(0,n.kt)("inlineCode",{parentName:"li"},"Option \u2325")," on Mac)")),(0,n.kt)("h2",{id:"miscellaneous-tips"},"Miscellaneous tips"),(0,n.kt)("h3",{id:"inline-independent-combinators"},"Inline independent combinators"),(0,n.kt)("p",null,"Position each combinator to the right of the rule before it with this CSS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".ruleGroup-body {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n")),(0,n.kt)(l.U,{mdxType:"BrowserWindow"},(0,n.kt)(s.e,{fields:m,independentCombinators:!0,controlClassnames:{body:"inline-indycomb"},defaultQuery:{rules:[{field:"firstName",operator:"beginsWith",value:"Stev"},"and",{rules:[{field:"lastName",operator:"=",value:"Vai"},"or",{field:"lastName",operator:"=",value:"Vaughan"},"or",{field:"lastName",operator:"=",value:"Martin"}]},"or",{field:"firstName",operator:"null",value:null}]},mdxType:"QueryBuilderEmbed"})))}b.isMDXComponent=!0}}]);