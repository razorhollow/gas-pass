import mongoose from 'mongoose'

const Schema = mongoose.Schema


const profileSchema = new mongoose.Schema({
  name: String,
  isAdmin: {type: Boolean, default: true},
  isActive: {type: Boolean, default: true},
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
