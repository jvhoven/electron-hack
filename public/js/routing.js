var ipc = require('ipc');
var Ractive = require('ractive');
var page = require('page');
var fs = require('fs');
var __base = require('__base');
var controller = require(__base + 'app/controllers/projects');

// We use ractive for templating
Ractive.DEBUG = false;

// Keep track of active page
var CURR_PAGE;

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
    
    /*if(CURR_PAGE == "home")
        return false;*/
    
    // Get template for home
    ctx.template = templates.home;
    
    // Fetch projects
    var objs = controller.getAll();
    var projects = objs || false;
    
    // Render it!
   render(ctx, { page: "home", title: "Recent projects", projects: projects, base: __base });
  },
  about: function(ctx) {
    
    /*if(CURR_PAGE == "about")
        return false;*/
    
    // Get template for about page
    ctx.template = templates.about;
    
    // Render it!
    render(ctx, { page: "about", title: "About", base: __base });
  },
  upload: function(ctx) {
   
    /*if(CURR_PAGE == "upload")
        return false;*/
    
    // Get template for upload page
    ctx.template = templates.upload;
    
    // Render it!
    render(ctx, { page: "upload", title: "Upload a project", base: __base });
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
  
  /*if(typeof(CURR_PAGE) == 'undefined') {
    CURR_PAGE = "home";
  } else {
    CURR_PAGE = data.page;
  }*/
  
  return ract;
}