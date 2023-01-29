// VARIABLES
let HealthPointPlayer1 = 100
let HealthPointPlayer2 = 100
let round = 0
let healthBarPlayer1 = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`
let healthBarPlayer2 = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`
let timePlay = 1000
// CHOICE BET
let betPlayer1 = false
let betPlayer2 = false

// CREATE AND INSERT HTML
// VS DIV
const vsDiv = document.createElement('div')
vsDiv.style.height = '600px'
vsDiv.style.width = '600px'
vsDiv.style.display = 'flex'
vsDiv.style.flexDirection = 'column'
vsDiv.style.textAlign = 'center'
vsDiv.style.margin = '100px auto'
vsDiv.style.padding = '10px'
vsDiv.style.backgroundColor = 'lightgrey'
document.body.append(vsDiv)

// QUESTBET
const questBet = document.createElement('p')
// let answerInput1 = ''
// let answerInput2 = ''
// let answerInputPara1 = ''
// let answerInputPara2 = ''
const resultBet = document.createElement('p')
loadQuestBet()
function loadQuestBet() {
    console.log('lol')
    const questBetString = 'Sur quel joueur pariez vous ?'
    answerInput1 = document.createElement('input')
    answerInput2 = document.createElement('input')
    answerInput1.type = 'radio'
    answerInput2.type = 'radio'
    answerInput1.name = 'checkbox'
    answerInput2.name = 'checkbox'
    const answerInputString1 = 'Joueur 1'
    const answerInputString2 = 'Joueur 2'
    answerInputPara1 = document.createElement('p')
    answerInputPara2 = document.createElement('p')
    answerInputPara1.append(answerInput1)
    answerInputPara2.append(answerInput2)
    answerInputPara1.append(answerInputString1)
    answerInputPara2.append(answerInputString2)
    questBet.append(questBetString)
}
// TITLE
const title = document.createElement('h1')
const vs = '----------//VS\\\\----------'
title.append(vs)
// INFOS PLAYERS
const roundNumber = document.createElement('h1')
const attack = document.createElement('h3')
const line = document.createElement('h4')
const pv1 = document.createElement('span')
pv1.style.textAlign = 'start'
const pv2 = document.createElement('span')
pv2.style.textAlign = 'start'
const endOfGame = document.createElement('h2')
// BUTTON SPEED CREATE
const buttonSpeed = document.createElement('button')
buttonSpeed.style.height = '20px'
buttonSpeed.style.width = '120px'
buttonSpeed.style.margin = '10px auto'
buttonSpeed.style.border = '2px solid black'
buttonSpeed.style.fontWeight = 'bold'
buttonSpeed.style.cursor = 'pointer'
buttonSpeed.textContent = `Speed : ${timePlay}ms`
buttonSpeed.addEventListener('click', () => {
    
    if(timePlay===1000) {
        timePlay = 500
        buttonSpeed.textContent = `Speed : ${timePlay}ms`
        return
    }
    if(timePlay===500) {
        timePlay = 100
        buttonSpeed.textContent = `Speed : ${timePlay}ms`
        return
    }
    if(timePlay===100) {
        timePlay = 10
        buttonSpeed.textContent = `Speed : ${timePlay}ms`
        return
    } 
    if(timePlay===10) {
        timePlay = 1000
        buttonSpeed.textContent = `Speed : ${timePlay}ms`
        return
    } 
})
// BUTTON START
let buttonStart = ''
buttonStartCreate()
function buttonStartCreate() {
    buttonStart = document.createElement('button')
    buttonStart.style.height = '20px'
    buttonStart.style.width = '120px'
    buttonStart.style.margin = '10px auto'
    buttonStart.style.border = '2px solid black'
    buttonStart.style.fontWeight = 'bold'
    buttonStart.style.cursor = 'pointer'
    buttonStart.textContent = `Start`
    buttonStart.addEventListener('click', () => {
        buttonStart.remove()

        // questBet.textContent = ''
        // answerInputPara1.style.display = 'none'
        // answerInputPara2.style.display = 'none'

        questBet.remove()
        answerInputPara1.remove()
        answerInputPara2.remove()
        startGame()
        
    })
}
// INSERT HTML 
insertHtml()
function insertHtml() {
    vsDiv.append(
        title, 
        questBet, 
        answerInputPara1,
        answerInputPara2, 
        roundNumber, attack, line, pv1, pv2, endOfGame, resultBet, buttonSpeed)
}


answerInput1.onclick = choiceBet
answerInput2.onclick = choiceBet
function choiceBet() {
    if(answerInput1.checked===true){
        betPlayer1 = true
        betPlayer2 = false
        console.log('betPlayer1 : ' + betPlayer1)
    }
    if(answerInput2.checked===true){
        betPlayer2 = true
        betPlayer1 = false
        console.log('betPlayer2 : ' + betPlayer2)
    }
    vsDiv.append(buttonStart)
}

let randPlayer1 = ''
let randPlayer2 = ''
let playerAttack = 1
let playerHit = 2

function startGame() {
    player()
    function player() {
        setTimeout(() => {
            // console.clear()
            round += 1

            function rand(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            if(playerAttack===1) {
                randPlayer1 = rand(1,5)
                HealthPointPlayer2 -= randPlayer1
                healthBarPlayer2 = healthBarPlayer2.substring(0, healthBarPlayer2.length - randPlayer1)
            }
            if(playerAttack===2) {
                randPlayer2 = rand(1,5)
                HealthPointPlayer1 -= randPlayer2
                healthBarPlayer1 = healthBarPlayer1.substring(0, healthBarPlayer1.length - randPlayer2)
            }

            let temp = ''
            temp = playerAttack
            playerAttack = playerHit
            playerHit = temp

            const roundNumberString1 = `Tour ${round}`
            const attackString1 = `le joueur ${playerAttack} attaque. Le joueur ${playerHit} perd : ${randPlayer1} PV`
            const lineString1 = `---------------------------------------------------------------------------------------------------------`
            const pv1String1 = `PV joueur 1 : ${HealthPointPlayer1}PV ${healthBarPlayer1}`
            const pv2String1 = `PV joueur 2 : ${HealthPointPlayer2}PV ${healthBarPlayer2}`

            // console.log(roundNumberString1)
            // console.log(attackString1)
            // console.log(lineString1)
            // console.log(pv1String1)
            // console.log(pv2String1)

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
                return
            }else {player()}
        },timePlay);
    }

    function endGame() {
        console.log('Fin de partie')
        const winBetPlayer = "Bravo ! Vous avez gagné !";
        const loseBetPlayer = "Vous, par contre, vous avez perdu...";

        if(HealthPointPlayer2<=0){
            const winPlayer1String = `La partie est terminée. Le joueur 1 a gagné`;
            endOfGame.append(winPlayer1String)
            console.log('IA 1 Gagne')
            if(betPlayer1===true){
                resultBet.append(winBetPlayer)
                console.log('Joueur gagne')
            }
            if(betPlayer1===false) {
                resultBet.append(loseBetPlayer)
                console.log('Joueur perd')           
            }  
        }
        if(HealthPointPlayer1<=0){
            const winPlayer2String = `La partie est terminée. Le joueur 2 a gagné`;
            endOfGame.append(winPlayer2String)
            console.log('IA 2 Gagne')
            if(betPlayer2===true){
                resultBet.append(winBetPlayer)
                console.log('Joueur gagne')
            }
            if(betPlayer2===false) {
                resultBet.append(loseBetPlayer)
                console.log('Joueur perd')
            } 
        }
        restart()
    }
}

function restart() {

    const buttonRestart = document.createElement('button')
    buttonRestart.style.height = '20px'
    buttonRestart.style.width = '120px'
    buttonRestart.style.margin = '0 auto'
    buttonRestart.style.border = '2px solid black'
    buttonRestart.style.fontWeight = 'bold'
    buttonRestart.textContent = 'Restart'
    vsDiv.append(buttonRestart)

    buttonRestart.addEventListener('click', () => {

        buttonRestart.remove()
        roundNumber.textContent = ''
        attack.textContent = ''
        line.textContent = ''
        pv1.textContent = ''
        pv2.textContent = ''
        endOfGame.textContent = ''
        resultBet.textContent = ''

        betPlayer1 = 'false'
        betPlayer2 = 'false'

        round = 0
        HealthPointPlayer1 = 100
        HealthPointPlayer2 = 100
        healthBarPlayer1 = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`
        healthBarPlayer2 = `||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`

        loadQuestBet()
        // answerInputPara1.style.display = 'block'
        // answerInputPara2.style.display = 'block'
        insertHtml()
        choiceBet()
    })
}