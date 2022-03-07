<script lang="ts" setup>
import CollectionSidebar from '../CollectionSidebar/CollectionSidebar.vue'
import CollectionCharts from '../CollectionCharts/CollectionCharts.vue'
</script>

<template>
  <div class="collection-trade">
    <CollectionSidebar />
    <CollectionCharts />
  </div>
</template>

<style lang="postcss">
.collection-trade {
  @apply flex space-x-10;  
}
</style>
