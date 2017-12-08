<<<<<<< HEAD
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
=======
function titleCase(str) {
    var array = [];
    str = str.toLowerCase();
    array = str.split(' ');

    for (let i = 0; i < array.length; i++) {
        array[i] = sentenceCase(array[i]);
    }
    
    str = array.join(' ');
    
    
    return str;
  }

  function sentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  titleCase("I'm a little tea pot");
>>>>>>> 221-title-case-a-sentence
