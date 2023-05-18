class Person {
    constructor(firstName, lastName, address){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
    }
    showStatus () {
        console.log(`${this.firstName} lives at ${this.address}`)
    }
}

const moises = new Person("Moises", "Gomez", "123 no way i'll share it")
moises.showStatus()
const john = new Person("John", "Doe", "789 chase field ")
john.showStatus()
