"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8417],{34878:(e,t,a)=>{a.d(t,{S:()=>p});var o=a(43174),r=a(67294),i=(a(12400),a(11754)),c=a(85893),s=a(49551),n=(a(74434),a(12062));function d(e){return(0,o.g)("PrivateSwitchBase",e)}(0,o.a)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const l=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],u=(0,o.s)(s.B)((({ownerState:e})=>(0,o._)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),h=(0,o.s)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),p=r.forwardRef((function(e,t){const{autoFocus:a,checked:r,checkedIcon:s,className:p,defaultChecked:m,disabled:g,disableFocusRipple:b=!1,edge:v=!1,icon:k,id:w,inputProps:f,inputRef:S,name:$,onBlur:x,onChange:y,onFocus:C,readOnly:R,required:B=!1,tabIndex:z,type:F,value:I}=e,_=(0,o.e)(e,l),[N,M]=(0,n.u)({controlled:r,default:Boolean(m),name:"SwitchBase",state:"checked"}),j=(0,i.u)();let O=g;j&&typeof O>"u"&&(O=j.disabled);const P="checkbox"===F||"radio"===F,T=(0,o._)({},e,{checked:N,disabled:O,disableFocusRipple:b,edge:v}),q=(e=>{const{classes:t,checked:a,disabled:r,edge:i}=e,c={root:["root",a&&"checked",r&&"disabled",i&&`edge${(0,o.c)(i)}`],input:["input"]};return(0,o.h)(c,d,t)})(T);return(0,c.jsxs)(u,(0,o._)({component:"span",className:(0,o.f)(q.root,p),centerRipple:!0,focusRipple:!b,disabled:O,tabIndex:null,role:void 0,onFocus:e=>{C&&C(e),j&&j.onFocus&&j.onFocus(e)},onBlur:e=>{x&&x(e),j&&j.onBlur&&j.onBlur(e)},ownerState:T,ref:t},_,{children:[(0,c.jsx)(h,(0,o._)({autoFocus:a,checked:r,defaultChecked:m,className:q.input,disabled:O,id:P?w:void 0,name:$,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;M(t),y&&y(e,t)},readOnly:R,ref:S,required:B,ownerState:T,tabIndex:z,type:F},"checkbox"===F&&void 0===I?{}:{value:I},f)),N?s:k]}))}))},28417:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m,getSwitchUtilityClass:()=>s,switchClasses:()=>n});var o=a(43174),r=a(67294),i=(a(12400),a(34878)),c=a(85893);a(74434),a(11754),a(49551),a(91407),a(50809),a(51208),a(28544),a(18529),a(81320),a(12062);function s(e){return(0,o.g)("MuiSwitch",e)}const n=(0,o.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),d=["className","color","edge","size","sx"],l=(0,o.s)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.edge&&t[`edge${(0,o.c)(a.edge)}`],t[`size${(0,o.c)(a.size)}`]]}})((({ownerState:e})=>(0,o._)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${n.thumb}`]:{width:16,height:16},[`& .${n.switchBase}`]:{padding:4,[`&.${n.checked}`]:{transform:"translateX(16px)"}}}))),u=(0,o.s)(i.S,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.switchBase,{[`& .${n.input}`]:t.input},"default"!==a.color&&t[`color${(0,o.c)(a.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${n.checked}`]:{transform:"translateX(20px)"},[`&.${n.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${n.checked} + .${n.track}`]:{opacity:.5},[`&.${n.disabled} + .${n.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:""+("light"===e.palette.mode?.12:.2)},[`& .${n.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,o._)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,o.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${n.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,o.b)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,o.F)(e.palette[t.color].main,.62):(0,o.G)(e.palette[t.color].main,.55)}`}},[`&.${n.checked} + .${n.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}}))),h=(0,o.s)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:""+("light"===e.palette.mode?.38:.3)}))),p=(0,o.s)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),m=r.forwardRef((function(e,t){const a=(0,o.u)({props:e,name:"MuiSwitch"}),{className:r,color:i="primary",edge:n=!1,size:m="medium",sx:g}=a,b=(0,o.e)(a,d),v=(0,o._)({},a,{color:i,edge:n,size:m}),k=(e=>{const{classes:t,edge:a,size:r,color:i,checked:c,disabled:n}=e,d={root:["root",a&&`edge${(0,o.c)(a)}`,`size${(0,o.c)(r)}`],switchBase:["switchBase",`color${(0,o.c)(i)}`,c&&"checked",n&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=(0,o.h)(d,s,t);return(0,o._)({},t,l)})(v),w=(0,c.jsx)(p,{className:k.thumb,ownerState:v});return(0,c.jsxs)(l,{className:(0,o.f)(k.root,r),sx:g,ownerState:v,children:[(0,c.jsx)(u,(0,o._)({type:"checkbox",icon:w,checkedIcon:w,ref:t,ownerState:v},b,{classes:(0,o._)({},k,{root:k.switchBase})})),(0,c.jsx)(h,{className:k.track,ownerState:v})]})}))},12062:(e,t,a)=>{a.d(t,{u:()=>r});var o=a(67294);function r({controlled:e,default:t,name:a,state:r="value"}){const{current:i}=o.useRef(void 0!==e),[c,s]=o.useState(t);return[i?e:c,o.useCallback((e=>{i||s(e)}),[])]}},11754:(e,t,a)=>{a.d(t,{F:()=>r,u:()=>i});var o=a(67294);const r=o.createContext(void 0);function i(){return o.useContext(r)}}}]);