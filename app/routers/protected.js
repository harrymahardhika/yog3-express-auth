import { Router } from 'express'
import { Permission } from '../authorization.js'
import { authToken, authorizePermission } from '../middlewares.js'

const router = Router()

router.use(authToken)

router.get('/protected', authorizePermission(Permission.ADD_BOOK), async (req, res) => {
  res.json({
    message: 'You have successfully accessed the protected route!',
    currentUser: req.user
  })
})

router.get('/books', authorizePermission(Permission.BROWSE_BOOKS), async (req, res) => {
  res.json({
    message: 'You have successfully accessed the books route!'
  })
})

router.post('/books', authorizePermission(Permission.ADD_BOOK), async (req, res) => {
  res.json({
    message: 'You have successfully accessed the books route!'
  })
})

export default router
