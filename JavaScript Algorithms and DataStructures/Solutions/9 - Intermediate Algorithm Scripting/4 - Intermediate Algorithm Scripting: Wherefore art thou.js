function whatIsInAName(collection, source) {
    let arr;
    // Only change code below this line
    
    arr = collection.filter(el => {
      return Object.keys(source).every(k1 => {
        return Object.keys(el).some(k2 => {
          return source[k1] === el[k2] && k1 === k2
        })
      })
    })
  
    // Only change code above this line
    return arr;
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  
  
  