//arrays and Loops

const MY_MPG = []
const MY_TRIP_COST = []

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
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
}

const calculateSUM = (arr) => {
    let sum = 0 
    // for(let i = 0; i < Array.length; i++){
    //     sum = sum + Array[i]
    // }
    // Array.forEach(element => {
    //     console.log(element)        
    //     sum += element
    // })

    // for(value of arr) {
    //     console.log(item)
    //     sum += value 
    // }

    let i = 6
    do {
        i += 6
        console.log(i)        
    } while (i > arr.length && i < arr.length)
    return sum
}

const calculateAvg = () => {
    let sumMPG = calculateSUM(MY_MPG)
    let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = sumMPG/MY_MPG.length
    let avgTripCost = sumTripCost/MY_TRIP_COST.length
        updateDOM(`Average MPG is ${avgMPG}`)
        updateDOM(`Average Trip is ${avgTripCost}`)
}


trackMPGandCost(360, 15, 5.40)
trackMPGandCost(320, 12, 5)
trackMPGandCost(100, 7, 4.40)
trackMPGandCost(600, 24, 5.70)
trackMPGandCost(50, 2, 3.40)
trackMPGandCost(250, 15, 3.75)
calculateAvg()