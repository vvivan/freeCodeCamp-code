function findLongestWord(str) {
    var strLength = 0;
    var string = '';
    var reg = /\w+/g;
    var array = [];

    array = str.match(reg);
    console.log(array);

    for (let i = 0; i < array.length; i++) {
        currentStrLength = array[i].length;
        console.log(strLength);
        console.log(currentStrLength);
        (currentStrLength > strLength) ? strLength = currentStrLength : strLength = strLength ;
    }
    console.log(`max word length: ${strLength}`);
    
    return strLength;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");