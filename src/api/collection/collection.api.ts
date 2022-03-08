import { ICollection } from './../../modules/collection/collection.interface'
import { useApi } from '@/helpers/composables/useApi'
const find = useApi<{ collectionName: string }, ICollection>(
  ({ collectionName }) => ({
    method: 'GET',
    url: `/track-collection/${collectionName}`,
  }),
  {} as ICollection
)
const search = useApi<{ phrase: string }, ICollection[]>(
  ({ phrase }) => ({
    method: 'GET',
    url: `/track-collection/search/${phrase}`,
  }),
  []
)
const findPopular = useApi<any, ICollection[]>(
  () => ({
    method: 'GET',
    url: '/track-collection/popular',
  }),
  []
)
export const useApiCollection = {
  findPopular,
  find,
  search,
}
