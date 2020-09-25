//var numero1 = 2
//var numero2 =3

//console.log(numero1+numero2);

const http = require('http')

const server = http.createServer((req, res) => {  
    res.end("hello world from node js");

});

server.listen(3000) ;