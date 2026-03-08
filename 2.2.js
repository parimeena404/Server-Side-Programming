function linearSearch(arr, key){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===key){
            return i;
        }
    }
    return -1;
}

let arr = [5, 3, 7, 9, 2, 1];
console.log("Index:", linearSearch(numbers, 2));