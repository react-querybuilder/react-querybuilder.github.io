"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2218],{19666:(e,l,a)=>{a.d(l,{Z:()=>n});var t=a(67294),s=a(5730);function n(e){let{children:l,fallback:a}=e;return(0,s.Z)()?t.createElement(t.Fragment,null,null==l?void 0:l()):a??null}},13819:(e,l,a)=>{a.d(l,{g:()=>s});var t=a(67294);const s=()=>t.createElement("div",null,"Loading...")},78110:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var t=a(19666),s=a(61785),n=a(85893);const i=({className:e,handleOnClick:l,label:a,title:t,disabled:s,disabledTranslation:i})=>(0,n.jsx)("button",{type:"button",className:`button ${e}`,title:i&&s?i.title:t,onClick:e=>l(e),disabled:s&&!i,children:i&&s?i.label:a});i.displayName="BulmaActionElement";const c=({className:e,handleOnChange:l,label:a,checked:t,title:s,disabled:i})=>(0,n.jsxs)("label",{className:`${e} checkbox`,title:s,children:[(0,n.jsx)("input",{type:"checkbox",disabled:i,checked:t,onChange:e=>l(e.target.checked)}),a]});c.displayName="BulmaNotToggle";const r=({className:e,handleOnChange:l,options:a,value:t,title:i,disabled:c,multiple:r,listsAsArrays:o})=>{const{onChange:u,val:d}=(0,s.S1)({handleOnChange:l,listsAsArrays:o,multiple:r,value:t}),m=(0,s.Zm)({multiple:r,onChange:u});return(0,n.jsx)("div",{title:i,className:`${e} select${r?" is-multiple":""}`,children:(0,n.jsx)("select",{value:d,multiple:r,disabled:c,onChange:m,children:(0,s.o2)(a)})})};r.displayName="BulmaValueSelector";const o=e=>{const{valueAsArray:l,multiValueHandler:a}=(0,s.dx)({handleOnChange:e.handleOnChange,inputType:e.inputType,operator:e.operator,value:e.value,type:e.type,listsAsArrays:e.listsAsArrays,parseNumbers:e.parseNumbers,values:e.values}),{selectorComponent:t=r}=e;if("null"===e.operator||"notNull"===e.operator)return null;const i=e.fieldData?.placeholder??"",{values:c=[]}=e;if(!("between"!==e.operator&&"notBetween"!==e.operator||"select"!==e.type&&"text"!==e.type)){const r=["from","to"].map(((r,o)=>"text"===e.type?(0,n.jsx)("input",{type:e.inputType||"text",placeholder:i,value:l[o]??"",className:`${s.q0.valueListItem} input`,disabled:e.disabled,onChange:e=>a(e.target.value,o)},r):(0,n.jsx)(t,{...e,className:s.q0.valueListItem,handleOnChange:e=>a(e,o),disabled:e.disabled,value:l[o]??(0,s.QL)(c),options:c,listsAsArrays:e.listsAsArrays},r)));return(0,n.jsxs)("span",{"data-testid":e.testID,className:e.className,title:e.title,children:[r[0],e.separator,r[1]]})}switch(e.type){case"select":case"multiselect":return(0,n.jsx)(t,{...e,title:e.title,className:e.className,handleOnChange:e.handleOnChange,options:c,value:e.value,disabled:e.disabled,multiple:"multiselect"===e.type,listsAsArrays:e.listsAsArrays});case"textarea":return(0,n.jsx)("div",{className:`${e.className} control`,children:(0,n.jsx)(s.S$,{skipHook:!0,...e,className:"textarea"})});case"switch":case"checkbox":return(0,n.jsx)("label",{title:e.title,className:`${e.className} checkbox`,children:(0,n.jsx)(s.S$,{skipHook:!0,...e,title:"",className:""})});case"radio":return(0,n.jsx)("div",{className:`${e.className} control`,title:e.title,children:c.map((l=>(0,n.jsxs)("label",{className:"radio",children:[(0,n.jsx)("input",{type:"radio",value:l.name,checked:e.value===l.name,onChange:()=>e.handleOnChange(l.name),disabled:e.disabled}),l.label]},l.name)))})}return(0,n.jsx)("div",{className:`${e.className} control`,children:(0,n.jsx)(s.S$,{skipHook:!0,...e,disabled:e.disabled,className:"input"})})};o.displayName="BulmaValueEditor";const u={notToggle:c,valueEditor:o,addGroupAction:i,addRuleAction:i,cloneGroupAction:i,cloneRuleAction:i,combinatorSelector:r,fieldSelector:r,operatorSelector:r,lockRuleAction:i,lockGroupAction:i,removeGroupAction:i,removeRuleAction:i,valueSourceSelector:r},d=(0,s.iW)({key:"bulma",controlElements:u});var m=a(91022),p=a(67294),h=a(13819);function b(){const[{Demo:e},l]=(0,p.useState)({});return(0,p.useEffect)((()=>{let t=!0;return(async()=>{const s=await Promise.all([(await Promise.all([a.e(532),a.e(3275),a.e(3566),a.e(9950),a.e(241)]).then(a.bind(a,42541))).default]);if(t&&!e){const[e]=s;l({Demo:e})}})(),()=>{t=!1}}),[e]),e?p.createElement(d,null,p.createElement(e,{variant:"bulma"})):p.createElement(h.g,null)}function v(){return p.createElement(m.Z,{description:"React Query Builder Bulma Demo"},p.createElement(t.Z,{fallback:p.createElement(h.g,null)},(()=>p.createElement(b,null))))}}}]);