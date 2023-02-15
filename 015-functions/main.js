//FUNctions are fun!

// function doMath (a, b) {
//     let result = a * b
//     return result
//     // console.log(`This is the result ${a / b}`)
//     // console.log(`This is the result ${a * b}`)
//     // console.log(`This is the result ${a + b}`)
//     // console.log(`This is the result ${a - b}`)
// }


// let returnValue = doMath (10, 4)
// console.log(`this result was returned from the fucntion ${returnValue}`)

function  doMath (a, b, c, d) {
    let result = a + b + c + d
    console.log(`this is the result ${a + b + c / d}`)
    console.log(`this is the result ${a + b / c + d}`)
    console.log(`this is the result ${a > b}`)
    console.log(`this is the result ${a < b }`)
    // console.log(`this is the result ${c = b}`)
    // console.log(`this is the result ${b = a}`)
    console.log(`this is the result ${b / a + d / c }`)
    console.log(`this is the result ${(a * b) - (c * d)}`)
}

doMath(2, 4, 4, 2)