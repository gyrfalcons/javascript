function bubbleSort(arr) {
    let length = arr.length;
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }   
    }
    return arr;
}

let values = [5, 1, 7, 22, 3, 9, -4, 15];
console.log("Bubble Sort => Sorting Values. \n", values);

console.log("After Sorting. \n",bubbleSort(values))