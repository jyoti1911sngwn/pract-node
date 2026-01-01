const express = require("express")
const app = express()


app.get('/', auth, (req,res,next)=>{
    console.log(`Home Page ${req.admin}`)
    res.send('Home Page')
    next()
})
app.use(logger)
app.get('/users', auth, (req,res)=>{
    console.log('users Page')
    res.send('users Page')
})

function logger(req, res, next){
    console.log('before')
    next()
     console.log('after')
}

function auth(req, res, next){
    if(req.query.admin === 'true'){
        req.admin = true
        next()
        return
    }else{
        res.send('No auth')
    }
    console.log('Auth')
}

app.listen(3000, (req,res)=>{
    console.log('listenging')
})
