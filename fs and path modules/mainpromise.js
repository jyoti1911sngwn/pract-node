const fs = require('fs/promises')
async function abc(){

    let a = await fs.readFile("abc.txt")
    console.log(a.toString())
    let b = await fs.writeFile("abc.txt", "1234567ytrewq", (err, data)=>{
        console.log(b)
    })
    let c = await fs.appendFile("abc.txt", "213435676890986546", (err, data)=>{
        console.log(b)
    })
}
abc()