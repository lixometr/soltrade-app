import { AxiosError } from 'axios'
export interface UseApiOptions {
  throw?: boolean
  toast?: {
    error?: boolean | ((err: AxiosError) => string)
    success?: (data: any) => string
  }
}
