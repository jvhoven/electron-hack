var low = require('lowdb');
var __base = require('__base');
var hackServices = angular.module('hackServices', []);

hackServices.factory('ProjectService', function() {
	
	/*
	* Make connection with our project lowdb
	*
	*/	
	this.db = function(table) {
		var db = low(__base + 'data/projects.json', {
			autosave: true,
			async: true    
		});
		
		return typeof(table == undefined) ? db : db(table);
	};
	
	this.getAll = function() {
		var data = this.db().object.projects;
		
		return data;	
		};
	
	this.delete = function() {
		// TODO
	};
	
	this.read = function() {
		// TODO	
	};
	
	this.update = function() {
		// TODO
		var db = this.db();
		
		db("projects")
	}
	
	this.create = function(project) {		
		// Connect to db
		var db = this.db();
		
		db("projects").push({
			name: project.name,
			color: project.color,
			description: project.description,
			url: project.url,
			language: project.language,
			options: project.options
		});
	};
	
	return this;
	
});