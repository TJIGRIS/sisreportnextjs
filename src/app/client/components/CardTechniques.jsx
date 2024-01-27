import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../../public/logo.png'

export default function CardTechniques({ id, name, rol }) {
  return (
    <article className='border-[1px] border-primary p-2 grid place-items-center rounded-lg gap-2'>
      <div className='overflow-hidden'>
        <Image
          src={Logo}
          alt='techniques'
          width={90}
          height={90}
        />
      </div>

      <div className='text-center'>
        <h3 className='text-sm'>{name}</h3>
        <span className='text-xs'>{rol}</span>
      </div>

      <Link
        href={`/dashboard/${id}`}
        className='text-white bg-ternary hover:bg-ternary/60 font-medium rounded-lg text-sm   inline-flex items-center w-full p-2'
      >
        <p className='text-center w-full'>Asignar Reportes</p>
        <svg
          className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            // stroke-linecap='round'
            // stroke-linejoin='round'
            // stroke-width='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg>
      </Link>
    </article>
  )
}
