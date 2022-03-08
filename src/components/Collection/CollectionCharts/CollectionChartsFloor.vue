<script lang="ts" setup>
import { useCollectionStore } from '@/store/collection'
import { createChart, LastPriceAnimationMode } from 'lightweight-charts'
import { ref, watch, toRef, onMounted } from 'vue'
import { computed } from 'vue-demi'
import moment from 'moment'
const collectionStore = useCollectionStore()
const collection = computed(() => {
  return collectionStore.collection
})
function timeToLocal(originalTime) {
  const d = new Date(originalTime)
  return (
    Date.UTC(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds(),
      d.getMilliseconds()
    ) / 1000
  )
}
const data = computed(() =>
  collection.value.floor.map((item) => ({
    time: timeToLocal(item.date) as any,
    value: item.value,
  }))
)
const chartEl = ref()
onMounted(() => {
  const chart = createChart(chartEl.value, {
    height: 400,
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
    lineColor: '#4FD1C5',
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
  <div class="collection-charts-floor app-card">
    <div class="">
      <h2 class="mb-4">Floor price</h2>
      <div ref="chartEl"></div>
    </div>
  </div>
</template>

<style lang="postcss">
.collection-charts-floor {
  @apply text-white p-6;
}
</style>
