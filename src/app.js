const express = require('express')
require('./db/mongoose.connect') // Connect to DB

const demoRouter = require('./routers/demo.router')

const app = express()
app.use(express.json())
app.use(demoRouter)

module.exports = app