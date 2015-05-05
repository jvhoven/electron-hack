@echo off
node-debug app.js
electron --debug-brk=5858 .
start http://127.0.0.1:8080/debug?port=5858
pause