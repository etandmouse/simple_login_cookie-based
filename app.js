const express = require('express')
const app = express()
const users = require("./users.json")
const port = 3000


app.get('/', (req, res) => {
  res.send("This is simple login project")
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})