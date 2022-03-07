<script lang="ts" setup>
import AInput from '../AInput/AInput.vue'
import svgSearch from '@/assets/icons/search.svg?component'
import svgClose from '@/assets/icons/close_round.svg?component'
const props = withDefaults(
  defineProps<{ placeholder?: string; modelValue?: string }>(),
  { placeholder: 'Search' }
)
const emits = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
const clear = () => {
  emits('update:modelValue', '')
}
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<template>
  <div class="search-input">
    <svgSearch width="15" class="search-input__svg-search" />
    <AInput
      v-bind="$attrs"
      :modelValue="modelValue"
      class="search-input__input"
      :showError="false"
      :placeholder="placeholder"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <a
      href="javascript:void(0)"
      class="search-input__svg-clear"
      @click.prevent="clear"
    >
      <svgClose v-if="modelValue" width="17" />
    </a>
  </div>
</template>

<style lang="postcss">
.search-input {
  @apply relative hover:shadow-hover transition-shadow;
  &__svg {
    &-search {
      @apply text-grey-500  absolute left-4 top-1/2 transform -translate-y-1/2 z-10;
    }
    &-clear {
      @apply text-grey-500 active:text-grey-800 absolute right-3 top-1/2 transform -translate-y-1/2 z-10;
    }
  }
  &__input {
    @apply pl-10 w-[260px] h-10 max-w-full !important;
  }
}
</style>
