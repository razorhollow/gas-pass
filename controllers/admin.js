import { Ticket } from '../models/ticket.js'
import { Profile } from '../models/profile.js'
import { Allowance } from '../models/allowance.js'
import { Balance } from '../models/balance.js'
 
function index(req, res) {
  Ticket.find({})
  .populate('employee')
  .then(tickets => {
    Profile.find({})
    .then(profiles => {
      Allowance.findOne({})
      .then(allowance => {
        console.log('THIS IS THE ALLOWANCE', allowance)
        res.render('admin/index', {
          title: 'Admin Dashboard',
          tickets,
          profiles,
          allowance
      })
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createAllowance(req, res) {
  Allowance.create(req.body)
  .then(allowance => {
    res.redirect('/admin')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function updateAllowance(req, res) {
  Allowance.findOne({})
  .then(allowance => {
    allowance.updateOne(req.body, {new: true})
    .then(updatedAllowance => {
      res.redirect('/admin')
    })
  })
}

function refill(req, res) {
  Allowance.findOne({})
  .then(allowance => {
    Balance.find({})
    .then(balances => {
      balances.forEach(balance => {
        balance.amount = allowance.amount
        balance.save()
      })
      res.redirect('/admin')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
}


export {
  index,
  createAllowance,
  updateAllowance,
  refill
}