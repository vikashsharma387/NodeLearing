const newman = require('newman'); // reuire newman in your project
const fs = require('fs');


newman.run({
    collection: require('./SaveResponseToCSVFileSystem.json'),
    reporters: 'cli'
}).on('request',(error,data)=>
{
    if(error)
    {
        console.log(error);
        return;
    }

    const fileName= `response ${data.item.name}.txt`;
    const Content= data.response.stream.toString()

    fs.writeFile(fileName,Content,function(error){
        if (error)
        {
            console.log(error);
        }
    })
    console.log('Request Name : ' + data.item.name)
    console.log(data.response.stream.toString());
}
);



// const fs  = require('fs');
// const { mainModule } = require('process');

// fs.writeFile('response.csv','Some text from Postman', function(error)
// {
//     if(error)
//     {
//         console.error(error);
//     }
// });