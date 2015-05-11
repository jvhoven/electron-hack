var low = require('lowdb');
var __base = require('__base');
var hackServices = angular.module('hackServices', []);

hackServices.factory('ProjectService', function () {
	
	/*
	* Make connection with our project lowdb
	*
	*/
	this.db = function (table) {
		var db = low(__base + 'data/projects.json', {
			autosave: true,
			async: true
		});

		return typeof (table == undefined) ? db : db(table);
	};

	this.getAll = function () {
		var data = this.db().object.projects;

		return data;
	};

	this.delete = function (name) {
		var db = this.db();

		db("projects").remove({
			name: name
		});
		
		return true;
	};

	this.read = function (name) {
		var db = this.db();
		
		var project = db("projects").find({
			name: name
		});
		
		return project;
	};

	this.update = function (name, project) {
		// TODO
		var db = this.db();
		
		db('projects')
			.chain()
			.find({ name: name })
			.assign({
				name: project.name,
				color: project.color,
				description: project.description
			})
			.value();
		
		alert("Saved!");
		
		db.save();
	};

	this.create = function (project) {		
		// Connect to db
		var db = this.db();

		db("projects").push({
			name: project.name,
			color: project.color,
			description: project.description,
			url: project.url,
			languages: project.languages,
			options: project.options
		});
	};

	return this;

});