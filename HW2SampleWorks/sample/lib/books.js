"use strict"; // Need this to have let work here. 

// These are strings; really want a list of objects instead.
// let books = ["dune", 'it', "moby dick"]; 


// These are objects.  (let not working). 
let books = [{title: "dune", author: "frank herbert", pubdate: 1969}, 
                {title: "it", author: "steven king", pubdate: 1975},
                {title: "moby dick", author: "herman melville", pubdate: 1869},
                {title: "strict rules", author: "andrew mcnaughton", pubdate: 1999},]; 

exports.get = (title) => {
    return books.find((item) => {
        
        // console.log(item); 
        return item.title == title; 
        
    });  
} 