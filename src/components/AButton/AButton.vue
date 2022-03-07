<script lang="ts" setup>
import { computed } from 'vue'
import ASpinner from '../ASpinner/ASpinner.vue'
const props = withDefaults(
  defineProps<{
    type: 'red' | 'green' | 'blue'
    stroke?: boolean
    text?: string
    component?: string
    disabled?: boolean
    htmlType?: string
    loading?: boolean
  }>(),
  {
    class: () => [],
    type: 'red',
    text: '',
    component: 'button',
    disabled: false,
    stroke: false,
    loading: false,
  }
)

const comp = computed(() => props.component)
const classes = computed(() => [
  props.type,
  props.disabled ? 'disabled' : '',
  props.stroke ? 'stroke' : '',
  props.loading ? 'loading' : '',
])
</script>

<template>
  <component :is="comp" class="app-button" :type="htmlType" :class="classes">
    <ASpinner v-if="loading" />
    <slot v-else>{{ text }}</slot>
  </component>
</template>

<style lang="postcss">
.app-button {
  @apply h-12 px-5 rounded transition-all
    flex-center cursor-pointer space-x-4 text-white filter hover:brightness-90 active:brightness-75
    font-medium text-base;
  background-color: var(--btn-color);

  &[disabled],
  &.disabled {
    @apply pointer-events-none opacity-50;
  }
  &.loading {
    @apply pointer-events-none;
  }
  &.blue {
    --btn-color: theme('colors.blue');
  }
  &.green {
    --btn-color: theme('colors.green');
  }
  &.red {
    --btn-color: theme('colors.red');
  }
  &.stroke {
    @apply border border-blue text-white bg-transparent;
    border-color: var(--btn-color);
    color: var(--btn-color);
  }
}
</style>
