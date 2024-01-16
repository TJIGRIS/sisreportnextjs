import { createReport } from '../../server/utils/actions'

export default function FormReport() {
  return (
    <form
      action={createReport}
      className='flex flex-col gap-4'
    >
      <div className='flex flex-col'>
        <label htmlFor='ccEst'>Numero de identificación</label>
        <input
          id='ccEst'
          name='ccEst'
          type='number'
          placeholder='1006...'
          autoFocus
          autoComplete='off'
          className='bg-white/40 text-white outline-none p-1'
        />
      </div>

      <div className='flex flex-col md:flex-row  md:justify-between '>
        <div className='flex flex-col'>
          <label htmlFor='sede'>Seleccione la sede</label>
          <select
            id='sede'
            name='sede'
            className='bg-white/40 outline-none p-1  text-white'
          >
            <option
              className='text-black'
              value=''
            >
              seleccionar
            </option>
            <option
              className='text-black'
              value='Casa Obando'
            >
              Casa Obando
            </option>
            <option
              className='text-black'
              value='Bicentenario'
            >
              Bicentenario
            </option>
            <option
              className='text-black'
              value='sede 3'
            >
              Sede 3
            </option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='salon'>Número del Salón</label>
          <select
            id='salon'
            name='salon'
            className='bg-white/40 outline-none p-1 text-white'
          >
            <option
              className='text-black'
              value=''
            >
              seleccionar
            </option>
            <option
              className='text-black'
              value='1'
            >
              salón 1
            </option>
            <option
              className='text-black'
              value='2'
            >
              salón 2
            </option>
            <option
              className='text-black'
              value='3'
            >
              salón 3
            </option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='numeroComputador'>Número de computador</label>
          <select
            id='numeroComputador'
            name='numeroComputador'
            className='bg-white/40 outline-none p-1 text-white'
          >
            <option
              className='text-black'
              value=''
            >
              seleccionar
            </option>
            <option
              className='text-black'
              value='1'
            >
              computador 1
            </option>
            <option
              className='text-black'
              value='2'
            >
              computador 2
            </option>
            <option
              className='text-black'
              value='3'
            >
              computador 3
            </option>
          </select>
        </div>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='description'>Descripción del problema</label>
        <textarea
          id='description'
          name='description'
          rows='10'
          className='bg-white/40 outline-none p-1  text-white'
          placeholder='Este equipo no ...'
        ></textarea>
      </div>

      <button
        type='submit'
        className='bg-primary w-max text-black rounded-lg py-2 px-6 hover:bg-primary/60 hover:text-white'
      >
        Enviar Reporte
      </button>
    </form>
  )
}
