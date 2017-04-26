"use strict" 


// 'hams' was 'books'. 
// 'callsigns' was 'titles'. The user will be 
// searching via callsign. 

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
        return item.callsign = callsign; 
    });
}; 

exports.delete = (callsign) => {
    const oldLength = hams.length; 
    var newHams = hams.filter((item) => {
       return item.callsign !== callsign;  
    });  
    
    hams = newHams; 
    return {deleted: oldLength !== hams.length, total: hams.length };
};