var foo = function(s) {
    if (typeof s === 'string') {
        return s.toUpperCase();
    } else if (typeof s === 'number') {
        return s * 2;
    }
};

console.log(foo('hello')); // Expected: 'HELLO'
console.log(foo(10)); // Expected: 20
console.log(foo({toString: function() {return 'world';}})); // Expected: 'WORLD'
console.log(foo([20])); // Expected: 40