function chunkArrayInGroups(arr, size, endArr = []) {
    let arr1 = [];
    for (let i = 0; i < size; i++) {
      if (arr.length) arr1.push(arr.shift());
    }
    endArr.push(arr1)
    if (arr.length) chunkArrayInGroups(arr, size, endArr);
    return endArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)



