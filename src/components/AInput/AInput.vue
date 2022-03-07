<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    label?: string
    error?: string
    isValid?: boolean | undefined
    disabled?: boolean
    modelValue?: string
    showError?: boolean
    required?: boolean
  }>(),
  {
    isValid: undefined,
    disabled: false,
    showError: false,
    required: false,
  }
)
const emits = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
const inputModel = computed({
  get() {
    return props.modelValue || ''
  },
  set(val: string) {
    emits('update:modelValue', val)
  },
})
</script>
<script lang="ts">
import { computed } from '@vue/runtime-core'

export default {
  inheritAttrs: false,
}
</script>

<template>
  <div
    class="app-input"
    :class="{
      error: isValid === false || !!error,
      valid: isValid === true,
      disabled: props.disabled,
      'show-error': showError,
    }"
  >
    <label v-if="label" class="app-input__label" for=""
      >{{ label }}<span v-if="required && !isValid">*</span></label
    >
    <input
      v-model="inputModel"
      type="text"
      class="app-input__el"
      v-bind="$attrs"
    />
    <div v-if="error && showError" class="app-input__error">{{ error }}</div>
  </div>
</template>

<style lang="postcss">
.app-input {
  @apply relative;

  &__label {
    @apply block mb-1;
  }
  &__el {
    @apply h-10 font-main rounded border border-grey-300 p-3.5 text-sm bg-grey-500 text-white w-full
      outline-none;
    &::placeholder {
      @apply text-grey-300;
    }
  }
  &__error {
    @apply text-xs text-red mt-2;
  }
  &.show-error {
    @apply pb-5;
  }
  &.show-error & {
    &__error {
      @apply absolute bottom-0 left-0;
    }
  }
  &.error & {
    &__label {
      @apply text-red;
    }
    &__el {
      @apply border-red;
    }
  }
  &.valid & {
    &__el {
      @apply border-green;
    }
  }
  &.disabled &,
  &[disabled] & {
    &__el {
      @apply opacity-50;
    }
  }
}
</style>
