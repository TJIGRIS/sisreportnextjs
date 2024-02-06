'use server'
import { NextResponse } from 'next/server'

import { connectionDB } from '../../../server/utils/connectionDB'
import { generateJWT } from '../../../server/utils/jwt'
import Tecnico from '../../../server/models/Tecnico'

export async function POST(request) {
  const data = await request.json()
  const { identificacion, password } = data

  try {
    await connectionDB()
    const tecnico = await Tecnico.findOne({ identificacion, password })

    if (!tecnico) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 500 }
      )
    }

    const token = generateJWT(tecnico._id)

    return NextResponse.json(token, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Falló algo' }, { status: 500 })
  }
}
