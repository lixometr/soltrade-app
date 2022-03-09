<script lang="ts" setup>
import AToggler from '@/components/AToggler/AToggler.vue'
import { computed } from 'vue-demi'
const props = defineProps<{ modelValue: string }>()
const emits = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
const items = [
  {
    name: 'Buy',
    value: 'buy',
  },
  {
    name: 'Sell',
    value: 'sell',
  },
]
const valueModel = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val),
})
</script>

<template>
  <div class="collection-sidebar-toggler">
    <AToggler v-model="valueModel" :items="items" />
  </div>
</template>

<style lang="postcss"></style>
