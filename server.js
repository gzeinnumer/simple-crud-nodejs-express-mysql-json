// todo 1 npm -v
// todo 2 npm init // silahkan isi
// todo 3 npm install --save express mysql body-parser
// //todo 4
// CREATE TABLE IF NOT EXISTS `person` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `first_name` varchar(50) NOT NULL DEFAULT '0',
//     `last_name` varchar(50) NOT NULL DEFAULT '0',
//     PRIMARY KEY (`id`)
//   )

  //todo 5
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);