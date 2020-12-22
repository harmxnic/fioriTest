function getZeros(n) {
    let counter = 0
    for (let i = 5; n / i >= 1; i *= 5) counter += Math.floor(n / i)
    return counter
}
