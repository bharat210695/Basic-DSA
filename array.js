// /* 1. Given an array of integers nums and an integer target,return indices of the two numbers such that they add up to target.
//Input: nums = [2, 7, 11, 15], target = 9
//Output: [0, 1]
//Explanation: Because nums[0] + nums[1] == 9, we
//return [0, 1].*/
// Two Sums
const nums = [2, 7, 5, 11, 12]
const target = 9;
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target)
        //return [i, j];
            console.log([i, j])
    }
}

//==============================================================================================================//
//2. reverse a array
const array = [3, 7, 9, 4, 12, 19, 15]
    //let arr = [];
let start = 0,
    end = n - 1
for (let i = start; i < array.length; i++) {
    for (let j = end - 1; j < array.length; j--) {
        if (start == end) {
            start = start + 1
            end = end - 1
        }
    }
}
//==================================================================================================================//
function reverse(array) {
    var output = [];
    while (array.length) { // using while loop
        output.push(array.pop());
    }
    return output;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
//=================================================================================================================//

//3.check if an array is palindrom or not.

function palindrom(array, n) {
    let flag = 0;
    for (let i = 0; i < n / 2; i++) {
        if (arr[i] != arr[n - i - 1]) { // check first and last element are different
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        return 'yes'
    else return 'no'
}
console.log(palindrom([3, 6, 0, 6, 3]))
    //=================================================================================================================//

/*4.Given an array of integers, copy elements of one array into another array of the same size.
 Input:3
    1 2 3
where: First line represents the number of elements in the array.
    Second line represents the elements in the array.
 Output:1 2 3*/
function copyElement(array, n) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array === newArr)
            return newArr;
    }
    //return false;
}
console.log(copyElement([1, 2, 3]));
//===================================================================================================================//
//5.check prime no.
function primeNo(n) {
    //let newArr = [];
    if (n <= 1) {
        return false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(primeNo(12))
    //============================================================================================================//
    //6.Two Sum. Given a list of numbers and a number K.return whether any two numbers from the list added upto K.
    // input =[10, 15, 3, 7], k = 17
    // output = true, since 10 +7 =17
var arr = [10, 15, 3, 7]
var k = 25

function twoSum(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === k)
                return true;
        }
    }
    return false;
}
console.log(twoSum(arr, k));
//=======================================================================================================//
//7.counts all the unique values in an array.
let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7];

function uniqueValue(arr) {
    if (arr.length < 1) {
        return 0;
    }
    let i = 0; // two pointer method 
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] === arr[j];
        }
    }
    return i + 1;
}
console.log(uniqueValue(arr));
//====================================================================================================//
//8.count the frequency of each element of an array in javascript.
let arr = [10, 20, 20, 10, 10, 20, 5, 20, 5]
const getFrequency = (array) => {
    const map = {};
    array.forEach(item => {
        if (map[item]) {
            map[item]++;
        } else {
            map[item] = 1;
        }
    });
    return map;
};
console.log(getFrequency(arr)); // output -{5: 2, 10: 3, 20: 4}
//========================================================================================================//
//9.Given an array of repeated elements, return the most repeated elements from the array
var arr1 = [23, 56, 678, 12, 2, 34, 23, 23, 98, 12, 3, 12, 2, 12];
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
            m++;
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    m = 0;
}
console.log(item);
//========================================================================================================//
//10. Given an array, find out the total number of negative elements present in the array.