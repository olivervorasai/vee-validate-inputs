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
        showChanged?: boolean;
        type: string;
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

const { value, handleBlur, handleChange, meta } = useField<string>(props.name);
</script>

<template>
    <FieldWrap
        :changed="showChanged ? meta.dirty : false"
        :disabled="disabled"
        :flat="flat"
        :hide-error="props.hideError"
        :label="props.label"
        :name="props.name"
        :vertical="props.vertical"
    >
        <input
            :id="name"
            :value="value"
            :name="name"
            :type="type"
            :disabled="disabled"
            :class="{ input: true, flat: props.flat }"
            @input="handleChange"
            @blur="handleBlur"
        />
    </FieldWrap>
</template>

<style lang="postcss" scoped>
.input {
    flex: 1;
    width: 100%; /* Needed for vertical (flex-direction: column, align-items: flex-start) */
    height: 2rem;
    padding: 0.5rem 1rem;
    border: 1px solid currentcolor;
    border-radius: 4px;
    font: inherit;
    line-height: 1;
    text-overflow: ellipsis;
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

/* Hides the arrow buttons on number input
Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* Must use vendor prefix due to Safari */
    -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
    margin: 0;
}

/* Firefox */
input[type='number'] {
    appearance: textfield;
}
</style>
