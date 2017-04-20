//bookswitch.js
"use strict"; 

var http = require ('http'); 
var fs = require ('fs'); 
var qs = require("querystring"), hams = require("./lib/callsigns"); 



// var qsnew = require("querystring"), deleteObject = require("./lib/callsigns");

// This is the function that sets up the pathing and 

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200; 
    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain'}); 
            res.end('500 - Internal Error of Doom'); 
        } else {
            res.writeHead(responseCode, 
                {'Content-Type': contentType}); 
            res.end(data);         
        }
    }); 
}


// The switch in the app. 

http.createServer(function(req, res) {
    
    
    var url = req.url.split("?"); 
    console.log(url)
    
    var params = qs.parse(url[1]); 
    console.log(params); 
    
    let found = hams.get(params.callsign);
    // Normalizing the url, making the extra trailing slash optional, 
    // making the url lowercase. 
    
    var path = url[0].toLowerCase();
    
    // The switch!
    
    switch(path) {
        case '/': 
            res.writeHead (200, {'Content-Type': 'text/plain'});
            res.end('Welcome to the Callsign App!');
            break;
        
        case '/search':
            console.log(hams.get(params.callsign))
            res.writeHead (200, {'Content-Type': 'text/plain'});
            // res.end('Welcome to the Callsign App Search Page!'); 
            res.end('Callsign Results: ' + params.callsign + "\n" + JSON.stringify(found));
            break;    
        case '/add':
            console.log(hams.add(params.callsign))
            res.writeHead (200, {'Content-Type': 'text/plain'});
            res.end('Welcome to the callsign add page!'); 
            break;    
        case '/delete':
            var deletethis = hams.delete(params.callsign);
            console.log(hams.delete(params.callsign)) // THIS IS where 'delete' would be. 
            res.writeHead (200, {'Content-Type': 'text/plain'});
            res.end('Callsign record deleted' + '\n' + 'Callsign: ' + params.callsign + '\n' + 'Total Callsigns Remaining:' +  deletethis.Total);
            
            break;        
        default:  
            res.writeHead (404, {'Content-Type': 'text/plain'});
            res.end('404: page not found'); 
            break;
    }
    
        
}).listen(3000); 

console.log('Server started on 127.0.0.1:3000; press Ctrl+C to terminate....');