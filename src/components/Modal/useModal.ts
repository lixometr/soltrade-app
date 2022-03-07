import { ModalName } from './modal-name.enum'
import ee from 'event-emitter'
import { ModalOpenSettings } from './modal-open-settings.interface'

const bus = ee()
export const useModal = () => {
  const open = (opts: ModalOpenSettings) => {
    bus.emit('open', opts)
  }
  const close = () => {
    bus.emit('close')
  }
  return { bus, open, close}
}
