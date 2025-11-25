var anything;
anything = 'Shuvo';
var kgToGMConverter = function (input) {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        var value = input.split(" ")[0];
        return "Converted Output is ".concat(Number(value) * 1000);
    }
};
var result1 = kgToGMConverter(2);
console.log(result1);
var result2 = kgToGMConverter("2 kg");
console.log(result2);
