import { FunctionalComponent } from '@vue/runtime-core'

export interface IDropdownItem {
  name: string
  icon?: FunctionalComponent
  value?: string | number
}
