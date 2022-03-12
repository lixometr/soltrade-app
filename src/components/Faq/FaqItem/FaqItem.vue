<script lang="ts" setup>
import ACollapser from '@/components/ACollapser/ACollapser.vue'
defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <div class="faq-item">
    <ACollapser :title="title" :content="content" />
  </div>
</template>

<style lang="postcss"></style>
