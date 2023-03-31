const express = require('express')
const router = express.Router()
const checkPassword = require('../../utils/checkPassword')

router.get('/', (req, res) => {
  const userName = req.cookies.userName
  if (userName) {
    return res.render('success', { firstName: userName })
  }
  res.render('index')
})


router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const firstName = checkPassword(email, password)
  if (firstName) {
    res.cookie('userName', firstName)
    res.render('success', { firstName })
  } else {
    res.render('error')
  }

})

module.exports = router