# UndoRedoActions

Renders a `<div>` containing two buttons—"undo" and "redo"—in the header of the outermost group when [`showUndoRedo`](/docs/components/querybuilder.md#showundoredo) is `true`.

The buttons themselves are rendered with the [`actionElement`](/docs/components/querybuilder-controlelements.md#actionelement) control element, so they inherit the same styling and behavior as every other action button, including replacements provided by the [compatibility packages](/docs/compat.md).

info

You generally won't import or configure this component directly—rendering `QueryBuilderHistory` supplies it automatically, and defaults descendant query builders' `showUndoRedo` prop to `true`:

```
import { QueryBuilder } from 'react-querybuilder';

import { QueryBuilderHistory } from 'react-querybuilder/history';



<QueryBuilderHistory>

  <QueryBuilder fields={fields} />

</QueryBuilderHistory>;
```

Pass `showUndoRedo={false}` to a `QueryBuilder` (or to `QueryBuilderHistory` itself) to opt a query builder tree back out while still recording history.

See [Undo/redo](/docs/tips/undo-redo.md) for the full guide.

To use it without `QueryBuilderHistory`, assign it to the [`undoRedoActions`](/docs/components/querybuilder-controlelements.md#undoredoactions) control element yourself. It registers its own history recording, so no provider is required. The buttons still occupy the same slot in the outermost group's header:

```
import { UndoRedoActions } from 'react-querybuilder/history';



<QueryBuilder

  fields={fields}

  showUndoRedo

  controlElements={{ undoRedoActions: UndoRedoActions }}

/>;
```

To place undo/redo controls anywhere else—a toolbar above the query builder, for example—build your own with the [`useQueryBuilderHistory`](/docs/tips/undo-redo.md#usequerybuilderhistory) hook instead.

## Behavior[​](#behavior "Direct link to Behavior")

* The "undo" button is disabled when there is nothing to undo, and likewise for "redo".
* Both buttons are disabled when the query builder is [`disabled`](/docs/components/querybuilder.md#disabled).
* Rendering this component is what opts its query builder in to history recording, since it calls [`useQueryBuilderHistory`](/docs/tips/undo-redo.md#usequerybuilderhistory) with the query builder's `qbId`. A query builder that never renders undo/redo controls (and never uses the hook) retains no history.

## Labels and titles[​](#labels-and-titles "Direct link to Labels and titles")

Configure the button text and tooltips with the [`translations`](/docs/components/querybuilder.md#translations) prop:

```
<QueryBuilder

  showUndoRedo

  translations={{

    undo: { label: 'Undo', title: 'Undo the last change' },

    redo: { label: 'Redo', title: 'Redo the last undone change' },

  }}

/>
```

The default labels are `"↶"` (U+21B6) and `"↷"` (U+21B7). These glyphs do not mirror automatically in right-to-left layouts, so swap them in your translations if appropriate.

## Classnames[​](#classnames "Direct link to Classnames")

| Classname               | Applied to            |
| ----------------------- | --------------------- |
| `.undoRedoActions`      | The container `<div>` |
| `.undoRedoActions-undo` | The "undo" button     |
| `.undoRedoActions-redo` | The "redo" button     |

Each button also receives the `controlClassnames.actionElement` classname, like every other action button.
