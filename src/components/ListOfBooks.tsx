'use client'
import { Book } from '@/components/Book'
import type { LibraryBook } from '../../types'
import { useMemo, useState, useEffect, memo } from 'react'
import { useListOfLecture } from '@/hooks/useListOfLecture'

function Component ({ books, genres }: {books: LibraryBook[], genres: string[]}) {
  const [shown, setShown] = useState<LibraryBook[]>(books)
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const { toggleBook } = useListOfLecture()

  const minMax = useMemo(() => {
    const sortedPages = books.sort((a, b) => a.book.pages - b.book.pages)
    return {
      min: sortedPages[0]?.book.pages,
      max: sortedPages[sortedPages.length - 1]?.book.pages
    }
  }, [books, shown])
  const [pages, setPages] = useState(minMax.min)

  useEffect(() => {
    let FILTERED = books
    if (pages > 0 || selectedGenre) {
      FILTERED = books.filter(item => item.book.pages >= pages && (selectedGenre ? item.book.genre === selectedGenre : true))
    }
    setShown(FILTERED)
  }, [books, pages, selectedGenre])

  return (
    <>
      <nav className='m-4 flex max-w-[400px] justify-around'>
        <span className='w-fit'>
          <p className='text-lg'>Filter by pages</p>
          <input type="range" min={minMax.min} onChange={(e) => setPages(+e.target.value)} max={minMax.max} />
          <b className='m-2'>{pages}</b>
        </span>
        <span>
          <p className='text-lg'>Filter by genre</p>
          <select className='text-black' onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">None</option>
            {
              genres.map(genre => (
                <option value={genre} key={genre}>{genre}</option>
              ))
            }
          </select>
        </span>
      </nav>
      <section className='flex min-h-[300px] items-center w-fit p-10 flex-wrap gap-10'>
        {
          shown.length === 0
            ? <p className='text-3xl font-bold'>Sorry, there are no books here!</p>
            : shown.map(({ book }) => (
                <Book toggleBook={toggleBook} key={book.title} {...book} />
            ))
        }
      </section>
    </>
  )
}

export const ListOfBooks = memo(Component)
