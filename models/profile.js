import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
  amount: Number,
  ticketNumber: String
})

const profileSchema = new mongoose.Schema({
  name: String,
  isAdmin: {type: Boolean, default: true},
  tickets: [ticketSchema],
  currentBalance: {type: mongoose.Schema.Types.ObjectId, ref: "Balance"}
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
