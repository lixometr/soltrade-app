<script lang="ts" setup>
import type { ToastOptions } from '@/helpers/composables/useToast/useToast.types'
import { computed } from '@vue/runtime-core'
// import svgSuccess from '@/assets/icons/toast_success.svg?component'
// import svgError from '@/assets/icons/toast_error.svg?component'
// import svgWarning from '@/assets/icons/toast_warning.svg?component'
// import svgInfo from '@/assets/icons/toast_info.svg?component'
import svgClose from '@/assets/icons/close.svg?component'
const props = defineProps<{
  item: ToastOptions
}>()
defineEmits<{ (e: 'remove'): void }>()
// const icon = computed(() => {
//   return
//   const type = props.item.type
//   if (type === 'success') {
//     return svgSuccess
//   } else if (type === 'error') {
//     return svgError
//   } else if (type == 'warning') {
//     return svgWarning
//   } else if (type === 'info') {
//     return svgInfo
//   }
// })
const toastTitle = computed(() => {
  if (props.item.title) return props.item.title
  return `${props.item.type[0].toUpperCase()}${props.item.type.slice(1)}`
})
</script>

<template>
  <div class="toast-item" :class="[item.type]" @click.prevent="$emit('remove')">
    <!-- <div class="toast-item__icon">
      <component :is="icon" width="21" />
    </div> -->
    <div class="pr-2">
      <!-- <div class="toast-item__title h3" v-if="toastTitle">{{ toastTitle }}</div> -->
      <div class="toast-item__description">{{ item.text }}</div>
    </div>
    <a
      href="javascript:void(0)"
      class="toast-item__close"
      @click.prevent="$emit('remove')"
    >
      <svgClose width="9" />
    </a>
  </div>
</template>

<style lang="postcss">
.toast-item {
  @apply relative w-[380px] min-h-[48px] flex-y-center space-x-5 
    px-4 py-2 pr-7 text-white text-sm rounded transition-all duration-300 select-none
      leading-5;

  &__close {
    @apply absolute right-5 top-1/2 transform -translate-y-1/2 select-none;
  }
  &.success {
    @apply bg-green;
  }
  &.error {
    @apply bg-red;
  }
  &.warning {
    @apply bg-orange;
  }
  &.info {
    @apply bg-grey-500;
  }
}
</style>
