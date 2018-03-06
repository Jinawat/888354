var path = require("path");
var filename = path.basename("workshop/node_js/basics.js");
var current_filename = path.basename(__filename);
console.log("filename : " + filename);
console.log("current_path : " + __filename);
console.log("current_filename : " + current_filename);

var dir = path.dirname("workshop/node_js/basics.js");
var current_dir = path.dirname(__filename);
console.log("dir : " + dir);
console.log("current_dir 1 : " + current_dir);
console.log("current_dir 2 : " + __dirname);

var join_path = path.join("workshop", "node_js", "basics.js");
console.log("join_path : " + join_path);