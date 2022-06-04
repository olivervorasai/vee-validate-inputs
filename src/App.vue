<script setup lang="ts">
import { useForm } from 'vee-validate';
import InputText from './components/inputs/InputText.vue';
import InputTextarea from './components/inputs/InputTextarea.vue';

const { handleSubmit } = useForm({
    initialValues: {
        color: 'red',
    },
    validationSchema: {
        color: (value: string) => (value ? true : false),
    },
});
</script>

<template>
    <form @submit="handleSubmit">
        <InputText label="My Color" name="color" type="text" vertical />
        <InputTextarea label="My Color" name="color" vertical />
    </form>
</template>
