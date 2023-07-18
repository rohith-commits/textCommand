const { create } = require('combined-stream');
const fs = require('node:fs/promises')
const path = require('node:path')

const commandFile = path.basename(__dirname + '/command.txt');



fs.readFile(commandFile).then(result=>{
    const data = result.toString();
    
    const index = data.indexOf(' " ');
    const path1 = data.substring(index)
    
    if(data.includes('create a file')){
        
        createFile(path.basename(path1));
        console.log('file created')
    }
    if(data.includes('delete file')){
        deleteFile(path.basename(path1))
        console.log('file deleted')
    }
})

function createFile(fileName){
    fs.writeFile(fileName,"").catch((err)=>{
        console.log(`${err.name}\n${err.message}`)
    })
}

function deleteFile(fileName){
    fs.rm(fileName).catch((err)=>{
        console.log(`${err.name}\n${err.message}`)
    })
}



