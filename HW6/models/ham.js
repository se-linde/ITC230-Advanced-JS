// ham.js

var credentials = require("../lib/credentials"); 


var mongoose = require("mongoose"); 

// remote db settings 
  var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 }  } };
  mongoose.connect(credentials.mongo.development.connectionString, options);


var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error!')); 


var hamSchema = mongoose.Schema({
    id: Number,
    callsign: String,
    operator: String,
    zip: String,
}); 

module.exports = mongoose.model('Ham', hamSchema); 