const http = require("http")
const fs = require("fs")
const port = 8000

const server = http.createServer((req, res)=>{
    // res.write("hello user...")

    res.writeHead(200, {"Content-Type" : "text/html"})
    fs.readFile('index.html', function(err, data){
        if(err){
            res.writeHead(404)
            res.write("error : FILE_NOT_FOUND")
        }
        else
            res.write(data)
    res.end()
    })
})

server.listen(port, (err)=>{
    if(err)
        console.error(err)
    else
        console.log(`server running successfully on port ${port}`)
})