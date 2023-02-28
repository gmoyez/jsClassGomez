//Update the DOM

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}

updateDOM('Moises') 