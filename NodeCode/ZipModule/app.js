console.log("Started the zip module for zipping the file and unzipping it")

const img = zip.folder("images");

for (const image of images) 
{ 
    const imageData = fs.readFileSync(image); 
    img.file(image, imageData); 
}