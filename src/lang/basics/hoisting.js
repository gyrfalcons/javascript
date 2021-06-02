var num = 10;

function foo() {
    console.log(`Value of 'num' is ${num}`);
}

foo(); //  Displays 10

function bar() {
    console.log(`Value of 'num' is ${num}`);
    var num = 5;
    console.log(`Value of 'num' is ${num}`);
}

bar(); //  Displays undefined , 5

function fooBar() {
    console.log(`Value of 'a' is ${a}`);
}

fooBar(); // ReferenceError: a is not defined
