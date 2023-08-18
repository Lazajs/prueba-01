import { useContext } from 'react'
import { ListOfLectureCTX } from '@/context/ListOfLectureProvider'
import type { ListOfLectureProps } from '../../types'

export function useListOfLecture () {
  const { toggleBook, listOfLecture } = useContext(ListOfLectureCTX) as ListOfLectureProps

  return { listOfLecture, toggleBook }
}
