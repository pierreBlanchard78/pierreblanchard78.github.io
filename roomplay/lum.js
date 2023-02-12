// BACKGROUND
const body = document.querySelector('.body')
let audio = new Audio('lum.mp3')
// INTERVAL CREATION LUM(temps entre chaque création objet lum)
let intervalCreateLum = 1000
// TIME BEFORE REMOVE LUM(temps avant suppression objet lum)
let removeLum = 12000
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

    setTimeout(() => {body.appendChild(lum)},0)

    let movex = Math.random() * window.innerWidth
    let movey = Math.random() * window.innerHeight
    let lumColors = [
        'radial-gradient(white,turquoise,transparent,transparent)',
        'radial-gradient(white,gold,transparent,transparent)',
        'radial-gradient(white,blue,transparent,transparent)',
        'radial-gradient(white,magenta,transparent,transparent)',
        'radial-gradient(white,crimson,transparent,transparent)',
        'radial-gradient(white,yellowgreen,transparent,transparent)',
        'radial-gradient(white,pink,transparent,transparent)',
        'radial-gradient(white,darkcyan,transparent,transparent)'
    ]
    
    lum.style.bottom = movey;
    lum.style.left = movex;  
    lum.style.height = lum.style.width = Math.random() * 100 + 'px'; 
    lum.style.background = lumColors[Math.floor(Math.random()*8)];
    lum.style.position = 'absolute';
    // lum.style.cursor = 'pointer'
    lum.style.transition = '2s';
    lum.style.zIndex = '-1';
    lum.style.opacity = '0%'

    setTimeout(() => {
        lum.style.opacity = '50%'
        lum.style.scale = '1'
    }, 2000);

    setTimeout(() => {
        lum.style.scale = '1.5'
    }, 3000);

    setTimeout(() => {
        lum.style.scale = '1'
    }, 4000);

    setTimeout(() => {
        lum.style.scale = '1.5'
    }, 5000);

    setTimeout(() => {
        lum.style.scale = '1'
    }, 6000);

    setTimeout(() => {
        lum.style.scale = '1.5'
    }, 7000);

    setTimeout(() => {
        lum.style.scale = '1'
    }, 8000);

    setTimeout(() => {
        lum.style.opacity = '0%'
        lum.style.scale = '1.5'
    }, 10000);

    setTimeout(() => {lum.remove()},removeLum)

    // MOVE DIRECTION(les differentes conditions de direction. bas, bas/gauche, gauche, gauche/haut, haut ect...)

    function moveDirection(direction) {
        let directionInterval = setInterval(() => {
            if(direction==='fmt') {// BOTTOM
                lum.style.top = movey++ + 'px'
            }
            if(direction==='fmtl') {// BOTTOM LEFT
                lum.style.top = movey++ + 'px'
                lum.style.left = movex++ + 'px'
            }
            if(direction==='fml') {// LEFT
                lum.style.left = movex++ + 'px'
            }
            if(direction==='fmbl') {// TOP LEFT
                lum.style.top = movey-- + 'px'
                lum.style.left = movex++ + 'px'
            }
            if(direction==='fmb') {// TOP
                lum.style.left = movex++ + 'px'
            }
            if(direction==='fmbr') {// TOP RIGHT
                lum.style.top = movey-- + 'px'
                lum.style.left = movex-- + 'px'
            }
            if(direction==='fmr') {// RIGHT
                lum.style.left = movex-- + 'px'
            }
            if(direction==='fmtr') {// RIGHT BOTTOM
                lum.style.top = movey++ + 'px'
                lum.style.left = movex-- + 'px'
            }
        }, mouvIntervalIncredent);
        setTimeout(() => {clearInterval(directionInterval)},settimeoutIntervalMove)
    }

    let intervalFonct = setInterval(choiceMoveDirection, choiceMoveInterval)//INTERVAL FUNCTIONS MOVE (temps entre deux choix de direction)
    function choiceMoveDirection(){
        let arrayFunctionMove = ['fmt','fmtl','fml','fmbl','fmb','fmbr','fmr','fmtr']
        let randomFunctionMove = arrayFunctionMove[[Math.floor(Math.random()* 8)]]
        moveDirection(randomFunctionMove)
    }

    lum.addEventListener('click', () => {
        console.log('lol')
    audio.play()
    lum.remove()
    })
}












