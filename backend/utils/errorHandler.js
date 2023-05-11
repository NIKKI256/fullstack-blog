module.exports = {
    serverError: (res, e) => {
        return res.status(500).json(e.message)
    }
}
