<script lang="ts" setup>
import AButton from '../AButton/AButton.vue'
import { WalletMultiButton } from 'solana-wallets-vue'
</script>

<template>
  <div class="header-account">
    <wallet-multi-button dark></wallet-multi-button>
  </div>
</template>

<style lang="postcss">
.header-account {
  .swv-button {
    @apply text-sm font-main h-10 font-normal;
  }
}
</style>
