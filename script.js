function confirmEnding(str, target) {
    var endStr = str.substr(str.length - target.length);
    
    console.log(endStr);
    

    return endStr === target;
  }
  
  var test = confirmEnding("Bastian", "ian");
  console.log(test);