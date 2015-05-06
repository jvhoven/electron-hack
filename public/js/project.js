var fs = require("fs");
var path = require("path");
var page = require("page");
var __base = require("__base");
var remote = require('remote');
var dialog = remote.require('dialog');

var project = require(__base + "app/model/project");
var controller = require(__base + "app/controllers/projects");

/*
* The random background colors for the projects
* they're pretty awesome
*/
var colors = [ 
  "#37BC9B", "#3BAFDA", "#5D9CEC", "#4A89DC", "#5D9CEC", "#48CFAD", 
  "#A0D468", "#8CC152", "#FFCE54", "#F6BB42", "#FC6E51", "#E9573F",
  "#ED5565", "#DA4453", "#AC92EC", "#967ADC", "#EC87C0", "#D770AD",
  "#656D78", "#AAB2BD"
 ];

// Drag & drop adding
var uploader = document.getElementById('upload');

uploader.ondragover = function () {
  return false;
};

uploader.ondragleave = uploader.ondragend = function () {
  return false;
};

uploader.ondrop = function (e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];
  var proj = project.init(file.path, colors[Math.floor((Math.random() * 19))]);
  
  // Save the project to tinyDB
  proj.save();
  dialog.showMessageBox(remote.getCurrentWindow(), { type: "info", message: "Project was successfully added!", title: "Success", buttons: [ "Ok" ]});
  
  // Reload the window
  page.redirect("/");  
  return false;
};