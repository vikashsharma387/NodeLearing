console.log('Started the demo_fileserverUsecase............')

var http = require('http')
var fs = require('fs')
var url = require('url')

//Create the http server

http.createServer(function(req,res)
{
    var urlvalue= url.parse(req.url,true)
    console.log(urlvalue)

    var filename= '.' + urlvalue.pathname

    fs.readFile(filename, function(err,data)
    {
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end('Resource not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })

}).listen(8080)