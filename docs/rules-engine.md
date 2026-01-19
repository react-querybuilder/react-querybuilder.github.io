# Rules engine

caution

This package is in an early stage of development.

The [`@react-querybuilder/rules-engine`](https://www.npmjs.com/package/@react-querybuilder/rules-engine) package augments React Query Builder with rules engine functionality, allowing you to build executable rule sets with conditions and consequences.

## What is a Rules Engine?[​](#what-is-a-rules-engine "Direct link to What is a Rules Engine?")

A rules engine is a system that evaluates conditions and executes corresponding actions (consequences) based on those evaluations. Unlike static query builders that generate query strings, a rules engine creates executable logic that can be processed at runtime.

The rules engine extension transforms `react-querybuilder` queries into structured rule definitions that can be executed by rules engine libraries like [`json-rules-engine`](https://github.com/CacheControl/json-rules-engine).

## Installation[​](#installation "Direct link to Installation")

* npm
* Bun
* Yarn
* pnpm

```
npm install react-querybuilder @react-querybuilder/rules-engine
```

```
bun add react-querybuilder @react-querybuilder/rules-engine
```

```
yarn add react-querybuilder @react-querybuilder/rules-engine
```

```
pnpm add react-querybuilder @react-querybuilder/rules-engine
```

## Core concepts[​](#core-concepts "Direct link to Core concepts")

### Rules engine structure[​](#rules-engine-structure "Direct link to Rules engine structure")

A rules engine consists of:

* **Conditions**: Query logic that determines when a rule should fire (if/else if statements, aka antecedents)
* **Consequences**: Actions to execute when conditions are met (then statements)
* **Default Consequence**: Fallback action when no conditions match (else statement)

### Relationship to `QueryBuilder`[​](#relationship-to-querybuilder "Direct link to relationship-to-querybuilder")

While the standard `QueryBuilder` component generates queries for databases or search APIs, `RulesEngineBuilder` creates executable rule definitions that can be processed by rules engines to trigger actions, validations, or business logic.

## Basic usage[​](#basic-usage "Direct link to Basic usage")

The `RulesEngineBuilder` component provides a specialized interface for creating rules with conditions and consequences:

```
import { RulesEngineBuilder } from '@react-querybuilder/rules-engine';

function App() {
  return <RulesEngineBuilder />;
}
```

### Controlled vs uncontrolled[​](#controlled-vs-uncontrolled "Direct link to Controlled vs uncontrolled")

Using `RulesEngineBuilder` as an uncontrolled component by setting the `defaultRulesEngine` prop is the recommended approach. For a controlled component, use the `rulesEngine` prop.

```
import { useState } from 'react';
import { RulesEngineBuilder } from '@react-querybuilder/rules-engine';
import type { RulesEngine } from '@react-querybuilder/rules-engine';

function App() {
  const [rulesEngine, setRulesEngine] = useState<RulesEngine>({
    conditions: [],
    defaultConsequent: { type: 'default-action' },
  });

  return (
    <RulesEngineBuilder
      // Uncontrolled:
      defaultRulesEngine={rulesEngine}
      // Controlled:
      // rulesEngine={rulesEngine}
      onRulesEngineChange={setRulesEngine}
      consequentTypes={[
        { name: 'email-alert', label: 'Send Email' },
        { name: 'sms-alert', label: 'Send SMS' },
        { name: 'log-event', label: 'Log Event' },
        { name: 'default-action', label: 'Default Action' },
      ]}
    />
  );
}
```

## State management[​](#state-management "Direct link to State management")

The rules engine package uses Redux for internal state management and requires the `QueryBuilderStateProvider`:

```
import { QueryBuilderStateProvider } from 'react-querybuilder';
import { RulesEngineBuilder } from '@react-querybuilder/rules-engine';

function App() {
  return (
    <QueryBuilderStateProvider>
      <RulesEngineBuilder />
    </QueryBuilderStateProvider>
  );
}
```

info

The `RulesEngineBuilder` component automatically wraps itself with `QueryBuilderStateProvider`, so explicit wrapping is only necessary if you need to share state with other components.

### Accessing and updating Redux state[​](#accessing-and-updating-redux-state "Direct link to Accessing and updating Redux state")

In event handlers, retrieve the current rules engine with `props.schema.getRulesEngine()` and update the entire rules engine object with `props.schema.dispatchRulesEngine(newRulesEngine)`.

In the render phase, access rules engine state using the `useRulesEngineBuilderRulesEngine` hook:

```
import { useRulesEngineBuilderRulesEngine } from '@react-querybuilder/rules-engine';

function MyCustomComponent() {
  const rulesEngine = useRulesEngineBuilderRulesEngine();

  return (
    <div>
      <p>Number of conditions: {rulesEngine.conditions?.length ?? 0}</p>
      <p>Has default consequent: {!!rulesEngine.defaultConsequent}</p>
    </div>
  );
}
```

## Export[​](#export "Direct link to Export")

The `formatRulesEngine` function converts rules engine objects into formats compatible with external rules engines:

### `json-rules-engine`[​](#json-rules-engine "Direct link to json-rules-engine")

```
import { formatRulesEngine } from '@react-querybuilder/rules-engine';
import { Engine } from 'json-rules-engine';

const rulesEngine = {
  conditions: [
    {
      antecedent: {
        combinator: 'and',
        rules: [
          { field: 'temperature', operator: '>', value: 85 },
          { field: 'humidity', operator: '<', value: 40 },
        ],
      },
      consequent: { type: 'alert', message: 'High temperature detected' },
    },
  ],
  defaultConsequent: { type: 'monitor', action: 'continue-monitoring' },
};

// Convert to json-rules-engine format
const jsonRules = formatRulesEngine(rulesEngine, 'json-rules-engine');

// Create and run engine
const engine = new Engine(jsonRules);
engine.run({ temperature: 90, humidity: 35 }).then(events => {
  events.forEach(event => console.log(event.type, event.params));
});
```

### Custom export formats[​](#custom-export-formats "Direct link to Custom export formats")

Extend export functionality with custom processors:

```
import { formatRulesEngine } from '@react-querybuilder/rules-engine';
import type { RulesEngineProcessor } from '@react-querybuilder/rules-engine';

const customProcessor: RulesEngineProcessor<MyCustomFormat> = rulesEngine => ({
  // Transform to your custom format
  rules: rulesEngine.conditions.map(condition => ({
    when: condition.antecedent,
    then: condition.consequent,
  })),
  fallback: rulesEngine.defaultConsequent,
});

const customFormat = formatRulesEngine(rulesEngine, {
  rulesEngineProcessor: customProcessor,
});
```

## Component customization[​](#component-customization "Direct link to Component customization")

### Default components[​](#default-components "Direct link to Default components")

The rules engine includes specialized components for rules engine functionality:

```
import { RulesEngineBuilder } from '@react-querybuilder/rules-engine';
import type { ComponentsRE } from '@react-querybuilder/rules-engine';

const customComponents: Partial<ComponentsRE> = {
  consequentSelector: ({ options, value, handleOnChange }) => (
    <select value={value} onChange={e => handleOnChange(e.target.value)}>
      {options.map(opt => (
        <option key={opt.name} value={opt.name}>
          {opt.label}
        </option>
      ))}
    </select>
  ),
};

function App() {
  return <RulesEngineBuilder components={customComponents} />;
}
```

### `QueryBuilder` integration[​](#querybuilder-integration "Direct link to querybuilder-integration")

Pass standard `QueryBuilder` props for condition editing:

```
import { RulesEngineBuilder } from '@react-querybuilder/rules-engine';

function App() {
  return (
    <RulesEngineBuilder
      queryBuilderProps={{
        fields: [
          { name: 'temperature', label: 'Temperature', datatype: 'number' },
          { name: 'humidity', label: 'Humidity', datatype: 'number' },
          { name: 'location', label: 'Location', datatype: 'text' },
        ],
        operators: [
          { name: '>', label: 'greater than' },
          { name: '<', label: 'less than' },
          { name: '=', label: 'equals' },
        ],
      }}
    />
  );
}
```

## Configuration[​](#configuration "Direct link to Configuration")

### Consequent types[​](#consequent-types "Direct link to Consequent types")

Define available consequence types for rules:

```
<RulesEngineBuilder
  consequentTypes={[
    { name: 'email', label: 'Send Email' },
    { name: 'webhook', label: 'Call Webhook' },
    { name: 'database', label: 'Update Database' },
  ]}
  autoSelectConsequentType={true}
/>
```

### Nested conditions[​](#nested-conditions "Direct link to Nested conditions")

Disallow nested condition logic:

```
<RulesEngineBuilder allowNestedConditions={false} />
```

### Default consequents[​](#default-consequents "Direct link to Default consequents")

Disallow "else" blocks:

```
<RulesEngineBuilder allowDefaultConsequents={false} />
```

### Custom Translations[​](#custom-translations "Direct link to Custom Translations")

Customize UI labels:

```
import type { TranslationsRE } from '@react-querybuilder/rules-engine';

const customTranslations: Partial<TranslationsRE> = {
  blockLabelIf: { label: 'When' },
  blockLabelElseIf: { label: 'Otherwise when' },
  blockLabelElse: { label: 'Otherwise' },
  blockLabelThen: { label: 'Do' },
  addCondition: { label: 'Add condition' },
  addConsequent: { label: 'Add action' },
};

<RulesEngineBuilder translations={customTranslations} />;
```

## Styling[​](#styling "Direct link to Styling")

### Standard classes[​](#standard-classes "Direct link to Standard classes")

`RulesEngineBuilder` adds specific CSS classes for styling (unless `suppressStandardClassnames` is set):

```
.rulesEngineBuilder {}
.rulesEngineBuilder-header {}
.consequentBuilder {}
.consequentBuilder-header {}
.consequentBuilder-body {}
.consequentBuilder-standalone {}
.conditionBuilder {}
.conditionBuilder-header {}
.blockLabel {}
.blockLabel-if {}
.blockLabel-ifelse {}
.blockLabel-else {}
.blockLabel-then {}
```

### Custom classes[​](#custom-classes "Direct link to Custom classes")

```
import type { ClassnamesRE } from '@react-querybuilder/rules-engine';

const customClassnames: Partial<ClassnamesRE> = {
  rulesEngineBuilder: 'my-rules-engine',
  blockLabelIf: 'my-if-label',
  blockLabelThen: 'my-then-label',
  consequentBuilder: 'my-consequent-section',
};

<RulesEngineBuilder classnames={customClassnames} />;
```

## TypeScript support[​](#typescript-support "Direct link to TypeScript support")

### Core types[​](#core-types "Direct link to Core types")

```
import type {
  RulesEngine,
  RulesEngineAny,
  RECondition,
  Consequent,
  FormatRulesEngineOptions,
} from '@react-querybuilder/rules-engine';

// Basic rules engine structure
const rulesEngine: RulesEngine = {
  conditions: [
    {
      antecedent: { combinator: 'and', rules: [] },
      consequent: { type: 'action', data: {} },
    },
  ],
  defaultConsequent: { type: 'default' },
};

// Custom consequent type
interface MyConsequent extends Consequent {
  type: 'email' | 'sms' | 'webhook';
  recipient: string;
  message: string;
}
```

### Generic usage[​](#generic-usage "Direct link to Generic usage")

```
import type { RuleType } from 'react-querybuilder';
import type { RulesEngine } from '@react-querybuilder/rules-engine';

interface CustomRule extends RuleType {
  metadata?: Record<string, unknown>;
}

type CustomRulesEngine = RulesEngine<CustomRule, 'and' | 'or' | 'xor'>;
```

## Miscellaneous features[​](#miscellaneous-features "Direct link to Miscellaneous features")

### Path utilities[​](#path-utilities "Direct link to Path utilities")

Manipulate rules engine structure programmatically:

```
import {
  regenerateREIDs,
  prepareRulesEngine,
  isRulesEngine,
} from '@react-querybuilder/rules-engine';

// Regenerate IDs for all elements
const withNewIds = regenerateREIDs(rulesEngine);

// Recursively add `id` properties (only if necessary)
const preparedRE = prepareRulesEngine(partialRulesEngine, {
  idGenerator: () => `${Math.random()}`, // override default of `crypto.randomUUID()`
});

// Type checking
if (isRulesEngine(unknownObject)) {
  // Safe to use as rules engine
}
```

### Event handlers[​](#event-handlers "Direct link to Event handlers")

```
<RulesEngineBuilder
  onAddCondition={(condition, parentPath, rulesEngine) => {
    console.log('Condition added:', condition);
    return condition; // Return modified condition or true to proceed
  }}
  onRemoveCondition={(condition, path, rulesEngine) => {
    console.log('Condition removed:', condition);
    return true; // Return true to proceed with removal
  }}
/>
```

## Migration and compatibility[​](#migration-and-compatibility "Direct link to Migration and compatibility")

### Version compatibility[​](#version-compatibility "Direct link to Version compatibility")

* `react`: `>=18`
* `react-querybuilder`: must match
* `json-rules-engine`: `>=7` (optional)

### Future stability[​](#future-stability "Direct link to Future stability")

As this package is in early development, expect:

* Breaking changes in minor versions
* API evolution based on community feedback
* Additional export format support
* Enhanced TypeScript definitions

Keep your implementation flexible and monitor release notes for migration guides as the package matures.

## API reference[​](#api-reference "Direct link to API reference")

For detailed API documentation, see the [TypeScript definitions](/api/@react-querybuilder/rules-engine) and [source code](https://github.com/react-querybuilder/react-querybuilder/tree/main/packages/rules-engine).
