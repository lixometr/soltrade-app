<script lang="ts" setup>
interface ITableCol {
  name: string
  key: string
  k?: number
}
defineProps<{
  cols: ITableCol[]
  items: any[]
}>()
</script>

<template>
  <div class="app-table">
    <div class="app-table-header">
      <div
        v-for="(col, idx) in cols"
        :key="idx"
        class="app-table-header-col"
        :style="{ flexGrow: col.k || 1 }"
      >
        <slot :name="'col-' + idx" v-bind="{ col }">
          {{ col.name }}
        </slot>
      </div>
    </div>
    <div class="app-table-body">
      <div v-for="(row, idx) in items" :key="idx" class="app-table-row">
        <div
          v-for="(col, index) in cols"
          :key="index"
          class="app-table-col"
          :style="{ flexGrow: col.k || 1 }"
        >
          <slot :name="col.key" v-bind="{ row }">
            {{ row[col.key] }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.app-table {
  &-header {
    @apply text-white flex-y-center h-14 bg-grey-800 px-4  text-base;
    &-col {
      @apply flex-1 px-1;
    }
  }
  &-row {
    @apply flex-y-center px-4 min-h-[56px];
    &:nth-child(even) {
      @apply bg-grey-800;
    }
  }
  &-col {
    @apply flex-1 text-sm px-1;
  }
}
</style>
