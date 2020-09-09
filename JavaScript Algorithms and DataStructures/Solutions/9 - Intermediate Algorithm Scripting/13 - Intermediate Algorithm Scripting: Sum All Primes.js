function sumPrimes(num) {
    function isPrime(n) {
        //source of this function:   (isPrime)
        //https://lucidar.me/en/web-dev/how-to-check-if-a-number-is-prime-in-javascript/
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        } 
        return true;
    }
    return [...Array(num+1).keys()].reduce((acc, cur) => {
        if (isPrime(cur)) return acc + cur;
        return acc;
    });
}

sumPrimes(10);
  