console.log("Starting my Demo http module")
var  http = require('http')


//create server obejct

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("Hello World")
    res.end()
}).listen(8082);
