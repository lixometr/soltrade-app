<script lang="ts" setup>
const menuItems = [
  {
    route: '/popular',
    name: 'Popular Collections',
  },
  {
    route: '/about',
    name: 'About',
  },
  {
    route: '/faq',
    name: 'FAQ',
  },
]
</script>

<template>
  <div class="header-menu">
    <router-link
      class="header-menu__item"
      :to="item.route"
      v-for="(item, idx) in menuItems"
      :key="idx"
      exact-active-class="active"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<style lang="postcss">
.header-menu {
  @apply flex-y-center space-x-6;
  &__item {
    &.active {
      @apply text-white;
    }
  }
}
</style>
