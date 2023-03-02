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

const calculateMPGAvg = () => {
    let totalMPG = 0
    for(let i = 0; i < myMPG.length; i++) {
        totalMPG = totalMPG + myMPG[i]
    }
    let avgMPG = totalMPG/myMPG.length
    updateDOM(`Average MPG is ${avgMPG}`)
}

const calculateAvgCost = () => {
    let totalCost = 0
    for(let i = 0; i < myTripCost.length; i++) {
        totalCost = totalCost + myTripCost[i]
    }
    let avgTripCost = totalCost/myTripCost.length
    updateDOM(`Average Cost is ${avgTripCost}`)
}

// calculateAvgCost
// commit message "my code for average cost"

trackMPGandCost(360, 15, 5.40)
trackMPGandCost(320, 12, 5)
trackMPGandCost(100, 7, 4.40)
trackMPGandCost(600, 24, 5.70)
trackMPGandCost(50, 2, 3.40)
trackMPGandCost(250, 15, 3.75)
calculateMPGAvg()
calculateAvgCost()