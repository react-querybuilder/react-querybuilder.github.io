# MatchModeEditor

Renders the configured `valueSelector` for match mode selection. When applicable, also renders the configured `valueEditor` for threshold input.

Override the mode selector using the `selectorComponent` prop or the threshold editor using the `numericEditorComponent` prop.

## Threshold placeholder[​](#threshold-placeholder "Direct link to Threshold placeholder")

The placeholder text for the threshold input (displayed when the match mode is `atLeast`, `atMost`, or `exactly`) defaults to `"#"`. Customize it with the `matchThreshold` translation:

```
<QueryBuilder

  translations={{ matchThreshold: { placeholderName: '0' } }}

  // ...

/>
```
