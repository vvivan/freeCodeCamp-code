function confirmEnding(str, target) {
    var endChar = str.substr(str.length - 1);
    
    return endChar === target;
  }
  
  var test = confirmEnding("Bastian", "r");
  console.log(test);