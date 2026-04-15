# CSS classes

The `<QueryBuilder />` component assigns [standard classes](/docs/utils/misc.md#defaults) to each element. In the (fully operational) query builder below, the `title` and `label` for each element have been set to the element's standard class.

The following standard classnames are not labeled below. For most of them, the elements they apply to can be identified by outline color.

* `.queryBuilder` (`black` outline; the outer-most `<div>`)
* `.ruleGroup` (maroon outline)
* `.ruleGroup-header` (purple outline)
* `.ruleGroup-body` (blue outline)
* `.rule.queryBuilder-disabled` (gray outline for locked/disabled rules)
* `.rule.queryBuilder-valid` (green outline for valid rules)
* `.rule.queryBuilder-invalid` (red outline for invalid rules)
* `.shiftActions` (orange outline for the wrapper `<div>` around the "Shift up"/"Shift down" buttons)
* `.rule-hasSubQuery` (applied to rules that render a subquery)
* `.queryBuilder-loading` (applied to rules/groups while an [async promise is pending](/docs/tips/async-option-lists.md))
* `.dndDragging` (applied to "preview" element while dragging)
* `.dndOver` (applied to "hovered over" element while dragging)
* `.dndCopy` (applied to "hovered over" element while dragging and the ["copy" modifier key is pressed](/docs/dnd.md#cloning-and-grouping))
* `.dndGroup` (applied to "hovered over" element while dragging and the ["group" modifier key is pressed](/docs/dnd.md#cloning-and-grouping))

A full list of standard classnames is [below](#standard-classnames).

tip

Disable application of all standard classnames with the [`suppressStandardClassnames`](/docs/components/querybuilder.md#suppressstandardclassnames) prop.

<!-- -->

<!-- -->

<!-- -->

<!-- -->

<!-- -->

<!-- -->

<!-- -->

.ruleGroup-combinators (and)\[ ].ruleGroup-notToggle.ruleGroup-addRule.ruleGroup-addGroup.ruleGroup-lock

˄˅

.rule-fields (f1).rule-operators (=).rule-value.rule-cloneRule.rule-lock.rule-remove

˄˅

.ruleGroup-combinators (and)\[ ].ruleGroup-notToggle.ruleGroup-addRule.ruleGroup-addGroup.ruleGroup-cloneGroup.ruleGroup-lock.ruleGroup-remove

˄˅

.rule-fields (f1).rule-operators (=)This rule is valid.rule-cloneRule.rule-lock.rule-remove

˄˅

.rule-fields (f2).rule-operators (=)This rule is invalid.rule-cloneRule.rule-lock.rule-remove

˄˅

.ruleGroup-combinators (and).ruleGroup-notToggle.ruleGroup-addRule.ruleGroup-addGroup.ruleGroup-cloneGroup.ruleGroup-lock.ruleGroup-remove

˄˅

.rule-fields (f1).rule-operators (=).rule-cloneRule.rule-lock.rule-remove

˄˅

.rule-valueSource (f3).rule-operators (=)valuef1.rule-cloneRule.rule-lock.rule-remove

˄˅

Value list (fb1)betweenfield.rule-value-list-item (fb2).rule-value-list-item (fb2).rule-cloneRule.rule-lock.rule-remove

## Standard classnames[​](#standard-classnames "Direct link to Standard classnames")

```
export const standardClassnames = {

  queryBuilder: 'queryBuilder',

  ruleGroup: 'ruleGroup',

  header: 'ruleGroup-header',

  body: 'ruleGroup-body',

  combinators: 'ruleGroup-combinators',

  addRule: 'ruleGroup-addRule',

  addGroup: 'ruleGroup-addGroup',

  cloneRule: 'rule-cloneRule',

  cloneGroup: 'ruleGroup-cloneGroup',

  removeGroup: 'ruleGroup-remove',

  notToggle: 'ruleGroup-notToggle',

  rule: 'rule',

  fields: 'rule-fields',

  matchMode: 'rule-matchMode',

  matchThreshold: 'rule-matchThreshold',

  operators: 'rule-operators',

  value: 'rule-value',

  removeRule: 'rule-remove',

  betweenRules: 'betweenRules',

  valid: 'queryBuilder-valid',

  invalid: 'queryBuilder-invalid',

  shiftActions: 'shiftActions',

  dndDragging: 'dndDragging',

  dndOver: 'dndOver',

  dndCopy: 'dndCopy',

  dndGroup: 'dndGroup',

  dndDropNotAllowed: 'dndDropNotAllowed',

  dndPreviewPosition: 'dndPreviewPosition',

  dndHidden: 'dndHidden',

  dragHandle: 'queryBuilder-dragHandle',

  disabled: 'queryBuilder-disabled',

  muted: 'queryBuilder-muted',

  lockRule: 'rule-lock',

  lockGroup: 'ruleGroup-lock',

  muteRule: 'rule-mute',

  muteGroup: 'ruleGroup-mute',

  valueSource: 'rule-valueSource',

  valueListItem: 'rule-value-list-item',

  branches: 'queryBuilder-branches',

  justified: 'queryBuilder-justified',

  hasSubQuery: 'rule-hasSubQuery',

  loading: 'queryBuilder-loading',

} as const;
```

> *Source: [/packages/core/src/defaults.ts#L275-L318](https://github.com/react-querybuilder/react-querybuilder/blob/main/packages/core/src/defaults.ts#L275-L318)*
