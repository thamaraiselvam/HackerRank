function countTriplets(arr, r) {
    let second = {}
    let third = {}
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        const val = arr[index];
        if(third[val]){
            count += third[val];
        }

        if(second[val]){
            third[val*r] = third[val*r] + second[val] || second[val];
        }

        second[val*r] = second[val*r]+1 || 1;
    }

    return count;
}
console.log(countTriplets([1,2 ,2,4], 2));