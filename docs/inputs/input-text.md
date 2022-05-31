# InputText

`InputText` can take the place of any `<input>` element in a vee-validate form.

```vue
<script setup lang="ts">
import { useForm } from "vee-validate";
import { InputText } from "@olivervorasai/vee-validate-inputs";

const { handleSubmit } = useForm({
    initialValues: {
        color: "red",
    },
});
</script>

<template>
    <form @submit="handleSubmit">
        <InputText name="color" />
    </form>
</template>
```

<script setup>
import { useForm } from "vee-validate";
import InputText from '../../src/InputText.vue';

const { handleSubmit } = useForm({
    initialValues: {
        color: "red",
    },
});
</script>

<form @submit="handleSubmit">
    <InputText name="color" />
</form>
