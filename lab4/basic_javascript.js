/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTestArray(expected, found) {
    if (expected.length === found.length) {
        for (let i = 0; i < found.length; i++) {
            if (expected[i] !== found[i]) {
                return "TEST FAILED.  Expected value " + expected[i] + " found value " + found[i];
            }
        }
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected length " + expected.length + " found length " + found.length;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    ;
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

//console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

/* isVowel take a character as an argument and returns that it is vowel or not */
function isVowel(c) {
    let char = c.toLowerCase();
    if (char === "a" ||
        char === "e" ||
        char === "o" ||
        char === "u" ||
        char === "i")
        return true;
    else
        return false;
}

console.log("Expected output of isVowel(\"A\") is true  " + myFunctionTest(true, isVowel("A")));
console.log("Expected output of isVowel(\"B\") is false  " + myFunctionTest(false, isVowel("B")));

/* sum take an array and return sum of all elements in array*/
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));

/* multiply take an array and return multiplies of all elements in array*/
function multiply(array) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        result *= array[i];
    }
    return result;
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

/* reverse takes a string as an argument and returns reverse of string*/
function reverse(str) {
    return str.split("").reverse().join("");
}

console.log("Expected output of reverse(\"jag testar\") is ratset gaj  " + myFunctionTest("ratset gaj", reverse("jag testar")));

/* findLongestWord takes an array of words and returns the length of the longest on */
function findLongestWord(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = max < arr.length ? arr.length : max;
    }
    return max;
}

console.log("Expected output of findLongestWord([\"today\", \"is\", \"a\", \"good\", \"day\"]) is 5 " + myFunctionTest(5, findLongestWord(["today", "is", "a", "good", "day"])));

/* filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(arr, minlen) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > minlen) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log("Expected output of filterLongWords([\"today\", \"is\", \"a\", \"good\", \"day\"], 3) is [\"today\", \"good\"] " + myFunctionTestArray(["today", "good"], filterLongWords(["today", "is", "a", "good", "day"], 3)));


/* Modify code in slide */

const a = [1, 3, 5, 3, 3];
/* multiply each element by 10 */
const b = a.map(function (elem, i, array) {
    return elem * 10;
})// [10,30,50,30,30]
console.log("Expected output of multiply each element in [1, 3, 5, 3, 3] by 10 is [10,30,50,30,30] " + myFunctionTestArray([10, 30, 50, 30, 30], b));

/* return array with all elements equal to 3 */
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log("Expected output of array with all elements [1, 3, 5, 3, 3] equal to 3 is [3,3,3] " + myFunctionTestArray([3, 3, 3], c));


/* return the product of all elements */
const d = a.reduce(function (prevVal, elem, i, array) {
    return prevVal > elem && prevVal % elem ? prevVal : prevVal * elem;
});
console.log("Expected output of return the product of all elements [1, 3, 5, 3, 3] is 15 " + myFunctionTestArray(15, d));