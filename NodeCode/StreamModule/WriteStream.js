console.log('.................WriteStream.js has started successfully..........')

var fs= require('fs');

var SampleData="This is my test data. this data is written by WriteStream functionality in node.js"

var writeStreamData= fs.createWriteStream('fileStore/WriteDataToFIle.txt')

writeStreamData.write(SampleData,'utf8');

writeStreamData.end()

writeStreamData.on('finish',function()
{
    console.log('Files written succesfully');
})

writeStreamData.on('error',function(err)
{
    console.log(err.stack)
})