function uniteUnique(arr) {
    let mixed = [...arguments].flat();
    return [...new Set(mixed)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
