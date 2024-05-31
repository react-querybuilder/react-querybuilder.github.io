"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85640],{1333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(62540),r=n(65404),o=n(67650);const s={title:"Custom components with fallbacks",description:"Augmenting the default components",hide_table_of_contents:!0},i=void 0,d={id:"tips/custom-with-fallback",title:"Custom components with fallbacks",description:"Augmenting the default components",source:"@site/versioned_docs/version-6/tips/custom-with-fallback.mdx",sourceDirName:"tips",slug:"/tips/custom-with-fallback",permalink:"/docs/6/tips/custom-with-fallback",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/tips/custom-with-fallback.mdx",tags:[],version:"6",frontMatter:{title:"Custom components with fallbacks",description:"Augmenting the default components",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Limit rule groups",permalink:"/docs/6/tips/limit-groups"},next:{title:"External controls",permalink:"/docs/6/tips/external-controls"}},l={},c=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["You may run into a situation where one of the default components ",(0,a.jsx)(t.em,{children:"almost"})," meets your requirements, but you don't want to recreate the entire component just to slightly modify the behavior. Falling back to the default component after implementing your custom behavior is a good way to keep your implementation up to date with the current version's standard features while retaining the flexibility of a fully custom solution."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, let's say you need a value editor that presents the user with a date picker (not the browser's default date picker), but only for certain fields. The default ",(0,a.jsx)(t.code,{children:"ValueEditor"})," does not implement a date picker, so you'll need to use a custom component."]}),"\n",(0,a.jsxs)(t.p,{children:["However, you don't need to copy/paste the default ",(0,a.jsx)(t.code,{children:"ValueEditor"})," code to take advantage of its functionality. Simply spread the same props that were passed in to your custom component (",(0,a.jsx)(t.code,{children:"<ValueEditor {...props} />"}),") and return that if your custom behavior is not applicable."]}),"\n",(0,a.jsxs)(t.p,{children:["Let's create a custom value editor that uses the ",(0,a.jsx)(t.a,{href:"https://reactdatepicker.com/",children:(0,a.jsx)(t.code,{children:"react-datepicker"})})," library. First we'll set up the ",(0,a.jsx)(t.code,{children:"fields"})," array. Each element is a standard ",(0,a.jsx)(t.code,{children:"Field"})," object, but the two date-type fields have a special attribute called ",(0,a.jsx)(t.code,{children:"datatype"})," that will let our custom value editor know when and how to display the date picker."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// fields.ts\nimport { Field } from 'react-querybuilder';\n\nexport const fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      { name: 'beginsWith', label: 'begins with' },\n    ],\n  },\n  {\n    name: 'dateOfBirth',\n    label: 'Date of Birth',\n    operators: [{ name: '=', label: 'is' }],\n    datatype: 'date',\n  },\n  {\n    name: 'dateRange',\n    label: 'Date Range',\n    operators: [{ name: 'between', label: 'is between' }],\n    datatype: 'dateRange',\n  },\n];\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Next, we'll define the custom value editor. The component will display a standard date picker if the ",(0,a.jsx)(t.code,{children:"datatype"})," for the field is ",(0,a.jsx)(t.code,{children:'"date"'}),", and a date ",(0,a.jsx)(t.em,{children:"range"})," picker if the ",(0,a.jsx)(t.code,{children:"datatype"})," is ",(0,a.jsx)(t.code,{children:'"dateRange"'}),". If the ",(0,a.jsx)(t.code,{children:"datatype"})," is something else or ",(0,a.jsx)(t.code,{children:"undefined"}),", then the component will simply forward its props to the default ",(0,a.jsx)(t.code,{children:"ValueEditor"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["We're also using the ",(0,a.jsx)(t.a,{href:"https://date-fns.org/",children:(0,a.jsx)(t.code,{children:"date-fns"})})," library to help parse and format dates. Storing the date values as strings instead of ",(0,a.jsx)(t.code,{children:"Date"})," objects helps ensure that the ",(0,a.jsx)(t.code,{children:"query"})," object remains serializable in case we want to safely use ",(0,a.jsx)(t.code,{children:"JSON.stringify"}),". (Date ranges are stored as a comma-separated pair of strings.)"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"// CustomValueEditor.tsx\nimport { format, parse } from 'date-fns';\nimport DatePicker from 'react-datepicker';\nimport 'react-datepicker/dist/react-datepicker.css';\nimport { ValueEditor, ValueEditorProps } from 'react-querybuilder';\n\nconst dateFormat = 'yyyy-MM-dd';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.fieldData.datatype === 'date') {\n    return (\n      <div>\n        <DatePicker\n          dateFormat={dateFormat}\n          selected={!props.value ? null : parse(props.value, dateFormat, new Date())}\n          onChange={(d: Date) => props.handleOnChange(d ? format(d, dateFormat) : null)}\n        />\n      </div>\n    );\n  } else if (props.fieldData.datatype === 'dateRange') {\n    const [startDate, endDate] = props.value.split(',');\n    return (\n      <div>\n        <DatePicker\n          selectsRange\n          dateFormat={dateFormat}\n          startDate={!startDate ? null : parse(startDate, dateFormat, new Date())}\n          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}\n          onChange={(update: [Date, Date]) => {\n            const [s, e] = update;\n            props.handleOnChange(\n              [!s ? '' : format(s, dateFormat), !e ? '' : format(e, dateFormat)].join(',')\n            );\n          }}\n        />\n      </div>\n    );\n  }\n  return <ValueEditor {...props} />;\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Finally, we can configure the main ",(0,a.jsx)(t.code,{children:"QueryBuilder"})," component to use our custom value editor with the ",(0,a.jsx)(t.code,{children:"controlElements"})," prop."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"// App.tsx\nimport { useState } from 'react';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { fields } from './fields';\n\nexport default function App() {\n  const [query, setQuery] = useState({ combinator: 'and', rules: [] });\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      // highlight-start\n      controlElements={{ valueEditor: CustomValueEditor }}\n      // highlight-end\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:'An interactive demo is below. Note how the "Name" field uses a text input, the "Date of Birth" field uses a standard date picker, and the "Date Range" field uses the date range picker.'}),"\n",(0,a.jsxs)(o.b,{rqbVersion:6,customSetup:{dependencies:{"date-fns":"latest","react-datepicker":"latest"}},options:{editorHeight:690},children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { fields } from './fields';\nimport { initialQuery } from './initialQuery';\n\nexport default function App() {\n  const [query, setQuery] = useState(initialQuery);\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={q => setQuery(q)}\n      controlElements={{ valueEditor: CustomValueEditor }}\n    />\n  );\n}\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:"CustomValueEditor.tsx active",children:"import { format, parse } from 'date-fns';\nimport DatePicker from 'react-datepicker';\nimport 'react-datepicker/dist/react-datepicker.css';\nimport { ValueEditor, ValueEditorProps } from 'react-querybuilder';\n\nconst dateFormat = 'yyyy-MM-dd';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.fieldData.datatype === 'date') {\n    return (\n      <div>\n        <DatePicker\n          dateFormat={dateFormat}\n          selected={!props.value ? null : parse(props.value, dateFormat, new Date())}\n          onChange={(d: Date) => props.handleOnChange(d ? format(d, dateFormat) : null)}\n        />\n      </div>\n    );\n  } else if (props.fieldData.datatype === 'dateRange') {\n    const [startDate, endDate] = props.value.split(',');\n    return (\n      <div>\n        <DatePicker\n          selectsRange\n          dateFormat={dateFormat}\n          startDate={!startDate ? null : parse(startDate, dateFormat, new Date())}\n          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}\n          onChange={(range: [Date, Date]) => {\n            const [s, e] = range;\n            props.handleOnChange(\n              [!s ? '' : format(s, dateFormat), !e ? '' : format(e, dateFormat)].join(',')\n            );\n          }}\n        />\n      </div>\n    );\n  }\n  return <ValueEditor {...props} />;\n};\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"fields.ts",children:"import { Field } from 'react-querybuilder';\n\nexport const fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      { name: 'beginsWith', label: 'begins with' },\n    ],\n  },\n  {\n    name: 'dateOfBirth',\n    label: 'Date of Birth',\n    operators: [{ name: '=', label: 'is' }],\n    datatype: 'date',\n  },\n  {\n    name: 'dateRange',\n    label: 'Date Range',\n    operators: [{ name: 'between', label: 'is between' }],\n    datatype: 'dateRange',\n  },\n];\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"initialQuery.ts",children:"import { format, subDays } from 'date-fns';\nimport { RuleGroupType } from 'react-querybuilder';\n\nconst initialRange = [subDays(new Date(), 14), new Date()]\n  .map(d => format(d, 'yyyy-MM-dd'))\n  .join(',');\n\nexport const initialQuery: RuleGroupType = {\n  rules: [\n    {\n      field: 'name',\n      operator: '=',\n      value: 'Steve Vai',\n    },\n    {\n      field: 'dateOfBirth',\n      operator: '=',\n      value: '1960-06-06',\n    },\n    {\n      field: 'dateRange',\n      value: initialRange,\n      operator: 'between',\n    },\n  ],\n  combinator: 'and',\n  not: false,\n};\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-css",children:".react-datepicker-wrapper input {\n  /* Widen the input to show both dates */\n  width: 180px;\n}\n"})})]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:['Other examples of the "fallback" technique can be seen in the ',(0,a.jsx)(t.a,{href:"./limit-groups#conditionally-allow-new-groups",children:"Limit rule groups"})," page and ",(0,a.jsx)(t.a,{href:"https://stackoverflow.com/questions/68447510/react-query-builder-question-is-there-a-way-to-disable-a-field-option-when-addi/69443288#69443288",children:"these"})," ",(0,a.jsx)(t.a,{href:"https://stackoverflow.com/questions/61768845/progamatically-show-hide-operator-rule-and-group-button-in-react-querybuilder/69443467#69443467",children:"two"})," StackOverflow answers."]})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},67650:(e,t,n)=>{n.d(t,{b:()=>c});var a=n(62540),r=n(11871),o=n(64871),s=n(63696);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}const c=({children:e,customSetup:t,options:n,rqbVersion:i=7})=>{var c,p;const u="dark"===(0,o.G)().colorMode,m=s.Children.toArray(e),h=u?"#343a46":"#ffffff";let f=!0;const y={};for(const a of m){const{props:e}=a.props.children;let t,n=!1,r=!1;if(e.metastring){const[a,...o]=e.metastring.split(" ");t="/"+a,n=o.includes("hidden"),r=o.includes("active")}else if("language-tsx"===e.className)t="/App.tsx";else if("language-js"===e.className)t="/App.js";else{if("language-css"!==e.className)throw new Error(`Code block is missing a filename: ${e.children}`);t="/styles.css"}if(y[t])throw new Error(`File ${t} was defined multiple times. Each file snippet should have a unique path name.`);"/styles.css"!==t||n||(f=!1),y[t]={code:e.children,hidden:n,active:r}}const b=RegExp("^import +'react-querybuilder/dist/query-builder\\.s?css';?$").test(null===(c=y["/App.tsx"])||void 0===c?void 0:c.code)?"":"@import 'react-querybuilder/dist/query-builder.css';",g=`\nbody {\n  background-color: ${h};\n}\npre {\n  padding: 1rem;\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 0.25rem;\n  white-space: pre-wrap;\n}\n${u?"\nh1, h2, h3, h4, h5, h6 {\n  color: white;\n}":""}`;var x;y["/styles.css"]={code:[b,g,null!==(x=null===(p=y["/styles.css"])||void 0===p?void 0:p.code)&&void 0!==x?x:""].join("\n\n"),hidden:f};const w=4===i?{"react-querybuilder":"^4"}:{"@react-querybuilder/dnd":`^${i||"7"}`,"react-querybuilder":`^${i||"7"}`,"react-dnd":">=14","react-dnd-html5-backend":">=14"},j=l(d({},t),{dependencies:d({},null==t?void 0:t.dependencies,w)});return(0,a.jsx)("div",{className:"sandpackrqb",children:(0,a.jsx)(r.OZ,{files:y,theme:u?"dark":void 0,template:"vite-react-ts",customSetup:j,options:n})},`v${i}`)}}}]);