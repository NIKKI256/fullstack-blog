const User = require('../schemas/User')

class userService {
    create (user) {
        return User.create(user)
    }
    getAll () {
        return User.find()
    }
    findByField (field, value) {
        return User.findOne({ [field]: value })
    }
}

module.exports = new userService()
