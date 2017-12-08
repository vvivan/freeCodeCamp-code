function confirmEnding(str, target) {
    var endStr = str.substr(str.length - target.length);
    
    return endStr === target;
  }

confirmEnding("Bastian", "n");