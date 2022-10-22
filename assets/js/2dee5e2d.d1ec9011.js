"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(r),c=n,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return r?a.createElement(k,l(l({ref:t},d),{},{components:r})):a.createElement(k,l({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},98833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(83117),n=(r(67294),r(3905));const i={title:"Compatibility packages"},l=void 0,o={unversionedId:"compat",id:"version-5/compat",title:"Compatibility packages",description:"The default React Query Builder components, being basic HTML5 form controls, are very flexible when it comes to styling (primarily through the controlClassnames prop). However, some style libraries require different HTML structure to style their form controls correctly.",source:"@site/versioned_docs/version-5/compat.mdx",sourceDirName:".",slug:"/compat",permalink:"/docs/compat",draft:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-5/compat.mdx",tags:[],version:"5",frontMatter:{title:"Compatibility packages"},sidebar:"mySidebar",previous:{title:"Common mistakes",permalink:"/docs/tips/common-mistakes"},next:{title:"TypeScript reference",permalink:"/docs/typescript"}},p={},m=[{value:"Packages",id:"packages",level:2},{value:"Usage",id:"usage",level:2},{value:"Other exports",id:"other-exports",level:2},{value:"Customization",id:"customization",level:2},{value:"Preload MUI components",id:"preload-mui-components",level:2}],d={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The default React Query Builder components, being basic HTML5 form controls, are very flexible when it comes to styling (primarily through the ",(0,n.kt)("a",{parentName:"p",href:"./api/querybuilder#controlclassnames"},(0,n.kt)("inlineCode",{parentName:"a"},"controlClassnames")," prop"),"). However, some style libraries require different HTML structure to style their form controls correctly."),(0,n.kt)("h2",{id:"packages"},"Packages"),(0,n.kt)("p",null,"Official component packages compatible with several popular style libraries are available under the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/org/react-querybuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"@react-querybuilder")," org on npm"),"."),(0,n.kt)("p",null,"You can see each alternate component package in action by clicking the corresponding link on the ",(0,n.kt)("a",{parentName:"p",href:"/demo"},"demo page"),'. The "Demo" links in the table below will load the demo with the respective style library preselected, and the CodeSandbox links will open ',(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io"},"codesandbox.io")," with an editable example of the library preloaded."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Official site"),(0,n.kt)("th",{parentName:"tr",align:null},"Compatibility package"),(0,n.kt)("th",{parentName:"tr",align:null},"Demo"),(0,n.kt)("th",{parentName:"tr",align:null},"CodeSandbox"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://ant.design/"},"Ant Design")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@react-querybuilder/antd"},"@react-querybuilder/antd")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/demo/antd"},"Demo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/antd"},"CodeSandbox"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://getbootstrap.com/"},"Bootstrap")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@react-querybuilder/bootstrap"},"@react-querybuilder/bootstrap")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/demo/bootstrap"},"Demo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/bootstrap"},"CodeSandbox"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://bulma.io/"},"Bulma")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@react-querybuilder/bulma"},"@react-querybuilder/bulma")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/demo/bulma"},"Demo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/bulma"},"CodeSandbox"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://chakra-ui.com/"},"Chakra UI")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@react-querybuilder/chakra"},"@react-querybuilder/chakra")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/demo/chakra"},"Demo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/chakra"},"CodeSandbox"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mui.com/"},"MUI")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@react-querybuilder/material"},"@react-querybuilder/material")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/demo/material"},"Demo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://codesandbox.io/s/github/react-querybuilder/react-querybuilder/tree/main/examples/material"},"CodeSandbox"))))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The recommended way to apply a compatibility package to ",(0,n.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />")," is to wrap it in the ",(0,n.kt)("inlineCode",{parentName:"p"},"QueryBuilder*")," context provider from the compatibility library."),(0,n.kt)("p",null,"This example uses the Ant Design library:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilderAntD } from '@react-querybuilder/antd';\nimport 'antd/dist/antd.compact.css';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\nimport { defaultQuery, fields } from './constants';\n\nexport function App() {\n  return (\n    <QueryBuilderAntD>\n      <QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n    </QueryBuilderAntD>\n  );\n}\n")),(0,n.kt)("p",null,"Each compatibility package exports its own context provider."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Compatibility package"),(0,n.kt)("th",{parentName:"tr",align:null},"Context provider"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"@react-querybuilder/antd")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"QueryBuilderAntD"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"@react-querybuilder/bootstrap")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"QueryBuilderBootstrap"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"@react-querybuilder/bulma")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"QueryBuilderBulma"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"@react-querybuilder/chakra")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"QueryBuilderChakra"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"@react-querybuilder/material")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"QueryBuilderMaterial"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"React Query Builder context providers can be nested beneath one another to progressively add features and customization. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"QueryBuilderDnD")," adds drag-and-drop features to the query builder, and you can nest the compatibility package context providers beneath it (or vice versa) to add the style library's components while maintaining the drag-and-drop features."),(0,n.kt)("p",{parentName:"admonition"},"This example uses the Bulma library ",(0,n.kt)("em",{parentName:"p"},"and")," enables drag-and-drop:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { QueryBuilderBulma } from '@react-querybuilder/bulma';\nimport { QueryBuilderDnD } from '@react-querybuilder/dnd';\nimport 'bulma/bulma.sass';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\nimport { defaultQuery, fields } from './constants';\n\nexport function App() {\n  return (\n    <QueryBuilderDnD>\n      <QueryBuilderBulma>\n        <QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n      </QueryBuilderBulma>\n    </QueryBuilderDnD>\n  );\n}\n"))),(0,n.kt)("h2",{id:"other-exports"},"Other exports"),(0,n.kt)("p",null,"Each compatibility package exports a ",(0,n.kt)("inlineCode",{parentName:"p"},"*ControlElements")," object that can be used as the ",(0,n.kt)("a",{parentName:"p",href:"./api/querybuilder#controlelements"},(0,n.kt)("inlineCode",{parentName:"a"},"controlElements")," prop")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"<QueryBuilder />"),". Some packages also export a ",(0,n.kt)("inlineCode",{parentName:"p"},"*ControlClassnames")," object for use with the ",(0,n.kt)("a",{parentName:"p",href:"./api/querybuilder#controlclassnames"},(0,n.kt)("inlineCode",{parentName:"a"},"controlClassnames")," prop"),". Use these exports if you need more fine-grained control over which standard components get replaced. For even more detailed ",(0,n.kt)("a",{parentName:"p",href:"#customization"},"customization"),", continue reading below."),(0,n.kt)("p",null,"This example uses the Bootstrap library:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  bootstrapControlClassnames,\n  bootstrapControlElements,\n} from '@react-querybuilder/bootstrap';\nimport 'bootstrap/scss/bootstrap.scss';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { defaultQuery, fields } from './constants';\n\nexport function App() {\n  return (\n    <QueryBuilder\n      fields={fields}\n      defaultQuery={defaultQuery}\n      controlElements={bootstrapControlElements}\n      controlClassnames={bootstrapControlClassnames}\n    />\n  );\n}\n")),(0,n.kt)("h2",{id:"customization"},"Customization"),(0,n.kt)("p",null,"Many of the compatibility components accept props defined by the style library for the actual rendered component in addition to the standard props defined by ",(0,n.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),". This allows you to idiomatically customize the style library's component while leaving the query builder integration up to the compatibility layer."),(0,n.kt)("p",null,"For example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"AntDActionElement")," component from ",(0,n.kt)("inlineCode",{parentName:"p"},"@react-querybuilder/antd")," renders the ",(0,n.kt)("inlineCode",{parentName:"p"},"Button")," component from ",(0,n.kt)("inlineCode",{parentName:"p"},"antd"),", so it can accept properties of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ActionWithRulesProps")," interface from ",(0,n.kt)("inlineCode",{parentName:"p"},"react-querybuilder")," ",(0,n.kt)("em",{parentName:"p"},"and")," the ",(0,n.kt)("inlineCode",{parentName:"p"},"ButtonProps")," interface from ",(0,n.kt)("inlineCode",{parentName:"p"},"antd"),"."),(0,n.kt)("p",null,"In the example below, the ",(0,n.kt)("inlineCode",{parentName:"p"},"size")," prop is accepted because it's one of ",(0,n.kt)("inlineCode",{parentName:"p"},"antd"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"Button")," props (from the ",(0,n.kt)("inlineCode",{parentName:"p"},"ButtonProps")," interface), even though it's not included in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ActionWithRulesProps")," interface."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AntDActionElement, antdControlElements } from '@react-querybuilder/antd';\nimport { QueryBuilder, type ActionWithRulesProps } from 'react-querybuilder';\n\nconst MyAntDActionElement = (props: ActionWithRulesProps) => (\n  <AntDActionElement {...props} size=\"large\" />\n);\n\nexport function App() {\n  return (\n    <QueryBuilder\n      controlElements={{\n        ...antdControlElements,\n        addRuleAction: MyAntDActionElement,\n        addGroupAction: MyAntDActionElement,\n        cloneRuleAction: MyAntDActionElement,\n        cloneGroupAction: MyAntDActionElement,\n        lockRuleAction: MyAntDActionElement,\n        lockGroupAction: MyAntDActionElement,\n        removeRuleAction: MyAntDActionElement,\n        removeGroupAction: MyAntDActionElement,\n      }}\n    />\n  );\n}\n")),(0,n.kt)("p",null,"This list shows which library components' props will be accepted by the compatibility components, in addition to those defined by ",(0,n.kt)("inlineCode",{parentName:"p"},"react-querybuilder"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:null},"Base props (from RQB)"),(0,n.kt)("th",{parentName:"tr",align:null},"Rendered library component"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"AntDActionElement")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ActionWithRulesProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import { Button } from 'antd'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"AntDDragHandle")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"DragHandleProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import { HolderOutlined } from '@ant-design/icons'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"AntDNotToggle")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"NotToggleProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import { Switch } from 'antd'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"AntDValueSelector")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"VersatileSelectorProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import { Select } from 'antd'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ChakraActionElement")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ActionWithRulesProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import { Button } from '@chakra-ui/react'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ChakraDragHandle")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"DragHandleProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import { IconButton } from '@chakra-ui/react'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ChakraNotToggle")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"NotToggleProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import { Switch } from '@chakra-ui/react'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ChakraValueSelector")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"VersatileSelectorProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import { Select } from '@chakra-ui/react'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MaterialActionElement")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ActionWithRulesProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import Button from '@mui/material/Button'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MaterialDragHandle")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"DragHandleProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import DragIndicator from '@mui/icons-material/DragIndicator'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MaterialNotToggle")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"NotToggleProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import Switch from '@mui/material/Switch'"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"MaterialValueSelector")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"VersatileSelectorProps")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"import Select from '@mui/material/Select'"))))),(0,n.kt)("h2",{id:"preload-mui-components"},"Preload MUI components"),(0,n.kt)("p",null,"By default, the ",(0,n.kt)("inlineCode",{parentName:"p"},"@react-querybuilder/material")," compatibility package loads components from ",(0,n.kt)("inlineCode",{parentName:"p"},"@mui/material")," asynchronously in order to properly inherit the theme context (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/issues/321"},"issue"),"/",(0,n.kt)("a",{parentName:"p",href:"https://github.com/react-querybuilder/react-querybuilder/pull/324"},"PR"),"). This means that the query builder will initially be rendered with the default components, and then\u2014very quickly, if all goes well\u2014the MUI components will replace them."),(0,n.kt)("p",null,"To avoid rendering the default components and render the MUI components immediately instead, import the MUI components in your application code and assign them as properties of the ",(0,n.kt)("inlineCode",{parentName:"p"},"muiComponents")," prop on the ",(0,n.kt)("inlineCode",{parentName:"p"},"QueryBuilderMaterial")," context provider. (Each individual compatibility component also accepts an optional ",(0,n.kt)("inlineCode",{parentName:"p"},"muiComponents")," prop.)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createTheme, ThemeProvider } from '@mui/material/styles';\nimport { QueryBuilderMaterial } from '@react-querybuilder/material';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { defaultQuery, fields } from './constants';\n// highlight-start\nimport Checkbox from '@mui/material/Checkbox';\nimport DragIndicator from '@mui/material/DragIndicator';\nimport FormControl from '@mui/material/FormControl';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport Input from '@mui/material/Input';\nimport ListSubheader from '@mui/material/ListSubheader';\nimport MenuItem from '@mui/material/MenuItem';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport Select from '@mui/material/Select';\nimport Switch from '@mui/material/Switch';\nimport TextareaAutosize from '@mui/material/TextareaAutosize';\n\nconst muiComponents = {\n  Checkbox,\n  DragIndicator,\n  FormControl,\n  FormControlLabel,\n  Input,\n  ListSubheader,\n  MenuItem,\n  Radio,\n  RadioGroup,\n  Select,\n  Switch,\n  TextareaAutosize,\n};\n// highlight-end\n\nconst muiTheme = createTheme();\n\nexport function App() {\n  return (\n    <ThemeProvider theme={muiTheme}>\n      {/* highlight-start */}\n      <QueryBuilderMaterial muiComponents={muiComponents}>\n        {/* highlight-end */}\n        <QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n      </QueryBuilderMaterial>\n    </ThemeProvider>\n  );\n}\n")))}u.isMDXComponent=!0}}]);