//-----MACHINE A SOUS------------------------------------------------------------------------------------------------//

// DISPLAY ROLLS
const rolls1 = document.getElementById('rolls1')
const rolls2 = document.getElementById('rolls2')
const rolls3 = document.getElementById('rolls3')
// ROLLS
const sept = 'url("img/rouleaux/sept.png")'
const bar = 'url("img/rouleaux/bar.png")'
const cloche = 'url("img/rouleaux/cloche.png")'
const cerises = 'url("img/rouleaux/cerises.png")'
const pasteque = 'url("img/rouleaux/pastèque.png")'
const citron = 'url("img/rouleaux/citron.png")'
const array = [
    sept,sept,sept,sept,
    bar,bar,bar,bar,
    // cloche,cloche,cloche,cloche,
    cloche,cloche,cloche,cloche,
    // cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,
    cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,
    // pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,
    pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,
    citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,
    // citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,
]
// BUTTONS
const lauch = document.getElementById('lauch')
const betUp = document.getElementById('betUp')
const betDown = document.getElementById('betDown')
const earningsUp = document.getElementById('earningsUp')
// VALUES TITLE
const betTitle = document.getElementById('betTitle')
const tokensTitle = document.getElementById('tokensTitle')
const earningsTitle = document.getElementById('earningsTitle')
// DISPLAY VALUES
const displayBet = document.getElementById('displayBet')
const displayTokens = document.getElementById('displayTokens')
const displayEarnings = document.getElementById('displayEarnings')
// JACKPOT
const jackpot = document.getElementById('jackpot')
// VAR
let bet = 0
let tokens = 20
let earnings = 0
let arrayLength = array.length
// DISPLAY VAR
displayEarnings.textContent = earnings
displayBet.textContent = bet
displayTokens.textContent = tokens
// LAUCH BUTTONS
lauch.addEventListener('click', () => {
    jackpot.classList.remove('lumjack')
    if(bet >= 1){
        // ROLLS INTERVAL
        let rollingVar = setInterval(rolling, 100)
        function rolling(){
            lauch.style.pointerEvents = 'none'
            rolls1.style.background = array[Math.floor(Math.random()*arrayLength)]
            rolls2.style.background = array[Math.floor(Math.random()*arrayLength)]
            rolls3.style.background = array[Math.floor(Math.random()*arrayLength)]
        }
        // ROLLING DELAY AND RESULT
            // TRIPLE RESULT
        setTimeout(() => {
            clearInterval(rollingVar)
            lauch.style.pointerEvents = 'auto'

            if(rolls1.style.background === sept && rolls2.style.background === sept && rolls3.style.background === sept){
                jackpot.classList.add('lumjack')
                earnings += 1000 * bet
                lumEarning()
            } 
            if(rolls1.style.background === bar && rolls2.style.background === bar && rolls3.style.background === bar){
                earnings += 500 * bet
                lumEarning()
            }
            if(rolls1.style.background === cloche && rolls2.style.background === cloche && rolls3.style.background === cloche){
                earnings += 250 * bet
                lumEarning()
            }
            if(rolls1.style.background === cerises && rolls2.style.background === cerises && rolls3.style.background === cerises){
                earnings += 100 * bet
                lumEarning()
            }
            if(rolls1.style.background === pasteque && rolls2.style.background === pasteque && rolls3.style.background === pasteque){
                earnings += 50 * bet
                lumEarning()
            }
            if(rolls1.style.background === citron && rolls2.style.background === citron && rolls3.style.background === citron){
                earnings += 25 * bet
                lumEarning()
            }

            // DOUBLE RESULT "SEVEN"
            if((
                rolls1.style.background === sept && 
                rolls2.style.background === sept && 
                (rolls3.style.background === bar || 
                rolls3.style.background === cloche || 
                rolls3.style.background === cerises || 
                rolls3.style.background === pasteque || 
                rolls3.style.background === citron)) || 

                (rolls2.style.background === sept && 
                rolls3.style.background === sept && 
                (rolls1.style.background === bar || 
                rolls1.style.background === cloche || 
                rolls1.style.background === cerises || 
                rolls1.style.background === pasteque || 
                rolls1.style.background === citron)) || 

                (rolls1.style.background === sept && 
                rolls3.style.background === sept && 
                (rolls2.style.background === bar || 
                rolls2.style.background === cloche || 
                rolls2.style.background === cerises || 
                rolls2.style.background === pasteque || 
                rolls2.style.background === citron))){

                earnings += 100 * bet
                lumEarning()
            } 
            // DOUBLE RESULT "BAR"
            if((
                rolls1.style.background === bar && 
                rolls2.style.background === bar && 
                (rolls3.style.background === sept || 
                rolls3.style.background === cloche || 
                rolls3.style.background === cerises || 
                rolls3.style.background === pasteque || 
                rolls3.style.background === citron)) || 

                (rolls2.style.background === bar && 
                rolls3.style.background === bar && 
                (rolls1.style.background === sept || 
                rolls1.style.background === cloche || 
                rolls1.style.background === cerises || 
                rolls1.style.background === pasteque || 
                rolls1.style.background === citron)) || 

                (rolls1.style.background === bar && 
                rolls3.style.background === bar && 
                (rolls2.style.background === sept || 
                rolls2.style.background === cloche || 
                rolls2.style.background === cerises || 
                rolls2.style.background === pasteque || 
                rolls2.style.background === citron))){

                earnings += 50 * bet
                lumEarning()
            }
            // DOUBLE RESULT "BELL"
            if((
                rolls1.style.background === cloche && 
                rolls2.style.background === cloche && 
                (rolls3.style.background === bar || 
                rolls3.style.background === sept || 
                rolls3.style.background === cerises || 
                rolls3.style.background === pasteque || 
                rolls3.style.background === citron)) || 

                (rolls2.style.background === cloche && 
                rolls3.style.background === cloche && 
                (rolls1.style.background === bar || 
                rolls1.style.background === sept || 
                rolls1.style.background === cerises || 
                rolls1.style.background === pasteque || 
                rolls1.style.background === citron)) || 

                (rolls1.style.background === cloche && 
                rolls3.style.background === cloche && 
                (rolls2.style.background === bar || 
                rolls2.style.background === sept || 
                rolls2.style.background === cerises || 
                rolls2.style.background === pasteque || 
                rolls2.style.background === citron))){

                earnings += 25 * bet
                lumEarning()
            }
            // DOUBLE RESULT "CHERRIE"
            if((
                rolls1.style.background === cerises && 
                rolls2.style.background === cerises && 
                (rolls3.style.background === bar || 
                rolls3.style.background === cloche || 
                rolls3.style.background === sept || 
                rolls3.style.background === pasteque || 
                rolls3.style.background === citron)) || 

                (rolls2.style.background === cerises && 
                rolls3.style.background === cerises && 
                (rolls1.style.background === bar || 
                rolls1.style.background === cloche || 
                rolls1.style.background === sept || 
                rolls1.style.background === pasteque || 
                rolls1.style.background === citron)) || 

                (rolls1.style.background === cerises && 
                rolls3.style.background === cerises && 
                (rolls2.style.background === bar || 
                rolls2.style.background === cloche || 
                rolls2.style.background === sept || 
                rolls2.style.background === pasteque || 
                rolls2.style.background === citron))){

                earnings += 10 * bet
                lumEarning()
            }
            //DOUBLE RESULT "WATERMELON"
            if((
                rolls1.style.background === pasteque && 
                rolls2.style.background === pasteque && 
                (rolls3.style.background === bar || 
                rolls3.style.background === cloche || 
                rolls3.style.background === cerises || 
                rolls3.style.background === sept || 
                rolls3.style.background === citron)) || 

                (rolls2.style.background === pasteque && 
                rolls3.style.background === pasteque && 
                (rolls1.style.background === bar || 
                rolls1.style.background === cloche || 
                rolls1.style.background === cerises || 
                rolls1.style.background === sept || 
                rolls1.style.background === citron)) || 

                (rolls1.style.background === pasteque && 
                rolls3.style.background === pasteque && 
                (rolls2.style.background === bar || 
                rolls2.style.background === cloche || 
                rolls2.style.background === cerises || 
                rolls2.style.background === sept || 
                rolls2.style.background === citron))){

                earnings += 5 * bet
                lumEarning()
            }
            // DOUBLE RESULT "LEMON"
            if((
                rolls1.style.background === citron && 
                rolls2.style.background === citron && 
                (rolls3.style.background === bar || 
                rolls3.style.background === cloche || 
                rolls3.style.background === cerises || 
                rolls3.style.background === pasteque || 
                rolls3.style.background === sept)) || 

                (rolls2.style.background === citron && 
                rolls3.style.background === citron && 
                (rolls1.style.background === bar || 
                rolls1.style.background === cloche || 
                rolls1.style.background === cerises || 
                rolls1.style.background === pasteque || 
                rolls1.style.background === sept)) || 

                (rolls1.style.background === citron && 
                rolls3.style.background === citron && 
                (rolls2.style.background === bar || 
                rolls2.style.background === cloche || 
                rolls2.style.background === cerises || 
                rolls2.style.background === pasteque || 
                rolls2.style.background === sept))){

                earnings += 2 * bet
                lumEarning()
            } 

            bet = 0
            if(bet >= 0) {betDown.style.pointerEvents = 'none'}
            if((bet <=3) || (bet <=2) || (bet <=1)) {betUp.style.pointerEvents = 'auto'}
            displayBet.textContent = bet
        }, 4000)
    }
})
// ADD BET
betUp.addEventListener('click', () => {
    if(bet >= 1) {betDown.style.pointerEvents = 'auto'}
    if(bet >= 2) {betUp.style.pointerEvents = 'none'}
    if(tokens == 0){
        displayTokens.classList.add('lumgains')
        tokensTitle.classList.add('lumgains')
        setTimeout(() => {displayTokens.classList.remove('lumgains');tokensTitle.classList.remove('lumgains')},600)
    }
    else{
        tokens--
        bet++
        displayBet.textContent = bet
        displayTokens.textContent = tokens
        betTitle.classList.add('lumgains')
        displayBet.classList.add('lumgains')
        setTimeout(() => {betTitle.classList.remove('lumgains');displayBet.classList.remove('lumgains')},600)
        }
})
// REMOVE BET
if(bet == 0) {betDown.style.pointerEvents = 'none'}
betDown.addEventListener('click', () => {
    if(bet <= 1) {betDown.style.pointerEvents = 'none'}
    if((bet <=3) || (bet <=2) || (bet <=1)) {betUp.style.pointerEvents = 'auto'}
    bet--
    tokens++
    displayBet.textContent = bet
    displayTokens.textContent = tokens
    displayTokens.classList.add('lumgains')
    tokensTitle.classList.add('lumgains')
    setTimeout(() => {tokensTitle.classList.remove('lumgains');displayTokens.classList.remove('lumgains')},600)
})
// ADD EARNING 
earningsUp.addEventListener('click', () => {
    tokens = Number(tokens) + Number(earnings)
    displayTokens.textContent = tokens
    earnings = 0
    displayEarnings.textContent = earnings
    displayTokens.classList.add('lumgains')
    tokensTitle.classList.add('lumgains')
    setTimeout(() => {displayTokens.classList.remove('lumgains');tokensTitle.classList.remove('lumgains')},600)
})
// LUM EARNING FOR RESULT
function lumEarning() {
    earningsTitle.classList.add('lumgains')
    displayEarnings.classList.add('lumgains')
    setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
    displayEarnings.textContent = earnings
}