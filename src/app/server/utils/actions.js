'use server'

import { connectionDB } from '../utils/connectionDB'
import Reporte from '../models/Reporte'
import Tecnico from '../models/Tecnico'
import { revalidatePath } from 'next/cache'

// action Techniques
export async function getAllTechniques() {
  try {
    await connectionDB()
    const res = await Tecnico.find()

    return res
  } catch (error) {
    return new Error(error)
  }
}

export async function getFindTechniques({ id }) {
  try {
    await connectionDB()
    const res = await Tecnico.findById(id)

    return res
  } catch (error) {}
  return new Error(error)
}

export const addReportTechnique = async (formData) => {
  try {
    const idReport = formData.get('idReport')
    const idTechnique = formData.get('idTechnique')

    await connectionDB()

    const reporte = await Reporte.findById(idReport)
    reporte.tecnico = idTechnique
    await reporte.save()

    revalidatePath('/dashboard')
  } catch (error) {
    return new Error(error)
  }
}

// action Reports

export async function getAllReports() {
  try {
    await connectionDB()
    const res = await Reporte.find()

    return res
  } catch (error) {
    return new Error(error)
  }
}

export async function getFindReports(ccEst) {
  try {
    await connectionDB()

    const res = await Reporte.find({ ccEst })

    return res
  } catch (error) {
    return new Error(error)
  }
}

export async function createReport(formData) {

  try {
    await connectionDB()
    const newReport = new Reporte(Object.fromEntries(formData))

    await newReport.save()

    revalidatePath('/searchreport')
  } catch (error) {
    return new Error(error)
  }
}

export async function updateReport(formData) {
  try {
    const id = formData.get('id')

    await connectionDB()
    await Reporte.findByIdAndUpdate(id, { estado: true })

    revalidatePath('/dashboard')
  } catch (error) {
    return new Error(error)
  }
}

export async function deleteReport(formData) {
  try {
    const id = formData.get('id')

    await connectionDB()
    await Reporte.findByIdAndDelete(id)

    revalidatePath('/dashboard')
  } catch (error) {
    return new Error(error)
  }
}
