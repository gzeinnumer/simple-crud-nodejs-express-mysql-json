//todo 6
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_simple_nodejs_crud"
});

con.connect(function (err){
    if(err) throw err;
    console.log("Connected!");
});

module.exports = con;