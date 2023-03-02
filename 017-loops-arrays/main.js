//arrays and Loops

const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons) 
    const tripCost = Math.round(gallons * price) 
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
    myMPG.push(MPG)
    myTripCost.push(tripCost)
}

const calculateAvg = () => {
    let sumMPG = 0
    let sumTripCost = 0
    for(let i = 0; i < myMPG.length; i++) {
        sumMPG = sumMPG + myMPG[i]
        sumTripCost = sumTripCost + myTripCost[i]
    }
    let avgMPG = sumMPG/myMPG.length
    let avgTripCost = sumTripCost/myTripCost.length
        updateDOM(`Average MPG is ${avgMPG}`)
        updateDOM(`Average Trip is ${avgTripCost}`)
}

// calculateAvgCost
// commit message "my code for average cost"

trackMPGandCost(360, 15, 5.40)
trackMPGandCost(320, 12, 5)
trackMPGandCost(100, 7, 4.40)
trackMPGandCost(600, 24, 5.70)
trackMPGandCost(50, 2, 3.40)
trackMPGandCost(250, 15, 3.75)
calculateAvg()