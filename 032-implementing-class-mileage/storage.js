function getTripData() {
    const tripDataJSON = localStorage.getItem('tripdata')
    if(tripDataJSON !== null) {
      return JSON.parse(tripDataJSON)  
    } else {
        return []
    }   
}

function saveTripData(MY_DATA) {
    localStorage.setItem('tripdata', JSON.stringify(MY_DATA))
}

export {getTripData, saveTripData}