const express = require('express')

module.exports = function (server) {
    const router = express.Router()
    server.use('/api', router)

    const userService = require('../api/user/userService')
    userService.register(router, '/users')
}
