import { toPlural } from './../pluralize'
import { ModalName } from '@/components/Modal/modal-name.enum'
import { createEventHook } from '@vueuse/core'
import { pluralize } from '../pluralize'
import { useModal } from './../../components/Modal/useModal'
export const useConfirmRemoveTextPlural = (item: string, count: number) => {
  return `Delete ${count} ${pluralize(count, item)}? This will permanently
delete selected ${pluralize(count, 'item')}.`
}
export const useConfirmRemove = (title: string, text: string) => {
  const onConfirm = createEventHook()
  const { open } = useModal()
  open({
    name: ModalName.confirmRemove,
    props: {
      title,
      text,
      confirm: () => {
        onConfirm.trigger(true)
      },
    },
  })
  return onConfirm.on
}
