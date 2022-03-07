<script lang="ts" setup>
import { ref } from 'vue'
import svgCheckmark from '../../assets/icons/checkmark.svg?component'
const isActive = ref(false)
const props = withDefaults(defineProps<{ active: boolean }>(), {
  active: false,
})
const emits = defineEmits<{ (e: 'update:active', active: boolean): void }>()
const toggle = () => {
  emits('update:active', !props.active)
}
defineExpose(['isActive', 'toggle'])
</script>

<template>
  <a
    class="app-checkbox"
    href="javascript:void(0)"
    :class="{ active: props.active }"
    @click.prevent="toggle"
  >
    <svgCheckmark v-if="props.active" width="6" />
  </a>
</template>

<style lang="postcss">
.app-checkbox {
  @apply w-3.5 h-3.5 flex-center rounded-full border border-grey-800 transition-colors;
  &.active {
    @apply border-blue-400 bg-blue-400 text-white;
  }
}
</style>
