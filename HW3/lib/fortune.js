// fortune.js; loaded by the about page of the app. 

"use strict"; // Need this to have let work here. 

var fortuneCookies = [
	"Conquer your fears or they will conquer you in Mordor.",
	"Rivers need springs in Mordor.",
	"Do not fear what you don't know in Mordor.",
	"You will have a pleasant surprise in Mordor.",
	"Whenever possible, keep it simple in Mordor.",
];

var fortuneCookies2 = [
	"Conquer your fears or they will conquer you in Mordor2.",
	"Rivers need springs in Mordor2.",
	"Do not fear what you don't know in Mordor2.",
	"You will have a pleasant surprise in Mordor2.",
	"Whenever possible, keep it simple in Mordor2.",
];

let hams = [{callsign: "A1AAA", operator: "Bones Hillman", zip: 98108},
                {callsign: "A1AAB", operator: "Phil Judd", zip: 98101},
                {callsign: "A1AAC", operator: "Elizabeth Cook", zip: 53703},
                {callsign: "N7YYZ", operator: "Geddy Lee", zip: 53703},
                {callsign: "A1AAD", operator: "Michael Good", zip: 11010},
                {callsign: "A1AAE", operator: "Dolly Parton", zip: 65473},
                {callsign: "A1AAF", operator: "kd lang", zip: 12839},
                {callsign: "A1AAG", operator: "Rob Hirst", zip: 09824},
                {callsign: "A1AAH", operator: "Jim Moginie", zip: 98274},
                {callsign: "A1AAI", operator: "Martin Rotsey", zip: 29348},
                {callsign: "A1AAJ", operator: "Peter Garrett", zip: 29348},
               ];

// for about
exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
};

// for search
exports.getFortuneSearch = function() {
    var idx = Math.floor(Math.random() * fortuneCookies2.length);
	return fortuneCookies2[idx];
};

exports.get = (callsign) => {
    return hams.find((item) => {
        return item.callsign == callsign; 
    });  
}


/* This is from HW2 callsigns.js

"use strict"; // Need this to have let work here. 

// This is my array of objects: 
let hams = [{callsign: "A1AAA", operator: "Bones Hillman", zip: 98108},
                {callsign: "A1AAB", operator: "Phil Judd", zip: 98101},
                {callsign: "A1AAC", operator: "Elizabeth Cook", zip: 53703},
                {callsign: "N7YYZ", operator: "Geddy Lee", zip: 53703},
                {callsign: "A1AAD", operator: "Michael Good", zip: 11010},
                {callsign: "A1AAE", operator: "Dolly Parton", zip: 65473},
                {callsign: "A1AAF", operator: "kd lang", zip: 12839},
                {callsign: "A1AAG", operator: "Rob Hirst", zip: 09824},
                {callsign: "A1AAH", operator: "Jim Moginie", zip: 98274},
                {callsign: "A1AAI", operator: "Martin Rotsey", zip: 29348},
                {callsign: "A1AAJ", operator: "Peter Garrett", zip: 29348},
               ];


console.log('Initial Length is: '+ hams.length + ' ham operator records.');

// This is the search that returns the result:  

exports.get = (callsign) => {
    return hams.find((item) => {
        return item.callsign == callsign; 
    });  
}


// This is the call that deletes a record from the object:
// Test record - good callsign: N7YYZ 
// Test record - bad callsign: N7ABC

  exports.delete = (callsign) => {
        var oldLength = hams.length;
        var newHams = hams.filter((item) => {
            return item.callsign !== callsign;
        });
      
        var deletethis = (newHams.length == oldLength) ? "" : "deletethis"; 
        hams = newHams; 
        return { "CallsignAction": deletethis, "Total": hams.length }   
    };


exports.add = (newHam) => {
    
    
    // var newID = id++; 
    // console.log(newID); 
    
    var hamCallsign = newHam.callsign; 
    var hamOperator = newHam.operator; 
    var hamZip = newHam.zip; 
     
    
    var totalHam = {callsign : hamCallsign, operator : hamOperator, zip: hamZip}; 
    hams.push(totalHam);  
    
}; 

    
// This just returns a search variable; I didn't write any add function for this. 
/* exports.add = (callsign) => {
    return hams.find((item) => {
        
        // console.log(item); 
        return item.callsign == callsign; 
    });  
} */ 



