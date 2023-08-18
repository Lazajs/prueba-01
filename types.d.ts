export interface Author {
  name: string;
  otherBooks: string[];
}

export interface BookT {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
}

export interface ListOfLectureProps {
  listOfLecture: string[]
  toggleBook: (arg: string) => void
}

export type LibraryBook = { book: BookT }
export type LibraryT = LibraryBook[]
export type SortBy = 'IN_LIST' | 'NOT_IN_LIST'

export interface BookListData {
  shownBooks: LibraryBook[]
  genres: string[]
}
