import express from 'express'
import tokenRoute from './app/routers/token.js'
import protectedRoute from './app/routers/protected.js'

const app = express()
app.use(express.json())

app.use(tokenRoute)
app.use(protectedRoute)

export default app
