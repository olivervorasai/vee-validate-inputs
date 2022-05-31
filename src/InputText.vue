<script setup lang="ts">
import { useField } from "vee-validate";

const props = withDefaults(
    defineProps<{
        disabled?: boolean;
        label?: string;
        name: string;
        showChanged?: boolean;
        type: string;
        vertical?: boolean;
    }>(),
    {
        disabled: false,
        label: "",
        showChanged: false,
        vertical: false,
    }
);

const { value, handleBlur, handleChange, meta } = useField<string>(props.name);
</script>

<template>
    <input
        :id="name"
        :value="value"
        :name="name"
        :type="type"
        :disabled="disabled"
        @input="handleChange"
        @blur="handleBlur"
    />
</template>
