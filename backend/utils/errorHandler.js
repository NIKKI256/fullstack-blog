module.exports = {
    serverError: (res, e) => {
        return res.status(500).json({ message: e.message })
    }
}
