var fs = require("fs");
var path = require("path");
var __base = require("__base");
var controller = require(__base + "app/controllers/projects");

/*
* Is there any way to make this async instead of sync?
* TODO: MAKE IT ASYNCHRONOUS
*/
var project =  {
	init: function(url, color, name, language, options) {
		this.url = url.replace(/\\/g, '/');
		this.color = color;
		this.name = name || this.setName();
		this.language = language || this.setLanguage();
		this.options = options || {};
		
		return this;
	},
	
	// Save project to our database
	save: function() {
		console.log(this.name);
		return controller.add(this.name, this.color, this.url, this.language, this.options);
	},

	// Remove project from our database
	remove: function() {
		return controller.remove(this.name);
	},
	
	/* Attempt to read travis.yml for language
	* 
	*  For now we'll use this shallow approach, but we might implement
	*  Linguist in the future.
	*/
	setLanguage: function() {
		
		var data = fs.readFileSync(path.join(this.url, '/.travis.yml')).toString();

	    if(data.length > 0) {	  
			// Really ugly way to get the file
			// TODO: use regular expression
			var lines = data.split("\n");
			var objects = lines[0].split(":");
			var language = objects[1].replace(/\s+/g, '');

			// Set the language
	      	return language;
		}	  
	},
	
	/*
	* Set the project name
	*
	* Very easy, we just get the last bit of the path.
	*/
	setName: function() {
		var bits = this.url.split("/");
		return bits[bits.length - 1].charAt(0).toUpperCase() + bits[bits.length - 1].slice(1);
	}
};

module.exports = project;