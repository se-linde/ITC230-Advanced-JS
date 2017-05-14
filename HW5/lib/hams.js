"use strict";

// name = callsign
// year = operator
// label = zip

// records = hams

let hams = [{id: 0, callsign: "A1AAA", operator: "Bones Hillman", zip: 98108},
                {id: 1, callsign: "A1AAB", operator: "Phil Judd", zip: 98101},
                {id: 2, callsign: "A1AAC", operator: "Elizabeth Cook", zip: 53703},
                {id: 3, callsign: "N7YYZ", operator: "Geddy Lee", zip: 53703},
                {id: 4, callsign: "A1AAD", operator: "Michael Good", zip: 11010},
                {id: 5, callsign: "A1AAE", operator: "Dolly Parton", zip: 65473},
                {id: 6, callsign: "A1AAF", operator: "kd lang", zip: 12839},
                {id: 7, callsign: "A1AAG", operator: "Rob Hirst", zip: 39824},
                {id: 8, callsign: "A1AAH", operator: "Jim Moginie", zip: 98274},
                {id: 8, callsign: "A1AAI", operator: "Martin Rotsey", zip: 29348},
                {id: 9, callsign: "A1AAJ", operator: "Peter Garrett", zip: 29348},
               ];

    
    //console.log(hams);
    
    
    exports.get = (callsign) => {
        return hams.find((item) => {
            return item.callsign == callsign;
        });
    };
    
    exports.delete = (callsign) => {
        var hamLen = hams.length;
        hams = hams.filter((item) => {
            return item.callsign !== callsign;
        });
        var deleted = (hams.length == hamLen) ? "" : "Ham Callsign Deleted";
        return { "HamAction": deleted, "Total": hams.length};
    };
    
    exports.add = (newHam) => {
        
        var found = false;
        hams.forEach(function(item,index){
            if (item.callsign == newHam.callsign) {
                found = true;
            }
        });
        if (!found) {
            newHam.id = hams.length;
            hams.push(newHam);
        }
        var action = (found) ? "updated" : "added";
        return {"HamAction": action, "Total": hams.length };
     };
    
    exports.allHams = () => {
        return hams;
    };
    