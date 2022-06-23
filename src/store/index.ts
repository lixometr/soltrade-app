import { defineStore } from 'pinia'
import { createPinia } from 'pinia'
import router from '@/routes/router'
import { computed, markRaw, toRef, watch } from 'vue'
export const pinia = createPinia()

export const useMainStore = defineStore('main', {
  state: () => ({
    twitterLink: '#',
    discordLink: '#',
    commission: 1,
    feeCollector: '6oXVEAK7r8t1p4ZRHjpRyKHPiVFLe48Um8jT9tD29or1',
  }),
  actions: {},
})
