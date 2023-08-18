import fs from 'node:fs/promises'
import { Library } from '@/components/Library'

export default async function Home () {
  const { library } = JSON.parse(await fs.readFile('src/books.json', 'utf-8'))

  return (
      <main className='min-w-screen min-h-screen'>
        <h1 className='text-5xl font-bold italic font-[sans-serif] uppercase underline text-center'>Book library</h1>
        <Library library={library}/>
      </main>
  )
}
