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



/////
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