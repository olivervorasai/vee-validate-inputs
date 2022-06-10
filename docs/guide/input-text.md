# InputText

`InputText` can take the place of text related `<input>` elements in a vee-validate form.

```vue
<script setup>
import '/node_modules/@olivervorasai/vee-validate-inputs/dist/style.css';
import { useForm } from 'vee-validate';
import { InputText } from '@olivervorasai/vee-validate-inputs';

const { handleSubmit } = useForm({
    initialValues: {
        color: 'red',
    },
});
</script>

<template>
    <form @submit="handleSubmit">
        <InputText label="Color" name="color" type="text" />
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
import InputText from '../../src/components/inputs/InputText.vue';

const { setFieldValue } = useForm({
    initialValues: {
        colorBase: "red",
        colorDisabled: "red",
        colorChanged: "red",
        colorVertical: "red",
        colorError: "red",
        colorFlat: "red",
        number: 123,
        email: "email@domain.com",
        password: "password",
        tel: "555-555-5555",
        url: 'https://www.website.tld'
    },
    validationSchema: {
        colorError: (value) => !!value ? true : 'Color is required',
    }
});

onMounted(() => {
    setFieldValue('colorChanged', 'blue');
    setFieldValue('colorError', '');
});
</script>

## Various States

### Base

```html
<InputText label="Color" name="color" type="text" />
```

<InputText label="Color" name="colorBase" type="text" />

### Disabled

```html
<InputText label="Color" name="color" type="text" disabled />
```

<InputText label="Color" name="colorDisabled" type="text" disabled />

### Changed

```html
<InputText label="Color" name="color" type="text" show-changed />
```

<InputText label="Color" name="colorChanged" type="text" show-changed />

### Vertical

```html
<InputText label="Color" name="color" type="text" vertical />
```

<InputText label="Color" name="colorVertical" type="text" vertical />

### Errored

```html
<InputText label="Color" name="color" type="text" />
```

<InputText label="Color" name="colorError" type="text" />

## Built-in Custom Style

### Flat style

```html
<InputText label="Color" name="color" type="text" flat />
```

<InputText label="Color" name="colorFlat" type="text" flat />

## Types

`InputText` is designed to be used with text and number related input types. There is no visual different between these more specific types and the standard `text` type.

```html
<InputText label="Number" name="number" type="number" />
```

<InputText label="Number" name="number" type="number" />

<br />

```html
<InputText label="Email" name="email" type="email" />
```

<InputText label="Email" name="email" type="email" />

<br />

```html
<InputText label="Password" name="password" type="password" />
```

<InputText label="Password" name="password" type="password" />

<br />

```html
<InputText label="Tel" name="tel" type="tel" />
```

<InputText label="Tel" name="tel" type="tel" />

<br />

```html
<InputText label="Url" name="url" type="url" />
```

<InputText label="Url" name="url" type="url" />
