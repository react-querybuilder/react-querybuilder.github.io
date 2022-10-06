"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7120],{34151:(e,t,a)=>{a.d(t,{L:()=>i});const i=a(67294).createContext({})},77120:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h,getMenuItemUtilityClass:()=>m,menuItemClasses:()=>b});var i=a(48294),r=a(67294),o=(a(93794),a(34151)),n=a(77428),s=a(13184),d=a(99691),l=a(55461);a(16829),a(75611),a(19329),a(87290),a(65555),a(36223),a(51486);const c=(0,i.a)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),p=(0,i.a)("MuiListItemIcon",["root","alignItemsFlexStart"]),u=(0,i.a)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function m(e){return(0,i.g)("MuiMenuItem",e)}const b=(0,i.a)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),g=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],v=(0,i.s)(s.B,{shouldForwardProp:e=>(0,i.r)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,i._)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,i.b)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.b)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${b.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,i.b)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,i.b)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${c.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${c.inset}`]:{marginLeft:52},[`& .${u.root}`]:{marginTop:0,marginBottom:0},[`& .${u.inset}`]:{paddingLeft:36},[`& .${p.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,i._)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${p.root} svg`]:{fontSize:"1.25rem"}})))),h=r.forwardRef((function(e,t){const a=(0,i.u)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:p=!1,divider:u=!1,disableGutters:b=!1,focusVisibleClassName:h,role:y="menuitem",tabIndex:f}=a,C=(0,i.e)(a,g),$=r.useContext(o.L),x={dense:p||$.dense||!1,disableGutters:b},I=r.useRef(null);(0,d.u)((()=>{s&&I.current&&I.current.focus()}),[s]);const k=(0,i._)({},a,{dense:x.dense,divider:u,disableGutters:b}),w=(e=>{const{disabled:t,dense:a,divider:r,disableGutters:o,selected:n,classes:s}=e,d=(0,i.h)({root:["root",a&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",n&&"selected"]},m,s);return(0,i._)({},s,d)})(a),O=(0,l.u)(I,t);let M;return a.disabled||(M=void 0!==f?f:-1),(0,n.j)(o.L.Provider,{value:x,children:(0,n.j)(v,(0,i._)({ref:O,role:y,tabIndex:M,component:c,focusVisibleClassName:(0,i.f)(w.focusVisible,h)},C,{ownerState:k,classes:w}))})}))}}]);