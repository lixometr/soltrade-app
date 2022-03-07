<script lang="ts" setup></script>

<template>
  <div class="custom-scrollbar">
    <slot />
  </div>
</template>

<style lang="postcss">
.custom-scrollbar {
  @apply overflow-auto pr-3;
  &::-webkit-scrollbar {
    @apply w-1 h-1;
  }

  &::-webkit-scrollbar-track {
    @apply rounded;
    background: #a7abb8;
  }

  &::-webkit-scrollbar-thumb {
    @apply rounded;
    background: #5e6169;
    &:hover {
      background: #474a50;
    }
  }
}
</style>
