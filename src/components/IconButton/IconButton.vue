<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    icon?: object | string
    iconSize?: number | string
    color?: string
    disabled?: boolean
    active?: boolean
  }>(),
  { iconSize: 12, disabled: false }
)
</script>

<template>
  <a
    href="javascript:void(0)"
    v-bind="$attrs"
    class="icon-button"
    :class="{ disabled, active }"
  >
    <slot>
      <component :is="icon" :width="iconSize" />
    </slot>
  </a>
</template>

<style lang="postcss">
.icon-button {
  @apply w-10 h-10 bg-white border border-blue-200 text-grey-300 rounded flex-center 
    hover:border-blue-400 hover:text-blue-400 active:text-blue-600 active:border-blue-600 
    transition-colors;
  &.active {
    @apply text-blue-400 border-blue-400;
  }
  &.disabled {
    @apply text-opacity-50 pointer-events-none;
  }
}
</style>
