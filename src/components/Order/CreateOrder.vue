<script lang="ts" setup>
import { useApiOrder } from '@/api/order/order.api'
import { ref } from 'vue'
import AInput from '../AInput/AInput.vue'
import AButton from '../AButton/AButton.vue'
import { useToast } from '@/helpers/composables/useToast'
import { useOrderStore } from '@/store/order'
const limit = ref('')
const collectionName = ref('')
const orderStore = useOrderStore()
const createOrder = async () => {
  await orderStore.create({
    limit: parseFloat(limit.value),
    collectionName: collectionName.value,
  })
}
</script>

<template>
  <div>
    <div class="flex items-end space-x-3">
      <AInput
        label="Collection Name"
        :showError="false"
        v-model="collectionName"
      />
      <AInput label="Limit" class="!w-16" :showError="false" v-model="limit" />
      <AButton
        type="primary"
        text="Create"
        class="!h-12"
        @click="createOrder"
      />
    </div>
  </div>
</template>

<style lang="postcss"></style>
