function getTriangle(base, height) {
    return base * height / 2;
}

console.log('三角形の面積:' + getTriangle(5, 2));


var getSquare = function(height, width) {
    return height * width;
};

console.log('四角形の面積:' + getSquare(3, 4))


var getCircle = radius => radius * radius * Math.PI;
console.log(getCircle(4));


var scope = 'Global Variable';

function getValue() {
    var scope = 'Local Variable';
    return scope
}

console.log(getValue())
console.log(scope)