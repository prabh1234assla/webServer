const http = require("http")
const fs = require("fs")
const port = 8000

http.createServer((req, res)=>{
    console.log(`${req.method} method accessing the url ${req.url}`)
    if(req.method === "GET")
        gettingData(req, res)

    if(req.method === "POST")
        puttingData(req, res)
}).listen(port, (err)=>{
    if(err !== null)
        console.error(err)
    else
        console.log(`server running successfully on port ${port}`)
})

function gettingData(req, res){
    res.writeHead(200, {"Content-Type" : "text/html"})
    fs.createReadStream("./post.html", "utf-8").pipe(res)
}

function puttingData(req, res){
    let returnedData = ""

    req.on("data", (info)=>returnedData+=info)

    req.on("end", ()=>{
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>data submitted...</title>
        </head>
        <body>
            ${returnedData}
        </body>
        </html>`)
    })
}