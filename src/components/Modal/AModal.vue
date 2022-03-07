<script lang="ts" setup>
import { useToggle } from '@vueuse/core'
import { computed, markRaw, ref, shallowRef } from 'vue'
import type { ModalOpenSettings } from './modal-open-settings.interface'
import { useModal } from './useModal'
const [isOpen, toggle] = useToggle()
const { bus, close } = useModal()
const modalComponent = shallowRef()

const modalEl = ref(null)
const defaultModalOptions = {
  closeOnOverlay: true,
}
const modalOptions = ref<ModalOpenSettings>()
bus.on('open', async (opts: ModalOpenSettings) => {
  try {
    modalOptions.value = Object.assign({}, defaultModalOptions, opts)
    const { default: modal } = await import(`../Modals/${opts.name}.vue`)
    modalComponent.value = modal
    toggle(true)
  } catch (err) {
    console.log('Error while opening modal ', err)
  }
})
const modalProps = computed(() => modalOptions.value?.props)
bus.on('close', () => {
  toggle(false)
})
const clickOverlay = () => {
  if (modalOptions.value?.closeOnOverlay) {
    close()
  }
}
</script>

<template>
  <transition name="t-modal">
    <div v-if="isOpen" class="app-modal-wrapper">
      <div class="app-modal-overlay" @click="clickOverlay"></div>
      <div class="app-modal">
        <div class="app-modal-content">
          <component :is="modalComponent" v-bind="modalProps" @close="close" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="postcss">
.app-modal {
  @apply absolute z-20 left-1/2 top-1/2 
  transform -translate-x-1/2 -translate-y-1/2 bg-white rounded p-10;
  &-wrapper {
    @apply fixed inset-0 w-full h-full z-50;
  }
  &-overlay {
    @apply absolute inset-0 z-10 backdrop-filter backdrop-blur-[14px];
    background: rgba(0, 0, 0, 0.5);
  }
}
.t-modal-enter-from,
.t-modal-leave-to {
  .app-modal-overlay {
    @apply backdrop-blur-[14px] opacity-0;
  }
  .app-modal {
    @apply opacity-0;
  }
}
.t-modal-enter-active,
.t-modal-leave-active {
  @apply transition-all duration-300;

  .app-modal-overlay,
  .app-modal {
    @apply transition-all duration-300;
  }
}
</style>
