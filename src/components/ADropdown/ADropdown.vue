<script lang="ts" setup>
import svgArrowBottom from '@/assets/icons/arrow_bottom.svg?component'
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'
import type { IDropdownItem } from './dropdown-item.interface'
const props = withDefaults(
  defineProps<{ items: IDropdownItem[]; active?: number | string }>(),
  {}
)
const emits =
  defineEmits<{ (e: 'update:active', value: number | string): void }>()
const activeItem = computed(() => {
  if (props.active) {
    const itemInArr = props.items.find((item) => item.value === props.active)
    if (itemInArr) return itemInArr
    if (typeof props.active === 'number') {
      return props.items[props.active]
    }
  }

  return props.items[0]
})
const isOpen = ref(false)
const open = () => {
  isOpen.value = true
}
const close = () => {
  isOpen.value = false
}
const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}
const selectItem = (item: IDropdownItem, idx: number) => {
  if (item.value) emits('update:active', item?.value)
  emits('update:active', idx)
  close()
}
const target = ref()
onClickOutside(target, () => {
  close()
})
</script>

<template>
  <div ref="target" class="app-dropdown" :class="{ open: isOpen }">
    <a
      href="javascript:void(0)"
      class="app-dropdown-header"
      @click.prevent="toggle"
    >
      <span>{{ activeItem?.name }}</span>
      <svgArrowBottom width="8" />
    </a>
    <div v-if="isOpen" class="app-dropdown-content">
      <a
        v-for="(item, idx) in items"
        :key="idx"
        href="javascript:void(0)"
        class="app-dropdown-item"
        @click="selectItem(item, idx)"
      >
        <component :is="item.icon" v-if="item.icon" width="10" />
        <span>{{ item.name }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="postcss">
.app-dropdown {
  @apply relative text-xs;
  &-header {
    @apply py-1 px-3 inline-flex items-center space-x-2 bg-white border border-blue-200 rounded cursor-pointer
        hover:shadow-hover transition-all active:bg-light max-w-[300px];
    svg {
      @apply flex-shrink-0 transition-all;
    }
  }
  &-content {
    @apply absolute -bottom-2 transform translate-y-full 
            shadow-hover rounded min-w-[100px] max-w-[300px] py-1.5 bg-white;
  }
  &-item {
    @apply hover:text-blue-400 flex-y-center space-x-2.5 
            px-3.5 py-1.5 transition-colors;
  }
  &.open & {
    &-header {
      svg {
        @apply transform rotate-180;
      }
    }
  }
}
</style>
