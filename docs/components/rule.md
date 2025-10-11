# Rule

The `Rule` component represents individual query conditions. It calls the [`useRule`](/docs/utils/hooks.md#userule) hook to prepare props for its subcomponents.

## Subcomponents[​](#subcomponents "Direct link to Subcomponents")

By default, subcomponents are rendered by `RuleComponents`. When a rule's field has a `matchModes` property that evaluates to an array with one or more elements, `RuleComponentsWithSubQuery` is used instead.

### `RuleComponents`[​](#rulecomponents "Direct link to rulecomponents")

Renders these components in order within a `React.Fragment`:

* Shift actions[1](#user-content-fn-1)
* Drag handle[2](#user-content-fn-2)
* Field selector
* Operator selector[3](#user-content-fn-3)
* Value source selector[4](#user-content-fn-4) [5](#user-content-fn-5)
* Value editor[5](#user-content-fn-5)
* Clone rule button[6](#user-content-fn-6)
* Lock rule button[7](#user-content-fn-7)
* Remove rule button

### `RuleComponentsWithSubQuery`[​](#rulecomponentswithsubquery "Direct link to rulecomponentswithsubquery")

Renders these components in order within a `React.Fragment`:

* Shift actions[1](#user-content-fn-1)
* Drag handle[2](#user-content-fn-2)
* Field selector
* Match mode editor
* Rule group header components[8](#user-content-fn-8)
* Clone rule button[6](#user-content-fn-6)
* Lock rule button[7](#user-content-fn-7)
* Remove rule button
* Rule group body components[8](#user-content-fn-8)

<!-- -->

## Footnotes[​](#footnote-label "Direct link to Footnotes")

1. Only rendered if [`showShiftActions`](/docs/components/querybuilder.md#showshiftactions) is `true`. [↩](#user-content-fnref-1) [↩2](#user-content-fnref-1-2)

2. Only rendered if [`enableDragAndDrop`](/docs/components/querybuilder.md#enabledraganddrop) is `true`. [↩](#user-content-fnref-2) [↩2](#user-content-fnref-2-2)

3. Only rendered if [`autoSelectField`](/docs/components/querybuilder.md#autoselectfield) is `true` or the rule's `field` doesn't match `translations.fields.placeholderName`. [↩](#user-content-fnref-3)

4. Only rendered if the rule's `operator` is neither `"null"` nor `"notNull"` and the derived `valueSources` array has more than one element. [↩](#user-content-fnref-4)

5. Only rendered when the following conditions are met: (1) The `arity` property of the rule's `operator` is not `"unary"` and is not a number less than `2`, and (2) [`autoSelectOperator`](/docs/components/querybuilder.md#autoselectoperator) is `true` *or* the rule's `operator` doesn't match `translations.operators.placeholderName`. [↩](#user-content-fnref-5) [↩2](#user-content-fnref-5-2)

6. Only rendered if [`showCloneButtons`](/docs/components/querybuilder.md#showclonebuttons) is `true`. [↩](#user-content-fnref-6) [↩2](#user-content-fnref-6-2)

7. Only rendered if [`showLockButtons`](/docs/components/querybuilder.md#showlockbuttons) is `true`. [↩](#user-content-fnref-7) [↩2](#user-content-fnref-7-2)

8. The wrapper element around these components is a `<div>` by default. Customize it with the `groupComponentsWrapper` prop. [↩](#user-content-fnref-8) [↩2](#user-content-fnref-8-2)
