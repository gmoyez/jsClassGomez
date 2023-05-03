const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')
const TBL_OUTPUT = document.getElementById('table-out')

const MY_DATA = []

function updateDOM (input, id) {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

function trackMPGandCost (miles, gallons, price) {
    const MPG = Math.round(miles/gallons) 
    const tripCost = Math.round(gallons * price) 
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
    return {
        MPG: MPG,
        tripCost: tripCost,
        miles: miles,
        gallons: gallons,
        price: price
    }
}

function calculateAvg () {
    let sumMPG = 0
    let sumTripCost = 0
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost += obj.tripCost
    })
    let avgMPG = Math.round(sumMPG/MY_DATA.length)
    let avgTripCost = Math.round(sumTripCost/MY_DATA.length)
        updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
        updateDOM(`Average Trip is ${avgTripCost}`, '#output-avg')
}

function isFormValid (miles, gallons, price) {
    const errMsg = []
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than 0!!, Try Again')
    }
    if (price > 1000) {
        errMsg.push('Really!!!?? I think this is an error...Try again')
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg 
    } else {
        return true
    }
}

function renderTable() {
    const tbl = document.createElement('table')
    const heading = ['Miles Driven:', 'Gallons Used:', 'Price Paid:', 'Trip MPG', 'Trip Cost', 'Edit/Delete']
    const tr = document.createElement('tr')
    heading.forEach(function(heading){
        let th = document.createElement('th')
        th.textContent = heading
        tr.appendChild(th)    
    })

    console.log(tr)
    tbl.appendChild(tr) 
    TBL_OUTPUT.appendChild(tbl)
    MY_DATA.forEach(function(obj){
        const tr = document.createElement('tr')
        for(key in obj){
            let td = document.createElement('td')
            td.textContent = obj[key]
             tr.appendChild(td)
        }     
        tbl.appendChild(tr)
    }) 

}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)

    const isValid = isFormValid(miles, gallons, price)
    if(isValid) {
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const dataObj = trackMPGandCost(miles, gallons, price)
        MY_DATA.push(dataObj)
        renderTable()
        calculateAvg()
    }
    FORM.reset()

})