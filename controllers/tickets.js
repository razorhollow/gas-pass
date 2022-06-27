import { Profile } from '../models/profile.js'
import random from 'random-key-generator'

function index(req, res) {
  console.log()
  res.render('tickets/index', {
    title: "Dashboard",
  })
}

export {
  index
}