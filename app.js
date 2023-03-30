const express = require('express')
const app = express()
const exphps = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
const port = 3000

app.engine('hbs', exphps({ defaultlayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})