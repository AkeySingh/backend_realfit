const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const PORT = process.env.PORT

const middleware = (req, res, next) => {
  console.log('middleware is applied to request')
  next()
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
