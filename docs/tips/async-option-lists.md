# Async option list loading

To load option lists asynchronously for a value selector or editor, use the `useAsyncOptionList` hook imported from `"react-querybuilder/async"`.

This opt-in feature enables dynamic loading of options based on rule/group context, with intelligent caching for performance optimization.

## Basic usage[​](#basic-usage "Direct link to Basic usage")

1. Create a component that accepts `ValueSelectorProps` or `ValueEditorProps`.
2. Pass the props directly to `useAsyncOptionList` along with the async configuration options.
3. After any custom logic, pass the object returned from `useAsyncOptionList` as the props to a standard selector/editor component.
4. Assign the component in the [`controlElements` prop](/docs/components/querybuilder-controlelements.md).

```
import { type UseAsyncOptionListParams, useAsyncOptionList } from 'react-querybuilder/async';

const useAsyncOptionListParams: UseAsyncOptionListParams<ValueSelectorProps> = {
  getCacheKey: 'field',
  loadOptionList: async (value, { ruleOrGroup }) => {
    const response = await fetch(`/api/operators?field=${ruleOrGroup.field}`);
    return response.json();
  },
};

// Step 1
const AsyncOperatorSelector = (props: ValueSelectorProps) => {
  // Step 2
  const asyncProps = useAsyncOptionList(props, useAsyncOptionListParams);

  // Step 3
  return <props.schema.controls.valueSelector {...asyncProps} />;
};

const App = () => (
  <QueryBuilder
    controlElements={{
      // Step 4
      operatorSelector: AsyncOperatorSelector,
    }}
  />
);
```

tip

While you can explicitly render any selector or editor component...

```
// For example:
return <AntDValueSelector {...asyncProps} />;
// or
return <MaterialValueEditor {...asyncProps} />;
```

...rendering the configured value selector/editor makes your component more versatile as it will automatically adapt to configuration changes at the context and query builder level.

```
return <props.schema.controls.valueSelector {...asyncProps} />;
// or
return <props.schema.controls.valueEditor {...asyncProps} />;
```

This method can also help avoid some issues with certain [compatibility packages](/docs/compat.md).

## Configuration options[​](#configuration-options "Direct link to Configuration options")

### `loadOptionList`[​](#loadoptionlist "Direct link to loadoptionlist")

Function that returns a `Promise` for the [option list](/docs/tips/option-lists.md). This function is called when a valid cached list is unavailable. It should ultimately call your API, if and when necessary.

* As with option list-style props on [`QueryBuilder`](/docs/components/querybuilder.md), the resolved value from `loadOptionList` can be `string[]`, `Option[]`, or `OptionGroup[]`.
* The resolved list will be processed through the `prepareOptionList` function, guaranteeing each option is a `FullOption` with `name`, `value`, and `label` properties.
* The processed list will be `options` in the returned object if a `ValueSelectorProps` object is passed in, or `values` if `ValueEditorProps` is passed in.

**Example:**

```
const loadFieldOptions = async (value, { ruleOrGroup }) => {
  // Current selector value is available
  console.log('Current value:', value);

  // Rule or group context is available
  if (ruleOrGroup?.field === 'user') {
    return await fetch('/api/user-fields').then(r => r.json());
  }

  return await fetch('/api/default-fields').then(r => r.json());
};

const ValueSelectorAsync = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, { loadOptionList: loadFieldOptions });
  return <props.schema.controls.valueSelector {...asyncProps} />;
};
```

### `getCacheKey`[​](#getcachekey "Direct link to getcachekey")

Controls cache key generation. Can be a string, array of strings, or a function returning a string.

#### Cache by property name (string)[​](#cache-by-property-name-string "Direct link to Cache by property name (string)")

```
// Cache by field value only
const getCacheKey = 'field';

// Or cache by operator value only
const getCacheKey = 'operator';

const ValueSelectorAsync = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, { getCacheKey, loadOptionList });
  return <props.schema.controls.valueSelector {...asyncProps} />;
};
```

#### Cache by multiple property names (array of strings)[​](#cache-by-multiple-property-names-array-of-strings "Direct link to Cache by multiple property names (array of strings)")

```
// Cache by combination of field and operator
const getCacheKey = ['field', 'operator'];

const ValueSelectorAsync = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, { getCacheKey, loadOptionList });
  return <props.schema.controls.valueSelector {...asyncProps} />;
};
```

#### Cache by custom function[​](#cache-by-custom-function "Direct link to Cache by custom function")

```
// `getCacheKey` receives the entire props object as its only parameter
const getCacheKey = (props: ValueSelectorProps) => {
  const {
    rule,
    ruleGroup,
    schema: { qbId },
  } = props;
  // Using `qbId` will cache each query builder separately
  return `${qbid}-${rule?.field}-${rule?.operator}-${ruleGroup?.id}`;
};

const ValueSelectorAsync = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, { getCacheKey, loadOptionList });
  return <props.schema.controls.valueSelector {...asyncProps} />;
};
```

### `cacheTTL`[​](#cachettl "Direct link to cachettl")

Cache time-to-live in milliseconds. Defaults to `1_800_000` (30 minutes).

```
// 30 minutes (default)
const cacheTTL = 1_800_000;

// 5 minutes:    m    s     ms
const cacheTTL = 5 * 60 * 1000;

// Disable caching (cache will be populated but immediately outdated)
const cacheTTL = 0;

const ValueSelectorAsync = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, { cacheTTL, loadOptionList });
  return <props.schema.controls.valueSelector {...asyncProps} />;
};
```

## Loading states[​](#loading-states "Direct link to Loading states")

`useAsyncOptionList` adds the "queryBuilder-loading" class while the promise from `loadOptionList` is pending (if [`suppressStandardClassnames`](/docs/components/querybuilder.md#suppressstandardclassnames) is not `true`). No styles are applied by the default stylesheet for this class.

To add custom classes during pending `loadOptionList` promises, use `controlClassnames#loading` or override the `className` prop on the rendered value selector.

In this example, `my-async-loading-class` will be added to the specific component `ValueSelectorAsync` when loading, and `common-async-loading-class` will be added to *all* "loading" selectors.

```
const ValueSelectorAsync = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, { ...otherParams, isLoading });

  return (
    <props.schema.controls.valueSelector
      {...asyncProps}
      className={`${asyncProp.className}${asyncProps.isLoading ? ' my-async-loading-class' : ''}`}
    />
  );
};

const App = () => (
  <QueryBuilder
    controlElements={{ valueSelector: ValueSelectorAsync }}
    controlClassnames={{ loading: 'common-async-loading-class' }}
  />
);
```

To force a "loading" state, set the `isLoading` parameter to `true`:

```
const ValueSelectorAsync = (props: ValueSelectorProps) => {
  // Assume this hook determines whether to force a "loading" state and returns a `boolean`:
  const isLoading = useIsLoading(props);

  const asyncProps = useAsyncOptionList(props, { ...otherParams, isLoading });

  return <props.schema.controls.valueSelector {...asyncProps} />;
};
```

## Real-world examples[​](#real-world-examples "Direct link to Real-world examples")

### Dependent values[​](#dependent-values "Direct link to Dependent values")

Load options in the value editor that depend on the selected field and operator. The value editor must

```
const ValueSelectorAsync = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, {
    loadOptionList: async (value, { ruleOrGroup }) => {
      const { field, operator } = ruleOrGroup as RuleType;
      return myValuesAPI({ field, operator });
    },
    getCacheKey: ['field', 'operator'],
  });

  return <props.schema.controls.valueSelector {...asyncProps} />;
};

// Assign the async value selector as `selectorComponent` to an otherwise
// "pass-through" value editor component.
const ValueEditorAsync = (props: ValueEditorProps) => (
  <ValueEditor {...props} selectorComponent={ValueSelectorAsync} />
);

// Assign the custom value editor in `controlElements`
const App = () => <QueryBuilder controlElements={{ valueEditor: ValueEditorAsync }} />;
```

### Dependent operators[​](#dependent-operators "Direct link to Dependent operators")

Load operators that depend on the selected field type:

```
const ValueSelectorAsync = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, {
    loadOptionList: async (value, { ruleOrGroup }) => {
      const fieldType = props.fieldData.datatype; // custom field property
      return getOperatorsForType(fieldType);
    },
    getCacheKey: props => `operators-${props.fieldData.datatype}`,
  });

  return <props.schema.controls.valueSelector {...asyncProps} />;
};
```

### Auto-complete value editor[​](#auto-complete-value-editor "Direct link to Auto-complete value editor")

Create an auto-complete component by including the current value in the cache key:

```
const AutoCompleteValueSelector = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, {
    loadOptionList: async (value, { ruleOrGroup }) => {
      if (!value || value.length < 2) return [];

      return fetch(`/api/autocomplete?q=${value}&field=${ruleOrGroup?.field}`).then(r => r.json());
    },
    getCacheKey: props => `autocomplete-${props.rule?.field}-${props.value}`,
  });

  // Rendering of the input and option list is left to this component
  // (see below for example usage of third-party auto-complete components)
  return <MyAutocompleteSelector {...asyncProps} />;
};

// Use the autocomplete selector as the selector for the value editor
const ValueEditorWithAutocomplete = (props: ValueEditorProps) => (
  <ValueEditor {...props} selectorComponent={AutoCompleteValueSelector} />
);

// Assign the new value editor
const App = () => <QueryBuilder controlElements={{ valueEditor: ValueEditorWithAutocomplete }} />;
```

Some of the [compatibility packages](/docs/compat.md) provide themed auto-complete components that integrate well with `useAsyncOptionList`.

* MUI/Material
* Mantine
* Ant Design

```
import { Autocomplete, TextField } from '@mui/material';

export const ValueEditorAutocompleteAsync = (props: ValueEditorProps) => {
  const { value, handleOnChange, values } = useAsyncOptionList(props, {
    getCacheKey,
    loadOptionList,
  });

  return (
    <Autocomplete
      inputValue={value}
      options={values ?? []}
      onInputChange={(_e, v) => handleOnChange(v)}
      disabled={props.disabled}
      renderInput={params => (
        <TextField {...params} label="Framework" placeholder="Start typing to load options..." />
      )}
    />
  );
};
```

```
import { Autocomplete } from '@mantine/core';

export const ValueEditorAutocompleteAsync = (props: ValueEditorProps) => {
  const { value, handleOnChange, values } = useAsyncOptionList(props, {
    getCacheKey,
    loadOptionList,
  });

  return (
    <Autocomplete
      value={value ?? ''}
      data={values}
      onChange={handleOnChange}
      clearable
      disabled={props.disabled}
      placeholder="Start typing to load options..."
    />
  );
};
```

```
import { AutoComplete } from 'antd';

export const ValueEditorAutocompleteAsync = (props: ValueEditorProps) => {
  const { value, handleOnChange, values } = useAsyncOptionList(props, {
    getCacheKey,
    loadOptionList,
  });

  return (
    <AutoComplete
      value={value ?? ''}
      style={style}
      options={values}
      onSearch={handleOnChange}
      onChange={handleOnChange}
      disabled={props.disabled}
      placeholder="Start typing to load options..."
    />
  );
};
```

Mock loader setup

This code can be used to mock an API call for the compatibility examples above.

```
// prettier-ignore
const words = [ "React", "Angular", "Vue", "Svelte", "Next.js", "Nuxt.js", "Gatsby", "TypeScript", "JavaScript", "Python", "Java", "C#", "Go", "Rust", "Node.js", "Express", "Fastify", "Koa", "Hapi", "NestJS", "MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite", "Docker", "Kubernetes", "AWS", "Azure", "GCP"];

// Simulate async data loading
const loadOptionList = async (value: string | undefined): Promise<string[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Filter based on input value if provided
  if (value && value.length > 0) {
    return words.filter(word => word.toLowerCase().includes(value.toLowerCase()));
  }

  // Otherwise return no results
  return [];
};

const getCacheKey = ({ value }: ValueEditorProps) => value;
```

## Error handling[​](#error-handling "Direct link to Error handling")

Async loading errors can be managed within your `loadOptionList` function or by checking the `errors` property on the object returned from `useAsyncOptionList`, which will contain an error message when the promise is rejected.

Internal error handling:

```
const loadOptionList = async (value, { ruleOrGroup }) => {
  try {
    const response = await fetch('/api/options');
    if (!response.ok) throw new Error('Failed to load options');
    return response.json();
  } catch (error) {
    // Log the error and return fallback options
    console.error('Failed to load options:', error);
    return [{ name: 'error', value: 'error', label: 'Error loading options' }];
  }
};
```

Promise rejection detection:

```
const AsyncOperatorSelector = (props: ValueSelectorProps) => {
  const asyncProps = useAsyncOptionList(props, useAsyncOptionListParams);

  // If `errors` is truthy, the promise was rejected
  if (asyncProps.errors) {
    const fallbackOptions = [{ name: 'error', value: 'error', label: 'Error loading options' }];
    return <props.schema.controls.valueSelector {...asyncProps} options={fallbackOptions} />;
  }

  return <props.schema.controls.valueSelector {...asyncProps} />;
};
```

## Best practices[​](#best-practices "Direct link to Best practices")

### Cache key design[​](#cache-key-design "Direct link to Cache key design")

* **Don't include the selector's own value** unless building auto-complete
* **Use specific, meaningful keys** to avoid cache conflicts
* **Consider rule/group hierarchy** for context-dependent options

```
// ❌ Bad: includes own value (unless auto-complete)
getCacheKey: props => `${props.rule?.field}-${props.value}`;

// ✅ Good: context-dependent without own value
getCacheKey: props => `operators-${props.rule?.field}`;
```

### Performance optimization[​](#performance-optimization "Direct link to Performance optimization")

* **Set appropriate cache TTL** based on data freshness requirements
* **Use specific cache keys** to maximize cache hits
* **Consider debouncing** for auto-complete scenarios

### Error resilience[​](#error-resilience "Direct link to Error resilience")

* **Provide fallback options** when loading fails
* **Handle network timeouts** gracefully
* **Show meaningful error states** to users
