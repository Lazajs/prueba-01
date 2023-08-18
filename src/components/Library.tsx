import type { LibraryT } from '../../types'
import { BookSection } from './BookSection'
import { ReadingSection } from './ReadingSection'
import ListOfLectureProvider from '@/context/ListOfLectureProvider'
import { NotificationProvider } from '@/context/NotificationProvider'

export function Library ({ library }: {library: LibraryT}) {
  return (
    <section>
      <NotificationProvider>
        <ListOfLectureProvider>
          <BookSection books={library} />
          <ReadingSection books={library} />
        </ListOfLectureProvider>
      </NotificationProvider>
    </section>
  )
}
