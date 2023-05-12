const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports = {
    generateAccessToken: (id, email) => {
        const payload = { id, email }

        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" })
    }
}
