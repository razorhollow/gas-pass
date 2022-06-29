import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import { isAdmin } from '../middleware/middleware.js'
import * as adminCtrl from '../controllers/admin.js'

const router = Router()

// GET localhost:3000/admin
router.get('/', isLoggedIn, isAdmin, adminCtrl.index)

//POST localhost:3000/admin
router.post('/', isAdmin, adminCtrl.createAllowance)

//PUT LOCALHOST:3000/admin
router.put('/', isAdmin, adminCtrl.updateAllowance)

export {
  router
}
