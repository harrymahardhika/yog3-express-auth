import express from 'express'
import tokenRoute from './app/routers/token.js'

const app = express()
app.use(express.json())

app.use(tokenRoute)

export default app
