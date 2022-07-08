// 1. print the number from 0 to 20.
function printNumber(N) {
    for (i = 0; i <= 20; i++) {
        console.log(i)
    }
}
printNumber();
//============================================================================================//
function printNos(n) {
    if (n > 0) {
        printNos(n - 1);
        console.log(n);
    }
    return;
}
printNos(100);
//=============================================================================================//
// 2. print the number from 0 to 20 without print the 12 and 15.
function solution(n) {
    for (let i = 0; i <= 20; i++) {
        if (i == 12 && i == 15) {
            break;
        } else {
            continue;
        }
    }
}
solution();
//===================================================================================================//
//3. Program for Fibonacci numbers
function fiboNumber(n) {
    if (n <= 1) // using recursion
        return n;
    return fiboNumber(n - 1) + (n - 2)
}
console.log(fiboNumber(100)) //T.c- O(n)
    //===========================================================================================//
function fiboNumber(n) {
    let f = new Array(n + 2) // using dynamic programming
    f[0] = 0;
    f[1] = 1;
    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
}
console.log(fiboNumber(9))
    //============================================================================================//
    //4. check prime number
function primeNo(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
}
console.log(primeNo(5))
    //=================================================================================================//