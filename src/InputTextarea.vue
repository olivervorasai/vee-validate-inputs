<script setup lang="ts">
import { useField } from 'vee-validate';

import FieldWrap from './FieldWrap.vue';

const props = withDefaults(
    defineProps<{
        disabled?: boolean;
        height?: number;
        label?: string;
        name: string;
        showChanged?: boolean;
        vertical?: boolean;
    }>(),
    {
        disabled: false,
        height: 5,
        label: '',
        showChanged: false,
        vertical: false,
    }
);

const { value, handleBlur, handleChange, meta } = useField<string>(props.name);
</script>

<template>
    <FieldWrap
        :changed="showChanged ? meta.dirty : false"
        :label="label"
        :name="name"
        :vertical="vertical"
    >
        <textarea
            :id="name"
            :value="value"
            :name="name"
            :disabled="disabled"
            :rows="height"
            class="input"
            @input="handleChange"
            @blur="handleBlur"
        ></textarea>
    </FieldWrap>
</template>

<style lang="postcss" scoped>
.input {
    flex: 1;
    width: 100%; /* Needed for vertical (flex-direction: column, align-items: flex-start) */
    padding: 0.5rem 1rem;
    border: 1px solid currentcolor;
    border-radius: 4px;
    resize: vertical;
    font: inherit;
    color: currentcolor;

    &:disabled {
        opacity: 0.5;
    }

    &:focus {
        outline: none;
        box-shadow: var(--shadow-focus);
    }
}
</style>
