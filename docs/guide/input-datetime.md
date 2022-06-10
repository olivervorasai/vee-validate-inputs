# InputDatetime

`InputDatetime` can take the place of text related `<input>` elements that are of the type `date`, `datetime-local` and `time` vee-validate form.

```vue
<script setup>
import '/node_modules/@olivervorasai/vee-validate-inputs/dist/style.css';
import { useForm } from 'vee-validate';
import { InputDatetime } from '@olivervorasai/vee-validate-inputs';

const { handleSubmit } = useForm({
    initialValues: {
        birthday: '2030-12-31',
    },
});
</script>

<template>
    <form @submit="handleSubmit">
        <InputDatetime label="Birthday" name="birthday" type="date" />
    </form>
</template>
```

<script setup>
import '../../src/assets/css/colors.css';
import '../../src/assets/css/shadows.css';
import '../../src/assets/css/transitions.css';
import '../../src/assets/css/base.css';

import { onMounted } from 'vue';
import { useForm } from "vee-validate";
import InputDatetime from '../../src/components/inputs/InputDatetime.vue';

const { setFieldValue } = useForm({
    initialValues: {
        birthdayBase: "2030-12-31",
        birthdayDisabled: "2030-12-31",
        birthdayChanged: "2030-12-31",
        birthdayVertical: "2030-12-31",
        birthdayError: "2030-12-31",
        birthdayFlat: "2030-12-31",
        birthdayDatetime: "2030-12-31T08:25:00",
        birthdayTime: "08:25",
    },
    validationSchema: {
        birthdayError: (value) => !!value ? true : 'Birthday is required',
    }
});

onMounted(() => {
    setFieldValue('birthdayChanged', '2035-11-25');
    setFieldValue('birthdayError', '');
});
</script>

## Various States

### Base

```html
<InputDatetime label="Birthday" name="birthday" type="date" />
```

<InputDatetime label="Birthday" name="birthdayBase" type="date" />

### Disabled

```html
<InputDatetime label="Birthday" name="birthday" type="date" disabled />
```

<InputDatetime label="Birthday" name="birthdayDisabled" type="date" disabled />

### Changed

```html
<InputDatetime label="Birthday" name="birthday" type="date" show-changed />
```

<InputDatetime label="Birthday" name="birthdayChanged" type="date" show-changed />

### Vertical

```html
<InputDatetime label="Birthday" name="birthday" type="date" vertical />
```

<InputDatetime label="Birthday" name="birthdayVertical" type="date" vertical />

### Errored

```html
<InputDatetime label="Birthday" name="birthday" type="date" />
```

<InputDatetime label="Birthday" name="birthdayError" type="date" />

## Built-in Custom Style

### Flat style

```html
<InputDatetime label="Birthday" name="birthday" type="date" flat />
```

<InputDatetime label="Birthday" name="birthdayFlat" type="date" flat />

## Types

`InputDatetime` is designed to be used with all `date` and `time` types. There is no visual different between these types.

```html
<InputDatetime label="Birthday" name="birthday" type="datetime-local" />
```

<InputDatetime label="Birthday" name="birthdayDatetime" type="datetime-local" />

<br />

```html
<InputDatetime label="Birthday" name="birthday" type="time" />
```

<InputDatetime label="Birthday" name="birthdayTime" type="time" />
