console.log("Demo for file operations.js started")

var fs = require('fs')

// Command to create the file
// fs.appendFile('CreateFileAuto.txt','hello content',function(err)
// {
//     if(err)
//     {
//         //console.log(err.message)
//         throw err;
//     }
//     console.log('Saved')
// })

fs.open('CreateFileAuto.txt','w',function(err,data)
{
   fs.appendFile('CreateFileAuto.txt','This is the data written after opening the file usng fs.open',function(err1)
   {
    if(err1) throw err1
   })
    console.log(data)
})