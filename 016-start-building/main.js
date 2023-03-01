//Update the DOM

const myArr = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}

const trackMPGCost = (miles, gallons, price) => {
    const MPG = miles/gallons 
    const tripCost = MPG * price 
    myArr.push(MPG, tripCost)
}



updateDOM(trackMPGCost(300, 10, 5.40))
updateDOM(trackMPGCost(320, 12, 5))