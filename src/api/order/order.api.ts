import { useApi } from '@/helpers/composables/useApi'
export interface CreateOrderDto {
  limit: number
  type?: string
  collectionName: string
  sell?: number
}
const create = useApi<CreateOrderDto, any>(
  (toCreate) => ({
    method: 'POST',
    url: '/order',
    data: toCreate,
  }),
  null
)
const findAll = useApi<any, any>(
  () => ({
    method: 'GET',
    url: '/order',
  }),
  null
)
const remove = useApi<{ id: string }, any>(
  ({ id }) => ({
    method: 'DELETE',
    url: `/order/${id}`,
  }),
  null
)
export const useApiOrder = {
  create,
  findAll,
  remove,
}
