// ==========================================================
// TypeScript Data Types (Primitive vs Non-Primitive)
// ==========================================================

// ----------------------------
// 🔹 Primitive Data Types
// ----------------------------

// number → Represents numeric values (both integers and floats)
let age: number = 23;

// string → Represents textual data enclosed in quotes
let firstName: string = "Khairul";

// boolean → Represents true or false values
let isStudent: boolean = true;

// null → Represents an intentional absence of any object value
let emptyValue: null = null;

// undefined → Represents a variable that has been declared but not assigned
let notAssigned: undefined = undefined;

// symbol → Represents a unique and immutable value, often used as object keys
let uniqueKey: symbol = Symbol("id");

// ----------------------------
// 🔸 Non-Primitive Data Types
// ----------------------------

// Array → Collection of elements of the same type
let scores: number[] = [85, 90, 78, 92];

// Object → Collection of key-value pairs, representing real-world entities
let person: { name: string; age: number; isMarried: boolean } = {
  name: "Orpa",
  age: 20,
  isMarried: false,
};

// Tuple → Fixed-length array where each element can have a different type
let studentInfo: [string, number, boolean] = ["Khairul", 23, true];

// Enum → Defines a set of named constants, often used for fixed categories
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Function → Block of reusable code that can return a value or perform actions
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Class → Blueprint for creating objects with properties and methods
class Student {
  constructor(public name: string, public id: number) {}

  displayInfo(): string {
    return `Name: ${this.name}, ID: ${this.id}`;
  }
}