var express = require('express');
var path = require('path');
var serveStatic = require('server-static');

app = express();
app.use(servStatic(__dirname));

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);



