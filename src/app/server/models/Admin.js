import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    identificacion: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    rol: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
)

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema)

export default Admin
