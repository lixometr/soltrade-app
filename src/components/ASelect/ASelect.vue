<script lang="ts" setup>
import { ref } from 'vue'

const searchValue = ref('')
</script>

<template>
  <div class="app-select">
    <div class="app-select-input">
      <input v-model="searchValue" type="blue" />
    </div>
  </div>
</template>

<style lang="postcss"></style>
