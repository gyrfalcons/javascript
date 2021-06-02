function foo() {
    var a = 'Hello World';
    a.toUpperCase(); // won't change the value stored in 'a'
    console.log(a);
}

foo(); 


function bar() {
    var b = 'Avengers';
    b[0] = 'a'; // won't change the value stored in b.
    console.log(b);
}


bar();
