 console.log('Readstream module started')
 var fs= require('fs');
 var data='';

 var readstream= fs.createReadStream('fileStore/SampleTestFIle1.txt');

 readstream.on('data',function(chunk){
    data+=chunk;
    console.log(data);
 })

 readstream.on('end',function()
 {
   console.log(data);
 })

 readstream.on('error',function(err){
   console.log(err.stack);
 })
