'use client';

import Image from 'next/image';
import FormSearch from '../../client/components/FormSearch';
import Table from '../../client/components/Table';

import ImageSearch from '../../../../public/searchReport.svg';

export default function SearchReport() {
  return (
    <div className='relative bg-secondary rounded-lg grid grid-cols-1 place-content-start place-items-center h-full gap-2'>
      <section className='w-full max-w-4xl text-gray-400 px-2 z-10 pt-4 lg:pt-10'>
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-4 text-center'>
          Buscar Reportes
        </h1>
        <FormSearch />
      </section>

      <section className='max-w-4xl w-full z-10 px-2'>
        <Table />
      </section>

      <section className='place-items-center w-full h-full grid absolute opacity-30'>
        <Image
          className='w-2/3 md:w-2/5 select-none'
          src={ImageSearch}
          alt='Imagen de realizar reporte'
        />
      </section>
    </div>
  );
}
