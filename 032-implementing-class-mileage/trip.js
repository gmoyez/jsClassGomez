class Trip {
    constructor(miles, gallons, price) {
        this._miles = miles
        this._gallons = gallons
        this._price = price
        this._MPG = Number((miles / gallons).toFixed(2))
        this._tripCost = Number((gallons * price).toFixed(2))
    }
}

export {Trip}