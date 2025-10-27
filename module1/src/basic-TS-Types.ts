// ==========================================================
// 1-4 Basic Data Types in TypeScript
// ==========================================================

// ----------------------------
// 🔹 Primitive Data Types
// ----------------------------

/**
 * NUMBER TYPE
 * Represents both integer and floating-point numbers
 * Includes decimal, hexadecimal, binary, and octal literals
 */
let age: number = 25; // Integer
let price: number = 99.99; // Floating point
let hexadecimal: number = 0xff; // Hexadecimal (255)
let binary: number = 0b1010; // Binary (10)
let octal: number = 0o744; // Octal (484)

/**
 * STRING TYPE
 * Represents textual data enclosed in single quotes, double quotes, or backticks
 * Backticks allow template literals with embedded expressions
 */
let firstName: string = "Khairul";
let lastName: string = "Akbar";
let fullName1: string = `${firstName} ${lastName}`; // Template literal
let message: string = "Hello, TypeScript!";

/**
 * BOOLEAN TYPE
 * Represents logical values true or false
 * Used for conditions, flags, and logical operations
 */
let isStudent: boolean = true;
let isEmployed: boolean = false;
let hasPermission: boolean = age >= 18;

/**
 * NULL TYPE
 * Represents an intentional absence of any object value
 * Must be explicitly set to null
 */
let emptyValue: null = null;
let userInput1: null = null;

/**
 * UNDEFINED TYPE
 * Represents a variable that has been declared but not assigned a value
 * Default value of uninitialized variables
 */
let notAssigned: undefined = undefined;
let undefinedVariable: undefined;

/**
 * SYMBOL TYPE
 * Represents a unique and immutable primitive value
 * Often used as object property keys to avoid naming conflicts
 */
let uniqueKey: symbol = Symbol("id");
let anotherSymbol: symbol = Symbol("id");
console.log(uniqueKey === anotherSymbol); // false - each Symbol is unique

// ----------------------------
// 🔸 Non-Primitive Data Types
// ----------------------------

/**
 * ARRAY TYPE
 * Collection of elements of the same type
 * Can be declared using type[] or Array<type> syntax
 */
let scores: number[] = [85, 90, 78, 92]; // Number array
let names: string[] = ["Alice", "Bob", "Charlie"]; // String array
let mixed: Array<number> = [1, 2, 3, 4]; // Generic array syntax
let twoDimensional: number[][] = [
  [1, 2],
  [3, 4],
]; // 2D array

/**
 * OBJECT TYPE
 * Collection of key-value pairs representing real-world entities
 * Can define shape with specific property types
 */
let person: { name: string; age: number; isMarried: boolean } = {
  name: "Orpa",
  age: 20,
  isMarried: false,
};

let car: { brand: string; model: string; year: number } = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
};

/**
 * TUPLE TYPE
 * Fixed-length array where each element has a specific type
 * Useful for representing structured data with known format
 */
let studentInfo: [string, number, boolean] = ["Khairul", 23, true];
let coordinates: [number, number] = [40.7128, -74.006];
let rgbColor: [number, number, number] = [255, 0, 0];

/**
 * ENUM TYPE
 * Defines a set of named constants for better readability
 * Can be numeric or string-based enums
 */
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

let move: Direction = Direction.Up;
let responseStatus: StatusCode = StatusCode.Success;

/**
 * FUNCTION TYPE
 * Defines the structure of functions including parameters and return type
 * Can use arrow function syntax or function declarations
 */
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const multiply = (a: number, b: number): number => {
  return a * b;
};

// Function type variable
let mathOperation: (x: number, y: number) => number;
mathOperation = multiply;

/**
 * ANY TYPE
 * Opt-out of type checking - allows any type of value
 * Use sparingly as it defeats TypeScript's type safety
 */
let flexibleVariable: any = "Hello";
flexibleVariable = 42;
flexibleVariable = true;

/**
 * UNKNOWN TYPE
 * Type-safe counterpart of any - requires type checking before use
 * Better alternative to any when type is uncertain
 */
let uncertainValue: unknown = "Hello World";
if (typeof uncertainValue === "string") {
  console.log(uncertainValue.toUpperCase()); // Safe to use
}

/**
 * VOID TYPE
 * Represents the absence of a type, commonly used for functions that don't return values
 */
function logMessage(message: string): void {
  console.log(message);
  // No return statement
}

/**
 * NEVER TYPE
 * Represents values that never occur - used for functions that always throw errors or infinite loops
 */
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function infiniteLoop(): never {
  while (true) {
    // This function never returns
  }
}

// ==========================================================
// 1-5 Object, Optional and Literal Types
// ==========================================================

/**
 * OBJECT TYPES WITH OPTIONAL PROPERTIES
 * Use ? to mark properties as optional
 * Optional properties can be undefined
 */
interface UserProfile {
  name: string;
  age: number;
  email?: string; // Optional property
  phone?: string; // Optional property
}

let user1: UserProfile = { name: "Alice", age: 25 }; // email and phone are optional
let user2: UserProfile = { name: "Bob", age: 30, email: "bob@example.com" };

/**
 * READONLY PROPERTIES
 * Properties that cannot be modified after initialization
 * Ensures immutability for certain properties
 */
interface AppConfig {
  readonly apiKey: string;
  readonly baseUrl: string;
  timeout: number;
}

let config: AppConfig = {
  apiKey: "abc123",
  baseUrl: "https://api.example.com",
  timeout: 5000,
};
// config.apiKey = "newkey"; // Error: Cannot assign to 'apiKey' because it is a read-only property

/**
 * LITERAL TYPES
 * Exact specific values as types
 * Useful for restricting values to specific set
 */
type DirectionLiteral = "north" | "south" | "east" | "west";
let direction: DirectionLiteral = "north";
// direction = "up"; // Error: Type '"up"' is not assignable to type 'DirectionLiteral'

type Status = "pending" | "success" | "error";
let currentStatus: Status = "pending";

/**
 * NUMERIC LITERAL TYPES
 * Restrict numbers to specific values
 */
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: DiceValue = 3;
// diceRoll = 7; // Error: Type '7' is not assignable to type 'DiceValue'

/**
 * BOOLEAN LITERAL TYPES
 * Restrict to specific boolean values
 */
let isActiveFlag: true = true;
let isInactiveFlag: false = false;

// ==========================================================
// 1-6 Function in TypeScript
// ==========================================================

/**
 * FUNCTION PARAMETER TYPES
 * Type annotations for parameters and return types
 */
function addNumbers(x: number, y: number): number {
  return x + y;
}

/**
 * OPTIONAL PARAMETERS
 * Use ? to make parameters optional
 * Optional parameters must come after required parameters
 */
function greetPerson(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}!` : `Hello, ${name}!`;
}

console.log(greetPerson("Alice")); // "Hello, Alice!"
console.log(greetPerson("Bob", "Dr.")); // "Hello, Dr. Bob!"

/**
 * DEFAULT PARAMETERS
 * Parameters with default values
 * Automatically optional in terms of calling
 */
function createEmail(to: string, subject: string = "No Subject"): string {
  return `To: ${to}, Subject: ${subject}`;
}

console.log(createEmail("user@example.com")); // Uses default subject
console.log(createEmail("user@example.com", "Hello")); // Uses provided subject

/**
 * REST PARAMETERS
 * Accept unlimited number of arguments as an array
 * Must be the last parameter
 */
function sumAllValues(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAllValues(1, 2, 3)); // 6
console.log(sumAllValues(1, 2, 3, 4, 5)); // 15

/**
 * FUNCTION OVERLOADS
 * Multiple function signatures for different parameter types
 * Provides better type information for different use cases
 */
function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

console.log(processInput("hello")); // "HELLO"
console.log(processInput(5)); // 10

/**
 * ARROW FUNCTIONS WITH TYPES
 * Type annotations in arrow functions
 */
const calculateArea = (width: number, height: number): number => width * height;

const formatUserName = (firstName: string, lastName: string): string => {
  return `${lastName}, ${firstName}`;
};

// ==========================================================
// 1-7 Spread and Rest Operator
// ==========================================================

/**
 * SPREAD OPERATOR WITH ARRAYS
 * Expands an array into individual elements
 * Useful for copying, merging, and passing arrays as arguments
 */
const numbers1: number[] = [1, 2, 3];
const numbers2: number[] = [4, 5, 6];

// Copying arrays
const numbersCopy: number[] = [...numbers1];
console.log(numbersCopy); // [1, 2, 3]

// Merging arrays
const mergedNumbers: number[] = [...numbers1, ...numbers2];
console.log(mergedNumbers); // [1, 2, 3, 4, 5, 6]

// Adding elements
const extendedNumbers: number[] = [0, ...numbers1, 4];
console.log(extendedNumbers); // [0, 1, 2, 3, 4]

/**
 * SPREAD OPERATOR WITH OBJECTS
 * Expands an object's properties into another object
 * Useful for copying, merging, and overriding properties
 */
const person1 = { name: "Alice", age: 25 };
const person2 = { name: "Bob", city: "New York" };

// Copying objects
const personCopy = { ...person1 };
console.log(personCopy); // { name: "Alice", age: 25 }

// Merging objects
const mergedPerson = { ...person1, ...person2 };
console.log(mergedPerson); // { name: "Bob", age: 25, city: "New York" }

// Overriding properties
const updatedPerson = { ...person1, age: 26 };
console.log(updatedPerson); // { name: "Alice", age: 26 }

/**
 * REST OPERATOR IN FUNCTION PARAMETERS
 * Collects multiple arguments into an array
 * Must be the last parameter in function definition
 */
function assembleSandwich(bread: string, ...ingredients: string[]): string {
  return `Sandwich on ${bread} with: ${ingredients.join(", ")}`;
}

console.log(assembleSandwich("wheat", "lettuce", "tomato", "cheese"));
// "Sandwich on wheat with: lettuce, tomato, cheese"

/**
 * REST OPERATOR IN DESTRUCTURING
 * Collects remaining elements/properties into a new variable
 */
const [firstNum, secondNum, ...remainingNumbers] = [1, 2, 3, 4, 5];
console.log(firstNum); // 1
console.log(secondNum); // 2
console.log(remainingNumbers); // [3, 4, 5]

const { name: personName, ...restPersonInfo } = {
  name: "Charlie",
  age: 30,
  city: "Boston",
};
console.log(personName); // "Charlie"
console.log(restPersonInfo); // { age: 30, city: "Boston" }

// ==========================================================
// 1-8 Destructuring in TypeScript
// ==========================================================

/**
 * ARRAY DESTRUCTURING
 * Extract values from arrays into distinct variables
 * Can be used with type annotations
 */
const colors: string[] = ["red", "green", "blue"];

// Basic destructuring
const [primaryColor, secondaryColor, tertiaryColor] = colors;
console.log(primaryColor); // "red"
console.log(secondaryColor); // "green"
console.log(tertiaryColor); // "blue"

// With type annotations
const [firstColor, secondColor]: string[] = colors;

// Skipping elements
const [firstCol, , thirdCol] = colors;
console.log(firstCol); // "red"
console.log(thirdCol); // "blue"

// Default values
const [firstItem = "default", secondItem = "default"]: string[] = ["actual"];
console.log(firstItem); // "actual"
console.log(secondItem); // "default"

/**
 * OBJECT DESTRUCTURING
 * Extract properties from objects into variables
 * Can rename variables and provide default values
 */
const employeeData = {
  id: 101,
  fullName: "John Doe",
  department: "Engineering",
  salary: 75000,
  isActive: true,
};

// Basic destructuring
const { fullName: empName, department } = employeeData;
console.log(empName); // "John Doe"
console.log(department); // "Engineering"

// With type annotations
const { id: empId, salary }: { id: number; salary: number } = employeeData;

// Renaming variables
const { fullName: employeeName, department: dept } = employeeData;
console.log(employeeName); // "John Doe"
console.log(dept); // "Engineering"

// Default values
const { fullName: empFullName, isActive: activeStatus = false } = employeeData;
console.log(activeStatus); // true (from employeeData)

/**
 * FUNCTION PARAMETER DESTRUCTURING
 * Destructure objects directly in function parameters
 * Cleaner syntax when working with configuration objects
 */
function displayEmployeeInfo({
  fullName,
  department,
}: {
  fullName: string;
  department: string;
}): void {
  console.log(`${fullName} works in ${department}`);
}

displayEmployeeInfo(employeeData); // "John Doe works in Engineering"

// With default values and optional properties
function createUserProfile({
  name,
  age = 25,
  email,
}: {
  name: string;
  age?: number;
  email?: string;
}): void {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email || "N/A"}`);
}

createUserProfile({ name: "Alice" }); // "Name: Alice, Age: 25, Email: N/A"

// ==========================================================
// 1-9 Type Alias in TypeScript
// ==========================================================

/**
 * TYPE ALIAS DEFINITION
 * Create custom names for types for better readability and reusability
 * Can represent primitive types, object types, union types, etc.
 */
type UserID = string | number;
type PersonName = string;
type IsActiveStatus = boolean;

// Using type aliases
let userId: UserID = "ABC123";
let userName: PersonName = "Alice";
let userActiveStatus: IsActiveStatus = true;

/**
 * OBJECT TYPE ALIAS
 * Define the shape of objects for reuse
 */
type AddressType = {
  street: string;
  city: string;
  country: string;
  zipCode: string;
};

type CustomerType = {
  id: UserID;
  name: PersonName;
  email: string;
  address: AddressType;
  isActive: IsActiveStatus;
};

// Using the type aliases
const customerData: CustomerType = {
  id: 101,
  name: "Bob Smith",
  email: "bob@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
    zipCode: "10001",
  },
  isActive: true,
};

/**
 * FUNCTION TYPE ALIAS
 * Define function signatures for reuse
 */
type MathOperationType = (a: number, b: number) => number;
type StringFormatterType = (input: string) => string;

// Using function type aliases
const addOperation: MathOperationType = (x, y) => x + y;
const multiplyOperation: MathOperationType = (x, y) => x * y;

const toUpperCaseFormatter: StringFormatterType = (text) => text.toUpperCase();
const toLowerCaseFormatter: StringFormatterType = (text) => text.toLowerCase();

/**
 * COMBINING TYPE ALIASES
 * Create complex types by combining simpler ones
 */
type ContactInfoType = {
  phone: string;
  email: string;
};

type PersonalInfoType = {
  firstName: string;
  lastName: string;
  age: number;
};

type UserProfileType = PersonalInfoType & ContactInfoType;

const userProfileData: UserProfileType = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 28,
  phone: "+1234567890",
  email: "alice@example.com",
};

// ==========================================================
// 1-10 Union and Intersection Types
// ==========================================================

/**
 * UNION TYPES
 * Allow a variable to hold values of multiple types
 * Use the | operator to combine types
 */
type StringOrNumber = string | number;
type StatusType = "success" | "error" | "loading";

let identifier: StringOrNumber = "ABC123";
identifier = 12345; // Also valid

let currentStatusType: StatusType = "success";

/**
 * UNION TYPES WITH FUNCTIONS
 * Functions can accept or return multiple types
 */
function processInputValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}

console.log(processInputValue("hello")); // "HELLO"
console.log(processInputValue(3.14159)); // "3.14"

/**
 * INTERSECTION TYPES
 * Combine multiple types into one (must satisfy all types)
 * Use the & operator to merge types
 */
type BusinessContactType = {
  company: string;
  position: string;
};

type PersonalContactType = {
  name: string;
  email: string;
  phone: string;
};

type ContactType = PersonalContactType & BusinessContactType;

const contactInfo: ContactType = {
  name: "John Doe",
  email: "john@company.com",
  phone: "+1234567890",
  company: "Tech Corp",
  position: "Developer",
};

/**
 * COMBINING UNION AND INTERSECTION
 * Create flexible yet type-safe structures
 */
type AdminRole = {
  role: "admin";
  permissions: string[];
};

type RegularUserRole = {
  role: "user";
  preferences: string[];
};

type SystemUser = (AdminRole | RegularUserRole) & {
  id: string;
  name: string;
};

const adminUser: SystemUser = {
  id: "1",
  name: "Admin User",
  role: "admin",
  permissions: ["read", "write", "delete"],
};

const regularUser: SystemUser = {
  id: "2",
  name: "Regular User",
  role: "user",
  preferences: ["theme: dark", "language: en"],
};

// ==========================================================
// 1-11 Ternary, Optional Chaining & Nullish Coalescing Operator
// ==========================================================

/**
 * TERNARY OPERATOR
 * Shorthand for if-else statements
 * condition ? expressionIfTrue : expressionIfFalse
 */
const userAge: number = 20;
const canVoteMessage: string =
  userAge >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVoteMessage); // "Yes, can vote"

const examScore: number = 85;
const examGrade: string = examScore >= 90 ? "A" : examScore >= 80 ? "B" : "C";
console.log(examGrade); // "B"

/**
 * OPTIONAL CHAINING OPERATOR (?.)
 * Safely access nested object properties without checking each level
 * Returns undefined if any part of the chain is null or undefined
 */
type CompanyType = {
  name: string;
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
  employees?: {
    count: number;
    list?: string[];
  };
};

const companyData1: CompanyType = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "Boston",
  },
};

const companyData2: CompanyType = {
  name: "Startup Inc",
};

// Safe property access with optional chaining
console.log(companyData1.address?.city); // "Boston"
console.log(companyData2.address?.city); // undefined (no error)

console.log(companyData1.employees?.count); // undefined
console.log(companyData1.employees?.list?.[0]); // undefined

// Optional chaining with function calls
console.log(companyData1.name?.toUpperCase()); // "TECH CORP"

/**
 * NULLISH COALESCING OPERATOR (??)
 * Returns right-hand operand when left-hand is null or undefined
 * Different from || which returns right-hand for any falsy value
 */
const userInputValue = null;
const defaultInputValue = "Default Value";

const resultValue = userInputValue ?? defaultInputValue;
console.log(resultValue); // "Default Value"

const emptyStringValue = "";
const zeroValue = 0;
const falseBoolValue = false;

console.log(emptyStringValue ?? "default"); // "" (empty string is not null/undefined)
console.log(zeroValue ?? 100); // 0 (zero is not null/undefined)
console.log(falseBoolValue ?? true); // false (false is not null/undefined)

// Comparison with logical OR (||)
console.log(emptyStringValue || "default"); // "default" (empty string is falsy)
console.log(zeroValue || 100); // 100 (zero is falsy)
console.log(falseBoolValue || true); // true (false is falsy)

/**
 * COMBINING OPTIONAL CHAINING AND NULLISH COALESCING
 * Powerful pattern for safe default values in nested structures
 */
const appConfig = {
  theme: "dark",
  api: {
    endpoint: null,
    timeout: 0,
  },
};

const apiEndpoint = appConfig.api?.endpoint ?? "https://default.api.com";
const apiTimeout = appConfig.api?.timeout ?? 5000;

console.log(apiEndpoint); // "https://default.api.com"
console.log(apiTimeout); // 0 (zero is not null/undefined)

// ==========================================================
// 1-12 Never, Unknown and Nullable Types
// ==========================================================

/**
 * NEVER TYPE
 * Represents values that NEVER occur
 * Used for functions that always throw errors or have infinite loops
 * Also used in exhaustive type checking
 */
function throwCustomError(message: string): never {
  throw new Error(message);
}

function infiniteProcess(): never {
  while (true) {
    // This function never returns
  }
}

// Exhaustive type checking with never
type ShapeType = "circle" | "square" | "triangle";

function calculateShapeArea(shape: ShapeType): number {
  switch (shape) {
    case "circle":
      return Math.PI * 10 * 10;
    case "square":
      return 10 * 10;
    case "triangle":
      return 0.5 * 10 * 10;
    default:
      // TypeScript will error if we forget a case
      const exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape: ${exhaustiveCheck}`);
  }
}

/**
 * UNKNOWN TYPE
 * Type-safe counterpart of 'any'
 * Requires type checking or assertion before use
 * Better alternative when type is uncertain
 */
let unknownValueType: unknown;

unknownValueType = "Hello World";
unknownValueType = 42;
unknownValueType = true;

// This would cause error - need type checking
// console.log(unknownValueType.toUpperCase()); // Error: Object is of type 'unknown'

// Safe usage with type checking
if (typeof unknownValueType === "string") {
  console.log(unknownValueType.toUpperCase()); // Safe
}

if (typeof unknownValueType === "number") {
  console.log(unknownValueType.toFixed(2)); // Safe
}

// Type assertion with unknown
const assertedStringValue = unknownValueType as string;
const assertedNumberValue = <number>unknownValueType;

/**
 * NULLABLE TYPES
 * Working with null and undefined in type system
 * Use union types to make types nullable
 */
type NullableStringType = string | null;
type OptionalNumberType = number | undefined;
type MaybeBooleanType = boolean | null | undefined;

let nullableUserName: NullableStringType = "Alice";
nullableUserName = null; // Valid

let optionalUserAge: OptionalNumberType = 25;
optionalUserAge = undefined; // Valid

let maybeUserActive: MaybeBooleanType = true;
maybeUserActive = null; // Valid
maybeUserActive = undefined; // Valid

/**
 * STRICT NULL CHECKS
 * TypeScript's strict mode prevents accidental null/undefined usage
 * Requires explicit handling of potential null values
 */
function getStringLength(text: string | null): number {
  if (text === null) {
    return 0;
  }
  return text.length; // TypeScript knows text is string here
}

function processUserInputValue(input: string | undefined): string {
  // Using nullish coalescing for safe default
  return input ?? "default input";
}

/**
 * TYPE GUARDS WITH UNKNOWN
 * Techniques to safely work with unknown types
 */
function isStringType(value: unknown): value is string {
  return typeof value === "string";
}

function isNumberType(value: unknown): value is number {
  return typeof value === "number";
}

function isUserObjectType(
  value: unknown
): value is { name: string; age: number } {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value
  );
}

// Using type guards
function processUnknownValue(value: unknown): void {
  if (isStringType(value)) {
    console.log(value.toUpperCase());
  } else if (isNumberType(value)) {
    console.log(value.toFixed(2));
  } else if (isUserObjectType(value)) {
    console.log(`User: ${value.name}, Age: ${value.age}`);
  } else {
    console.log("Unknown type");
  }
}