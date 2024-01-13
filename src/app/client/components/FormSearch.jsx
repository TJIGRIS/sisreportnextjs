'use client';

import { useForm } from 'react-hook-form';

import Image from 'next/image';
import Lupa from '../../../../public/lupa.svg';

export default function FormSearch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function searchReports({ ccEst }) {
    console.log('');
  }

  const onSubmit = handleSubmit((ccEst) => {
    searchReports(ccEst);
    reset;
  });

  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <Image
            className='w-4 text-white'
            src={Lupa}
            alt='Lupa'
          />
        </div>

        <input
          type='search'
          id='default-search'
          {...register('ccEst', { required: true })}
          className='block w-full p-4 ps-10 text-sm rounded-lg bg-gray-500 focus:border-blue-500 outline-none text-white'
          placeholder='Documento Identidad, 1006...'
          required
        />
        <button
          type='submit'
          className='text-black absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary/40 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
        >
          Search
        </button>
      </div>
    </form>
  );
}
