# Electron Hack

Electron Hack will (hopefully) be a desktop project management app using Electron.

Modules
* [lowDB](https://github.com/typicode/lowdb)
* [pageJS](https://github.com/visionmedia/page.js)
* [ractiveJS](https://github.com/ractivejs/ractive)

# Installation
For some reason I cannot get the post install script for npm working, so you'll have to add a module
yourself:

```
cd node_modules && mkdir __base && cd __base && nul TYPE > index.js 
```

Then add this piece of code to index.js

```
module.exports = require('path').resolve(__dirname + '/../../') + '/';
```

This fixes routing for file paths by setting a base path.

# References

* [Quick start](https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md "Getting started with Electron")
* [Official docs](https://github.com/atom/electron/tree/master/docs "Electron documentation")
* [Architecture overview](https://github.com/ilyavorobiev/atom-docs/blob/master/atom-shell/Architecture.md "Electron architecture")

