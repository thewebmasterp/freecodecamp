function myReplace(str, before, after) {
    after = after.toLowerCase();
    if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
    }
    return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
