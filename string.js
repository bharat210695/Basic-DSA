//1. reverse a string without using high order function.

function reverString(str) {

    if (!str || str.length < 2 || typeof str !== 'string') {
        return false;
    }
    const revArray = [];
    const length = str.length - 1;
    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join(" "); //join() method creates and returns a new string by concatenating all of the elements in an array.
}
console.log(reverString('abcdefghujkl'));
//=============================================================================================================//

//2. check string is palindrom or not.

function palindrom(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let start = str[i];
        let end = str[j - 1];
        if (start != end) {
            return false;
        }
    }
    return true;
}
console.log(palindrom('abcdcba'))
    //======================================================================================================//