const express = require('express')
const router = express.Router()
const checkPassword = require('../../utils/checkPasswoed')

router.get('/', (req, res) => {
  res.render('index')
})


router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const firstName = checkPassword(email, password)
  if (firstName) {
    res.render('success', { firstName })
  } else {
    res.render('error')
  }

})

module.exports = router