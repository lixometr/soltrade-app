import { computed, Ref, ref } from 'vue'

export const useHandleSelect = (items: Ref<{ uuid: string }[]>) => {
  const chosen = ref([] as string[])
  const isSelectedAll = computed(() => {
    return !!items.value.length && chosen.value.length === items.value.length
  })
  const selectAll = () => {
    if (isSelectedAll.value) {
      chosen.value = []
    } else {
      items.value.forEach((item, idx) => {
        if (chosen.value.includes(item.uuid)) return
        chosen.value.push(item.uuid)
      })
    }
  }
  return { chosen, isSelectedAll, selectAll }
}
