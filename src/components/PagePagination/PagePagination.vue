<script lang="ts" setup>
import { computed } from 'vue-demi'
import APagination from '../APagination/APagination.vue'
const props = defineProps<{ page: number; totalPages: number }>()
const emits = defineEmits<{ (e: 'update:page', value: number): void }>()
</script>

<template>
  <div class="page-pagination">
    <div class="page-pagination__info h3">
      <span>{{ page }}</span>
      <span class="text-grey-500 text-sm font-normal mx-1">of</span>
      <span>{{ totalPages }}</span>
    </div>
    <APagination
      :page="page"
      :totalPages="totalPages"
      @update:page="$emit('update:page', $event)"
    />
  </div>
</template>

<style lang="postcss">
.page-pagination {
  @apply flex-y-center justify-between mt-8;
  &__info {
    @apply flex items-baseline;
  }
}
</style>
