import { Router } from 'express'
import { authToken } from '../middlewares.js'

const router = Router()

router.get('/protected', authToken, async (req, res) => {
  // const posts = await prisma.post.findMany({
  //   where: { user_id: req.user.id }
  // })

  res.json({
    message: 'You have successfully accessed the protected route!',
    currentUser: req.user
  })
})

export default router
