# External controls

React Query Builder exports the same [query tools](/docs/utils/query-management.md#query-tools) used internally for managing query updates. You can use these functions outside the `<QueryBuilder />` component for greater UI design flexibility while maintaining full query management capabilities.

Both examples below hide the default add/remove buttons and implement external controls above the query builder. The query methods (`add`, `remove`, `update`, and `move`) are called from event handlers, each returning a new query that replaces the current one.

## Uncontrolled component[​](#uncontrolled-component "Direct link to Uncontrolled component")

Give the query builder an explicit [`qbId`](/docs/components/querybuilder.md#qbid) and the external controls can address it by that identifier, reading and updating its query without your component owning the state.

* [`useQueryBuilderSelector`](/docs/utils/hooks.md#usequerybuilderselector) with [`getQuerySelectorById`](/docs/utils/hooks.md#usequerybuilderselector) reads the current query and re-renders the controls whenever it changes—including changes made from within the query builder itself.
* [`getDispatchQueryById`](/docs/utils/hooks.md#getdispatchquerybyid) applies a new query exactly as a user edit would, so `onQueryChange` still fires if you supply it.

Both need access to the internal store, which is why `QueryBuilderStateProvider` wraps the pair. The query builder renders its own provider internally, so this only extends that same store to components *outside* it.

<!-- -->

<!-- -->

#### Demo[​](#demo "Direct link to Demo")

https\://example.com

AND (and)

First Name (firstName)=Steve

Last Name (lastName)=Vai

#### Code[​](#code "Direct link to Code")

```
import type { ChangeEvent } from 'react';

import {

  add,

  defaultCombinators,

  Field,

  getDispatchQueryById,

  getQuerySelectorById,

  move,

  QueryBuilder,

  QueryBuilderStateProvider,

  remove,

  RuleGroupType,

  update,

  useQueryBuilderSelector,

} from 'react-querybuilder';

import 'react-querybuilder/dist/query-builder.css';



const fields: Field[] = [

  { name: 'firstName', label: 'First Name' },

  { name: 'lastName', label: 'Last Name' },

];



const initialQuery: RuleGroupType = {

  combinator: 'and',

  rules: [

    { field: 'firstName', operator: '=', value: 'Steve' },

    { field: 'lastName', operator: '=', value: 'Vai' },

  ],

};



const qbId = 'external-controls';



const ExternalControls = () => {

  const query = useQueryBuilderSelector(getQuerySelectorById(qbId)) as RuleGroupType;

  const dispatchQuery = (q: RuleGroupType) => getDispatchQueryById(qbId)?.(q);



  // The query builder registers its query as it mounts, so there is one render before it exists

  if (!query) return null;



  // add

  const addRule = () =>

    dispatchQuery(add(query, { field: 'firstName', operator: '=', value: 'Steve' }, []));



  // remove

  const removeFirstRule = () => dispatchQuery(remove(query, [0]));



  // update

  const updateCombinator = (e: ChangeEvent<HTMLSelectElement>) =>

    dispatchQuery(update(query, 'combinator', e.target.value, []));



  // move

  const moveBottomRuleToTop = () => dispatchQuery(move(query, [query.rules.length - 1], [0]));



  return (

    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>

      <button onClick={addRule} title="Add a rule at the bottom of the group">

        Add rule

      </button>

      <button onClick={removeFirstRule} title="Remove the top-most rule">

        Remove first rule

      </button>

      <button onClick={moveBottomRuleToTop} title="Move the bottom-most rule to the top">

        Move bottom rule to top

      </button>

      <select value={query.combinator} onChange={updateCombinator} title="Update the combinator">

        {defaultCombinators.map(c => (

          <option key={c.name} value={c.name}>

            Update combinator to {c.label}

          </option>

        ))}

      </select>

    </div>

  );

};



export default () => (

  <QueryBuilderStateProvider>

    <ExternalControls />

    <QueryBuilder

      qbId={qbId}

      fields={fields}

      defaultQuery={initialQuery}

      controlElements={{

        // These declarations prevent the "+ Rule", "+ Group",

        // and "x" (rule removal) buttons from rendering:

        addGroupAction: null,

        addRuleAction: null,

        removeRuleAction: null,

      }}

    />

  </QueryBuilderStateProvider>

);
```

tip

`getDispatchQueryById` returns `undefined` when no query builder with the given `qbId` is mounted, hence the optional call. Calling it from event handlers (rather than capturing it during render) means the controls always dispatch to the currently mounted query builder.

## Controlled component[​](#controlled-component "Direct link to Controlled component")

When your component already owns the query, the same query tools apply—call them from event handlers and assign the result to your state variable to keep everything synchronized.

```
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import {
  add,
  defaultCombinators,
  Field,
  move,
  QueryBuilder,
  remove,
  RuleGroupType,
  update,
} from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

const fields: Field[] = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

const initialQuery: RuleGroupType = {
  combinator: 'and',
  rules: [
    { field: 'firstName', operator: '=', value: 'Steve' },
    { field: 'lastName', operator: '=', value: 'Vai' },
  ],
};

export default () => {
  const [query, setQuery] = useState(initialQuery);

  // add
  const addRule = () =>
    setQuery(add(query, { field: 'firstName', operator: '=', value: 'Steve' }, []));

  // remove
  const removeFirstRule = () => setQuery(remove(query, [0]));

  // update
  const updateCombinator = (e: ChangeEvent<HTMLSelectElement>) =>
    setQuery(update(query, 'combinator', e.target.value, []));

  // move
  const moveBottomRuleToTop = () => setQuery(move(query, [query.rules.length - 1], [0]));

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <button onClick={addRule} title="Add a rule at the bottom of the group">
          Add rule
        </button>
        <button onClick={removeFirstRule} title="Remove the top-most rule">
          Remove first rule
        </button>
        <button onClick={moveBottomRuleToTop} title="Move the bottom-most rule to the top">
          Move bottom rule to top
        </button>
        <select value={query.combinator} onChange={updateCombinator} title="Update the combinator">
          {defaultCombinators.map(c => (
            <option key={c.name} value={c.name}>
              Update combinator to {c.label}
            </option>
          ))}
        </select>
      </div>
      <QueryBuilder
        fields={fields}
        query={query}
        onQueryChange={setQuery}
        controlElements={{
          // These declarations prevent the "+ Rule", "+ Group",
          // and "x" (rule removal) buttons from rendering:
          addGroupAction: null,
          addRuleAction: null,
          removeRuleAction: null,
        }}
      />
    </div>
  );
};
```

[Open Sandbox](https://codesandbox.io/api/v1/sandboxes/define?undefined\&environment=server "Open in CodeSandbox")
