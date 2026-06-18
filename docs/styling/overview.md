# Styling overview

React Query Builder has a [flexible structure with specific classes](/docs/styling/classnames.md) assigned to each element in the component hierarchy, enabling wide-ranging styling possibilities.

tip

Check out the [customization showcase](/docs/tips/showcase.md) for styling tips.

The default stylesheet is available in both CSS and SCSS formats, allowing you to override default values without replicating the entire rule set.

For layout-only styles (structural properties like `flex-direction`, `gap`, alignment—excluding decorative styles), import `query-builder-layout.css` (or `.scss`).

* CSS
* SCSS

```
@import 'react-querybuilder/dist/query-builder.css';

/* OR, for layout only: */

@import 'react-querybuilder/dist/query-builder-layout.css';
```

```
@use 'react-querybuilder/dist/query-builder.scss';

// OR, for layout only:

@use 'react-querybuilder/dist/query-builder-layout.scss';
```

## CSS variables[​](#css-variables "Direct link to CSS variables")

Customize the default stylesheet by overriding CSS or SCSS variables.

info

CSS variables were introduced in **v8.3.0** and [SCSS variables](#scss-variables) have been available since **v4.0.0**. Both methods will continue to be supported.

Default variables:

* CSS
* SCSS

```
:root {

  --rqb-spacing: 0.5rem;

  --rqb-border-width: 1px;

  --rqb-base-color: #004bb8;

  --rqb-background-color: #004bb833;

  --rqb-border-color: #8081a2;

  --rqb-border-style: solid;

  --rqb-border-radius: 0.25rem;

}
```

```
$rqb-spacing: 0.5rem;

$rqb-border-width: 1px;

$rqb-base-color: #004bb8;

$rqb-background-color: #004bb833;

$rqb-border-color: #8081a2;

$rqb-border-style: solid;

$rqb-border-radius: 0.25rem;
```

Example:

* CSS
* SCSS

```
@import 'react-querybuilder/dist/query-builder.css';



:root {

  --rqb-spacing: 0.8rem; /* a little roomier than the default 0.5rem */

  --rqb-background-color: #ccc3; /* gray, semi-transparent background */

}
```

```
@use 'react-querybuilder/dist/query-builder' with (

  $rqb-spacing: 0.8rem, /* a little roomier than the default 0.5rem */

  $rqb-background-color: #ccc3 /* gray, semi-transparent background */

);
```

### SCSS variables[​](#scss-variables "Direct link to SCSS variables")

SCSS variables begin with `$` instead of `--`, but otherwise have the same name as their CSS counterpart (e.g., `$rqb-spacing` corresponds to `--rqb-spacing`).

SCSS allows you to customize the CSS variable prefix (`rqb-` by default) by setting `$rqb-var-prefix`.

```
@use 'react-querybuilder/dist/query-builder' with (

  $rqb-var-prefix: myprefix-,

  $rqb-spacing: 0.8rem

);



:root {

  --myprefix-background-color: #ccc3;

}
```

## Branch lines[​](#branch-lines "Direct link to Branch lines")

To add branch lines to the left side of rule groups, add the `queryBuilder-branches` class using the [`controlClassnames` prop](/docs/components/querybuilder.md#controlclassnames) or to any ancestor element.

```
<QueryBuilder

  controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}

/>
```

<!-- -->

https\://example.com

AND (and)+ Rule+ Group

First name (firstName)begins with (beginsWith)Stev⨯

OR (or)+ Rule+ Group⨯

Last name (lastName)=Vai⨯

Last name (lastName)=Vaughan⨯

The branch lines are colored red in the example above to stand out, but by default use the same color, width, and style as group borders. These variables can be overridden to customize branch lines:

* CSS
* SCSS

```
:root {

  --rqb-branch-indent: var(--rqb-spacing);

  --rqb-branch-width: var(--rqb-border-width);

  --rqb-branch-color: var(--rqb-border-color);

  --rqb-branch-radius: var(--rqb-border-radius);

  --rqb-branch-style: var(--rqb-border-style);

}
```

```
$rqb-branch-indent: $rqb-spacing;

$rqb-branch-width: $rqb-border-width;

$rqb-branch-color: $rqb-border-color;

$rqb-branch-radius: $rqb-border-radius;

$rqb-branch-style: $rqb-border-style;
```

## Justified layout[​](#justified-layout "Direct link to Justified layout")

For a "justified" layout, add the `queryBuilder-justified` class using the [`controlClassnames` prop](/docs/components/querybuilder.md#controlclassnames) or to any ancestor element.

Justified layout styles augment the default styles by pushing "+ Rule", "+ Group", clone, lock, and remove buttons to the right edge of their containers.

```
<QueryBuilder

  controlClassnames={{ queryBuilder: 'queryBuilder-justified' }}

/>
```

https\://example.com

AND (and)+ Rule+ Group

First name (firstName)begins with (beginsWith)Stev⨯

OR (or)+ Rule+ Group⨯

Last name (lastName)=Vai⨯

Last name (lastName)=Vaughan⨯

## Responsive layout[​](#responsive-layout "Direct link to Responsive layout")

For a layout that adapts to narrow containers (e.g. mobile), add the `queryBuilder-responsive` class using the [`controlClassnames` prop](/docs/components/querybuilder.md#controlclassnames) or to any ancestor element.

Responsive layout styles augment the default styles so that rule and group header rows wrap onto multiple lines when they run out of horizontal space instead of overflowing. No media or container queries are involved, so the layout reflows based on the actual available width—even for deeply nested groups.

These styles are intentionally minimal and only lightly opinionated; think of them as a convenient starting point for responsive behavior rather than a canonical or prescribed approach. Override or replace them freely to suit your design.

```
<QueryBuilder

  controlClassnames={{ queryBuilder: 'queryBuilder-responsive' }}

/>
```

https\://example.com

AND (and)+ Rule+ Group

First name (firstName)begins with (beginsWith)Stev⨯

OR (or)+ Rule+ Group⨯

Last name (lastName)=Vai⨯

Last name (lastName)=Vaughan⨯

## Drag-and-drop[​](#drag-and-drop "Direct link to Drag-and-drop")

When [drag-and-drop is enabled](/docs/dnd.md), these variables control styles for dragged and hovered elements:

* CSS
* SCSS

```
:root {

  --rqb-dnd-drop-indicator-color: rebeccapurple;

  --rqb-dnd-drop-indicator-copy-color: #669933;

  --rqb-dnd-drop-indicator-style: dashed;

  --rqb-dnd-drop-indicator-width: 2px;

}
```

```
$rqb-dnd-drop-indicator-color: rebeccapurple;

$rqb-dnd-drop-indicator-copy-color: #669933;

$rqb-dnd-drop-indicator-style: dashed;

$rqb-dnd-drop-indicator-width: 2px;



// Deprecated variable names (still work)

// $rqb-dnd-hover-border-bottom-color: rebeccapurple;

// $rqb-dnd-hover-copy-border-bottom-color: #669933;

// $rqb-dnd-hover-border-bottom-style: dashed;

// $rqb-dnd-hover-border-bottom-width: 2px;
```

You can also assign styles to these classes:

* `dndDragging`: Assigned to the clone of the dragged element (the "ghost" that follows the mouse cursor)
* `dndOver`: Assigned to a drop target when the cursor hovers over it
* `dndCopy`: Assigned to a drop target when the cursor hovers over it while the "copy" modifier key is pressed (`Alt` on Windows/Linux, `⌥ Option` on macOS; see [Drag-and-drop § Cloning and grouping](/docs/dnd.md#cloning-and-grouping))
* `dndGroup`: Assigned to a drop target when the cursor hovers over it while the "group" modifier key is pressed (`Ctrl`; see [Drag-and-drop § Cloning and grouping](/docs/dnd.md#cloning-and-grouping))
