<script lang="ts" setup>
import { ref } from 'vue'
import CollectionSidebarToggler from './CollectionSidebarToggler.vue'
import CollectionSidebarBuy from './CollectionSidebarBuy.vue'
import CollectionSidebarSell from '../CollectionSidebarSell/CollectionSidebarSell.vue'

const activeTab = ref('buy')
</script>

<template>
  <div class="collection-sidebar app-card">
    <div class="sticky top-10">
      <CollectionSidebarToggler class="mb-5" v-model="activeTab" />
      <CollectionSidebarBuy v-if="activeTab === 'buy'" />
      <CollectionSidebarSell v-if="activeTab === 'sell'" />
    </div>
  </div>
</template>

<style lang="postcss">
.collection-sidebar {
  @apply w-[300px] min-h-[300px] flex-shrink-0 px-4 pt-10;
  &__item {
    @apply flex-y-center justify-between text-sm;
    &-name {
      @apply text-grey-200;
    }
    &-value {
      @apply text-white;
    }
  }
}
</style>
