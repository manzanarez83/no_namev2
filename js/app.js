//var numero1 = 2
//var numero2 =3

//console.log(numero1+numero2);

const http = require('http')

const server = http.createServer((req, res) => {  
    res.end("hello world from node js updated");

});

server.listen(3000) ;

const express=require('express')
const app=express()


app.get("/", req, res) => {
    res.send("Hello world from node js");
    const port = 8080
    app.listen(port,() => {console.log('A node Js API is listening on port: ${port}');
});

    

});
