function steamrollArray(arr) {
    let ar = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            ar.push( ...steamrollArray(arr[i]) )
        } else {
            ar.push( arr[i] );
        }
    }
    return ar;
}
  
  
  