/* 
==========================================
TypeScript Practice Problems with Solutions
==========================================
*/

// ============================================================================
// PROBLEM 1: String Formatter with Optional Boolean Parameter
// ============================================================================
/**
 * Description:
 * Create a function that takes a string and an optional boolean parameter.
 * - If the boolean is TRUE or NOT PROVIDED, return the string in UPPERCASE.
 * - If the boolean is FALSE, return the string in LOWERCASE.
 *
 * Function Signature:
 * function formatString(input: string, toUpper?: boolean): string
 *
 * Examples:
 * formatString("Hello");          // Output: "HELLO"
 * formatString("Hello", true);    // Output: "HELLO"
 * formatString("Hello", false);   // Output: "hello"
 */
function formatString(input: string, toUpper?: boolean): string {
  // Check if toUpper is explicitly false
  if (toUpper === false) {
    return input.toLowerCase(); // Convert to lowercase when toUpper is false
  }
  // Default behavior (toUpper is true, undefined, or any other truthy value)
  return input.toUpperCase(); // Convert to uppercase otherwise
}

// ============================================================================
// PROBLEM 2: Filter Array of Objects by Rating
// ============================================================================
/**
 * Description:
 * Create a function that filters an array of objects by the rating property,
 * returning only items with a rating of 4 or more.
 *
 * Function Signature:
 * function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]
 *
 * Example:
 * const books = [
 *   { title: "Book A", rating: 4.5 },
 *   { title: "Book B", rating: 3.2 },
 *   { title: "Book C", rating: 5.0 }
 * ];
 *
 * filterByRating(books);
 * // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
 */
function filterByRating(
  items: { title: string; rating: number }[],
): { title: string; rating: number }[] {
  // Use filter() to keep only items with rating >= 4
  return items.filter((item) => item.rating >= 4);
}

// ============================================================================
// PROBLEM 3: Generic Array Concatenation using Rest Parameters
// ============================================================================
/**
 * Description:
 * Create a generic function that concatenates multiple arrays of the same type
 * using rest parameters. The function should work with arrays of any data type.
 *
 * Function Signature:
 * function concatenateArrays<T>(...arrays: T[][]): T[]
 *
 * Examples:
 * concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
 * concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
 */
function concatenateArrays<T>(...arrays: T[][]): T[] {
  // Use reduce() to combine all arrays into a single array
  // Start with an empty array and concatenate each subsequent array
  // Fixed: Added `as T[]` to prevent never[] type inference issue in strict TS
  return arrays.reduce(
    (accumulator, currentArray) => accumulator.concat(currentArray),
    [] as T[],
  );
}

// ============================================================================
// PROBLEM 4: Class Inheritance with Private Properties
// ============================================================================
/**
 * Description:
 * 1. Create a Vehicle class with private make and year properties and a getInfo() method.
 * 2. Create a Car class extending Vehicle, adding a private model property and a getModel() method.
 *
 * Example:
 * const myCar = new Car("Toyota", 2020, "Corolla");
 * myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
 * myCar.getModel();  // Output: "Model: Corolla"
 */

// Base class Vehicle with private properties
class Vehicle {
  private make: string; // Private property - only accessible within Vehicle class
  private year: number; // Private property - only accessible within Vehicle class

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  // Public method to get vehicle information
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

// Derived class Car that extends Vehicle
class Car extends Vehicle {
  private model: string; // Additional private property specific to Car

  constructor(make: string, year: number, model: string) {
    // Call parent class constructor using super()
    super(make, year);
    this.model = model;
  }

  // Public method to get car model information
  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// ============================================================================
// PROBLEM 5: Type Guard for String or Number
// ============================================================================
/**
 * Description:
 * Write a function that takes a string OR number and returns:
 * - The length if it's a string
 * - The number multiplied by 2 if it's a number
 *
 * Function Signature:
 * function processValue(value: string | number): number
 *
 * Examples:
 * processValue("hello"); // Output: 5 (string length)
 * processValue(10);      // Output: 20 (10 * 2)
 */
function processValue(value: string | number): number {
  // Type guard: check if value is a string
  if (typeof value === "string") {
    return value.length; // Return string length for strings
  } else {
    return value * 2; // Return doubled value for numbers
  }
}

// ============================================================================
// PROBLEM 6: Interface and Array Manipulation
// ============================================================================
/**
 * Description:
 * 1. Define an interface called Product with name and price properties.
 * 2. Create a function to find the product with the highest price in an array.
 * 3. If the array is empty, return null.
 *
 * Interface & Function Signature:
 * interface Product {
 *   name: string;
 *   price: number;
 * }
 *
 * function getMostExpensiveProduct(products: Product[]): Product | null
 *
 * Example:
 * const products = [
 *   { name: "Pen", price: 10 },
 *   { name: "Notebook", price: 25 },
 *   { name: "Bag", price: 50 }
 * ];
 *
 * getMostExpensiveProduct(products);
 * // Output: { name: "Bag", price: 50 }
 */

// Define Product interface
interface Product {
  name: string;
  price: number;
}

// Proper null handling and type safety
function getMostExpensiveProduct(products: Product[]): Product | null {
  // Handle empty array case - return null immediately
  if (products.length === 0) {
    return null;
  }

  // Initialize with first product
  let mostExpensive: Product = products[0];

  // Loop through remaining products
  for (let i = 1; i < products.length; i++) {
    const currentProduct = products[i];
    if (currentProduct.price > mostExpensive.price) {
      mostExpensive = currentProduct;
    }
  }

  return mostExpensive;
}

// Alternative implementation using reduce (also type-safe)
function getMostExpensiveProductAlt(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  return products.reduce((maxProduct, currentProduct) => {
    return currentProduct.price > maxProduct.price
      ? currentProduct
      : maxProduct;
  });
}

// ============================================================================
// PROBLEM 7: Enum with Day Classification
// ============================================================================
/**
 * Description:
 * 1. Define an enum called Day for the days of the week.
 * 2. Create a function that returns "Weekday" or "Weekend" based on the input day.
 *
 * Enum & Function Signature:
 * enum Day {
 *   Monday,
 *   Tuesday,
 *   Wednesday,
 *   Thursday,
 *   Friday,
 *   Saturday,
 *   Sunday
 * }
 *
 * function getDayType(day: Day): string
 *
 * Examples:
 * getDayType(Day.Monday);   // Output: "Weekday"
 * getDayType(Day.Sunday);   // Output: "Weekend"
 */

// Define enum for days of the week
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  // Check if day is Saturday or Sunday
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

// ============================================================================
// PROBLEM 8: Async Function with Promise
// ============================================================================
/**
 * Description:
 * Create an async function that:
 * 1. Returns the square of a number after 1 second delay
 * 2. Rejects if the number is negative
 *
 * Function Signature:
 * async function squareAsync(n: number): Promise<number>
 *
 * Examples:
 * squareAsync(4).then(console.log);        // Output after 1s: 16
 * squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
 */

// Proper error typing
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// ============================================================================
// TESTING ALL FUNCTIONS
// ============================================================================
console.log("=".repeat(60));
console.log("TESTING ALL 8 PROBLEMS");
console.log("=".repeat(60));

console.log("\n=== PROBLEM 1: String Formatter ===");
console.log(`formatString("Hello"): "${formatString("Hello")}"`);
console.log(`formatString("Hello", true): "${formatString("Hello", true)}"`);
console.log(`formatString("Hello", false): "${formatString("Hello", false)}"`);

console.log("\n=== PROBLEM 2: Filter by Rating ===");
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
console.log("Original books array:", books);
console.log("Filtered (rating >= 4):", filterByRating(books));

console.log("\n=== PROBLEM 3: Generic Array Concatenation ===");
console.log(
  'concatenateArrays(["a", "b"], ["c"]):',
  concatenateArrays(["a", "b"], ["c"]),
);
console.log(
  "concatenateArrays([1, 2], [3, 4], [5]):",
  concatenateArrays([1, 2], [3, 4], [5]),
);

console.log("\n=== PROBLEM 4: Class Inheritance ===");
const myCar = new Car("Toyota", 2020, "Corolla");
console.log('const myCar = new Car("Toyota", 2020, "Corolla")');
console.log("myCar.getInfo():", myCar.getInfo());
console.log("myCar.getModel():", myCar.getModel());

console.log("\n=== PROBLEM 5: Type Guard Function ===");
console.log('processValue("hello"):', processValue("hello"));
console.log("processValue(10):", processValue(10));

console.log("\n=== PROBLEM 6: Find Most Expensive Product ===");
const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];
console.log("Products array:", products);
console.log("Most expensive product:", getMostExpensiveProduct(products));
console.log("Empty array result:", getMostExpensiveProduct([]));
console.log(
  "Alternative implementation result:",
  getMostExpensiveProductAlt(products),
);

console.log("\n=== PROBLEM 7: Day Type Classifier ===");
console.log("getDayType(Day.Monday):", getDayType(Day.Monday));
console.log("getDayType(Day.Tuesday):", getDayType(Day.Tuesday));
console.log("getDayType(Day.Saturday):", getDayType(Day.Saturday));
console.log("getDayType(Day.Sunday):", getDayType(Day.Sunday));

console.log("\n=== PROBLEM 8: Async Square Function ===");
console.log("Testing with positive number (4):");
squareAsync(4)
  .then((result) => console.log(`  Result after 1 second: ${result}`))
  .catch((error: Error) => console.error(`  Error: ${error.message}`));

console.log("Testing with negative number (-3):");
squareAsync(-3)
  .then((result) => console.log(`  Result: ${result}`))
  .catch((error: Error) => console.error(`  Error: ${error.message}`));

// Additional async/await tests
async function testAsyncFunction(): Promise<void> {
  console.log("\n=== Testing with async/await syntax ===");
  try {
    const result1 = await squareAsync(5);
    console.log(`Square of 5: ${result1}`);

    const result2 = await squareAsync(-2);
    console.log(`Square of -2: ${result2}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`Caught error: ${error.message}`);
    } else {
      console.log(`Caught unknown error: ${error}`);
    }
  }
}

function handleError(error: unknown): undefined {
  if (error instanceof Error) {
    console.log(`Error handled: ${error.message}`);
  } else {
    console.log(`Unknown error handled: ${error}`);
  }
  return undefined;
}

async function safeTestAsyncFunction(): Promise<void> {
  console.log("\n=== Testing with safer error handling ===");

  const positiveResult = await squareAsync(3).catch(handleError);
  if (positiveResult !== undefined) {
    console.log(`Square of 3: ${positiveResult}`);
  }

  const negativeResult = await squareAsync(-5).catch(handleError);
  if (negativeResult !== undefined) {
    console.log(`Square of -5: ${negativeResult}`);
  }
}

// Run async tests
(async () => {
  await testAsyncFunction();
  await safeTestAsyncFunction();
  console.log("\nAll tests completed!");
})();

console.log("\n" + "=".repeat(60));
console.log("END OF TESTING");
console.log("=".repeat(60));