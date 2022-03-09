<script lang="ts" setup>
import { useApiCollection } from '@/api/collection/collection.api'
import type { ICollection } from '@/modules/collection/collection.interface'
import { ref } from 'vue'
import ATable from '../ATable/ATable.vue'
import TriangleMarker from '../TriangleMarker/TriangleMarker.vue'

const items = ref([] as ICollection[])
const isLoading = ref(false)
const fetchPopular = async () => {
  items.value = await useApiCollection
    .findPopular({ toast: { error: true } })
    .exec()
}
fetchPopular()
const cols = [
  {
    name: 'Collection Name',
    key: 'name',
    k: 2,
  },
  {
    name: 'Floor Price',
    key: 'floorPrice',
  },
  {
    name: 'Floor change %',
    key: 'floorChange',
  },
  {
    name: 'Listings change %',
    key: 'listingsChange',
  },
  {
    name: 'Volumes 24h',
    key: 'volumes',
  },
]
</script>

<template>
  <div class="app-card home-popular">
    <h2 class="mb-5">Popular Collections</h2>
    <ATable class="home-popular__table" :items="items" :cols="cols">
      <template #name="{ row }">
        <router-link
          :to="{
            name: 'Collection',
            params: { collectionName: row.collectionName },
          }"
          class="flex-y-center space-x-3 group transition-colors"
        >
          <img
            :src="row.image"
            alt="image"
            class="w-12 h-12 object-cover rounded"
          />
          <span class="text-white font-medium group-hover:text-blue">{{
            row.collectionTitle
          }}</span>
        </router-link>
      </template>
      <template #floorPrice="{ row }">
        {{
          row.floor[row.floor.length - 1] &&
          row.floor[row.floor.length - 1].value
        }}
        SOL
      </template>
      <template #floorChange="{ row }">
        <TriangleMarker :success="row.floorDifference > 0">
          <span> {{ row.floorDifference }}% </span>
        </TriangleMarker>
      </template>
      <template #listingsChange="{ row }">
        <TriangleMarker :success="row.listedCountDifference > 0">
          <span> {{ row.listedCountDifference }}% </span>
        </TriangleMarker>
      </template>
      <template #volumes="{ row }"> {{ row.volumes24h }} SOL</template>
    </ATable>
  </div>
</template>

<style lang="postcss">
.home-popular {
  @apply p-6;
  &__table.app-table {
    @apply -mx-6;
    .app-table-row {
      @apply h-16;
    }
  }
}
</style>
