import { useContext } from 'react'
import { NotificationCTX } from '@/context/NotificationProvider'

export function useNotification () {
  const showNotification = useContext(NotificationCTX)

  return showNotification
}
