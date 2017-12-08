var string = '_eye';

function palindrome(str) {
    var checkPlaindrome = true;
    var arrayStart = [];
    var length;
    var iterator;
    var regex = /[a-zA-Z0-9]/g;
    var strLower = str.strLower;
    
    arrayStart =str.toLowerCase().match(regex);
    console.log(arrayStart);
    
    length = arrayStart.length;
    iterator = Math.floor(length/2);

    for(var i=0; i<iterator; i++) {
        if(arrayStart[i] !== arrayStart[length-1-i]) {
            console.log('false');
            return checkPlaindrome = false;
        }
    }

    console.log(`length: ${length}`);
    console.log(`iterator: ${iterator}`);
    console.log(checkPlaindrome);
    
    return checkPlaindrome;
} 

palindrome(string);

