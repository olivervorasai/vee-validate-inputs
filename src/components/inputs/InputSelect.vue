<script setup lang="ts">
import { useField } from 'vee-validate';

import FieldWrap from './FieldWrap.vue';

const props = withDefaults(
    defineProps<{
        disabled?: boolean;
        flat?: boolean;
        hideError?: boolean;
        label?: string;
        name: string;
        options: { label: string; value: string }[];
        showChanged?: boolean;
        vertical?: boolean;
    }>(),
    {
        disabled: false,
        flat: false,
        hideError: false,
        label: '',
        showChanged: false,
        vertical: false,
    }
);

const { value, handleBlur, handleChange, meta } = useField(props.name);
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
        <select
            :id="props.name"
            :value="value"
            :name="props.name"
            :disabled="props.disabled"
            :class="{ input: true, flat: props.flat }"
            @input="handleChange"
            @blur="handleBlur"
        >
            <option value=""></option>

            <option
                v-for="(option, index) in props.options"
                :key="`${option.value}-${index}`"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </FieldWrap>
</template>

<style lang="postcss" scoped>
.input {
    flex: 1;
    width: 100%; /* Needed for vertical (flex-direction: column, align-items: flex-start) */
    min-height: 2rem;
    padding: 0 0.75rem;
    border: 1px solid currentcolor;
    border-radius: 4px;
    font: inherit;
    line-height: 1;
    transition: var(--v-inputs-transition-basic);

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
