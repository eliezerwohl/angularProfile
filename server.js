
var express = require('express');
var app = express();
var logger = require('morgan');
var mongoose = require('mongoose');


var uristring = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/projects';

mongoose.connect(uristring, function(err, res) {
	if (err) {
		console.log('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log('Succeeded connected to: ' + uristring);
	}
});



var Schema = mongoose.Schema;

var projectSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	github: {
		type: String,
		require: true
	},
	heroku: {
		type: String
	},
	about: {
		type: String
	},
	number:Number,
	portfolio:{type:boolean, default:false}
});

var Project = mongoose.model('Project', projectSchema);


app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/public/index.html")
})

app.get("/addProject", function(req, res) {
	var newItem = new Project({
		name: "dilly",
		github: "tilly",
		heroku: "willy",
		about: "silly",
	});
	newItem.save(function(err, project) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			
			res.send(project);
		}
	});
})

app.get("/projects", function(req, res) {

	Project.find(function(err, docs) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			
			res.send(docs);
		}
	});
});


var port = process.env.PORT || 9000;
app.listen(port, function() {
	console.log("listening on port:" + port);
});