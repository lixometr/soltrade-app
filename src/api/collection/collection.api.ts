import { ICollection } from './../../modules/collection/collection.interface'
import { useApi } from '@/helpers/composables/useApi'
export const find = useApi<{ collectionName: string }, ICollection>(
  ({ collectionName }) => ({
    method: 'GET',
    url: `/track-collection/${collectionName}`,
  }),
  {} as ICollection
)
export const useApiCollection = {
  find,
}
