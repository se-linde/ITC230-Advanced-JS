// HW6 by Dwayne Linde


"use strict"

var express = require("express");
var app = express();
var Ham = require("./models/ham"); 

// Express
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../public'));
app.use(require("body-parser").urlencoded({extended: true}));

// Templates via handlebars
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html', defaultLayout: 'main' }));
app.set("view engine", ".html");


// Get - Home Page

app.get('/', (req, res) => {
    Ham.find((err,hams) => {
        if (err) return next(err); 
        res.render('home', {hams: hams});
        
    });
});

// Get - About Page. 

app.get('/about', (req,res) => {
    res.type('text/html'); 
    res.render('about'); 
}); 

// Get - Details Page. 

app.get('/get', (req,res) => {
   Ham.findOne ({ callsign:req.query.callsign }, (err, ham) => {
       if (err) return next(err); 
       res.type('text/html');
       res.render('details', {result: ham}); 
   });  
});

// Post - Details Page. 

app.post('/get', (req,res) => {
   Ham.findOne ({ callsign:req.query.callsign }, (err, ham) => {
       if (err) return next(err); 
       res.type('text/html');
       res.render('details', {result: ham}); 
   });  
});

// Get - Delete Page

app.get('/delete', (req,res) => {
   Ham.remove ({callsign: req.query.callsign }, (err, result) => {
        if (err) return next (err); 
       let deleted = result.result.n !== 0; 
       Ham.count((err, total) => {
            res.type('text/html'); 
            res.render('delete', {callsign: req.query.callsign, deleted: result.result.n !== 0, total: total} );
       });
   }); 
});


// 404 

app.use((req,res) => {
    res.type('text/plain');
    res.status(404); 
    res.send('404 - Page Not Found'); 
}); 

// Listens for signals from beyond.

app.listen(app.get('port'), () => {
    console.log('Express started, hit Ctrl+C to end.');    
});