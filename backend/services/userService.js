const User = require('../schemas/User')

class userService {
    create (user) {
        return User.create(user)
    }
    getAll () {
        return User.find()
    }
}

module.exports = new userService()
