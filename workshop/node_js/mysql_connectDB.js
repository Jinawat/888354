var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shopdb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected !!");
});

// var sql = "SELECT * FROM categories";
// con.query(sql, function (err, result, fields){
//     console.log(result);
// });