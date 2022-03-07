<script lang="ts" setup>
import svgTwitter from '@/assets/icons/twitter.svg?component'
import svgDiscord from '@/assets/icons/discord.svg?component'
import { useMainStore } from '@/store'
const mainStore = useMainStore()
</script>

<template>
  <div class="flex-y-center space-x-5">
    <a :href="mainStore.twitterLink" target="_blank">
      <svgTwitter width="24" />
    </a>
    <a :href="mainStore.discordLink" target="_blank">
      <svgDiscord width="24" />
    </a>
  </div>
</template>

<style lang="postcss"></style>
