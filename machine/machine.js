//-----MACHINE A SOUS------------------------------------------------------------------------------------------------//
// DISPLAY ROLLS
const rolls1 = document.getElementById('rolls1')
const rolls2 = document.getElementById('rolls2')
const rolls3 = document.getElementById('rolls3')
// ROLLS
const sept = 'url(img/rouleaux/sept.png)'
const bar = 'url(img/rouleaux/bar.png)'
const cloche = 'url(img/rouleaux/cloche.png)'
const cerises = 'url(img/rouleaux/cerises.png)'
const pasteque = 'url(img/rouleaux/pastèque.png)'
const citron = 'url(img/rouleaux/citron.png)'
const array = [
    sept,
    bar,bar,bar,bar,
    cloche,cloche,cloche,cloche,cloche,cloche,cloche,cloche,
    cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,cerises,
    pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,
    pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,pasteque,
    citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,
    citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,citron,]
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
let tokens = 3
let earnings = 0
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
            rolls1.style.background = array[Math.floor(Math.random()*93)]
            rolls2.style.background = array[Math.floor(Math.random()*93)]
            rolls3.style.background = array[Math.floor(Math.random()*93)]
        }
        // ROLLING DELAY AND RESULT
            // TRIPLE RESULT
        setTimeout(() => {
            clearInterval(rollingVar)
            if(rolls1.style.background == 'url("img/rouleaux/sept.png")' && rolls2.style.background == 'url("img/rouleaux/sept.png")' && rolls3.style.background == 'url("img/rouleaux/sept.png")'){
                jack.classList.add('lumjack')
                earnings += 1000 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            } 
            if(rolls1.style.background == 'url("img/rouleaux/bar.png")' && rolls2.style.background == 'url("img/rouleaux/bar.png")' && rolls3.style.background == 'url("img/rouleaux/bar.png")'){
                earnings += 500 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            if(rolls1.style.background == 'url("img/rouleaux/cloche.png")' && rolls2.style.background == 'url("img/rouleaux/cloche.png")' && rolls3.style.background == 'url("img/rouleaux/cloche.png")'){
                earnings += 250 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            if(rolls1.style.background == 'url("img/rouleaux/cerises.png")' && rolls2.style.background == 'url("img/rouleaux/cerises.png")' && rolls3.style.background == 'url("img/rouleaux/cerises.png")'){
                earnings += 100 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            if(rolls1.style.background == 'url("img/rouleaux/pastèque.png")' && rolls2.style.background == 'url("img/rouleaux/pastèque.png")' && rolls3.style.background == 'url("img/rouleaux/pastèque.png")'){
                earnings += 50 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            if(rolls1.style.background == 'url("img/rouleaux/citron.png")' && rolls2.style.background == 'url("img/rouleaux/citron.png")' && rolls3.style.background == 'url("img/rouleaux/citron.png")'){
                earnings += 25 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            // DOUBLE RESULT "SEVEN"
            if((
                rolls1.style.background == 'url("img/rouleaux/sept.png")' && 
                rolls2.style.background == 'url("img/rouleaux/sept.png")' && 
                (rolls3.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls3.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls3.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls2.style.background == 'url("img/rouleaux/sept.png")' && 
                rolls3.style.background == 'url("img/rouleaux/sept.png")' && 
                (rolls1.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls1.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls1.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls1.style.background == 'url("img/rouleaux/sept.png")' && 
                rolls3.style.background == 'url("img/rouleaux/sept.png")' && 
                (rolls2.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls2.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls2.style.background == 'url("img/rouleaux/citron.png")'))){

                earnings += 100 * bet
                displayEarnings.classList.add('lumgains')
                earningsTitle.classList.add('lumgains')
                setTimeout(() => {displayEarnings.classList.remove('lumgains');earningsTitle.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            } 
            // DOUBLE RESULT "BAR"
            if((rolls1.style.background == 'url("img/rouleaux/bar.png")' && 
                rolls2.style.background == 'url("img/rouleaux/bar.png")' && 
                (rolls3.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls3.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls3.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls2.style.background == 'url("img/rouleaux/bar.png")' && 
                rolls3.style.background == 'url("img/rouleaux/bar.png")' && 
                (rolls1.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls1.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls1.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls1.style.background == 'url("img/rouleaux/bar.png")' && 
                rolls3.style.background == 'url("img/rouleaux/bar.png")' && 
                (rolls2.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls2.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls2.style.background == 'url("img/rouleaux/citron.png")'))){

                earnings += 50 * bet
                displayEarnings.classList.add('lumgains')
                earningsTitle.classList.add('lumgains')
                setTimeout(() => {displayEarnings.classList.remove('lumgains');earningsTitle.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            // DOUBLE RESULT "BELL"
            if((rolls1.style.background == 'url("img/rouleaux/cloche.png")' && 
                rolls2.style.background == 'url("img/rouleaux/cloche.png")' && 
                (rolls3.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls3.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls3.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls3.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls2.style.background == 'url("img/rouleaux/cloche.png")' && 
                rolls3.style.background == 'url("img/rouleaux/cloche.png")' && 
                (rolls1.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls1.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls1.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls1.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls1.style.background == 'url("img/rouleaux/cloche.png")' && 
                rolls3.style.background == 'url("img/rouleaux/cloche.png")' && 
                (rolls2.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls2.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls2.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls2.style.background == 'url("img/rouleaux/citron.png")'))){

                earnings += 25 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            // DOUBLE RESULT "CHERRIE"
            if((rolls1.style.background == 'url("img/rouleaux/cerises.png")' && 
                rolls2.style.background == 'url("img/rouleaux/cerises.png")' && 
                (rolls3.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls3.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls3.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls3.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls2.style.background == 'url("img/rouleaux/cerises.png")' && 
                rolls3.style.background == 'url("img/rouleaux/cerises.png")' && 
                (rolls1.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls1.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls1.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls1.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls1.style.background == 'url("img/rouleaux/cerises.png")' && 
                rolls3.style.background == 'url("img/rouleaux/cerises.png")' && 
                (rolls2.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls2.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls2.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls2.style.background == 'url("img/rouleaux/citron.png")'))){

                earnings += 10 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            //DOUBLE RESULT "WATERMELON"
            if((rolls1.style.background == 'url("img/rouleaux/pastèque.png")' && 
                rolls2.style.background == 'url("img/rouleaux/pastèque.png")' && 
                (rolls3.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls3.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls3.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls2.style.background == 'url("img/rouleaux/pastèque.png")' && 
                rolls3.style.background == 'url("img/rouleaux/pastèque.png")' && 
                (rolls1.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls1.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls1.style.background == 'url("img/rouleaux/citron.png")')) || 

                (rolls1.style.background == 'url("img/rouleaux/pastèque.png")' && 
                rolls3.style.background == 'url("img/rouleaux/pastèque.png")' && 
                (rolls2.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls2.style.background == 'url("img/rouleaux/sept.png")' || 
                rolls2.style.background == 'url("img/rouleaux/citron.png")'))){

                earnings += 5 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            }
            // DOUBLE RESULT "LEMON"
            if((rolls1.style.background == 'url("img/rouleaux/citron.png")' && 
                rolls2.style.background == 'url("img/rouleaux/citron.png")' && 
                (rolls3.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls3.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls3.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls3.style.background == 'url("img/rouleaux/sept.png")')) || 

                (rolls2.style.background == 'url("img/rouleaux/citron.png")' && 
                rolls3.style.background == 'url("img/rouleaux/citron.png")' && 
                (rolls1.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls1.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls1.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls1.style.background == 'url("img/rouleaux/sept.png")')) || 

                (rolls1.style.background == 'url("img/rouleaux/citron.png")' && 
                rolls3.style.background == 'url("img/rouleaux/citron.png")' && 
                (rolls2.style.background == 'url("img/rouleaux/bar.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cloche.png")' || 
                rolls2.style.background == 'url("img/rouleaux/cerises.png")' || 
                rolls2.style.background == 'url("img/rouleaux/pastèque.png")' || 
                rolls2.style.background == 'url("img/rouleaux/sept.png")'))){

                earnings += 2 * bet
                earningsTitle.classList.add('lumgains')
                displayEarnings.classList.add('lumgains')
                setTimeout(() => {earningsTitle.classList.remove('lumgains');displayEarnings.classList.remove('lumgains')},600)
                displayEarnings.textContent = earnings
            } 

            bet = 0
            if(bet >= 0){betDown.style.pointerEvents = 'none'}
            if((bet <=3) || (bet <=2) || (bet <=1)){betUp.style.pointerEvents = 'auto'}
            displayBet.textContent = bet
        }, 4000)
    }
})
// BOUTON AJOUT MISE
betUp.addEventListener('click', () => {
    if(bet >= 1){betDown.style.pointerEvents = 'auto'}
    if(bet >= 2){betUp.style.pointerEvents = 'none'}
    if(tokens == 0){
        betUp.style.pointerEvents = 'none'
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
// BOUTON DIMINUTION MISE
if(bet == 0){betDown.style.pointerEvents = 'none'}
betDown.addEventListener('click', () => {
    if(bet <=1){betDown.style.pointerEvents = 'none'}
    if((bet <=3) || (bet <=2) || (bet <=1)){betUp.style.pointerEvents = 'auto'}
    bet--
    tokens++
    displayBet.textContent = bet
    displayTokens.textContent = tokens
    displayTokens.classList.add('lumgains')
    tokensTitle.classList.add('lumgains')
    setTimeout(() => {tokensTitle.classList.remove('lumgains');displayTokens.classList.remove('lumgains')},600)
})
// AJOUT GAINS AU JETONS
earningsUp.addEventListener('click', () => {
    tokens = Number(tokens) + Number(earnings)
    displayTokens.textContent = tokens
    earnings = 0
    displayEarnings.textContent = earnings
    displayTokens.classList.add('lumgains')
    tokensTitle.classList.add('lumgains')
    setTimeout(() => {displayTokens.classList.remove('lumgains');tokensTitle.classList.remove('lumgains')},600)
})