// HW7 by Dwayne Linde

// use as model for routes file: https://ide.c9.io/brendenw/itc230/lib/routes.js.
// https://github.com/brendenwest/itc230/blob/master/6_databases/index.js


"use strict"

var express = require("express");
var app = express();
var Ham = require("./models/ham"); 

// Express
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../public'));
app.use(require("body-parser").urlencoded({extended: true}));
app.use ((err, req, res, next) => {
    console.log(err)
}); 


// Templates via handlebars
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html', defaultLayout: 'main' }));
app.set("view engine", ".html");

// Calling the routes.js file. 
// var routes = require("./lib/routes"); 


// Get - Home Page

app.get('/', (req, res) => {
    Ham.find((err,hams) => {
        if (err) return next(err); 
        res.render('home', {hams: hams}); 
    });
});

// get - search details?

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
//GET requires REQ.QUERY

app.get('/get', (req,res) => {
   Ham.findOne ({ callsign:req.query.callsign }, (err, ham) => {
       if (err) return next(err); 
       res.type('text/html');
       res.render('details', {result: ham}); 
   });  
});

// Post - Details Page. 
// POST requires REQ.BODY

app.post('/get', (req,res) => {
   Ham.findOne ({ callsign:req.body.callsign }, (err, ham) => {
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

// Here is where the APIs live. 

// get. find. 
 app.get('/api/ham/:callsign', (req, res, next) => {
    let callsign = req.params.callsign; 
    console.log(callsign); 
    Ham.findOne({callsign: callsign}, (err, result) => {
        if (err || !result) return next(err); 
        res.json( result ); 
    }); 
});

// Get. Find.

app.get('/api/ham', (req, res, next) => {
    Ham.find((err, results) => {
        if (err || !results) return next (err); 
        res.json(results);   
    }); 
});

// Get. Remove/Delete.

app.get('/api/ham/delete/:callsign', (req,res) => {
    Ham.remove({"callsign" :req.params.callsign}, (err, result) => {
        if (err) return (err); 
        res.json({"deleted": result.result.n});    
    }); 
});

// Get. add. 

app.get('/api/ham/add/:callsign/:operator/:zip', (req, res, next) => {
    // find and update existing items, or add a new one. 
    let callsign = req.params.callsign; 
    Ham.update({ callsign: callsign}, {callsign:callsign, operator: req.params.operator, zip: req.params.zip }, {upsert: true }, (err, result) => {
        if (err) return next(err); 
        res.json({updated: result.nModified}); 
    }); 
}); 


// 404 

app.use((req,res) => {
    res.type('text/plain');
    res.status(404); 
    res.send("404 - Page Not Found. Perhaps this page is missing, or you entered data in the API wrong? Feel free to try again!"); 
}); 

// Listens for signals from beyond.

app.listen(app.get('port'), () => {
    console.log('Express started for HW7, hit Ctrl+C to end.');    
});