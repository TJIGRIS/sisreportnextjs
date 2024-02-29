'use client'

import { Toaster, toast } from 'sonner'
import { useStoreSisReports } from '../store/auth'
import { redirect } from 'next/navigation'
import { handleLogin } from '../../server/utils/actions'

export default function FormLogin() {
  const { setUser, setIsLoaded } = useStoreSisReports((state) => state)

  const handleLoginForm = async (formData) => {
    const res = await handleLogin(formData)

    if (res.error) {
      toast.error(res.error)
    }
    if (res.success) {
      toast.loading('Cargando...')

      setUser({ name: res.name, rol: res.rol, id: res.id })
      setIsLoaded(true)

      if (res.rol === 'admin') {
        redirect('/dashboard')
      }

      if (res.rol === 'technique') {
        redirect('/dashboard/tablereports')
      }
    }
  }

  return (
    <>
      <form
        className='flex flex-col gap-4'
        action={(formData) => handleLoginForm(formData)}
      >
        <div className='flex flex-col'>
          <label htmlFor='identificacion'>Numero de identificación</label>
          <input
            type='text'
            placeholder='1006...'
            name='identificacion'
            id='identificacion'
            autoFocus
            autoComplete='off'
            className='bg-white/40 text-white outline-none p-1'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            placeholder='noSoyUnaContraseña...'
            name='password'
            id='password'
            autoFocus
            autoComplete='off'
            className='bg-white/40 text-white outline-none p-1'
          />
        </div>

        <button
          type='submit'
          className='bg-primary w-max text-black rounded-lg py-2 px-6 hover:bg-primary/60 hover:text-white'
        >
          Iniciar Sesión
        </button>
      </form>

      <Toaster richColors />
    </>
  )
}
