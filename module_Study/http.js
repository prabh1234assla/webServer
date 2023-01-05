const https = require("https")
const port = 443
const hostname = "en.wikipedia.org"
const path = "/wiki/Heart"
const method = 'GET'
const fs = require("fs")
let responseBody = ""

let options = {
    hostname : hostname,
    port : port,
    path : path,
    method : method
}

const req = https.request(options, (res)=>{
    console.log("response returned ") //response is a stream object "here our wikipedia page returned to us in binary"

    // console.log(res.statusCode, res.headers)

    res.setEncoding("utf-8")
    res.on("data", (info) => responseBody+=info)

    res.on("end", ()=>{
        fs.writeFile("Heart.html", responseBody, (err)=>{
            if(err !== null)
                console.error(err)
            else
                console.log("file has been written")
        })
    })
})

req.on("error", (err)=>{
    console.error(err)
})

req.end()