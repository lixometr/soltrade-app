<script lang="ts" setup>
import { ref } from 'vue'
import AInput from '../AInput/AInput.vue'
import svgSearch from '@/assets/icons/search.svg?component'
import { useApiCollection } from '@/api/collection/collection.api'
import { onClickOutside, useDebounceFn, useToggle } from '@vueuse/core'
import type { ICollection } from '@/modules/collection/collection.interface'
import ACustomScrollbar from '../ACustomScrollbar/ACustomScrollbar.vue'
import ASpinner from '../ASpinner/ASpinner.vue'
const text = ref('')
const items = ref([] as ICollection[])
const [isOpen, toggle] = useToggle(false)
const isLoading = ref(false)
const target = ref()
const search = async () => {
  isLoading.value = true
  const res = await useApiCollection
    .search({ toast: { error: true } })
    .exec({ phrase: text.value })
  items.value = res
  isLoading.value = false
}

// const search = useDebounceFn(_search, 200)
const reset = () => {
  text.value = ''
  items.value = []
  toggle(false)
}
onClickOutside(target, () => {
  toggle(false)
})
</script>

<template>
  <div class="header-search" ref="target">
    <div class="header-search-input-wrapper">
      <AInput
        class="header-search-input"
        placeholder="Start searching..."
        @keypress.enter="search"
        @input="search"
        @focus="toggle(true)"
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
    <ACustomScrollbar class="header-search-items" v-if="isOpen">
      <template v-if="!items.length && text && !isLoading">
        <div class="flex-center h-14">Nothing found</div>
      </template>
      <template v-else>
        <router-link
          :to="{
            name: 'Collection',
            params: { collectionName: item.collectionName },
          }"
          class="header-search-item"
          v-for="(item, idx) in items"
          :key="item._id"
          @click.native="reset"
        >
          <img
            :src="item.image"
            alt="image"
            class="header-search-item__image"
          />
          <div class="header-search-item__title">
            {{ item.collectionTitle }}
          </div>
        </router-link>
      </template>
    </ACustomScrollbar>
  </div>
</template>

<style lang="postcss">
.header-search {
  @apply relative w-[250px];
  &-input-wrapper {
    @apply relative;
  }
  .app-input {
    .app-input__el {
      @apply rounded-full;
    }
  }
  &__icon {
    @apply absolute right-4 top-1/2 transform -translate-y-1/2 z-10;
  }
  &-items {
    @apply absolute -bottom-2 transform translate-y-full left-0 right-0 max-h-[250px]
      bg-grey-500 rounded !pr-0;
  }
  &-item {
    @apply flex-y-center py-2 px-2  hover:bg-grey-300;
    &__image {
      @apply w-10 h-10 object-cover mr-3 rounded flex-shrink-0;
    }
    &__title {
      @apply text-white flex-1 whitespace-nowrap overflow-hidden text-ellipsis;
    }
  }
}
</style>
