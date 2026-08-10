"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["74856"],{4462(e,r,t){t.r(r),t.d(r,{metadata:()=>n,default:()=>f,frontMatter:()=>c,contentTitle:()=>u,toc:()=>p,assets:()=>h});var n=JSON.parse('{"id":"intro","title":"Getting started","description":"TL;DR","source":"@site/versioned_docs/version-4/intro.mdx","sourceDirName":".","slug":"/intro","permalink":"/docs/4/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-4/intro.mdx","tags":[],"version":"4","frontMatter":{"title":"Getting started","hide_table_of_contents":true},"sidebar":"mySidebar","next":{"title":"API","permalink":"/docs/4/category/api"}}'),i=t(62540),a=t(43023),s=t(77779),o=t(98263),l=t(52162),d=t(77557);let c={title:"Getting started",hide_table_of_contents:!0},u,h={},p=[{value:"TL;DR",id:"tldr",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Exporting queries",id:"exporting-queries",level:2},{value:"Onward and upward!",id:"onward-and-upward",level:2},{value:"Training",id:"training",level:2}];function m(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/basic-ts",children:"Basic example (TypeScript)"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/basic",children:"Basic example (JavaScript)"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/examples/",children:"More examples"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(r.p,{children:["To install ",(0,i.jsx)(r.code,{children:"react-querybuilder"}),", use a package manager like ",(0,i.jsx)(r.a,{href:"https://www.npmjs.com/",children:"npm"}),", ",(0,i.jsx)(r.a,{href:"https://yarnpkg.com/",children:"Yarn"}),", ",(0,i.jsx)(r.a,{href:"https://pnpm.io/",children:"pnpm"}),", or ",(0,i.jsx)(r.a,{href:"https://bun.sh/",children:"Bun"}),"."]}),"\n",(0,i.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,i.jsx)(o.A,{value:"npm",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"npm i react-querybuilder\n"})})}),(0,i.jsx)(o.A,{value:"bun",label:"Bun",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"bun add react-querybuilder\n"})})}),(0,i.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"yarn add react-querybuilder\n"})})}),(0,i.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"pnpm add react-querybuilder\n"})})})]}),"\n",(0,i.jsx)(r.h2,{id:"basics",children:"Basics"}),"\n",(0,i.jsxs)(r.p,{children:["The simplest way to create a query builder is to render the ",(0,i.jsx)(r.code,{children:"QueryBuilder"})," component with no props. (Be sure to import the official stylesheet, which is available in ",(0,i.jsx)(r.code,{children:".css"})," and ",(0,i.jsx)(r.code,{children:".scss"})," flavors.)"]}),"\n",(0,i.jsx)(l.b,{rqbVersion:4,options:{editorHeight:160},children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nexport default () => <QueryBuilder />;\n"})})}),"\n",(0,i.jsxs)(r.p,{children:["Functional, but not very useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from. We can pass the ",(0,i.jsx)(r.code,{children:"fields"})," array into the query builder through the ",(0,i.jsx)(r.code,{children:"fields"})," prop."]}),"\n",(0,i.jsx)(r.p,{children:'In the query builder below, click the "+Rule" button and then the field selector to see the field choices.'}),"\n",(0,i.jsx)(l.b,{rqbVersion:4,options:{editorHeight:240},children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => <QueryBuilder fields={fields} />;\n"})})}),"\n",(0,i.jsxs)(r.p,{children:["Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,i.jsx)(r.code,{children:"useState"}),". This will store our query object and allow us to pass it on to other components, event handlers, etc."]}),"\n",(0,i.jsxs)(r.p,{children:["The state variable ",(0,i.jsx)(r.code,{children:"query"})," will be passed to the ",(0,i.jsx)(r.code,{children:"query"})," prop, and the setter method ",(0,i.jsx)(r.code,{children:"setQuery"})," will be used in the ",(0,i.jsx)(r.code,{children:"onQueryChange"})," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,i.jsx)(r.code,{children:"field"})," property of each rule matches the ",(0,i.jsx)(r.code,{children:"name"})," property of one of our fields."]}),"\n",(0,i.jsx)(l.b,{rqbVersion:4,options:{editorHeight:480},children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"})})}),"\n",(0,i.jsx)(d.A,{summary:"Non-TypeScript version",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"})})}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["This documentation primarily demonstrates use of the ESM and CommonJS builds of ",(0,i.jsx)(r.code,{children:"react-querybuilder"}),", but a ",(0,i.jsx)(r.a,{href:"./umd",children:"UMD build is also available"}),"."]})}),"\n",(0,i.jsx)(r.h2,{id:"exporting-queries",children:"Exporting queries"}),"\n",(0,i.jsxs)(r.p,{children:["To convert a query object into other formats like ",(0,i.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/SQL",children:"SQL"}),", ",(0,i.jsx)(r.a,{href:"https://www.mongodb.com/",children:"MongoDB"}),", and ",(0,i.jsx)(r.a,{href:"https://cel.dev",children:"CEL"}),", you can use the ",(0,i.jsx)(r.code,{children:"formatQuery"})," function (",(0,i.jsx)(r.a,{href:"./api/export",children:"full documentation here"}),"). The example below demonstrates the conversion of a query to its equivalent SQL form. Modify the query by manipulating the form elements and the SQL will update accordingly."]}),"\n",(0,i.jsx)(l.b,{rqbVersion:4,options:{editorHeight:480},children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Field, formatQuery, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: 'beginsWith', value: 'Stev' },\n      { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },\n    ],\n  });\n\n  return (\n    <>\n      <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />\n      <h4>\n        SQL as result of <code>formatQuery(query, 'sql')</code>:\n      </h4>\n      <pre>{formatQuery(query, 'sql')}</pre>\n    </>\n  );\n};\n"})})}),"\n",(0,i.jsx)(r.h2,{id:"onward-and-upward",children:"Onward and upward!"}),"\n",(0,i.jsxs)(r.p,{children:["To discover all the options of React Query Builder, check out the ",(0,i.jsx)(r.a,{href:"./api/querybuilder",children:"API documentation"}),". To play around with various configurations, including other export formats and ",(0,i.jsx)(r.a,{href:"./api/import",children:"importing from SQL"}),", check out the ",(0,i.jsx)(r.a,{href:"/demo",children:"demo"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"training",children:"Training"}),"\n",(0,i.jsxs)(r.p,{children:["For an extended tutorial on configuration and customization of ",(0,i.jsx)(r.code,{children:"react-querybuilder"}),", including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course ",(0,i.jsx)(r.a,{href:"https://www.newline.co/courses/building-advanced-admin-reporting-in-react",children:"Building Advanced Admin Reporting in React"}),", which is taught by one of this library's maintainers, over at ",(0,i.jsx)(r.a,{href:"https://www.newline.co/",children:"newline"}),"."]})]})}function f(e={}){let{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},94813(e,r,t){t.d(r,{mQ:()=>c,vY:()=>f,ye:()=>a});let n=String.raw`
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
`,i="https://esm.sh",a=["/App.tsx","/App.js","/App.jsx","/App.ts"],s=["",".tsx",".ts",".jsx",".js"],o=e=>/\.[jt]sx?$/.test(e),l=/(\bfrom\s*|\bimport\s*|\bimport\(\s*)(['"])(\.[^'"]*)\2/g,d=/^[^\S\n]*import\s+(['"])([^'"]+\.s?css)\1;?[^\S\n]*$/gm;class c extends Error{file;constructor(e,r){super(e),this.file=r,this.name="CompileError"}}let u=(e,r,t="")=>{let n=r[e];return`${i}/${e}${n?`@${encodeURIComponent(n)}`:""}${t}`},h=(e,r,t)=>{let n=r.slice(0,r.lastIndexOf("/")+1),i=new URL(e,`file://${n}`).pathname;for(let e of s)if(t[i+e])return i+e;throw new c(`Cannot resolve '${e}' from '${r}'`,r)},p=String.raw`
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
`,m=e=>e.replaceAll("</",String.raw`<\/`),f=(e,r,t)=>{let s=a.find(r=>e[r]);if(!s)throw new c("No entry module. Expected /App.tsx or /App.js.");let f=((e,r)=>{let t={};for(let n of Object.values(e)){let i;if(!o(n.path))continue;let a=n.code.replaceAll(d,"");try{i=r(a,{transforms:["typescript","jsx"],jsxRuntime:"automatic",filePath:n.path}).code}catch(r){let{message:e}=r;throw new c(`${n.path}: ${e}`,n.path)}let s=[],u=i.replaceAll(l,(r,t,i,a)=>{let o=h(a,n.path,e);return s.push(o),`${t}${i}__RQBMOD:${o}__${i}`});t[n.path]={code:u,deps:s}}return t})(e,r),y=(e=>{let r=e.react??"18",t=e["react-dom"]??r,n={react:`${i}/react@${encodeURIComponent(r)}`,"react/":`${i}/react@${encodeURIComponent(r)}/`,"react-dom":`${i}/react-dom@${encodeURIComponent(t)}?external=react`,"react-dom/":`${i}/react-dom@${encodeURIComponent(t)}&external=react/`};for(let r of Object.keys(e))"react"!==r&&"react-dom"!==r&&(n[r]=u(r,e,"?external=react,react-dom"));return{imports:n}})(t.dependencies),g=((e,r)=>{let t=new Set(r.extraCSSImports);for(let r of Object.values(e))if(o(r.path))for(let[,,e]of r.code.matchAll(d))e.startsWith(".")||t.add(e);return[...t].map(e=>((e,r)=>{let t,n,[i,a]=(t=e.split("/"),[n=e.startsWith("@")?t.slice(0,2).join("/"):t[0],e.slice(n.length+1)]);return u(i,r,`/${a}`).replace(/\.scss$/,".css")})(e,r.dependencies))})(e,t),b=[n,...Object.values(e).filter(e=>{let r;return r=e.path,/\.s?css$/.test(r)}).map(e=>e.code)].filter(Boolean).join("\n\n");return`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="importmap">${m(JSON.stringify(y))}</script>
${g.map(e=>`<link rel="stylesheet" href="${e}">`).join("\n")}
<style>${b}</style>
</head>
<body>
<div id="root"></div>
<script type="module">
const ID = ${m(JSON.stringify(t.id))};
const ENTRY = ${JSON.stringify(s)};
const DEPENDENCY_LIST = ${m(JSON.stringify(Object.entries(y.imports).map(([e,r])=>`  ${e} -> ${r}`).join("\n")))};
const MODULES = ${m(JSON.stringify(f))};
${p}
</script>
</body>
</html>`}},52162(e,r,t){t.d(r,{b:()=>u});var n=t(62540),i=t(23392),a=t(34471),s=t(63696),o=t(94813);let l=/^\s*import\s+(['"])react-querybuilder\/dist\/query-builder\.s?css\1;?\s*$/m,d={"language-tsx":"/App.tsx","language-js":"/App.js","language-css":"/styles.css"},c=s.lazy(()=>Promise.all([t.e("24014"),t.e("36400"),t.e("79715")]).then(t.bind(t,63726)).then(e=>({default:e.LiveExample}))),u=({children:e,customSetup:r,rqbVersion:t=8})=>{let u="dark"===(0,a.G)().colorMode,{files:h,error:p}=s.useMemo(()=>(e=>{let r=s.Children.toArray(e),t=[];for(let e of r){let r,n=e?.props?.children?.props;if(!n||"string"!=typeof n.children)return{files:t,error:"Every child of SandpackRQB must be a code fence."};let i=!1,a=!1;if(n.metastring){let[e,...t]=n.metastring.split(" ");r="/"+e,i=t.includes("hidden"),a=t.includes("active")}else if(!(r=d[n.className??""]))return{files:t,error:`Code block is missing a filename: ${n.children}`};if(t.some(e=>e.path===r))return{files:t,error:`File ${r} was defined multiple times. Each file snippet should have a unique path name.`};t.push({path:r,code:n.children,lang:n.className?.replace("language-","")??"tsx",hidden:i,active:a})}return{files:t}})(e),[e]),m=s.useMemo(()=>({...r?.dependencies,"react-querybuilder":`^${t}`}),[r?.dependencies,t]),f=s.useMemo(()=>{let e=h.find(e=>o.ye.includes(e.path));return e&&l.test(e.code)?[]:["react-querybuilder/dist/query-builder.css"]},[h]);return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(i.A,{children:()=>(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(c,{files:h,dependencies:m,extraCSSImports:f,parseError:p,dark:u})})})},`v${t}`)}}}]);