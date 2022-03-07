<script lang="ts" setup>
import AHeaderMenu from './AHeaderMenu.vue'
import AHeaderAccount from './AHeaderAccount.vue'
import AHeaderSearch from './AHeaderSearch.vue'
import AHeaderSoc from './AHeaderSoc.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <router-link to="/">
          <img src="../../assets/icons/logo.svg?url" width="16"
        /></router-link>
        <AHeaderMenu class="ml-auto mr-auto" />
        <div class="flex-y-center space-x-6">
          <AHeaderSoc />
          <AHeaderSearch />
        </div>
        <AHeaderAccount class="ml-10" />
      </div>
    </div>
  </header>
</template>

<style lang="postcss">
.header {
  &__row {
    @apply h-[80px] flex items-center;
  }
}
</style>
