import { connectionDB } from '../utils/connectionDB'
import Reporte from '../models/Reporte'

export async function getAllReports() {
  try {
    await connectionDB()
    const res = await Reporte.find()

    return res
  } catch (error) {
    console.log(error)
  }
}

export async function getFindReports({ formData }) {
  try {
    await connectionDB()

    const res = await Reporte.find()

    return res
  } catch (error) {
    console.log(error)
  }
}
