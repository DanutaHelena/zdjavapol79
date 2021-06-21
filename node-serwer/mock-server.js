const http = require('http');

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Czesc');
});

server.listen(3200, '127.0.0.1', () => {
    console.log('uruchomiony serwer');
});
