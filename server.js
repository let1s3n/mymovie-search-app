var path = require('path');
var express = require('express');

var app = express();
/* if (process.env.NODE_ENV == 'development')
require('dotenv').config({ silent: true }); */
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);


var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});