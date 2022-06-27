import mongoose from "mongoose"

const Schema = mongoose.Schema
const ticketSchema = new Schema({
  ticketNumber: String,
  amount: Number,
  employee: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Ticket = mongoose.model('Ticket', ticketSchema)

export {
  Ticket
}