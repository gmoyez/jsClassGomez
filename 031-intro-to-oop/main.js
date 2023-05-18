class Person {
    constructor(firstName, lastName, address){
        this._firstName = firstName
        this._lastName = lastName
        this._address = address
    }
    getFirstName () {
        return `${this._firstName}`    
    }
    setFirstName (newFirstName) {
        this._firstName = newFirstName
    }
    getLastName (){
        return `${this._lastName}`
    }
    setLastName(newLastName){
        this._lastName = newLastName 
    }
    getAddress() {
        return `${this._address}`
    }
    setAddress(newAddress) {
        this._address = newAddress
    }


    showStatus () {
        console.log(`${this.getFirstName()} lives at ${this.getAddress()}`)
    }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address)
        this._classList = classList
    }
    getClassList () {
        return `${this._classList}`
    }
    setAddress (newClassList) {
        this._classList = newClassList
    }
    showStatus () {
        console.log(`${this.getFirstName()} lives at ${this.getAddress()} is taking ${this.getClassList()}`)
    }

}

const moises = new Student("Moises", "Gomez", "123 no way i'll share it", ["Eng1A", "CIT93"])
moises.showStatus()
const john = new Person("John", "Doe", "789 chase field ")
john.showStatus()

console.log(moises.getFirstName()) 