const userService = require('../services/userService')
const { serverError } = require('../utils/errorHandler')
const bcrypt = require('bcryptjs')
const { generateAccessToken } = require('../utils/token')

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

            const candidate = await userService.findByField('email', email)
            if (candidate) {
                throw new Error('User with this email is already exist')
            }

            const hasPass = bcrypt.hashSync(password, 5)
            const newUser = await userService.create({ login, email, password: hasPass})
            res.json(newUser)
        } catch (e) {
            serverError(res, e)
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body

            const user = await userService.findByField('email', email)
            if (!user) {
                throw new Error('User is not exist')
            }

            const comparePass = bcrypt.compareSync(password, user.password)
            if (!comparePass) {
                throw new Error('Password is wrong')
            }

            const token = generateAccessToken(user._id, user.email)
            res.json({ token })
        } catch (e) {
            serverError(res, e)
        }
    }
}

module.exports = new UserController()
