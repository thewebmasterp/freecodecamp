function findLongestWordLength(str) {
    let longest = 0;
    str.split(' ').forEach(word => {
      if (word.length > longest) longest = word.length;
    });
    return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
  