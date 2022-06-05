<script setup lang="ts">
import { useForm } from 'vee-validate';
import InputText from './components/inputs/InputText.vue';
import InputTextarea from './components/inputs/InputTextarea.vue';
import InputSelect from './components/inputs/InputSelect.vue';
import InputDatetime from './components/inputs/InputDatetime.vue';
import InputToggle from './components/inputs/InputToggle.vue';

const { values, handleSubmit } = useForm({
    initialValues: {
        color: 'red',
        age: '150',
        comment: 'Some words here',
        vegetable: 'Carrot',
        birthday: '2025-08-23',
        anniversary: '2026-10-04T22:47',
        temperature: '',
    },
    validationSchema: {
        color: (value: string) => (value ? true : false),
    },
});

const vegetables = [
    { label: 'Carrot', value: 'Carrot' },
    { label: 'Potato', value: 'Potato' },
    { label: 'Cucumber', value: 'Cucumber' },
];

const temps = [
    { label: 'Hot', value: 'Hot' },
    { label: 'Warm', value: 'Warm' },
    { label: 'Cold', value: 'Cold' },
    { label: 'Freezing', value: 'Freezing' },
];
</script>

<template>
    <div class="playground">
        <form @submit="handleSubmit">
            <InputText label="My Color" name="color" type="text" vertical />
            <InputText label="My Color" name="age" type="number" vertical />
            <InputTextarea label="My Comment" name="comment" vertical />
            <InputSelect
                label="My Vegetable"
                name="vegetable"
                :options="vegetables"
                vertical
            />
            <InputDatetime
                label="My Anniversary"
                name="anniversary"
                type="datetime-local"
                vertical
            />
            <InputDatetime
                label="My Birthday"
                name="birthday"
                type="date"
                vertical
            />
            <InputToggle
                label="My Temperature"
                name="temperature"
                :options="temps"
                vertical
            />
        </form>

        <pre>{{ values }}</pre>
    </div>
</template>

<style lang="postcss" scoped>
.playground form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
