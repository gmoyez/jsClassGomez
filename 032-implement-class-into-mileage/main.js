import { renderTable } from "./render.js"
import { getTripData, saveTripData } from "./storage.js"
import { isFormValid, calculateAvg, trackMPGandCost } from "./handleinput.js"

const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')


const MY_DATA = getTripData()

renderTable(MY_DATA)

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseFloat(e.target.miles.value)
    const gallons = parseFloat(e.target.gallons.value)
    const price = parseFloat(e.target.price.value)

    const isValid = isFormValid(miles, gallons, price)
    if(isValid) {
        ERR.textContent = ''
        // AVG_OUTPUT.textContent = ''
        const dataObj = trackMPGandCost(miles, gallons, price)
        MY_DATA.push(dataObj)
        saveTripData(MY_DATA)
        renderTable(MY_DATA, FORM)
        calculateAvg(MY_DATA)
    }
    FORM.reset()

})