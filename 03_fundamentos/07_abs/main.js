const assert = require('assert').strict;

function abs(value) {
return Math.abs(value);
}

assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)


// console.log(1 === '1');
// console.log(true === 1);

// console.log(1 != '1');

// function GetChat() {
//     for (let index = 0; index < 100; index++) {
//         if (index % 10 == 0) {
//             console.log('PONG');
//         } else if (index % 2 == 0) {
//             console.log("PAIR");
//         } else if (index % 5 == 0) {
//             console.log('PING');
//         } else {
//             console - console.log(index);
//         }
//     }
// }

// GetChat();


function doSomething(a, b) {
    console.log('It made something');
    console.log('The value of a is: ' + a)
    console.log('The value of b is: ' + b)
}

doSomething();
doSomething(5);
doSomething(5, 3);