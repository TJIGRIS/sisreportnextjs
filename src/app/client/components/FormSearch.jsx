'use client'

import Image from 'next/image'
import Lupa from '../../../../public/lupa.svg'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function FormSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams)

    if (e) {
      params.set('query', e)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params}`)
  }, 500)

  return (
    <form>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <Image
            className='w-4 text-white'
            src={Lupa}
            alt='Lupa'
          />
        </div>

        <input
          type='search'
          id='default-search'
          className='block w-full p-4 ps-10 text-sm rounded-lg bg-gray-500 focus:border-blue-500 outline-none text-white'
          placeholder='Documento Identidad, 1006...'
          onChange={(e) => handleSearch(e.target.value)}
          required
        />
      </div>
    </form>
  )
}
