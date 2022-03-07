import { ModalName } from './modal-name.enum'

export interface ModalOpenSettings {
  name: ModalName
  closeOnOverlay?: boolean
  props?: { [key: string]: any }
}
