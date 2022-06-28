import { Ticket } from '../models/ticket.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  Ticket.find({})
  .then(tickets => {
    res.render('admin/index', {
      title: 'Admin Dashboard',
      tickets
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