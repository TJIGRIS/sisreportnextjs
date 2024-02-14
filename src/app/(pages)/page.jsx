import Image from 'next/image'

import ImageSend from '../../../public/sendReport.svg'

import FormMakeReports from '../client/components/FormMakeReports'
import { redirect } from 'next/navigation'
import { validateLogin } from '../server/utils/session'
import Tecnico from '../server/models/Tecnico'

export default async function Home() {
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

  return (
    <div className='bg-secondary rounded-lg grid grid-cols-1 lg:grid-cols-2 place-items-center h-full'>
      <section className='hidden place-items-center lg:grid'>
        <Image
          className='w-2/3'
          src={ImageSend}
          alt='Imagen de realizar reporte'
        />
      </section>

      <section className='w-full max-w-xl lg:w-full text-gray-400 px-2'>
        <h1 className='text-4xl font-bold text-white mb-4'>Realizar Reporte</h1>
        <FormMakeReports />
      </section>
    </div>
  )
}
