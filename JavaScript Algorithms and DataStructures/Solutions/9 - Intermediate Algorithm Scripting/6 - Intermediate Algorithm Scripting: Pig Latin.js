function translatePigLatin(str) {
    let arr = str.split(''); 
    let match = str.match(/a|e|i|o|u/) || {index: null};
    if (match.index === 0) {
      return str.concat('way');
    } else if (match) {
      arr = arr.concat(arr.splice(0, match.index));
    }
    return arr.join('').concat('ay');
}
  
translatePigLatin("consonant");
  