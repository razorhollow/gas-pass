import { Ticket } from '../models/ticket.js'
import { Profile } from '../models/profile.js'
import random from 'random-key-generator'

function index(req, res) {
  Ticket.find({employee: req.user.profile._id})
  .then(tickets => {
    res.render('tickets/index', {
      title: "Dashboard",
      tickets

  })
  })
}

function newTicket(req, res) {
  // console.log('THE TICKET NUMBER IS: ', random(6).toUpperCase())
  res.render('tickets/new', {
    title: "New Ticket",
    ticketNumber: random(6).toUpperCase()
  })
}

function create (req, res) {
  req.body.employee = req.user.profile._id
  Ticket.create(req.body) 
  .then(ticket => {
    Profile.findById(req.user.profile._id)
    .then(profile=> {
      console.log(profile)
      profile.tickets.push(ticket._id)
      profile.save()
      .then(() => {
        res.redirect('/tickets')
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
  newTicket as new,
  create
}