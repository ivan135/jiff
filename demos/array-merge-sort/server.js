var express = require('express');
var app = express();
var http = require('http').Server(app);
require('../../lib/jiff-server').make_jiff(http, { logs:true });

// Serve static files.
app.use('/demos', express.static('demos'));
app.use('/lib', express.static('lib'));
app.use('/lib/ext', express.static('lib/ext'));
http.listen(8080, function () {
  console.log('listening on *:8080');
});

console.log('Direct your browser to *:8080/demos/array-merge-sort/client.html.');
console.log('To run a node.js based party: node demos/array-merge-sort/party <input>');
console.log();
