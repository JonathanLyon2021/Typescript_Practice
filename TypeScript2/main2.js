"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome back Jonathan";
console.log(message); // Welcome back Jonathan
var x = 10;
var y = 20; // const is a constant variable
var sum; // by default it is of type any
var title = "Codevolution"; // by default it is of type string
var isBeginner = true; // by default it is of type boolean w/o the datatype declaration
var total = 0;
var name = "JonBoy";
var sentence = "My name is ".concat(name, " I am a beginner in TypeScript"); // template string
console.log(sentence); // My name is JonBoy I am a beginner in TypeScript
var n = null;
var u = undefined;
//These are both Array syntaxs
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//Tuple
var person1 = ["Chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 35] = "Red";
    Color[Color["Green"] = 36] = "Green";
    Color[Color["Blue"] = 37] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c); // 1
var randomValue = 10;
randomValue = true; // can be any type
randomValue = "JonBoy";
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
//(myVariable as string).toUpperCase(); // type assertion
//Type Inference
//Specifiying types is completely optional
var a;
a = 10;
a = true;
//Typescript INFERRED the data type of variable b to be number. Therefore we get an error
var b = 20;
//b = true
//Variable Types
//This type is  a number or boolean
var multiType;
multiType = 20;
multiType = true;
//This type has no restrictions
var anyType;
anyType = 20;
anyType = true;
//Functions
//first parameters are required type, second are optional types, third are default types
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1; // num2 is optional
} // This function returns a number
add(5, 10);
//add(5, '10'); //this will throw an error.
//we have static type checking for parameters
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
//function fullName(person: { firstName: string; lastName: string }) {
//  console.log(`${person.firstName} ${person.lastName}`);
//} 
// This is the same as the interface above
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
//Classes && Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var employee1 = new Employee('Jonathan');
console.log(employee1.employeeName); // Jonathan
employee1.greet(); // Good Morning Jonathan
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName); // Bruce
// ACCESS MODIFIERS - are keywords that set the access abilities of properties and methods inside a class.
//public - can be accesed outside of the class
//private - can only be accessed inside the class
//protected - can be accessed inside the class and in classes that inherit from this class
