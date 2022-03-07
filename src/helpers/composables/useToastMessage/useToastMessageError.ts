enum ToastMessage {
  projectRemove = 'projectRemove',
  siteRemove = 'siteRemove',
}
const messages = {
  [ToastMessage.projectRemove]: (name: string) =>
    `Project ${name} could not be deleted!`,
  [ToastMessage.siteRemove]: (name: string) =>
    `Site ${name} could not be deleted!`,
}
export const useToastMessageError = (
  type: keyof typeof ToastMessage
) => {
  return messages[type] as (...args: Array<string | number>) => string
}
