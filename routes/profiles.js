import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET localhost:3000/tickets
router.get('/', isLoggedIn, profilesCtrl.index)

// GET localhost:3000/tickets/new
router.get('/new', isLoggedIn, profilesCtrl.new)

// GET localhost:3000/tickets/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)

// GET localhost:3000/tickets/:id/edit
router.get('/:id/edit', profilesCtrl.edit)

// POST localhost:3000/tickets
router.post('/', isLoggedIn, profilesCtrl.create)

// PUT localhost:3000/tickets/:id
router.put('/:id', isLoggedIn, profilesCtrl.update)

// DELETE localhost:3000/tickets/:id
router.delete('/:id', isLoggedIn, profilesCtrl.delete)

export {
  router
}