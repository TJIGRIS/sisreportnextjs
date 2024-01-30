import TableDashboard from '../../../client/components/TableDashboard'
import { getAllReports } from '../../../server/utils/actions'

export default async function page() {
  const session = '64c9436e723176c2ad8d9b0f'
  const reports = await getAllReports()
  const newReports = reports.map((report) => {
    if (report.tecnico?.toString() === session) {
      return {
        _id: report._id.toString(),
        numeroComputador: report.numeroComputador,
        sede: report.sede,
        salon: report.salon,
        description: report.description,
        estado: report.estado,
        tecnico: report.tecnico?.toString(),
      }
    }
  })

  return (
    <div className='bg-secondary rounded-lg grid grid-cols-1 lg:grid-cols-2 p-4 gap-2'>
      <section className='text-gray-400 h-full'>
        <h1 className='text-3xl font-bold text-white mb-4'>Por Revisar</h1>
        <TableDashboard
          reports={newReports}
          stateReport={'Reportado'}
        />
      </section>

      <section className='text-gray-400 h-full'>
        <h1 className='text-3xl font-bold text-white mb-4'>Reportes Listos</h1>
        <TableDashboard
          reports={newReports}
          stateReport={'Reparado'}
        />
      </section>
    </div>
  )
}
