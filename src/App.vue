<script setup lang="ts">
import AModal from './components/Modal/AModal.vue'
import AToastContainer from './components/AToast/AToastContainer.vue'
import AHeader from './components/AHeader/AHeader.vue'
</script>

<template>
  <AHeader />
  <div class="content-wrapper">
    <router-view :key="$route.path"> </router-view>
  </div>
  <AModal />
  <AToastContainer />
</template>

<style></style>
