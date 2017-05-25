
var Ham = require("./models/ham");

// insert several new docs into the database. 
// Or at least a couple. 

new Ham({id: 0, callsign:"A1AAA", operator:"aa aaa", zip: "12121"}).save();
new Ham({id: 1, callsign:"B1BBB", operator:"bb bbb", zip: "12121"}).save();
new Ham({id: 2, callsign:"C1CCC", operator:"cc ccc", zip: "12121"}).save();
new Ham({id: 3, callsign:"D1DDD", operator:"dd ddd", zip: "12121"}).save();
new Ham({id: 4, callsign:"E1EEE", operator:"ee eee", zip: "12121"}).save();
new Ham({id: 5, callsign:"F1FFF", operator:"ff fff", zip: "12121"}).save();
new Ham({id: 6, callsign:"G1GGG", operator:"gg ggg", zip: "12121"}).save();
new Ham({id: 7, callsign:"H1HHH", operator:"hh hhh", zip: "12121"}).save();
new Ham({id: 8, callsign:"I1III", operator:"ii iii", zip: "12121"}).save();
new Ham({id: 9, callsign:"J1JJJ", operator:"jj jjj", zip: "12121"}).save();
new Ham({id: 10, callsign:"KK1KK", operator:"kk kk", zip: "12121"}).save();
new Ham({id: 11, callsign:"L1LLL", operator:"ll lll", zip: "12121"}).save();
new Ham({id: 12, callsign:"M1MMM", operator:"mm mmm", zip: "12121"}).save();
new Ham({id: 13, callsign:"N1NNN", operator:"nn nnn", zip: "12121"}).save();
new Ham({id: 14, callsign:"O1OOO", operator:"oo ooo", zip: "12121"}).save();
new Ham({id: 15, callsign:"P1PPP", operator:"pp ppp", zip: "12121"}).save();
new Ham({id: 16, callsign:"Q1QQQ", operator:"qq qqq", zip: "12121"}).save();
new Ham({id: 17, callsign:"R1RRR", operator:"rr rrr", zip: "12121"}).save();
new Ham({id: 18, callsign:"S1SSS", operator:"ss sss", zip: "12121"}).save();
new Ham({id: 19, callsign:"T1TTT", operator:"tt ttt", zip: "12121"}).save();
new Ham({id: 20, callsign:"U1UUU", operator:"uu uuu", zip: "12121"}).save();
new Ham({id: 21, callsign:"V1VVV", operator:"vv vvv", zip: "12121"}).save();
new Ham({id: 22, callsign:"W1WWW", operator:"ww www", zip: "12121"}).save();
new Ham({id: 23, callsign:"X1XXX", operator:"xx xxx", zip: "12121"}).save();
new Ham({id: 24, callsign:"Y1YYY", operator:"yy yyy", zip: "12121"}).save();
new Ham({id: 25, callsign:"Z1ZZZ", operator:"zz zzz", zip: "12121"}).save();


// find all documents 
Ham.find(function(err, hams) {
    // output error if one occurred
    if (err) {
        console.log(err);
    } else {
        // otherwise output the array of documents
        console.log(hams);
    }
});