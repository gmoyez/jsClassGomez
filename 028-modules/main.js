import { renderTable } from "./render.js"
import { getTripData, saveTripData } from "./storage.js"
import { isFormValid, trackMPGandCost, calculateAvg } from "./handleinput.js"

const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const MY_DATA = getTripData()
renderTable(MY_DATA)



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
        saveTripData(MY_DATA)
        renderTable(MY_DATA)
        calculateAvg(MY_DATA)
    }
    FORM.reset()

})