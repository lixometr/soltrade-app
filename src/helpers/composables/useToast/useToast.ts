import { markRaw, ref } from 'vue'
import { ToastOptions, ToastType } from './useToast.types'
const defaultDuration = 8000

export const toastList = ref<ToastItem[]>([])

export class ToastItem {
  id: number
  options: ToastOptions
  timer: NodeJS.Timeout | null = null
  title?: string
  text: string
  type: ToastType
  constructor(opts: ToastOptions, id: number) {
    this.options = opts
    this.title = opts.title
    this.text = opts.text
    this.type = opts.type
    this.id = id
    this.init()
  }
  get duration() {
    return this.options.duration || defaultDuration
  }
  remove() {
    toastList.value = toastList.value.filter((item) => item.id !== this.id)

    this.stopTimer()
  }
  stopTimer() {
    if (!this.timer) return
    clearTimeout(this.timer)
    this.timer = null
  }
  startTimer() {
    this.timer = setTimeout(() => {
      this.remove()
    }, this.duration)
  }
  init() {
    this.startTimer()
  }
}
const toastId = ref(1)
export const useToast = () => {
  const show = (opts: ToastOptions) => {
    const item = markRaw(new ToastItem(opts, toastId.value++))
    toastList.value.push(item)
    return item
  }
  const hide = (id: number) => {
    const item = toastList.value.find((item) => item.id === id)
    if (!item) return
    item.remove()
  }
  const success = (opts: Omit<ToastOptions, 'type'>) =>
    show({ ...opts, type: 'success' })

  const error = (opts: Omit<ToastOptions, 'type'>) =>
    show({ ...opts, type: 'error' })
  return { show, hide, success, error }
}
