const express = require('express');
const app = express()
const PORT = 3000
const http = require('http')
const server = http.createServer(app)
const path = require('path')
const {Server} = require("socket.io")
const io = new Server(server)
// app.listen(PORT, (req,res)=>{
//     console.log('listening on port ')
// })
app.use(express.static("/public"))

app.use(express.static(path.resolve("./public")))

app.get('/', (req,res)=>{
   return res.send('/public/index.html')
})

io.on('connection', (socket)=>{
    console.log("new user connected", socket.id)
    socket.on('user-message', (msg)=>{
        console.log("A new Msg", msg)
        io.emit("message", msg)
    })
})


server.listen(PORT, (req, res)=>{
    console.log('listening on port ')
})