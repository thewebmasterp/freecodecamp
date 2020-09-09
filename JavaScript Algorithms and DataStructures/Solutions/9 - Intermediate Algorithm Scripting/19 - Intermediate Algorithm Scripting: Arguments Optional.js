function addTogether(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'number' && typeof b === 'undefined') {
        return (b) => { if (typeof b === 'number') return a + b }; 
    }
}