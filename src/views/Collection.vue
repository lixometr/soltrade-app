<script lang="ts" setup>
import { useCollectionStore } from '@/store/collection'
import { computed } from 'vue-demi'
import { useRoute } from 'vue-router'
import CollectionInfo from '@/components/Collection/CollectionInfo/CollectionInfo.vue'
import CollectionStats from '@/components/Collection/CollectionStats/CollectionStats.vue'
import CollectionTrade from '@/components/Collection/CollectionTrade/CollectionTrade.vue'
const route = useRoute()
const collectionStore = useCollectionStore()
collectionStore.$reset()
collectionStore.init()
collectionStore.collectionName = route.params.collectionName as string
collectionStore.fetchCollection()
const collection = computed(() => collectionStore.collection)
</script>

<template>
  <div>
    <div class="container">
      <div v-if="!collectionStore.isLoading">
        <CollectionInfo />
        <CollectionStats />
        <CollectionTrade />
      </div>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<style lang="postcss"></style>
