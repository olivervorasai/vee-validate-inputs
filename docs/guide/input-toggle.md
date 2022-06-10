# InputToggle

`InputToggle` can take the place of text related `<input type="radio">` elements in a vee-validate form.

```vue
<script setup>
import '/node_modules/@olivervorasai/vee-validate-inputs/dist/style.css';
import { useForm } from 'vee-validate';
import { InputToggle } from '@olivervorasai/vee-validate-inputs';

const { handleSubmit } = useForm({
    initialValues: {
        color: 'red',
    },
});

const options = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
];
</script>

<template>
    <form @submit="handleSubmit">
        <InputToggle label="Color" name="color" :options="options" />
    </form>
</template>
```

<script setup>
import '../../src/assets/css/colors.css';
import '../../src/assets/css/shadows.css';
import '../../src/assets/css/transitions.css';
import '../../src/assets/css/base.css';

import { onMounted } from 'vue';
import { useForm } from "vee-validate";
import InputToggle from '../../src/components/inputs/InputToggle.vue';

const { setFieldValue } = useForm({
    initialValues: {
        colorBase: "red",
        colorDisabled: "red",
        colorChanged: "red",
        colorVertical: "red",
        colorError: "red",
        colorFlat: "red",
        colorMany: "red"
    },
    validationSchema: {
        colorError: (value) => !!value ? true : 'Color is required',
    }
});

onMounted(() => {
    setFieldValue('colorChanged', 'blue');
    setFieldValue('colorError', '');
});

const options = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
];

const optionsMany = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
    { value: 'purple', label: 'Purple' },
    { value: 'brown', label: 'Brown' },
];
</script>

## Various States

### Base

```html
<InputToggle label="Color" name="color" :options="options" />
```

<InputToggle label="Color" name="colorBase" :options="options" />

### Disabled

```html
<InputToggle label="Color" name="color" :options="options" disabled />
```

<InputToggle label="Color" name="colorDisabled" :options="options" disabled />

### Changed

```html
<InputToggle label="Color" name="color" :options="options" show-changed />
```

<InputToggle label="Color" name="colorChanged" :options="options" show-changed />

### Vertical

```html
<InputToggle label="Color" name="color" :options="options" vertical />
```

<InputToggle label="Color" name="colorVertical" :options="options" vertical />

### Errored

```html
<InputToggle label="Color" name="color" :options="options" />
```

<InputToggle label="Color" name="colorError" :options="options" />

## Multiple Options

The number of options is not limited to two.

```jsx
const optionsMany = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
    { value: 'purple', label: 'Purple' },
    { value: 'brown', label: 'Brown' },
];

<InputToggle label="Color" name="color" :options="optionsMany" />
```

<InputToggle label="Color" name="colorMany" :options="optionsMany" />
