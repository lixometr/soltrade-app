<script lang="ts" setup>
import { computed, ref } from 'vue'
import CollectionSidebarSellItems from './CollectionSidebarSellItems.vue'
import AButton from '@/components/AButton/AButton.vue'
import AInput from '@/components/AInput/AInput.vue'
const chosenItem = ref()
const priceStr = ref()
const price = computed(() =>
  !!parseFloat(priceStr.value) ? parseFloat(priceStr.value) : 0
)
const royalty = computed(() => {
  return 10
})
const infoItems = computed(() => {
  const magicEdenFee = price.value * 0.02
  const royaltyFee = (price.value * royalty.value) / 100
  let receive = price.value - magicEdenFee - royaltyFee
  receive = +receive.toFixed(2)
  return [
    {
      name: 'Magic Eden fee',
      value: '2%',
    },
    {
      name: 'Collection Royalty',
      value: '10%',
    },
    {
      name: 'You will receive',
      value: receive + ' SOL',
    },
  ]
})
const isDisabled = computed(() => {
  return !price.value || !chosenItem.value
})
const reset = () => {
  chosenItem.value = ''
  priceStr.value = ''
}
const sell = () => {
  reset()
}
</script>

<template>
  <div>
    <CollectionSidebarSellItems class="mb-5" v-model="chosenItem" />
    <AInput label="Price to list" v-model="priceStr" />

    <div class="space-y-2 mt-3">
      <div
        class="collection-sidebar__item"
        v-for="(item, idx) in infoItems"
        :key="idx"
      >
        <div class="collection-sidebar__item-name">{{ item.name }}</div>
        <div class="collection-sidebar__item-value">{{ item.value }}</div>
      </div>
    </div>

    <AButton
      class="w-full h-12 mt-4"
      type="red"
      @click="sell"
      :disabled="isDisabled"
      >Sell for {{ price }} SOL</AButton
    >
  </div>
</template>

<style lang="postcss"></style>
