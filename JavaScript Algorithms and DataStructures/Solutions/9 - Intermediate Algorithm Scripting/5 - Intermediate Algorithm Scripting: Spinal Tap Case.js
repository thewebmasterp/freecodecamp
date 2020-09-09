function spinalCase(str) {
    return str.replace(/((?<=[a-z])[A-Z])/g, ' $1').replace(/\s|_/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');