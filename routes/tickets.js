import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as ticketsCtrl from '../controllers/tickets.js'

const router = Router()

// GET localhost:3000/tickets
router.get('/', isLoggedIn, ticketsCtrl.index)

// GET localhost:3000/tickets/new
router.get('/new', isLoggedIn, ticketsCtrl.new)

// GET localhost:3000/tickets/:id
router.get('/:id', isLoggedIn, ticketsCtrl.show)

// POST localhost:3000/profiles/:id/cats
router.post('/', isLoggedIn, ticketsCtrl.create)

// DELETE localhost:3000/tickets/:id
router.delete('/:id', isLoggedIn, ticketsCtrl.delete)

export {
  router
}