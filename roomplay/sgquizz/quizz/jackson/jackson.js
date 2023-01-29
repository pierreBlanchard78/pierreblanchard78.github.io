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

const jrep1 = document.getElementById('jrep1')
const jrep2 = document.getElementById('jrep2')
const jrep3 = document.getElementById('jrep3')

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

//-----BASCULE INDICE-----------------------------------------------------------------------------------------------//

function toggle() {
	if (ind.style.visibility=="hidden"){
		ind.style.visibility = "visible"
        score = score - 0.5
        console.log(score)
        }}

//----REPONSE VRAI---------------------------------------------------------------------------------------------------//

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
    console.log("Bonne réponse !");
}

//----REPONSE FAUSSE-------------------------------------------------------------------------------------------------//

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

//----QUESTION 1-----------------------------------------------------------------------------------------------------//

function quest1 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    jrep1.checked = false
    jrep2.checked = false
    jrep3.checked = false
    jrep1.onclick = repf
    jrep2.onclick = repv
    jrep3.onclick = repf   
    imgind.src = "../../img/indice/jackson/jackson1.jpg"
    bsuiv.addEventListener('click',quest2)

    nquest.textContent = "Question 1"
    quest.textContent = "Comment s'appelle la femme de Daniel ?"
    idrep1.textContent = "Shan'auc" 
    idrep2.textContent = "Sha're"
    idrep3.textContent = "Ishta"
}

//----QUESTION 2-----------------------------------------------------------------------------------------------------//

    function quest2 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        jrep1.checked = false
        jrep2.checked = false
        jrep3.checked = false
        jrep1.onclick = repf
        jrep2.onclick = repf
        jrep3.onclick = repv
        ind.style.visibility = "hidden"       
        imgind.src = "../../img/indice/jackson/jackson2.jpg"
        bsuiv.addEventListener('click',quest3)

        nquest.textContent = "Question 2"
        quest.textContent = "A l'origine, quel est la profession de Daniel ?"
        idrep1.textContent = "Militaire"
        idrep2.textContent = "Explorateur"
        idrep3.textContent = "Archéologue"   
    }

//----QUESTION 3---------------------------------------------------------------------------------------------------//

    function quest3 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        jrep1.checked = false
        jrep2.checked = false
        jrep3.checked = false
        jrep1.onclick = repf
        jrep2.onclick = repf
        jrep3.onclick = repv      
        imgind.src = "../../img/indice/jackson/jackson3.jpg"
        bsuiv.addEventListener('click',quest4)

        nquest.textContent = "Question 3"
        quest.textContent = "De quoi Daniel meurt au cours de l'aventure ?"
        idrep1.textContent = "Il est abattu"
        idrep2.textContent = "Dans une explosion"
        idrep3.textContent = "Par irradiation"
    }  

//----QUESTION 4---------------------------------------------------------------------------------------------------//

    function quest4 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        jrep1.checked = false
        jrep2.checked = false
        jrep3.checked = false
        jrep1.onclick = repf
        jrep2.onclick = repv
        jrep3.onclick = repf        
        imgind.src = "../../img/indice/jackson/jackson4.jpg"    
        bsuiv.addEventListener('click',quest5)

        nquest.textContent = "Question 4"
        quest.textContent = "Qui est l'amie de Daniel qui deviendra plus tard le goa'uld Osiris ?"
        idrep1.textContent = "Catherine Langford"
        idrep2.textContent = "Sarah Gardner"
        idrep3.textContent = "Vala Mal Doraan"
    }

//----QUESTION 5---------------------------------------------------------------------------------------------------//

    function quest5 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        jrep1.checked = false
        jrep2.checked = false
        jrep3.checked = false
        jrep1.onclick = repf
        jrep2.onclick = repv
        jrep3.onclick = repf       
        imgind.src = "../../img/indice/jackson/jackson5.jpg"
        bsuiv.addEventListener('click',quest6)

        nquest.textContent = "Question 5"
        quest.textContent = "Comment s'appelle le unas devenu l'ami de Daniel ?"
        idrep1.textContent = "Harlan" 
        idrep2.textContent = "Chaka"
        idrep3.textContent = "Travell"
    }

//----QUESTION 6---------------------------------------------------------------------------------------------------//

function quest6 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    jrep1.checked = false
    jrep2.checked = false
    jrep3.checked = false
    jrep1.onclick = repf
    jrep2.onclick = repf
    jrep3.onclick = repv   
    imgind.src = "../../img/indice/jackson/jackson6.jpg"
    bsuiv.addEventListener('click',quest7)

    nquest.textContent = "Question 6"
    quest.textContent = "Quel est le nom du serviteur dont Daniel usurpe l'identité dans l'épisode 'Rencontre au sommet'?"
    idrep1.textContent = "Karroc" 
    idrep2.textContent = "Lothai"
    idrep3.textContent = "Jarren"
}

//----QUESTION 7---------------------------------------------------------------------------------------------------//

function quest7 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    jrep1.checked = false
    jrep2.checked = false
    jrep3.checked = false
    jrep1.onclick = repf
    jrep2.onclick = repv
    jrep3.onclick = repf   
    imgind.src = "../../img/indice/jackson/jackson7.jpg"
    bsuiv.addEventListener('click',quest8)

    nquest.textContent = "Question 7"
    quest.textContent = "Dans l'épisode 'Le vaisseau fantôme', l'esprit de combien de personnes envahissent le corps de Daniel ?"
    idrep1.textContent = "8" 
    idrep2.textContent = "12"
    idrep3.textContent = "15"
}

//----QUESTION 8---------------------------------------------------------------------------------------------------//

function quest8 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    jrep1.checked = false
    jrep2.checked = false
    jrep3.checked = false
    jrep1.onclick = repf
    jrep2.onclick = repf
    jrep3.onclick = repv   
    imgind.src = "../../img/indice/jackson/jackson8.jpg"
    bsuiv.addEventListener('click',quest9)

    nquest.textContent = "Question 8"
    quest.textContent = "Dans l'épisode 'Pouvoir absolu', quelle ville est anéantie sous les ordres de Daniel ?"
    idrep1.textContent = "Washington" 
    idrep2.textContent = "Paris"
    idrep3.textContent = "Moscou"
}

//----QUESTION 9---------------------------------------------------------------------------------------------------//

function quest9 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    jrep1.checked = false
    jrep2.checked = false
    jrep3.checked = false
    jrep1.onclick = repf
    jrep2.onclick = repv
    jrep3.onclick = repf   
    imgind.src = "../../img/indice/jackson/jackson9.jpg"
    bsuiv.addEventListener('click',quest10)

    nquest.textContent = "Question 9"
    quest.textContent = "Qu'est-ce qui motive Daniel a rejoindre SG-1 au tout début de l'aventure ?"
    idrep1.textContent = "Vaincre les Goa'uld" 
    idrep2.textContent = "Retrouver Sha're"
    idrep3.textContent = "Le gout de l'aventure"
}

//----QUESTION 10---------------------------------------------------------------------------------------------------//

function quest10 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    jrep1.checked = false
    jrep2.checked = false
    jrep3.checked = false
    jrep1.onclick = repf
    jrep2.onclick = repv
    jrep3.onclick = repf  
    imgind.src = "../../img/indice/jackson/jackson10.jpg"
    bsuiv.addEventListener('click',result)

    nquest.textContent = "Question 10"
    quest.textContent = "Selon Daniel, que vont chercher a regarder les russes en ce qui concerne Samantha Carter ?"
    idrep1.textContent = "Ses yeux" 
    idrep2.textContent = "Ses seins"
    idrep3.textContent = "Ses fesses"
}

//----RESULTAT---------------------------------------------------------------------------------------------------//

function result () {
    
    rvf.remove()
    idrep1.remove()
    idrep2.remove()
    idrep3.remove()
    jrep1.remove()
    jrep2.remove()
    jrep3.remove()
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

    if(nomjgo == localStorage.getItem('joueurgo1')){localStorage.setItem('scorej1sgj',score)}    
    if(nomjgo == localStorage.getItem('joueurgo2')){localStorage.setItem('scorej2sgj',score)}    
    if(nomjgo == localStorage.getItem('joueurgo3')){localStorage.setItem('scorej3sgj',score)}

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