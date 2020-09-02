function mutation(arr) {
    arr = arr.map(str => str.toLowerCase().split(''));
    for (let i = 0; i < arr[1].length; i++) {
      if (!arr[0].includes(arr[1][i])) return false; 
    }
    return true;
}

mutation(["hello", "hey"]);
  