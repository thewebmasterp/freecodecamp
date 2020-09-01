function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    
    for (let i = 0; i < arr.length; i++) {
        let innerProduct = 1;
        for (let n = 0; n < arr[i].length; n++) {
        innerProduct *= arr[i][n];
        }
        product *= innerProduct;
    }

    // Only change code above this line
    return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
  