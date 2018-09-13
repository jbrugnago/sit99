/*eslint no-console: 0*/
"use strict";

var port = process.env.PORT || 3000;


var images = {
	images: [{
		url: "https://www.scarymommy.com/wp-content/uploads/2018/01/c1.jpg?w=700",
		description: "cat"
	}]
};

var express = require("express");
var app = express();
 
app.get("/images", function (req, res) {
  res.send(JSON.stringify(images));
});
 
app.listen(port);

/*
http.createServer(function (req, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	res.end(JSON.stringify(images));
}).listen(port);
*/

console.log("Server listening on port %d", port);