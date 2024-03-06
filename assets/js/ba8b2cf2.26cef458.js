"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3775],{61306:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var n=t(62540),i=t(65404);const d={title:"Compatibility packages"},c=void 0,l={id:"compat",title:"Compatibility packages",description:"The default React Query Builder components, being basic HTML5 form controls, are very flexible when it comes to styling (primarily through the controlClassnames prop). However, some style libraries require different HTML structure to style their form controls correctly.",source:"@site/docs/compat.md",sourceDirName:".",slug:"/compat",permalink:"/docs/next/compat",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/docs/compat.md",tags:[],version:"current",frontMatter:{title:"Compatibility packages"},sidebar:"mySidebar",previous:{title:"Common mistakes",permalink:"/docs/next/tips/common-mistakes"},next:{title:"TypeScript reference",permalink:"/docs/next/typescript"}},s={},o=[{value:"Packages",id:"packages",level:2},{value:"Usage",id:"usage",level:2},{value:"Other exports",id:"other-exports",level:2},{value:"Customization",id:"customization",level:2},{value:"Preload MUI components",id:"preload-mui-components",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The default React Query Builder components, being basic HTML5 form controls, are very flexible when it comes to styling (primarily through the ",(0,n.jsxs)(r.a,{href:"./components/querybuilder#controlclassnames",children:[(0,n.jsx)(r.code,{children:"controlClassnames"})," prop"]}),"). However, some style libraries require different HTML structure to style their form controls correctly."]}),"\n",(0,n.jsx)(r.h2,{id:"packages",children:"Packages"}),"\n",(0,n.jsxs)(r.p,{children:["Official component packages compatible with several popular style libraries are available under the ",(0,n.jsxs)(r.a,{href:"https://www.npmjs.com/org/react-querybuilder",children:[(0,n.jsx)(r.code,{children:"@react-querybuilder"})," org on npm"]}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["You can see each alternate component package in action by clicking the corresponding link on the ",(0,n.jsx)(r.a,{href:"/demo",children:"demo page"}),'. The "Demo" links in the table below will load the demo with the respective style library preselected, and the CodeSandbox links will open ',(0,n.jsx)(r.a,{href:"https://codesandbox.io",children:"codesandbox.io"})," with an editable example of the library preloaded."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Official site"}),(0,n.jsx)(r.th,{children:"Compatibility package"}),(0,n.jsx)(r.th,{children:"Demo"}),(0,n.jsx)(r.th,{children:"CodeSandbox"}),(0,n.jsx)(r.th,{children:"StackBlitz"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://ant.design/",children:"Ant Design"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/antd",children:"@react-querybuilder/antd"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/demo/antd",children:"Demo"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/antd?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/antd?file=src/App.tsx",children:"StackBlitz"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://getbootstrap.com/",children:"Bootstrap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/bootstrap",children:"@react-querybuilder/bootstrap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/demo/bootstrap",children:"Demo"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/bootstrap?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/bootstrap?file=src/App.tsx",children:"StackBlitz"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://bulma.io/",children:"Bulma"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/bulma",children:"@react-querybuilder/bulma"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/demo/bulma",children:"Demo"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/bulma?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/bulma?file=src/App.tsx",children:"StackBlitz"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/chakra",children:"@react-querybuilder/chakra"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/demo/chakra",children:"Demo"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/chakra?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/chakra?file=src/App.tsx",children:"StackBlitz"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://github.com/microsoft/fluentui/",children:"Fluent UI"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/fluent",children:"@react-querybuilder/fluent"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/demo/fluent",children:"Demo"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/fluent?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/fluent?file=src/App.tsx",children:"StackBlitz"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://mantine.dev/",children:"Mantine"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/mantine",children:"@react-querybuilder/mantine"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/demo/mantine",children:"Demo"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/mantine?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/mantine?file=src/App.tsx",children:"StackBlitz"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://mui.com/",children:"MUI"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/material",children:"@react-querybuilder/material"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/demo/material",children:"Demo"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/material?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/material?file=src/App.tsx",children:"StackBlitz"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://reactnative.dev/",children:"React Native"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/native",children:"@react-querybuilder/native"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.em,{children:"Coming soon!"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/native?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/native?file=src/App.tsx",children:"StackBlitz"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.tremor.so/",children:"Tremor"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@react-querybuilder/tremor",children:"@react-querybuilder/tremor"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/demo/tremor",children:"Demo"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/tremor?file=/src/App.tsx",children:"CodeSandbox"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/react-querybuilder/react-querybuilder/tree/main/examples/tremor?file=src/App.tsx",children:"StackBlitz"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["The recommended way to apply one of the other compatibility packages to ",(0,n.jsx)(r.code,{children:"<QueryBuilder />"})," is to wrap it in the appropriate ",(0,n.jsx)(r.code,{children:"QueryBuilder*"})," context provider."]}),"\n",(0,n.jsx)(r.p,{children:"This example uses the Ant Design library:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { QueryBuilderAntD } from '@react-querybuilder/antd';\nimport 'antd/dist/antd.compact.css'; // <- include this only if using `antd@<5`\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\nimport { defaultQuery, fields } from './constants';\n\nexport function App() {\n  return (\n    <QueryBuilderAntD>\n      <QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n    </QueryBuilderAntD>\n  );\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Each compatibility package exports its own context provider except for ",(0,n.jsx)(r.code,{children:"@react-querybuilder/native"}),". For that package, render ",(0,n.jsx)(r.code,{children:"<QueryBuilderNative />"})," instead of ",(0,n.jsx)(r.code,{children:"<QueryBuilder />"}),". They accept the same props."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Compatibility package"}),(0,n.jsx)(r.th,{children:"Context provider"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/antd"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"QueryBuilderAntD"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/bootstrap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"QueryBuilderBootstrap"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/bulma"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"QueryBuilderBulma"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/chakra"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"QueryBuilderChakra"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/fluent"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"QueryBuilderFluent"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/mantine"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"QueryBuilderMantine"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/material"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"QueryBuilderMaterial"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/tremor"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"QueryBuilderTremor"})})]})]})]}),"\n",(0,n.jsxs)(r.admonition,{type:"tip",children:[(0,n.jsxs)(r.p,{children:["React Query Builder context providers can be nested beneath one another to progressively add features and customization. For example, ",(0,n.jsx)(r.code,{children:"QueryBuilderDnD"})," adds drag-and-drop features to the query builder, and you can nest the compatibility package context providers beneath it (or vice versa) to add the style library's components while maintaining the drag-and-drop features."]}),(0,n.jsxs)(r.p,{children:["This example uses the Bulma library ",(0,n.jsx)(r.em,{children:"and"})," enables drag-and-drop:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { QueryBuilderBulma } from '@react-querybuilder/bulma';\nimport { QueryBuilderDnD } from '@react-querybuilder/dnd';\nimport 'bulma/bulma.sass';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\nimport { defaultQuery, fields } from './constants';\n\nexport function App() {\n  return (\n    <QueryBuilderDnD>\n      <QueryBuilderBulma>\n        <QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n      </QueryBuilderBulma>\n    </QueryBuilderDnD>\n  );\n}\n"})})]}),"\n",(0,n.jsx)(r.h2,{id:"other-exports",children:"Other exports"}),"\n",(0,n.jsxs)(r.p,{children:["Each compatibility package exports a ",(0,n.jsx)(r.code,{children:"*ControlElements"})," object that can be used as the ",(0,n.jsxs)(r.a,{href:"./components/querybuilder#controlelements",children:[(0,n.jsx)(r.code,{children:"controlElements"})," prop"]})," in ",(0,n.jsx)(r.code,{children:"<QueryBuilder />"}),". Some packages also export a ",(0,n.jsx)(r.code,{children:"*ControlClassnames"})," object for use with the ",(0,n.jsxs)(r.a,{href:"./components/querybuilder#controlclassnames",children:[(0,n.jsx)(r.code,{children:"controlClassnames"})," prop"]})," and a ",(0,n.jsx)(r.code,{children:"*Translations"})," object for use with the ",(0,n.jsx)(r.a,{href:"./components/querybuilder#translations",children:(0,n.jsx)(r.code,{children:"translations"})})," prop. Use these exports if you need more fine-grained control over which standard components get replaced. For even more detailed ",(0,n.jsx)(r.a,{href:"#customization",children:"customization"}),", continue reading below."]}),"\n",(0,n.jsx)(r.p,{children:"This example uses the Bootstrap library:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import {\n  bootstrapControlClassnames,\n  bootstrapControlElements,\n} from '@react-querybuilder/bootstrap';\nimport 'bootstrap/scss/bootstrap.scss';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { defaultQuery, fields } from './constants';\n\nexport function App() {\n  return (\n    <QueryBuilder\n      fields={fields}\n      defaultQuery={defaultQuery}\n      controlElements={bootstrapControlElements}\n      controlClassnames={bootstrapControlClassnames}\n    />\n  );\n}\n"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Compatibility package"}),(0,n.jsxs)(r.th,{children:[(0,n.jsx)(r.code,{children:"controlElements"})," object"]})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/antd"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"antdControlElements"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/bootstrap"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bootstrapControlElements"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/bulma"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"bulmaControlElements"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/chakra"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"chakraControlElements"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/fluent"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"fluentControlElements"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/mantine"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"mantineControlElements"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/material"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"materialControlElements"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/native"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"nativeControlElements"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/tremor"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"tremorControlElements"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"customization",children:"Customization"}),"\n",(0,n.jsxs)(r.p,{children:["All of the compatibility components except the ",(0,n.jsx)(r.code,{children:"*ValueEditor"}),"s accept props defined by the style library for the actual rendered component in addition to the standard props defined by ",(0,n.jsx)(r.code,{children:"react-querybuilder"}),". This allows you to idiomatically customize the style library's component while leaving the query builder integration up to the compatibility layer."]}),"\n",(0,n.jsxs)(r.p,{children:["For example, the ",(0,n.jsx)(r.code,{children:"AntDActionElement"})," component from ",(0,n.jsx)(r.code,{children:"@react-querybuilder/antd"})," renders a ",(0,n.jsx)(r.code,{children:"Button"})," component from ",(0,n.jsx)(r.code,{children:"antd"}),", so it can accept properties of the ",(0,n.jsx)(r.code,{children:"ActionWithRulesProps"})," interface from ",(0,n.jsx)(r.code,{children:"react-querybuilder"})," ",(0,n.jsx)(r.em,{children:"and"})," the ",(0,n.jsx)(r.code,{children:"ButtonProps"})," interface from ",(0,n.jsx)(r.code,{children:"antd"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["In the example below, the ",(0,n.jsx)(r.code,{children:"size"})," prop is accepted because it's one of ",(0,n.jsx)(r.code,{children:"antd"}),"'s ",(0,n.jsx)(r.code,{children:"Button"})," props (from the ",(0,n.jsx)(r.code,{children:"ButtonProps"})," interface), even though it's not included in the ",(0,n.jsx)(r.code,{children:"ActionWithRulesProps"})," interface."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { AntDActionElement, antdControlElements } from '@react-querybuilder/antd';\nimport { QueryBuilder, type ActionWithRulesProps } from 'react-querybuilder';\n\nconst MyAntDActionElement = (props: ActionWithRulesProps) => (\n  <AntDActionElement {...props} size=\"large\" />\n);\n\nexport function App() {\n  return (\n    <QueryBuilder\n      controlElements={{\n        ...antdControlElements,\n        addRuleAction: MyAntDActionElement,\n        addGroupAction: MyAntDActionElement,\n        cloneRuleAction: MyAntDActionElement,\n        cloneGroupAction: MyAntDActionElement,\n        lockRuleAction: MyAntDActionElement,\n        lockGroupAction: MyAntDActionElement,\n        removeRuleAction: MyAntDActionElement,\n        removeGroupAction: MyAntDActionElement,\n      }}\n    />\n  );\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["This list shows which library components' props will be accepted by the compatibility components, in addition to those defined by ",(0,n.jsx)(r.code,{children:"react-querybuilder"}),"."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Component"}),(0,n.jsx)(r.th,{children:"Base props (from RQB)"}),(0,n.jsx)(r.th,{children:"Rendered library component"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/antd"})})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"AntDActionElement"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ActionWithRulesProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Button } from 'antd'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"AntDDragHandle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"DragHandleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { HolderOutlined } from '@ant-design/icons'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"AntDNotToggle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"NotToggleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Switch } from 'antd'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"AntDValueSelector"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"VersatileSelectorProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Select } from 'antd'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/chakra"})})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ChakraActionElement"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ActionWithRulesProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Button } from '@chakra-ui/react'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ChakraDragHandle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"DragHandleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { IconButton } from '@chakra-ui/react'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ChakraNotToggle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"NotToggleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Switch } from '@chakra-ui/react'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ChakraValueSelector"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"VersatileSelectorProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Select } from '@chakra-ui/react'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/fluent"})})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FluentActionElement"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ActionWithRulesProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Button } from '@fluentui/react-components'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FluentDragHandle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"DragHandleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Text } from '@fluentui/react-components'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FluentNotToggle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"NotToggleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Switch } from '@fluentui/react-components'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FluentValueSelector"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"VersatileSelectorProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Dropdown, Select } from '@fluentui/react-components'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/mantine"})})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MantineActionElement"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ActionWithRulesProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Button } from '@mantine/core'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MantineNotToggle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"NotToggleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Switch } from '@mantine/core'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MantineValueSelector"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"VersatileSelectorProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Select } from '@mantine/core'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/material"})})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MaterialActionElement"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ActionWithRulesProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Button } from '@mui/material'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MaterialDragHandle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"DragHandleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { DragIndicator } from '@mui/icons-material'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MaterialNotToggle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"NotToggleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Switch } from '@mui/material'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"MaterialValueSelector"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"VersatileSelectorProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Select } from '@mui/material'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"@react-querybuilder/tremor"})})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TremorActionElement"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ActionWithRulesProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Button } from '@tremor/react'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TremorNotToggle"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"NotToggleProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { Switch } from '@tremor/react'"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TremorValueSelector"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"VersatileSelectorProps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"import { MultiSelect, Select } from '@tremor/react'"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"preload-mui-components",children:"Preload MUI components"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["As of v6.2.0, MUI components will be loaded synchronously in traditional environments. However, preloading MUI components ",(0,n.jsx)(r.em,{children:"may"})," still be necessary when using React Server Components, even if the component file rendering the query builder includes the ",(0,n.jsx)(r.code,{children:'"use client"'})," directive."]})}),"\n",(0,n.jsxs)(r.p,{children:["Prior to v6.2.0, the ",(0,n.jsx)(r.code,{children:"@react-querybuilder/material"})," compatibility package would load components from ",(0,n.jsx)(r.code,{children:"@mui/material"})," asynchronously in order to properly inherit the theme context (",(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/issues/321",children:"issue"}),"/",(0,n.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/pull/324",children:"PR"}),"). This meant that the query builder would initially be rendered with the default components, and then\u2014very quickly, if all went well\u2014the MUI components would replace them."]}),"\n",(0,n.jsxs)(r.p,{children:["To avoid rendering the default components and render the MUI components immediately instead, import the MUI components in your application code and assign them as properties of the ",(0,n.jsx)(r.code,{children:"muiComponents"})," prop on the ",(0,n.jsx)(r.code,{children:"QueryBuilderMaterial"})," context provider. (The individual MUI compatibility components\u2014",(0,n.jsx)(r.code,{children:"MaterialValueEditor"}),", ",(0,n.jsx)(r.code,{children:"MaterialActionElement"}),", etc.\u2014also accept an optional ",(0,n.jsx)(r.code,{children:"muiComponents"})," prop.)"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"import { createTheme, ThemeProvider } from '@mui/material/styles';\nimport { QueryBuilderMaterial } from '@react-querybuilder/material';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { defaultQuery, fields } from './constants';\n// highlight-start\nimport {\n  Close as CloseIcon,\n  ContentCopy as ContentCopyIcon,\n  DragIndicator,\n  KeyboardArrowDown as KeyboardArrowDownIcon,\n  KeyboardArrowUp as KeyboardArrowUpIcon,\n  Lock as LockIcon,\n  LockOpen as LockOpenIcon,\n} from '@mui/icons-material';\nimport {\n  Button,\n  Checkbox,\n  FormControl,\n  FormControlLabel,\n  Input,\n  ListSubheader,\n  MenuItem,\n  Radio,\n  RadioGroup,\n  Select,\n  Switch,\n  TextareaAutosize,\n} from '@mui/material';\n\nconst muiComponents = {\n  Button,\n  Checkbox,\n  CloseIcon,\n  ContentCopyIcon,\n  DragIndicator,\n  FormControl,\n  FormControlLabel,\n  Input,\n  KeyboardArrowDownIcon,\n  KeyboardArrowUpIcon,\n  ListSubheader,\n  LockIcon,\n  LockOpenIcon,\n  MenuItem,\n  Radio,\n  RadioGroup,\n  Select,\n  Switch,\n  TextareaAutosize,\n};\n// highlight-end\n\nconst muiTheme = createTheme();\n\nexport function App() {\n  return (\n    <ThemeProvider theme={muiTheme}>\n      {/* highlight-start */}\n      <QueryBuilderMaterial muiComponents={muiComponents}>\n        {/* highlight-end */}\n        <QueryBuilder fields={fields} defaultQuery={defaultQuery} />\n      </QueryBuilderMaterial>\n    </ThemeProvider>\n  );\n}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},65404:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>l});var n=t(63696);const i={},d=n.createContext(i);function c(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);