const express = require('express')
const router = express.Router()

const {
    get_all_users,
    get_all_comments,
} = require('../controllers/users.controllers.js')

router.get('/allusers', get_all_users);
router.get('/allcomments', get_all_comments)

module.exports = {
    router,
}