<script lang="ts" setup>
import IconButton from './IconButton.vue'
import svgDelete from '../../assets/icons/delete.svg?component'
</script>

<template>
  <IconButton :icon="svgDelete" icon-size="12" class="icon-button-delete" />
</template>

<style lang="postcss">
.icon-button-delete {
  @apply text-red-light border-red-light hover:bg-red-light hover:text-white hover:border-red-light
 active:bg-red active:border-red;
  &.disabled {
    @apply border-opacity-50;
  }
}
</style>
