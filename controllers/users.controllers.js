const {
    getAllComments,
    getAllUsers,
} = require('../models/users.models.js')


const get_all_users = (req,res)=>{
    getAllUsers()
        .then(data=>{
           res.json(data)
        })
        .catch((err)=>{
           console.log(err)
           res.status(404).json({mesg: 'Not Found'})
        })  
}

const get_all_comments = (req,res)=>{
    getAllComments()
        .then(data=>{
            res.json(data)
        })
        .catch((err)=>{
            console.log(err)
            res.status(404).json({mesg: 'Not Found'})
        })   
}

module.exports = {
    get_all_users,
    get_all_comments,
    
}