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
           
        return `${this.name} who loves ${this.hobbies[0]} says what is UP ${person}`
    } 
}

const greeting = myObj.myGreeting('Moy')
console.log(greeting)
