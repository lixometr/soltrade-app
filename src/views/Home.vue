<script lang="ts" setup>
import useSocket from '@/helpers/composables/useSocket/useSocket'
import HomePopular from '@/components/Home/HomePopular.vue'
useSocket()
</script>
<template>
  <div>
    <div class="container">
      <HomePopular />
      <div class="flex">
        <div class="flex-1"></div>
      </div>
    </div>
  </div>
</template>
