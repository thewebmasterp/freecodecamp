const palindrome = str => {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let arr = str.split('')
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length-i-1]) return false
    }
    return true
}

