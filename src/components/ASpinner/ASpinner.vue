<script lang="ts" setup>
withDefaults(defineProps<{ size?: string }>(), { size: '30px' })
</script>

<template>
  <div class="lds-dual-ring" :style="{ width: size, height: size }"></div>
</template>

<style lang="postcss">
.lds-dual-ring {
  display: inline-block;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
