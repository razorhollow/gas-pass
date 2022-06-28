import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new mongoose.Schema({
  amount: Number,
  ticketNumber: String
})

const profileSchema = new mongoose.Schema({
  name: String,
  isAdmin: {type: Boolean, default: true},
  tickets: [ticketSchema],
  employee: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
