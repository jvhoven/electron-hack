var fs = require("fs");
var path = require("path");
var linguist = require('hack-linguist');

var hackModels = angular.module('hackModels', []);

hackModels.factory('Project', function(){
	
	// Our wannabe constructor
	var Project = function(data) {
		
		angular.extend(this, {
			url: data.url,
			color: this.setColor(),
			name: data.name || this.setName(data.url),
			languages: data.language || this.setLanguages(data.url),
			description: data.description || this.randomDescription(),
			options: data.options || {},	
		});
		angular.extend(this, data);
	};
	
	// Set one of our pretty colors as color :D
	Project.prototype.setColor = function() {
		
		// All our pretty colors
		var colors = [ 
		  "#37BC9B", "#3BAFDA", "#5D9CEC", "#4A89DC", "#5D9CEC", "#48CFAD", 
		  "#A0D468", "#8CC152", "#FFCE54", "#F6BB42", "#FC6E51", "#E9573F",
		  "#ED5565", "#DA4453", "#AC92EC", "#967ADC", "#EC87C0", "#D770AD",
		  "#656D78", "#AAB2BD"
		];
				
		return colors[Math.floor((Math.random() * colors.length - 1))];
	};
	
	/*
	* Set the project name
	*
	* Very easy, we just get the last bit of the path.
	*/
	Project.prototype.setName = function(url) {
		var bits = url.split("\\");
		return bits[bits.length - 1].charAt(0).toUpperCase() + bits[bits.length - 1].slice(1);
	}
	
	/* Attempt to read travis.yml for language
	* 
	*  For now we'll use this shallow approach, but we might implement
	*  Linguist in the future.
	*/
	Project.prototype.setLanguages = function(url) {
		//return linguist.detect(url);
		return "BrainFuck";
	};
	
	/*
	* Random project description
	*
	* For the lulz
	*/
	Project.prototype.randomDescription = function() {
		
		var descriptions = [
			"Making a rune platebody requires 99 Smithing, 5 runite bars, and a hammer. To wear a rune platebody, players must have completed the Dragon slayer quest and have 40 Defence.",
			"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			"Perfection is not attainable, but if we chase perfection we can catch excellence.",
			"We know what we are, but know not what we may be.",
			"Nothing is impossible, the word itself says 'I'm possible'!",
			"Change your thoughts and you change your world."			
		];
		
		return descriptions[Math.floor((Math.random() * descriptions.length - 1))];
	};
	
	return Project;
});

