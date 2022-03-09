<script lang="ts" setup>
import svgTriangleUp from '@/assets/icons/triangle_up.svg?component'
import svgTriangleDown from '@/assets/icons/triangle_down.svg?component'
import { computed } from 'vue-demi'
const props = withDefaults(defineProps<{ success: boolean }>(), {
  success: false,
})
const comp = computed(() => {
  if (props.success) {
    return svgTriangleUp
  }
  return svgTriangleDown
})
</script>

<template>
  <span class="triangle-marker" :class="{ success }">
    <component :is="comp" width="13" />
    <slot />
  </span>
</template>

<style lang="postcss">
.triangle-marker {
  @apply text-orange flex-y-center space-x-1;
  &.success {
    @apply text-green;
  }
}
</style>
