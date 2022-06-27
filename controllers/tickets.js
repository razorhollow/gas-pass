import { Ticket } from '../models/ticket.js'
import random from 'random-key-generator'

function index(req, res) {
  res.render('tickets/index', {
    title: "Dashboard",
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
  
}

export {
  index,
  newTicket as new,
  create
}