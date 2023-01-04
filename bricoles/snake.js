const table = document.createElement('table')
const array = []
const moveInterval = 100
let it = 1125
let prey = Math.floor(Math.random() * 2500)

cellsCreate()
function cellsCreate(){
    for(tri=0;tri<50;tri++){
        table.style.margin = '0 auto'
        table.style.marginTop = '50px'
        table.style.border = '1px solid black'
        document.body.append(table)
        const tr = document.createElement('tr')
        table.append(tr)
        for(tdi=0;tdi<50;tdi++){
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
function noMoreLeft(){
    arrayNoMoreLeft.push(iteLeft)
    iteLeft = iteLeft + 50
    if(iteLeft>=2500){
        return
    }
    noMoreLeft()
}
// RIGHT RESTRICTION
let iteRight = -1
let arrayNoMoreRight = []
noMoreRight()
function noMoreRight(){
    iteRight = iteRight + 50
    arrayNoMoreRight.push(iteRight)
    if(iteRight>=2499){
        return
    }
    noMoreRight()
}

let intervalLeft = ''
let intervalUp = ''
let intervalRight = ''
let intervalDown = ''

document.addEventListener('keydown', keyDown)
function keyDown(e){
    const choiceKey = e.key

    if (choiceKey === 'ArrowLeft'|| choiceKey === 'q') {
        intervalReset()
        intervalLeft = setInterval(left, moveInterval)
        function left(){
            it = it-1
            for(eLeft of arrayNoMoreLeft){
                if(it===eLeft-1){
                    it = it + 1
                    array[it].style.backgroundColor = 'black'
                    clearInterval(intervalLeft)
                    table.style.border = '1px solid red'
                }
            }
            array[it].style.backgroundColor = 'black'

            // array[it-2].style.backgroundColor = 'white'
            array[it+2].style.backgroundColor = 'white'

            array[it+100].style.backgroundColor = 'white'
            array[it-100].style.backgroundColor = 'white'

            array[it+50-1].style.backgroundColor = 'white'
            array[it+50+1].style.backgroundColor = 'white'
            array[it-50-1].style.backgroundColor = 'white'
            array[it-50+1].style.backgroundColor = 'white'

            if(array[prey]===array[it]){
                prey = Math.floor(Math.random() * 2500)
                array[prey].style.backgroundColor = 'red'
            }
        }
    }
    if (choiceKey === 'ArrowUp'|| choiceKey === 'z') {
        intervalReset()
        intervalUp = setInterval(up, moveInterval)
        function up(){
            it = it-50
            if(it<0){
                it = it + 50
                array[it].style.backgroundColor = 'black'
                clearInterval(intervalUp)
                table.style.border = '1px solid red'
            }
            array[it].style.backgroundColor = 'black'

            array[it-2].style.backgroundColor = 'white'
            array[it+2].style.backgroundColor = 'white'

            array[it+100].style.backgroundColor = 'white'
            // array[it-100].style.backgroundColor = 'white'

            array[it+49].style.backgroundColor = 'white'
            array[it+51].style.backgroundColor = 'white'
            array[it-49].style.backgroundColor = 'white'
            array[it-51].style.backgroundColor = 'white'

            if(array[prey]===array[it]){
                prey = Math.floor(Math.random() * 2500)
                array[prey].style.backgroundColor = 'red'
            }
        }
    }
    if (choiceKey === 'ArrowRight'|| choiceKey === 'd') {
        intervalReset()
        intervalRight = setInterval(right, moveInterval)
        function right(){
            it = it+1
            for(eRight of arrayNoMoreRight){
                if(it===eRight+1){
                    it = it - 1
                    array[it].style.backgroundColor = 'black'
                    clearInterval(intervalRight)
                    table.style.border = '1px solid red'
                }
            }
            array[it].style.backgroundColor = 'black'

            array[it-2].style.backgroundColor = 'white'
            // array[it+2].style.backgroundColor = 'white'

            array[it+100].style.backgroundColor = 'white'
            array[it-100].style.backgroundColor = 'white'

            array[it+50-1].style.backgroundColor = 'white'
            array[it+50+1].style.backgroundColor = 'white'
            array[it-50-1].style.backgroundColor = 'white'
            array[it-50+1].style.backgroundColor = 'white'

            if(array[prey]===array[it]){
                prey = Math.floor(Math.random() * 2500)
                array[prey].style.backgroundColor = 'red'
            }
        }
    }
    if (choiceKey === 'ArrowDown'|| choiceKey === 's') {
        intervalReset()
        intervalDown = setInterval(down, moveInterval)
        function down(){
            it = it+50
            if(it>2499){
                it = it - 50
                array[it].style.backgroundColor = 'black'
                clearInterval(intervalDown)
                table.style.border = '1px solid red'
            }
            array[it].style.backgroundColor = 'black'

            array[it-2].style.backgroundColor = 'white'
            array[it+2].style.backgroundColor = 'white'

            // array[it+100].style.backgroundColor = 'white'
            array[it-100].style.backgroundColor = 'white'

            array[it+50-1].style.backgroundColor = 'white'
            array[it+50+1].style.backgroundColor = 'white'
            array[it-50-1].style.backgroundColor = 'white'
            array[it-50+1].style.backgroundColor = 'white'

            if(array[prey]===array[it]){
                prey = Math.floor(Math.random() * 2500)
                array[prey].style.backgroundColor = 'red'
            }
        }
    }
    function intervalReset(){
        clearInterval(intervalLeft)
        clearInterval(intervalUp)
        clearInterval(intervalRight)
        clearInterval(intervalDown)
    }
}



