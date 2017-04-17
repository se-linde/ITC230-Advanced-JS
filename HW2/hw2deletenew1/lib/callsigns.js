"use strict"; // Need this to have let work here. 

// These are strings; really want a list of objects instead.
// let books = ["dune", 'it', "moby dick"]; 


// These are objects.  (let not working). 
/* let books = [{title: "dune", author: "frank herbert", pubdate: 1969}, 
                {title: "it", author: "steven king", pubdate: 1975},
                {title: "moby dick", author: "herman melville", pubdate: 1869},
                {title: "strict rules", author: "andrew mcnaughton", pubdate: 1999},]; */ 


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


console.log('Initial Length is :'+hams.length);

// This is the search that returns the result. 

exports.get = (callsign) => {
    return hams.find((item) => {
        return item.callsign == callsign; 
    });  
}


/* This searches for an entry, filters it out of the current array, and then 
a new array is generated and displayed. */ 

// THIS DIDN'T WORK. 
/* 
exports.delete = (callsign) => {
var invalidEntries = 0;
var validEntries = 0; 
var total = 0; 
var deletedcs = null; 
var numberDeleted = 0;     
// return hams.find((item) => {    
function filterByName(item) {
  // if ((item.callsign != deletedcs)) {
    return hams.find((item) => { 
    if (item.callsign != callsign) { 
    console.log(item);
    console.log(item.length); 
    return true;
  } 
  invalidEntries++;
  return false; 
});    
}
}
*/ 

// This is the call that deletes a record from the object. 
// Test record: N7YYZ. 


  exports.delete = (callsign) => {
        var hamsLen = hams.length;
        hams = hams.filter((item) => {
            return item.callsign !== callsign;
        });
        var deleted = (hams.length == hamsLen) ? "" : "deleted";
        return { "RecordAction": deleted, "Total": hams.length};
    };



/* This searches for an entry, filters it out of the current array, and then 
a new array is generated and displayed. */ 


 
    
    
// This just returns a search variable; I didn't write any add function for this. 
/* exports.add = (callsign) => {
    return hams.find((item) => {
        
        // console.log(item); 
        return item.callsign == callsign; 
    });  
} */ 




// This is the search that deletes the result.

 
/* console.log(hams); 
console.log('Initially Length is :'+hams.length);

exports.get = (callsign) => {
    return hams.find((item) => {
    
    return item.callsign == callsign;                  
                     
    hams=deleteObject(hams, item);                 
                     
        function deleteObject(array, callsign) {

    var newObject = [];
        
    console.log(newObject);         
            
    for (var o in array) {
        if (array[o].callsign != callsign) newObject.push(array[o]);
    }
    return newObject;
    
    console.log(newObject);    
    console.log(hams);         
            
    }
    
    console.log(newObject);    
    console.log(hams);     
    });
    console.log(newObject);    
    console.log(hams); 
}
// console.log(newObject);    
console.log(hams);
// console.log(newObject);    
    
 



console.log(hams); */