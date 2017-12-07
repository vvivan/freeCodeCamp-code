function repeatStringNumTimes(str, num) {
    var newStr='';
    if (num < 1) {
        return '';
    } else {
        for (let i = 0; i < num; i++) {
            newStr += str;
            console.log(`iteration ${i}: ${newStr}`);
        }
        console.log(newStr);
        return newStr;
    }  
  }
  
  repeatStringNumTimes("abc", 3);