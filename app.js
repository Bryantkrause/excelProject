
// const fs = require('fs')

// fs.readFile('example.csv','utf8', (e, text) =>{
//     if (e){
//         console.log(e)
//     }
//     console.log(text) **** this is just a console log need to have this able for export into a different file i think
// })

// let file = 'C:\Users\bkrause\Desktop\workingClass\excelProject\example.csv'

function readTextFile()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'example.csv', false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile()