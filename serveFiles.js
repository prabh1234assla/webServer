const http = require("http")
const fs = require("fs")
const path = require("path")
const port = 3000

const server = http.createServer((req, res)=>{
    console.log(`${req.method} request for ${req.url}`)
    res.writeHead(200, {"Content-Type" : "text/html"})

    serving(req, res)
})

server.listen(port, (err)=>{
    if(err !== null)
        console.error(err)
    else
        console.log(`server running successfully on port ${port}`)
})

function serving(req, res){
    // console.log("kjdkjdjdj")
    if(req.url === "/index1"){
        fs.readFile('./public/index1.html', (err, data)=>{
            if(err){
                res.writeHead(404)
                res.write("error: FILE_NOT_FOUND")
            }
            else
                res.write(data)
        res.end()
        })
    }
    else if(req.url === "/index2"){
        fs.readFile('./public/index2.html', (err, data)=>{
            if(err){
                res.writeHead(404)
                res.write("error: FILE_NOT_FOUND")
            }
            else
                res.write(data)
        res.end()
        })
    }
    else if(req.url === "/index3"){
        fs.readFile('./public/index3.html', (err, data)=>{
            if(err){
                res.writeHead(404)
                res.write("error: FILE_NOT_FOUND")
            }
            else
                res.write(data)
        res.end()
        })
    }
    else{
        res.writeHead(404,  {"Content-Type": "text/plain"})
        res.end("error: FILE_NOT_FOUND") //can't use 
    }
}