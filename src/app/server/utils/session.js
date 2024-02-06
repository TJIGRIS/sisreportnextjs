'use server'

import axios from 'axios'

import { cookies } from 'next/headers'

export const handleLogin = async (formData) => {
  try {
    const token = await axios.post(
      'http://localhost:3000/api/session/login',
      Object.fromEntries(formData)
    )

    if (!token) {
      return { error: 'Error al inicias sesión' }
    }

    cookies().set('token', token.data)
    return ''
  } catch (error) {
    return { error: 'Error al inicias sesión' }
  }
}
