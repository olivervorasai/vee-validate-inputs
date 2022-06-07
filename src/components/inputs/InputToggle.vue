<script setup lang="ts">
import { useField } from 'vee-validate';

import FieldWrap from './FieldWrap.vue';

const props = withDefaults(
    defineProps<{
        disabled?: boolean;
        label?: string;
        name: string;
        options: { label: string; value: string }[];
        showChanged?: boolean;
        vertical?: boolean;
    }>(),
    {
        disabled: false,
        label: '',
        showChanged: false,
        vertical: false,
    }
);

const { value, meta, handleChange } = useField<string>(props.name);
</script>

<template>
    <FieldWrap
        :changed="showChanged ? meta.dirty : false"
        :label="label"
        :name="name"
        :vertical="vertical"
    >
        <div class="input-wrap">
            <div
                v-for="(option, index) in props.options"
                :key="`${name}-${option.value}-${index}`"
                :class="['toggle', { selected: option.value === value }]"
                role="radio"
                tabindex="0"
                @click="!props.disabled ? handleChange(option.value) : () => {}"
                @keydown.enter="
                    !props.disabled ? handleChange(option.value) : () => {}
                "
            >
                {{ option.label }}
            </div>
        </div>
    </FieldWrap>
</template>

<style lang="postcss" scoped>
.textarea-wrap-container {
    width: 100%;
}

.input-wrap {
    display: flex;
    align-items: center;
    text-align: center;
}

.toggle {
    cursor: pointer;
    padding: 0.5rem 1rem;
    user-select: none;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: var(--v-inputs-color-gray-light);
    background-color: white;

    &:first-child {
        border-left-width: 1px;
        border-radius: 0.25rem 0 0 0.25rem;
    }

    &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
    }

    &:hover {
        background-color: var(--v-inputs-color-gray-light);
    }

    &.selected {
        border-color: var(--v-inputs-color-blue-dark);
        background-color: var(--v-inputs-color-blue-dark);
        color: white;
    }
}
</style>
