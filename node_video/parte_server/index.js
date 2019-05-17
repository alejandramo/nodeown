const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/plain' });
    res.write('<h1>Hola mundo desde Nodejs</h1>');
    res.write("Este es texto sin h1");
    res.end();
}). listen(3000);

/*
// Otra manera de hacerlo:
const server = http.createServer(handleServer);

server.listen(3000, function() {
    console.log.green('Server on port 3000');
});
*/