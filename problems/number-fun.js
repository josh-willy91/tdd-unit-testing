function returnThree() {
    return 3;
}

function reciprocal(num) {
    if (num < 1 || num > 1000000) {
        throw new TypeError;
    }
    return (1/num);
}
module.exports = { returnThree, reciprocal }
