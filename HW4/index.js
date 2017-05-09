// HW4 by Dwayne Linde

"use strict"; 

let ham = require ("./lib/ham.js"); 

const express = require("express"); 
const app = express(); 


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(require("body-parser").urlencoded({extended: true})); 


// Set up the handlebars. 
var handlebars = require("express-handlebars"); 
app.engine('.html', handlebars({extname: '.html'})); 
app.set("view engine", '.html'); 



// This sends the static files as a response. 

// home.html
app.get('/', function(req, res){
    res.type('text/HTML'); 
    res.sendFile(__dirname + '/public/home.html'); 
}); 

// about
app.get('/about', function(req, res){
    res.type('text/plain'); 
    res.send('This is the About Page for the Callsigns Log App.'); 
}); 

// delete
app.get('/delete', function(req, res){
    var result = ham.delete(req.query.callsign); 
    res.render('delete', {callsign: req.body.callsign, result: result});
}); 

//search-details
app.post('/get', function(req, res){
    console.log(req.body); 
    var header = 'Searching for callsign: ' + req.body.callsign + '<br>';
    var found = ham.get(req.body.callsign); 
    res.render("details", {callsign: req.body.callsign, result: found}); 
}); 

app.post('/add', function(req, res){
    // res.type('text/plain'); 
    // res.send('This is the New Add Page for the Callsigns Log App.'); 
    
    let totalHam = {callsign : req.body.callsign, operator : req.body.operator, zip : req.body.zip}; 
    let added = ham.add(totalHam); 
    res.render('add',{callsign: req.body.callsign, result: added});
}); 

//  - add.html. 
/* app.get('/add', function(req, res){
    let totalHam = {callsign : req.body.callsign, operator : req.body.operator, zip : req.body.zip}; 
    let added = ham.add(totalHam); 
    res.render('add', {callsign: req.body.callsign, result: added});
}); */ 

// 404 

app.use(function(req, res){
    res.type('text/plain'); 
    res.status(404); 
    res.send('404 - Page Not Found - please try again.'); 
}); 

// listen for express to start up. 
app.listen(app.get('port'), function(){
    console.log('Express has started on http://localhost: ' +
    app.get('port') + '; press Ctrl-C to terminate.'); 
}); 

