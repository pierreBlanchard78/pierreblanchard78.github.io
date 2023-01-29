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

const prep1 = document.getElementById('prep1')
const prep2 = document.getElementById('prep2')
const prep3 = document.getElementById('prep3')

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

//-----TABLE PRESENTATION JOUEUR------------------------------------------------------------------------------------//

if(localStorage.getItem('joueurgo1')){nomjgo = localStorage.getItem('joueurgo1')}
if(localStorage.getItem('joueurgo2')){nomjgo = localStorage.getItem('joueurgo2')}
if(localStorage.getItem('joueurgo3')){nomjgo = localStorage.getItem('joueurgo3')}

//-----TABLE PRESENTATION GRADE-------------------------------------------------------------------------------------//

if(localStorage.getItem('grade joueurgo1')){grdjgo = localStorage.getItem('grade joueurgo1')}
if(localStorage.getItem('grade joueurgo2')){grdjgo = localStorage.getItem('grade joueurgo2')}
if(localStorage.getItem('grade joueurgo3')){grdjgo = localStorage.getItem('grade joueurgo3')}

//-----CONSOLE LOGS-------------------------------------------------------------------------------------------------//

console.log(localStorage)
console.log(nomjgo)
console.log(grdjgo)

//----BOUTON DEPART-------------------------------------------------------------------------------------------------//

placenom.textContent = 'Bienvenue, ' + grdjgo + "\u00a0" + nomjgo

bsuiv.style.visibility = 'hidden'
btind.style.visibility = 'hidden'

dcomm.addEventListener('click', hidd,quest1())
function hidd() {
    dcomm.hidden = 'true'
    ret.style.visibility = 'hidden'
    bsuiv.style.visibility = 'visible'
    btind.style.visibility = 'visible'
}

//-----BACKGROUND QUESTION------------------------------------------------------------------------------------------//

mf.style.background = imgquest
mf.style.backgroundPosition = 'center'
mf.style.backgroundSize = 'cover'
mf.style.backgroundRepeat = 'no-repeat'

//-----BLOC INDICE--------------------------------------------------------------------------------------------------//

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

//-----BASCULE INDICE------------------------------------------------------------------------------------------------//

function toggle() {
	if (ind.style.visibility=="hidden"){
		ind.style.visibility = "visible"
        score = score - 0.5
        console.log(score)
        }}

//----REPONSE VRAI----------------------------------------------------------------------------------------------------//

function repv () {rvf
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
    console.log("Bonne réponse !"); 
}

//----REPONSE FAUSSE--------------------------------------------------------------------------------------------------//

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

//----QUESTION 1-------------------------------------------------------------------------------------------------------//

function quest1 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    prep1.checked = false
    prep2.checked = false
    prep3.checked = false
    prep1.onclick = repf
    prep2.onclick = repv
    prep3.onclick = repf 
    imgind.src = "../../img/indice/personnages/personnages1.jpg"
    bsuiv.addEventListener('click',quest2)

    nquest.textContent = "Question 1"
    quest.textContent = "Comment s'appelle le fils d'Apophis ?"
    idrep1.textContent = "Marduk" 
    idrep2.textContent = "Klorel"
    idrep3.textContent = "Skaara"
}

//----QUESTION 2-------------------------------------------------------------------------------------------------------//

    function quest2 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        prep1.checked = false
        prep2.checked = false
        prep3.checked = false
        prep1.onclick = repv
        prep2.onclick = repf
        prep3.onclick = repf  
        ind.style.visibility = "hidden"
        imgind.src = "../../img/indice/personnages/personnages2.jpg"
        bsuiv.addEventListener('click',quest3)

        nquest.textContent = "Question 2"
        quest.textContent = "Avec qui Selmac a t-il accompli la symbiose ?"
        idrep1.textContent = "Jacob Carter"
        idrep2.textContent = "Hank Landry"
        idrep3.textContent = "Rodney Mckay"   
    }

//----QUESTION 3-------------------------------------------------------------------------------------------------------//

    function quest3 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        prep1.checked = false
        prep2.checked = false
        prep3.checked = false
        prep1.onclick = repf
        prep2.onclick = repv
        prep3.onclick = repf  
        imgind.src = "../../img/indice/personnages/personnages3.jpg"
        bsuiv.addEventListener('click',quest4)

        nquest.textContent = "Question 3"
        quest.textContent = "Comment s'appelle le personnage répétant sans cesse le mot 'Contraya' ?"
        idrep1.textContent = "Orlin"
        idrep2.textContent = "Urgo"
        idrep3.textContent = "Martouf"
    }  

//----QUESTION 4-------------------------------------------------------------------------------------------------------//

    function quest4 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        prep1.checked = false
        prep2.checked = false
        prep3.checked = false
        prep1.onclick = repf
        prep2.onclick = repv
        prep3.onclick = repf  
        imgind.src = "../../img/indice/personnages/personnages4.jpg"        
        bsuiv.addEventListener('click',quest5)

        nquest.textContent = "Question 4"
        quest.textContent = "Quel est la dénomination du 'dernier né' réplicateur humanoide qui menacera la galaxie ?"
        idrep1.textContent = "N°3"
        idrep2.textContent = "N°5"
        idrep3.textContent = "N°6"
    }

//----QUESTION 5-------------------------------------------------------------------------------------------------------//

    function quest5 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        prep1.checked = false
        prep2.checked = false
        prep3.checked = false
        prep1.onclick = repv
        prep2.onclick = repf
        prep3.onclick = repf 
        imgind.src = "../../img/indice/personnages/personnages5.jpg"
        bsuiv.addEventListener('click',quest6)

        nquest.textContent = "Question 5"
        quest.textContent = "Qui sont les trois Grand maitre Goa'uld présent au traité avec les Asgards dans l'épisode 'Diplomatie' ?"
        idrep1.textContent = "Yu, Niirti et Chronos" 
        idrep2.textContent = "Baal, Apophis et Camulus"
        idrep3.textContent = "Anubis, Osiris et Sokaar"
    }

//----QUESTION 6------------------------------------------------------------------------------------------------------//

function quest6 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    prep1.checked = false
    prep2.checked = false
    prep3.checked = false
    prep1.onclick = repv
    prep2.onclick = repf
    prep3.onclick = repf  
    imgind.src = "../../img/indice/personnages/personnages6.jpg"
    bsuiv.addEventListener('click',quest7)

    nquest.textContent = "Question 6"
    quest.textContent = "Qui est la fille de Vala Mal doran ?"
    idrep1.textContent = "Le commandant des armées Oris" 
    idrep2.textContent = "Une Tok'Ra"
    idrep3.textContent = "Une contrebandière"
}

//----QUESTION 7-------------------------------------------------------------------------------------------------------//

function quest7 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    prep1.checked = false
    prep2.checked = false
    prep3.checked = false
    prep1.onclick = repf
    prep2.onclick = repf
    prep3.onclick = repv   
    imgind.src = "../../img/indice/personnages/personnages7.jpg"
    bsuiv.addEventListener('click',quest8)

    nquest.textContent = "Question 7"
    quest.textContent = "De quel pays de la planète Langara Jonas Quinn est-il originaire ?"
    idrep1.textContent = "Terrania" 
    idrep2.textContent = "Fédération des Andaris"
    idrep3.textContent = "Kelowna"
}

//----QUESTION 8--------------------------------------------------------------------------------------------------------//

function quest8 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    prep1.checked = false
    prep2.checked = false
    prep3.checked = false
    prep1.onclick = repf
    prep2.onclick = repf
    prep3.onclick = repv   
    imgind.src = "../../img/indice/personnages/personnages8.jpg"
    bsuiv.addEventListener('click',quest9)

    nquest.textContent = "Question 8"
    quest.textContent = "Quel poste occupe Caroline Lam ?"
    idrep1.textContent = "Major de l'USAF" 
    idrep2.textContent = "Diplomate"
    idrep3.textContent = "Medecin-Chef"
}

//----QUESTION 9-------------------------------------------------------------------------------------------------------//

function quest9 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    prep1.checked = false
    prep2.checked = false
    prep3.checked = false
    prep1.onclick = repf
    prep2.onclick = repv
    prep3.onclick = repf   
    imgind.src = "../../img/indice/personnages/personnages9.jpg"
    bsuiv.addEventListener('click',quest10)

    nquest.textContent = "Question 9"
    quest.textContent = "En quelle année Ernest Littlefield a t-il traversé la porte des étoiles ?"
    idrep1.textContent = "1939" 
    idrep2.textContent = "1945"
    idrep3.textContent = "1955"
}

//----QUESTION 10------------------------------------------------------------------------------------------------------//

function quest10 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    prep1.checked = false
    prep2.checked = false
    prep3.checked = false
    prep1.onclick = repf
    prep2.onclick = repf
    prep3.onclick = repv   
    imgind.src = "../../img/indice/personnages/personnages10.jpg"
    bsuiv.addEventListener('click',result)

    nquest.textContent = "Question 10"
    quest.textContent = "A qui Samantha Carter a t-elle donné le chat nommé schrodinger ?"
    idrep1.textContent = "Martouf" 
    idrep2.textContent = "Shi'fu"
    idrep3.textContent = "Narim"
}

//----RESULTAT-------------------------------------------------------------------------------------------------------//

function result () {
    
    rvf.remove()
    idrep1.remove()
    idrep2.remove()
    idrep3.remove()
    prep1.remove()
    prep2.remove()
    prep3.remove()
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

    if(nomjgo == localStorage.getItem('joueurgo1')){localStorage.setItem('scorej1p',score)}    
    if(nomjgo == localStorage.getItem('joueurgo2')){localStorage.setItem('scorej2p',score)}    
    if(nomjgo == localStorage.getItem('joueurgo3')){localStorage.setItem('scorej3p',score)}

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