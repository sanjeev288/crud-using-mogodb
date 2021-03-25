const fs = require('fs');

fs.appendFile('read.txt','Data To Append Read.txt File',(err)=>{
    if(err) throw err;
  fs.readFile('read.txt', (error, input)=>{
    console.log(input.toString());
  })

})