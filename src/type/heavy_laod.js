function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function getL(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
