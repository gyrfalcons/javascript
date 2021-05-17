function factorial(num) {
    if(num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

let num = 5;

console.log(`Displaying factorial for ${num} => ${factorial(num)}`);