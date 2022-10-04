const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()

dotenv.config({ path: './config.env' })

require('./db/conn')

const authRout = require('./router/auth')

const PORT = process.env.PORT

const middleware = (req, res, next) => {
  next()
}
app.use(express.json())
app.use(authRout)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
