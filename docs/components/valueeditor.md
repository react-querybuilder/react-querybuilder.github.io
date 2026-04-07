# ValueEditor

> *Refer to the [TypeScript reference](/docs/typescript.md) page for information about the types and interfaces referenced below.*

`ValueEditor` renders an `<input>` by default, or a `<select>` (via [`ValueSelector`](/docs/components/valueselector.md)) for list-based values. It uses the [`useValueEditor`](/docs/utils/hooks.md#usevalueeditor) hook to process values and manage list functionality.

note

React Query Builder doesn't restrict rule `value` properties to JavaScript primitives but maintains query object serializability. Editors that generate non-serializable values (like date pickers) store them as strings, then parse them back to the required types during rendering. Multiple-value editors (for "between" or "in" operators) typically use comma-separated strings.

## Showcase[​](#showcase "Direct link to Showcase")

`ValueEditor` is the most commonly [customized component](/docs/components/querybuilder-controlelements.md#valueeditor) ([more information here](/docs/tips/custom-with-fallback.md)), yet it handles many scenarios out of the box. The query builder below demonstrates all supported [`Field#valueEditorType` and `Field#inputType` properties](/docs/typescript.md#fields).

Rules 10 and 11 demonstrate the behavior when the `operator` is "between". Rule 12 demonstrates the behavior when a field's `valueSources` property is set to `["field", "value"]`.

note

This query builder has been specially configured:

1. The rule index (plus one) in the `rules` array is displayed to the left of the field selector.
2. The value stored in the rule object is displayed to the right of each value editor.
3. To focus attention on value editor components, all other components have been disabled or hidden.

<!-- -->

<!-- -->

\[ ]`listsAsArrays`

1\. inputType: "text" (text)=

 (stored value: "")

2\. valueEditorType: "select" (select)=

Option 2 (option2) (stored value: "option2")

3\. valueEditorType: "checkbox" (checkbox)=

\[x] (stored value: true)

4\. valueEditorType: "radio" (radio)=

\[ ]Option 1\[x]Option 2\[ ]Option 3\[ ]Option 4 (stored value: "option2")

5\. valueEditorType: "textarea" (textarea)=

 (stored value: "")

6\. valueEditorType: "multiselect" (multiselect)in

Option 1 (option1), Option 2 (option2) (stored value: "option1,option2")

7\. inputType: "date" (date)=

 (stored value: "")

8\. inputType: "datetime-local" (datetime-local)=

 (stored value: "")

9\. inputType: "time" (time)=

 (stored value: "")

10\. inputType: "text" (text)between

AZ (stored value: "A,Z")

11\. valueEditorType: "select" (select)between

Option 2 (option2)Option 4 (option4) (stored value: "option2,option4")

12\. valueSource: "field" (field)=field

text (stored value: "text")

tip

The [compatibility packages](/docs/compat.md) also implement these options using appropriate components from their respective style libraries ([see the demo](/demo)).

## Value sources[​](#value-sources "Direct link to Value sources")

By default, React Query Builder facilitates comparing fields (typically database column names) to *values* (strings, numbers, etc.). However, some situations require comparisons between two fields. Consider this SQL statement:

```
SELECT *

  FROM users

 WHERE lastName LIKE firstName || '%';
```

This returns records where the user's last name begins with the same letters as their first name and ends with any number of other characters (including zero). "Kris Kristofferson" would meet this criteria.

To represent that `WHERE` clause in React Query Builder, use the [`getValueSources` prop](/docs/components/querybuilder.md#getvaluesources) or the `valueSources` property of the `lastName` field in the `fields` prop. When either evaluates to an array containing "field" and the rule's `valueSource` property is "field", the `<ValueEditor />` component displays a dropdown list of fields instead of values.

### Example[​](#example "Direct link to Example")

In the query builder above, the definition for the field used in the last rule is:

```
{

  "name": "field",

  "label": "field",

  "valueSources": ["field", "value"]

}
```

The `defaultQuery` prop looks like this:

```
{

  "combinator": "and",

  "rules": [

    // ...other rules...

    { "field": "field", "operator": "=", "value": "text", "valueSource": "field" }

  ]

}
```

Since the field's `valueSources` property is an array with more than one element, a ["value source selector" component](/docs/components/querybuilder-controlelements.md#valuesourceselector) appears to the left of the `<ValueEditor />`.

tip

To reorder rule components (e.g., move the value source selector to the right of the value editor), use the CSS Flexbox `order` property.

note

The `Field#valueSources` property can also be a function that takes an operator name as its parameter and returns the required array.

### Filtering the field list[​](#filtering-the-field-list "Direct link to Filtering the field list")

Not all fields are compatible with each other, so each field may provide a `comparator` property specifying which fields appear in the value editor list. When `comparator` is a string, only fields with the same value as the current field in the property matching the `comparator` string are listed.

Here's an example. In the following field list, fields `f1`, `f2`, and `f3` share a common property `datatype: "number"`. `f1` identifies the `datatype` property as its `comparator`. When a rule specifies field `f1`, only `f2` and `f3` appear in the dropdown list because their `datatype` property matches `f1`'s. `f4` and `f5` are excluded because their `datatype` property doesn't match `f1`'s, and `f1` is excluded because a rule's selected field cannot be compared with itself.

```
const fields: Field[] = {

  {

    name: 'f1',

    label: 'f1',

    valueSources: ["field"],

    comparator: 'datatype',

    datatype: 'number'

  },

  { name: 'f2', label: 'f2', datatype: 'number' },

  { name: 'f3', label: 'f3', datatype: 'number' },

  { name: 'f4', label: 'f4', datatype: 'string' },

  { name: 'f5', label: 'f5', datatype: 'string' },

}
```

The `comparator` property can also be a function that takes a `Field` object as its parameter. Each field in the `fields` prop is evaluated by this function, which should return `true` to include the field in the list or `false` to exclude it. The equivalent configuration using a function for `comparator`:

```
const fields: Field[] = {

  { name: 'f1',

    label: 'f1',

    valueSources: ["field"],

    comparator: f => f.datatype === 'number'

  },

  { name: 'f2', label: 'f2', datatype: 'number' },

  { name: 'f3', label: 'f3', datatype: 'number' },

  { name: 'f4', label: 'f4', datatype: 'string' },

  { name: 'f5', label: 'f5', datatype: 'string' },

}
```
