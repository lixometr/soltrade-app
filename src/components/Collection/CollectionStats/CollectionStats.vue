<script lang="ts" setup>
import { useCollectionStore } from '@/store/collection'
import { computed } from 'vue'

const collectionStore = useCollectionStore()
const collection = computed(() => collectionStore.collection)
interface CollectionStatsItem {
  name: string
  value: string
  difference: string
  success: boolean
}
const items = computed(() => {
  let listedPercent = 0
  const listedCount = collectionStore.listedCount
  const totalItems = collection.value.totalItems
  if (totalItems) {
    listedPercent = (listedCount / totalItems) * 100
    listedPercent = Math.round(listedPercent)
  }
  return [
    !!totalItems && {
      name: 'Total items',
      value: totalItems,
    },
    {
      name: 'Total listed',
      value: listedCount,
      difference: '-10%',
      success: false,
    },
    !!collection.value.totalItems && {
      name: 'Listed %',
      value: listedPercent + ' %',
    },
    {
      name: 'Total volume',
      value: collectionStore.totalVolume + ' SOL',
    },
    {
      name: '24h volume',
      value: '3 000 SOL',
      difference: '+10%',
      success: true,
    },
    {
      name: 'Floor range',
      value: '5-10 SOL',
    },
  ].filter(Boolean) as Array<CollectionStatsItem>
})
</script>

<template>
  <div class="app-card collection-stats">
    <div class="collection-stats-item" v-for="(item, idx) in items" :key="idx">
      <div class="collection-stats-item__name">{{ item.name }}</div>
      <div class="collection-stats-item__value">
        <span>{{ item.value }}</span>
        <span
          v-if="item.difference"
          class="collection-stats-item__value-difference"
          :class="{ success: item.success }"
          >{{ item.difference }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.collection-stats {
  @apply h-[100px] flex-y-center justify-around mb-6;
  &-item {
    @apply text-center flex-y-center flex-col;
    &__name {
      @apply text-grey-300 mb-1.5;
    }
    &__value {
      @apply text-white text-base relative leading-[1];
      &-difference {
        @apply text-xs text-orange absolute -bottom-0.5 -right-1 transform translate-x-full;
        &.success {
          @apply text-green;
        }
      }
    }
  }
}
</style>
