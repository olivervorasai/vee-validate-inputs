# InputText

`InputText` can take the place of any `<input>` element in a vee-validate form.

```vue
<script setup>
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
        <InputText label="My Color" name="color" type="text" vertical />
    </form>
</template>
```

<script setup>
import { useForm } from "vee-validate";
import InputText from '../../src/components/inputs/InputText.vue';

const { handleSubmit } = useForm({
    initialValues: {
        color: "red",
    },
    validationSchema: {
        color: (value) => !!value ? true : false,
    }
});
</script>

<form @submit="handleSubmit">
    <InputText label="My Color" name="color" type="text" vertical />
</form>
