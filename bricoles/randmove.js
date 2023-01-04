const moveEvent = document.querySelector('.moveEvent')
const displayMovex = document.getElementById('displayMovex')
const displayMovey = document.getElementById('displayMovey')
// AXE VAR
let movex = Math.floor(Math.random())
let movey = Math.floor(Math.random())
// DISPLAY MOVE
displayMovex.textContent = movex
displayMovey.textContent = movey
// INTERVALS
let intervalDirection = 1000
let intervalIncrement = 100
// MOVE DIRECTION
// BOTTOM
let fmt = function mouvt(){
    let mouvt = setInterval(() => {
        moveEvent.style.top = movey++ + 'px'
        displayMovex.textContent = movex
        displayMovey.textContent = movey
        if(movey < -100 || movey > 100 || movex < -100 || movex > 100){moveEvent.style.backgroundColor = 'red'}else{moveEvent.style.backgroundColor = 'blue'}
    }, intervalIncrement)
    setTimeout(() => {clearInterval(mouvt)},intervalDirection)
}                      
// BOTTOM LEFT
let fmtl = function mouvtl(){
    let mouvtl = setInterval(() => {
        moveEvent.style.top = movey++ + 'px'
        moveEvent.style.left = movex++ + 'px'
        displayMovex.textContent = movex
        displayMovey.textContent = movey
        if(movey < -100 || movey > 100 || movex < -100 || movex > 100){moveEvent.style.backgroundColor = 'red'}else{moveEvent.style.backgroundColor = 'blue'}
    }, intervalIncrement)
    setTimeout(() => {clearInterval(mouvtl)},intervalDirection)
}                      
// LEFT
let fml = function mouvl(){
    let mouvl = setInterval(() => {
        moveEvent.style.left = movex++ + 'px'
        displayMovex.textContent = movex
        displayMovey.textContent = movey
        if(movey < -100 || movey > 100 || movex < -100 || movex > 100){moveEvent.style.backgroundColor = 'red'}else{moveEvent.style.backgroundColor = 'blue'}
    }, intervalIncrement)
    setTimeout(() => {clearInterval(mouvl)},intervalDirection)
}                      
// LEFT TOP
let fmlb = function mouvlb(){
    let mouvlb = setInterval(() => {
        moveEvent.style.top = movey-- + 'px'
        moveEvent.style.left = movex++ + 'px'
        displayMovex.textContent = movex
        displayMovey.textContent = movey
        if(movey < -100 || movey > 100 || movex < -100 || movex > 100){moveEvent.style.backgroundColor = 'red'}else{moveEvent.style.backgroundColor = 'blue'}
    }, intervalIncrement)
    setTimeout(() => {clearInterval(mouvlb)},intervalDirection)
}                      
// TOP
let fmb = function mouvb(){
    let mouvb = setInterval(() => { 
        moveEvent.style.top = movey-- + 'px'
        displayMovex.textContent = movex
        displayMovey.textContent = movey
        if(movey < -100 || movey > 100 || movex < -100 || movex > 100){moveEvent.style.backgroundColor = 'red'}else{moveEvent.style.backgroundColor = 'blue'}
    }, intervalIncrement)
    setTimeout(() => {clearInterval(mouvb)},intervalDirection)
}                      
// TOP RIGHT
let fmbr = function mouvbr(){
    let mouvbr = setInterval(() => {
        moveEvent.style.top = movey-- + 'px'
        moveEvent.style.left = movex-- + 'px'
        displayMovex.textContent = movex
        displayMovey.textContent = movey

        if(movey < -100 || movey > 100 || movex < -100 || movex > 100){moveEvent.style.backgroundColor = 'red'}else{moveEvent.style.backgroundColor = 'blue'}
    }, intervalIncrement)
    setTimeout(() => {clearInterval(mouvbr)},intervalDirection)
}                      
// RIGHT
let fmr = function mouvr(){
    let mouvr = setInterval(() => {
        moveEvent.style.left = movex-- + 'px'
        displayMovex.textContent = movex
        displayMovey.textContent = movey

        if(movey < -100 || movey > 100 || movex < -100 || movex > 100){moveEvent.style.backgroundColor = 'red'}else{moveEvent.style.backgroundColor = 'blue'}
    }, intervalIncrement)
    setTimeout(() => {clearInterval(mouvr)},intervalDirection)
}                      
// RIGHT BOTTOM
let fmrt = function mouvrt(){
    let mouvrt = setInterval(() => {
        moveEvent.style.top = movey++ + 'px'
        moveEvent.style.left = movex-- + 'px'
        displayMovex.textContent = movex
        displayMovey.textContent = movey

        if(movey < -100 || movey > 100 || movex < -100 || movex > 100){moveEvent.style.backgroundColor = 'red'}else{moveEvent.style.backgroundColor = 'blue'}
    }, intervalIncrement)
    setTimeout(() => {clearInterval(mouvrt)},intervalDirection)
}                      

let intervalFonct = setInterval(funct, intervalDirection)

function funct () {
    let array = [fmt,fmtl,fml,fmlb,fmb,fmbr,fmr,fmrt]
    let randfunct = array[Math.floor(Math.random()* 8)]
    randfunct()
}



