const express = require('express')
const app = express()
const epxhps = require('express-handlebars')

const users = require("./users.json")
const port = 3000

app.engine('hbs', epxhps({ defaultlayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})