<script lang="ts" setup>
import type { MagicEdenItem } from '@/modules/collection/magic-eden-item.interface'
import { computed } from 'vue-demi'

const props = withDefaults(
  defineProps<{ item: MagicEdenItem; active: boolean }>(),
  { active: false }
)
const rank = computed(() => {
  return props.item.rarity?.howrare?.rank || props.item.rarity?.moonrank?.rank
})
</script>

<template>
  <div class="collection-sell-item" :class="{ active }">
    <img class="collection-sell-item__image" :src="item.img" alt="image" />
    <div class="collection-sell-item__info">
      <div class="collection-sell-item__title">
        {{ item.title }}
      </div>
      <div class="collection-sell-item__rank" v-if="rank">Rank: {{ rank }}</div>
    </div>
  </div>
</template>

<style lang="postcss">
.collection-sell-item {
  @apply relative overflow-hidden rounded cursor-pointer filter hover:brightness-95 border-2 border-transparent;
  &.active {
    @apply border-green;
  }
  &__info {
    @apply absolute bottom-0 left-0 right-0 text-white px-1 py-1;
    background: rgba(0, 0, 0, 0.7);
  }
  &__title {
    @apply text-sm font-medium;
  }
  &__rank {
    @apply text-[10px] font-normal;
  }
}
</style>
