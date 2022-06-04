<script setup lang="ts">
import { ErrorMessage } from 'vee-validate';

const props = withDefaults(
    defineProps<{
        changed?: boolean;
        disabled?: boolean;
        flat?: boolean;
        hideError?: boolean;
        label?: string;
        name?: string;
        reverseLabel?: boolean;
        vertical?: boolean;
    }>(),
    {
        changed: false,
        disabled: false,
        flat: false,
        hideError: false,
        label: '',
        name: '',
        reverseLabel: false,
        vertical: false,
    }
);
</script>

<template>
    <div :class="['field-wrap', { disabled: props.disabled }]">
        <div
            :class="['content', { flat: props.flat, vertical: props.vertical }]"
        >
            <label
                :for="props.name"
                :class="['label', { changed: props.changed }]"
                :style="{ order: props.reverseLabel ? 1 : 0 }"
            >
                {{ props.label }}
            </label>
            <slot></slot>
        </div>

        <transition name="slide-down" mode="out-in">
            <ErrorMessage
                v-if="props.name && !props.hideError"
                :name="props.name"
                class="error-message"
            />
        </transition>
    </div>
</template>

<style lang="postcss" scoped>

.field-wrap {
    &.disabled {
        opacity: 0.5;
    }
}
.content {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    &.vertical {
        flex-direction: column;
        align-items: flex-start;
    }
}
.label {
    flex: none;
    width: var(--field-wrap-width, 9rem);
    font-weight: var(--font-weight-bold);
    line-height: 1;
    /* Change indicator */
    &::after {
        content: '';
        display: block;
        width: 4px;
        border-radius: 2px;
        position: absolute;
        top: 1px;
        bottom: 0;
        left: -10px;
        transform: scaleY(0);
        transition: var(--transition-fast);
        background-color: var(--color-changed);
    }
    &.changed {
        &::after {
            transform: scaleY(1);
        }
    }
}
.error-message {
    display: block;
    text-align: right;
    color: var(--color-error);
}
/* Custom styles */
.flat {
    transition: var(--transition-basic);
    border-bottom: 1px solid var(--color-gray-light);
    &:focus-within {
        border-color: var(--color-accent);
    }
}
</style>
