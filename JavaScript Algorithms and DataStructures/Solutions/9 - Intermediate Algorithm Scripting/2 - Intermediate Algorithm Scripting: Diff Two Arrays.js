function diffArray(arr1, arr2) {
    let newArr = [];
    arr1.forEach(el => !arr2.includes(el) && newArr.push(el));
    arr2.forEach(el => !arr1.includes(el) && newArr.push(el));
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  