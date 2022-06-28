import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET localhost:3000/tickets/:id
// router.get('/:id', isLoggedIn, profilesCtrl.show)

// GET localhost:3000/tickets/:id/edit
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit)

// PUT localhost:3000/tickets/:id
// router.put('/:id', isLoggedIn, profilesCtrl.update)

export {
  router
}