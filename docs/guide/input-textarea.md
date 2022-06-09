# InputTextarea

`InputTextarea` can take the place of the `<textarea>` element in a vee-validate form.

```vue
<script setup>
import '/node_modules/@olivervorasai/vee-validate-inputs/dist/style.css';
import { useForm } from 'vee-validate';
import { InputTextarea } from '@olivervorasai/vee-validate-inputs';

const { handleSubmit } = useForm({
    initialValues: {
        color: 'red',
    },
});
</script>

<template>
    <form @submit="handleSubmit">
        <InputTextarea label="My Color" name="color" vertical />
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
import InputTextarea from '../../src/components/inputs/InputTextarea.vue';

const { setFieldValue } = useForm({
    initialValues: {
        colorBase: "red",
        colorDisabled: "red",
        colorChanged: "red",
        colorVertical: "red",
        colorError: "red",
        colorFlat: "red",
        colorHeight: "red",
    },
    validationSchema: {
        colorError: (value) => !!value ? true : 'Color is required',
    },
});

onMounted(() => {
    setFieldValue('colorChanged', 'blue');
    setFieldValue('colorError', '');
});
</script>

## Various States

### Base

```html
<InputTextarea label="Color" name="color" />
```

<InputTextarea label="Color" name="colorBase" />

### Disabled

```html
<InputTextarea label="Color" name="color" disabled />
```

<InputTextarea label="Color" name="colorDisabled" disabled />

### Changed

```html
<InputTextarea label="Color" name="color" show-changed />
```

<InputTextarea label="Color" name="colorChanged" show-changed />

### Vertical

```html
<InputTextarea label="Color" name="color" vertical />
```

<InputTextarea label="Color" name="colorVertical" vertical/>

### Errored

```html
<InputTextarea label="Color" name="color" />
```

<InputTextarea label="Color" name="colorError"/>

## Custom Heights

```html
<InputTextarea label="Color" name="color" :height="1" />
```

<InputTextarea label="Color" name="colorHeight" :height="1" />

```html
<InputTextarea label="Color" name="color" :height="2" />
```

<InputTextarea label="Color" name="colorHeight" :height="2" />
