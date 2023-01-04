module.exports = function reverse(n) {
    let str = `${n}`;
    let reverseStr;
    console.log(str[0]);

    if (str[0] === "-") {
        reverseStr =
            str[str.length - 1] + str.slice(2, str.length - 1) + str[1];
    } else {
        reverseStr =
            str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
    }

    return +reverseStr;
};
