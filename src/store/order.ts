import { useApiOrder } from './../api/order/order.api'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    items: [],
    isLoading: false,
  }),
  actions: {
    async fetchItems() {
      this.isLoading = true
      this.items = await useApiOrder.findAll({ toast: { error: true } }).exec()
      this.isLoading = false
    },
    async removeItem(id: string) {
      await useApiOrder
        .remove({ toast: { error: true, success: () => 'Removed' } })
        .exec({ id })
      await this.fetchItems()
    },
    async create({
      limit,
      collectionName,
    }: {
      limit: number
      collectionName: string
    }) {
      await useApiOrder
        .create({ toast: { error: true, success: () => 'Order Created' } })
        .exec({
          limit,
          collectionName: collectionName,
        })
      await this.fetchItems()
    },
  },
})
