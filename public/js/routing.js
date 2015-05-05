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
  upload: fs.readFileSync(__base + 'app/views/upload.html').toString(),
  todo: fs.readFileSync(__base + 'app/views/todo.html').toString()
};

/*
* This array holds all the route data.
*/
var routes = {
  home: function(ctx) {
    ctx.template = templates.home;
    
    // Fetch projects
    var data = controller.getAll();
    var projects = data || false;
    
    // Render
   render(ctx, { projects: projects, page: "home" });
  },
  about: function(ctx) {
    ctx.template = templates.about;
    render(ctx, { page: "about" });
  },
  upload: function(ctx) {
    ctx.template = templates.upload;
    render(ctx, { page: "upload" });
  }
};

// set up routes
page('/', routes.home);
page('/about', routes.about);
page('/upload', routes.upload);
page('/todo', function(ctx) {
  ctx.template = templates.todo;
  render(ctx, { page: "todo" });
});

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