<script lang="ts" setup>
import { toastList, useToast } from '@/helpers/composables/useToast/useToast'
import AToastItem from './AToastItem.vue'
const removeItem = (id: number) => {
  const { hide } = useToast()
  hide(id)
}
</script>

<template>
  <div class="toast-container">
    <TransitionGroup name="t-toast" tag="div" class="space-y-5">
      <AToastItem
        v-for="item in toastList"
        :key="item.id"
        :item="item.options"
        @remove="removeItem(item.id)"
      />
    </TransitionGroup>
  </div>
</template>

<style lang="postcss">
.toast-container {
  @apply fixed bottom-7 left-7 z-100;
}
.t-toast-enter-from,
.t-toast-leave-to {
  @apply transform -translate-x-full opacity-0;
}
</style>
