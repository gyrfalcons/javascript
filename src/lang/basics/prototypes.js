function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = (function(){
    return {
        greet : function() {
            console.log(`[Person] - Hello, ${this.name}`);
        },
        setName : function(name) {
            this.name = name;
        },
        setAge : function(age) {
            this.age = age;
        },
        print : function() {
            console.log("==================================================");
            console.log(`Person \n  Name: ${this.name} \n  Age: ${this.age}`);
            console.log("==================================================");
        }
    }
})()

function Employee(obj) {
    Person.call(this, obj.name, obj.age );
    this.designation = obj.designation;
    this.salary = obj.salary;
}

Employee.prototype = (function(){
    return {
        ...Person.prototype,
        greet : function() {
            console.log(`[Employee] - Hello, ${this.name}`);
        },
        setDesignation : function(desgn) {
            this.designation = desgn;
        },
        setSalary : function(salary) {
            this.salary = salary;
        },
        print : function() {
            console.log("==================================================");
            console.log(`Employee Details - \n Employee Name: ${this.name} \n Employee Age: ${this.age} \n Employee Designation: ${this.designation}`);
            console.log("==================================================");
        }
    }
})()



var person = new Person('Tom', 25);
person.greet();
person.print();


var employee = new Employee({ name : 'Joe', age: 30, designation: 'SSE' });
employee.greet();
employee.print();