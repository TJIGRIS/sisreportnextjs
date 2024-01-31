'use client'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../../public/logo.png'
import Line from '../../../../public/line.svg'
import { usePathname } from 'next/navigation'

import { UserButton, useUser } from '@clerk/nextjs'

export default function Navbar() {
  const pathname = usePathname()

  const { user, isLoaded } = useUser()

  return (
    <nav className='bg-secondary rounded-lg  h-full'>
      <div className='flex flex-wrap items-center justify-between mx-auto h-full p-4'>
        <Link
          href='/'
          className='flex items-center space-x-3'
        >
          <Image
            src={Logo}
            className='fh-full-10 w-9'
            alt={'logo unimayor'}
          />

          <span className='self-center text-xl'>SisReports</span>
        </Link>

        <div className='flex items-center md:order-2 space-x-3 md:space-x-0'>
          {isLoaded && user ? (
            <UserButton afterSignOutUrl='/' />
          ) : (
            <Link href='/dashboard'>Iniciar Sesión</Link>
          )}

          <button className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
            <Image
              src={Line}
              alt='Line'
            />
          </button>
        </div>

        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-user'
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0'>
            {pathname.includes('dashboard') ? (
              <>
                <li>
                  <Link
                    href='/dashboard'
                    className={`block py-2 px-3  rounded md:bg-transparent md:hover:text-primary md:p-0 ${
                      pathname == '/' && '!text-primary bg-red-400'
                    }`}
                    aria-current='page'
                  >
                    Asignar Técnicos
                  </Link>
                </li>
                <li>
                  <Link
                    href='/dashboard/tablereports'
                    className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 ${
                      pathname == '/searchreport' && 'text-primary'
                    }`}
                  >
                    Tabla Reportes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href='/'
                    className={`block py-2 px-3  rounded md:bg-transparent md:hover:text-primary md:p-0 ${
                      pathname == '/' && '!text-primary bg-red-400'
                    }`}
                    aria-current='page'
                  >
                    Realizar Reporte
                  </Link>
                </li>
                <li>
                  <Link
                    href='/searchreport'
                    className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 ${
                      pathname == '/searchreport' && 'text-primary'
                    }`}
                  >
                    Buscar Reporte
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
