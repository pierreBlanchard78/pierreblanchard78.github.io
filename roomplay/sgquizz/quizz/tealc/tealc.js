//-----VARIABLES---------------------------------------------------------------------------------------------------//
//-----CONSTANTES--------------------------------------------------------------------------------------------------//
//-----TABLE PRESENTATION JOUEUR-----------------------------------------------------------------------------------//
//-----TABLE PRESENTATION GRADE------------------------------------------------------------------------------------//
//-----CONSOLE LOGS------------------------------------------------------------------------------------------------//
//-----BOUTON DEPART-----------------------------------------------------------------------------------------------//
//-----BACKGROUND QUESTION-----------------------------------------------------------------------------------------//
//-----BLOC INDICE-------------------------------------------------------------------------------------------------//
//-----BASCULE INDICE----------------------------------------------------------------------------------------------//
//-----REPONSE VRAI------------------------------------------------------------------------------------------------//
//-----REPONSE FAUSSE----------------------------------------------------------------------------------------------//
//-----QUESTION 1--------------------------------------------------------------------------------------------------//
//-----QUESTION 2--------------------------------------------------------------------------------------------------//
//-----QUESTION 3--------------------------------------------------------------------------------------------------//
//-----QUESTION 4--------------------------------------------------------------------------------------------------//
//-----QUESTION 5--------------------------------------------------------------------------------------------------//
//-----QUESTION 6--------------------------------------------------------------------------------------------------//
//-----QUESTION 7--------------------------------------------------------------------------------------------------//
//-----QUESTION 8--------------------------------------------------------------------------------------------------//
//-----QUESTION 9--------------------------------------------------------------------------------------------------//
//-----QUESTION 10-------------------------------------------------------------------------------------------------//
//-----RESULTAT----------------------------------------------------------------------------------------------------//


//-----VARIABLES---------------------------------------------------------------------------------------------------//

let score = 0
let nomjgo = ('')
let grdjgo = ('')

//-----CONSTANTES--------------------------------------------------------------------------------------------------//

const dcomm = document.getElementById("dcomm")
const placenom = document.getElementById('pnom')

const mf = document.getElementById("mf")
const imgquest = 'url("../../img/vor3.gif")'
const rvf = document.getElementById("rvf")

const trep1 = document.getElementById('trep1')
const trep2 = document.getElementById('trep2')
const trep3 = document.getElementById('trep3')

const idrep1 = document.getElementById("idrep1")
const idrep2 = document.getElementById("idrep2")
const idrep3 = document.getElementById("idrep3")

const nquest = document.getElementById("nquest")
const quest = document.getElementById("quest")

const bsuiv = document.getElementById("bsuiv")
const ret = document.getElementById("ret")

const indice = document.getElementById("ind")
const btind = document.getElementById("btn")
const imgind = document.createElement('img')


//-----TABLE PRESENTATION JOUEUR----------------------------------------------------------------------------------//

if(localStorage.getItem('joueurgo1')){nomjgo = localStorage.getItem('joueurgo1')}
if(localStorage.getItem('joueurgo2')){nomjgo = localStorage.getItem('joueurgo2')}
if(localStorage.getItem('joueurgo3')){nomjgo = localStorage.getItem('joueurgo3')}

//-----TABLE PRESENTATION GRADE-----------------------------------------------------------------------------------//

if(localStorage.getItem('grade joueurgo1')){grdjgo = localStorage.getItem('grade joueurgo1')}
if(localStorage.getItem('grade joueurgo2')){grdjgo = localStorage.getItem('grade joueurgo2')}
if(localStorage.getItem('grade joueurgo3')){grdjgo = localStorage.getItem('grade joueurgo3')}

//-----CONSOLE LOGS-----------------------------------------------------------------------------------------------//

console.log(localStorage)
console.log(nomjgo)
console.log(grdjgo)

//----BOUTON DEPART-----------------------------------------------------------------------------------------------//

placenom.textContent = 'Bienvenue, ' + grdjgo + "\u00a0" + nomjgo

bsuiv.style.visibility = 'hidden'
btind.style.visibility = 'hidden'

dcomm.addEventListener('click', hidd,quest1())
function hidd() {
    dcomm.style.visibility = 'hidden'
    ret.style.visibility = 'hidden'
    bsuiv.style.visibility = 'visible'
    btind.style.visibility = 'visible'
}

//-----BACKGROUND QUESTION----------------------------------------------------------------------------------------//

mf.style.background = imgquest
mf.style.backgroundPosition = 'center'
mf.style.backgroundSize = 'cover'
mf.style.backgroundRepeat = 'no-repeat'

//-----BLOC INDICE------------------------------------------------------------------------------------------------//

ind.appendChild(imgind)
ind.style.width = '512px'
ind.style.height = '512px'
ind.style.border = 'ridge'
ind.style.borderWidth = '5px'
ind.style.borderColor = 'gold'
ind.style.borderRightColor = 'brown'
ind.style.borderLeftColor = 'brown'
ind.style.borderRightColor = 'brown'
ind.style.borderRightColor = 'brown'
ind.style.visibility = 'hidden'

//-----BASCULE INDICE---------------------------------------------------------------------------------------------//

function toggle() {
	if (ind.style.visibility == "hidden"){
		ind.style.visibility = "visible";
        score = score - 0.5
        console.log(score)
}}

//----REPONSE VRAI------------------------------------------------------------------------------------------------//

function repv () {
    rvf.textContent = "Bonne réponse !"
    rvf.style.backgroundColor = 'green'
    rvf.style.textAlign = 'center'
    rvf.style.color = 'gold'
    rvf.style.fontSize = 'auto'
    rvf.style.textShadow = '3px 3px 3px, brown'
    rvf.style.border = 'ridge'
    rvf.style.borderWidth = '5px'
    rvf.style.borderColor = 'gold'
    rvf.style.borderRightColor = 'brown'
    rvf.style.borderLeftColor = 'brown'
    rvf.style.borderRadius = '15px'
    mf.style.pointerEvents = 'none'
    bsuiv.style.pointerEvents = 'auto'
    score++
    console.log(score)
    console.log("Bonne réponse !")
}

//----REPONSE FAUSSE----------------------------------------------------------------------------------------------//

function repf () {
    rvf.textContent = "Mauvaise réponse !"
    rvf.style.backgroundColor = 'red'
    rvf.style.textAlign = 'center'
    rvf.style.color = 'gold'
    rvf.style.fontSize = 'auto'
    rvf.style.textShadow = '3px 3px 3px, brown'
    rvf.style.border = 'ridge'
    rvf.style.borderWidth = '5px'
    rvf.style.borderColor = 'gold'
    rvf.style.borderRightColor = 'brown'
    rvf.style.borderLeftColor = 'brown'
    rvf.style.borderRadius = '15px'
    mf.style.pointerEvents = 'none'
    bsuiv.style.pointerEvents = 'auto'
    console.log(score)
    console.log("Mauvaise réponse !")
} 

//----QUESTION 1----------------------------------------------------------------------------------------------------//

function quest1 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repf
    trep2.onclick = repv
    trep3.onclick = repf      
    imgind.src = "../../img/indice/tealc/tealc1.jpg"
    bsuiv.addEventListener('click',quest2)

    nquest.textContent = "Question 1"
    quest.textContent = "Comment s'appelle le maitre et mentor de teal'c ?"
    idrep1.textContent = "Gerak" 
    idrep2.textContent = "Bra'tac"
    idrep3.textContent = "Tanith"
}

//----QUESTION 2---------------------------------------------------------------------------------------------------//

function quest2 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repf
    trep2.onclick = repv
    trep3.onclick = repf 
    ind.style.visibility = "hidden"
    imgind.src = "../../img/indice/tealc/tealc2.jpg"
    bsuiv.addEventListener('click',quest3)

    nquest.textContent = "Question 2"
    quest.textContent = "De quelle planète Teal'c est t-il originaire ?"
    idrep1.textContent = "Abydos"
    idrep2.textContent = "Chulak"
    idrep3.textContent = "Dakara"   
}

//----QUESTION 3---------------------------------------------------------------------------------------------------//

function quest3 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repv
    trep2.onclick = repf
    trep3.onclick = repf 
    imgind.src = "../../img/indice/tealc/tealc3.jpg"
    bsuiv.addEventListener('click',quest4)

    nquest.textContent = "Question 3"
    quest.textContent = "De quel grand maitre Teal'c était-il le primat ?"
    idrep1.textContent = "Apophis"
    idrep2.textContent = "Chronos"
    idrep3.textContent = "Sokaar"
}  

//----QUESTION 4---------------------------------------------------------------------------------------------------//

function quest4 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repv
    trep2.onclick = repf
    trep3.onclick = repf 
    imgind.src = "../../img/indice/tealc/tealc4.jpg"
    bsuiv.addEventListener('click',quest5)

    nquest.textContent = "Question 4"
    quest.textContent = "Quelle est le début de la blague que teal'c raconte a ses partenaires ?"
    idrep1.textContent = "Un garde serpent, un garde cheval et un garde Setesh se retrouvent sur une planète neutre..."
    idrep2.textContent = "Un humain, un goa'uld et un asgard se retrouve dans un vaisseau..."
    idrep3.textContent = "Un soldat Jaffa, un primat et un grand maitre se rencontrent sur une base..."
}

//----QUESTION 5---------------------------------------------------------------------------------------------------//

function quest5 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repf
    trep2.onclick = repf
    trep3.onclick = repv 
    imgind.src = "../../img/indice/tealc/tealc5.jpg"
    bsuiv.addEventListener('click',quest6)

    nquest.textContent = "Question 5"
    quest.textContent = "Quel est le symbole d'aphophis, dont le front de Teal'c est marqué ?"
    idrep1.textContent = "Un aigle" 
    idrep2.textContent = "Un oiseau"
    idrep3.textContent = "Un serpent"
}

//----QUESTION 6---------------------------------------------------------------------------------------------------//

function quest6 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repf
    trep2.onclick = repf
    trep3.onclick = repv 
    imgind.src = "../../img/indice/tealc/tealc6.jpg"
    bsuiv.addEventListener('click',quest7)

    nquest.textContent = "Question 6"
    quest.textContent = "Quel est la réplique d'approbation culte de teal'c ?"
    idrep1.textContent = "C'est exact" 
    idrep2.textContent = "Affirmatif"
    idrep3.textContent = "En effet"
}

//----QUESTION 7---------------------------------------------------------------------------------------------------//

function quest7 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repf
    trep2.onclick = repv
    trep3.onclick = repf 
    imgind.src = "../../img/indice/tealc/tealc7.jpg"
    bsuiv.addEventListener('click',quest8)

    nquest.textContent = "Question 7"
    quest.textContent = "Comment s'appelle la méditation Jaffa que teal'c pratique régulièrement ?"
    idrep1.textContent = "Kenlo'reem" 
    idrep2.textContent = "Kelno'reem"
    idrep3.textContent = "Klemo'reen"
}

//----QUESTION 8---------------------------------------------------------------------------------------------------//

function quest8 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repf
    trep2.onclick = repf
    trep3.onclick = repv 
    imgind.src = "../../img/indice/tealc/tealc8.jpg"
    bsuiv.addEventListener('click',quest9)

    nquest.textContent = "Question 8"
    quest.textContent = "Quel grand maitre Goa'uld a tué le père de Teal'c ?"
    idrep1.textContent = "Baal" 
    idrep2.textContent = "Anubis"
    idrep3.textContent = "Chronos"
}

//----QUESTION 9---------------------------------------------------------------------------------------------------//

function quest9 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repf
    trep2.onclick = repf
    trep3.onclick = repv 
    imgind.src = "../../img/indice/tealc/tealc9.jpg"
    bsuiv.addEventListener('click',quest10)

    nquest.textContent = "Question 9"
    quest.textContent = "Pour Teal'c, qui est Krysta ?"
    idrep1.textContent = "Sa belle-fille" 
    idrep2.textContent = "Une relation intime"
    idrep3.textContent = "Sa voisine de palier"
}

//----QUESTION 10---------------------------------------------------------------------------------------------------//

function quest10 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    trep1.checked = false
    trep2.checked = false
    trep3.checked = false
    trep1.onclick = repf
    trep2.onclick = repf
    trep3.onclick = repv 
    imgind.src = "../../img/indice/tealc/tealc10.jpg"
    bsuiv.addEventListener('click',result)

    nquest.textContent = "Question 10"
    quest.textContent = "Comment s'appelle le fils de teal'c ?"
    idrep1.textContent = "Rak'nor" 
    idrep2.textContent = "Tolok"
    idrep3.textContent = "Rya'c"
}

//----RESULTAT---------------------------------------------------------------------------------------------------//

function result () {

    rvf.remove()
    idrep1.remove()
    idrep2.remove()
    idrep3.remove()
    trep1.remove()
    trep2.remove()
    trep3.remove()
    indice.remove()
    btind.remove()
    bsuiv.remove()

    mf.style.width = '512px'
    mf.style.height = '512px'

    nquest.textContent = 'Resultat ' + grdjgo + "\u00a0" + nomjgo
    quest.textContent = score + '/10'

    const niv = document.createElement('h3')
    mf.appendChild(niv)
    niv.style.position = 'absolute'
    niv.style.top = '50%'
    niv.style.right = '45%'
    niv.style.textAlign = 'center'

    ret.style.visibility = 'visible'

    if(nomjgo == localStorage.getItem('joueurgo1')){localStorage.setItem('scorej1sgt',score)}    
    if(nomjgo == localStorage.getItem('joueurgo2')){localStorage.setItem('scorej2sgt',score)}    
    if(nomjgo == localStorage.getItem('joueurgo3')){localStorage.setItem('scorej3sgt',score)}

    console.log(score)
    console.log(localStorage)
    console.log(nomjgo)

    if(score < 1){
        niv.textContent = ''
        const imgquest = 'url("../../img/grade/caporal.jpg")'
        mf.style.background = imgquest
        mf.style.backgroundPosition = 'center'
        mf.style.backgroundSize = 'cover'
        mf.style.backgroundRepeat = 'no-repeat'
    }

    if(score >= 1 ){
        niv.textContent = ''
        const imgquest = 'url("../../img/grade/lieutenant.jpg")'
        mf.style.background = imgquest
        mf.style.backgroundPosition = 'center'
        mf.style.backgroundSize = 'cover'
        mf.style.backgroundRepeat = 'no-repeat'
    }

    if(score >= 3){
        niv.textContent = ''
        const imgquest = 'url("../../img/grade/capitaine.jpg")'
        mf.style.background = imgquest
        mf.style.backgroundPosition = 'center'
        mf.style.backgroundSize = 'cover'
        mf.style.backgroundRepeat = 'no-repeat'
    }

    if(score >= 5 ){
        niv.textContent = ''
        const imgquest = 'url("../../img/grade/major.jpg")'
        mf.style.background = imgquest
        mf.style.backgroundPosition = 'center'
        mf.style.backgroundSize = 'cover'
        mf.style.backgroundRepeat = 'no-repeat'
    }

    if(score >= 7 ){
        niv.textContent = ''
        const imgquest = 'url("../../img/grade/colonel.jpg")'
        mf.style.background = imgquest
        mf.style.backgroundPosition = 'center'
        mf.style.backgroundSize = 'cover'
        mf.style.backgroundRepeat = 'no-repeat'
    }

    if(score == 10 ){
        niv.textContent = ''
        const imgquest = 'url("../../img/grade/general.jpg")'
        mf.style.background = imgquest
        mf.style.backgroundPosition = 'center'
        mf.style.backgroundSize = 'cover'
        mf.style.backgroundRepeat = 'no-repeat'
    }
}