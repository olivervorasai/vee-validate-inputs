<script setup lang="ts">
import { useField } from "vee-validate";

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
        label: "",
        showChanged: false,
        vertical: false,
    }
);

const { value, handleBlur, handleChange, meta } = useField<string>(props.name);
</script>

<template>
    <textarea
        :id="name"
        :value="value"
        :name="name"
        :disabled="disabled"
        :rows="height"
        @input="handleChange"
        @blur="handleBlur"
    ></textarea>
</template>
