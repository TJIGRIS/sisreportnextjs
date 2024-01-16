import {
  deleteReport,
  getAllReports,
  updateReport,
} from '../../server/utils/actions'

export default async function TableDashboard({ stateReport = 'search' }) {
  const reports = await getAllReports()

  return (
    <div className='overflow-x-auto rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 font-semibold'>
        <thead className='text-black uppercase bg-primary'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Computador
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Sede
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Salon
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Descripción
            </th>
            {stateReport === 'Reportado' && (
              <th
                scope='col'
                className='px-6 py-3'
              >
                Estado
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {stateReport === 'Reportado' &&
            reports?.map((report) => {
              if (!report.estado) {
                return (
                  <tr
                    className='odd:bg-gray-500 even:bg-white text-black'
                    key={report._id}
                  >
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-950 whitespace-nowrap'
                    >
                      {report.numeroComputador}
                    </th>
                    <td className='px-6 py-4'>{report.sede}</td>
                    <td className='px-6 py-4'>{report.salon}</td>
                    <td className='px-6 py-4'>{report.description}</td>
                    <td className='px-4 py-2 grid gap-2 w-full'>
                      <form action={updateReport}>
                        <input
                          type='hidden'
                          name='id'
                          id='id'
                          defaultValue={report._id.toString()}
                        />
                        <button className='text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300 w-full'>
                          Listo
                        </button>
                      </form>

                      <form action={deleteReport}>
                        <input
                          type='hidden'
                          name='id'
                          id='id'
                          defaultValue={report._id.toString()}
                        />
                        <button className='text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-red-900 text-red-300 w-full'>
                          Eliminar
                        </button>
                      </form>
                    </td>
                  </tr>
                )
              }
            })}

          {stateReport === 'Reparado' &&
            reports?.map((report) => {
              if (report.estado) {
                return (
                  <tr
                    className='odd:bg-gray-500 even:bg-white text-black'
                    key={report._id}
                  >
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-950 whitespace-nowrap'
                    >
                      {report.numeroComputador}
                    </th>
                    <td className='px-6 py-4'>{report.sede}</td>
                    <td className='px-6 py-4'>{report.salon}</td>
                    <td className='px-6 py-4'>{report.description}</td>
                  </tr>
                )
              }
            })}
        </tbody>
      </table>
    </div>
  )
}
