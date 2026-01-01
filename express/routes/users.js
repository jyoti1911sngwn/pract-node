const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    console.log(req.query.name)
    res.send("user list")
})
router.get('/new', (req,res)=>{
    res.send("user new form")
})
router.get('/:id', (req,res)=>{
    console.log(req.user)
    res.send(`user ${req.params.id}`)
})
router.post('/', (req,res)=>{
    const isValid = false
    if(isValid){
        users.push({firstname : req.body.firstname})
        res.redirect(`/users/${users.length-1}`)
    }
    else{
        res.render('users', {firstName: req.body.firstName})
    }
})
const users = [{name: 'keylie'}, {name:'jolly'}]
router.param("id", (req,res,next,id)=>{
    console.log(id)
    req.user = users[id]
    next()
})

module.exports = router