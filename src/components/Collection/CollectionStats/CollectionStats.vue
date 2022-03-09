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
  const volumesDifference = collection.value.volumesDifference
  const listedDifference = collection.value.listedCountDifference
  const floorDifference = collection.value.floorDifference
  return [
    {
      name: 'Floor price',
      value: collectionStore.floorPrice + ' SOL',
      difference:
        floorDifference &&
        `${floorDifference > 0 ? '+' : ''}${floorDifference}%`,
      success: floorDifference && floorDifference > 0,
    },
    !!collection.value.floorRange24h && {
      name: 'Floor range 24h',
      value: `${collection.value.floorRange24h.join('-')} SOL`,
    },
    !!totalItems && {
      name: 'Total items',
      value: totalItems,
    },
    {
      name: 'Listed items',
      value: listedCount,
      difference:
        listedDifference &&
        `${listedDifference > 0 ? '+' : ''}${listedDifference}%`,
      success: listedDifference && listedDifference > 0,
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
      name: 'Volume 24h',
      value: `${collection.value.volumes24h} SOL`,
      difference:
        volumesDifference &&
        `${volumesDifference > 0 ? '+' : ''}${volumesDifference} %`,
      success: volumesDifference && volumesDifference > 0,
    },
  ].filter(Boolean) as Array<CollectionStatsItem>
})
</script>

<template>
  <div class="app-card collection-stats">
    <div v-for="(item, idx) in items" :key="idx" class="collection-stats-item">
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
