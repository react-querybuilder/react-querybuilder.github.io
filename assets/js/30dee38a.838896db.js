"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["15304"],{26450(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>u,frontMatter:()=>i,contentTitle:()=>l,toc:()=>c,assets:()=>d});var n=JSON.parse('{"id":"tips/custom-with-fallback","title":"Custom components with fallbacks","description":"Augmenting the default components","source":"@site/versioned_docs/version-7/tips/custom-with-fallback.mdx","sourceDirName":"tips","slug":"/tips/custom-with-fallback","permalink":"/docs/tips/custom-with-fallback","draft":false,"unlisted":false,"editUrl":"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-7/tips/custom-with-fallback.mdx","tags":[],"version":"7","frontMatter":{"title":"Custom components with fallbacks","description":"Augmenting the default components","hide_table_of_contents":true},"sidebar":"mySidebar","previous":{"title":"Managing operators","permalink":"/docs/tips/managing-operators"},"next":{"title":"Async option list loading","permalink":"/docs/tips/async-option-lists"}}'),a=r(62540),o=r(43023),s=r(52162);let i={title:"Custom components with fallbacks",description:"Augmenting the default components",hide_table_of_contents:!0},l,d={},c=[];function p(e){let t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Sometimes a default component nearly meets your needs, but requires minor behavioral modifications. Rather than recreating the entire component, you can implement custom behavior and fall back to the default component when appropriate. This approach keeps your implementation current with standard features while maintaining customization flexibility."}),"\n",(0,a.jsxs)(t.p,{children:["Consider a scenario where you need a custom date picker for specific fields, while using the standard value editor for others. The default ",(0,a.jsx)(t.code,{children:"ValueEditor"})," lacks date picker functionality, requiring a custom solution."]}),"\n",(0,a.jsxs)(t.p,{children:["Instead of duplicating the default ",(0,a.jsx)(t.code,{children:"ValueEditor"})," code, you can leverage its existing functionality by spreading the same props (",(0,a.jsx)(t.code,{children:"<ValueEditor {...props} />"}),") and returning it when your custom behavior doesn't apply."]}),"\n",(0,a.jsxs)(t.p,{children:["This example creates a custom value editor using the ",(0,a.jsx)(t.a,{href:"https://reactdatepicker.com/",children:(0,a.jsx)(t.code,{children:"react-datepicker"})})," library. We'll start by configuring the ",(0,a.jsx)(t.code,{children:"fields"})," array with standard ",(0,a.jsx)(t.code,{children:"Field"})," objects, adding a custom ",(0,a.jsx)(t.code,{children:"datatype"})," attribute to date fields that signals when to display the date picker."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// fields.ts\nimport { Field } from 'react-querybuilder';\n\nexport const fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      { name: 'beginsWith', label: 'begins with' },\n    ],\n  },\n  {\n    name: 'dateOfBirth',\n    label: 'Date of Birth',\n    operators: [{ name: '=', label: 'is' }],\n    datatype: 'date',\n  },\n  {\n    name: 'dateRange',\n    label: 'Date Range',\n    operators: [{ name: 'between', label: 'is between' }],\n    datatype: 'dateRange',\n  },\n];\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The custom value editor displays different interfaces based on the field's ",(0,a.jsx)(t.code,{children:"datatype"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:'"date"'}),": Standard date picker"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:'"dateRange"'}),": Date range picker"]}),"\n",(0,a.jsxs)(t.li,{children:["Other values or ",(0,a.jsx)(t.code,{children:"undefined"}),": Falls back to the default ",(0,a.jsx)(t.code,{children:"ValueEditor"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["We use the ",(0,a.jsx)(t.a,{href:"https://date-fns.org/",children:(0,a.jsx)(t.code,{children:"date-fns"})})," library for date parsing and formatting. Storing dates as strings (rather than ",(0,a.jsx)(t.code,{children:"Date"})," objects) keeps the query object serializable for ",(0,a.jsx)(t.code,{children:"JSON.stringify"}),". Date ranges are stored as comma-separated string pairs."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"// CustomValueEditor.tsx\nimport { format, parse } from 'date-fns';\nimport DatePicker from 'react-datepicker';\nimport 'react-datepicker/dist/react-datepicker.css';\nimport { ValueEditor, ValueEditorProps } from 'react-querybuilder';\n\nconst dateFormat = 'yyyy-MM-dd';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.fieldData.datatype === 'date') {\n    return (\n      <div>\n        <DatePicker\n          dateFormat={dateFormat}\n          selected={!props.value ? null : parse(props.value, dateFormat, new Date())}\n          onChange={(d: Date) => props.handleOnChange(d ? format(d, dateFormat) : null)}\n        />\n      </div>\n    );\n  } else if (props.fieldData.datatype === 'dateRange') {\n    const [startDate, endDate] = props.value.split(',');\n    return (\n      <div>\n        <DatePicker\n          selectsRange\n          dateFormat={dateFormat}\n          startDate={!startDate ? null : parse(startDate, dateFormat, new Date())}\n          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}\n          onChange={(update: [Date, Date]) => {\n            const [s, e] = update;\n            props.handleOnChange(\n              [!s ? '' : format(s, dateFormat), !e ? '' : format(e, dateFormat)].join(',')\n            );\n          }}\n        />\n      </div>\n    );\n  }\n  return <ValueEditor {...props} />;\n};\n"})}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["If you're using one of the ",(0,a.jsx)(t.a,{href:"../compat",children:"compatibility packages"}),", you probably want to fall back to the value editor from that package instead of ",(0,a.jsx)(t.code,{children:"ValueEditor"})," from the main package. For example, when using ",(0,a.jsx)(t.code,{children:"@react-querybuilder/antd"}),", fall back to ",(0,a.jsx)(t.code,{children:"AntDValueEditor"}),":"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:"-import { ValueEditor, ValueEditorProps } from 'react-querybuilder';\n+import { AntDValueEditor } from '@react-querybuilder/antd';\n+import { ValueEditorProps } from 'react-querybuilder';\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:"-  return <ValueEditor {...props} />;\n+  return <AntDValueEditor {...props} />;\n"})})]}),"\n",(0,a.jsxs)(t.p,{children:["Configure the ",(0,a.jsx)(t.code,{children:"QueryBuilder"})," component to use the custom value editor through the ",(0,a.jsx)(t.code,{children:"controlElements"})," prop:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"// App.tsx\nimport { useState } from 'react';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { fields } from './fields';\n\nexport default function App() {\n  const [query, setQuery] = useState({ combinator: 'and', rules: [] });\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={setQuery}\n      // highlight-start\n      controlElements={{ valueEditor: CustomValueEditor }}\n      // highlight-end\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:'The interactive demo below shows how each field type behaves: the "Name" field displays a text input, "Date of Birth" shows a standard date picker, and "Date Range" presents a date range picker.'}),"\n",(0,a.jsxs)(s.b,{rqbVersion:8,customSetup:{dependencies:{"date-fns":"latest","react-datepicker":"latest"}},options:{editorHeight:690},children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport { CustomValueEditor } from './CustomValueEditor';\nimport { fields } from './fields';\nimport { initialQuery } from './initialQuery';\n\nexport default function App() {\n  const [query, setQuery] = useState(initialQuery);\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      onQueryChange={setQuery}\n      controlElements={{ valueEditor: CustomValueEditor }}\n    />\n  );\n}\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:"CustomValueEditor.tsx active",children:"import { format, parse } from 'date-fns';\nimport DatePicker from 'react-datepicker';\nimport 'react-datepicker/dist/react-datepicker.css';\nimport { ValueEditor, ValueEditorProps } from 'react-querybuilder';\n\nconst dateFormat = 'yyyy-MM-dd';\n\nexport const CustomValueEditor = (props: ValueEditorProps) => {\n  if (props.fieldData.datatype === 'date') {\n    return (\n      <div>\n        <DatePicker\n          dateFormat={dateFormat}\n          selected={!props.value ? null : parse(props.value, dateFormat, new Date())}\n          onChange={(d: Date) => props.handleOnChange(d ? format(d, dateFormat) : null)}\n        />\n      </div>\n    );\n  } else if (props.fieldData.datatype === 'dateRange') {\n    const [startDate, endDate] = props.value.split(',');\n    return (\n      <div>\n        <DatePicker\n          selectsRange\n          dateFormat={dateFormat}\n          startDate={!startDate ? null : parse(startDate, dateFormat, new Date())}\n          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}\n          onChange={(range: [Date, Date]) => {\n            const [s, e] = range;\n            props.handleOnChange(\n              [!s ? '' : format(s, dateFormat), !e ? '' : format(e, dateFormat)].join(',')\n            );\n          }}\n        />\n      </div>\n    );\n  }\n  return <ValueEditor {...props} />;\n};\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"fields.ts",children:"import { Field } from 'react-querybuilder';\n\nexport const fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      { name: 'beginsWith', label: 'begins with' },\n    ],\n  },\n  {\n    name: 'dateOfBirth',\n    label: 'Date of Birth',\n    operators: [{ name: '=', label: 'is' }],\n    datatype: 'date',\n  },\n  {\n    name: 'dateRange',\n    label: 'Date Range',\n    operators: [{ name: 'between', label: 'is between' }],\n    datatype: 'dateRange',\n  },\n];\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"initialQuery.ts",children:"import { format, subDays } from 'date-fns';\nimport { RuleGroupType } from 'react-querybuilder';\n\nconst initialRange = [subDays(new Date(), 14), new Date()]\n  .map(d => format(d, 'yyyy-MM-dd'))\n  .join(',');\n\nexport const initialQuery: RuleGroupType = {\n  rules: [\n    {\n      field: 'name',\n      operator: '=',\n      value: 'Steve Vai',\n    },\n    {\n      field: 'dateOfBirth',\n      operator: '=',\n      value: '1960-06-06',\n    },\n    {\n      field: 'dateRange',\n      value: initialRange,\n      operator: 'between',\n    },\n  ],\n  combinator: 'and',\n  not: false,\n};\n"})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-css",children:".react-datepicker-wrapper input {\n  /* Widen the input to show both dates */\n  width: 180px;\n}\n"})})]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:['Other examples of the "fallback" technique can be seen in the ',(0,a.jsx)(t.a,{href:"./limit-groups#conditionally-allow-new-groups",children:"Limit rule groups"})," page and ",(0,a.jsx)(t.a,{href:"https://stackoverflow.com/questions/68447510/react-query-builder-question-is-there-a-way-to-disable-a-field-option-when-addi/69443288#69443288",children:"these"})," ",(0,a.jsx)(t.a,{href:"https://stackoverflow.com/questions/61768845/progamatically-show-hide-operator-rule-and-group-button-in-react-querybuilder/69443467#69443467",children:"two"})," StackOverflow answers."]})})]})}function u(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},23392(e,t,r){r.d(t,{A:()=>o});var n=r(62540);r(63696);var a=r(83029);function o({children:e,fallback:t}){return(0,a.A)()?(0,n.jsx)(n.Fragment,{children:e?.()}):t??null}},94813(e,t,r){r.d(t,{mQ:()=>c,vY:()=>f,ye:()=>o});let n=String.raw`
:root { color-scheme: light; background-color: #ffffff; }
body { margin: 8px; background-color: #ffffff; }
pre {
  padding: 1rem;
  color: #1c1e21;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  white-space: pre-wrap;
}
html.dark { background-color: #343a46; }
html.dark body { background-color: #343a46; }
html.dark :is(h1, h2, h3, h4, h5, h6) { color: white; }
`,a="https://esm.sh",o=["/App.tsx","/App.js","/App.jsx","/App.ts"],s=["",".tsx",".ts",".jsx",".js"],i=e=>/\.[jt]sx?$/.test(e),l=/(\bfrom\s*|\bimport\s*|\bimport\(\s*)(['"])(\.[^'"]*)\2/g,d=/^[^\S\n]*import\s+(['"])([^'"]+\.s?css)\1;?[^\S\n]*$/gm;class c extends Error{file;constructor(e,t){super(e),this.file=t,this.name="CompileError"}}let p=(e,t,r="")=>{let n=t[e];return`${a}/${e}${n?`@${encodeURIComponent(n)}`:""}${r}`},u=(e,t,r)=>{let n=t.slice(0,t.lastIndexOf("/")+1),a=new URL(e,`file://${n}`).pathname;for(let e of s)if(r[a+e])return a+e;throw new c(`Cannot resolve '${e}' from '${t}'`,t)},m=String.raw`
const post = (type, extra) => { try { parent.postMessage({ source: 'rqb-live', type, id: ID, ...extra }, '*'); } catch {} };
// Errors are surfaced by the host's overlay, not in here, so a failed example never renders a
// mystery blank box.
const fail = (kind, message, stack) => post('error', { kind, message, stack });
addEventListener('error', e => {
  if (e.target !== window && e.target?.tagName === 'LINK') {
    return fail('network', 'Failed to load stylesheet: ' + e.target.href);
  }
  fail('runtime', e.message, e.error?.stack);
}, true);
addEventListener('unhandledrejection', e => {
  const r = e.reason;
  fail(/Failed to fetch|Importing a module script failed|error loading dynamically imported module/i.test(String(r?.message ?? r)) ? 'network' : 'runtime', String(r?.message ?? r), r?.stack);
});

const urls = {};
const visiting = new Set();
const mint = path => {
  if (urls[path]) return urls[path];
  if (visiting.has(path)) throw new Error('Circular dependency involving ' + path);
  visiting.add(path);
  const mod = MODULES[path];
  for (const dep of mod.deps) mint(dep);
  const code = mod.code.replaceAll(/__RQBMOD:(.*?)__/g, (_m, p) => urls[p]);
  urls[path] = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
  visiting.delete(path);
  return urls[path];
};

(async () => {
  let entryURL;
  try {
    entryURL = mint(ENTRY);
  } catch (err) {
    return fail('compile', String(err?.message ?? err), err?.stack);
  }
  try {
    const [mod, React, { createRoot }] = await Promise.all([
      import(entryURL),
      import('react'),
      import('react-dom/client'),
    ]);
    if (typeof mod.default !== 'function') {
      return fail('compile', ENTRY + ' has no default-exported component.');
    }
    createRoot(document.getElementById('root')).render(React.createElement(mod.default));
    post('ready');
  } catch (err) {
    const message = String(err?.message ?? err);
    if (/Failed to fetch|module script failed|dynamically imported module|Importing a module script/i.test(message)) {
      return fail('network', message + '\n\nA dependency could not be loaded from esm.sh. Expected:\n' + DEPENDENCY_LIST);
    }
    fail('runtime', message, err?.stack);
  }
})();

// Height reporting. #root gives the in-flow content height (independent of the iframe's own
// height, unlike documentElement.scrollHeight). Absolutely positioned overflow -- e.g. an open
// date picker popup -- only shows up in body.scrollHeight, and only once it exceeds the viewport.
//
// "slack" is extra room reserved below the content while an input is focused. Without it, a popup
// anchored to an input near the bottom of the example (react-datepicker's calendar, positioned by
// floating-ui) sees no space below inside the iframe viewport and flips upward, where it is clipped
// by the iframe's top edge and appears to hide behind the code block above.
const POPUP_SLACK = 320;
let slack = 0;
const measure = () => {
  const base =
    Math.ceil(document.getElementById('root').getBoundingClientRect().bottom) + 8 + slack;
  const overflow = document.body.scrollHeight > innerHeight ? document.body.scrollHeight : 0;
  return Math.max(base, overflow, 40);
};
let lastHeight = 0;
const report = () => {
  const height = measure();
  if (height !== lastHeight) {
    lastHeight = height;
    post('height', { height });
  }
};
new ResizeObserver(report).observe(document.getElementById('root'));
addEventListener('load', report);
setInterval(report, 250);

let releaseSlack;
addEventListener('focusin', e => {
  if (!e.target.matches('input, textarea')) return;
  clearTimeout(releaseSlack);
  slack = POPUP_SLACK;
  report();
});
addEventListener('focusout', () => {
  // Deferred: clicking a day in an open calendar blurs the input first, and shrinking immediately
  // would move the popup out from under the pointer.
  clearTimeout(releaseSlack);
  releaseSlack = setTimeout(() => {
    slack = 0;
    report();
  }, 300);
});

addEventListener('message', e => {
  if (e.source !== parent) return;
  if (e.data?.source === 'rqb-live-host' && e.data.type === 'theme') {
    document.documentElement.classList.toggle('dark', e.data.dark);
  }
});
post('mounted');
`,h=e=>e.replaceAll("</",String.raw`<\/`),f=(e,t,r)=>{let s=o.find(t=>e[t]);if(!s)throw new c("No entry module. Expected /App.tsx or /App.js.");let f=((e,t)=>{let r={};for(let n of Object.values(e)){let a;if(!i(n.path))continue;let o=n.code.replaceAll(d,"");try{a=t(o,{transforms:["typescript","jsx"],jsxRuntime:"automatic",filePath:n.path}).code}catch(t){let{message:e}=t;throw new c(`${n.path}: ${e}`,n.path)}let s=[],p=a.replaceAll(l,(t,r,a,o)=>{let i=u(o,n.path,e);return s.push(i),`${r}${a}__RQBMOD:${i}__${a}`});r[n.path]={code:p,deps:s}}return r})(e,t),g=(e=>{let t=e.react??"18",r=e["react-dom"]??t,n={react:`${a}/react@${encodeURIComponent(t)}`,"react/":`${a}/react@${encodeURIComponent(t)}/`,"react-dom":`${a}/react-dom@${encodeURIComponent(r)}?external=react`,"react-dom/":`${a}/react-dom@${encodeURIComponent(r)}&external=react/`};for(let t of Object.keys(e))"react"!==t&&"react-dom"!==t&&(n[t]=p(t,e,"?external=react,react-dom"));return{imports:n}})(r.dependencies),y=((e,t)=>{let r=new Set(t.extraCSSImports);for(let t of Object.values(e))if(i(t.path))for(let[,,e]of t.code.matchAll(d))e.startsWith(".")||r.add(e);return[...r].map(e=>((e,t)=>{let r,n,[a,o]=(r=e.split("/"),[n=e.startsWith("@")?r.slice(0,2).join("/"):r[0],e.slice(n.length+1)]);return p(a,t,`/${o}`).replace(/\.scss$/,".css")})(e,t.dependencies))})(e,r),b=[n,...Object.values(e).filter(e=>{let t;return t=e.path,/\.s?css$/.test(t)}).map(e=>e.code)].filter(Boolean).join("\n\n");return`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="importmap">${h(JSON.stringify(g))}</script>
${y.map(e=>`<link rel="stylesheet" href="${e}">`).join("\n")}
<style>${b}</style>
</head>
<body>
<div id="root"></div>
<script type="module">
const ID = ${h(JSON.stringify(r.id))};
const ENTRY = ${JSON.stringify(s)};
const DEPENDENCY_LIST = ${h(JSON.stringify(Object.entries(g.imports).map(([e,t])=>`  ${e} -> ${t}`).join("\n")))};
const MODULES = ${h(JSON.stringify(f))};
${m}
</script>
</body>
</html>`}},52162(e,t,r){r.d(t,{b:()=>p});var n=r(62540),a=r(23392),o=r(34471),s=r(63696),i=r(94813);let l=/^\s*import\s+(['"])react-querybuilder\/dist\/query-builder\.s?css\1;?\s*$/m,d={"language-tsx":"/App.tsx","language-js":"/App.js","language-css":"/styles.css"},c=s.lazy(()=>Promise.all([r.e("24014"),r.e("36400"),r.e("79715")]).then(r.bind(r,63726)).then(e=>({default:e.LiveExample}))),p=({children:e,customSetup:t,rqbVersion:r=8})=>{let p="dark"===(0,o.G)().colorMode,{files:u,error:m}=s.useMemo(()=>(e=>{let t=s.Children.toArray(e),r=[];for(let e of t){let t,n=e?.props?.children?.props;if(!n||"string"!=typeof n.children)return{files:r,error:"Every child of SandpackRQB must be a code fence."};let a=!1,o=!1;if(n.metastring){let[e,...r]=n.metastring.split(" ");t="/"+e,a=r.includes("hidden"),o=r.includes("active")}else if(!(t=d[n.className??""]))return{files:r,error:`Code block is missing a filename: ${n.children}`};if(r.some(e=>e.path===t))return{files:r,error:`File ${t} was defined multiple times. Each file snippet should have a unique path name.`};r.push({path:t,code:n.children,lang:n.className?.replace("language-","")??"tsx",hidden:a,active:o})}return{files:r}})(e),[e]),h=s.useMemo(()=>({...t?.dependencies,"react-querybuilder":`^${r}`}),[t?.dependencies,r]),f=s.useMemo(()=>{let e=u.find(e=>i.ye.includes(e.path));return e&&l.test(e.code)?[]:["react-querybuilder/dist/query-builder.css"]},[u]);return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(a.A,{children:()=>(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(c,{files:u,dependencies:h,extraCSSImports:f,parseError:m,dark:p})})})},`v${r}`)}},43023(e,t,r){r.d(t,{R:()=>s,x:()=>i});var n=r(63696);let a={},o=n.createContext(a);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);