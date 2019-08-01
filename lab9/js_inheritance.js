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
            if (expected.value != found.value) {
                return "TEST FAILED.  Expected value " + expected.value + " found value " + found.value;
            }
            expected = expected.rest;
            found = found.rest;
        } while (expected != null && found != null)
        if (expected == null && found == null) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected value " + expected + " found value " + found;
        }
    }

    String.prototype.filter = function (str) {
        return this.replace(str + ' ', "").replace(str, "");
    };
    console.log("Expected output of \"This house is not nice!\".filter('not') is \"This house is nice!\"  " + myFunctionTestArray("This house is nice!", "This house is not nice!".filter('not')));


    Array.prototype.bubbleSort = function () {
        for (let i = 0; i < this.length; i++) {
            for (let j = 1; j < this.length - i; j++) {
                if (this[j - 1] > this[j]) {
                    let temp = this[j - 1];
                    this[j - 1] = this[j];
                    this[j] = temp;
                }
            }
        }
        return this;
    }
    console.log("Expected output of [6,4,0, 3,-2,1].bubbleSort() is [-2, 0, 1, 3, 4, 6]  " + myFunctionTestArray([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort()));


    /* Inheritance Function Constructor */
    console.log("====Section for Function Constructor Inheritance====")

    function Person(name, age, hobby = "unknown") {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    Person.prototype.favouriteHobby = function () {
        console.log("My name is " + this.name + " and my hobby is " + this.hobby);
    }

    Person.prototype.species = "homo sapien";

    function Teacher(name, age, hobby, subject = "unkown") {
        Person.call(this, name, age, hobby);
        this.subject = subject;
    }

    Teacher.prototype = new Person();
    Teacher.prototype.teach = function (subject) {
        this.subject = subject;
        console.log(this.name + " is now teaching " + this.subject);
    }
    // Two objects for testing
    const teacher1 = new Teacher("Marry", "50", "Badminton");
    console.log(teacher1);
    teacher1.teach("Java");

    const teacher2 = new Teacher("Brown", "60", "Tennis");
    console.log(teacher2);
    teacher2.teach("Web Programing");
    teacher2.favouriteHobby();
    console.log(teacher2.species);

    /* Inheritance using Object.create */
    console.log("====Section for Object.create Inheritance====")
    const Person1 = {
        constructor: function(name, age, hobby = "unknown") {
            this.name = name;
            this.age = age;
            this.hobby = hobby;
        },
        favouriteHobby: function () {
            console.log("My name is " + this.name + " and my hobby is " + this.hobby);
        },
        species: "homo sapien"
    }

    const Teacher1 = Object.create(Person1);
    console.log(Teacher1);
    Teacher1.constructor = function (name, age, hobby, subject = "unkown") {
        this.subject = subject;
        return Person1.constructor.call(this, name, age, hobby);
    }
    Teacher1.teach = function (subject) {
        this.subject = subject;
        console.log(this.name + " is now teaching " + this.subject);
    }

    // Two objects for testing
    const teacher11 = Object.create(Teacher1);
    teacher11.constructor("Marry", "50", "Badminton");
    console.log(teacher11);
    teacher11.teach("Java");

    const teacher12 = Object.create(Teacher1);
    teacher12.constructor("Brown", "60", "Tennis");
    console.log(teacher12);
    teacher12.teach("Web Programing");
    teacher12.favouriteHobby();
    console.log(teacher12.species);

    /* Inheritance ES6 Class */
    console.log("====Section for ES6 Class Inheritance====")

    class Person2 {
        constructor(name, age, hobby) {
            this.name = name;
            this.age = age;
            this.hobby = hobby;

        }

        favouriteHobby() {
            console.log("My name is " + this.name + " and my hobby is " + this.hobby);
        }

        species = "homo sapien";
    }

    class Teacher2 extends Person2 {
        constructor(name, age, hobby, subject = "unknown") {
            super(name, age, hobby);
            this.subject = subject;
        }

        teach(subject) {
            this.subject = subject;
            console.log(this.name + " is now teaching " + this.subject);
        }
    }

    // Two objects for testing
    const teacher21 = new Teacher2("Marry", "50", "Badminton");
    console.log(teacher21);
    teacher21.teach("Java");

    const teacher22 = new Teacher2("Brown", "60", "Tennis");
    console.log(teacher22);
    teacher22.teach("Web Programing");
    teacher22.favouriteHobby();
    console.log(teacher22.species);
}


