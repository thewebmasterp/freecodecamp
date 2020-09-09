function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (let i = 0; i < arr.length; i++) {
        let r = earthRadius + arr[i].avgAlt
        let op = 2 * Math.PI * Math.sqrt( Math.pow(r, 3) / GM ) // 2*pi*sqrt(r^3/GM);r=radius+avgAlt
        delete arr[i].avgAlt
        arr[i].orbitalPeriod = Math.round(op);
    }
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

  
  