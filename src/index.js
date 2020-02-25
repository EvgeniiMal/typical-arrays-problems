exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    let minValue = array[0];
    array.forEach(value => {
        if (minValue > value) {
            minValue = value;
        }
    });
    return minValue;
};

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    let maxValue = array[0];
    array.forEach(value => {
        if (maxValue < value) {
            maxValue = value;
        }
    });
    return maxValue;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    }
    const arraySum = array.reduce((prev, curr) => prev + curr);
    return arraySum / array.length;
};
