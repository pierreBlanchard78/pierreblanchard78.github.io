// VARIABLES
let HealthPointPlayer1 = 100
let HealthPointPlayer2 = 100
let round = 0
let healthBarPlayer1 = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`
let healthBarPlayer2 = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`
let timePlay = 1000
// CREATE AND INSERT HTML
const vsDiv = document.createElement('div')
vsDiv.style.height = '500px'
vsDiv.style.width = '600px'
vsDiv.style.display = 'flex'
vsDiv.style.flexDirection = 'column'
vsDiv.style.textAlign = 'center'
vsDiv.style.margin = '100px auto'
vsDiv.style.padding = '10px'
vsDiv.style.backgroundColor = 'lightgrey'
const title = document.createElement('h1')
const vs = '----------//VS\\\\----------'
vsDiv.append(title)
title.append(vs)
const roundNumber = document.createElement('h1')
const attack = document.createElement('h3')
const line = document.createElement('h4')
const pv1 = document.createElement('span')
pv1.style.textAlign = 'start'
const pv2 = document.createElement('span')
pv2.style.textAlign = 'start'
const endOfGame = document.createElement('h2')
document.body.append(vsDiv)
vsDiv.append(roundNumber,attack,line,pv1,pv2,endOfGame)
// BUTTON SPEED CREATE
const buttonSpeed = document.createElement('button')
buttonSpeed.style.height = '20px'
buttonSpeed.style.width = '120px'
buttonSpeed.style.margin = '10px auto'
buttonSpeed.style.border = '2px solid black'
buttonSpeed.style.fontWeight = 'bold'
buttonSpeed.style.cursor = 'pointer'
buttonSpeed.textContent = `Speed : ${timePlay}ms`

buttonSpeed.addEventListener('click',()=>{
    
    if(timePlay===1000){
        timePlay = 500
        buttonSpeed.textContent = `Speed : ${timePlay}ms`
        return
    }
    if(timePlay===500){
        timePlay = 100
        buttonSpeed.textContent = `Speed : ${timePlay}ms`
        return
    }
    if(timePlay===100){
        timePlay = 10
        buttonSpeed.textContent = `Speed : ${timePlay}ms`
        return
    } 
    if(timePlay===10){
        timePlay = 1000
        buttonSpeed.textContent = `Speed : ${timePlay}ms`
        return
    } 
})
vsDiv.append(buttonSpeed)

// BUTTON START
const buttonStart = document.createElement('button')
buttonStart.style.height = '20px'
buttonStart.style.width = '120px'
buttonStart.style.margin = '10px auto'
buttonStart.style.border = '2px solid black'
buttonStart.style.fontWeight = 'bold'
buttonStart.style.cursor = 'pointer'
buttonStart.textContent = `Start`
vsDiv.append(buttonStart)
buttonStart.addEventListener('click',()=>{
    buttonStart.remove()
    startGame()
})



function startGame(){
    player1()
    function player1(){
        setTimeout(() => {
            console.clear()
            round += 1
            let randPlayer1 = rand(1,5)
            HealthPointPlayer2 -= randPlayer1
            healthBarPlayer2 = healthBarPlayer2.substring(0, healthBarPlayer2.length - randPlayer1)

            const roundNumberString1 = `Tour ${round}`
            const attackString1 = `le joueur 1 attaque. Le joueur 2 perd : ${randPlayer1} PV`
            const lineString1 = `---------------------------------------------------------------------------------------------------------`
            const pv1String1 = `PV joueur 1 : ${HealthPointPlayer1}PV ${healthBarPlayer1}`
            const pv2String1 = `PV joueur 2 : ${HealthPointPlayer2}PV ${healthBarPlayer2}`

            console.log(roundNumberString1)
            console.log(attackString1)
            console.log(lineString1)
            console.log(pv1String1)
            console.log(pv2String1)

            roundNumber.textContent = ''
            attack.textContent = ''
            line.textContent = ''
            pv1.textContent = ''
            pv2.textContent = ''

            roundNumber.append(roundNumberString1)
            attack.append(attackString1)
            line.append(lineString1)
            pv1.append(pv1String1)
            pv2.append(pv2String1)

            if(HealthPointPlayer1<=0||HealthPointPlayer2<=0){
                endGame()
            }else {player2()}
        },timePlay);
    }

    function player2(){
        setTimeout(() => {
            console.clear()
            let randPlayer2 = rand(1,5)
            HealthPointPlayer1 -= randPlayer2
            healthBarPlayer1 = healthBarPlayer1.substring(0, healthBarPlayer1.length - randPlayer2)

            const roundNumberString2 = `Tour ${round}`
            const attackString2 = `le joueur 2 attaque. Le joueur 1 perd : ${randPlayer2} PV`
            const endRoundString2 = `--------------------------------------------- Fin tour ${round} ---------------------------------------------`
            const pv1String2 = `PV joueur 1 : ${HealthPointPlayer1}PV ${healthBarPlayer1}`
            const pv2String2 = `PV joueur 2 : ${HealthPointPlayer2}PV ${healthBarPlayer2}`

            console.log(roundNumberString2)
            console.log(attackString2)
            console.log(endRoundString2)
            console.log(pv1String2)
            console.log(pv2String2)

            roundNumber.textContent = ''
            attack.textContent = ''
            line.textContent = ''
            pv1.textContent = ''
            pv2.textContent = ''

            roundNumber.append(roundNumberString2)
            attack.append(attackString2)
            line.append(endRoundString2)
            pv1.append(pv1String2)
            pv2.append(pv2String2)

            if(HealthPointPlayer1<=0||HealthPointPlayer2<=0){
                endGame()
            }else {player1()}
        },timePlay)
    }

    function rand(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function endGame(){
        if(HealthPointPlayer1<=0){
            const winPlayer2String = `La partie est terminée. Le joueur 2 a gagné`
            endOfGame.append(winPlayer2String)
        }
        if(HealthPointPlayer2<=0){
            const winPlayer1String = `La partie est terminée. Le joueur 1 a gagné`
            endOfGame.append(winPlayer1String)
        }
        restart()
    }
}

function restart(){

    const buttonRestart = document.createElement('button')
    buttonRestart.style.height = '20px'
    buttonRestart.style.width = '120px'
    buttonRestart.style.margin = '0 auto'
    buttonRestart.style.border = '2px solid black'
    buttonRestart.style.fontWeight = 'bold'
    buttonRestart.textContent = 'Restart'
    vsDiv.append(buttonRestart)

    buttonRestart.addEventListener('click',()=>{

        roundNumber.textContent = ''
        attack.textContent = ''
        line.textContent = ''
        pv1.textContent = ''
        pv2.textContent = ''
        endOfGame.textContent = ''
        buttonRestart.remove()

        round = 0
        HealthPointPlayer1 = 100
        HealthPointPlayer2 = 100
        healthBarPlayer1 = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`
        healthBarPlayer2 = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`

        startGame()
    })
}