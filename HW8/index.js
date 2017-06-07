// HW 8 - by Dwayne Linde.

'use strict'

let express = require("express");
let bodyParser = require("body-parser"); 
let app = express();
let Ham = require("./models/ham"); 
// let cors = require('cors'); 



// Configure the Express app. 
app.set('port', process.env.PORT || 3000); 
app.use(express.static(__dirname + '/../public')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 
app.use('/api', require('cors')()); 
app.use((err, req, res, next) => {
    console.log(err); 
})

// Set the template engine. 
let handlebars = require("express-handlebars"); 
app.engine(".html", handlebars({extname: '.html', defaultLayout: 'main'})); 
app.set("view engine", ".html"); 

// Find callsigns. 
app.get('/', (req, res) => {
    Ham.find((err, hams) => {
        if (err) return next(err); 
        res.render('home', {hams: JSON.stringify(hams)}); 
    });
}); 

// About section. 
app.get('/about', (req, res) => {
    res.type('text/html'); 
    res.render('about');
}); 

// Apis. "Yaaaaaay!"

// api for single callsign.
app.get('api/ham/:callsign', (req, res, next) => {
    let callsign = req.params.callsign; 
    console.log(callsign); 
    Ham.findOne({callsign: callsign}, (err, result) => {
        if (err || !result) return next(err); 
        res.json( result ); 
    });
}); 

// api for multiple callsigns 
app.get('/api/hams', (req, res, next) => {
    Ham.find((err, results) => {
        if (err || !results) return next(err); 
        res.json(results); 
    });
}); 

// api for deletion of an item from the db. 
app.get('api/delete/:callsign', (req, res, next) => {
    Ham.remove({"callsign":req.params.callsign }, (err, result) => {
        if (err) return next(err); 
        // returns the number of items deleted. 
        res.json({"deleted": result.result.n}); 
    });
});

 
 

// app post for writing to the DB a new item. POST

app.post('/api/add/', (req, res, next) => {
    // Find and update existing item, or add a new one. 
    if(!req.body._id) { // Insert a new document.
        let ham = new Ham({callsign:req.body.callsign, 
        operator: req.body.operator, 
        zip: req.body.zip}); 
                          
            ham.save((err,newHam) => {
                                  
            if (err) return next (err); 
            console.log(newHam) // necessary line in code? 
            res.json({updated: 0, _id: newHam._id }); 
    });  
         
    } else { // Updates the existing document. 
        Ham.updateOne({ _id: req.body._id}, {callsign: req.body.callsign, operator: req.body.operator, zip: req.body.zip}, (err, result) => {
            if (err) return next(err); 
            res.json({updated: result.nModified, _id: req.body._id}); 
        });
    }
}); 





// api to add an item into the db via GET.  
app.get('api/add/:callsign/:operator/:zip', (req, res, next) => {
    // Either find & update existing item, or add new item. 
    let callsign = req.params.callsign; 
    Ham.update({callsign: callsign}, {callsign: callsign, operator: req.params.operator, zip: req.params.zip}, {upsert: true}, (err, result) => {
        if (err) return next (err); 
        //nModified = 0 for a new item, 1+ for a new item. 
        res.json({updated: result.nModified}); 
    });  
});


// 404 error. 
app.use((req, res) => {
    res.type('text/plain'); 
    res.status(404); 
    res.send('404 - page not found'); 
}); 

app.listen(app.get('port'), () => {
    console.log('Express Started - press Ctrl + C to end.'); 
}); 
