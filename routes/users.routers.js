const express = require('express')
const router = express.Router()

const {
    get_all_users,
    get_all_comments,
    add_new_user,
    add_new_comment,
} = require('../controllers/users.controllers.js')

router.get('/allusers', get_all_users);
router.get('/allcomments', get_all_comments)
router.post('/addNewUser', add_new_user);
router.post('/addNewComment', add_new_comment);

module.exports = {
    router,
}