var hash = {};
var climbingStairs = function(n) {
    if (hash.hasOwnProperty(n)) {
        return hash[n];
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    var res = climbingStairs(n-1) + climbingStairs(n - 2);
    hash[n] = res;
    return res;
}

module.exports = climbingStairs;