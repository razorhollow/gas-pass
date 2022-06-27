import mongoose from 'mongoose'

const balanceSchema = new mongoose.Schema({
  name: String,
  amount: {type: Boolean, default: true},
}, {
  timestamps: true
})

const Balance = mongoose.model('Balance', balanceSchema)

export {
  Balance
}
