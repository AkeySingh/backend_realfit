const express = require('express')

const router = express.Router()
const User = require('../modals/userSchema')

router.get('/', (req, res) => {
  res.send('hello world server of the auth  Router.js')
})

router.post('/register', (req, res) => {
  const { name, email, phone, work, password } = req.body

  if (!name || !email || !phone || !work || !password) {
    return res.status(422).json({ error: 'Please fill the fields properly' })
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: 'Email  Already exist ' })
      }

      const user = new User(req.body)

      user
        .save()
        .then(() => {
          res.status(201).json({ message: 'user register succesfully' })
        })
        .catch(() => {
          res.status(400).json({ message: 'failed for any reason' })
        })
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
