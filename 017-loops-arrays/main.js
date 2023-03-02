//arrays and Loops

const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons) 
    const tripCost = Math.round(gallons * price) 
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`)
    myMPG.push(MPG)
    myTripCost.push(tripCost)
}

const calculateMPGAvg = () => {
    // const avgMPG = (myArr [0] = myArr[2]) / 2
    // updateDOM(`Average Miles per Gallon is ${avgMPG}`)
    let totalMPG = 0
    for(let i = 0; i < myMPG.length; i++) {
        totalMPG = totalMPG + myMPG[i]
    }
    let avgMPG = totalMPG/myMPG.length
    updateDOM(`Average MPG is ${avgMPG}`)
}

// calculate average we need to determine total number of occurances and divide that number of occurances

trackMPGCost(360, 15, 5.40)
trackMPGCost(320, 12, 5)
trackMPGCost(100, 7, 4.40)
trackMPGCost(600, 24, 5.70)
trackMPGCost(50, 2, 3.40)
trackMPGCost(250, 15, 3.75)
calculateMPGAvg()