const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr) 
// console.log(myArr ===myObj) 
// const myNumber = 9
const mycarMake = {
    make: 'Dodge',
    model: 'Charger',
    year: 2013,
    fav_sports: ['baseball','soccer','football'],
    mobile: {
        make: 'iPhone 11 Pro Max',
        OS: 'iOS'
    },
    myGreeting: function() {
           
        return `My car is a ${this.make} ${this.model} made in ${this.year}`
    } 
}

const greeting = mycarMake.myGreeting("")
console.log(greeting)
