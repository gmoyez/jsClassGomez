const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr) 
// console.log(myArr === myObj) 
const myNumber = 9
const myObj = {
    name: 'Moises',
    age: 32,
    likes: 0,
    hobbies: ['code','soccer','football'],
    mobile: {
        make: 'iPhone 11 Pro Max',
        OS: 'iOS'
    },
    myGreeting: function(person) {
        return `${this.name} who loves to ${this.hobbies[0]} says what UP! ${person}`
    },
    increaseLikes: function(){
        this.likes += 1
    }             
}
const moyObj = myObj
moyObj.increaseLikes(moyObj)
console.log(moyObj)
moyObj.age = 32


const greeting = myObj.myGreeting('jane')
console.log(greeting)

console.log(myObj.mobile.make.length) // method example

for(key in myObj){
    console.log(`key ${key} and value ${myObj[key]} `) // looping example
}
    
console.log("The World Baseball Classic was entertaining this YEAR!".toLowerCase()) 

const i = myObj.myGreeting("")
    console.log(i)



// comment where you played around with these methods


// topics prim and obj <> looping over obj passed by value or refrence