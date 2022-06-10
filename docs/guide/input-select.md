# InputSelect

`InputText` can take the place of text related `<select>` elements in a vee-validate form.

```vue
<script setup>
import '/node_modules/@olivervorasai/vee-validate-inputs/dist/style.css';
import { useForm } from 'vee-validate';
import { InputSelect } from '@olivervorasai/vee-validate-inputs';

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
        <InputSelect label="Color" name="color" :options="options" />
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
import InputSelect from '../../src/components/inputs/InputSelect.vue';

const { setFieldValue } = useForm({
    initialValues: {
        colorBase: "red",
        colorDisabled: "red",
        colorChanged: "red",
        colorVertical: "red",
        colorError: "red",
        colorFlat: "red",
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
</script>

## Various States

### Base

```html
<InputSelect label="Color" name="color" :options="options" />
```

<InputSelect label="Color" name="colorBase" :options="options" />

### Disabled

```html
<InputSelect label="Color" name="color" :options="options" disabled />
```

<InputSelect label="Color" name="colorBase" :options="options" disabled />

### Changed

```html
<InputSelect label="Color" name="color" :options="options" show-changed />
```

<InputSelect label="Color" name="colorChanged" :options="options" show-changed />

### Vertical

```html
<InputSelect label="Color" name="color" :options="options" vertical />
```

<InputSelect label="Color" name="colorVertical" :options="options" vertical />

### Errored

```html
<InputSelect label="Color" name="color" :options="options" />
```

<InputSelect label="Color" name="colorError" :options="options" />

## Built-in Custom Style

### Flat style

```html
<InputSelect label="Color" name="color" :options="options" flat />
```

<InputSelect label="Color" name="colorFlat" :options="options" flat />
