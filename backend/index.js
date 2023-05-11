const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routers/userRouter.js')
require('dotenv').config();

const PORT = 5000

const app = express()

app.use(express.json())
app.use(cors())
app.use('/apiUsers', userRouter)

async function runApp () {
    try {
        console.log('process.env.DB_URL', process.env.DB_URL)
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) })
    } catch (e) {
        console.log('Error in index.js: ', e)
    }
}

runApp()
