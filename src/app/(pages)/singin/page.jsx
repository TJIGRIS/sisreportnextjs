import Image from 'next/image';
import ImageLogin from '../../../../public/loginReport.svg';

import FormLogin from '@/app/client/components/FormLogin';

export default function page() {
  return (
    <div
      class="bg-secondary rounded-lg grid grid-cols-1 lg:grid-cols-2 place-items-center h-full"
    >
      <section class="hidden place-items-center lg:grid">
        <Image class="w-2/3" src={ImageLogin} alt="Imagen de realizar reporte" />
      </section>

      <section class="w-full max-w-xl lg:w-full text-gray-400 px-2">
        <h1 class="text-4xl font-bold text-white mb-4">Iniciar Sesión</h1>
        <FormLogin />
      </section>
    </div>
  )
}
