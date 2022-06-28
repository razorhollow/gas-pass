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

// GET localhost:3000/tickets/:id/edit
router.get('/:id/edit', ticketsCtrl.edit)

// POST localhost:3000/tickets
router.post('/', isLoggedIn, ticketsCtrl.create)

// PUT localhost:3000/tickets/:id
router.put('/:id', isLoggedIn, ticketsCtrl.update)

// DELETE localhost:3000/tickets/:id
router.delete('/:id', isLoggedIn, ticketsCtrl.delete)

export {
  router
}