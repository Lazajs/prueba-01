'use client'
import { ListOfBooks } from './ListOfBooks'
import type { LibraryBook } from '../../types'
import { useBooks } from '@/hooks/useBooks'

export function BookSection ({ books }: {books: LibraryBook[]}) {
  const { shownBooks, genres } = useBooks(books, 'NOT_IN_LIST')

  return (
    <>
      <h2 className='text-3xl font-[sans-serif] font-bold m-10'>Available book list</h2>
      {
        genres && Array.isArray(shownBooks)
          ? <ListOfBooks books={shownBooks} genres={genres} />
          : null
      }
    </>
  )
}
