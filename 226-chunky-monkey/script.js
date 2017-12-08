function chunkArrayInGroups(arr, size) {
    var newArray = [];
    var subArray = [];
    var newIndex = 0;

    for (let i=0; i < arr.length; i++) {
        subArray.push(arr[i]);
        // check if the array has new length
        if ((i+1) % size === 0) {
            newArray.push(subArray);
            subArray = []; 
        }
        // push the rest of the oldArray into newArray
        if (i+1 === arr.length && subArray.length) newArray.push(subArray);
    }
    console.log(newArray);
    return newArray;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);