console.log('demo_formidablemodule.js has started.............');

var http = require('http')
var url = require('url')
var fs = require('fs')
var formidable = require('formidable');

// This will produce the html form

http.createServer(function(req,res){

    var urlData= url.parse(req.url,true);
    console.log(urlData);

    var pathName= urlData.path;
    console.log(pathName);

    if(pathName == '/fileupload')
    {
        var form = new formidable.IncomingForm()
        form.parse(req, function(err,field,files)        
        {
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/VSCode/NodeCode/ServerUploadModule/' + files.filetoupload.originalFilename;

            fs.rename(oldpath,newpath,function(err)
            {
                if(err)
                {
                    throw err;
                }
                res.write('File uploaded and moved!');
                res.end()
            })
        })
    }
    else
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }


}).listen(8080);