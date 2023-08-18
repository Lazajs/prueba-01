import { BookT } from '../../types'
import Image from 'next/image'

interface Props extends BookT {
  toggleBook: (title: string)=> void
}

export function Book ({ title, cover, toggleBook, ...props }: Props) {
  return (
    <article onClick={() => toggleBook(title)} className='flex justify-around items-center flex-col shrink-0 h-[300px] bg-[#202124] p-2 w-[200px] hover:scale-105 transition-all cursor-pointer'>
      <h3 className='text-center m-1'>{title}</h3>
      <Image width={150} height={250} src={cover} alt='cover' />
    </article>
  )
}
