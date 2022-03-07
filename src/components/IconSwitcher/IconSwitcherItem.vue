<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    active?: boolean
    icon?: object | string
    iconSize?: number | string
  }>(),
  { active: false, iconSize: 12 }
)
defineEmits<{ (e: 'update:active', value: boolean): void }>()
</script>

<template>
  <a
    href="javascript:void(0)"
    v-bind="$attrs"
    class="icon-switcher"
    :class="{ active }"
    @click="$emit('update:active', !props.active)"
  >
    <slot>
      <component :is="icon" :width="iconSize" />
    </slot>
  </a>
</template>

<style lang="postcss">
.icon-switcher {
  @apply w-10 h-10 bg-white border border-blue-200 text-grey-300 rounded flex-center hover:shadow-hover;

  &.active {
    @apply border-blue-400 text-blue-400;
  }
}
</style>
