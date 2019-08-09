require('dotenv').config()

const http = require('http')
const path = require('path')
const express = require('express')
const app = require('./app')
const server = http.createServer(app)


const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
    
})