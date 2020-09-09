const rot13 = str => {
    const ALPHABET = new Array(26).fill(1).map( (_, i) => String.fromCharCode(65 + i) )
    let arr = str.split('')
    arr = arr.map( char => {
        if (ALPHABET.includes(char)) return ALPHABET[((ALPHABET.indexOf( char )-13)%26+26)%26]
        //This strange-looking array access was made so that you'll be
        //able to access the ALPHABET array in a circular manner. (Z => M)
        return char
    });
    return arr.join('')
}
