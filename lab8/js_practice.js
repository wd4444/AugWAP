"use strict";
{

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

    function myFunctionTestNestedList(expected, found) {
        do {
            if(expected.value != found.value) {
                return "TEST FAILED.  Expected value " + expected.value + " found value " + found.value;
            }
            expected = expected.rest;
            found = found.rest;
        } while(expected != null && found != null)
        if(expected == null && found == null) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected value " + expected + " found value " + found;
        }
    }

    /* reverse Array takes a Array as an argument and returns reversed Array */
    function reverseArray(arr) {
        let originalArray = arr;
        let modifiedArray = arr;
        return modifiedArray.map(function (elem, i, array) {
            return originalArray[arr.length - 1 - i];
        });
    }

    console.log("Expected output of reverseArray([\"A\", \"B\", \"C\"]) is [\"C\", \"B\", \"A\"]  " + myFunctionTestArray(["C", "B", "A"], reverseArray(["A", "B", "C"])));

    /* reverse Array In Place takes a Array as an argument and returns the same reversed Array */
    function reverseArrayInPlace(arr) {
        let arrLength = arr.length;
        for (let i = 0; i < arrLength / 2; i++) {
            let temp = arr[i];
            arr[i] = arr[arrLength - i - 1];
            arr[arrLength - i - 1] = temp;
        }
        return arr;
    }
    console.log("Expected output of reverseArrayInPlace([1, 2, 3, 4, 5]) is [5, 4, 3, 2, 1]  " + myFunctionTestArray([5, 4, 3, 2, 1], reverseArrayInPlace([1, 2, 3, 4, 5])));

    /* prepend takes an element and a list and creates a new list that adds the element to the front of the input list */
    function prepend(value, list) {
        return {
            value: value,
            rest: list
        };
    }
    console.log("Expected output of prepend(10, prepend(20, null)) is {value: 10, rest: {value: 20, rest: null}}  " + myFunctionTestArray({value: 10, rest: {value: 20, rest: null}}, prepend(10, prepend(20, null))));

    /* arrayToList takes an array and return a nested object as a list */
    function arrayToList(array) {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
            list = prepend(array[i], list);
        }
        return list;
    }
    console.log("Expected output of arrayToList([10, 20]) is {value: 10, rest: {value: 20, rest: null}}  " + myFunctionTestArray({value: 10, rest: {value: 20, rest: null}}, arrayToList([10, 20])));

    /* nth takes a list and a number and returns the element at the given position in the list */
    function nth(list, n) {
        let value = undefined;
        let index = 0;
        do {
            value = list.value;
            list = list.rest;
            index++;
        } while(list != null && index < n + 1)
        return value;
    }
    console.log("Expected output of nth(arrayToList([10, 20, 30]), 1) is 20  " + myFunctionTest(20, nth(arrayToList([10, 20, 30]), 1)));

    /* listToArray takes an nested list and return a array */
    function listToArray(list) {
        let array = [];
        do {
            array.push(list.value);
            list = list.rest;
        } while(list != null)
        return array;
    }
    console.log("Expected output of listToArray(arrayToList([10, 20, 30])) is [10, 20, 30]  " + myFunctionTestArray([10, 20, 30], listToArray(arrayToList([10, 20, 30]))));

    /* deepEqual takes two values and returns true only if they are the same value or are objects with the same properties */
    function deepEqual(arg1, arg2) {
        if(arg1 != null && arg2 != null) {
            if(typeof arg1 === "object" && typeof arg2 === "object") {
                if(Object.keys(arg1).length === Object.keys(arg2).length) {
                    let objLength = Object.keys(arg1).length;
                    let props1 = Object.keys(arg1);
                    let props2 = Object.keys(arg2);
                    let values1 = Object.values(arg1);
                    let values2 = Object.values(arg2);
                    for(let i = 0; i < objLength; i++) {
                        if(values1[i] != null && values2[i] != null &&
                            typeof values1[i] === "object" && typeof values2[i] === "object") {
                            let result = deepEqual(values1[i], values2[i]);
                            if(result === false) {
                                return false;
                            }
                        } else if(values1[i] !== values2[i]){
                            return false;
                        }
                    }
                    return true;
                } else {
                    return false;
                }
            } else if(arg1 === arg2){
                return true;
            } else {
                return false;
            }
        } else if(arg1 == null && arg2 == null) {
            return true;
        } else {
            return false;
        }
    }
    let obj = {here: {is: "an"}, object: 2};
    console.log("obj = " + JSON.stringify(obj));
    console.log("Expected output of deepEqual(obj, obj) is true  " + myFunctionTestArray(true, deepEqual(obj, obj)));
    console.log("Expected output of deepEqual(obj, {here: 1, object: 2}) is false  " + myFunctionTestArray(false, deepEqual(obj, {here: 1, object: 2})));
    console.log("Expected output of deepEqual(obj, {here: {is: \"an\"}, object: 2}) is true  " + myFunctionTestArray(true, deepEqual(obj, {here: {is: "an"}, object: 2})));

}


