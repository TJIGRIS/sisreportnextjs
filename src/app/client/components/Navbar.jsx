import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../../public/logo.png';

export default function Navbar() {
  return (
    <nav class="bg-secondary rounded-lg text-white h-full">
      <div class="flex flex-wrap items-center justify-between mx-auto h-full p-4">
        <Link href="/" class="flex items-center space-x-3">
          <Image src={Logo} class="fh-full-10 w-9" alt={"logo unimayor"} />

          <span class="self-center text-xl">SisReports</span>
        </Link>

        <div class="flex items-center md:order-2 space-x-3 md:space-x-0">
          <Link href="/singin" class="font-semibold hover:text-primary"
          >Iniciar Sesión</Link
          >

          <button
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg class="w-5 h-5" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"></path>
            </svg>
          </button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0"
          >
            <li>
              <Link
                href="/"
                class="block py-2 px-3 text-white rounded md:bg-transparent md:text-primary md:p-0"
                aria-current="page">Realizar Reporte</Link
              >
            </li>
            <li>
              <Link
                href="/searchreport"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >Buscar Reporte</Link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
