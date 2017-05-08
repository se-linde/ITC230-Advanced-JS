// Automated mocha and chai tests for HW2. 

var expect = require("chai").expect;
var ham = require("../lib/ham");


// Test 1 - Tests that work the search page.  
describe("Ham radio module tests", () => {
 it("returns requested ham radio info", function() {
   var result = ham.get("A1AAA");
   expect(result).to.deep.equal({callsign: "A1AAA", operator: "Bones Hillman", zip: 98108});
 });
 
 it("fails w/ invalid callsign", () => {
   var result = ham.get("fake");
   expect(result).to.be.undefined;
 });

    
// Test 2 - Tests that work the add page. 
    
it("adds requested ham radio info", function(){
        var newHam = {callsign: "XXX000", operator: "Test Testington III, Esq.", zip: 10101};
        var result = ham.add(newHam);
        expect(result).to.deep.equal({"HamAction": "added", "Total": 12});
    });
    
it("add fails", function(){
        var result = ham.add({callsign: "1X111", operator: "Joe Blow", zip: 12345});
        expect(result).to.be.isUndefined; 
    });
    

// Test 3 - Tests that work the delete page.     

it("deletes ham radio info", function(){
        var result = ham.delete("N7YYZ");
        expect(result).to.deep.equal({"deleted": true, "total": 12});
    });

it("unable to delete callsign", function(){
        var result = ham.delete("000000");
        expect(result).to.deep.equal({"deleted": false, "total": 12});
    });    
    


});

