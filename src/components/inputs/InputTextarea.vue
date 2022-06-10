<script setup lang="ts">
import { useField } from 'vee-validate';

import FieldWrap from './FieldWrap.vue';

const props = withDefaults(
    defineProps<{
        disabled?: boolean;
        flat?: boolean;
        hideError?: boolean;
        height?: number;
        label?: string;
        name: string;
        showChanged?: boolean;
        vertical?: boolean;
    }>(),
    {
        disabled: false,
        flat: false,
        hideError: false,
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
        :changed="props.showChanged ? meta.dirty : false"
        :disabled="props.disabled"
        :flat="props.flat"
        :hide-error="props.hideError"
        :label="props.label"
        :name="props.name"
        :vertical="props.vertical"
    >
        <textarea
            :id="props.name"
            :value="value"
            :name="props.name"
            :disabled="props.disabled"
            :rows="props.height"
            :class="{ input: true, flat: props.flat }"
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
        box-shadow: var(--v-inputs-shadow-focus);
    }
}

/* Custom styles */
.flat {
    border: none;
    background-color: transparent;

    &:focus {
        box-shadow: initial;
    }
}
</style>
