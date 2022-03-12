<script lang="ts" setup>
import faqData from '@/components/Faq/faq-data'
import FaqItem from '@/components/Faq/FaqItem/FaqItem.vue'
const items = faqData
</script>

<template>
  <div>
    <div class="container">
      <h2 class="mb-4">FAQ</h2>
      <div class="space-y-4">
        <FaqItem v-for="(item, idx) in items" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>
