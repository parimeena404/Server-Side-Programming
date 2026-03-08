function merge(left,right){
    let result=[];

    while(left.length && right.length){
        if(left[0] < right[0])
            result.push(left.shift());
        else
            result.push(right.shift());
    }

    return [...result,...left,...right];
}

function mergeSort(arr){
    if(arr.length <=1) return arr;

    let mid = Math.floor(arr.length/2);

    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);
}

console.log(mergeSort([21,6,14,3,50]));