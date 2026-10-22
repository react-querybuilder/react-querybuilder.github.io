"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["2607"],{8427(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>f,frontMatter:()=>c,contentTitle:()=>u,toc:()=>h,assets:()=>p});var n=JSON.parse('{"id":"intro","title":"Getting started","description":"TL;DR","source":"@site/versioned_docs/version-6/intro.mdx","sourceDirName":".","slug":"/intro","permalink":"/docs/6/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/intro.mdx","tags":[],"version":"6","frontMatter":{"title":"Getting started","hide_table_of_contents":true},"sidebar":"mySidebar","next":{"title":"Components","permalink":"/docs/6/category/components"}}'),a=r(62540),i=r(43023),s=r(77779),o=r(98263),l=r(52162),d=r(77557);let c={title:"Getting started",hide_table_of_contents:!0},u,p={},h=[{value:"TL;DR",id:"tldr",level:2},{value:"Installation",id:"installation",level:2},{value:"Basics",id:"basics",level:2},{value:"Exporting queries",id:"exporting-queries",level:2},{value:"Onward and upward!",id:"onward-and-upward",level:2},{value:"Training",id:"training",level:2}];function m(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/basic-ts",children:"Basic example (TypeScript)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://githubbox.com/react-querybuilder/react-querybuilder/tree/main/examples/basic",children:"Basic example (JavaScript)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/react-querybuilder/react-querybuilder/tree/main/examples/",children:"More examples"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.p,{children:["To install ",(0,a.jsx)(t.code,{children:"react-querybuilder"}),", use a package manager like ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/",children:"npm"}),", ",(0,a.jsx)(t.a,{href:"https://yarnpkg.com/",children:"Yarn"}),", ",(0,a.jsx)(t.a,{href:"https://pnpm.io/",children:"pnpm"}),", or ",(0,a.jsx)(t.a,{href:"https://bun.sh/",children:"Bun"}),", or follow ",(0,a.jsx)(t.a,{href:"./buildless",children:"these instructions for a buildless environment"}),"."]}),"\n",(0,a.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,a.jsx)(o.A,{value:"npm",attributes:{className:"tab-item-pkg-mgr-npm"},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm i react-querybuilder\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",label:"pnpm",attributes:{className:"tab-item-pkg-mgr-pnpm"},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add react-querybuilder\n"})})}),(0,a.jsx)(o.A,{value:"bun",label:"bun",attributes:{className:"tab-item-pkg-mgr-bun"},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bun add react-querybuilder\n"})})}),(0,a.jsx)(o.A,{value:"yarn",label:"yarn",attributes:{className:"tab-item-pkg-mgr-yarn"},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add react-querybuilder\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"basics",children:"Basics"}),"\n",(0,a.jsxs)(t.p,{children:["The simplest way to create a query builder is to render the ",(0,a.jsx)(t.code,{children:"QueryBuilder"})," component with no props. (Be sure to import the official stylesheet, which is available in ",(0,a.jsx)(t.code,{children:".css"})," and ",(0,a.jsx)(t.code,{children:".scss"})," flavors.)"]}),"\n",(0,a.jsx)(l.b,{rqbVersion:6,options:{editorHeight:160},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nexport default () => <QueryBuilder />;\n"})})}),"\n",(0,a.jsxs)(t.p,{children:["Functional, but not very useful. To really get value out of the query builder, we'll first need to define a set of fields for the user to choose from. We can pass the ",(0,a.jsx)(t.code,{children:"fields"})," array into the query builder through the ",(0,a.jsx)(t.code,{children:"fields"})," prop."]}),"\n",(0,a.jsx)(t.p,{children:'In the query builder below, click the "+Rule" button and then the field selector to see the field choices.'}),"\n",(0,a.jsx)(l.b,{rqbVersion:6,options:{editorHeight:240},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => <QueryBuilder fields={fields} />;\n"})})}),"\n",(0,a.jsxs)(t.p,{children:["Much more useful, but you probably want to monitor and control what users do with the query builder. Let's set up a state variable using the React Hook ",(0,a.jsx)(t.code,{children:"useState"}),". This will store our query object and allow us to pass it on to other components, event handlers, etc."]}),"\n",(0,a.jsxs)(t.p,{children:["The state variable ",(0,a.jsx)(t.code,{children:"query"})," will be passed to the ",(0,a.jsx)(t.code,{children:"query"})," prop, and the setter method ",(0,a.jsx)(t.code,{children:"setQuery"})," will be used in the ",(0,a.jsx)(t.code,{children:"onQueryChange"})," callback. Let's also seed the query object with a couple of rules, making sure that the ",(0,a.jsx)(t.code,{children:"field"})," property of each rule matches the ",(0,a.jsx)(t.code,{children:"name"})," property of one of our fields."]}),"\n",(0,a.jsx)(l.b,{rqbVersion:6,options:{editorHeight:480},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"})})}),"\n",(0,a.jsx)(d.A,{summary:"Non-TypeScript version",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { QueryBuilder } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: '=', value: 'Steve' },\n      { field: 'lastName', operator: '=', value: 'Vai' },\n    ],\n  });\n\n  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;\n};\n"})})}),"\n",(0,a.jsx)(t.h2,{id:"exporting-queries",children:"Exporting queries"}),"\n",(0,a.jsxs)(t.p,{children:["To convert a query object into other formats like ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/SQL",children:"SQL"}),", ",(0,a.jsx)(t.a,{href:"https://www.mongodb.com/",children:"MongoDB"}),", and ",(0,a.jsx)(t.a,{href:"https://cel.dev",children:"CEL"}),", you can use the ",(0,a.jsx)(t.code,{children:"formatQuery"})," function (",(0,a.jsx)(t.a,{href:"./utils/export",children:"full documentation"}),"). The example below demonstrates the conversion of a query to its equivalent SQL form. Modify the query by manipulating the form elements and the SQL will update accordingly."]}),"\n",(0,a.jsx)(l.b,{rqbVersion:6,options:{editorHeight:480},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Field, formatQuery, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'firstName', label: 'First Name' },\n  { name: 'lastName', label: 'Last Name' },\n];\n\nexport default () => {\n  const [query, setQuery] = useState<RuleGroupType>({\n    combinator: 'and',\n    rules: [\n      { field: 'firstName', operator: 'beginsWith', value: 'Stev' },\n      { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },\n    ],\n  });\n\n  return (\n    <>\n      <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />\n      <h4>\n        SQL as result of <code>formatQuery(query, 'sql')</code>:\n      </h4>\n      <pre>{formatQuery(query, 'sql')}</pre>\n    </>\n  );\n};\n"})})}),"\n",(0,a.jsx)(t.h2,{id:"onward-and-upward",children:"Onward and upward!"}),"\n",(0,a.jsxs)(t.p,{children:["To discover all the options of React Query Builder, start with the ",(0,a.jsx)(t.a,{href:"./components/querybuilder",children:"main component documentation"}),". To play around with various configurations, including other ",(0,a.jsx)(t.a,{href:"./utils/export",children:"export"}),"/",(0,a.jsx)(t.a,{href:"./utils/import",children:"import"})," formats, check out the ",(0,a.jsx)(t.a,{href:"/demo",children:"demo"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"training",children:"Training"}),"\n",(0,a.jsxs)(t.p,{children:["For an extended tutorial on configuration and customization of ",(0,a.jsx)(t.code,{children:"react-querybuilder"}),", including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course ",(0,a.jsx)(t.a,{href:"https://www.newline.co/courses/building-advanced-admin-reporting-in-react",children:"Building Advanced Admin Reporting in React"}),", taught by this library's maintainer, over at ",(0,a.jsx)(t.a,{href:"https://www.newline.co/",children:"newline"}),"."]})]})}function f(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},94813(e,t,r){r.d(t,{mQ:()=>c,vY:()=>f,ye:()=>i});let n=String.raw`
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
`,a="https://esm.sh",i=["/App.tsx","/App.js","/App.jsx","/App.ts"],s=["",".tsx",".ts",".jsx",".js"],o=e=>/\.[jt]sx?$/.test(e),l=/(\bfrom\s*|\bimport\s*|\bimport\(\s*)(['"])(\.[^'"]*)\2/g,d=/^[^\S\n]*import\s+(['"])([^'"]+\.s?css)\1;?[^\S\n]*$/gm;class c extends Error{file;constructor(e,t){super(e),this.file=t,this.name="CompileError"}}let u=(e,t,r="")=>{let n=t[e];return`${a}/${e}${n?`@${encodeURIComponent(n)}`:""}${r}`},p=(e,t,r)=>{let n=t.slice(0,t.lastIndexOf("/")+1),a=new URL(e,`file://${n}`).pathname;for(let e of s)if(r[a+e])return a+e;throw new c(`Cannot resolve '${e}' from '${t}'`,t)},h=String.raw`
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
`,m=e=>e.replaceAll("</",String.raw`<\/`),f=(e,t,r)=>{let s=i.find(t=>e[t]);if(!s)throw new c("No entry module. Expected /App.tsx or /App.js.");let f=((e,t)=>{let r={};for(let n of Object.values(e)){let a;if(!o(n.path))continue;let i=n.code.replaceAll(d,"");try{a=t(i,{transforms:["typescript","jsx"],jsxRuntime:"automatic",filePath:n.path}).code}catch(t){let{message:e}=t;throw new c(`${n.path}: ${e}`,n.path)}let s=[],u=a.replaceAll(l,(t,r,a,i)=>{let o=p(i,n.path,e);return s.push(o),`${r}${a}__RQBMOD:${o}__${a}`});r[n.path]={code:u,deps:s}}return r})(e,t),y=(e=>{let t=e.react??"18",r=e["react-dom"]??t,n={react:`${a}/react@${encodeURIComponent(t)}`,"react/":`${a}/react@${encodeURIComponent(t)}/`,"react-dom":`${a}/react-dom@${encodeURIComponent(r)}?external=react`,"react-dom/":`${a}/react-dom@${encodeURIComponent(r)}&external=react/`};for(let t of Object.keys(e))"react"!==t&&"react-dom"!==t&&(n[t]=u(t,e,"?external=react,react-dom"));return{imports:n}})(r.dependencies),g=((e,t)=>{let r=new Set(t.extraCSSImports);for(let t of Object.values(e))if(o(t.path))for(let[,,e]of t.code.matchAll(d))e.startsWith(".")||r.add(e);return[...r].map(e=>((e,t)=>{let r,n,[a,i]=(r=e.split("/"),[n=e.startsWith("@")?r.slice(0,2).join("/"):r[0],e.slice(n.length+1)]);return u(a,t,`/${i}`).replace(/\.scss$/,".css")})(e,t.dependencies))})(e,r),b=[n,...Object.values(e).filter(e=>{let t;return t=e.path,/\.s?css$/.test(t)}).map(e=>e.code)].filter(Boolean).join("\n\n");return`<!doctype html>
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
const ID = ${m(JSON.stringify(r.id))};
const ENTRY = ${JSON.stringify(s)};
const DEPENDENCY_LIST = ${m(JSON.stringify(Object.entries(y.imports).map(([e,t])=>`  ${e} -> ${t}`).join("\n")))};
const MODULES = ${m(JSON.stringify(f))};
${h}
</script>
</body>
</html>`}},52162(e,t,r){r.d(t,{b:()=>u});var n=r(62540),a=r(23392),i=r(34471),s=r(63696),o=r(94813);let l=/^\s*import\s+(['"])react-querybuilder\/dist\/query-builder\.s?css\1;?\s*$/m,d={"language-tsx":"/App.tsx","language-js":"/App.js","language-css":"/styles.css"},c=s.lazy(()=>Promise.all([r.e("24014"),r.e("36400"),r.e("79715")]).then(r.bind(r,63726)).then(e=>({default:e.LiveExample}))),u=({children:e,customSetup:t,rqbVersion:r=8})=>{let u="dark"===(0,i.G)().colorMode,{files:p,error:h}=s.useMemo(()=>(e=>{let t=s.Children.toArray(e),r=[];for(let e of t){let t,n=e?.props?.children?.props;if(!n||"string"!=typeof n.children)return{files:r,error:"Every child of SandpackRQB must be a code fence."};let a=!1,i=!1;if(n.metastring){let[e,...r]=n.metastring.split(" ");t="/"+e,a=r.includes("hidden"),i=r.includes("active")}else if(!(t=d[n.className??""]))return{files:r,error:`Code block is missing a filename: ${n.children}`};if(r.some(e=>e.path===t))return{files:r,error:`File ${t} was defined multiple times. Each file snippet should have a unique path name.`};r.push({path:t,code:n.children,lang:n.className?.replace("language-","")??"tsx",hidden:a,active:i})}return{files:r}})(e),[e]),m=s.useMemo(()=>({...t?.dependencies,"react-querybuilder":`^${r}`}),[t?.dependencies,r]),f=s.useMemo(()=>{let e=p.find(e=>o.ye.includes(e.path));return e&&l.test(e.code)?[]:["react-querybuilder/dist/query-builder.css"]},[p]);return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(a.A,{children:()=>(0,n.jsx)(s.Suspense,{fallback:null,children:(0,n.jsx)(c,{files:p,dependencies:m,extraCSSImports:f,parseError:h,dark:u})})})},`v${r}`)}}}]);