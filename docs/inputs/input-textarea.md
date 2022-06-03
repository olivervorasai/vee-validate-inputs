# InputTextarea

`InputTextarea` can take the place of any `<textarea>` element in a vee-validate form.

```vue
<script setup>
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
import { useForm } from "vee-validate";
import InputTextarea from '../../src/InputTextarea.vue';

const { handleSubmit } = useForm({
    initialValues: {
        color: "red",
    },
    validationSchema: {
        color: (value) => (!!value ? true : false),
    },
});
</script>

<form @submit="handleSubmit">
    <InputTextarea label="My Color" name="color" vertical />
</form>
