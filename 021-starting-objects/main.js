const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr) 
// console.log(myArr ===myObj) 
const myNumber = 9
const myObj = {
    name: 'Moises',
    age: 32,
    hobbies: ['coding', 'running', 'workout'],
    mobile: {
        make: 'iPhone 11 Pro Max',
        OS: 'iOS'
    },
    myGreeting: function(person) {
        return `What is UP ${person}`
    } 
}

const greeting = myObj.myGreeting('Moises')
console.log(greeting)
