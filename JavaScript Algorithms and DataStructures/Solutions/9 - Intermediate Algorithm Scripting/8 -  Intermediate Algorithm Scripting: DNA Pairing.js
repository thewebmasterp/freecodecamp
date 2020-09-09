function pairElement(str) {
    const dict = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    };
    return str.split('').map(el => [el, dict[el]])
}

pairElement("GCG");
  