var tiny = require('tiny');
var __base = require('__base');

exports.db;

exports.connect = function() {
	
	var db = tiny(__base + 'app/data/projects.tiny', function(err, _db) {
		if(err)
			console.log(err);
			
		return _db;
	});	
	
	return db;
};

exports.add = function(name, color, url, language, options) {
	options = options || {};
	var description = "This is a sample description for your project, you can edit it anytime.";
	
	// Connect to db
	var db = exports.connect();
	
	db.set(name, {
		name: name,
		color: color,
		description: description,
		url: url,
		language: language,
		options: options
	}, function(err) {
		if(err)
			throw err;
			
		// We succesfully added a new project
	});
};

exports.remove = function(name) {
	
	var db = exports.connect();
	
	db.remove(name, function(err) {
		if(err)
			throw err;
			
		// We successfully deleted a project
	});
};

exports.get = function(name) {
	
	var db = exports.connect();
	
	db.get(name, function(err, data) {
		if(err)
			return null;
		
		return data;
	});
};

exports.getAll = function() {
	var db = this.connect();
	var data = [];
	
	db.each(function(obj) {
		data.push(obj);
	});
	
	return data;
};

exports.close = function () {
	var db = this.connect();
	
	db.close(function(err) {
		if(err)
			console.log(err);
	});
};
