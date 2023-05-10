console.log("Starting my Demo http  query String module")

var http = require('http')
var url = require('url')

http.createServer(function(req,res){
    console.log(req.url)
    res.writeHead(200, {'Content-Type': 'text/html'});
    var qstring = url.parse(req.url,true).query;
    //console.log('querystring ' + qstring.toString())
    var QueryParamData =  qstring.year +'        '+  qstring.month;

    console.log('query params in year and month are :   ' + QueryParamData)
    res.write(QueryParamData);
    res.end
}).listen(8082)