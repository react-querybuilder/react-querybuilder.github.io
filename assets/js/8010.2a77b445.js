"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8010],{11289:(e,o,t)=>{t.d(o,{S:()=>p});var n=t(1570),r=t(67294),i=(t(12400),t(11754)),c=t(85893),a=t(73396),l=(t(74434),t(12062));function s(e){return(0,n.g)("PrivateSwitchBase",e)}(0,n.a)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const d=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],u=(0,n.s)(a.B)((({ownerState:e})=>(0,n._)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),h=(0,n.s)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),p=r.forwardRef((function(e,o){const{autoFocus:t,checked:r,checkedIcon:a,className:p,defaultChecked:m,disabled:f,disableFocusRipple:v=!1,edge:S=!1,icon:b,id:x,inputProps:g,inputRef:k,name:z,onBlur:w,onChange:C,onFocus:y,readOnly:R,required:B=!1,tabIndex:I,type:F,value:N}=e,$=(0,n.e)(e,d),[j,M]=(0,l.u)({controlled:r,default:Boolean(m),name:"SwitchBase",state:"checked"}),_=(0,i.u)();let P=f;_&&typeof P>"u"&&(P=_.disabled);const V="checkbox"===F||"radio"===F,O=(0,n._)({},e,{checked:j,disabled:P,disableFocusRipple:v,edge:S}),E=(e=>{const{classes:o,checked:t,disabled:r,edge:i}=e,c={root:["root",t&&"checked",r&&"disabled",i&&`edge${(0,n.c)(i)}`],input:["input"]};return(0,n.h)(c,s,o)})(O);return(0,c.jsxs)(u,(0,n._)({component:"span",className:(0,n.f)(E.root,p),centerRipple:!0,focusRipple:!v,disabled:P,tabIndex:null,role:void 0,onFocus:e=>{y&&y(e),_&&_.onFocus&&_.onFocus(e)},onBlur:e=>{w&&w(e),_&&_.onBlur&&_.onBlur(e)},ownerState:O,ref:o},$,{children:[(0,c.jsx)(h,(0,n._)({autoFocus:t,checked:r,defaultChecked:m,className:E.input,disabled:P,id:V?x:void 0,name:z,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const o=e.target.checked;M(o),C&&C(e,o)},readOnly:R,ref:k,required:B,ownerState:O,tabIndex:I,type:F},"checkbox"===F&&void 0===N?{}:{value:N},g)),j?a:b]}))}))},52595:(e,o,t)=>{t.d(o,{c:()=>u});var n=t(1570),r=t(67294),i=t(85893);t(12400);function c(e){return(0,n.g)("MuiSvgIcon",e)}(0,n.a)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const a=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],l=(0,n.s)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,"inherit"!==t.color&&o[`color${(0,n.c)(t.color)}`],o[`fontSize${(0,n.c)(t.fontSize)}`]]}})((({theme:e,ownerState:o})=>{var t,n,r,i,c,a,l,s,d,u,h,p,m,f,v,S,b;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=e.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(r=e.transitions)||null==(i=r.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(c=e.typography)||null==(a=c.pxToRem)?void 0:a.call(c,20))||"1.25rem",medium:(null==(l=e.typography)||null==(s=l.pxToRem)?void 0:s.call(l,24))||"1.5rem",large:(null==(d=e.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875rem"}[o.fontSize],color:null!=(h=null==(p=(e.vars||e).palette)||null==(m=p[o.color])?void 0:m.main)?h:{action:null==(f=(e.vars||e).palette)||null==(v=f.action)?void 0:v.active,disabled:null==(S=(e.vars||e).palette)||null==(b=S.action)?void 0:b.disabled,inherit:void 0}[o.color]}})),s=r.forwardRef((function(e,o){const t=(0,n.u)({props:e,name:"MuiSvgIcon"}),{children:r,className:s,color:d="inherit",component:u="svg",fontSize:h="medium",htmlColor:p,inheritViewBox:m=!1,titleAccess:f,viewBox:v="0 0 24 24"}=t,S=(0,n.e)(t,a),b=(0,n._)({},t,{color:d,component:u,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:m,viewBox:v}),x={};m||(x.viewBox=v);const g=(e=>{const{color:o,fontSize:t,classes:r}=e,i={root:["root","inherit"!==o&&`color${(0,n.c)(o)}`,`fontSize${(0,n.c)(t)}`]};return(0,n.h)(i,c,r)})(b);return(0,i.jsxs)(l,(0,n._)({as:u,className:(0,n.f)(g.root,s),focusable:"false",color:p,"aria-hidden":!f||void 0,role:f?"img":void 0,ref:o},x,S,{ownerState:b,children:[r,f?(0,i.jsx)("title",{children:f}):null]}))}));s.muiName="SvgIcon";const d=s;function u(e,o){function t(t,r){return(0,i.jsx)(d,(0,n._)({"data-testid":`${o}Icon`,ref:r},t,{children:e}))}return t.muiName=d.muiName,r.memo(r.forwardRef(t))}},98010:(e,o,t)=>{t.r(o),t.d(o,{checkboxClasses:()=>h,default:()=>b,getCheckboxUtilityClass:()=>u});var n=t(1570),r=t(67294),i=(t(12400),t(11289)),c=t(52595),a=t(85893);t(74434),t(11754),t(73396),t(31430),t(50809),t(51208),t(28544),t(18529),t(81320),t(12062);const l=(0,c.c)((0,a.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=(0,c.c)((0,a.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=(0,c.c)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function u(e){return(0,n.g)("MuiCheckbox",e)}const h=(0,n.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),p=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],m=(0,n.s)(i.S,{shouldForwardProp:e=>(0,n.r)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,"default"!==t.color&&o[`color${(0,n.c)(t.color)}`]]}})((({theme:e,ownerState:o})=>(0,n._)({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===o.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,n.b)("default"===o.color?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{[`&.${h.checked}, &.${h.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),f=(0,a.jsx)(s,{}),v=(0,a.jsx)(l,{}),S=(0,a.jsx)(d,{}),b=r.forwardRef((function(e,o){var t,i;const c=(0,n.u)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=f,color:s="primary",icon:d=v,indeterminate:h=!1,indeterminateIcon:b=S,inputProps:x,size:g="medium",className:k}=c,z=(0,n.e)(c,p),w=h?b:d,C=h?b:l,y=(0,n._)({},c,{color:s,indeterminate:h,size:g}),R=(e=>{const{classes:o,indeterminate:t,color:r}=e,i={root:["root",t&&"indeterminate",`color${(0,n.c)(r)}`]},c=(0,n.h)(i,u,o);return(0,n._)({},o,c)})(y);return(0,a.jsx)(m,(0,n._)({type:"checkbox",inputProps:(0,n._)({"data-indeterminate":h},x),icon:r.cloneElement(w,{fontSize:null!=(t=w.props.fontSize)?t:g}),checkedIcon:r.cloneElement(C,{fontSize:null!=(i=C.props.fontSize)?i:g}),ownerState:y,ref:o,className:(0,n.f)(R.root,k)},z,{classes:R}))}))},12062:(e,o,t)=>{t.d(o,{u:()=>r});var n=t(67294);function r({controlled:e,default:o,name:t,state:r="value"}){const{current:i}=n.useRef(void 0!==e),[c,a]=n.useState(o);return[i?e:c,n.useCallback((e=>{i||a(e)}),[])]}},11754:(e,o,t)=>{t.d(o,{F:()=>r,u:()=>i});var n=t(67294);const r=n.createContext(void 0);function i(){return n.useContext(r)}}}]);