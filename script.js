function titleCase(str) {
    var array = [];

    array = str.split(' ');

    for (let i = 0; i < array.length; i++) {
        array[i] = sentenceCase(array[i]);
    }
    
    str = array.join(' ');
    console.log(str);
    
    return str;
  }

  function sentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  titleCase("I'm a little tea pot");