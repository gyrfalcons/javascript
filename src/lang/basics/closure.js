function greetPerson() {
    let hello = "Hello";

    function display(name) {
        console.log(`${hello}, ${name}`);
    }

    return display;
}

var greet = greetPerson();
greet('Abhishek');
