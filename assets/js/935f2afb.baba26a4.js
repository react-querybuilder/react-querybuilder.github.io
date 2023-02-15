"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"mySidebar":[{"type":"link","label":"Getting started","href":"/docs/next/intro","docId":"intro"},{"type":"category","label":"Components","items":[{"type":"link","label":"QueryBuilder","href":"/docs/next/components/querybuilder","docId":"components/querybuilder"},{"type":"link","label":"RuleGroup","href":"/docs/next/components/rulegroup","docId":"components/rulegroup"},{"type":"link","label":"Rule","href":"/docs/next/components/rule","docId":"components/rule"},{"type":"link","label":"ActionElement","href":"/docs/next/components/actionelement","docId":"components/actionelement"},{"type":"link","label":"ValueSelector","href":"/docs/next/components/valueselector","docId":"components/valueselector"},{"type":"link","label":"ValueEditor","href":"/docs/next/components/valueeditor","docId":"components/valueeditor"},{"type":"link","label":"NotToggle","href":"/docs/next/components/nottoggle","docId":"components/nottoggle"},{"type":"link","label":"DragHandle","href":"/docs/next/components/draghandle","docId":"components/draghandle"}],"collapsed":true,"collapsible":true,"href":"/docs/next/category/components"},{"type":"category","label":"Styling","items":[{"type":"link","label":"Styling overview","href":"/docs/next/styling/overview","docId":"styling/overview"},{"type":"link","label":"CSS classes","href":"/docs/next/styling/classnames","docId":"styling/classnames"}],"collapsed":true,"collapsible":true,"href":"/docs/next/category/styling"},{"type":"category","label":"Utilities","items":[{"type":"link","label":"Export","href":"/docs/next/utils/export","docId":"utils/export"},{"type":"link","label":"Import","href":"/docs/next/utils/import","docId":"utils/import"},{"type":"link","label":"Hooks","href":"/docs/next/utils/hooks","docId":"utils/hooks"},{"type":"link","label":"Validation","href":"/docs/next/utils/validation","docId":"utils/validation"},{"type":"link","label":"Miscellaneous","href":"/docs/next/utils/misc","docId":"utils/misc"}],"collapsed":true,"collapsible":true,"href":"/docs/next/category/utilities"},{"type":"category","label":"Tips & tricks","items":[{"type":"link","label":"Managing operators","href":"/docs/next/tips/managing-operators","docId":"tips/managing-operators"},{"type":"link","label":"Limit rule groups","href":"/docs/next/tips/limit-groups","docId":"tips/limit-groups"},{"type":"link","label":"Custom components with fallbacks","href":"/docs/next/tips/custom-with-fallback","docId":"tips/custom-with-fallback"},{"type":"link","label":"External controls","href":"/docs/next/tips/external-controls","docId":"tips/external-controls"},{"type":"link","label":"Custom bind variables","href":"/docs/next/tips/custom-bind-variables","docId":"tips/custom-bind-variables"},{"type":"link","label":"Adding and removing query properties","href":"/docs/next/tips/adding-removing-query-properties","docId":"tips/adding-removing-query-properties"},{"type":"link","label":"Common mistakes","href":"/docs/next/tips/common-mistakes","docId":"tips/common-mistakes"}],"collapsed":true,"collapsible":true,"href":"/docs/next/category/tips--tricks"},{"type":"link","label":"Compatibility packages","href":"/docs/next/compat","docId":"compat"},{"type":"link","label":"TypeScript reference","href":"/docs/next/typescript","docId":"typescript"},{"type":"link","label":"Buildless","href":"/docs/next/buildless","docId":"buildless"},{"type":"link","label":"Migrating to v6","href":"/docs/next/migrate","docId":"migrate"}]},"docs":{"buildless":{"id":"buildless","title":"Buildless","description":"React Query Builder can be used directly in the browser without a build step using ESM. Babel can be used to parse JSX in a script tag.","sidebar":"mySidebar"},"compat":{"id":"compat","title":"Compatibility packages","description":"The default React Query Builder components, being basic HTML5 form controls, are very flexible when it comes to styling (primarily through the controlClassnames prop). However, some style libraries require different HTML structure to style their form controls correctly.","sidebar":"mySidebar"},"components/actionelement":{"id":"components/actionelement","title":"ActionElement","description":"Button component","sidebar":"mySidebar"},"components/draghandle":{"id":"components/draghandle","title":"DragHandle","description":"Drag-and-drop handle component","sidebar":"mySidebar"},"components/nottoggle":{"id":"components/nottoggle","title":"NotToggle","description":"Checkbox component","sidebar":"mySidebar"},"components/querybuilder":{"id":"components/querybuilder","title":"QueryBuilder","description":"The root component, context provider and wrapper div","sidebar":"mySidebar"},"components/rule":{"id":"components/rule","title":"Rule","description":"Layout and config component for rules","sidebar":"mySidebar"},"components/rulegroup":{"id":"components/rulegroup","title":"RuleGroup","description":"Layout and config component for groups","sidebar":"mySidebar"},"components/valueeditor":{"id":"components/valueeditor","title":"ValueEditor","description":"Dynamic editor component","sidebar":"mySidebar"},"components/valueselector":{"id":"components/valueselector","title":"ValueSelector","description":"Versatile selector component","sidebar":"mySidebar"},"intro":{"id":"intro","title":"Getting started","description":"TL;DR","sidebar":"mySidebar"},"migrate":{"id":"migrate","title":"Migrating to v6","description":"Version 6 requires no code changes when migrating from version 5, but the behavior of the default ValueEditor component when the operator is \\"between\\" or \\"notBetween\\" is different.","sidebar":"mySidebar"},"styling/classnames":{"id":"styling/classnames","title":"CSS classes","description":"Visual guide to CSS classes for each component element","sidebar":"mySidebar"},"styling/overview":{"id":"styling/overview","title":"Styling overview","description":"How to tweak or overhaul the default styles","sidebar":"mySidebar"},"tips/adding-removing-query-properties":{"id":"tips/adding-removing-query-properties","title":"Adding and removing query properties","description":"Customizing the query object","sidebar":"mySidebar"},"tips/common-mistakes":{"id":"tips/common-mistakes","title":"Common mistakes","description":"How to resolve some frequently-reported issues","sidebar":"mySidebar"},"tips/custom-bind-variables":{"id":"tips/custom-bind-variables","title":"Custom bind variables","description":"Altering the SQL for certain RDBMS\'s","sidebar":"mySidebar"},"tips/custom-with-fallback":{"id":"tips/custom-with-fallback","title":"Custom components with fallbacks","description":"Augmenting the default components","sidebar":"mySidebar"},"tips/external-controls":{"id":"tips/external-controls","title":"External controls","description":"Managing queries outside the main component","sidebar":"mySidebar"},"tips/limit-groups":{"id":"tips/limit-groups","title":"Limit rule groups","description":"Methods to prevent new groups","sidebar":"mySidebar"},"tips/managing-operators":{"id":"tips/managing-operators","title":"Managing operators","description":"Which operators are allowed for which fields, and how they are labeled","sidebar":"mySidebar"},"typescript":{"id":"typescript","title":"TypeScript reference","description":"These are some of the TypeScript types and interfaces you\'ll see throughout the documentation. Even if you are not using TypeScript (you really should! \ud83d\ude0a), you can use the information below to understand the required shape of the props and function parameters. To see the full type definitions for the react-querybuilder library, click here.","sidebar":"mySidebar"},"utils/export":{"id":"utils/export","title":"Export","description":"Convert query builder objects to SQL, etc.","sidebar":"mySidebar"},"utils/hooks":{"id":"utils/hooks","title":"Hooks","description":"Reuse React Query Builder\'s logic in your own components","sidebar":"mySidebar"},"utils/import":{"id":"utils/import","title":"Import","description":"Convert SQL and other formats to query builder objects","sidebar":"mySidebar"},"utils/misc":{"id":"utils/misc","title":"Miscellaneous","description":"Assorted utilities and other exports","sidebar":"mySidebar"},"utils/validation":{"id":"utils/validation","title":"Validation","description":"Query validation methods and configuration","sidebar":"mySidebar"}}}')}}]);