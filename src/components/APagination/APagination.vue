<script lang="ts" setup>
import { computed } from 'vue'
import svgArrowRightEnd from '@/assets/icons/arrow_right_end.svg?component'
import svgArrowRight from '@/assets/icons/arrow_right.svg?component'
import svgArrowLeftEnd from '@/assets/icons/arrow_left_end.svg?component'
import svgArrowLeft from '@/assets/icons/arrow_left.svg?component'
const props = withDefaults(
  defineProps<{
    page: number
    totalPages: number
    rangeSize?: number
  }>(),
  { rangeSize: 1 }
)
const emits = defineEmits<{ (e: 'update:page', value: number): void }>()
const pageModel = computed({
  get: () => props.page,
  set: (val) => emits('update:page', val),
})
const pagination = computed(() => {
  const res: Array<number | null> = []
  const minPaginationElems = 5 + props.rangeSize * 2
  let rangeStart =
    props.totalPages <= minPaginationElems ? 1 : props.page - props.rangeSize
  let rangeEnd =
    props.totalPages <= minPaginationElems
      ? props.totalPages
      : props.page + props.rangeSize
  rangeEnd = rangeEnd > props.totalPages ? props.totalPages : rangeEnd
  rangeStart = rangeStart < 1 ? 1 : rangeStart
  if (props.totalPages > minPaginationElems) {
    const isStartBoundaryReached = rangeStart - 1 < 3
    const isEndBoundaryReached = props.totalPages - rangeEnd < 3
    if (isStartBoundaryReached) {
      rangeEnd = minPaginationElems - 2
      for (let i = 1; i < rangeStart; i++) {
        res.push(i)
      }
    } else {
      res.push(1)
      res.push(null)
    }
    if (isEndBoundaryReached) {
      rangeStart = props.totalPages - (minPaginationElems - 3)
      for (let i = rangeStart; i <= props.totalPages; i++) {
        res.push(i)
      }
    } else {
      for (let i = rangeStart; i <= rangeEnd; i++) {
        res.push(i)
      }
      res.push(null)
      res.push(props.totalPages)
    }
  } else {
    for (let i = rangeStart; i <= rangeEnd; i++) {
      res.push(i)
    }
  }
  return res
})
const goToPage = (page: number) => {
  emits('update:page', page)
}
const goToStart = () => {
  emits('update:page', 1)
}
const goToEnd = () => {
  emits('update:page', props.totalPages)
}
const prevPage = () => {
  if (props.page < 2) return
  emits('update:page', props.page - 1)
}
const nextPage = () => {
  if (props.page >= props.totalPages) return
  emits('update:page', props.page + 1)
}
</script>

<template>
  <div class="app-pagination">
    <a
      class="app-pagination__arrow app-pagination__arrow-left-end"
      href="javascript:void(0)"
      :class="{ disabled: page < 2 }"
      @click="goToStart"
    >
      <svgArrowLeftEnd width="8" />
    </a>
    <a
      class="app-pagination__arrow app-pagination__arrow-left"
      href="javascript:void(0)"
      :class="{ disabled: page < 2 }"
      @click.prevent="prevPage"
    >
      <svgArrowLeft width="5" />
    </a>
    <div
      v-for="(item, idx) in pagination"
      :key="idx"
      class="app-pagination__item"
    >
      <span v-if="!item" class="app-pagination__empty">...</span>
      <a
        v-else
        href="javscript:void(0)"
        class="app-pagination__page"
        :class="{ active: page === item }"
        @click.prevent="goToPage(item)"
      >
        {{ item }}</a
      >
    </div>
    <a
      class="app-pagination__arrow app-pagination__arrow-right"
      href="javascript:void(0)"
      :class="{ disabled: page >= totalPages }"
      @click="nextPage"
    >
      <svgArrowRight width="5" />
    </a>
    <a
      class="app-pagination__arrow app-pagination__arrow-right-end"
      href="javascript:void(0)"
      :class="{ disabled: page >= totalPages }"
      @click.prevent="goToEnd"
    >
      <svgArrowRightEnd width="8" />
    </a>
  </div>
</template>

<style lang="postcss">
.app-pagination {
  @apply flex-y-center space-x-2;
  &__item {
    @apply text-base text-grey-300 font-semibold 
      hover:text-grey-500 active:text-grey-800 transition-all select-none;
  }
  &__empty {
    @apply px-2 cursor-default;
  }
  &__page {
    @apply px-2;
    &.active {
      @apply text-grey-800;
    }
  }
  &__arrow {
    @apply select-none px-2 hover:text-grey-500 active:text-grey-300;
    &.disabled {
      @apply cursor-default text-grey-300;
    }
  }
}
</style>
