function fibonacci(num) {
    if(num === 1) {
        return [0, 1];
    } else {
        var arr = fibonacci(num - 1);
        arr.push(arr[num - 1] + arr[num - 2]);
        return arr;
    }
}

let num = 6;
console.log(`Displaying Fibonacci Numbers - (${num}) \n ${fibonacci(num)}`);