# Limit rule groups

Some implementations require a flat, rule-only structure, or need to restrict group creation to specific conditions (such as limiting depth to one level). Several approaches can address these requirements.

## Prevent creation of new groups[​](#prevent-creation-of-new-groups "Direct link to Prevent creation of new groups")

The simplest approach is hiding the "+ Group" button entirely. Set the `addGroupAction` component to `null` (or `() => null`) to prevent group creation:

```
<QueryBuilder
  fields={fields}
  query={query}
  onQueryChange={setQuery}
  controlElements={{
    addGroupAction: null,
  }}
/>
```

Alternatively, hide the button using CSS with the default `ruleGroup-addGroup` class:

```
.ruleGroup-addGroup {
  display: none;
}
```

Both approaches produce this result:

https\://example.com

AND (and)+ Rule

## Conditionally allow new groups[​](#conditionally-allow-new-groups "Direct link to Conditionally allow new groups")

To allow groups only at the top level (hiding the button in sub-groups), conditionally render the `ActionElement` based on the `level` prop:

```
<QueryBuilder
  fields={fields}
  query={query}
  onQueryChange={setQuery}
  controlElements={{
    addGroupAction: props => (props.level === 0 ? <ActionElement {...props} /> : null),
  }}
/>
```

The CSS equivalent uses descendant selectors:

```
.ruleGroup .ruleGroup .ruleGroup-addGroup {
  display: none;
}
```

Both methods produce this result:

https\://example.com

AND (and)+ Rule+ Group

AND (and)+ Rule⨯

AND (and)+ Rule⨯

## Other methods[​](#other-methods "Direct link to Other methods")

You can also prevent group addition by returning `false` from the `onAddGroup` callback.

caution

This approach alone may confuse users since the "+ Group" button appears clickable but produces no result. Consider combining this method with user interface cues or messaging to clarify the behavior.

```
<QueryBuilder
  fields={fields}
  query={query}
  onQueryChange={setQuery}
  onAddGroup={() => false}
/>
```
