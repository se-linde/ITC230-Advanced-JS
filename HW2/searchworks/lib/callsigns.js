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


exports.get = (callsign) => {
    return hams.find((item) => {
        
        // console.log(item); 
        return item.callsign == callsign; 
        
    });  
} 