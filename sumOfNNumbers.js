// Method 1: Sum of first n numbers using a loop
function sumUsingLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Method 2: Sum of first n numbers using mathematical formula
// Formula: n * (n + 1) / 2
function sumUsingFormula(n) {
  return (n * (n + 1)) / 2;
}

// Method 3: Sum of array of numbers using reduce
function sumOfArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Method 4: Sum of n numbers using recursion
function sumUsingRecursion(n) {
  if (n === 0) return 0;
  return n + sumUsingRecursion(n - 1);
}

// Method 5: Sum of array using spread operator and reduce
function sumWithSpread(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log("=== Sum of first N numbers ===");
console.log("Sum of 5 (using loop):", sumUsingLoop(5));           // Output: 15
console.log("Sum of 5 (using formula):", sumUsingFormula(5));     // Output: 15
console.log("Sum of 10 (using loop):", sumUsingLoop(10));         // Output: 55
console.log("Sum of 10 (using formula):", sumUsingFormula(10));   // Output: 55

console.log("\n=== Sum of array of numbers ===");
const arr = [1, 2, 3, 4, 5];
console.log("Sum of array [1,2,3,4,5]:", sumOfArray(arr));        // Output: 15

console.log("\n=== Sum using recursion ===");
console.log("Sum of 5 (using recursion):", sumUsingRecursion(5)); // Output: 15

console.log("\n=== Sum using spread operator ===");
console.log("Sum of 1,2,3,4,5:", sumWithSpread(1, 2, 3, 4, 5));  // Output: 15
