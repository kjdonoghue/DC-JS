// // List of Names

let names = []

names.push("Derek")
names.push("Milo")
names.push("Callie")


for (let index = 0; index < names.length; index++){
    console.log(names[index])
}

let index = 0
while(index < names.length) {
    console.log(names[index])
    index++
}

// Check for vowel

let letter = "a"

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log("vowel")
} else {
    console.log("not a vowel")
}

function isVowel(letter) {
    letter = letter.toLowerCase()
    let vowel = false

    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        vowel = true
    } 

    return vowel

}

if(isVowel(letter)) {
    console.log("vowel")
} else {
    console.log("not vowel")
}

// Sum of given integers
// Write a JavaScript program to compute the sum of the two given integers, 
// If the sum is in the range 50..80 return 65 other wise return 80

let no1 = 40
let no2 = 41

function sum(firstNumber, secondNumber) {
    let total = firstNumber + secondNumber
    let answer = 0

    if (total >= 50 && total <= 80) {
        answer = 65
    } else {
        answer = 80
    }
    return answer
}

console.log(sum(no1, no2))

//Back Account Class

let initialAmount = 0
let accountType = "savings"

class bankAccount {
    constructor(balance, accountType) {
        this.balance = balance
        this.accountType = accountType
             
    }
    deposit(amount){
        this.balance += amount
    }
    withdrawl(amount){
        this.balance -= amount
    }

}

mySavings = new bankAccount(initialAmount, accountType)
mySavings.deposit(100)
console.log(mySavings.balance)
mySavings.withdrawl(50)
console.log(mySavings.balance)