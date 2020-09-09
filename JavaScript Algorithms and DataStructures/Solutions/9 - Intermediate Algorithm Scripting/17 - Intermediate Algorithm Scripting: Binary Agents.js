function binaryAgent(str) {
    //way 1:
    // let arr = str.split(' ');
    // arr = arr.map( binary => String.fromCharCode(parseInt(binary, 2)) );
    // return arr.join('');
  
    //way 2:
    return str.replace(/[0-1]+\s?/g, binary => String.fromCharCode(parseInt(binary, 2)))
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
