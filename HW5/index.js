"use strict";
var express = require("express");
var app = express();

var ham = require("./lib/hams");

// configure Express app
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(require("body-parser").urlencoded({extended: true}));

// set template engine
var viewsPath = __dirname + '/views';  
var handlebars = require('express-handlebars').create({defaultLayout: 'main', extname: '.html', layoutsDir: viewsPath + '/layouts',  
  partialsDir: viewsPath + '/partials' });
app.engine('html', handlebars.engine);
app.set('views', viewsPath );
app.set('view engine', 'html' );

// get. Home. 

app.get('/', function(req,res){
    res.type('text/html');
    res.render('home', {hams: ham.allHams()} );    
});

// get. About. 

app.get('/about', function(req,res){
    res.type('text/html');
    res.render('about');
});

// get. Detail.

app.get('/get', function(req,res){
    res.type('text/html'); 
    var found = ham.get(req.query.callsign); 
    res.render('details', {result: found}); 
});

// post. Detail. 

app.post('/get', function(req,res){
    res.type('text/html'); 
    var found = ham.get(req.body.callsign); 
    res.render('details', {result: found}); 
}); 

// get. Delete. 

app.get('/delete', function(req,res){
    res.type('text/html'); 
    var result = ham.delete(req.query.callsign); 
    res.render('delete', {callsign: req.query.callsign, result: result});
});

// post. Add. (extra) (take out if not working.)

app.post('/add', function(req,res) {
    res.type('text/html');
    
    let completeHam = {callsign : req.body.callsign, operator : req.body.operator, zip : req.body.zip};
    let result = ham.add(completeHam);
    res.render('detail', {ham: completeHam, result: result});   
    
    console.log(completeHam);
    console.log(result); 
});

// use. 404. 

app.use(function(req,res) {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

// listen. Listen for console activity. 

app.listen(app.get('port'), function() {
    console.log('Express started; hit Ctrl+C to terminate.');    
});