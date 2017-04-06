//bookswitch.js

var http = require ('http'); 
fs = require ('fs'); 

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
    
    // Normalizing the url, making the extra trailing slash optional, 
    // making the url lowercase. 
    
    var path = req.url.replace (/\/?(?:\?.*)?$/, '').toLowerCase();
    
    // The switch!
    
    switch(path) {
        case '': 
            serveStaticFile(res, '/public/home.html', 'text/html');
            break; 
        case '/about': 
            serveStaticFile(res, '/public/about.html', 'text/html');
            break; 
        
        default:  
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
    
        
        
}).listen(3000); 

console.log('Server started on 127.0.0.1:3000; press Ctrl+C to terminate....'); 

