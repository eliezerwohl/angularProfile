
var express = require('express');
var app = express();
var logger = require('morgan');




app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/public/index.html")
})


var port = process.env.PORT || 9000;
app.listen(port, function() {
	console.log("listening on port:" + port);
});