// "use strict";

// const gen = (n, w) => (num) => num % n === 0 ? w : '';

// const fizz = gen(3, 'Fizz');
// const bazz = gen(5, 'Bazz');


// [...Array(100).keys()].map(i => i + 1).forEach(i => console.log(fizz(i)+bazz(i) || i));






const rep = (x) => {
    return (num) => num * x
}

const f1 = rep(2);

console.log(f1(10));
