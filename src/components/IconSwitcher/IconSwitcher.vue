<script lang="ts" setup>
import type { IIconSwitcherItem } from './icon-switcher-item.interface'
import IconSwitcherItem from './IconSwitcherItem.vue'
const props =
  defineProps<{ items: IIconSwitcherItem[]; active: number | string }>()
const emits =
  defineEmits<{ (e: 'update:active', value: number | string): void }>()
</script>

<template>
  <div>
    <div class="flex space-x-4">
      <IconSwitcherItem
        v-for="(item, idx) in items"
        :key="idx"
        :icon="item.icon"
        :iconSize="item.iconSize"
        :active="active === item.value"
        @update:active="$emit('update:active', item.value)"
      />
    </div>
  </div>
</template>

<style lang="postcss"></style>
