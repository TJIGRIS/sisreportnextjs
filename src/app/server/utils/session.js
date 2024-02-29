/* 'use server'

import axios from 'axios'

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import Tecnico from '../models/Tecnico'
import { redirect } from 'next/navigation'

export const handleLogin = async (formData) => {
  try {
    const token = await axios.post(
      'http://localhost:3000/api/session/login',
      Object.fromEntries(formData)
    )

    if (!token) {
      return { error: 'Error al iniciar sesión' }
    }

    cookies().set('token', token.data)

    const { id } = jwt.decode(token.data)

    const tecnico = await Tecnico.findById(id)

    if (!tecnico) {
      return { error: 'Error al iniciar sesión 1' }
    }

    return {
      success: true,
      rol: tecnico.rol,
      name: tecnico.nombre,
      id: tecnico._id,
    }
  } catch (error) {
    return { error: 'Error al iniciar sesión 2' }
  }
}

export const validateLogin = async () => {
  try {
    const token = cookies().get('token')

    if (!token) {
      return { error: 'Error encontrar technique' }
    }

    const { id } = jwt.decode(token.value)

    const tecnico = await Tecnico.findById(id)

    if (!tecnico) {
      return { error: 'Error encontrar technique 1' }
    }

    return {
      success: true,
      rol: tecnico.rol,
      name: tecnico.nombre,
      id: tecnico._id.toString(),
    }
  } catch (error) {
    return { error: 'Error al iniciar sesión 2' }
  }
}

export const logout = async () => {
  try {
    cookies().delete('token')

    return { ok: 'ok' }
  } catch (error) {
    return { error: 'Error al cerrar sesión' }
  }
}
 */