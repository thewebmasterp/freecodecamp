const smallestCommons = arr => {
    arr.sort((a, b) => a - b);
    let sol = arr[1];
  
    for (let i = arr[1] - 1; i >= arr[0]; i--) {
      if (sol % i) {
        sol += arr[1];
        i = arr[1];
      }
    }
    return sol;
};


smallestCommons([1,5]);
  