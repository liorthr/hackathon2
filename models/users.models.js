const {db} = require('../config/connection.js')

const getAllUsers = ()=>{
    return db('hero_infos')
    .select('*')
}

const getAllComments =()=>{
    return db('comments_hero')
    .select('*')
}

const addNewUser = (
    userName, 
    userAge,
    pictureUrl,
    describeHim,
    hisQualities,
    leylouNishmat,
    )=>{
    return db('hero_infos')
    .insert({
        name: userName,
        age: userAge,
        picture_url: pictureUrl,
        describe_him: describeHim,
        his_qualities: hisQualities,
        leylou_nishmat: leylouNishmat,
    },['*'])
}

const addNewComment = (pseudoUser, emailUser, descriptionUser)=>{
    return db('comments_hero')
    .insert({
        pseudo: pseudoUser,
        email: emailUser,
        description: descriptionUser
    },['*'])
}

module.exports = {
    getAllUsers,
    getAllComments,
    addNewUser,
    addNewComment,
    
}