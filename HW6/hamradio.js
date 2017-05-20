Ham.find(function(err, ham){
    if(hams.length) return;

    new Ham({
        id: '0',
        callsign: 'A1AAA',
        operator: 'Aaa Aaaa',
        zip: '10101',    
    }).save();

    new Ham({
        id: '1',
        callsign: 'B1BBB',
        operator: 'Bbb Bbbb',
        zip: '10101',    
    }).save();
    
    new Ham({
        id: '2',
        callsign: 'C1CCC',
        operator: 'Ccc Cccc',
        zip: '10101',    
    }).save();
    
    new Ham({
        id: '3',
        callsign: 'D1DDD',
        operator: 'Ddd Dddd',
        zip: '10101',    
    }).save();
    
    new Ham({
        id: '4',
        callsign: 'E1EEE',
        operator: 'Eee Eeee',
        zip: '10101',    
    }).save();
    
    
    new Ham({
        id: '5',
        callsign: 'F1FFF',
        operator: 'Fff Ffff',
        zip: '10101',    
    }).save();
    
    
    new Ham({
        id: '6',
        callsign: 'G1GGG',
        operator: 'Ggg Gggg',
        zip: '10101',    
    }).save();
    
    
    new Ham({
        id: '7',
        callsign: 'H1HHH',
        operator: 'Hhh Hhhh',
        zip: '10101',    
    }).save();
    
    
    new Ham({
        id: '8',
        callsign: 'I1III',
        operator: 'Iii Iiii',
        zip: '10101',    
    }).save();
    
    
    new Ham({
        id: '9',
        callsign: 'L1LLL',
        operator: 'Lll Llll',
        zip: '10101',    
    }).save();
});
