'use client'
import React, { createContext, useState, useEffect, useCallback, memo } from 'react'
import type { ListOfLectureProps } from '../../types'
import { useNotification } from '@/hooks/useNotification'

export const ListOfLectureCTX = createContext<ListOfLectureProps | null>(null)

function ComponentProvider ({ children }: {children: React.ReactNode}) {
  const [listOfLecture, setListOfLecture] = useState<string[]>([''])
  const showNotificationMessage = useNotification()
  const getList = () => localStorage.getItem('lectureList') ? JSON.parse(localStorage.getItem('lectureList') as string) : []

  useEffect(() => {
    addEventListener('storage', updateList)

    return () => removeEventListener('storage', updateList)
  }, [])

  function updateList () {
    const previous = localStorage.getItem('lectureList')
    if (previous) setListOfLecture(JSON.parse(previous))
  }

  const toggleBook = useCallback((title: string) => {
    const prevList = getList()
    const found = prevList.includes(title)

    if (!found) {
      localStorage.setItem('lectureList', JSON.stringify([...prevList, title]))
      setListOfLecture([...prevList, title])
      showNotificationMessage('add')
    } else {
      const withoutBook = prevList.filter((book: string) => book !== title)
      localStorage.setItem('lectureList', JSON.stringify(withoutBook))
      setListOfLecture(withoutBook)
      showNotificationMessage('remove')
    }
  }, [])

  return (
    <ListOfLectureCTX.Provider value={{ toggleBook, listOfLecture }}>
      {children}
    </ListOfLectureCTX.Provider>
  )
}

export default memo(ComponentProvider)
