import TableDashboard from '../../../client/components/TableDashboard'
import { getAllReports } from '../../../server/utils/actions'
import { validateLogin } from '../../../server/utils/session'

export default async function page() {
  const { id } = await validateLogin()

  const reports = await getAllReports()
  const newReports = reports.map((report) => {
    if (report.tecnico?.toString() === id) {
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
