const users = require("../users.json")

function checkPassword(email, password) {
  const user = users.find(user => user.email === email && user.password === password)
  // console.log(user.firstName)
  if (user) {
    return user.firstName
  } else {
    return 0
  }

}

module.exports = checkPassword