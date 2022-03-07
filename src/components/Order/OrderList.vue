<script lang="ts" setup>
import { useApiOrder } from '@/api/order/order.api'
import { useOrderStore } from '@/store/order'
import { computed, ref } from 'vue'
import AButton from '../AButton/AButton.vue'
import svgRemove from '@/assets/icons/delete.svg?component'
import IconButton from '../IconButton/IconButton.vue'
const columns = ref([
  {
    label: 'Collection Name',
    field: 'collectionName',
  },
  {
    label: 'Limit',
    field: 'limit',
  },
  {
    label: 'Completed',
    field: 'done',
  },
  {
    label: 'Actions',
    field: 'actions',
  },
])
const orderStore = useOrderStore()
const data = computed(() => orderStore.items)
const isLoading = computed(() => orderStore.isLoading)
const fetchData = async () => {
  await orderStore.fetchItems()
}
const removeItem = async (id: string) => {
  await orderStore.removeItem(id)
}
fetchData()
</script>

<template>
  <div></div>
</template>

<style lang="postcss"></style>
