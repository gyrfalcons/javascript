
/**
 * Rest operator takes any number of arguments and put it into Array
 * @param  {...any} numbers 
 */

function sum(...numbers) {
    var total = numbers.reduce((total, number) => total + number, 0);
    console.log(total);
}

sum(1,2,3);
sum(10,20,30);



