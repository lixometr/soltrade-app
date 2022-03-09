<script lang="ts" setup>
import { toPlural, pluralize } from '@/helpers/pluralize'
import { computed } from '@vue/runtime-core'
import AModalContent from '../Modal/AModalContent.vue'
import AButton from '../AButton/AButton.vue'
import { emit } from 'process'
import { useEventListener } from '@vueuse/core'
const props = withDefaults(
  defineProps<{
    title?: string
    text: string
    cancelText?: string
    confirmText?: string
    confirm: () => void
    cancel?: () => void
  }>(),
  {
    title: 'Confirm',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    confirm: () => {
      //
    },
    cancel: () => {
      //
    },
  }
)
const emits = defineEmits<{ (e: 'close'): void }>()
const onCancel = () => {
  props.cancel()
  emits('close')
}
const onConfirm = () => {
  props.confirm()
  emits('close')
}
useEventListener('keyup', (e: KeyboardEvent) => {
  // enter
  if (e.keyCode === 13) {
    onConfirm()
  }
  // escape
  if (e.keyCode === 27) {
    onCancel()
  }
})
</script>

<template>
  <AModalContent
    class="confirm-modal"
    :title="title"
    actionsClass="space-x-5"
    :showClose="false"
    @close="onCancel"
  >
    <template #default>
      {{ text }}
    </template>
    <template #actions>
      <AButton type="blue" :text="cancelText" @click="onCancel" />
      <AButton
        type="green"
        :text="confirmText"
        class="confirm-modal__button"
        @click="onConfirm"
      />
    </template>
  </AModalContent>
</template>

<style lang="postcss">
.confirm-modal {
  @apply w-[420px];
  &__button.app-button {
    @apply bg-green;
  }
}
</style>
