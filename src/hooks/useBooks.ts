import { useListOfLecture } from '@/hooks/useListOfLecture'
import { useMemo } from 'react'
import type { LibraryBook, SortBy } from '../../types'

export function useBooks (books: LibraryBook[], sortBy: SortBy) {
  const { listOfLecture } = useListOfLecture()

  const data = useMemo(() => {
    const LIST = books.filter(({ book }) => sortBy === 'IN_LIST' ? listOfLecture.includes(book.title) : !listOfLecture.includes(book.title))
    const GENRES: string[] = []

    new Set(LIST.map(item => {
      return item.book.genre
    })).forEach((item) => {
      GENRES.push(item)
    })

    return { shownBooks: LIST, genres: GENRES }
  }, [listOfLecture])

  return { shownBooks: data?.shownBooks, genres: data?.genres }
}
