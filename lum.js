// BACKGROUND
const body = document.querySelector('.body')
// INTERVAL CREATION LUM(temps entre chaque création objet lum)
let intervalCreateLum = 500
// TIME BEFORE REMOVE LUM(temps avant suppression objet lum)
let removeLum = 10000
// INTERVAL CHOICE FUNCTION MOVE(temps entre chaque choix aléatoire de fonction de mouvement)
let choiceMoveInterval = 1000
// INTERVAL INCREMENT MOVEMENT(temps entre chaque incrémentation en pixels unique, direction selon fonction de mouvement choisie)
let mouvIntervalIncredent = 10
// END INTERVAL INCREMENT MOVEMENT(fin du délai d'incrémentation)
let settimeoutIntervalMove = 1000
// CREATE LUM
let lumInterval = setInterval(functionlum, intervalCreateLum)
function functionlum(){
    const lum = document.createElement('div')
    let movex = Math.random() * window.innerWidth
    let movey = Math.random() * window.innerHeight *6
    lum.style.bottom = movey
    lum.style.left = movex   
    lum.style.height = lum.style.width = Math.random() * 100 + 'px' 
    let lumColors = [
        'radial-gradient(white,turquoise,transparent,transparent)',
        'radial-gradient(white,gold,transparent,transparent)',
        'radial-gradient(white,blue,transparent,transparent)',
        'radial-gradient(white,magenta,transparent,transparent)',
        'radial-gradient(white,crimson,transparent,transparent)'
    ]
    lum.style.background = lumColors[Math.floor(Math.random()*5)]
    lum.classList.add('lum')
    body.appendChild(lum)
    setTimeout(() => {lum.remove()},removeLum)

    // MOVE DIRECTION(les differentes fonctions de direction. bas, bas/gauche, gauche, gauche/haut, haut ect...)
    // BOTTOM
    let fmt = function mouvt(){
        let mouvt = setInterval(() => {
            lum.style.top = movey++ + 'px'
        }, mouvIntervalIncredent)
        setTimeout(() => {clearInterval(mouvt)},settimeoutIntervalMove)
    }                      
    // BOTTOM LEFT
    let fmtl = function mouvtl(){
        let mouvtl = setInterval(() => {
            lum.style.top = movey++ + 'px'
            lum.style.left = movex++ + 'px'
        }, mouvIntervalIncredent)
        setTimeout(() => {clearInterval(mouvtl)},settimeoutIntervalMove)
    }                      
    // LEFT
    let fml = function mouvl(){
        let mouvl = setInterval(() => {
            lum.style.left = movex++ + 'px'
        }, mouvIntervalIncredent)
        setTimeout(() => {clearInterval(mouvl)},settimeoutIntervalMove)
    }                      
    // LEFT TOP
    let fmlb = function mouvlb(){
        let mouvlb = setInterval(() => {
            lum.style.top = movey-- + 'px'
            lum.style.left = movex++ + 'px'
        }, mouvIntervalIncredent)
        setTimeout(() => {clearInterval(mouvlb)},settimeoutIntervalMove)
    }                      
    // TOP
    let fmb = function mouvb(){
        let mouvb = setInterval(() => {
            lum.style.top = movey-- + 'px'
        }, mouvIntervalIncredent);
        setTimeout(() => {clearInterval(mouvb)},settimeoutIntervalMove)
    }                      
    // TOP RIGHT
    let fmbr = function mouvbr(){
        let mouvbr = setInterval(() => {
            lum.style.top = movey-- + 'px'
            lum.style.left = movex-- + 'px'
        }, mouvIntervalIncredent);
        setTimeout(() => {clearInterval(mouvbr)},settimeoutIntervalMove)
    }                      
    // RIGHT
    let fmr = function mouvr(){
        let mouvr = setInterval(() => {
            lum.style.left = movex-- + 'px'
        }, mouvIntervalIncredent);
        setTimeout(() => {clearInterval(mouvr)},settimeoutIntervalMove)
    }                      
    // RIGHT BOTTOM
    let fmrt = function mouvrt(){
        let mouvrt = setInterval(() => {
            lum.style.top = movey++ + 'px'
            lum.style.left = movex-- + 'px'
        }, mouvIntervalIncredent);
        setTimeout(() => {clearInterval(mouvrt)},settimeoutIntervalMove)
    }

    let intervalFonct = setInterval(choiceMoveDirection, choiceMoveInterval)//INTERVAL FUNCTIONS MOVE (temps entre deux choix de direction)

    function choiceMoveDirection(){
        let arrayFunctionMove = [fmt,fmtl,fml,fmlb,fmb,fmbr,fmr,fmrt]
        let randomFunctionMove = arrayFunctionMove[Math.floor(Math.random()* 8)]
        randomFunctionMove()
    }
}














