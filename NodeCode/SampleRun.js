var http = require('http')
var dt = require('./mydatemodule')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write("Currentdate time is :  "  + dt.myDateTime() )
    res.end()
}).listen(8082)
