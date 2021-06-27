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


function update(a) {
   a.replace("World", "Tom");
   console.log(a);
}

var a = "Hello World!";

update(a);
console.log(a);

function change(c) {
    console.log(`Inside method, Before update - value of 'c' = ${c}`);
    c = "Alice";
    console.log(`Inside method, After update - value of 'c' = ${c}`);
}

var c = "Bob";
change(c);
console.log(`Value of 'c' = ${c}`);
