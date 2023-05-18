import { saveTripData } from "./storage.js"
import { calculateAvg } from "./handleinput.js"

const FORM = document.getElementById('form-input')
const TBL_OUTPUT = document.getElementById('table-out')

function renderTableHeadings() {
    const tbl = document.createElement('table')
    const headings = ['Miles Driven:', 'Gallons Used:', 'Price Paid:', 'Trip MPG', 'Trip Cost', 'Edit/Delete']
    const tr = document.createElement('tr')
    headings.forEach(function(heading){
        let th = document.createElement('th')
        th.textContent = heading
        tr.appendChild(th)    
    })
    tbl.appendChild(tr)
    return tbl
}    

function renderEditDelBtn (MY_DATA, index) {
    const td = document.createElement('td')
    const editBtn = document.createElement('button')
    editBtn.textContent = 'edit'
    const delBtn = document.createElement('button')
    delBtn.textContent = 'delete'
    editBtn.addEventListener('click', function(e){
        FORM[0].value = MY_DATA[index].miles 
        FORM[1].value = MY_DATA[index].gallons 
        FORM[2].value = MY_DATA[index].price  
        MY_DATA.splice(index, 1)
        const disable_edit = document.querySelectorAll('.tbl-btn')
        disable_edit.forEach(function(btn){
            btn.setAttribute('disabled', true)
        })
    })
    delBtn.addEventListener('click', function(e){
        MY_DATA.splice(index, 1)
        saveTripData(MY_DATA)
        renderTable(MY_DATA)
    })

    editBtn.classList.add('tbl-btn')
    delBtn.classList.add('tbl-btn')

    td.appendChild(editBtn)
    td.appendChild(delBtn)
    return td
}

function renderTable(MY_DATA) {
    TBL_OUTPUT.innerHTML = ''
    if(MY_DATA.length !== 0) {
        const tbl = renderTableHeadings()
        TBL_OUTPUT.appendChild(tbl)
        MY_DATA.forEach(function (obj, index) {
            const tr = document.createElement('tr')
            for (const key in obj) {
                let td = document.createElement('td')
                td.textContent = obj[key]
                tr.appendChild(td)
            }
            const btnTD = renderEditDelBtn(MY_DATA, index)
            tr.appendChild(btnTD)
            tbl.appendChild(tr)
        }) 
    }
    calculateAvg(MY_DATA)
}

export { renderTable }