import TableDashboard from '../../client/components/TableDashboard'
import { getAllReports } from '../../server/utils/actions'

export default async function page() {
  const reports = await getAllReports()

  const parseReports = reports.map((report) => ({
    _id: report._id.toString(),
    numeroComputador: report.numeroComputador,
    sede: report.sede,
    salon: report.salon,
    description: report.description,
    estado: report.estado,
  }))

  return (
    <div className='bg-secondary rounded-lg grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center h-full'>
      <section className='w-full max-w-2xl lg:w-full text-gray-400 px-2 overflow-y-auto h-full'>
        <h1 className='text-4xl font-bold text-white mb-4'>Por Revisar</h1>
        <TableDashboard
          reports={parseReports}
          stateReport={'Reportado'}
        />
      </section>

      <section className='w-full max-w-2xl lg:w-full text-gray-400 px-2'>
        <h1 className='text-4xl font-bold text-white mb-4'>Reportes Listos</h1>
        <TableDashboard
          reports={parseReports}
          stateReport={'Reparado'}
        />
      </section>
    </div>
  )
}
