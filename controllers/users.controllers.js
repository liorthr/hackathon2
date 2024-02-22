const {
    getAllComments,
    getAllUsers,
    addNewUser,
    addNewComment,
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

const add_new_user = (req,res)=>{
    const {name, 
        age,
        picture_url,
        describe_him,
        his_qualities,
        leylou_nishmat
    }=req.body
    addNewUser(name, 
        age,
        picture_url,
        describe_him,
        his_qualities,
        leylou_nishmat)
        .then(data=>{
            res.json(data)
        })
        .catch((err)=>{
            console.log(err)
            res.status(404).json({mesg: 'Not Found'})
        }) 
}

const add_new_comment = (req,res)=>{
    const {
        pseudo,
        email,
        description
    }= req.body
    addNewComment(
        pseudo,
        email,
        description)
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
    add_new_user,
    add_new_comment
    
}