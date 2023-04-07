const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const trackingObj = {
    MY_MPG: [],
    MY_TRIP_COST: [],
    updateDOM: (input, id) => {
        const divEl = document.querySelector(id)
        const p = document.createElement('p')
        p.textContent = input
        divEl.appendChild(p)
},
    trackMPGandCost: function(miles, gallons, price = 3.79) {
        const MPG = Math.round(miles/gallons) 
        const tripCost = Math.round(gallons * price) 
        this.updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
        this.MY_MPG.push(MPG)
        this.MY_TRIP_COST.push(tripCost)
},
    calculateSUM: (arr) => {
        let sum = 0 
        for(value of arr) {
            sum += value 
        }
        return sum
},
    calculateAvg: function () {
        const sumMPG = this.calculateSUM(this.MY_MPG)
        const sumTripCost = this.calculateSUM(this.MY_TRIP_COST)
        const avgMPG = Math.round(sumMPG/this.MY_MPG.length)
        const avgTripCost = Math.round(sumTripCost/this.MY_TRIP_COST.length)
        this.updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
        this.updateDOM(`Average Trip is ${avgTripCost}`, '#output-avg') 
},
    validateForm: function (e) {
        const errMsg = []
        const miles = parseInt(e.target.miles.value)
        const gallons = parseInt(e.target.gallons.value)
        const price = parseInt(e.target.price.value)
        if(miles === 0 || gallons === 0 || price === 0) {
            errMsg.push('Make sure you input value greater than 0!!, Try Again')
        } 
        if(price > 1000) {
            errMsg.push('Really!!!?? I think this is an error...Try again')
        } 
        if(errMsg.length > 0) {
            ERR.textContent = errMsg
        } else {
            ERR.textContent = ''
            AVG_OUTPUT.textContent = ''
            this.trackMPGandCost(miles, gallons, price)
            this.calculateAvg()
        }
        FORM.reset()
    }    
}
FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    trackingObj.validateForm(e)
})