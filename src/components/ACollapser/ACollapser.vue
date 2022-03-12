<script lang="ts" setup>
import { useToggle } from '@vueuse/core'
import svgPlus from '@/assets/icons/plus.svg?component'
import svgMinus from '@/assets/icons/minus.svg?component'
defineProps<{ title: string; content: string }>()
const [isOpen, toggle] = useToggle(false)
</script>

<template>
  <div class="app-collapser" :class="{ open: isOpen }">
    <div class="app-collapser__header" @click="() => toggle()">
      <span>{{ title }} </span>
      <svgMinus width="12" v-if="isOpen" />
      <svgPlus width="12" v-else />
    </div>
    <div class="app-collapser__content" v-if="isOpen">
      <slot name="content"><span v-html="content"></span></slot>
    </div>
  </div>
</template>

<style lang="postcss">
.app-collapser {
  @apply bg-grey-500 rounded max-w-[600px];
  &__header {
    @apply cursor-pointer select-none flex-y-center justify-between px-4 py-3
    text-base text-white hover:bg-grey-300 rounded transition-colors;
  }
  &__content {
    @apply px-4 pb-4 pt-2;
  }
  &.open & {
    &__header {
    }
  }
}
</style>
