# QueryBuilder controlElements prop

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

The `controlElements` prop allows you to override default components with custom implementations.

## Usage example[​](#usage-example "Direct link to Usage example")

```
function App() {

  return (

    <QueryBuilder controlElements={{ valueEditor: CustomValueEditor }}>

  )

}
```

## Properties[​](#properties "Direct link to Properties")

The following control overrides are supported via the `Controls` interface. Setting any control to `null` hides the element by rendering it as `() => null`.

| Property                                              | Type                                                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`actionElement`](#actionelement)                     | `React.ComponentType<ActionProps>`                                                                |
| [`addGroupAction`](#addgroupaction)                   | `React.ComponentType<ActionProps> \| null`                                                        |
| [`addRuleAction`](#addruleaction)                     | `React.ComponentType<ActionProps> \| null`                                                        |
| [`cloneGroupAction`](#clonegroupaction)               | `React.ComponentType<ActionProps> \| null`                                                        |
| [`cloneRuleAction`](#cloneruleaction)                 | `React.ComponentType<ActionProps> \| null`                                                        |
| [`combinatorSelector`](#combinatorselector)           | `React.ComponentType<CombinatorSelectorProps> \| null`                                            |
| [`dragHandle`](#draghandle)                           | `React.ForwardRefExoticComponent<DragHandleProps & React.RefAttributes<HTMLSpanElement>> \| null` |
| [`fieldSelector`](#fieldselector)                     | `React.ComponentType<FieldSelectorProps> \| null`                                                 |
| [`inlineCombinator`](#inlinecombinator)               | `React.ComponentType<InlineCombinatorProps> \| null`                                              |
| [`lockGroupAction`](#lockgroupaction)                 | `React.ComponentType<ActionProps> \| null`                                                        |
| [`lockRuleAction`](#lockruleaction)                   | `React.ComponentType<ActionProps> \| null`                                                        |
| [`matchModeEditor`](#matchmodeeditor)                 | `React.ComponentType<MatchModeEditorProps> \| null`                                               |
| [`muteGroupAction`](#mutegroupaction)                 | `React.ComponentType<ActionProps> \| null`                                                        |
| [`muteRuleAction`](#muteruleaction)                   | `React.ComponentType<ActionProps> \| null`                                                        |
| [`notToggle`](#nottoggle)                             | `React.ComponentType<NotToggleProps> \| null`                                                     |
| [`operatorSelector`](#operatorselector)               | `React.ComponentType<OperatorSelectorProps> \| null`                                              |
| [`removeGroupAction`](#removegroupaction)             | `React.ComponentType<ActionProps> \| null`                                                        |
| [`removeRuleAction`](#removeruleaction)               | `React.ComponentType<ActionProps> \| null`                                                        |
| [`rule`](#rule)                                       | `React.ComponentType<RuleProps>`                                                                  |
| [`ruleGroup`](#rulegroup)                             | `React.ComponentType<RuleGroupProps>`                                                             |
| [`ruleGroupBodyElements`](#rulegroupbodyelements)     | `React.ComponentType<RuleGroupProps & ReturnType<typeof useRuleGroup>>`                           |
| [`ruleGroupHeaderElements`](#rulegroupheaderelements) | `React.ComponentType<RuleGroupProps & ReturnType<typeof useRuleGroup>>`                           |
| [`shiftActions`](#shiftactions)                       | `React.ComponentType<ShiftActionsProps> \| null`                                                  |
| [`valueEditor`](#valueeditor)                         | `React.ComponentType<ValueEditorProps> \| null`                                                   |
| [`valueSelector`](#valueselector)                     | `React.ComponentType<ValueSelectorProps>`                                                         |
| [`valueSourceSelector`](#valuesourceselector)         | `React.ComponentType<ValueSourceSelectorProps> \| null`                                           |

### `actionElement`[​](#actionelement "Direct link to actionelement")

The base component for all button-type controls. Defaults to [`ActionElement`](/docs/components/actionelement.md). Receives props per the `ActionProps` interface and can be any of the following controls:

* [`addGroupAction`](#addgroupaction)
* [`addRuleAction`](#addruleaction)
* [`cloneGroupAction`](#clonegroupaction)
* [`cloneRuleAction`](#cloneruleaction)
* [`lockGroupAction`](#lockgroupaction)
* [`lockRuleAction`](#lockruleaction)
* [`muteGroupAction`](#mutegroupaction)
* [`muteRuleAction`](#muteruleaction)
* [`removeGroupAction`](#removegroupaction)
* [`removeRuleAction`](#removeruleaction)

For example, this:

```
<QueryBuilder controlElements={{ actionElement: MyAwesomeButton }} />
```

...is equivalent to this:

```
<QueryBuilder

  controlElements={{

    addGroupAction: MyAwesomeButton

    addRuleAction: MyAwesomeButton

    cloneGroupAction: MyAwesomeButton

    cloneRuleAction: MyAwesomeButton

    lockGroupAction: MyAwesomeButton

    lockRuleAction: MyAwesomeButton

    muteGroupAction: MyAwesomeButton

    muteRuleAction: MyAwesomeButton

    removeGroupAction: MyAwesomeButton

    removeRuleAction: MyAwesomeButton

  }}

/>
```

### `addGroupAction`[​](#addgroupaction "Direct link to addgroupaction")

Adds a sub-group to the current group. Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `addGroupAction`

Per the `ActionProps` interface:

| Prop            | Type                                           | Description                                                  |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `label`         | `ReactNode`                                    | `translations.addGroup.label`, e.g. "+ Group"                |
| `title`         | `string`                                       | `translations.addGroup.title`, e.g. "Add group"              |
| `className`     | `string`                                       | CSS `classNames` to be applied                               |
| `handleOnClick` | `(e: React.MouseEvent, context?: any) => void` | Adds a new sub-group to this group                           |
| `rules`         | `RuleOrGroupArray`                             | The `rules` array for this group                             |
| `ruleOrGroup`   | `RuleGroupTypeAny`                             | This group                                                   |
| `level`         | `number`                                       | The `level` of this group                                    |
| `context`       | `any`                                          | Container for custom props that are passed to all components |
| `validation`    | `boolean \| ValidationResult`                  | Validation result of this group                              |
| `disabled`      | `boolean`                                      | Whether this group is disabled/locked                        |
| `path`          | `Path`                                         | [Path](/docs/tips/path.md) of this group                     |
| `schema`        | `Schema`                                       | Query [schema](/docs/typescript.md#miscellaneous)            |

### `addRuleAction`[​](#addruleaction "Direct link to addruleaction")

Adds a rule to the current group. Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `addRuleAction`

Per the `ActionProps` interface:

| Prop            | Type                                           | Description                                                  |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `label`         | `ReactNode`                                    | `translations.addRule.label`, e.g. "+ Rule"                  |
| `title`         | `string`                                       | `translations.addRule.title`, e.g. "Add rule"                |
| `className`     | `string`                                       | CSS `classNames` to be applied                               |
| `handleOnClick` | `(e: React.MouseEvent, context?: any) => void` | Adds a new rule to this rule                                 |
| `rules`         | `RuleOrGroupArray`                             | The `rules` array for this rule                              |
| `ruleOrGroup`   | `RuleGroupTypeAny`                             | This rule                                                    |
| `level`         | `number`                                       | The `level` of this rule                                     |
| `context`       | `any`                                          | Container for custom props that are passed to all components |
| `validation`    | `boolean \| ValidationResult`                  | Validation result of this rule                               |
| `disabled`      | `boolean`                                      | Whether this rule is disabled/locked                         |
| `path`          | `Path`                                         | [Path](/docs/tips/path.md) of this rule                      |
| `schema`        | `Schema`                                       | Query [schema](/docs/typescript.md#miscellaneous)            |

### `cloneGroupAction`[​](#clonegroupaction "Direct link to clonegroupaction")

Clones the current group. Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `cloneGroupAction`

Per the `ActionProps` interface:

| Prop            | Type                            | Description                                                  |
| --------------- | ------------------------------- | ------------------------------------------------------------ |
| `label`         | `ReactNode`                     | `translations.cloneRuleGroup.label`, e.g. "⧉"                |
| `title`         | `string`                        | `translations.cloneRuleGroup.title`, e.g. "Clone group"      |
| `className`     | `string`                        | CSS `classNames` to be applied                               |
| `handleOnClick` | `(e: React.MouseEvent) => void` | Clones this group                                            |
| `rules`         | `RuleOrGroupArray`              | The `rules` array for this group                             |
| `ruleOrGroup`   | `RuleGroupTypeAny`              | This group                                                   |
| `level`         | `number`                        | The `level` of this group                                    |
| `context`       | `any`                           | Container for custom props that are passed to all components |
| `validation`    | `boolean \| ValidationResult`   | Validation result of this group                              |
| `disabled`      | `boolean`                       | Whether this group is disabled/locked                        |
| `path`          | `Path`                          | [Path](/docs/tips/path.md) of this group                     |
| `schema`        | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)            |

### `cloneRuleAction`[​](#cloneruleaction "Direct link to cloneruleaction")

Clones the current rule. Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `cloneRuleAction`

Per the `ActionProps` interface:

| Prop            | Type                            | Description                                                  |
| --------------- | ------------------------------- | ------------------------------------------------------------ |
| `label`         | `string`                        | `translations.cloneRule.label`, e.g. "⧉"                     |
| `title`         | `string`                        | `translations.cloneRule.title`, e.g. "Clone rule"            |
| `className`     | `string`                        | CSS `classNames` to be applied                               |
| `handleOnClick` | `(e: React.MouseEvent) => void` | Clones the rule                                              |
| `ruleOrGroup`   | `RuleType`                      | This rule                                                    |
| `level`         | `number`                        | The `level` of this rule                                     |
| `context`       | `any`                           | Container for custom props that are passed to all components |
| `validation`    | `boolean \| ValidationResult`   | Validation result of this rule                               |
| `disabled`      | `boolean`                       | Whether this rule is disabled/locked                         |
| `path`          | `Path`                          | [Path](/docs/tips/path.md) of this rule                      |
| `schema`        | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)            |

### `combinatorSelector`[​](#combinatorselector "Direct link to combinatorselector")

Selects the `combinator` property for the current group or the current independent combinator value. Defaults to [`ValueSelector`](/docs/components/valueselector.md).

Props for `combinatorSelector`

Per the `CombinatorSelectorProps` interface:

| Prop             | Type                          | Description                                                          |
| ---------------- | ----------------------------- | -------------------------------------------------------------------- |
| `options`        | `OptionList`                  | Same as `combinators` prop passed into `QueryBuilder`                |
| `value`          | `string`                      | Selected `combinator` from the existing query representation, if any |
| `className`      | `string`                      | CSS `classNames` to be applied                                       |
| `handleOnChange` | `(value: any) => void`        | Updates the group's `combinator`                                     |
| `rules`          | `RuleOrGroupArray`            | The `rules` array for this group                                     |
| `title`          | `string`                      | `translations.combinators.title`, e.g. "Combinators"                 |
| `level`          | `number`                      | The `level` of this group                                            |
| `context`        | `any`                         | Container for custom props that are passed to all components         |
| `validation`     | `boolean \| ValidationResult` | Validation result of this group                                      |
| `disabled`       | `boolean`                     | Whether this group is disabled/locked                                |
| `path`           | `Path`                        | [Path](/docs/tips/path.md) of this group                             |
| `schema`         | `Schema`                      | Query [schema](/docs/typescript.md#miscellaneous)                    |

### `dragHandle`[​](#draghandle "Direct link to draghandle")

Provides a draggable handle for reordering rules and groups. Defaults to [`DragHandle`](/docs/components/draghandle.md). Only rendered when [drag-and-drop is enabled](/docs/components/querybuilder.md#enabledraganddrop). This component must use `React.forwardRef`.

Props for `dragHandle`

Receives the forwarded `ref` and the following props per the `DragHandleProps` interface:

| Prop          | Type                           | Description                                                  |
| ------------- | ------------------------------ | ------------------------------------------------------------ |
| `label`       | `ReactNode`                    | `translations.dragHandle.label`, e.g. "⁞⁞"                   |
| `title`       | `string`                       | `translations.dragHandle.title`, e.g. "Drag handle"          |
| `className`   | `string`                       | CSS `classNames` to be applied                               |
| `level`       | `number`                       | The `level` of this rule/group                               |
| `context`     | `any`                          | Container for custom props that are passed to all components |
| `validation`  | `boolean \| ValidationResult`  | Validation result of this rule/group                         |
| `disabled`    | `boolean`                      | Whether this rule/group is disabled/locked                   |
| `path`        | `Path`                         | [Path](/docs/tips/path.md) of this rule/group                |
| `schema`      | `Schema`                       | Query [schema](/docs/typescript.md#miscellaneous)            |
| `ruleOrGroup` | `RuleGroupTypeAny \| RuleType` | This group or rule, depending on the parent component        |

### `fieldSelector`[​](#fieldselector "Direct link to fieldselector")

Selects the `field` property for the current rule. Defaults to [`ValueSelector`](/docs/components/valueselector.md).

Props for `fieldSelector`

Per the `FieldSelectorProps` interface:

| Prop             | Type                          | Description                                                        |
| ---------------- | ----------------------------- | ------------------------------------------------------------------ |
| `options`        | `OptionList<Field>`           | Same as `fields` prop passed into `QueryBuilder`                   |
| `value`          | `string`                      | Selected `field` from the existing query representation, if any    |
| `title`          | `string`                      | `translations.fields.title`, e.g. "Fields"                         |
| `operator`       | `string`                      | Selected `operator` from the existing query representation, if any |
| `className`      | `string`                      | CSS `classNames` to be applied                                     |
| `handleOnChange` | `(value: any) => void`        | Updates the rule's field                                           |
| `level`          | `number`                      | The `level` of this rule                                           |
| `context`        | `any`                         | Container for custom props that are passed to all components       |
| `validation`     | `boolean \| ValidationResult` | Validation result of this rule                                     |
| `disabled`       | `boolean`                     | Whether this rule is disabled/locked                               |
| `path`           | `Path`                        | [Path](/docs/tips/path.md) of this rule                            |
| `schema`         | `Schema`                      | Query [schema](/docs/typescript.md#miscellaneous)                  |
| `rule`           | `RuleType`                    | This rule                                                          |

### `inlineCombinator`[​](#inlinecombinator "Direct link to inlinecombinator")

Wraps the [`combinatorSelector`](#combinatorselector) component for inline display. Defaults to [`InlineCombinator`](/docs/components/inlinecombinator.md).

Props for `inlineCombinator`

Per the `InlineCombinatorProps` interface, which extends `CombinatorSelectorProps`:

| Prop        | Type                                       | Description                                |
| ----------- | ------------------------------------------ | ------------------------------------------ |
| `component` | `Schema['controls']['combinatorSelector']` | Same as the `combinatorSelector` component |

### `lockGroupAction`[​](#lockgroupaction "Direct link to lockgroupaction")

Locks the current group (sets the `disabled` property to `true`). Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `lockGroupAction`

Per the `ActionProps` interface:

| Prop                  | Type                            | Description                                                                                                            |
| --------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `label`               | `ReactNode`                     | `translations.lockGroup.label` or `translations.lockGroupDisabled.label`, e.g. "🔓" when unlocked and "🔒" when locked |
| `title`               | `string`                        | `translations.lockGroup.title` or `translations.lockGroupDisabled.title`, e.g. "Lock group" or "Unlock group"          |
| `className`           | `string`                        | CSS `classNames` to be applied                                                                                         |
| `handleOnClick`       | `(e: React.MouseEvent) => void` | Locks the group                                                                                                        |
| `rules`               | `RuleOrGroupArray`              | The rules present for this group                                                                                       |
| `ruleOrGroup`         | `RuleGroupTypeAny`              | This group                                                                                                             |
| `level`               | `number`                        | The `level` of this group                                                                                              |
| `context`             | `any`                           | Container for custom props that are passed to all components                                                           |
| `validation`          | `boolean \| ValidationResult`   | Validation result of this group                                                                                        |
| `disabled`            | `boolean`                       | Whether this group is disabled/locked                                                                                  |
| `disabledTranslation` | `string`                        | `translations.lockGroupDisabled` if parent group is not disabled, otherwise `undefined`                                |
| `path`                | `Path`                          | [Path](/docs/tips/path.md) of this group                                                                               |
| `schema`              | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)                                                                      |

### `lockRuleAction`[​](#lockruleaction "Direct link to lockruleaction")

Locks the current rule (sets the `disabled` property to `true`). Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `lockRuleAction`

Per the `ActionProps` interface:

| Prop                  | Type                            | Description                                                                                                          |
| --------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `label`               | `ReactNode`                     | `translations.lockRule.label` or `translations.lockRuleDisabled.label`, e.g. "🔓" when unlocked and "🔒" when locked |
| `title`               | `string`                        | `translations.lockRule.title` or `translations.lockRuleDisabled.title`, e.g. "Lock rule" or "Unlock rule"            |
| `className`           | `string`                        | CSS `classNames` to be applied                                                                                       |
| `handleOnClick`       | `(e: React.MouseEvent) => void` | Locks the rule                                                                                                       |
| `ruleOrGroup`         | `RuleType`                      | This rule                                                                                                            |
| `level`               | `number`                        | The `level` of this rule                                                                                             |
| `context`             | `any`                           | Container for custom props that are passed to all components                                                         |
| `validation`          | `boolean \| ValidationResult`   | Validation result of this rule                                                                                       |
| `disabled`            | `boolean`                       | Whether this rule is disabled/locked                                                                                 |
| `disabledTranslation` | `string`                        | `translations.lockRuleDisabled` if parent group is not disabled, otherwise `undefined`                               |
| `path`                | `Path`                          | [Path](/docs/tips/path.md) of this rule                                                                              |
| `schema`              | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)                                                                    |

### `matchModeEditor`[​](#matchmodeeditor "Direct link to matchmodeeditor")

Manages the `match` property for the current rule, including the `mode` and `threshold` (see [Subqueries](/docs/tips/subqueries.md)). Defaults to [`MatchModeEditor`](/docs/components/matchmodeeditor.md).

Props for `matchModeEditor`

Per the `MatchModeEditorProps` interface:

| Prop                     | Type                                            | Description                                                  |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------------ |
| `match`                  | `MatchConfig`                                   | Current match configuration for this rule                    |
| `options`                | `OptionList<MatchMode>`                         | Available match modes for the current field                  |
| `field`                  | `string`                                        | Field name corresponding to this rule                        |
| `fieldData`              | `FullField`                                     | The entire object from the fields array for this field       |
| `rule`                   | `RuleType`                                      | This rule                                                    |
| `selectorComponent`      | `ComponentType<ValueSelectorProps>`             | Component to use for the match mode selector                 |
| `numericEditorComponent` | `ComponentType<ValueEditorProps>`               | Component to use for the match threshold editor              |
| `classNames`             | `{ matchMode: string; matchThreshold: string }` | CSS classNames for sub-components                            |
| `value`                  | `string`                                        | Current match mode value                                     |
| `className`              | `string`                                        | CSS `classNames` to be applied                               |
| `handleOnChange`         | `(value: any) => void`                          | Updates the rule's match configuration                       |
| `level`                  | `number`                                        | The `level` of this rule                                     |
| `context`                | `any`                                           | Container for custom props that are passed to all components |
| `validation`             | `boolean \| ValidationResult`                   | Validation result of this rule                               |
| `disabled`               | `boolean`                                       | Whether this rule is disabled/locked                         |
| `path`                   | `Path`                                          | [Path](/docs/tips/path.md) of this rule                      |
| `schema`                 | `Schema`                                        | Query [schema](/docs/typescript.md#miscellaneous)            |

### `muteGroupAction`[​](#mutegroupaction "Direct link to mutegroupaction")

Mutes the current group (sets the `muted` property to `true`). Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `muteGroupAction`

Per the `ActionProps` interface:

| Prop            | Type                            | Description                                                                                                    |
| --------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `label`         | `ReactNode`                     | `translations.muteGroup.label` or `translations.unmuteGroup.label`, e.g. "🔊" when unmuted and "🔇" when muted |
| `title`         | `string`                        | `translations.muteGroup.title` or `translations.unmuteGroup.title`, e.g. "Mute group" or "Unmute group"        |
| `className`     | `string`                        | CSS `classNames` to be applied                                                                                 |
| `handleOnClick` | `(e: React.MouseEvent) => void` | Toggles `muted` property for the group                                                                         |
| `rules`         | `RuleOrGroupArray`              | The rules present for this group                                                                               |
| `ruleOrGroup`   | `RuleGroupTypeAny`              | This group                                                                                                     |
| `level`         | `number`                        | The `level` of this group                                                                                      |
| `context`       | `any`                           | Container for custom props that are passed to all components                                                   |
| `validation`    | `boolean \| ValidationResult`   | Validation result of this group                                                                                |
| `disabled`      | `boolean`                       | Whether this group is disabled/locked                                                                          |
| `path`          | `Path`                          | [Path](/docs/tips/path.md) of this group                                                                       |
| `schema`        | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)                                                              |

### `muteRuleAction`[​](#muteruleaction "Direct link to muteruleaction")

Mutes the current rule (sets the `muted` property to `true`). Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `muteRuleAction`

Per the `ActionProps` interface:

| Prop            | Type                            | Description                                                                                                  |
| --------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `label`         | `ReactNode`                     | `translations.muteRule.label` or `translations.unmuteRule.label`, e.g. "🔊" when unmuted and "🔇" when muted |
| `title`         | `string`                        | `translations.muteRule.title` or `translations.unmuteRule.title`, e.g. "Mute rule" or "Unmute rule"          |
| `className`     | `string`                        | CSS `classNames` to be applied                                                                               |
| `handleOnClick` | `(e: React.MouseEvent) => void` | Toggles `muted` property for the rule                                                                        |
| `ruleOrGroup`   | `RuleType`                      | This rule                                                                                                    |
| `level`         | `number`                        | The `level` of this rule                                                                                     |
| `context`       | `any`                           | Container for custom props that are passed to all components                                                 |
| `validation`    | `boolean \| ValidationResult`   | Validation result of this rule                                                                               |
| `disabled`      | `boolean`                       | Whether this rule is disabled/locked                                                                         |
| `path`          | `Path`                          | [Path](/docs/tips/path.md) of this rule                                                                      |
| `schema`        | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)                                                            |

### `notToggle`[​](#nottoggle "Direct link to nottoggle")

Toggles the `not` property of the current group between `true` and `false`. Defaults to [`NotToggle`](/docs/components/nottoggle.md).

Props for `notToggle`

Per the `NotToggleProps` interface:

| Prop             | Type                          | Description                                                  |
| ---------------- | ----------------------------- | ------------------------------------------------------------ |
| `label`          | `ReactNode`                   | `translations.notToggle.label`, e.g. "Not"                   |
| `title`          | `string`                      | `translations.notToggle.title`, e.g. "Invert this group"     |
| `className`      | `string`                      | CSS `classNames` to be applied                               |
| `handleOnChange` | `(checked: boolean) => void`  | Updates the group's `not` property                           |
| `checked`        | `boolean`                     | Whether the input should be checked or not                   |
| `level`          | `number`                      | The `level` of this group                                    |
| `context`        | `any`                         | Container for custom props that are passed to all components |
| `validation`     | `boolean \| ValidationResult` | Validation result of this group                              |
| `disabled`       | `boolean`                     | Whether this group is disabled/locked                        |
| `path`           | `Path`                        | [Path](/docs/tips/path.md) of this group                     |
| `schema`         | `Schema`                      | Query [schema](/docs/typescript.md#miscellaneous)            |
| `ruleGroup`      | `RuleGroupTypeAny`            | This group                                                   |

### `operatorSelector`[​](#operatorselector "Direct link to operatorselector")

Selects the `operator` property for the current rule. Defaults to [`ValueSelector`](/docs/components/valueselector.md).

Props for `operatorSelector`

Per the `OperatorSelectorProps` interface:

| Prop             | Type                          | Description                                                      |
| ---------------- | ----------------------------- | ---------------------------------------------------------------- |
| `field`          | `string`                      | Field name corresponding to this rule                            |
| `fieldData`      | `Field`                       | The entire object from the fields array for this field           |
| `options`        | `OptionList<Operator>`        | Return value of `getOperators(field, { fieldData })`             |
| `value`          | `string`                      | Selected operator from the existing query representation, if any |
| `title`          | `string`                      | `translations.operators.title`, e.g. "Operators"                 |
| `className`      | `string`                      | CSS `classNames` to be applied                                   |
| `handleOnChange` | `(value: any) => void`        | Updates the rule's operator                                      |
| `level`          | `number`                      | The `level` of this rule                                         |
| `context`        | `any`                         | Container for custom props that are passed to all components     |
| `validation`     | `boolean \| ValidationResult` | Validation result of this rule                                   |
| `disabled`       | `boolean`                     | Whether this rule is disabled/locked                             |
| `path`           | `Path`                        | [Path](/docs/tips/path.md) of this rule                          |
| `schema`         | `Schema`                      | Query [schema](/docs/typescript.md#miscellaneous)                |
| `rule`           | `RuleType`                    | This rule                                                        |

### `removeGroupAction`[​](#removegroupaction "Direct link to removegroupaction")

Removes the current group from its parent group's `rules` array. Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `removeGroupAction`

Per the `ActionProps` interface:

| Prop            | Type                            | Description                                                  |
| --------------- | ------------------------------- | ------------------------------------------------------------ |
| `label`         | `ReactNode`                     | `translations.removeGroup.label`, e.g. "⨯"                   |
| `title`         | `string`                        | `translations.removeGroup.title`, e.g. "Remove group"        |
| `className`     | `string`                        | CSS `classNames` to be applied                               |
| `handleOnClick` | `(e: React.MouseEvent) => void` | Removes the group                                            |
| `rules`         | `RuleOrGroupArray`              | The `rules` array for this group                             |
| `ruleOrGroup`   | `RuleGroupTypeAny`              | This group                                                   |
| `level`         | `number`                        | The `level` of this group                                    |
| `context`       | `any`                           | Container for custom props that are passed to all components |
| `validation`    | `boolean \| ValidationResult`   | Validation result of this group                              |
| `disabled`      | `boolean`                       | Whether this group is disabled/locked                        |
| `path`          | `Path`                          | [Path](/docs/tips/path.md) of this group                     |
| `schema`        | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)            |

### `removeRuleAction`[​](#removeruleaction "Direct link to removeruleaction")

Removes the current rule from its parent group's `rules` array. Defaults to [`ActionElement`](/docs/components/actionelement.md).

Props for `removeRuleAction`

Per the `ActionProps` interface:

| Prop            | Type                            | Description                                                  |
| --------------- | ------------------------------- | ------------------------------------------------------------ |
| `label`         | `ReactNode`                     | `translations.removeRule.label`, e.g. "⨯"                    |
| `title`         | `string`                        | `translations.removeRule.title`, e.g. "Remove rule"          |
| `className`     | `string`                        | CSS `classNames` to be applied                               |
| `handleOnClick` | `(e: React.MouseEvent) => void` | Removes the rule                                             |
| `ruleOrGroup`   | `RuleType`                      | This rule                                                    |
| `level`         | `number`                        | The `level` of this rule                                     |
| `context`       | `any`                           | Container for custom props that are passed to all components |
| `validation`    | `boolean \| ValidationResult`   | Validation result of this rule                               |
| `disabled`      | `boolean`                       | Whether this rule is disabled/locked                         |
| `path`          | `Path`                          | [Path](/docs/tips/path.md) of this rule                      |
| `schema`        | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)            |

### `rule`[​](#rule "Direct link to rule")

Rule layout component. Defaults to [`Rule`](/docs/components/rule.md).

Props for `rule`

Per the `RuleProps` interface:

| Prop                | Type           | Description                                                  |
| ------------------- | -------------- | ------------------------------------------------------------ |
| `id`                | `string`       | Unique identifier for this rule                              |
| `path`              | `Path`         | [Path](/docs/tips/path.md) of this rule                      |
| `rule`              | `RuleType`     | The rule object                                              |
| `translations`      | `Translations` | The default translations merged with the `translations` prop |
| `schema`            | `Schema`       | Query [schema](/docs/typescript.md#miscellaneous)            |
| `actions`           | `QueryActions` | Query [update functions](/docs/typescript.md#miscellaneous)  |
| `context`           | `any`          | Container for custom props that are passed to all components |
| `disabled`          | `boolean`      | Whether the rule itself is disabled                          |
| `shiftUpDisabled`   | `boolean`      | Whether shifting the rule up is disallowed                   |
| `shiftDownDisabled` | `boolean`      | Whether shifting the rule down is disallowed                 |
| `parentDisabled`    | `boolean`      | Whether the parent group of this rule is disabled            |

tip

When using a custom `Rule` component with [drag-and-drop enabled](/docs/components/querybuilder.md#enabledraganddrop), set the `controlElements` prop on the `QueryBuilderDnD` context provider instead of `QueryBuilder`.

### `ruleGroup`[​](#rulegroup "Direct link to rulegroup")

Rule group layout component. Defaults to [`RuleGroup`](/docs/components/rulegroup.md).

Props for `ruleGroup`

Per the `RuleGroupProps` interface:

| Prop                | Type               | Description                                                  |
| ------------------- | ------------------ | ------------------------------------------------------------ |
| `id`                | `string`           | Unique identifier for this group                             |
| `path`              | `Path`             | [Path](/docs/tips/path.md) of this group                     |
| `ruleGroup`         | `RuleGroupTypeAny` | The group object                                             |
| `translations`      | `Translations`     | The default translations merged with the `translations` prop |
| `schema`            | `Schema`           | Query [schema](/docs/typescript.md#miscellaneous)            |
| `actions`           | `QueryActions`     | Query [update functions](/docs/typescript.md#miscellaneous)  |
| `context`           | `any`              | Container for custom props that are passed to all components |
| `disabled`          | `boolean`          | Whether the group itself is disabled                         |
| `shiftUpDisabled`   | `boolean`          | Whether shifting the group up is disallowed                  |
| `shiftDownDisabled` | `boolean`          | Whether shifting the group down is disallowed                |
| `parentDisabled`    | `boolean`          | Whether the parent group of this group is disabled           |

tip

When using a custom `RuleGroup` component with [drag-and-drop enabled](/docs/components/querybuilder.md#enabledraganddrop), set the `controlElements` prop on the `QueryBuilderDnD` context provider instead of `QueryBuilder`.

### `ruleGroupBodyElements`[​](#rulegroupbodyelements "Direct link to rulegroupbodyelements")

Rule group body elements. Defaults to [`RuleGroupBodyComponents`](/docs/components/rulegroup.md#rulegroupbodycomponents), which returns an array containing only the elements (no HTML or React Native wrapper). Receives the same props as [`ruleGroup`](#rulegroup) plus the return value of the [`useRuleGroup`](/docs/utils/hooks.md#userulegroup) hook.

### `ruleGroupHeaderElements`[​](#rulegroupheaderelements "Direct link to rulegroupheaderelements")

Rule group header elements. Defaults to [`RuleGroupHeaderComponents`](/docs/components/rulegroup.md#rulegroupheadercomponents), which returns a React `Fragment` containing only the elements (no HTML or React Native wrapper). Receives the same props as [`ruleGroup`](#rulegroup) plus the return value of the [`useRuleGroup`](/docs/utils/hooks.md#userulegroup) hook.

### `shiftActions`[​](#shiftactions "Direct link to shiftactions")

Shifts the current rule/group up or down in the query hierarchy. Defaults to [`ShiftActions`](/docs/components/shiftactions.md).

Props for `shiftActions`

Per the `ShiftActionsProps` interface:

| Prop                | Type                                            | Description                                                                                                   |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `labels`            | `{ shiftUp: ReactNode; shiftDown: ReactNode; }` | `translations.shiftActionUp.label` and `translations.shiftActionDown.label`, e.g. "˄" and "˅"                 |
| `titles`            | `{ shiftUp: string; shiftDown: string; }`       | `translations.shiftActionUp.title` and `translations.shiftActionDown.title`, e.g. "Shift up" and "Shift down" |
| `className`         | `string`                                        | CSS `classNames` to be applied                                                                                |
| `ruleOrGroup`       | `RuleGroupTypeAny`                              | This rule/group                                                                                               |
| `level`             | `number`                                        | The `level` of this rule/group                                                                                |
| `context`           | `any`                                           | Container for custom props that are passed to all components                                                  |
| `validation`        | `boolean \| ValidationResult`                   | Validation result of this rule/group                                                                          |
| `disabled`          | `boolean`                                       | Whether this rule/group is disabled/locked                                                                    |
| `path`              | `Path`                                          | [Path](/docs/tips/path.md) of this rule/group                                                                 |
| `schema`            | `Schema`                                        | Query [schema](/docs/typescript.md#miscellaneous)                                                             |
| `shiftUp`           | `() => void`                                    | Method to shift the rule/group up one place                                                                   |
| `shiftDown`         | `() => void`                                    | Method to shift the rule/group down one place                                                                 |
| `shiftUpDisabled`   | `boolean`                                       | Whether shifting the rule/group up is disallowed                                                              |
| `shiftDownDisabled` | `boolean`                                       | Whether shifting the rule/group down is disallowed                                                            |

### `valueEditor`[​](#valueeditor "Direct link to valueeditor")

Updates the `value` property for the current rule. Defaults to [`ValueEditor`](/docs/components/valueeditor.md).

Props for `valueEditor`

Per the `ValueEditorProps` interface:

| Prop             | Type                          | Description                                                             |
| ---------------- | ----------------------------- | ----------------------------------------------------------------------- |
| `field`          | `string`                      | Field `name` corresponding to this rule                                 |
| `fieldData`      | `Field`                       | The entire object from the fields array for this field                  |
| `operator`       | `string`                      | Operator `name` corresponding to this rule                              |
| `value`          | `string`                      | `value` from the existing query representation, if any                  |
| `title`          | `string`                      | `translations.value.title`, e.g. "Value"                                |
| `handleOnChange` | `(value: any) => void`        | Updates the rule's `value`                                              |
| `type`           | `ValueEditorType`             | Type of editor to be displayed                                          |
| `inputType`      | `string`                      | Intended `@type` attribute of the `<input>`, if `type` prop is "text"   |
| `values`         | `any[]`                       | List of available values for this rule                                  |
| `className`      | `string`                      | CSS `classNames` to be applied                                          |
| `valueSource`    | `ValueSource`                 | Value source for this rule                                              |
| `listsAsArrays`  | `boolean`                     | Whether to manage value lists (i.e. "between"/"in" operators) as arrays |
| `parseNumbers`   | `ParseNumberMethod`           | Whether to parse real numbers from strings                              |
| `separator`      | `ReactNode`                   | Separator element for series of editors (i.e. "between" operator)       |
| `level`          | `number`                      | The `level` of this rule                                                |
| `context`        | `any`                         | Container for custom props that are passed to all components            |
| `validation`     | `boolean \| ValidationResult` | Validation result of this rule                                          |
| `disabled`       | `boolean`                     | Whether this rule is disabled/locked                                    |
| `path`           | `Path`                        | [Path](/docs/tips/path.md) of this rule                                 |
| `schema`         | `Schema`                      | Query [schema](/docs/typescript.md#miscellaneous)                       |
| `rule`           | `RuleType`                    | This rule                                                               |

### `valueSelector`[​](#valueselector "Direct link to valueselector")

The base component for all value selector controls. Defaults to [`ValueSelector`](/docs/components/valueselector.md). Receives props per various interfaces depending on the specific control type:

* [`combinatorSelector`](#combinatorselector)
* [`fieldSelector`](#fieldselector)
* [`operatorSelector`](#operatorselector)
* [`valueSourceSelector`](#valuesourceselector)

For example, this:

```
<QueryBuilder controlElements={{ valueSelector: MyAwesomeSelector }} />
```

...is equivalent to this:

```
<QueryBuilder

  controlElements={{

    combinatorSelector: MyAwesomeSelector

    fieldSelector: MyAwesomeSelector

    operatorSelector: MyAwesomeSelector

    valueSourceSelector: MyAwesomeSelector

  }}

/>
```

### `valueSourceSelector`[​](#valuesourceselector "Direct link to valuesourceselector")

Selects the `valueSource` property for the current rule. Defaults to [`ValueSelector`](/docs/components/valueselector.md).

Props for `valueSourceSelector`

Per the `ValueSourceSelectorProps` interface:

| Prop             | Type                            | Description                                                       |
| ---------------- | ------------------------------- | ----------------------------------------------------------------- |
| `field`          | `string`                        | Field `name` corresponding to this rule                           |
| `fieldData`      | `Field`                         | The entire object from the `fields` array for the selected field  |
| `options`        | `OptionList<ValueSourceOption>` | Return value of `getValueSources(field, operator, { fieldData })` |
| `value`          | `ValueSource`                   | Selected value source for this rule, if any                       |
| `title`          | `string`                        | `translations.valueSourceSelector.title`, e.g. "Value source"     |
| `className`      | `string`                        | CSS `classNames` to be applied                                    |
| `handleOnChange` | `(value: any) => void`          | Updates the rule's `valueSource`                                  |
| `level`          | `number`                        | The `level` of this rule                                          |
| `context`        | `any`                           | Container for custom props that are passed to all components      |
| `validation`     | `boolean \| ValidationResult`   | Validation result of this rule                                    |
| `disabled`       | `boolean`                       | Whether this rule is disabled/locked                              |
| `path`           | `Path`                          | [Path](/docs/tips/path.md) of this rule                           |
| `schema`         | `Schema`                        | Query [schema](/docs/typescript.md#miscellaneous)                 |
| `rule`           | `RuleType`                      | This rule                                                         |
