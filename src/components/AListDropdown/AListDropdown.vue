<script lang="ts" setup>
import AListDropdownLoading from './AListDropdownLoading.vue'
import ACustomScrollbar from '../ACustomScrollbar/ACustomScrollbar.vue'
import { useEventListener } from '@vueuse/core'
import { ref } from 'vue'
const props = withDefaults(
  defineProps<{ items: any[]; isLoading?: boolean }>(),
  {
    isLoading: false,
  }
)
const emits = defineEmits<{ (e: 'selectItem', item: any): void }>()
const focusIdx = ref()
useEventListener('keyup', (e) => {
  if (e.code === 'ArrowDown') {
    if (focusIdx.value >= props.items.length - 1) {
      focusIdx.value = props.items.length - 1
    } else {
      if (focusIdx.value === undefined) focusIdx.value = 0
      else focusIdx.value++
    }
  }
  if (e.code === 'ArrowUp') {
    if (focusIdx.value <= 0) {
      focusIdx.value = 0
    } else {
      if (focusIdx.value === undefined) focusIdx.value = 0
      else focusIdx.value--
    }
  }
  if (e.code === 'Enter') {
    if (focusIdx.value >= 0) {
      emits('selectItem', props.items[focusIdx.value])
    }
  }
})
</script>

<template>
  <div class="app-list-dropdown app-card">
    <AListDropdownLoading v-if="isLoading" />
    <template v-else>
      <ACustomScrollbar v-if="items.length" class="app-list-dropdown__items">
        <a
          v-for="(item, idx) in items"
          :key="item.uuid"
          href="javascript:void(0)"
          class="app-list-dropdown__item"
          :class="{ focus: focusIdx === idx }"
          @click.prevent="$emit('selectItem', item)"
        >
          <slot name="item" v-bind="{ item }" />
        </a>
      </ACustomScrollbar>
      <div v-else>
        <slot name="empty">Nothing found</slot>
      </div>
    </template>
  </div>
</template>

<style lang="postcss">
.app-list-dropdown {
  @apply min-h-0 p-4 w-[260px] max-h-[320px] flex flex-col items-stretch shadow-hover pr-3;
  &__item {
    @apply block py-1 pl-3 text-grey-500 hover:text-blue-400;
    &.focus {
      @apply text-blue-400 !important;
    }
  }
  &__items {
  }
}
</style>
