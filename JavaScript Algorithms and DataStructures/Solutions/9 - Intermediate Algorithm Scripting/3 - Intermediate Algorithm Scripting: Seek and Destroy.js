function destroyer(arr) {
    let [, ...toBeDestroyed] = arguments;
    arr = arr.filter(el => !toBeDestroyed.includes(el))
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  