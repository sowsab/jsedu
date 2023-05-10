const fs =  require('fs');

fs.writeFile('./writeme2.txt', '글이 입력됩니다2.',(err)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeme2.txt', (err,data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});