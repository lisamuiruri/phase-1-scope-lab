
// 1. Declare a variable in global scope using var
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that declares a global variable from inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly global variable (bad practice)
}

// 4. Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'john';

// 6. Function that tries to change a constant variable
function changeLeastFavoriteCustomer() {
  // This will throw an error because you can't reassign a const
  leastFavoriteCustomer = 'not john'; // ❌ This line will cause a TypeError
}
