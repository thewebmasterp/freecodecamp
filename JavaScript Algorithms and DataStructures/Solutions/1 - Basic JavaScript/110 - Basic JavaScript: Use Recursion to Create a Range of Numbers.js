function rangeOfNumbers(startNum, endNum) {
    if (startNum >= endNum+1) return [];
    let arr = rangeOfNumbers(startNum, endNum-1)
    arr.push(endNum);
    return arr;
};