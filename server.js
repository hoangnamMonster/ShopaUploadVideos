const express = require('express');
const app =  express();
const multer  = require('multer');
const includeMulter = multer().any();
require('./util/readenv').config();
var path = require("path");

// app.use(multer().any());
function shouldParseRequest(req) {
  const currentMethod = req.method;
  const currentRoute = req.originalUrl;

  const restrictedRoutes = [{
    method: 'POST', originalUrl: '/'
  }];

  for(var i = 0; i < restrictedRoutes.length; i++ ) {
    if(restrictedRoutes[i].method == currentMethod && restrictedRoutes[i].originalUrl == currentRoute ) {
      return false;
    }
  }
  return true;
}

app.use(function(req, res, next) {
  shouldParseRequest(req) ? includeMulter(req, res, next) : next();
});
app.get('/js/video_upload.js', function (req, res) {
  res.sendFile(__dirname + '/public/js/video_upload.js');
});
app.get('/css/style.css', function (req, res) {
  res.sendFile(__dirname + '/public/css/style.css');
});
app.use(express.static('public'));

const routes = require('./routes/');
app.use('/', routes);
app.listen(process.env.PORT, function() {
  console.log("Server is listening at the port", process.env.PORT);
});


module.exports.app = app;
