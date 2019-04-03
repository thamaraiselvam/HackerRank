/*
 Problem name: Count Triplets
 Difficulty: Medium
 Pass Test All Case: Yes
 Score: 35/35
 More Information: https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
*/

function countTriplets(arr, r) {
    let second = {}
    let third = {}
    let count = 0;
    for (let index = 0; index < arr.length; index++) {

        const val = arr[index];

        //If value found on third then add it to count
        if(third[val]){
            count += third[val];
        }

        //If value found on second , convey it to third

        if(second[val]){
            third[val*r] = third[val*r] + second[val] || second[val];
        }

        //add current element into second value

        second[val*r] = second[val*r]+1 || 1;
    }

    return count;
}

console.log(countTriplets([1,2 ,2,4], 2));