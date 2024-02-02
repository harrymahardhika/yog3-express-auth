import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { Router } from 'express'
import prisma from '../prisma.js'
import { validateTokenRequest } from '../validators.js'

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

  if (user.is_blocked) {
    return res.status(401).json({
      message: 'User is blocked'
    })
  }

  const validPassword = bcrypt.compareSync(req.body.password, user.password)

  if (!validPassword) {
    return res.status(401).json({
      message: 'Invalid password'
    })
  }

  let token
  do {
    token = crypto.randomBytes(64).toString('base64')
  } while (await prisma.token.findUnique({ where: { token } }))

  await prisma.token.create({
    data: {
      token,
      user_id: user.id,
      expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
    }
  })

  res.json({ token })
})

export default router
