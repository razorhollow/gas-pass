import mongoose from 'mongoose'

const Schema = mongoose.Schema

const balanceSchema = new mongoose.Schema({
  amount: Number,
}, {
  timestamps: true
})

const Balance = mongoose.model('Balance', balanceSchema)

export {
  Balance
}
