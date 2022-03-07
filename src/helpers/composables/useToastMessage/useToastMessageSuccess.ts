enum ToastMessage {
  siteCreated = 'siteCreated',
  projectCreated = 'projectCreated',
  siteRemoved = 'siteRemoved',
  sitesRemoved = 'sitesRemoved',
  projectRemoved = 'projectRemoved',
  projectsRemoved = 'projectsRemoved',
  siteMoved = 'siteMoved',
  sitesMoved = 'sitesMoved',
  reportGenerated = 'reportGenerated',
  siteVideosUploaded = 'siteVideosUploaded',
}
const messages = {
  [ToastMessage.siteCreated]: (name: string) =>
    `Site ${name} has been successfully created!`,
  [ToastMessage.projectCreated]: (name: string) =>
    `Project ${name} has been successfully created!`,
  [ToastMessage.siteRemoved]: (name: string) =>
    `Site ${name} has been successfully removed!`,
  [ToastMessage.sitesRemoved]: (count: number) =>
    `${count} sites have been successfully removed!`,
  [ToastMessage.projectRemoved]: (name: string) =>
    `Project ${name} has been successfully removed!`,
  [ToastMessage.projectsRemoved]: (count: number) =>
    `${count} projects have been successfully removed!`,
  [ToastMessage.siteMoved]: (name: string) =>
    `Site ${name} has been moved successfully!`,
  [ToastMessage.sitesMoved]: (count: number) =>
    `${count} sites have been moved successfully`,
  [ToastMessage.reportGenerated]: (name: string) =>
    `Report for site ${name} has been successfully generated!`,
  [ToastMessage.siteVideosUploaded]: (name: string) =>
    `Site ${name} videos have been successfully uploaded!`,
}
export const useToastMessageSuccess = (type: keyof typeof ToastMessage) => {
  return messages[type] as (...args: Array<string | number>) => string
}
