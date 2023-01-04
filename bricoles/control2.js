const tableControl = document.createElement('table')
const arrayControl = []
let itControl = 1125

tableCreate()
function tableCreate(){
    tableControl.style.margin = '0 auto'
    tableControl.style.marginTop = '50px'
    tableControl.style.border = '1px solid black'
    document.body.append(tableControl)
    for(tri=0;tri<50;tri++){
        let tr = document.createElement('tr')
        tableControl.append(tr)
        for(tdi=0;tdi<50;tdi++){
            let td = document.createElement('td')
            td.style.height = '10px'
            td.style.width = '10px'
            let cellId = 0
            cellId = cellId + 1
            td.id = cellId
            arrayControl.push(td)
            tr.append(td)
        }
    }
    arrayControl[itControl].style.backgroundColor = 'red'
}

document.addEventListener('keydown', keyDown)

// LEFT RESTRICTION
let iteControlLeft = 0
let arrayControlNoMoreLeft = []
noMoreLeft()
function noMoreLeft(){
    arrayControlNoMoreLeft.push(iteControlLeft)
    iteControlLeft = iteControlLeft + 50
    if(iteControlLeft>=2500){
        return
    }
    noMoreLeft()
}
// RIGHT RESTRICTION
let iteControlRight = -1
let arrayControlNoMoreRight = []
noMoreRight()
function noMoreRight(){
    iteControlRight = iteControlRight + 50
    arrayControlNoMoreRight.push(iteControlRight)
    if(iteControlRight>=2499){
        return
    }
    noMoreRight()
}

function keyDown(e){
    const choiceKey = e.key
    if (choiceKey === 'ArrowLeft'|| choiceKey === 'q') {
        itControl = itControl-1
        for(eLeft of arrayControlNoMoreLeft){
            if(itControl===eLeft-1){
                itControl = itControl + 1
                arrayControl[itControl].style.backgroundColor = 'red'
            }
        }
        arrayControl[itControl].style.backgroundColor = 'red'
        arrayControl[itControl+1].style.backgroundColor = 'white'
    }
    if (choiceKey === 'ArrowUp'|| choiceKey === 'z') {
        itControl = itControl-50
        if(itControl<0){
            itControl = itControl + 50
            arrayControl[itControl].style.backgroundColor = 'red'
        }
        arrayControl[itControl].style.backgroundColor = 'red'
        arrayControl[itControl+50].style.backgroundColor = 'white'
    }
    if (choiceKey === 'ArrowRight'|| choiceKey === 'd') {
        itControl = itControl+1
        for(eRight of arrayControlNoMoreRight){
            if(itControl===eRight+1){
                itControl = itControl - 1
                arrayControl[itControl].style.backgroundColor = 'red'
            }
        }
        arrayControl[itControl].style.backgroundColor = 'red'
        arrayControl[itControl-1].style.backgroundColor = 'white'
    }
    if (choiceKey === 'ArrowDown'|| choiceKey === 's') {
        itControl = itControl+50
        if(itControl>2499){
            itControl = itControl - 50
            arrayControl[itControl].style.backgroundColor = 'red'
        }
        arrayControl[itControl].style.backgroundColor = 'red'
        arrayControl[itControl-50].style.backgroundColor = 'white'
    }
}





