import { Router } from 'express'
import { validateTokenRequest } from '../validators.js'
import prisma from '../prisma.js'
import bcrypt from 'bcrypt'
import randomstring from 'randomstring'

const router = Router()

router.post('/token', validateTokenRequest, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { email: req.body.email }
  })

  if (!user) {
    return res.status(401).json({
      message: 'Invalid email'
    })
  }

  const validPassword = bcrypt.compareSync(req.body.password, user.password)

  if (!validPassword) {
    return res.status(401).json({
      message: 'Invalid password'
    })
  }

  const token = randomstring.generate()
  await prisma.token.create({
    data: {
      token,
      user_id: user.id,
      expires_at: new Date(Date.now() + 31536000000)
    }
  })

  res.json({ token })
})

export default router
