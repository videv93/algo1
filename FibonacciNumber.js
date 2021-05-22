var hash =  {};
var fib = function(n) {
    if (hash.hasOwnProperty(n)) {
        return hash[n];
    }
    if (n===0) {
        return 0;
    }
    if (n===1) {
        return 1;
    }
    var fn = fib(n-1) + fib(n-2);
    hash[n] = fn;
    return fn;
}
module.exports = fib;