var express = require("express");
var lessMiddleware = require('less-middleware');
var app = express();
var logger = require("morgan");
var router = express.Router();
var path = __dirname + '/views/';
var fib = [0,1,1,2,3,5,8,13,21,34,55,89,144];

app.use(lessMiddleware(path));
app.use(express.static(path));
app.use("/",router);
app.use(logger('dev'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get('/fib', function(req,res) {
  res.send(fib);
});

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
