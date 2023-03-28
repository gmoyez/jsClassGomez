const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr) 
// console.log(myArr === myObj) 
const myNumber = 9
const myObj = {
    name: 'Moises',
    age: 32,
    likes: 0,
    hobbies: ['coding','soccer','football'],
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
const rioObj = myObj
rioObj.increaseLikes(rioObj)
console.log(rioObj)
rioObj.age = 32


const greeting = myObj.myGreeting('jane')
console.log(greeting)

console.log(myObj.mobile.make.length)

for(key in myObj){
    console.log(`key ${key} and value ${myObj[key]} `)
}






// comment where you played around with these methods


// topics prim and obj <> looping over obj passed by value or refrence