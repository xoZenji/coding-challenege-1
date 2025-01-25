// Task 1: Employee Info
// Declares the variable used to showcase the employees name as a string value.
let employeeName = "John Smith";
// Declares the variable used to showcase the ID of John Smith as a numeric value.
const employeeID = "001";
// Declares the variable used to showcase the employee is currently active within the company as a boolean value.
var isActive = true;

// Logs the type and name of the employee John Smith within the console.
console.log("Employee Name:",employeeName,"| Type:",typeof employeeName);
// Logs the ID of the employee and its type within the console.
console.log("Employee ID:", employeeID,"| Type:",typeof employeeID);
// Logs whether the employee is active or not and its type within the console.
console.log("Active:", isActive,"| Type:",typeof isActive);

// Task 2: Product Info
// Declares a variable for the products name while giving it a string value.
let productName = "Beanies";
// Declares a variable for the price of the product while giving it a numeric value.
const productPrice = 10;
// Declares a variable stating if the product is still available or not while giving it a boolean value.
var isAvailable = true;

//Logs the name of the product and its type within the console.
console.log("Product Name:", productName,"| Type:",typeof productName)
// Logs the price of the product and its type within the console.
console.log("Price:", productPrice, "| Type:",typeof productPrice)
// Logs the products availability and its type within the console.
console.log("Available?", isAvailable,"| Type:",typeof isAvailable)

// Task 3: Financial Transactions
// Declares the variable for the account balance 
let accountBalance = 1000;
console.log("Original Balance:" ,accountBalance)
// Subtracts 250 from the original account balance.
accountBalance -= 250;
console.log("Balance Subtracted:" ,accountBalance); // New Balance: $750
// Adds 400 to the new balance.
accountBalance += 400;
console.log("Balance Added:" ,accountBalance); // New Balance: $1150
// Mulitplies the new account balance by 2.
accountBalance *= 2;
console.log("Balance Mulitplied:" ,accountBalance); // New Balance: $2300
// Divides the newest account balance by 1.5.
accountBalance /= 1.5;
console.log("Balance Divided:" ,accountBalance); // New Balance: $1533.33

// Task 4: Customer Message
// Assigns the customers name and displays a welcome message accordingly.
let customerName = "John Smith";
let welcomeMessage = "Welcome to the shop, "+ customerName +", we hope you find everything you need!";

console.log(welcomeMessage);