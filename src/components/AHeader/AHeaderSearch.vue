<script lang="ts" setup>
import { ref } from 'vue'
import AInput from '../AInput/AInput.vue'
import svgSearch from '@/assets/icons/search.svg?component'
const text = ref('')
const search = () => {}
</script>

<template>
  <div class="header-search">
    <AInput
      class="header-search-input"
      placeholder="Enter search"
      v-model="text"
    />
    <a
      class="header-search__icon"
      href="javascript:void(0)"
      @click.prevent="search"
    >
      <svgSearch width="16" />
    </a>
  </div>
</template>

<style lang="postcss">
.header-search {
  @apply relative w-[250px];
  .app-input {
    .app-input__el {
      @apply rounded-full;
    }
  }
  &__icon {
    @apply absolute right-4 top-1/2 transform -translate-y-1/2 z-10;
  }
}
</style>
