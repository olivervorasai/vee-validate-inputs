<script setup lang="ts">
import { useField } from 'vee-validate';

import FieldWrap from './FieldWrap.vue';

const props = withDefaults(
    defineProps<{
        disabled?: boolean;
        flat?: boolean;
        label?: string;
        name: string;
        showChanged?: boolean;
        type?: 'date' | 'datetime-local' | 'time';
        vertical?: boolean;
    }>(),
    {
        disabled: false,
        flat: false,
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
        :changed="showChanged ? meta.dirty : false"
        :disabled="disabled"
        :flat="flat"
        :label="label"
        :name="name"
        :vertical="vertical"
    >
        <input
            :id="name"
            :value="value"
            :name="name"
            :disabled="disabled"
            :type="type"
            class="input"
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

    &:disabled {
        opacity: 0.5;
    }

    &:focus {
        outline: none;
        box-shadow: var(--v-inputs-shadow-focus);
    }
}
</style>
