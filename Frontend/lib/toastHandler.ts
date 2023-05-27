import { useToast } from 'vue-toast-notification'

const $toast = useToast()
export const toastSuccessHandler = (displayText: string) => {
  return $toast.success(displayText, {
    position: 'top',
  })
}
export const toastErrorHandler = (displayText: string) => {
  return $toast.error(displayText, {
    position: 'top',
  })
}
