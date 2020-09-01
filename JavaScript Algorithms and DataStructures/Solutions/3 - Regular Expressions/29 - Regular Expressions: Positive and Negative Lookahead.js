let sampleWord = "astronaut";
let pwRegex = /^[a-z](?=\w{5})(?=\w*\d{2})/i;// Change this line
let result = pwRegex.test(sampleWord);
