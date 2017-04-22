"use strict"; // Need this to have let work here. 

// This is my array of objects: 
let hams = [{id: 1, callsign: "A1AAA", operator: "Bones Hillman", zip: 98108},
                {id: 2, callsign: "A1AAB", operator: "Phil Judd", zip: 98101},
                {id: 3, callsign: "A1AAC", operator: "Elizabeth Cook", zip: 53703},
                {id: 4, callsign: "N7YYZ", operator: "Geddy Lee", zip: 53703},
                {id: 5, callsign: "A1AAD", operator: "Michael Good", zip: 11010},
                {id: 6, callsign: "A1AAE", operator: "Dolly Parton", zip: 65473},
                {id: 7, callsign: "A1AAF", operator: "kd lang", zip: 12839},
                {id: 8, callsign: "A1AAG", operator: "Rob Hirst", zip: 09824},
                {id: 9, callsign: "A1AAH", operator: "Jim Moginie", zip: 98274},
                {id: 10, callsign: "A1AAI", operator: "Martin Rotsey", zip: 29348},
                {id: 11, callsign: "A1AAJ", operator: "Peter Garrett", zip: 29348},
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
    
    var maxid = 0; 
    
    hams.map(function(obj) {
        
        if (obj.id > maxid) maxid = obj.id; 
    }); 
    
    // var newID = id++; 
    // console.log(newID); 
    
    var hamCallsign = newHam.callsign; 
    var hamOperator = newHam.operator; 
    var hamZip = newHam.zip; 
    var hamid = maxid++; 
    
    var totalHam = {id : hamid, callsign : hamCallsign, operator : hamOperator, zip: hamZip}; 
    hams.push(totalHam);  
    
}; 

    
// This just returns a search variable; I didn't write any add function for this. 
/* exports.add = (callsign) => {
    return hams.find((item) => {
        
        // console.log(item); 
        return item.callsign == callsign; 
    });  
} */ 



