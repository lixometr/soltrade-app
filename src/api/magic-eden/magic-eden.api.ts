import { TransactionResponse } from '../../@types/transaction-response.interface'
import { useApi } from '@/helpers/composables/useApi'

// export const startOrder = useApi<{ collectionName: string }, string>(
//   (data) => ({
//     method: 'POST',
//     url: '/magic-eden/track/start-order',
//     data,
//   }),
//   ''
// )
// export const start = useApi<{ collectionName: string }, string>(
//   (data) => ({
//     method: 'POST',
//     url: '/magic-eden/track/start-order',
//     data,
//   }),
//   ''
// )
// export const stop = useApi<{ id: string }, any>(
//   (data) => ({
//     method: 'POST',
//     url: '/magic-eden/track/stop',
//     data,
//   }),
//   null
// )
export const sell = useApi<
  { mintAddress: string; price: number },
  TransactionResponse
>(
  (data) => ({
    method: 'POST',
    url: '/magic-eden/sell',
    data,
  }),
  {} as TransactionResponse
)
export const buyFloor = useApi<{ collectionName: string, buyer: string }, any>(
  (data) => ({
    method: 'POST',
    url: '/magic-eden/buy-floor',
    data,
  }),
  {} as TransactionResponse
)
export const useApiMagicEden = {
  // start,
  // startOrder,
  // stop,
  sell,
  buyFloor,
}
