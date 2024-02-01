import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import { config } from 'dotenv'
import prisma from '../app/prisma.js'

config()

const bcryptRound = Number(process.env.BCRYPT_ROUND)

async function main() {
  await prisma.user.deleteMany()

  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        name: faker.person.fullName(),
        password: bcrypt.hashSync(`password${i}`, bcryptRound)
      }
    })
  }
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
