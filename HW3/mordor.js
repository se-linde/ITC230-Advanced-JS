// mordor.js - sample project from textbook. 
// book example is meadowlark.js which - dull. 

"use strict"; // Need this to have let work here. 

var express = require('express'); 

// loads the fortune.js file. 
var fortune = require('./lib/fortune.js'); 

var app = express(); 

// Set up the handlebars. 
var handlebars = require('express-handlebars').create({ defaultLayout : 'main'});
app.engine('handlebars', handlebars.engine); 
app.set('view engine', 'handlebars');     

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// Web Pages. 

// / page. 
app.get('/', function(req, res) {
    res.render('home'); 
    // res.type('text/plain'); 
    // res.send("Mordor Travel - We're Always Watching!"); 
}); 

// about page. 

app.get('/about', function(req, res) {
    res.render('about', { fortune : fortune.getFortune() } ); 
    // res.type('text/plain'); 
    // res.send('About Mordor Travel'); 
}); 

app.get('/search', function(req, res) {
    // res.render('search', { fortune2 : fortune.getFortuneSearch() } ); 
    // res.type('text/plain'); 
    // res.send('About Mordor Travel'); 
    
    var header = "Looking for the following callsign: " + req.body.callsign<br>; 
    var match - callsign.get(req.body.callsign); 
    res.render("details", {callsign: req.body.callsign, result: match}); 
});

app.post('/search', function(req, res) {
    res.render('search', { fortune2 : fortune.getFortuneSearch() } ); 
    // res.type('text/plain'); 
    // res.send('About Mordor Travel'); 
});

/* app.get('/find', function(req, res) {
    res.render('find', { hamfind : fortune.getFortuneSearch() } ); 
    // res.type('text/plain'); 
    // res.send('About Mordor Travel'); 
}); */  


// custom 404 page. 
app.use(function(req, res, next) {
    res.status('404');
    res.render('404'); 
    // res.type('text/plain'); 
    // res.status(404); 
    // res.send('404 - Page Not Found.'); 
}); 

// custom 500 page.
app.use(function(req, res, next) {
    console.error(err.stack); 
    res.status('500');
    res.render('500'); 
    // res.type('text/plain'); 
    // res.status(500); 
    // res.send('500 - Server Error.'); 
}); 


app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' + app.get('port') + '\n' +  'Press Ctrl + C to terminate....' ); 
});  

/* app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
}); */ 
