const updateDOM = (input, id) => {
    const divEl = document.getElementById(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const myArrObjs = [
    {
        name: 'moises',
        hairColor: 'red',
    },
    {
        name: 'joe',
        hairColor: 'black',
    },
    {
        name: 'jane',
        hairColor: 'brown',
    }

]

myArrObjs.forEach(obj => {
    const str = `${obj.name} has ${obj.hairColor} hair color`
    updateDOM(str, 'output')
})

