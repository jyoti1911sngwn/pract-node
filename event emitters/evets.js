//getting event CLASS
const EventEmitter = require('events')

//instance craeted
const emitter = new EventEmitter();
//define event - kis event ko listen krna chahte ho
emitter.on("greet", ()=>{
    console.log('Hello World')
})
//trigger/cal event - signal do / call kro
// emitter.emit("greet") - listener added two times

//passing arguments
emitter.on("greet", (a)=>{
    console.log(`${a.name} In NOde ${a.pass}`)
})
emitter.emit("greet" , {name:"Hello World!", pass: "1234567"})


