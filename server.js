const express = require('express')
const app = express()
const {router} = require('./routes/users.routers.js')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'))

app.use(router)

app.listen(3001, ()=>{
    console.log('run on port 3001') 
})