// -----CLOCK----------------------------------------------------------------------------------------------------------//

const blauch = document.getElementById('blauch')
const bpau = document.getElementById('bpau')
const brem = document.getElementById('brem')
const bc = document.getElementById('bc')
const bs = document.getElementById('bs')
const bm = document.getElementById('bm')
const bh = document.getElementById('bh')

const acen1 = document.getElementById('acen1')
const asec1 = document.getElementById('asec1')
const amin1 = document.getElementById('amin1')
const ahrs1 = document.getElementById('ahrs1')

const acen2 = document.getElementById('acen2')
const asec2 = document.getElementById('asec2')
const amin2 = document.getElementById('amin2')
const ahrs2 = document.getElementById('ahrs2')

let cen1 = 0
let sec1 = 0
let min1 = 0
let hrs1 = 0

let cen2 = 0
let sec2 = 0
let min2 = 0
let hrs2 = 0

// BOUTONS +1

bc.addEventListener('click', () => {
    cen1++
    acen1.textContent = cen1
})
bs.addEventListener('click', () => {
        sec1++
        asec1.textContent = sec1
        sec2++
        asec2.textContent = sec2
})
bm.addEventListener('click', () => {
        min1++
        amin1.textContent = min1
        min2++
        amin2.textContent = min2
})
bh.addEventListener('click', () => {
        hrs1++
        ahrs1.textContent = hrs1
        hrs2++
        ahrs2.textContent = hrs2
})

// BOUTON LANCER

blauch.addEventListener('click', () => {
    let t1 = setInterval(time1, 10)
function time1() {
        cen1++
        if(cen1 == 100){
                cen1 = 0
                sec1++
        }
        acen1.textContent = '0' + cen1
        if(cen1 >= 10){
            acen1.textContent = cen1        
        } 
        if(sec1 == 60){
                sec1 = 0
                min1++       
        }
        asec1.textContent = '0' + sec1
        if(sec1 >= 10){
                asec1.textContent = sec1 
        }

        if(min1 == 60){
                min1 = 0
                hrs1++
        }
        amin1.textContent = '0' + min1
        if(min1 >= 10){
                amin1.textContent = min1
        }

        if(hrs1 == 24){
                hrs1 = 0              
        }
        ahrs1.textContent = '0' + hrs1
        if(hrs1 >= 10){
                ahrs1.textContent = hrs1  
        }

        bpau.addEventListener('click', () => {
            clearInterval(t1)
        })
} 
    let t2 = setInterval(time2, 1000)
function time2(){
        sec2++
        if(sec2 == 60){
                sec2 = 0
                min2++       
        }
        asec2.textContent = '0' + sec2
        if(sec2 >= 10){
                asec2.textContent = sec2 
        }

        if(min2 == 60){
                min2 = 0
                hrs2++
        }
        amin2.textContent = '0' + min2
        if(min2 >= 10){
                amin2.textContent = min2
        }

        if(hrs2 == 24){
                hrs2 = 0              
        }
        ahrs2.textContent = '0' + hrs2
        if(hrs2 >= 10){
                ahrs2.textContent = hrs2  
        }

        bpau.addEventListener('click', () => {
            clearInterval(t2)
        })
}
})

// BOUTON REMOVE

brem.addEventListener('click', () => {
    cen1 = 0
    acen1.textContent = '0' + cen1
    sec1 = 0
    asec1.textContent = '0' + sec1
    min1 = 0
    amin1.textContent = '0' +  min1
    hrs1 = 0
    ahrs1.textContent = '0' +  hrs1

    sec2 = 0
    asec2.textContent = '0' +  sec2
    min2 = 0
    amin2.textContent = '0' +  min2
    hrs2 = 0
    ahrs2.textContent = '0' + hrs2
})