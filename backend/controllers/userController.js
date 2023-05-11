const userService = require('../services/userService')
const { serverError } = require('../utils/errorHandler')
const bcrypt = require('bcryptjs')

class UserController {
    async getAll(req, res) {
        try {
            const users = await userService.getAll()
            res.json(users)
        } catch (e) {
            serverError(res, e)
        }
    }

    async create(req, res) {
        try {
            const { login, email, password } = req.body

            const hasPass = bcrypt.hashSync(password, 5)
            const newUser = await userService.create({ login, email, password: hasPass})
            res.json(newUser)
        } catch (e) {
            serverError(res, e)
        }
    }
}

module.exports = new UserController()
