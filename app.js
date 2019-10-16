
const fs = require('fs')

fs.readFile('example.csv','utf8', (e, text) =>{
    if (e){
        console.log(e)
    }
    console.log(text)
})