import TableDashboard from '../../client/components/TableDashboard'

export default async function page() {
  return (
    <div className='bg-secondary rounded-lg grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center h-full'>
      <section className='w-full max-w-2xl lg:w-full text-gray-400 px-2 overflow-y-auto h-full'>
        <h1 className='text-4xl font-bold text-white mb-4'>Por Revisar</h1>
        <TableDashboard stateReport={'Reportado'} />
      </section>

      <section className='w-full max-w-2xl lg:w-full text-gray-400 px-2'>
        <h1 className='text-4xl font-bold text-white mb-4'>Reportes Listos</h1>
        <TableDashboard stateReport={'Reparado'} />
      </section>
    </div>
  )
}
