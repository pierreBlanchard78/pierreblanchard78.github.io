const table = document.createElement('table')
const spanEat = document.createElement('span')
const array = []
const moveInterval = 100

let it = 1125
let eat = 0
let snake = [it]
let prey = Math.floor(Math.random() * 2500)

cellsCreate()
function cellsCreate() {
    table.style.margin = '0 auto'
    table.style.marginTop = '50px'
    table.style.border = '1px solid black'
    document.body.append(table)
    spanEat.style.position = 'absolute'
    spanEat.style.margin = '10px'
    spanEat.style.fontSize = '1.5em'
    spanEat.textContent = eat
    table.append(spanEat)
    for(tri=0;tri<50;tri++) {
        const tr = document.createElement('tr')
        table.append(tr)
        for(tdi=0;tdi<50;tdi++) {
            let cellId = 0
            let td = document.createElement('td')
            td.style.height = '10px'
            td.style.width = '10px'
            cellId = cellId + 1
            td.id = cellId
            array.push(td)
            tr.append(td)
        }
    }
    array[it].style.backgroundColor = 'black'
    array[prey].style.backgroundColor = 'red'
}
// LEFT RESTRICTION
let iteLeft = 0
let arrayNoMoreLeft = []
noMoreLeft()
function noMoreLeft() {
    arrayNoMoreLeft.push(iteLeft)
    iteLeft = iteLeft + 50
    if(iteLeft >= 2500){
        return
    }
    noMoreLeft()
}
// RIGHT RESTRICTION
let iteRight = -1
let arrayNoMoreRight = []
noMoreRight()
function noMoreRight() {
    iteRight = iteRight + 50
    arrayNoMoreRight.push(iteRight)
    if(iteRight >= 2499) {
        return
    }
    noMoreRight()
}

let intervalLeft = ''
let intervalUp = ''
let intervalRight = ''
let intervalDown = ''

let leftIsActive = false
let upIsActive = false
let rightIsActive = false
let downIsActive = false

document.addEventListener('keydown', keyDown)
function keyDown(e) {
    const choiceKey = e.key
// IF PRESS LEFT...
    if (choiceKey === 'ArrowLeft'|| choiceKey === 'q') {
        leftIsActive = true
        if(leftIsActive && !rightIsActive) {
            intervalReset()
            intervalLeft = setInterval(left, moveInterval)
            upIsActive = false
            rightIsActive = false
            downIsActive = false
        }
        function left() {
            it = it - 1
            for(eLeft of arrayNoMoreLeft) {
                if(it === eLeft-1) {
                    it = it + 1
                    array[it].style.backgroundColor = 'black'
                    clearInterval(intervalLeft)
                    lose()
                }
            }
            exitCases()
            eatPrey()
        }
    }
// IF PRESS UP...
    if (choiceKey === 'ArrowUp'|| choiceKey === 'z') {
        upIsActive = true
        if(upIsActive && !downIsActive) {
            intervalReset()
            intervalUp = setInterval(up, moveInterval)
            leftIsActive = false
            rightIsActive = false
            downIsActive = false
        }
        function up() {
            it = it - 50
            if(it < 0){
                it = it + 50
                array[it].style.backgroundColor = 'black'
                clearInterval(intervalUp)
                lose()
            }
            exitCases()
            eatPrey()
        }
    }
// IF PRESS RIGHT...
    if (choiceKey === 'ArrowRight'|| choiceKey === 'd') {
        rightIsActive = true
        if(rightIsActive && !leftIsActive) {
            intervalReset()
            intervalRight = setInterval(right, moveInterval)
            leftIsActive = false
            upIsActive = false
            downIsActive = false
        }
        function right() {
            it = it + 1
            for(eRight of arrayNoMoreRight) {
                if(it === eRight+1) {
                    it = it - 1
                    array[it].style.backgroundColor = 'black'
                    clearInterval(intervalRight)
                    lose()
                }
            }
            exitCases()
            eatPrey()
        }
    }
// IF PRESS DOWN...
    if (choiceKey === 'ArrowDown'|| choiceKey === 's') {
        downIsActive = true
        if(downIsActive &&! upIsActive) {
            intervalReset()
            intervalDown = setInterval(down, moveInterval)
            leftIsActive = false
            upIsActive = false
            rightIsActive = false
        }
        function down() {
            it = it + 50
            if(it > 2499) {
                it = it - 50
                array[it].style.backgroundColor = 'black'
                clearInterval(intervalDown)
                lose()
            }
            exitCases()
            eatPrey()
        }
    }
// EXCEPT BOX PLAY FOR REFRESH
    function exitCases() {
        array.map((cases) => cases.style.backgroundColor = 'white')
        // array.filter((notit) => notit != it && notit != prey && notit != snake)
        array[prey].style.backgroundColor = 'red'
        array[it].style.backgroundColor = 'black'
        // array[snake].style.backgroundColor = 'black'
        // for(elem of snake){
        //     console.log(elem)
        //     array[elem].style.backgroundColor = 'black'
        // }
    }
// HIT FUNCTION 
    function eatPrey() {
        if(array[prey] === array[it]) {
            eat++
            spanEat.textContent = eat
            prey = Math.floor(Math.random() * 2500)
            array[prey].style.backgroundColor = 'red'
        }
    }
}
// LOSE
    function lose() {
        intervalReset()
        document.removeEventListener('keydown', keyDown)
        table.style.border = '1px solid red'
        const end = document.createElement('p')
        end.append('Fin de partie')
        spanEat.prepend(end)
    }
// DELETE ACTIVE INTERVAL FOR CHANGE DIRECTION
function intervalReset() {
    clearInterval(intervalLeft)
    clearInterval(intervalUp)
    clearInterval(intervalRight)
    clearInterval(intervalDown)
}




















