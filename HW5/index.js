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

app.get('/', function(req,res){
    res.type('text/html');
    res.render('home', {hams: ham.allHams()} );    
});

app.get('/detail/:name', function(req,res){
    res.type('text/html');
    console.log(req.body.callsign + ' detail this is calling the /detail path'); 
    var found = ham.get(req.params.callsign);
    if (!found) {
        found = {callsign: req.params.callsign};
    }
    res.render('detail', {callsign: found} );    
});

app.get('/about', function(req,res){
    res.type('text/html');
    res.render('about');
});

app.post('/search', function(req,res){
    res.type('text/html');
    console.log(req.body.callsign + ' search this is calling the /detail path'); 
    var found = ham.get(req.body.callsign);
    if (!found) {
        
        found = {callsign: req.body.callsign};
    }
    res.render('detail', {ham: found} );    
});

app.post('/add', function(req,res) {
    res.type('text/html');
    
    let completeHam = {callsign : req.body.callsign, operator : req.body.operator, zip : req.body.zip};
    let result = ham.add(completeHam);
    res.render('detail', {ham: completeHam, result: result});   
    
    console.log(completeHam);
    console.log(result); 
});

app.post('/delete', function(req,res){
    res.type('text/html');
    var deleted = ham.delete(req.body.callsign);
    res.render('delete', {name: req.query.callsign, result: deleted});    
});


app.use(function(req,res) {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), function() {
    console.log('Express started; hit Ctrl+C to terminate.');    
});