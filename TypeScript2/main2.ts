export {};
let message = "Welcome back Jonathan";
console.log(message); // Welcome back Jonathan

let x = 10;
const y = 20; // const is a constant variable

let sum; // by default it is of type any

const title = "Codevolution"; // by default it is of type string

let isBeginner: boolean = true; // by default it is of type boolean w/o the datatype declaration
let total: number = 0;
let name: string = "JonBoy";

let sentence: string = `My name is ${name} I am a beginner in TypeScript`; // template string

console.log(sentence); // My name is JonBoy I am a beginner in TypeScript

let n: null = null;
let u: undefined = undefined;

//These are both Array syntaxs
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuple
let person1: [string, number] = ["Chris", 22];

enum Color {
	Red = 35,
	Green,
	Blue,
}

let c: Color = Color.Blue;

console.log(c); // 1

let randomValue: any = 10;
randomValue = true; // can be any type
randomValue = "JonBoy";

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj;

}

if (hasName(myVariable)) {
console.log(myVariable.name)
}
//(myVariable as string).toUpperCase(); // type assertion

//Type Inference
//Specifiying types is completely optional

let a;
a = 10;
a = true;

//Typescript INFERRED the data type of variable b to be number. Therefore we get an error
let b = 20;
//b = true

//Variable Types
//This type is  a number or boolean
let multiType: number | boolean;
multiType = 20;
multiType = true;

//This type has no restrictions
let anyType: any;
anyType = 20;
anyType = true; 

//Functions

//first parameters are required type, second are optional types, third are default types
function add(num1: number, num2: number = 10): number {
   if (num2) 
     return num1 + num2;
   else 
     return num1; // num2 is optional
} // This function returns a number

add(5, 10);
//add(5, '10'); //this will throw an error.
//we have static type checking for parameters
add(5);


//Interfaces

interface Person {
    firstName: string;
    lastName?: string;
} // ? makes lastName optional, like forms where you don't have to enter your last name


function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
    } 


//function fullName(person: { firstName: string; lastName: string }) {
//  console.log(`${person.firstName} ${person.lastName}`);
//} 
// This is the same as the interface above

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);


//Classes && Access Modifiers

class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}
let employee1 = new Employee('Jonathan'); 
console.log(employee1.employeeName); // Jonathan
employee1.greet(); // Good Morning Jonathan

class Manager extends Employee { 

    constructor(managerName: string){
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks ${this.employeeName}`);
    }
}
let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName); // Bruce

// ACCESS MODIFIERS - are keywords that set the access abilities of properties and methods inside a class.
//public - can be accesed outside of the class
//private - can only be accessed inside the class
//protected - can be accessed inside the class and in classes that inherit from this class
