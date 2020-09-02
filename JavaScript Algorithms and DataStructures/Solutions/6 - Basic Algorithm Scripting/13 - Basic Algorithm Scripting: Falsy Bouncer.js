function bouncer(arr) {
    return arr.filter(el => !!el)
}

bouncer([7, "ate", "", false, 9]);
  