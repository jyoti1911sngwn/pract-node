const fs = require('fs')
console.log(fs)

fs.writeFileSync("abc.txt" , "abc is abc")
fs.writeFile("abc3.txt" , "abc is abc", ()=>{
    console.log("done")
    fs.readFile("abc3.txt" , (error, data)=>{
        console.log(error, data, data.toString())
        //null <Buffer 61 62 63 20 69 73 20 61 62 63>
    })
})

fs.appendFile("abc.txt", "12345890 ", (err, data)=>{
    console.log(data, "datais1234567890")
})