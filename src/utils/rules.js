const rational = str => /^(([0-9]+|0)\.[0-9]*$)|^(([0-9]+|0)$)|^(([1-9]+)\.[0-9]*$)|^(([1-9]+)$)/g.test(str)

export {
    rational
}