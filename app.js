var ip = "127.0.0.1"
var port = 5002

var express = require('express');
app = express();
app.use(express.static(__dirname + '/front'));
app.listen(port, ip);

var http = require('http');
var httpServer = http.createServer(app);

console.log('Server running at http://'+ip+':'+port+'/');