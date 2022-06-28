import { Ticket } from '../models/ticket.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  Ticket.find({})
  .then(tickets => {
    Profile.find({})
    .then(profiles => {
      res.render('admin/index', {
        title: 'Admin Dashboard',
        tickets,
        profiles
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
}