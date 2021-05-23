var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    return (n > 0 ? x : 1/x) * myPow(x, (n > 0 ? n-1 : n + 1));
}

module.exports = myPow;