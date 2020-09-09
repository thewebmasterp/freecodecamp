const checkCashRegister = (price, cash, cid) => {
    const UNITS = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    let totalCid = cid.reduce((acc, arr) => acc + arr[1], 0).toFixed(2)

    let changeArr = []
    let change = cash - price
    if (change > totalCid) {
        return {status: "INSUFFICIENT_FUNDS", change: changeArr}
    } else if (change.toFixed(2) === totalCid) {
        return {status: "CLOSED", change: cid}
    } else {
        cid = cid.reverse()
        for (let arr of cid) {
            let temp = [arr[0], 0]
            while (change >= UNITS[arr[0]] && arr[1] > 0) {
                arr[1] -= UNITS[arr[0]]
                temp[1] += UNITS[arr[0]]
                change = (change - UNITS[arr[0]]).toFixed(2)
            }
            if (temp[1] > 0) changeArr.push(temp)
        }
    }
    if (change > 0) return {status: "INSUFFICIENT_FUNDS", change: []}
    return {status: "OPEN", change: changeArr}
}
