/*eslint no-console: 0*/
"use strict";

var port = process.env.PORT || 3000;


var images = {
	images: [{
		url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjr08KIx7jdAhWBGJAKHZNgDqkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.austinpetsalive.org%2Fadopt%2Fcats%2F&psig=AOvVaw1PG6YHyzy6Th6IDM6Ic_gc&ust=1536947834426625",
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