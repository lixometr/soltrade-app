import { AxiosRequestConfig } from 'axios'
import { UseApiOptions } from './useApi.types'
import { _useApi } from './useApiInternal'

export const useApi = <T, R>(
  construct: (params: T) => AxiosRequestConfig,
  defaultValue: R
) => {
  return (opts?: UseApiOptions) => _useApi<T, R>(construct, defaultValue, opts)
}
