var obj = {
    name: 'Jack',
    age: 25,
    print: function() {
        console.log(`Name: ${this.name} \n Age: ${this.age}`);
    },
    display: () => {
        console.log(`Name: ${this.name} \n Age: ${this.age}`);
    },
    increment: function() {
        setTimeout(() => {
            console.log(this.age++)
        }, 5000)
    }
};

var a = obj.display;
a();

var age  = 10;
obj.increment();