const express = require ('express');
const app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/html/index.html')
    });



app.listen(8080,function(erro){
    if(erro){
        console.log('Ocorreu um erro!');
    }else{
        console.log("Alredy Connection");
    }
})