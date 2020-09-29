//Create a Palindrome app in Javascript which will print whether a string 
//is a palindrome or not

function isPalindrome(word){
    let answer = ""
    let reverse = ""

    for (let i = word.length -1; i >=0 ; i--) {
        reverse +=word[i]
    }
    if (word == reverse) {
        answer = true
    } else {
        answer = false
    }
    return answer
}

let answer = isPalindrome("racecar")

if (answer == true) {
    console.log("Palindrome")
} else {
    console.log("Not a Palindrome")
}

//Create an app which removes duplicates from an array 

let names = ["John","Mary", "Alex", "Steve", "Mary", "John"]

function removeDups(list){
    let newList = []
    for (i = 0; i <= list.length; i++) {
        // if (newList.includes(list[i])){
        if (!newList.includes(list[i]) && list[i] != undefined){
            newList.push(list[i])
        }
            
        // } else {
        //     newList.push(list[i])
        // }
    }
    return newList
}

dedupList = removeDups(names)
console.log(dedupList)

//Create an app whichs returns true/false depending on if the item is in the array 
let list = [1, 2, 3, 4, 5]

function isIncluded(item, list){
    let answer = ""

    if (list.includes(item)){
        answer = true
    } else {
        answer = false
    }
    return answer
}

result = isIncluded(8, list)
console.log(result)

//Create an app which finds the largest number in an array 

let array = [2, 15, 8, 234, 1]


function largest(list){
    let x = list[0]
    for (i = 0; i <= list.length; i++){
        if (list[i] > x) {
            x = list[i]
        }
    }
    return x
}

let large = largest(array)
console.log(large)


//Create an app which finds the smallest number in an array 
function smallest(list){
    let x = list[0]
    for (i = 0; i <= list.length; i++){
        if (list[i] < x) {
            x = list[i]
        }
    }
    return x
}

let small = smallest(array)
console.log(small)

//create Fizz Buzz

function fizzBuzz(number){
    let answer = ""
    if (number % 3 == 0 && number % 5 == 0){
        answer = "Fizz Buzz"
    } else if (number % 3 == 0){
        answer = "Fizz"
    } else if (number % 5 == 0){
        answer = "Buzz"
    } else {
        answer = "Not divisible by 3 or 5"
    }
    return answer
}

let fizzbuzz = fizzBuzz(9)
console.log(fizzbuzz)

//Create an app which determines whether the number is even or odd. 

function evenOdd(number){
    let answer = ""
    if (number % 2 == 0){
        answer = "even"
    } else {
        answer = "odd"
    }
    return answer
}

let evenOrOdd = evenOdd(9)
console.log(evenOrOdd)

//Take the array [3,4,56,7,8,1] and sort them in ascending and descending order. 

let nums = [3,4,56,7,8,1]

function ascending(list){
    let len = list.length
    for (i = 0; i < len; i++) {
        for (j = 0; j < len -i -1; j++){
            if (list[j] > list[j+1]){
                let temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
        }
    }
}
    return nums
}
ascendingList = ascending(nums)
console.log(ascendingList)

function descending(list){
    let len = list.length
    for (i = 0; i < len; i++) {
        for (j = 0; j < len -i -1; j++){
            if (list[j] < list[j+1]){
                let temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
        }
    }
}
    return nums
}
descendingList = descending(nums)
console.log(descendingList)

//In this assignment you are going to test your knowledge of class composition. 
// Your task is to create a class which represent a "Bank Account". 
// The Bank Account will have the following properties. 

class BankAccount{
    constructor(firstName, middleName, lastName, accountType){
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.accountType = accountType
        this.balance = 0
        this.status = ""
    }
    open(amount){
        let status = ""
        if (amount >= 100){
            this.status = "Opened"
            this.balance += amount
            status = "Your bank account has been opened"
        } else {
            status = "You need an initial deposit of $100 to open an account"
        }
        return status
    }

    withdraw(amount){
        let message = ""
        if (this.status != "Opened"){
            message = "This request cannot be completed. Your account is overdrawn"
        }
        else if (amount <= this.balance){
            this.balance -= amount
            message =  "Withdrawl completed"
        }  else {
            let fee = 35
            this.balance -= amount
            this.balance -= fee
            this.status = "Freeze"
            message = `Withdrawl of ${amount} complete. Account is overdrawn, ${fee} fee applied`
        }
        return message
    }
    transfer(amount, destinationAccount){
        let message = ""
        if (this.status != "Opened"){
            message = "This request cannot be completed. Your account is overdrawn"
        }
        else if (amount <= this.balance){
            this.balance -= amount
            destinationAccount.balance += amount
            message = `Transfer of ${amount} completed`
        }  else {
            let fee = 35
            this.balance -= amount
            destinationAccount.balance += amount
            this.balance -= fee
            this.status = "Freeze"
            message = `Transfer of ${amount} completed. Account is overdrawn, ${fee} fee applied`
        }
        return message

    }

}

let savings = new BankAccount("Milo", "Puppy", "Dog", "savings")
let checking = new BankAccount("Callie", "Puppy", "Dog", "checking")

console.log(savings.open(100))
console.log(checking.open(50))
console.log(checking.open(200))
console.log(savings.transfer(50, checking))

console.log(`Savings balance is ${savings.balance}`)
console.log(`checking balance is ${checking.balance}`)

console.log(savings.withdraw(175))
console.log(`Savings status is ${savings.status}`)
console.log(`Savings balance is ${savings.balance}`)

console.log(savings.withdraw(25))

console.log(`Savings balance is ${savings.balance}`)
console.log(`checking balance is ${checking.balance}`)







