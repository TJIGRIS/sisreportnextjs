'use server'

import { connectionDB } from '../utils/connectionDB'
import Reporte from '../models/Reporte'
import { revalidatePath } from 'next/cache'

export async function getAllReports() {
  try {
    await connectionDB()
    const res = await Reporte.find()

    return res
  } catch (error) {
    console.log(error)
  }
}

export async function getFindReports(ccEst) {
  try {
    await connectionDB()

    const res = await Reporte.find({ ccEst })

    return res
  } catch (error) {
    console.log(error)
  }
}

export async function createReport(formData) {
  try {
    await connectionDB()
    const newReport = new Reporte(Object.fromEntries(formData))

    await newReport.save()

    revalidatePath('/searchreport')
  } catch (error) {
    console.log(error)
  }
}

export async function updateReport(formData) {
  try {
    const id = formData.get('id')

    await connectionDB()
    await Reporte.findByIdAndUpdate(id, { estado: true })

    revalidatePath('/dashboard')
  } catch (error) {
    console.log(error)
  }
}

export async function deleteReport(formData) {
  try {
    const id = formData.get('id')

    await connectionDB()
    await Reporte.findByIdAndDelete(id)

    revalidatePath('/dashboard')
  } catch (error) {
    console.log(error)
  }
}
