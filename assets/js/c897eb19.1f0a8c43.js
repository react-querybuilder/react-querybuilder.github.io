"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["42250"],{48876(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>u,frontMatter:()=>s,contentTitle:()=>l,toc:()=>c,assets:()=>d});var n=JSON.parse('{"id":"tips/managing-operators","title":"Managing operators","description":"Which operators are allowed for which fields, and how they are labeled","source":"@site/versioned_docs/version-7/tips/managing-operators.mdx","sourceDirName":"tips","slug":"/tips/managing-operators","permalink":"/docs/tips/managing-operators","draft":false,"unlisted":false,"editUrl":"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-7/tips/managing-operators.mdx","tags":[],"version":"7","frontMatter":{"title":"Managing operators","description":"Which operators are allowed for which fields, and how they are labeled","hide_table_of_contents":true},"sidebar":"mySidebar","previous":{"title":"Managing fields","permalink":"/docs/tips/managing-fields"},"next":{"title":"Custom components with fallbacks","permalink":"/docs/tips/custom-with-fallback"}}'),a=r(62540),o=r(43023),i=r(52162);let s={title:"Managing operators",description:"Which operators are allowed for which fields, and how they are labeled",hide_table_of_contents:!0},l,d={},c=[{value:"Field <code>operators</code> property",id:"field-operators-property",level:2},{value:"<code>getOperators</code> prop",id:"getoperators-prop",level:2}];function p(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:['Many React Query Builder implementations need to customize operators based on the selected field type. For example, date fields might use "before" as a more intuitive label than the default ',(0,a.jsx)(t.code,{children:'"<"'}),' operator. Number fields could display "less than" for the ',(0,a.jsx)(t.code,{children:"<"})," operator, while text fields might exclude comparison operators entirely."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["For more information about option list props like ",(0,a.jsx)(t.code,{children:"operators"}),", see ",(0,a.jsx)(t.a,{href:"./option-lists",children:"Working with option lists"}),"."]})}),"\n",(0,a.jsxs)(t.h2,{id:"field-operators-property",children:["Field ",(0,a.jsx)(t.code,{children:"operators"})," property"]}),"\n",(0,a.jsxs)(t.p,{children:["One approach uses the field's ",(0,a.jsx)(t.code,{children:"operators"})," property to specify which operators appear when users select a particular field. However, this method requires defining complete operator lists for each field, potentially creating duplication across fields with similar data types."]}),"\n",(0,a.jsx)(i.b,{rqbVersion:8,options:{editorHeight:444},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { defaultOperators, Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  {\n    name: 'name',\n    label: 'Name',\n    operators: [\n      { name: '=', label: 'is' },\n      ...defaultOperators.filter(op => ['contains', 'beginsWith', 'endsWith'].includes(op.name)),\n    ],\n  },\n  {\n    name: 'birthday',\n    label: 'Birthday',\n    inputType: 'date',\n    operators: [\n      { name: '=', label: 'on' },\n      { name: '<', label: 'before' },\n      { name: '>', label: 'after' },\n    ],\n  },\n  {\n    name: 'guitars',\n    label: 'Guitars',\n    inputType: 'number',\n    operators: [\n      { name: '=', label: 'equals' },\n      { name: '<', label: 'less than' },\n      { name: '>', label: 'greater than' },\n    ],\n  },\n  {\n    name: 'favoriteMovie',\n    label: 'Favorite Movie',\n    operators: [{ name: '=', label: 'is' }],\n  },\n];\n\nconst defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'name', operator: 'beginsWith', value: 'Stev' },\n    { field: 'birthday', operator: '<', value: '1970-01-01' },\n    { field: 'guitars', operator: '>', value: 5 },\n    { field: 'favoriteMovie', operator: '=', value: 'Crossroads (1986)' },\n  ],\n};\n\nexport default () => <QueryBuilder fields={fields} defaultQuery={defaultQuery} />;\n"})})}),"\n",(0,a.jsxs)(t.h2,{id:"getoperators-prop",children:[(0,a.jsx)(t.code,{children:"getOperators"})," prop"]}),"\n",(0,a.jsxs)(t.p,{children:["While the field ",(0,a.jsx)(t.code,{children:"operators"})," property works well for individual field customizations, the ",(0,a.jsx)(t.code,{children:"getOperators"})," function prop centralizes all operator logic in one location."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"getOperators"})," receives two arguments: the field identifier and a meta object containing the complete field definition. Using this information, you can reference the ",(0,a.jsx)(t.code,{children:"fields"})," array (or other data sources) to return appropriate operator lists with custom names and labels."]}),"\n",(0,a.jsxs)(t.p,{children:["This example demonstrates custom field properties for operator management. Each field includes a custom ",(0,a.jsx)(t.code,{children:"datatype"})," property that determines operator selection and labeling. The ",(0,a.jsx)(t.code,{children:"defaultOperators"})," export provides base functionality where needed. Note that when present, a field's ",(0,a.jsx)(t.code,{children:"operators"})," property overrides ",(0,a.jsx)(t.code,{children:"getOperators"}),' results\u2014observe how "Favorite Movie" shows only the "is" operator despite having ',(0,a.jsx)(t.code,{children:'datatype: "text"'}),"."]}),"\n",(0,a.jsx)(i.b,{rqbVersion:8,options:{editorHeight:444},children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { defaultOperators, Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';\nimport 'react-querybuilder/dist/query-builder.css';\n\nconst fields: Field[] = [\n  { name: 'name', label: 'Name', datatype: 'text' },\n  { name: 'birthday', label: 'Birthday', datatype: 'date', inputType: 'date' },\n  { name: 'guitars', label: 'Guitars', datatype: 'number', inputType: 'number' },\n  {\n    name: 'favoriteMovie',\n    label: 'Favorite Movie',\n    datatype: 'text',\n    operators: [{ name: '=', label: 'is' }],\n  },\n];\n\nconst getOperators = (fieldName: string, { fieldData }: { fieldData: Field }) => {\n  switch (fieldData.datatype) {\n    case 'text':\n      return [\n        { name: '=', label: 'is' },\n        { name: '!=', label: 'is not' },\n        ...defaultOperators.filter(op =>\n          [\n            'contains',\n            'beginsWith',\n            'endsWith',\n            'doesNotContain',\n            'doesNotBeginWith',\n            'doesNotEndWith',\n            'null',\n            'notNull',\n            'in',\n            'notIn',\n          ].includes(op.name)\n        ),\n      ];\n    case 'number':\n      return [\n        ...defaultOperators.filter(op => ['=', '!='].includes(op.name)),\n        { name: '<', label: 'less than' },\n        { name: '<=', label: 'less than or equal to' },\n        { name: '>', label: 'greater than' },\n        { name: '>=', label: 'greater than or equal to' },\n        ...defaultOperators.filter(op => ['null', 'notNull'].includes(op.name)),\n      ];\n    case 'date':\n      return [\n        { name: '=', label: 'on' },\n        { name: '!=', label: 'not on' },\n        { name: '<', label: 'before' },\n        { name: '<=', label: 'on or before' },\n        { name: '>', label: 'after' },\n        { name: '>=', label: 'on or after' },\n        ...defaultOperators.filter(op => ['null', 'notNull'].includes(op.name)),\n      ];\n  }\n  return defaultOperators;\n};\n\nconst defaultQuery: RuleGroupType = {\n  combinator: 'and',\n  rules: [\n    { field: 'name', operator: 'beginsWith', value: 'Stev' },\n    { field: 'birthday', operator: '<', value: '1970-01-01' },\n    { field: 'guitars', operator: '>', value: 5 },\n    { field: 'favoriteMovie', operator: '=', value: 'Crossroads (1986)' },\n  ],\n};\n\nexport default () => (\n  <QueryBuilder fields={fields} defaultQuery={defaultQuery} getOperators={getOperators} />\n);\n"})})})]})}function u(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},23392(e,t,r){r.d(t,{A:()=>o});var n=r(62540);r(63696);var a=r(83029);function o({children:e,fallback:t}){return(0,a.A)()?(0,n.jsx)(n.Fragment,{children:e?.()}):t??null}},94813(e,t,r){r.d(t,{mQ:()=>c,vY:()=>f,ye:()=>o});let n=String.raw`
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
`,a="https://esm.sh",o=["/App.tsx","/App.js","/App.jsx","/App.ts"],i=["",".tsx",".ts",".jsx",".js"],s=e=>/\.[jt]sx?$/.test(e),l=/(\bfrom\s*|\bimport\s*|\bimport\(\s*)(['"])(\.[^'"]*)\2/g,d=/^[^\S\n]*import\s+(['"])([^'"]+\.s?css)\1;?[^\S\n]*$/gm;class c extends Error{file;constructor(e,t){super(e),this.file=t,this.name="CompileError"}}let p=(e,t,r="")=>{let n=t[e];return`${a}/${e}${n?`@${encodeURIComponent(n)}`:""}${r}`},u=(e,t,r)=>{let n=t.slice(0,t.lastIndexOf("/")+1),a=new URL(e,`file://${n}`).pathname;for(let e of i)if(r[a+e])return a+e;throw new c(`Cannot resolve '${e}' from '${t}'`,t)},h=String.raw`
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
`,m=e=>e.replaceAll("</",String.raw`<\/`),f=(e,t,r)=>{let i=o.find(t=>e[t]);if(!i)throw new c("No entry module. Expected /App.tsx or /App.js.");let f=((e,t)=>{let r={};for(let n of Object.values(e)){let a;if(!s(n.path))continue;let o=n.code.replaceAll(d,"");try{a=t(o,{transforms:["typescript","jsx"],jsxRuntime:"automatic",filePath:n.path}).code}catch(t){let{message:e}=t;throw new c(`${n.path}: ${e}`,n.path)}let i=[],p=a.replaceAll(l,(t,r,a,o)=>{let s=u(o,n.path,e);return i.push(s),`${r}${a}__RQBMOD:${s}__${a}`});r[n.path]={code:p,deps:i}}return r})(e,t),g=(e=>{let t=e.react??"18",r=e["react-dom"]??t,n={react:`${a}/react@${encodeURIComponent(t)}`,"react/":`${a}/react@${encodeURIComponent(t)}/`,"react-dom":`${a}/react-dom@${encodeURIComponent(r)}?external=react`,"react-dom/":`${a}/react-dom@${encodeURIComponent(r)}&external=react/`};for(let t of Object.keys(e))"react"!==t&&"react-dom"!==t&&(n[t]=p(t,e,"?external=react,react-dom"));return{imports:n}})(r.dependencies),b=((e,t)=>{let r=new Set(t.extraCSSImports);for(let t of Object.values(e))if(s(t.path))for(let[,,e]of t.code.matchAll(d))e.startsWith(".")||r.add(e);return[...r].map(e=>((e,t)=>{let r,n,[a,o]=(r=e.split("/"),[n=e.startsWith("@")?r.slice(0,2).join("/"):r[0],e.slice(n.length+1)]);return p(a,t,`/${o}`).replace(/\.scss$/,".css")})(e,t.dependencies))})(e,r),y=[n,...Object.values(e).filter(e=>{let t;return t=e.path,/\.s?css$/.test(t)}).map(e=>e.code)].filter(Boolean).join("\n\n");return`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="importmap">${m(JSON.stringify(g))}</script>
${b.map(e=>`<link rel="stylesheet" href="${e}">`).join("\n")}
<style>${y}</style>
</head>
<body>
<div id="root"></div>
<script type="module">
const ID = ${m(JSON.stringify(r.id))};
const ENTRY = ${JSON.stringify(i)};
const DEPENDENCY_LIST = ${m(JSON.stringify(Object.entries(g.imports).map(([e,t])=>`  ${e} -> ${t}`).join("\n")))};
const MODULES = ${m(JSON.stringify(f))};
${h}
</script>
</body>
</html>`}},52162(e,t,r){r.d(t,{b:()=>p});var n=r(62540),a=r(23392),o=r(34471),i=r(63696),s=r(94813);let l=/^\s*import\s+(['"])react-querybuilder\/dist\/query-builder\.s?css\1;?\s*$/m,d={"language-tsx":"/App.tsx","language-js":"/App.js","language-css":"/styles.css"},c=i.lazy(()=>Promise.all([r.e("24014"),r.e("36400"),r.e("79715")]).then(r.bind(r,63726)).then(e=>({default:e.LiveExample}))),p=({children:e,customSetup:t,rqbVersion:r=8})=>{let p="dark"===(0,o.G)().colorMode,{files:u,error:h}=i.useMemo(()=>(e=>{let t=i.Children.toArray(e),r=[];for(let e of t){let t,n=e?.props?.children?.props;if(!n||"string"!=typeof n.children)return{files:r,error:"Every child of SandpackRQB must be a code fence."};let a=!1,o=!1;if(n.metastring){let[e,...r]=n.metastring.split(" ");t="/"+e,a=r.includes("hidden"),o=r.includes("active")}else if(!(t=d[n.className??""]))return{files:r,error:`Code block is missing a filename: ${n.children}`};if(r.some(e=>e.path===t))return{files:r,error:`File ${t} was defined multiple times. Each file snippet should have a unique path name.`};r.push({path:t,code:n.children,lang:n.className?.replace("language-","")??"tsx",hidden:a,active:o})}return{files:r}})(e),[e]),m=i.useMemo(()=>({...t?.dependencies,"react-querybuilder":`^${r}`}),[t?.dependencies,r]),f=i.useMemo(()=>{let e=u.find(e=>s.ye.includes(e.path));return e&&l.test(e.code)?[]:["react-querybuilder/dist/query-builder.css"]},[u]);return(0,n.jsx)("div",{className:"sandpackrqb",children:(0,n.jsx)(a.A,{children:()=>(0,n.jsx)(i.Suspense,{fallback:null,children:(0,n.jsx)(c,{files:u,dependencies:m,extraCSSImports:f,parseError:h,dark:p})})})},`v${r}`)}},43023(e,t,r){r.d(t,{R:()=>i,x:()=>s});var n=r(63696);let a={},o=n.createContext(a);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);