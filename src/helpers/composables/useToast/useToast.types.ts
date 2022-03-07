export type ToastType = 'success' | 'error' | 'warning' | 'info'
export interface ToastOptions {
  title?: string
  text: string
  type: ToastType
  duration?: number
}