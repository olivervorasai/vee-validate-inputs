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
        type?: 'date' | 'datetime-local' | 'time';
        vertical?: boolean;
    }>(),
    {
        disabled: false,
        flat: false,
        hideError: false,
        label: '',
        showChanged: false,
        type: 'datetime-local',
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
        <input
            :id="props.name"
            :value="value"
            :name="props.name"
            :disabled="props.disabled"
            :type="props.type"
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
    padding: 0.5rem 0 0.5rem 1rem;
    border: 1px solid currentcolor;
    border-radius: 4px;
    font: inherit;
    line-height: 1;

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
