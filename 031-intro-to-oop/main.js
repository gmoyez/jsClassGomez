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

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address)
        this.classList = classList
    }
    showStatus() {
        console.log(`${this.firstName} lives at ${this.address} is taking ${this.classList}`)
    }

}

const moises = new Student("Moises", "Gomez", "123 no way i'll share it", ["Eng1A", "CIT93"])
moises.showStatus()
const john = new Person("John", "Doe", "789 chase field ")
john.showStatus()