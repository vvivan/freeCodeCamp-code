function largestOfFour(arr) {
    var maxNo = 0;
    var maxArray = [];

    for (let i=0; i< arr.length; i++) {
        var maxNo = 0;
        for(let j=0; j< arr[i].length; j++) {
            if (arr[i][j] > maxNo) {
                maxNo = arr[i][j];
            }
        }
        maxArray.push(maxNo);
    }
    console.log(maxArray);
    return maxArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);