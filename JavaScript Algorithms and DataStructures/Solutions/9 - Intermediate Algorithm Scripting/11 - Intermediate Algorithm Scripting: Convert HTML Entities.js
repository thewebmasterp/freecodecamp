function convertHTML(str) {
    let dict = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    }
    return str.replace(/(&)|(<)|(>)|(")|(')/g, match => dict[match])
}

convertHTML("Dolce & Gabbana");
  