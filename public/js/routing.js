var ipc = require('ipc');
var Ractive = require('ractive');
var page = require('page');
var fs = require('fs');
var __base = require('__base');
var controller = require(__base + 'app/controllers/projects');

// We use ractive for templating
Ractive.DEBUG = false;

/*
* All the templates inside our application
*/
var templates = {
  home: fs.readFileSync(__base + 'app/views/index.html').toString(),
  about: fs.readFileSync(__base + 'app/views/about.html').toString(),
  upload: fs.readFileSync(__base + 'app/views/upload.html').toString()
};

/*
* This array holds all the route data.
*/
var routes = {
  home: function(ctx) {
    // Get template for home
    ctx.template = templates.home;
    
    // Fetch projects
    var objs = controller.getAll();
    var projects = objs || false;
    
    // Render it!
   render(ctx, { page: "Recent projects", projects: projects, base: __base });
  },
  about: function(ctx) {
    
    // Get template for about page
    ctx.template = templates.about;
    
    // Render it!
    render(ctx, { page: "about", base: __base });
  },
  upload: function(ctx) {
    
    // Get template for upload page
    ctx.template = templates.upload;
    
    // Render it!
    render(ctx, { page: "upload", base: __base });
  }
};

// set up routes
page('/', routes.home);
page('/about', routes.about);
page('/upload', routes.upload);

// initialize router
page.start();
page('/');

function render (ctx, data) {
  var ract = new Ractive({
    el: '#content .wrapper',
    template: ctx.template,
    data: data
  });
  
  return ract;
}