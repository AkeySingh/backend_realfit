const mongoose = require('mongoose')

const DB = process.env.DATABASE
mongoose
  .connect(DB)
  .then((res) => {
    console.log('Data base connected successfully')
  })
  .catch((err) => {
    console.log('Data base is not connected', err)
  })
