console.log("Demo for readfile.js started")

var fs = require('fs')
var http = require('http')
http.createServer(function(req,res)
{
    fs.readFile('demofile1.html', function(err,data)
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8082)