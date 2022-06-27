import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as ticketsCtrl from '../controllers/tickets.js'

const router = Router()

// GET localhost:3000/tickets
router.get('/', isLoggedIn, ticketsCtrl.index)

// GET localhost:3000/tickets/:id
router.get('/new', isLoggedIn, ticketsCtrl.new)

// // POST localhost:3000/profiles/:id/cats
// router.post('/:id/cats', isLoggedIn, ticketsCtrl.createTicket)

// // DELETE localhost:3000/profiles/cats/:id
// router.delete('/cats/:id', isLoggedIn, ticketsCtrl.deleteTicket)

export {
  router
}