const studentName = "Noman";
const obtainedMarks = 62;
const totalMarks = 100;

let percentage;
let grade;
let Status;

if (obtainedMarks > totalMarks) {
    console.log("Error: Obtained marks cannot be greater than total marks");
} else {
    percentage = (obtainedMarks / totalMarks) * 100;



if (obtainedMarks >= 90){
    grade = "A+";
}
else if (obtainedMarks >=80){
    grade = "A"
} 
else if (obtainedMarks >=70){
    grade = "B"
} 
else if (obtainedMarks >=60){
    grade = "C"
} 
else if (obtainedMarks >=50){
    grade = "D"
} 
else {
    grade = "F"
} 

if (percentage >=50){
    Status = "Pass";
}
else {
    Status ="Fail";
}

console.log("Name:", studentName);
console.log("Marks:",`${obtainedMarks}/${totalMarks}`);
console.log("Percentage:", `${percentage}`+ "%");
console.log("Grade:", grade);
console.log("Status:", Status);
}




// Example 2

const customerName = "  Noman  ";
const itemName = "laptop";
const price = 80000;
const quantity = 2;
const discountCode = "SAVE10";

const cleanName = customerName.trim();
const displayItem = itemName.toUpperCase();

const totalPrice = price * quantity;

let discountPercentage;

switch(discountCode){
    case "SAVE10":
        discountPercentage = 10;
        break;
    case "SAVE20":
        discountPercentage = 20;
        break;
    case "SAVE30":
        discountPercentage = 30;
        break;
    case "SAVE40":
        discountPercentage = 40;
        break;
    case "SAVE50":
        discountPercentage= 50;
        break;
    case "NONE":
        discountPercentage = 0;
        break;
    default:
        discountPercentage = 0;
}


const discountAmount = price * discountPercentage/100;

const finalPrice = totalPrice - discountAmount;

let category;

if (finalPrice >= 100000) {
    category = "Expensive Purchase";
} else {
    category = "Normal Purchase";
}

for (let i= 1; i <=quantity; i++){
    console.log(`Item ${i}: ${displayItem}`);
}

let quantityType;

if (quantity % 2 === 0) {
    quantityType = "Even";
} else {
    quantityType = "Odd";
}

const couponOwner = null;
const owner = couponOwner ?? "Guest";


// 10. Final output
console.log("\n========================");
console.log("      SHOPPING BILL");
console.log("========================");

console.log(`Customer: ${cleanName}`);
console.log(`Item: ${displayItem}`);
console.log(`Price: Rs ${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: Rs ${totalPrice}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: Rs ${discountAmount}`);
console.log(`Final Price: Rs ${finalPrice.toFixed(2)}`);
console.log(`Category: ${category}`);
console.log(`Quantity Type: ${quantityType}`);
console.log(`Coupon Owner: ${owner}`);

console.log("========================");





const numbers = [12,15,5,18,9,3];
let largestNumber = numbers[0];
let smallestNumber = numbers[0];
let primeNumbers = [];
let sum =0;
let evenCount = 0;
let oddCount = 0;
let avg ;

for (let i =0; i <numbers.length; i++){
    let numb = numbers[i];
    if (numb > largestNumber ){
        largestNumber = numb;
    }

    if (numb < smallestNumber){
        smallestNumber = numb;
    }


    
    sum = sum + numb;


    avg = sum / numbers.length;


    if (numb % 2 ===0){
    evenCount++;
    }
    else {
    oddCount++;
    }

    let isPrime = true;
    if (numb < 2){
    isPrime = false;
    }
    else {
        for (let j=2; j < numb; j++){
            if (numb % j ===0){
            isPrime = false;
            break;
            }
        
        }
    }
    if (isPrime){
        primeNumbers.push(numb);
    }
}

const numberList = numbers.join(", ");
const primeList = primeNumbers.join(", ");


console.log("================================");
console.log("           REPORT");
console.log("================================");
console.log(`Numbers: ${numberList}`);

console.log(`Largest: ${largestNumber}`);
console.log(`Smallest: ${smallestNumber}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${avg.toFixed(2)}`);

console.log(`Even Numbers: ${evenCount}`);
console.log(`Odd Numbers: ${oddCount}`);

console.log(`Prime Numbers: ${primeList}`);

console.log("================================");



// Function Declaration
function add(...nums){
    let total =0;
    for (let number of nums){
        total +=number;
    }
    return total;
}
console.log(add(2,5,4,7));


// Function Expression
const add = function(...nums){
    let total =0;
    for (let number of nums){
        total +=number;
    }
    return total;
};
console.log(add(2,5,4,7));


// Arrow Function
const add = (...nums) =>{
    let total =0;
    for (let number of nums){
        total +=number;
    }
    return total;
};
console.log(add(2,5,4,7));



function userName(){
    console.log("Noman")
}

function repeat(n,userName){
    
    for (let i = 0; i <n; i++){
        userName();
    }
}

repeat(3,userName);






const numbs = [10, 20, 30];

function myForEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

myForEach(numbs, function(number) {
    console.log(number);
});



const number=[2,3,4,5,6,7,8];
function isEven(number){
    return number%2 ===0;
}

function myFilter(array, predicate){
    const result=[];
    for (let i=0; i<array.length; i++){
        if (predicate(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(myFilter(number, isEven));




// closures example
function makeCounter(){
    let count = 0;

    return{ 
        increment(){
            count ++;
        },
        decrement (){
            count --;
        },
        get(){
            return count;
        }
    };
}
const counter = makeCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.get());

counter.decrement();
console.log(counter.get());




function createAccount(initialBalance) {
    let balance = initialBalance;

    function deposit(amount) {
        balance += amount;
        return balance;
    }

    function withdraw(amount) {
        if (amount > balance) {
            return "Insufficient balance";
        }

        balance -= amount;
        return balance;
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit,
        withdraw,
        getBalance
    };
}

function logCalls(fn) {
    return function (...args) {
        console.log("Arguments:", args);

        const result = fn(...args);

        console.log("Result:", result);

        return result;
    };
}

const account = createAccount(1000);

account.deposit = logCalls(account.deposit);
account.withdraw = logCalls(account.withdraw);

account.deposit(500);
account.withdraw(200);

console.log("Current balance:", account.getBalance());