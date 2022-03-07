<script lang="ts" setup>
import CollectionChartsFloor from './CollectionChartsFloor.vue'
import CollectionChartsVolumes from './CollectionChartsVolumes.vue'
import CollectionChartsListedCount from './CollectionChartsListedCount.vue'
</script>

<template>
  <div class="flex-1">
    <CollectionChartsFloor class="mb-4" />
    <div class="flex space-x-4">
      <CollectionChartsVolumes class="flex-1" />
      <CollectionChartsListedCount class="flex-1" />
    </div>
  </div>
</template>

<style lang="postcss"></style>
