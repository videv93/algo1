var calculatePascal = function(i, j) {
    if (j === 0 || j === i || i === 0) {
        return 1;
    }
    return calculatePascal(i - 1, j - 1) + calculatePascal(i - 1, j);
}
var getRow = function(rowIndex) {
    var i = rowIndex;
    var res = [];
    for (var j = 0; j < i + 1; j++) {
        x = calculatePascal(i, j);
        res.push(x);
    }
    return res;
}

console.log(getRow(3));