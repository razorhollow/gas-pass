import mongoose from 'mongoose'

const Schema = mongoose.Schema


const profileSchema = new mongoose.Schema({
  name: String,
  balance: {type: Number, min: 0, max: 200, default: 100},
  isAdmin: {type: Boolean, default: true},
  isActive: {type: Boolean, default: true},
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
