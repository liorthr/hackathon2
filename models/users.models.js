const {db} = require('../config/connection.js')

const getAllUsers = ()=>{
    return db('hero_infos')
    .select('*')
}

const getAllComments =()=>{
    return db('comments_hero')
    .select('*')
}

module.exports = {
    getAllUsers,
    getAllComments,
    
}