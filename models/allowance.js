import mongoose from 'mongoose'

const allowanceSchema = new mongoose.Schema({
  amount: Number,
}, {
  timestamps: false
})

const Allowance = mongoose.model('allowance', allowanceSchema)

export {
  Allowance
}
