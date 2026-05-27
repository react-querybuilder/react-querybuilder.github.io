# Drag-and-drop

The [`@react-querybuilder/dnd`](https://www.npmjs.com/package/@react-querybuilder/dnd) package augments React Query Builder with drag-and-drop functionality. [Click here for demo](/demo#enableDragAndDrop=true).

## Usage[​](#usage "Direct link to Usage")

To enable drag-and-drop on a query builder, render the `QueryBuilderDnD` context provider higher in the component tree than `QueryBuilder`.

The `@react-querybuilder/dnd` package supports multiple drag-and-drop libraries through an **adapter** pattern. Each adapter is available as a separate subpath import (e.g., `@react-querybuilder/dnd/react-dnd`), so only the adapter you use—and its corresponding library—needs to be installed.

> ***Note:** The [`enableDragAndDrop`](/docs/components/querybuilder.md#enabledraganddrop) prop doesn't need to be set directly on the [`QueryBuilder`](/docs/components/querybuilder.md) component unless it's explicitly `false` to override the implicit `true` value set by `QueryBuilderDnD`.*

When the `enableDragAndDrop` prop is `true`, a [drag handle](/docs/components/draghandle.md) appears on the left side of each rule and group header. Clicking and dragging the handle element allows users to visually reorder rules and groups.

### Using the `@atlaskit/pragmatic-drag-and-drop` adapter[​](#using-the-atlaskitpragmatic-drag-and-drop-adapter "Direct link to using-the-atlaskitpragmatic-drag-and-drop-adapter")

Install [`@atlaskit/pragmatic-drag-and-drop`](https://www.npmjs.com/package/@atlaskit/pragmatic-drag-and-drop), then create an adapter with `createPragmaticDndAdapter`:

* npm
* Bun
* Yarn
* pnpm

```
npm i react-querybuilder @react-querybuilder/dnd @atlaskit/pragmatic-drag-and-drop
```

```
bun add react-querybuilder @react-querybuilder/dnd @atlaskit/pragmatic-drag-and-drop
```

```
yarn add react-querybuilder @react-querybuilder/dnd @atlaskit/pragmatic-drag-and-drop
```

```
pnpm add react-querybuilder @react-querybuilder/dnd @atlaskit/pragmatic-drag-and-drop
```

```
import { QueryBuilderDnD } from '@react-querybuilder/dnd';

import { createPragmaticDndAdapter } from '@react-querybuilder/dnd/pragmatic-dnd';

import {

  draggable,

  dropTargetForElements,

  monitorForElements,

} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';

import { QueryBuilder } from 'react-querybuilder';



const pragmaticDndAdapter = createPragmaticDndAdapter({

  draggable,

  dropTargetForElements,

  monitorForElements,

  combine,

});



const App = () => (

  <QueryBuilderDnD dnd={pragmaticDndAdapter}>

    <QueryBuilder />

  </QueryBuilderDnD>

);
```

Pragmatic drag and drop uses the native HTML5 drag-and-drop API under the hood, so it has zero runtime overhead when not dragging. Unlike `react-dnd`, it does not require a separate backend package.

### Using the `@dnd-kit` adapter[​](#using-the-dnd-kit-adapter "Direct link to using-the-dnd-kit-adapter")

Install [`@dnd-kit/core`](https://www.npmjs.com/package/@dnd-kit/core), then create an adapter with `createDndKitAdapter`:

* npm
* Bun
* Yarn
* pnpm

```
npm i react-querybuilder @react-querybuilder/dnd @dnd-kit/core
```

```
bun add react-querybuilder @react-querybuilder/dnd @dnd-kit/core
```

```
yarn add react-querybuilder @react-querybuilder/dnd @dnd-kit/core
```

```
pnpm add react-querybuilder @react-querybuilder/dnd @dnd-kit/core
```

```
import { QueryBuilderDnD } from '@react-querybuilder/dnd';

import { createDndKitAdapter } from '@react-querybuilder/dnd/dnd-kit';

import * as DndKit from '@dnd-kit/core';

import { QueryBuilder } from 'react-querybuilder';



const dndKitAdapter = createDndKitAdapter(DndKit);



const App = () => (

  <QueryBuilderDnD dnd={dndKitAdapter}>

    <QueryBuilder />

  </QueryBuilderDnD>

);
```

The dnd-kit adapter uses `PointerSensor` and `KeyboardSensor` by default, with a 5px activation distance to prevent accidental drags. ARIA attributes are automatically applied to drag handles for accessibility.

### Using the `react-dnd` adapter[​](#using-the-react-dnd-adapter "Direct link to using-the-react-dnd-adapter")

Install [`react-dnd`](https://www.npmjs.com/package/react-dnd) and either [`react-dnd-html5-backend`](https://www.npmjs.com/package/react-dnd-html5-backend) or [`react-dnd-touch-backend`](https://www.npmjs.com/package/react-dnd-touch-backend) (or both), then create an adapter with `createReactDnDAdapter`:

* npm
* Bun
* Yarn
* pnpm

```
npm i react-querybuilder @react-querybuilder/dnd react-dnd react-dnd-html5-backend react-dnd-touch-backend
```

```
bun add react-querybuilder @react-querybuilder/dnd react-dnd react-dnd-html5-backend react-dnd-touch-backend
```

```
yarn add react-querybuilder @react-querybuilder/dnd react-dnd react-dnd-html5-backend react-dnd-touch-backend
```

```
pnpm add react-querybuilder @react-querybuilder/dnd react-dnd react-dnd-html5-backend react-dnd-touch-backend
```

```
import { QueryBuilderDnD } from '@react-querybuilder/dnd';

import { createReactDnDAdapter } from '@react-querybuilder/dnd/react-dnd';

import * as ReactDnD from 'react-dnd';

import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';

import * as ReactDndTouchBackend from 'react-dnd-touch-backend';

import { QueryBuilder } from 'react-querybuilder';



const reactDnDAdapter = createReactDnDAdapter({

  ...ReactDnD,

  ...ReactDndHtml5Backend,

  ...ReactDndTouchBackend,

});



const App = () => (

  <QueryBuilderDnD dnd={reactDnDAdapter}>

    <QueryBuilder />

  </QueryBuilderDnD>

);
```

Legacy API

For backward compatibility, you can still pass the raw `react-dnd` exports directly. They will be automatically wrapped in an adapter:

```
<QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend, ...ReactDndTouchBackend }}>

  <QueryBuilder />

</QueryBuilderDnD>
```

### Zero-config (auto-loading)[​](#zero-config-auto-loading "Direct link to Zero-config (auto-loading)")

If you omit the `dnd` prop, `QueryBuilderDnD` will asynchronously attempt to load `react-dnd`, `react-dnd-html5-backend`, and `react-dnd-touch-backend`. Drag-and-drop features are only enabled once those packages have loaded. This approach is convenient but provides less control over loading behavior.

## Styling[​](#styling "Direct link to Styling")

The default stylesheet applies special styles during drag-and-drop operations to help anticipate the result of the impending drop. For more information, see [Styling overview § Drag-and-drop](/docs/styling/overview.md#drag-and-drop).

## Cloning and grouping[​](#cloning-and-grouping "Direct link to Cloning and grouping")

By default, a successful drag-and-drop action moves a rule or group to a new location within the query builder, but there are three alternative behaviors:

* **Clone**: Hold down the `Alt` key (`⌥ Option` on macOS) before and during the drag to clone the dragged rule/group instead of moving it. The original object remains in place and the clone is inserted at the drop location.
* **Group**: Hold down the `Ctrl` key before and during the drag to create a new group at the drop location. The new group's `rules` array contains the rule or group originally at the drop location and the dragged rule/group, in that order. (This operation is similar to how new folders are created on iOS by dragging one app icon on top of another.)
* **Clone into group**: Hold down the `Alt`/`⌥ Option` *and* `Ctrl` keys before and during the drag to create a new group at the drop location and clone the dragged rule/group into the new group instead of moving it.

The keys that determine alternate behaviors are configurable. See [`copyModeModifierKey`](#copymodemodifierkey) and [`groupModeModifierKey`](#groupmodemodifierkey).

As a keyboard-free alternative, you can configure timer-based activation with [`copyModeAfterHoverMs`](#copymodeafterhoverms) and [`groupModeAfterHoverMs`](#groupmodeafterhoverms). When set, hovering over a drop target for the specified duration automatically activates copy or group mode. Both methods are additive — modifier keys still work alongside timers.

## Existing drag-and-drop contexts[​](#existing-drag-and-drop-contexts "Direct link to Existing drag-and-drop contexts")

If your application already uses [`react-dnd`](https://react-dnd.github.io/react-dnd/), use `QueryBuilderDndWithoutProvider` instead of `QueryBuilderDnD`. They are functionally equivalent, but the former assumes a `<DndProvider />` already exists higher in the component tree. The latter renders its own `DndProvider` which conflicts with any pre-existing ones. (If you use the wrong component, you'll probably see the error message "Cannot have two HTML5 backends at the same time" in the console.)

## Custom adapters[​](#custom-adapters "Direct link to Custom adapters")

You can create a custom adapter for any drag-and-drop library by implementing the `DndAdapter` interface:

```
import type { DndAdapter } from '@react-querybuilder/dnd';



const myAdapter: DndAdapter = {

  // Context provider wrapping the query builder tree

  DndProvider: ({ debugMode, children }) => <MyDndContext>{children}</MyDndContext>,



  // Hook providing drag-and-drop behavior for rule components

  useRuleDnD: params => {

    // Implement using your DnD library's primitives

    // Must return: isDragging, dragMonitorId, isOver, dropMonitorId, dragRef, dndRef, dropEffect?, groupItems?, dropNotAllowed?

  },



  // Hook providing drag-and-drop behavior for rule group components

  useRuleGroupDnD: params => {

    // Must return: isDragging, dragMonitorId, isOver, dropMonitorId, previewRef, dragRef, dropRef, dropEffect?, groupItems?, dropNotAllowed?

  },



  // Hook providing drop-target behavior for inline combinators

  useInlineCombinatorDnD: params => {

    // Must return: isOver, dropMonitorId, dropRef, dropEffect?, groupItems?, dropNotAllowed?

  },

};
```

The shared logic functions `canDropOnRule`, `canDropOnRuleGroup`, `canDropOnInlineCombinator`, `buildDropResult`, and `handleDrop` are exported from `@react-querybuilder/dnd` and can be used in custom adapter implementations to ensure consistent drop validation and behavior.

## Props[​](#props "Direct link to Props")

The following props are accepted on the `QueryBuilderDnD` and `QueryBuilderDndWithoutProvider` components.

### `dnd`[​](#dnd "Direct link to dnd")

`DndAdapter | DndProp`

A `DndAdapter` (such as from `createReactDnDAdapter()`, `createDndKitAdapter()`, or `createPragmaticDndAdapter()`) or the raw `react-dnd` namespace exports (legacy API). When raw `react-dnd` exports are provided, they are automatically wrapped in a `react-dnd` adapter.

If omitted, the component asynchronously loads `react-dnd`, `react-dnd-html5-backend`, and `react-dnd-touch-backend`. Drag-and-drop features are only enabled once those packages have loaded.

When both backends are provided, the touch backend is preferred when a touch device is detected.

### `canDrop`[​](#candrop "Direct link to candrop")

`(params: { dragging: RuleGroupTypeAny, hovering: RuleGroupTypeAny, groupItems?: boolean }) => boolean`

This function determines whether a "drop" at the current hover location is valid during a drag operation. The `dragging` and `hovering` properties represent the dragged rule/group and the currently hovered rule/group, respectively. Each property includes the object's original `path` and `qbId`. `groupItems` is `true` if the [`groupModeModifierKey`](#groupmodemodifierkey) is currently pressed.

### `copyModeModifierKey`[​](#copymodemodifierkey "Direct link to copymodemodifierkey")

`string`

Key code for the modifier key that puts a drag-and-drop action in ["copy" mode](#cloning-and-grouping). Default is `"alt"` (`Alt` on Windows and Linux, `⌥ Option` on macOS).

### `copyModeAfterHoverMs`[​](#copymodeafterhoverms "Direct link to copymodeafterhoverms")

`number | undefined`

Milliseconds after hovering a drop target before the drop effect automatically switches to ["copy" mode](#cloning-and-grouping). This provides a keyboard-free alternative to holding the [`copyModeModifierKey`](#copymodemodifierkey) — both methods are additive, so either one activates copy mode. The timer resets when the drag moves to a different target. Set to `undefined` or `0` to disable (default).

Supported by the `@atlaskit/pragmatic-drag-and-drop` and `@dnd-kit/core` adapters. The `react-dnd` adapter ignores this prop.

### `groupModeModifierKey`[​](#groupmodemodifierkey "Direct link to groupmodemodifierkey")

`string`

Key code for the modifier key that puts a drag-and-drop action in ["group" mode](#cloning-and-grouping). Default is `"ctrl"` (`Ctrl`).

### `groupModeAfterHoverMs`[​](#groupmodeafterhoverms "Direct link to groupmodeafterhoverms")

`number | undefined`

Milliseconds after hovering a drop target before the drop will automatically create a new group (["group" mode](#cloning-and-grouping)). This provides a keyboard-free alternative to holding the [`groupModeModifierKey`](#groupmodemodifierkey) — both methods are additive, so either one activates group mode. The timer resets when the drag moves to a different target. Set to `undefined` or `0` to disable (default).

Supported by the `@atlaskit/pragmatic-drag-and-drop` and `@dnd-kit/core` adapters. The `react-dnd` adapter ignores this prop.

### `hideDefaultDragPreview`[​](#hidedefaultdragpreview "Direct link to hidedefaultdragpreview")

`boolean`

When `true`, disables the default browser drag preview during drag operations. This is useful when implementing custom drag layers or custom drag preview components ([see relevant React DnD documentation](https://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer)). Default is `false`.

### `updateWhileDragging`[​](#updatewhiledragging "Direct link to updatewhiledragging")

`boolean`

When `true`, the query tree visually rearranges in real-time as the user drags rules and groups, providing immediate spatial feedback instead of showing a drop indicator line. The actual `onQueryChange` callback only fires once when the item is dropped — intermediate positions are purely visual. If the drag is cancelled (e.g., by releasing outside a valid target), the query reverts to its original state.

Currently supported by the `@atlaskit/pragmatic-drag-and-drop` and `@dnd-kit/core` adapters. The `react-dnd` adapter ignores this prop and falls back to the standard drop-indicator behavior.

When this feature is active:

* Rules and groups slide into their preview positions during drag
* The standard "drop indicator" line (`dndOver` class) is suppressed
* Inline combinator drop targets are disabled (quadrant detection on rules is used instead)
* Hovering in the upper half of a rule inserts the dragged item before it; the lower half inserts after

Default is `false`.

```
<QueryBuilderDnD dnd={pragmaticDndAdapter} updateWhileDragging>

  <QueryBuilder />

</QueryBuilderDnD>
```

### `onDragMove`[​](#ondragmove "Direct link to ondragmove")

`(params: { draggedItem, shadowQuery, originalQuery, previewPath }) => void`

Callback invoked on each drag position change when [`updateWhileDragging`](#updatewhiledragging) is `true`. Receives the current shadow query (the preview query with the dragged item at its prospective position), the original query, and the preview path.

### `onRuleDrop`[​](#onruledrop "Direct link to onruledrop")

`(info: RuleDropInfo) => void`

Callback invoked after a drag-and-drop operation completes (both same-builder and cross-builder). The `info` parameter contains:

| Property         | Type                           | Description                                       |
| ---------------- | ------------------------------ | ------------------------------------------------- |
| `draggedItem`    | `RuleType \| RuleGroupTypeAny` | The dragged rule or group                         |
| `sourceQbId`     | `string`                       | The `qbId` of the source query builder            |
| `targetQbId`     | `string`                       | The `qbId` of the target query builder            |
| `sourcePath`     | `Path`                         | Path of the item before the drop                  |
| `targetPath`     | `Path`                         | Path where the item was inserted                  |
| `dropEffect`     | `'move' \| 'copy'`             | Whether the item was moved or copied              |
| `groupItems`     | `boolean`                      | Whether a new group was created around the target |
| `isCrossBuilder` | `boolean`                      | Whether the drop crossed query builder boundaries |

```
<QueryBuilderDnD

  dnd={pragmaticDndAdapter}

  onRuleDrop={info => {

    console.log(

      `Rule ${info.isCrossBuilder ? 'transferred' : 'moved'} ` +

        `from ${info.sourcePath} to ${info.targetPath}`

    );

  }}>

  <QueryBuilder />

</QueryBuilderDnD>
```
