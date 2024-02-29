import Image from 'next/image'
import FormSearch from '../../client/components/FormSearch'
import Table from '../../client/components/Table'

import ImageSearch from '../../../../public/searchReport.svg'
import { Suspense } from 'react'
import Tecnico from '../../server/models/Tecnico'
import { validateLogin } from '../../server/utils/actions'

export default async function SearchReport({ searchParams }) {
  const { id } = await validateLogin()

  if (id) {
    const tecnico = await Tecnico.findById(id)

    if (tecnico?.rol === 'admin') {
      redirect('/dashboard')
    }

    if (tecnico?.rol === 'technique') {
      redirect('/dashboard/tablereports')
    }
  }

  const query = searchParams?.query || ''

  return (
    <div className='relative bg-secondary rounded-lg grid grid-cols-1 place-content-start place-items-center h-full gap-2'>
      <section className='w-full max-w-4xl text-gray-400 px-2 z-10 pt-4 lg:pt-10'>
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-4 text-center'>
          Buscar Reportes
        </h1>
        <FormSearch />
      </section>

      <Suspense
        key={searchParams?.query}
        fallback={<p>Cargando...</p>}
      >
        <section className='max-w-4xl w-full z-10 px-2'>
          <Table query={query} />
        </section>
      </Suspense>

      <section className='place-items-center w-full h-full grid absolute opacity-30'>
        <Image
          className='w-2/3 md:w-2/5 select-none'
          src={ImageSearch}
          alt='Imagen de realizar reporte'
        />
      </section>
    </div>
  )
}
