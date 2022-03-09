<script lang="ts" setup>
import { useCollectionStore } from '@/store/collection'
import { computed } from 'vue-demi'
import svgTwitter from '@/assets/icons/twitter.svg?component'
import svgDiscord from '@/assets/icons/discord.svg?component'
import svgWebsite from '@/assets/icons/website.svg?component'
import svgMagicEden from '@/assets/icons/magic-eden.svg?component'
const collectionStore = useCollectionStore()
const collection = computed(() => collectionStore.collection)
const links = computed(() => {
  return [
    {
      link: `https://magiceden.io/marketplace/${collection.value.collectionName}`,
      icon: svgMagicEden,
      iconSize: 21,
    },
    collection.value.website && {
      link: collection.value.website,
      icon: svgWebsite,
      iconSize: 15,
    },
    collection.value.twitter && {
      link: collection.value.twitter,
      icon: svgTwitter,
      iconSize: 18,
    },
    collection.value.discord && {
      link: collection.value.discord,
      icon: svgDiscord,
      iconSize: 18,
    },
  ].filter(Boolean) as Array<{ link: string; icon: any; iconSize: number }>
})
</script>

<template>
  <div class="collection-info">
    <div class="collection-info__image">
      <img :src="collection.image" alt="image" width="140" height="140" />
    </div>
    <div class="collection-info__content">
      <div class="collection-info__heading">
        <h2 class="collection-info__title">{{ collection.collectionTitle }}</h2>
        <div class="collection-info__links">
          <a
            v-for="(link, idx) in links"
            :key="idx"
            :href="link.link"
            target="_blank"
          >
            <component :is="link.icon" :width="link.iconSize" />
          </a>
        </div>
      </div>
      <div class="collection-info__description">
        {{ collection.description }}
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.collection-info {
  @apply flex items-start mb-14;
  &__image {
    @apply mr-5;
    img {
      @apply rounded-[15px] w-[140px] h-[140px] object-cover;
    }
  }
  &__heading {
    @apply mb-3 flex items-baseline;
  }
  &__content {
    @apply max-w-[500px];
  }

  &__links {
    @apply flex-y-center space-x-3 ml-8;
  }
}
</style>
