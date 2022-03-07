import { errorHandler } from './../../errorHandler';
import { useToast } from '../useToast/useToast'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { ref } from 'vue'
import instance from './useApiInstance'
import { UseApiOptions } from './useApi.types'

const { show: toastShow } = useToast()
export const _useApi = <T, R>(
  construct: (params: T) => AxiosRequestConfig,
  defaultValue: R,
  opts?: UseApiOptions
) => {
  const defaultOptions: UseApiOptions = {}
  const options = Object.assign({}, defaultOptions, opts)
  const data = ref<R>(defaultValue)
  const error = ref()
  const isLoading = ref(false)
  const exec = async (args?: T) => {
    const requestConfig = construct(args || ({} as T))
    try {
      isLoading.value = true
      const response = await instance(requestConfig)
      data.value = response.data
      if (options.toast?.success) {
        toastShow({ type: 'success', text: options.toast.success(data.value) })
      }
    } catch (err: any) {
      error.value = err
      if (options.toast?.error) {
        if (typeof options.toast.error === 'boolean') {
          toastShow({ type: 'error', text: errorHandler(err) })

        } else {
          toastShow({ type: 'error', text: options.toast.error(err) })
        }
      }
      if (options?.throw) {
        throw err
      }
    } finally {
      isLoading.value = false
    }
    return data.value
  }
  return { exec, data, error, isLoading, defaultValue }
}
