const mongoose = require('mongoose')
const express = require('express')
const app = express()

const DB = 'mongodb+srv://akeyabhi:akeyabhi@cluster0.lhkgxf8.mongodb.net/connect-node?retryWrites=true&w=majority'

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndexes: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('SuccessFully connected')
  })
  .catch((err) => {
    console.log(' Error is comming=>', err)
  })

const middleware = (req, res, next) => {
  console.log('hello middleware')
  next()
}

app.get('/', (req, res) => {
  console.log('hllo app get request')
})
