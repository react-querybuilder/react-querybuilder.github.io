# Getting started

## TL;DR[​](#tldr "Direct link to TL;DR")

* [Basic example (TypeScript)](/sandbox?t=basic-ts)
* [Basic example (JavaScript)](/sandbox?t=basic)
* [More examples](https://github.com/react-querybuilder/react-querybuilder/tree/main/examples/)

## Installation[​](#installation "Direct link to Installation")

Install `react-querybuilder` using [npm](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [Bun](https://bun.sh/), or follow [buildless setup instructions](/docs/buildless.md).

* npm
* Bun
* Yarn
* pnpm

```
npm i react-querybuilder
```

```
bun add react-querybuilder
```

```
yarn add react-querybuilder
```

```
pnpm add react-querybuilder
```

## Basics[​](#basics "Direct link to Basics")

Create a basic query builder by rendering `QueryBuilder` with no props. Import the official stylesheet (available in `.css` and `.scss` formats).

This query builder works but isn't very useful yet. To get real value from it, you need to define fields for users to select from. Pass an array of field objects to the `fields` prop.

In the query builder below, click the "+ Rule" button and then the field selector to see the field choices.

Much better! However, you'll likely want to monitor and control user interactions with the query builder. Let's add state management using React's `useState` hook to store the query object and make it accessible to other components.

The `query` state variable gets passed to the `query` prop, and the `setQuery` setter function handles the `onQueryChange` callback. We'll also initialize the query with some example rules, ensuring each rule's `field` property matches a field `name` from our fields array.

Non-TypeScript version

```
import { useState } from 'react';

import { QueryBuilder } from 'react-querybuilder';

import 'react-querybuilder/dist/query-builder.css';



const fields = [

  { name: 'firstName', label: 'First Name' },

  { name: 'lastName', label: 'Last Name' },

];



export default () => {

  const [query, setQuery] = useState({

    combinator: 'and',

    rules: [

      { field: 'firstName', operator: '=', value: 'Steve' },

      { field: 'lastName', operator: '=', value: 'Vai' },

    ],

  });



  return <QueryBuilder fields={fields} query={query} onQueryChange={setQuery} />;

};
```

## Exporting queries[​](#exporting-queries "Direct link to Exporting queries")

Use the `formatQuery` function to convert query objects to formats like [SQL](https://en.wikipedia.org/wiki/SQL), [MongoDB](https://www.mongodb.com/), and [CEL](https://cel.dev) ([full documentation](/docs/utils/export.md)). The example below shows real-time SQL generation—modify the query and watch the SQL update automatically.

## Onward and upward\![​](#onward-and-upward "Direct link to Onward and upward!")

Explore all React Query Builder options in the [main component documentation](/docs/components/querybuilder.md). Try different configurations, export/import formats, and features in the interactive [demo](/demo).

Coming from another library? See [how React Query Builder compares](/docs/tips/comparison.md), and the guide for [migrating from react-awesome-query-builder](/docs/tips/migrate-from-raqb.md).

## Training[​](#training "Direct link to Training")

For an extended tutorial on configuration and customization of `react-querybuilder`, including information about integrating it with a backend API and advanced reporting components (grids, maps, charts, etc.), check out the course [Building Advanced Admin Reporting in React](https://www.newline.co/courses/building-advanced-admin-reporting-in-react), taught by this library's maintainer at [newline](https://www.newline.co/).
