import { BookT } from '../../types'
import Image from 'next/image'

interface Props extends BookT {
  toggleBook: (title: string)=> void
}

export function Book ({ title, cover, toggleBook, ...props }: Props) {
  return (
    <article onClick={() => toggleBook(title)} className='flex justify-around items-center flex-col bg-[#202124] px-2 py-4 hover:scale-105 transition-all cursor-pointer'>
      <h3 className='text-center m-1 mb-3'>{title}</h3>
      <Image width={300} height={300} className='aspect-[9/14] w-full h-full object-cover' src={cover} alt='cover' />
    </article>
  )
}
