<script lang="ts" setup>
import type { MagicEdenItem } from '@/modules/collection/magic-eden-item.interface'
import { computed } from 'vue-demi'
import CollectionSidebarSellItem from './CollectionSidebarSellItem.vue'
import results from './items.json'
import ACustomScrollbar from '../../ACustomScrollbar/ACustomScrollbar.vue'
defineProps<{ modelValue?: string }>()
defineEmits<{ (e: 'update:modelValue', value: string): void }>()
const items = computed(() => {
  return results.results as any as MagicEdenItem[]
})
</script>

<template>
  <div>
    <div class="text-white mb-2">Choose item:</div>
    <ACustomScrollbar
      class="flex flex-wrap -mx-1.5 overflow-auto h-[300px] !pr-1"
    >
      <div class="w-1/2 p-1.5" v-for="(item, idx) in items" :key="idx">
        <CollectionSidebarSellItem
          :item="item"
          :active="item.mintAddress === modelValue"
          @click="$emit('update:modelValue', item.mintAddress)"
        />
      </div>
    </ACustomScrollbar>
  </div>
</template>

<style lang="postcss"></style>
