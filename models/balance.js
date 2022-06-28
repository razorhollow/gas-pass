import mongoose from 'mongoose'

const balanceSchema = new mongoose.Schema({
  employee: {type: Schema.Types.ObjectId, ref: "Profile"},
  amount: Number,
}, {
  timestamps: true
})

const Balance = mongoose.model('Balance', balanceSchema)

export {
  Balance
}
