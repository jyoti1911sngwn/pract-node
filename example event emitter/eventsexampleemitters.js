import {createReadStream , createWriteStream} from "fs"
import path from "path"

const inputFilepath = path.join(import.meta.dirname , "input.txt")
const outputFilepath = path.join(import.meta.dirname , "output.txt")

const readableStream = createReadStream(inputFilepath, {
    encoding : "utf-8",
    highWaterMark: 16,
})

const writeableStream = createWriteStream(outputFilepath)

readableStream.on("data" , (chunk)=>{
    console.log("Buffer chunk:" , Buffer.from(chunk))
    console.log("Recieved chunk:", chunk)
    writeableStream.write(chunk)
})

readableStream.on("end", ()=>{
    console.log("File read completed")
    writeableStream.end()
})

readableStream.on("error", (err)=>console.log(err))
writeableStream.on("error", (err)=>console.log(err))




// Buffer chunk: <Buffer 54 68 69 73 20 69 73 20 6c 69 6e 65 20 6f 6e 65>
// Recieved chunk: This is line one
// Buffer chunk: <Buffer 20 66 6f 72 20 74 65 73 74 69 6e 67 2e 0a 48 65>
// Recieved chunk:  for testing.
// He
// Buffer chunk: <Buffer 72 65 20 69 73 20 6c 69 6e 65 20 74 77 6f 2c 20>
// Recieved chunk: re is line two, 
// Buffer chunk: <Buffer 73 69 6d 70 6c 65 20 61 6e 64 20 63 6c 65 61 72>
// Recieved chunk: simple and clear
// Buffer chunk: <Buffer 2e 0a 4c 69 6e 65 20 74 68 72 65 65 20 63 6f 6e>
// Recieved chunk: .
// Line three con
// Buffer chunk: <Buffer 74 69 6e 75 65 73 20 74 68 65 20 73 6d 61 6c 6c>
// Recieved chunk: tinues the small
// Buffer chunk: <Buffer 20 74 65 73 74 2e 0a 41 6e 64 20 74 68 69 73 20>
// Recieved chunk:  test.
// And this 
// Buffer chunk: <Buffer 69 73 20 74 68 65 20 66 6f 75 72 74 68 20 6c 69>
// Recieved chunk: is the fourth li
// Buffer chunk: <Buffer 6e 65 2e 0a>
// Recieved chunk: ne.
