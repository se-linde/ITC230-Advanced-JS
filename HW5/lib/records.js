"use strict";

let records = [
    {id: 0, name : "David Bowie", year : 1967, label : "Deram"},
    {id: 1, name : "Space Oddity", year : 1969, label : "Philips Mercury"},
    {id: 2, name : "The Man Who Sold the World", year : 1970, label : "Mercury"},
    {id: 3, name : "Hunky Dory", year : 1971, label : "RCA"},
    {id: 4, name : "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", year : 1972, label : "RCA"},
    {id: 5, name : "Aladdin Sane", year : 1973, label : "RCA"},
    {id: 6, name : "Pin Ups", year : 1973, label : "RCA"},
    {id: 7, name : "Diamond Dogs", year : 1974, label : "RCA"},
    {id: 8, name : "Young Americans", year : 1975, label : "RCA"},
    {id: 9, name : "Station to Station", year : 1976, label : "RCA"},
    {id: 10, name : "Low", year : 1977, label : "RCA"},
    {id: 11, name : "Heroes", year : 1977, label : "RCA"},
    {id: 12, name : "Lodger", year : 1979, label : "RCA"},
    {id: 13, name : "Scary Monsters (And Super Creeps)", year : 1980, label : "RCA"},
    {id: 14, name : "Let's Dance", year : 1983, label : "EMI"},
    {id: 15, name : "Tonight", year : 1984, label : "EMI"},
    {id: 16, name : "Never Let Me Down", year : 1987, label : "EMI"},
    {id: 17, name : "Tin Machine", year : 1989, label : "EMI"},
    {id: 18, name : "Tin Machine II", year : 1991, label : "London"},
    {id: 19, name : "Black Tie White Noise", year : 1993, label : "Arista"},
    {id: 20, name : "Outside", year : 1995, label : "RCA"},
    {id: 21, name : "Earthling", year : 1997, label : "RCA"},
    {id: 22, name : "Hours", year : 1999, label : "Virgin"},
    {id: 23, name : "Heathen", year : 2002, label : "ISO/Columbia"},
    {id: 24, name : "Reality", year : 2003, label : "ISO/Columbia"},
    {id: 25, name : "The Next Day", year : 2013, label : "ISO/Columbia"},
    {id: 26, name : "★", year : 2016, label : "ISO/Columbia"},
    ];
    
    //console.log(records);
    
    
    exports.get = (name) => {
        return records.find((item) => {
            return item.name == name;
        });
    };
    
    exports.delete = (name) => {
        var recordLen = records.length;
        records = records.filter((item) => {
            return item.name !== name;
        });
        var deleted = (records.length == recordLen) ? "" : "Record Deleted";
        return { "RecordAction": deleted, "Total": records.length};
    };
    
    exports.add = (newRecord) => {
        // for(var i = 0; i < records.length; i++){
        //     if(newRecord.name == records[i].name){
        //         return;
        //     }
        // }
        // var recordLen = records.length;
        // var recordName = newRecord.name;
        // var recordYear = newRecord.year;
        // var recordLabel = newRecord.label;
        // var completeRecord = {name : recordName, year : recordYear, label : recordLabel};
        
        // records.push(completeRecord);
        // var added = (records.length == recordLen) ? "" : "added";
        // return {"RecordAction": added, "Total": records.length};
        
        var found = false;
        records.forEach(function(item,index){
            if (item.name == newRecord.name) {
                found = true;
            }
        });
        if (!found) {
            newRecord.id = records.length;
            records.push(newRecord);
        }
        var action = (found) ? "updated" : "added";
        return {"RecordAction": action, "Total": records.length };
     };
    
    exports.allRecords = () => {
        return records;
    };
    