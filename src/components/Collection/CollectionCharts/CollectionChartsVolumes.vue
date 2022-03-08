<script lang="ts" setup>
import { useCollectionStore } from '@/store/collection'
import { createChart, LastPriceAnimationMode } from 'lightweight-charts'
import { ref, watch, toRef, onMounted } from 'vue'
import { computed } from 'vue-demi'
import moment from 'moment'
import { timeToLocal } from '@/helpers/time-to-local'
const collectionStore = useCollectionStore()
const collection = computed(() => {
  return collectionStore.collection
})

const data = computed(() =>
  collection.value.volumes.map((item) => ({
    time: timeToLocal(item.date) as any,
    value: item.value,
  }))
)
const chartEl = ref()
onMounted(() => {
  const chart = createChart(chartEl.value, {
    height: 300,
    timeScale: {
      timeVisible: true,
      secondsVisible: true,
    },
    layout: {
      backgroundColor: 'transparent',
      textColor: '#fff',
      fontFamily: 'inherit',
    },

    localization: {
      locale: 'en',
    },
    grid: {
      vertLines: {
        // visible: false,
        color: 'rgba(122, 126, 139, 0.1)',
      },
      horzLines: {
        color: 'rgba(122, 126, 139, 0.1)',
      },
    },
    crosshair: {
      horzLine: {
        visible: false,
      },
    },
  })
  const lineSeries = chart.addAreaSeries({
    lineColor: '#FC254D',
    topColor: 'rgba(252, 37, 77, 0.5)',
    bottomColor: 'rgba(252, 37, 77, 0)',
    lastValueVisible: true,
    lastPriceAnimation: LastPriceAnimationMode.OnDataUpdate,
  })
  lineSeries.setData(data.value)
  watch(data, () => {
    lineSeries.setData(data.value)
  })
})
</script>

<template>
  <div class="collection-charts-volumes app-card">
    <div class="">
      <h2 class="mb-4">Volumes</h2>
      <div ref="chartEl"></div>
    </div>
  </div>
</template>

<style lang="postcss">
.collection-charts-volumes {
  @apply text-white p-6;
}
</style>
