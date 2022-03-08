import { ICollectionSocketDto } from './../modules/collection/collection-socket.dto'
import { ICollection } from './../modules/collection/collection.interface'
import { useApiCollection } from './../api/collection/collection.api'
import { defineStore } from 'pinia'
import useSocket from '@/helpers/composables/useSocket/useSocket'
import { onBeforeUnmount, onUnmounted } from 'vue-demi'
export const useCollectionStore = defineStore('collection', {
  state: () => ({
    collection: {} as ICollection,
    collectionName: '',
    isLoading: false,
  }),
  getters: {
    floorPrice: (state) => {
      if (!state.collection.floor) return 0
      return state.collection.floor[state.collection.floor.length - 1].value
    },
    listedCount: (state) => {
      if (!state.collection.listedCount) return 0
      return state.collection.listedCount[
        state.collection.listedCount.length - 1
      ].value
    },
    totalVolume: (state) => {
      if (!state.collection.volumes) return 0
      return state.collection.volumes[state.collection.volumes.length - 1].value
    },
  },
  actions: {
    onCollectionSocket(data: ICollectionSocketDto) {
      if (data.collectionName !== this.collectionName) return
      if (data.floor) {
        // this.collection = {
        //   ...this.collection,
        //   floor: [...this.collection.floor, data.floor],
        // }
        this.collection.floor.push(data.floor)
      }
      if (data.volumes) {
        this.collection.volumes.push(data.volumes)
      }
      if (data.listedCount) {
        this.collection.listedCount.push(data.listedCount)
      }
    },
    init() {
      const { socket, onConnect } = useSocket()
      onConnect(() => {
        socket.emit('track-subscribe', [this.collectionName])
      })
      socket.on('track-collection', this.onCollectionSocket)

      onBeforeUnmount(() => {
        socket.emit('track-unsubscribe', [this.collectionName])
        socket.off('track-collection', this.onCollectionSocket)
      })
    },
    async fetchCollection() {
      this.isLoading = true
      const collection = await useApiCollection
        .find({ toast: { error: true } })
        .exec({ collectionName: this.collectionName })
      this.collection = collection
      this.isLoading = false
    },
  },
})
