# Customization showcase

These examples showcase React Query Builder's extensive customization capabilities. Submit a pull request to share your interesting or unusual implementations!

### Justified layout[​](#justified-layout "Direct link to Justified layout")

These CSS rules push "clone", "lock", or "remove" buttons to the right edge, creating a justified appearance. [The demo has an option to enable this technique](/demo#justifiedLayout=true).

tip

These styles are now part of the default stylesheet.

Apply them by adding `queryBuilder-justified` to the `className` prop on your `<QueryBuilder />` component or an ancestor element.

CSS

```
.queryBuilder .ruleGroup-addGroup + button.ruleGroup-cloneGroup,

.queryBuilder .ruleGroup-addGroup + button.ruleGroup-lock,

.queryBuilder .ruleGroup-addGroup + button.ruleGroup-remove,

.queryBuilder .rule-operators     + button.rule-cloneRule,

.queryBuilder .rule-operators     + button.rule-lock,

.queryBuilder .rule-operators     + button.rule-remove,

.queryBuilder .rule-value         + button.rule-cloneRule,

.queryBuilder .rule-value         + button.rule-lock,

.queryBuilder .rule-value         + button.rule-remove {

  margin-left: auto !important;

}
```

https\://example.com

AND (and)+ Rule+ Group🔓

First name (firstName)begins with (beginsWith)Stev⧉🔓⨯

OR (or)+ Rule+ Group⧉🔓⨯

Last name (lastName)=Vai⧉🔓⨯

Last name (lastName)=Vaughan⧉🔓⨯

Last name (lastName)=Martin⧉🔓⨯

First name (firstName)is null (null)⧉🔓⨯

### Inline combinator selectors[​](#inline-combinator-selectors "Direct link to Inline combinator selectors")

Positions combinator selectors to the right of their preceding rules or groups.

note

These examples use [independent combinators](/docs/components/querybuilder.md#independent-combinators), but the same styles work with [`showCombinatorsBetweenRules`](/docs/components/querybuilder.md#showcombinatorsbetweenrules).

CSS

```
.ruleGroup-body {

  /* Override the default flex layout */

  display: grid !important;

  /* Allow the left-hand column (the rule/subgroup) to expand as needed */

  /* Collapse the right-hand column (the combinator) to the width of the content */

  grid-template-columns: auto min-content;

  /* Keep the combinator aligned with the bottom of the rule/subgroup */

  align-items: end;

}
```

https\://example.com

\+ Rule+ Group

First name (firstName)begins with (beginsWith)Stev⨯

AND (and)

\+ Rule+ Group⨯

Last name (lastName)=Vai⨯

OR (or)

Last name (lastName)=Vaughan⨯

OR (or)

Last name (lastName)=Martin⨯

OR (or)

First name (firstName)is null (null)⨯

Alternatively, position combinators to the left of their following rules or groups:

CSS

```
.ruleGroup-body {

  /* Override the default flex layout */

  display: grid !important;

  /* Allow the right-hand column (the rule/subgroup) to expand as needed */

  /* Collapse the left-hand column (the combinator) to the width of the content */

  grid-template-columns: min-content auto;

  /* Keep the combinator aligned with the top of the rule/subgroup */

  align-items: start;

}



/* Indent the first rule/subgroup since it has no preceding combinator */

.ruleGroup-body > .rule:first-child:not(:only-child),

.ruleGroup-body > .ruleGroup:first-child:not(:only-child) {

  grid-column-start: 2;

}
```

https\://example.com

\+ Rule+ Group

First name (firstName)begins with (beginsWith)Stev⨯

AND (and)

\+ Rule+ Group⨯

Last name (lastName)=Vai⨯

OR (or)

Last name (lastName)=Vaughan⨯

OR (or)

Last name (lastName)=Martin⨯

OR (or)

First name (firstName)is null (null)⨯

## Disjunctive normal form[​](#disjunctive-normal-form "Direct link to Disjunctive normal form")

This example implements [disjunctive normal form (DNF)](https://en.wikipedia.org/wiki/Disjunctive_normal_form) by restricting root groups to "or", subgroups to "and", and limiting nesting to one level. Additional customizations include:

**CSS customizations:**

* Swap header and body order within groups
* Hide top-level "add rule" button (prevents rules in root group)
* Hide subgroup "add group" buttons (prevents deep nesting)
* Display subgroups horizontally
* Stack rule elements vertically (accommodates horizontal layout)
* Hide "remove group" buttons (would appear oddly positioned)

**Component/prop customizations:**

* Display combinators as static text (DNF is always "OR of ANDs")
* Remove groups when their last rule is deleted
* Auto-add default rules to new groups (enables immediate removal)

tip

This example demonstrates techniques detailed in the [arbitrary updates guide](/docs/tips/arbitrary-updates.md) and [hooks documentation](/docs/utils/hooks.md#usequerybuilderquery).

> *You may want to hide the left-hand sidebar (click `<<` at the bottom) to have a wider view of this example.*

styles.css

App.tsx

```
import { useState } from 'react';
import type {
  Field,
  RuleGroupType,
  ActionProps,
  CombinatorSelectorProps,
} from 'react-querybuilder';
import {
  ActionElement,
  getOption,
  QueryBuilder,
  findPath,
  getParentPath,
  remove,
  useQueryBuilderQuery,
} from 'react-querybuilder';

const fields: Field[] = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

const initialQuery: RuleGroupType = {
  combinator: 'or',
  rules: [
    {
      combinator: 'and',
      rules: [
        { field: 'firstName', operator: 'beginsWith', value: 'Stev' },
        { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },
      ],
    },
    {
      combinator: 'and',
      rules: [
        {
          field: 'firstName',
          operator: 'beginsWith',
          value: 'To remove group, remove last rule',
        },
      ],
    },
  ],
};

const RemoveRule = (props: ActionProps) => {
  const query = useQueryBuilderQuery();
  if (!query) return null;
  const parentPath = getParentPath(props.path);
  /** Count of rules in the same group */
  const siblingCount = (findPath(parentPath, query) as RuleGroupType).rules.length - 1;
  const onClick = (e: React.MouseEvent) => {
    if (siblingCount > 0) {
      // If sibling rules exist, remove the current rule
      // using the default handler
      props.handleOnClick(e, props.context);
    } else {
      // Otherwise, remove the entire group
      props.schema.dispatchQuery(remove(query, getParentPath(props.path)));
    }
  };
  // Render with default props except for our custom click handler
  if (siblingCount === 0 && query.rules.length === 1) {
    // Don't render the "remove rule" action if this is
    // the only rule in the only group
    return null;
    // (You could also go ahead and render the button but
    // not remove its group in the click handler)
  }
  return <ActionElement {...props} handleOnClick={onClick} />;
};

const CombinatorSelector = (props: CombinatorSelectorProps) => (
  // Render static value to prevent combinator updates
  <div className={props.className} title={props.title}>
    {getOption(props.options, props.value!)?.label}
  </div>
);

export default () => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <QueryBuilder
      fields={fields}
      query={query}
      onQueryChange={setQuery}
      // Move combinator control from group
      // header to group body:
      showCombinatorsBetweenRules
      // Ensure new groups are not empty:
      addRuleToNewGroups
      controlElements={{
        // Use our custom components
        removeRuleAction: RemoveRule,
        combinatorSelector: CombinatorSelector,
      }}
      translations={{
        addGroup: { label: '+' },
        addRule: { label: '+' },
      }}
    />
  );
};
```

[Open Sandbox](https://codesandbox.io/api/v1/sandboxes/define?undefined\&environment=server "Open in CodeSandbox")
