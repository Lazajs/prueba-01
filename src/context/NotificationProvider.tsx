'use client'
import { createContext, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Notification } from '@/components/Notification'

type NotificationT = 'add' | 'remove'
type ContextValue = (message: NotificationT) => void

export const NotificationCTX = createContext<ContextValue>((message) => null)

export function NotificationProvider ({ children }: {children: React.ReactNode}) {
  const [message, setMessage] = useState<NotificationT | null>(null)

  const showNotification = useCallback((message: NotificationT) => {
    setMessage(message)

    setTimeout(() => {
      setMessage(null)
    }, 1000)
  }, [])

  return (
    <NotificationCTX.Provider value={showNotification}>
      {children}

      {
        message
          ? createPortal(<Notification action={message} />, document.body)
          : null
      }
    </NotificationCTX.Provider>
  )
}
