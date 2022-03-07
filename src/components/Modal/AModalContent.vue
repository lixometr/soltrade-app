<script lang="ts" setup>
import svgClose from '@/assets/icons/close.svg?component'

const props = withDefaults(
  defineProps<{
    title: string
    type?: 'div' | 'form'
    actionsClass?: any
    headerClass?: any
    showClose?: boolean
  }>(),
  { type: 'div', showClose: true }
)
defineEmits<{ (e: 'close'): void }>()
</script>

<template>
  <component :is="type" class="app-modal-content">
    <div class="app-modal-header" :class="headerClass">
      <div class="h2">{{ title }}</div>
      <a
        v-if="showClose"
        href="javascript:void(0)"
        class="active:text-grey-500 transition-colors"
        @click.prevent="$emit('close')"
      >
        <svgClose width="16" />
      </a>
    </div>
    <slot />
    <div v-if="$slots.actions" class="app-modal-actions" :class="actionsClass">
      <slot name="actions" />
    </div>
  </component>
</template>

<style lang="postcss">
.app-modal-content {
  @apply block;
}
.app-modal-header {
  @apply flex-y-center justify-between mb-6;
}
.app-modal-actions {
  @apply flex-y-center justify-end mt-10;
}
</style>
