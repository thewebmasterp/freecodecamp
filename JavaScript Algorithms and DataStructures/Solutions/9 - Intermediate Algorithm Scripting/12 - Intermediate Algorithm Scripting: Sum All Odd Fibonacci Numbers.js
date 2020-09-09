function sumFibs(num) {
    let fib = [];
    if (num > 0) fib.push(1);  
    if (num >= 1) fib.push(1); 
    
    while ((fib[fib.length-2] + fib[fib.length-1] <= num)) {
      fib.push(fib[fib.length-2] + fib[fib.length-1]);
    }
  
    return fib.reduce((acc, num) => acc + (num%2 ? num : 0));
}