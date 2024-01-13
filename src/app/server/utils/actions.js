import { connectionDB } from '../utils/connectionDB';
import Reporte from '../models/Reporte';


export async function getAllReports() {
  try {
    await connectionDB()
    const res = await Reporte.find()

    console.log(res);
  } catch (error) {
    // console.log(error);
  }
}