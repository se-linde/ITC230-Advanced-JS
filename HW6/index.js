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


// Get

app.get('/', (req, res) => {
    Ham.find((err,hams) => {
        if (err) return next(err); 
        res.render('home', {hams: hams});
        
    })
});


app.listen(app.get('port'), () => {
    console.log('Express started, hit Ctrl+C to end.');    
});