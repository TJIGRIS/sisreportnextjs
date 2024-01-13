import Table from '@/app/client/components/Table';

export default function page() {
  return (
    <div
      class="bg-secondary rounded-lg grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center h-full"
    >
      <section
        class="w-full max-w-2xl lg:w-full text-gray-400 px-2 overflow-y-auto h-full"
      >
        <h1 class="text-4xl font-bold text-white mb-4">Por Revisar</h1>
        <Table stateReport={"Reportado"} />
      </section>

      <section class="w-full max-w-2xl lg:w-full text-gray-400 px-2">
        <h1 class="text-4xl font-bold text-white mb-4">Reportes Listos</h1>
        <Table stateReport={"Reparado"} />
      </section>
    </div>
  )
}
