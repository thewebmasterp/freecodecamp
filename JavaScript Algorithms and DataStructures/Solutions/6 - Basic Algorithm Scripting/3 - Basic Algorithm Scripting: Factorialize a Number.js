function factorialize(num) {
    if (num <= 1) return 1;
    return num * factorialize(num - 1);
}

factorialize(5);
  