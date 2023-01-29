const moveBox = document.querySelector('.moveBox')
const displayMovex = document.getElementById('displayMovex')
const displayMovey = document.getElementById('displayMovey')
const buttonIntervalDirection = document.querySelector('.buttonIntervalDirection')
const buttonIntervalIncrement = document.querySelector('.buttonIntervalIncrement')
// AXE VAR
let movex = Math.floor(Math.random())
let movey = Math.floor(Math.random())
// DISPLAY MOVE
displayMovex.textContent = movex
displayMovey.textContent = movey
// INTERVALS
let intervalChoiceDirection = 1000
let choiceMoveInterval = 1000
let settimeoutIntervalMove = 1000 
let intervalIncrement = 100
// MOVE DIRECTION VAR
let directionInterval = ''
// MOVE DIRECTION 
function moveDirection(direction) {
    let directionInterval = setInterval(() => {
        if(direction==='fmt') {// BOTTOM
            moveBox.style.top = movey++ + 'px'
            displayMove()
            limits('moveTop')
        }
        if(direction==='fmtl') {// BOTTOM LEFT
            moveBox.style.top = movey++ + 'px'
            moveBox.style.left = movex++ + 'px'
            displayMove()
            limits('moveTopLeft')
        }
        if(direction==='fml') {// LEFT
            moveBox.style.left = movex++ + 'px'
            displayMove()
            limits('moveLeft')
        }
        if(direction==='fmbl') {// TOP LEFT
            moveBox.style.top = movey-- + 'px'
            moveBox.style.left = movex++ + 'px'
            displayMove()
            limits('moveBottomLeft')
        }
        if(direction==='fmb') {// TOP
            moveBox.style.left = movex++ + 'px'
            displayMove()
            limits('moveBottom')
        }
        if(direction==='fmbr') {// TOP RIGHT
            moveBox.style.top = movey-- + 'px'
            moveBox.style.left = movex-- + 'px'
            displayMove()
            limits('moveBottomRight')
        }
        if(direction==='fmr') {// RIGHT
            moveBox.style.left = movex-- + 'px'
            displayMove()
            limits('moveRight')
        }
        if(direction==='fmtr') {// RIGHT BOTTOM
            moveBox.style.top = movey++ + 'px'
            moveBox.style.left = movex-- + 'px'
            displayMove()
            limits('moveTopRight')
        }
        function displayMove() {
            displayMovex.textContent = movex
            displayMovey.textContent = movey
        }
    }, intervalIncrement);
    setTimeout(() => {clearInterval(directionInterval)},settimeoutIntervalMove)
}

let intervalFonct = setInterval(choiceDirection, choiceMoveInterval)//INTERVAL FUNCTIONS MOVE (temps entre deux choix de direction)
function choiceDirection(){
    let arrayFunctionMove = ['fmt','fmtl','fml','fmbl','fmb','fmbr','fmr','fmtr']
    let randomFunctionMove = arrayFunctionMove[[Math.floor(Math.random()* 8)]]
    moveDirection(randomFunctionMove)
}

function stopAll() {
    clearInterval(directionInterval)
    clearInterval(intervalFonct)
}

function limits(direct) {
    if(movey < -100 || movey > 100 || movex < -100 || movex > 100){
        moveBox.style.backgroundColor = 'red'
    }else{moveBox.style.backgroundColor = 'blue'
    }




    if(movey <= -250) {
        moveBox.style.backgroundColor = 'grey'
        if(direct === 'moveTopLeft'||direct === 'moveTop'||direct === 'moveTopRight'){
            // console.log('lol')
            stopAll()
            moveBox.style.top = '-250px'
            intervalFonct = setInterval(choiceDirection, intervalChoiceDirection)
        }
    }

    if(movey >= 250) {
        if(direct === 'moveBottomLeft'||direct === 'moveBottom'||direct === 'moveBottomRight'){
            // console.log('lol')
            stopAll()
            moveBox.style.bottom = '250px'
            intervalFonct = setInterval(choiceDirection, intervalChoiceDirection)
        }
    }

    if(movex <= -250) {
        if(direct === 'moveBottomLeft'||direct === 'moveLeft'||direct === 'moveTopLeft'){
            // console.log('lol')
            stopAll()
            moveBox.style.left = '250px'
            intervalFonct = setInterval(choiceDirection, intervalChoiceDirection)
        }
    }
    if(movex >= 250) {
        if(direct === 'moveBottomLeft'||direct === 'moveLeft'||direct === 'moveTopLeft'){
            // console.log('lol')
            stopAll()
            moveBox.style.left = '-250px'
            intervalFonct = setInterval(choiceDirection, intervalChoiceDirection)
        }
    }

    // if(movey <= -250 || movey >= 250 || movex <= -250 || movex >= 250){
    //     moveBox.style.backgroundColor = 'grey'
    //     if(direct === 'moveTopLeft'||direct === 'moveTop'||direct === 'moveTopRight'){
    //         // console.log('lol')
    //         stopAll()
    //         moveBox.style.top = '250px'
    //         intervalFonct = setInterval(choiceDirection, intervalChoiceDirection)
    //     }
    //     if(direct === 'moveTopRight'||direct === 'moveRight'||direct === 'moveBottomRight'){
    //         // console.log('lol')
    //         stopAll()
    //         moveBox.style.right = '250px'
    //         intervalFonct = setInterval(choiceDirection, intervalChoiceDirection)
    //     }
    //     if(direct === 'moveBottomLeft'||direct === 'moveBottom'||direct === 'moveBottomRight'){
    //         // console.log('lol')
    //         stopAll()
    //         moveBox.style.bottom = '-250px'
    //         intervalFonct = setInterval(choiceDirection, intervalChoiceDirection)
    //     }
    //     if(direct === 'moveBottomLeft'||direct === 'moveLeft'||direct === 'moveTopLeft'){
    //         // console.log('lol')
    //         stopAll()
    //         moveBox.style.left = '-250px'
    //         intervalFonct = setInterval(choiceDirection, intervalChoiceDirection)
    //     }
    // }
}

// BUTTONS
buttonIntervalDirection.textContent = intervalChoiceDirection + 'ms Interval direction'
buttonIntervalIncrement.textContent = intervalIncrement + 'ms Interval increment'

buttonIntervalDirection.addEventListener('click', () => {
    if(intervalChoiceDirection === 0){
        intervalChoiceDirection = 100
        buttonIntervalDirection.textContent = intervalChoiceDirection + 'ms Interval direction'
        return
    }
    if(intervalChoiceDirection === 100){
        intervalChoiceDirection = 500
        buttonIntervalDirection.textContent = intervalChoiceDirection + 'ms Interval direction'
        return
    }
    if(intervalChoiceDirection === 500){
        intervalChoiceDirection = 1000
        buttonIntervalDirection.textContent = intervalChoiceDirection + 'ms Interval direction'
        return
    }
    if(intervalChoiceDirection === 1000){
        intervalChoiceDirection = 0
        buttonIntervalDirection.textContent = intervalChoiceDirection + 'ms Interval direction'
        return
    }
})
buttonIntervalIncrement.addEventListener('click', () => {
    if(intervalIncrement === 0){
        intervalIncrement = 100
        buttonIntervalIncrement.textContent = intervalIncrement + 'ms Interval increment'
        return
    }
    if(intervalIncrement === 100){
        intervalIncrement = 500
        buttonIntervalIncrement.textContent = intervalIncrement + 'ms Interval increment'
        return
    }
    if(intervalIncrement === 500){
        intervalIncrement = 1000
        buttonIntervalIncrement.textContent = intervalIncrement + 'ms Interval increment'
        return
    }
    if(intervalIncrement === 1000){
        intervalIncrement = 0
        buttonIntervalIncrement.textContent = intervalIncrement + 'ms Interval increment'
        return
    }
})

