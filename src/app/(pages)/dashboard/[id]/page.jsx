import { getAllReports, getFindTechniques } from '../../../server/utils/actions'
import Image from 'next/image'

import Logo from '../../../../../public/logo.png'
import TableTechniques from '../../../client/components/TableTechniques'
import TableAdmin from '../../../client/components/TableAdmin'

export default async function Page({ params }) {
  const { id } = params

  const techniques = await getFindTechniques({ id })

  const reports = await getAllReports()
  const newReports = reports.map((report) => ({
    _id: report._id.toString(),
    numeroComputador: report.numeroComputador,
    sede: report.sede,
    salon: report.salon,
    description: report.description,
    tecnico: report.tecnico?.toString(),
  }))

  return (
    <div className='containerTechniques'>
      <section className='[grid-area:techniques] bg-secondary rounded-lg p-2 flex items-center gap-2'>
        <div className='overflow-hidden'>
          <Image
            src={Logo}
            alt='techniques'
            width={120}
            height={120}
          />
        </div>

        <div>
          <h2 className='text-3xl mb-3 font-bold'>{techniques.nombre}</h2>
          <p>
            Rol: {techniques.rol === 'techniques' ? 'Técnico' : 'Administrador'}
          </p>
        </div>
      </section>

      <section className='[grid-area:hisReports] bg-secondary rounded-lg p-2'>
        <TableTechniques
          reports={newReports}
          idTechnique={id}
        />
      </section>

      <section className='[grid-area:reports] bg-secondary rounded-lg p-2'>
        <TableAdmin
          reports={newReports}
          idTechnique={techniques._id.toString()}
        />
      </section>
    </div>
  )
}
