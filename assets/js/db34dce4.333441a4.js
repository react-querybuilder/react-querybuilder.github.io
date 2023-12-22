"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1539],{45872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(24246),s=t(71670);const i={title:"Common mistakes",description:"How to resolve some frequently-reported issues",hide_table_of_contents:!0},r=void 0,c={id:"tips/common-mistakes",title:"Common mistakes",description:"How to resolve some frequently-reported issues",source:"@site/versioned_docs/version-6/tips/common-mistakes.mdx",sourceDirName:"tips",slug:"/tips/common-mistakes",permalink:"/docs/tips/common-mistakes",draft:!1,unlisted:!1,editUrl:"https://github.com/react-querybuilder/react-querybuilder/edit/main/website/versioned_docs/version-6/tips/common-mistakes.mdx",tags:[],version:"6",frontMatter:{title:"Common mistakes",description:"How to resolve some frequently-reported issues",hide_table_of_contents:!0},sidebar:"mySidebar",previous:{title:"Adding and removing query properties",permalink:"/docs/tips/adding-removing-query-properties"},next:{title:"Compatibility packages",permalink:"/docs/compat"}},d={},a=[{value:"Custom component as closure",id:"custom-component-as-closure",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"custom-component-as-closure",children:"Custom component as closure"}),"\n",(0,o.jsxs)(n.p,{children:["When defining custom components for React Query Builder, ",(0,o.jsx)(n.a,{href:"https://react.dev/learn/your-first-component#nesting-and-organizing-components",children:"do not define them within the body of another function component"})," like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.jsx"',children:"const App = () => {\n  // Other stuff ...\n\n  // highlight-start\n  const CustomValueEditor = props => {\n    // Custom logic here ...\n    return <input />;\n  };\n  // highlight-end\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      handleOnChange={q => setQuery(q)}\n      controlElements={{\n        valueEditor: CustomValueEditor,\n      }}\n    />\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will almost certainly lead to undesirable behavior such as the value editor losing focus after each keystroke. This happens because the ",(0,o.jsx)(n.code,{children:"CustomValueEditor"})," component is being redefined each time the ",(0,o.jsx)(n.code,{children:"App"})," component renders. To fix the problem, move the custom component declaration outside of the other function component (it can still be in the same file, just not within the function body):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.jsx"',children:"// highlight-start\nconst CustomValueEditor = props => {\n  // Custom logic here ...\n  return <input />;\n};\n// highlight-end\n\nconst App = () => {\n  // Other stuff ...\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      handleOnChange={q => setQuery(q)}\n      controlElements={{\n        valueEditor: CustomValueEditor,\n      }}\n    />\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A similar mistake that leads to the same problems is declaring arrow functions that render components inside the JSX syntax. In the code below, ",(0,o.jsx)(n.code,{children:"CustomValueEditor"})," is correctly defined outside the body of ",(0,o.jsx)(n.code,{children:"App"}),", but an arrow function that ",(0,o.jsx)(n.em,{children:"renders"})," ",(0,o.jsx)(n.code,{children:"CustomValueEditor"})," is assigned to ",(0,o.jsx)(n.code,{children:"valueEditor"})," instead of the ",(0,o.jsx)(n.code,{children:"CustomValueEditor"})," component itself. This causes a new function component to be created on every render."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.jsx"',children:"const CustomValueEditor = props => {\n  // Custom logic here ...\n  return <input />;\n};\n\nconst App = () => {\n  // Other stuff ...\n\n  return (\n    <QueryBuilder\n      fields={fields}\n      query={query}\n      handleOnChange={q => setQuery(q)}\n      controlElements={{\n        // highlight-start\n        // Don't do this:\n        valueEditor: props => <CustomValueEditor {...props} />,\n        // Do this instead:\n        // valueEditor: CustomValueEditor,\n        // highlight-end\n      }}\n    />\n  );\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(27378);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);