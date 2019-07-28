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

/* sum take an array and return sum of all elements in array*/
function sum(array) {
    return array.reduce(function (prevVal, elem, i, array) {
        return prevVal + elem;
    });
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));

/* multiply take an array and return multiplies of all elements in array*/
function multiply(array) {
    return array.reduce(function (prevVal, elem, i, array) {
        return prevVal * elem;
    });
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

/* reverse takes a string as an argument and returns reverse of string*/
function reverse(str) {
    let originalArray = str.split("");
    let modifiedArray = str.split("");
    return modifiedArray.map(function (elem, i, array) {
        return originalArray[str.length - 1 - i];
    }).join("");
}

console.log("Expected output of reverse(\"jag testar\") is ratset gaj  " + myFunctionTest("ratset gaj", reverse("jag testar")));

/* filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(arr, minlen) {
    return arr.filter(function (elem, i, array) {
        return elem.length > minlen ? elem : null;
    });
}

console.log("Expected output of filterLongWords([\"today\", \"is\", \"a\", \"good\", \"day\"], 3) is [\"today\", \"good\"] " + myFunctionTestArray(["today", "good"], filterLongWords(["today", "is", "a", "good", "day"], 3)));


