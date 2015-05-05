var express = require('express');

var app = express();

var userPort = 3000;
var root = __dirname + '/public';
var router = require('./public/routes/router.js');


app.use(express.static(root));
app.set('views', root + '/views');
app.set('view engine', 'jade');


app.use('/', router);


app.listen(userPort, function(){
    console.log("Planner is running! on port: " + userPort);
})