import { Ticket } from '../models/ticket.js'
import { Profile } from '../models/profile.js'
import random from 'random-key-generator'

function index(req, res) {
  Ticket.find({employee: req.user.profile._id})
  .then(tickets => {
    Profile.findById(req.user.profile._id)
    .then(profile => {
      res.render('tickets/index', {
        title: "Dashboard",
        tickets,
        profile
    })

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

function show(req, res) {
  Ticket.findById(req.params.id)
  .populate('employee')
  .then(ticket => {
    res.render('tickets/show', {
      title: "Details",
      ticket
    })
  })
}

function deleteTicket(req, res) {
  Ticket.findByIdAndDelete(req.params.id)
  .then(ticket => {
    res.redirect('/admin')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/admin")
  })
}

function edit (req, res) {
  Ticket.findById(req.params.id)
  .populate('employee')
  .then(ticket => {
    res.render('tickets/edit', {
      ticket,
      title: "Edit Ticket"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/admin")
  })
}

function update (req, res){
  Ticket.findById(req.params.id)
  .then(ticket => {
    ticket.updateOne(req.body, {new: true})
    .then(updatedTicket => {
      res.redirect('/admin')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/admin")
  })
}

export {
  index,
  newTicket as new,
  create,
  show,
  deleteTicket as delete,
  edit,
  update
}