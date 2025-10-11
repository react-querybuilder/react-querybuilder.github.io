# RuleGroup

The `RuleGroup` component renders the recursive, hierarchical query structure of React Query Builder. It calls the [`useRuleGroup`](/docs/utils/hooks.md#userulegroup) hook to prepare props for its subcomponents.

## Subcomponents[​](#subcomponents "Direct link to Subcomponents")

`RuleGroup` renders an outer `<div>` containing two inner `<div>`s: the first with [header elements](#rulegroupheadercomponents) (based on group properties) and the second with [body elements](#rulegroupbodycomponents) (derived primarily from the group's `rules` array).

tip

The header and body layout components are HTML-agnostic. This allows `@react-querybuilder/native` to render the same layout components within React Native `<View>` elements, and you can adapt them similarly for other frameworks.

### `RuleGroupHeaderComponents`[​](#rulegroupheadercomponents "Direct link to rulegroupheadercomponents")

This component renders the following elements in this order:

* Shift actions[1](#user-content-fn-1)
* Drag handle[2](#user-content-fn-2)
* Combinator selector[3](#user-content-fn-3)
* "Not" toggle[4](#user-content-fn-4)
* Add rule button
* Add group button
* Clone group button[5](#user-content-fn-5)
* Lock group button[6](#user-content-fn-6)
* Remove group button[7](#user-content-fn-7)

### `RuleGroupBodyComponents`[​](#rulegroupbodycomponents "Direct link to rulegroupbodycomponents")

This component iterates through a group's `rules` array, rendering a child `RuleGroup` element for each subgroup and a [`Rule`](/docs/components/rule.md) element for each rule.

When [`showCombinatorsBetweenRules`](/docs/components/querybuilder.md#showcombinatorsbetweenrules) is `true`, an inline combinator[8](#user-content-fn-8) (using the group's `combinator` value) appears before each rule or group except the first.

With [independent combinators](/docs/components/querybuilder.md#independent-combinators), each odd-numbered index in the `rules` array contains a string representing a combinator value. These elements render as independent inline combinators.

note

The `showCombinatorsBetweenRules` prop is ignored if the query is using independent combinators.

<!-- -->

## Footnotes[​](#footnote-label "Direct link to Footnotes")

1. Only rendered if [`showShiftActions`](/docs/components/querybuilder.md#showshiftactions) is `true`. [↩](#user-content-fnref-1)

2. Only rendered if [`enableDragAndDrop`](/docs/components/querybuilder.md#enabledraganddrop) is `true`. [↩](#user-content-fnref-2)

3. Only rendered if [`showCombinatorsBetweenRules`](/docs/components/querybuilder.md#showcombinatorsbetweenrules) is disabled and the query is not using [independent combinators](/docs/components/querybuilder.md#independent-combinators). [↩](#user-content-fnref-3)

4. Only rendered if [`showNotToggle`](/docs/components/querybuilder.md#shownottoggle) is `true`. [↩](#user-content-fnref-4)

5. Only rendered if [`showCloneButtons`](/docs/components/querybuilder.md#showclonebuttons) is `true`. [↩](#user-content-fnref-5)

6. Only rendered if [`showLockButtons`](/docs/components/querybuilder.md#showlockbuttons) is `true`. [↩](#user-content-fnref-6)

7. Only rendered if the group is not the query root. [↩](#user-content-fnref-7)

8. The [`inlineCombinator`](/docs/components/querybuilder-controlelements.md#inlinecombinator) component in turn renders the configured [`combinatorSelector`](/docs/components/querybuilder-controlelements.md#combinatorselector). [↩](#user-content-fnref-8)
