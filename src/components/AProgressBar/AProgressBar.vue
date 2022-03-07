<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    progress: number
    isError?: boolean
  }>(),
  {
    isError: false,
    progress: 0,
  }
)
</script>

<template>
  <div
    class="app-progress-bar"
    :class="{ success: progress === 100, error: isError }"
  >
    <div
      class="app-progress-bar__active"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<style lang="postcss">
.app-progress-bar {
  @apply bg-blue-200 rounded h-1;
  &__active {
    @apply bg-blue-400 rounded h-full;
  }
  &.success & {
    &__active {
      @apply bg-green;
    }
  }
  &.error & {
    &__active {
      @apply bg-red-light;
    }
  }
}
</style>
