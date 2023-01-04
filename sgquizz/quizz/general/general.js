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

const grep1 = document.getElementById('grep1')
const grep2 = document.getElementById('grep2')
const grep3 = document.getElementById('grep3')

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
    grep1.checked = false
    grep2.checked = false
    grep3.checked = false
    grep1.onclick = repf
    grep2.onclick = repv
    grep3.onclick = repf   
    imgind.src = "../../img/indice/general/general1.jpg"
    bsuiv.addEventListener('click',quest2)

    nquest.textContent = "Question 1"
    quest.textContent = "Suite a une éruption solaire perturbant le fonctionnement de la porte des étoiles, en quelle année Sg-1 se retrouve t-il propulsé ?"
    idrep1.textContent = "1997" 
    idrep2.textContent = "1969"
    idrep3.textContent = "2010"
}

//----QUESTION 2-----------------------------------------------------------------------------------------------------//

    function quest2 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        grep1.checked = false
        grep2.checked = false
        grep3.checked = false
        grep1.onclick = repf
        grep2.onclick = repf
        grep3.onclick = repv
        ind.style.visibility = "hidden"       
        imgind.src = "../../img/indice/general/general2.jpg"
        bsuiv.addEventListener('click',quest3)

        nquest.textContent = "Question 2"
        quest.textContent = "Quel nom porte le chien de Robert Kinsey ?"
        idrep1.textContent = "Starsky"
        idrep2.textContent = "Sparky"
        idrep3.textContent = "Oscar"   
    }

//----QUESTION 3---------------------------------------------------------------------------------------------------//

    function quest3 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        grep1.checked = false
        grep2.checked = false
        grep3.checked = false
        grep1.onclick = repf
        grep2.onclick = repf
        grep3.onclick = repv      
        imgind.src = "../../img/indice/general/general3.jpg"
        bsuiv.addEventListener('click',quest4)

        nquest.textContent = "Question 3"
        quest.textContent = "Quel est le dispositif utilisé pour signifier au SG-C l'ouverture de l'iris ?"
        idrep1.textContent = "H.B.O."
        idrep2.textContent = "C.M.O."
        idrep3.textContent = "G.D.O."
    }  

//----QUESTION 4---------------------------------------------------------------------------------------------------//

    function quest4 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        grep1.checked = false
        grep2.checked = false
        grep3.checked = false
        grep1.onclick = repf
        grep2.onclick = repf
        grep3.onclick = repv        
        imgind.src = "../../img/indice/general/general4.jpg"       
        bsuiv.addEventListener('click',quest5)

        nquest.textContent = "Question 4"
        quest.textContent = "Quelle phrase les Oris répètent-il religieusement sans cesse ?"
        idrep1.textContent = "Les Oris sont grand"
        idrep2.textContent = "Gloire au Oris"
        idrep3.textContent = "Loués soit les Oris"
    }

//----QUESTION 5---------------------------------------------------------------------------------------------------//

    function quest5 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        grep1.checked = false
        grep2.checked = false
        grep3.checked = false
        grep1.onclick = repf
        grep2.onclick = repf
        grep3.onclick = repv       
        imgind.src = "../../img/indice/general/general5.jpg"
        bsuiv.addEventListener('click',quest6)

        nquest.textContent = "Question 5"
        quest.textContent = "De quelle manière SG-1 détruit-il la flotte d'Apophis ?"
        idrep1.textContent = "En utilisant le siège des Anciens" 
        idrep2.textContent = "Dans une bataille spatiale"
        idrep3.textContent = "En faisant exploser une étoile"
    }

//----QUESTION 6---------------------------------------------------------------------------------------------------//

function quest6 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    grep1.checked = false
    grep2.checked = false
    grep3.checked = false
    grep1.onclick = repf
    grep2.onclick = repf
    grep3.onclick = repv   
    imgind.src = "../../img/indice/general/general6.jpg"
    bsuiv.addEventListener('click',quest7)

    nquest.textContent = "Question 6"
    quest.textContent = "Pourquoi Oma Desala a-t-elle aidé Anubis a effectuer l'ascension ?"
    idrep1.textContent = "Elle a eu pitié de lui" 
    idrep2.textContent = "Elle s'ennuyait"
    idrep3.textContent = "Anubis l'a bernée"
}

//----QUESTION 7---------------------------------------------------------------------------------------------------//

function quest7 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    grep1.checked = false
    grep2.checked = false
    grep3.checked = false
    grep1.onclick = repf
    grep2.onclick = repv
    grep3.onclick = repf   
    imgind.src = "../../img/indice/general/general7.jpg"
    bsuiv.addEventListener('click',quest8)

    nquest.textContent = "Question 7"
    quest.textContent = "A quel corps de métier appartient l'équipe de SG-1 dans l'hallucination de Teal'c, dans l'episode 'La porte des rêves' ?"
    idrep1.textContent = "La police" 
    idrep2.textContent = "Les pompiers"
    idrep3.textContent = "Les ambulanciers"
}

//----QUESTION 8---------------------------------------------------------------------------------------------------//

function quest8 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    grep1.checked = false
    grep2.checked = false
    grep3.checked = false
    grep1.onclick = repf
    grep2.onclick = repf
    grep3.onclick = repv   
    imgind.src = "../../img/indice/general/general8.jpg"
    bsuiv.addEventListener('click',quest9)

    nquest.textContent = "Question 8"
    quest.textContent = "Sur quelle planète fut fondée la toute première colonie Ancienne ?"
    idrep1.textContent = "La Terre" 
    idrep2.textContent = "Praclarush Taonas"
    idrep3.textContent = "Dakara"
}

//----QUESTION 9---------------------------------------------------------------------------------------------------//

function quest9 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    grep1.checked = false
    grep2.checked = false
    grep3.checked = false
    grep1.onclick = repf
    grep2.onclick = repf
    grep3.onclick = repv   
    imgind.src = "../../img/indice/general/general9.jpg"
    bsuiv.addEventListener('click',quest10)

    nquest.textContent = "Question 9"
    quest.textContent = "Quelle organisation a tenté de pousser le général Hammond a quitter ses fonctions au SG-C en menaçant sa famille ?"
    idrep1.textContent = "L'USAF" 
    idrep2.textContent = "La CIA"
    idrep3.textContent = "Le NID"
}

//----QUESTION 10---------------------------------------------------------------------------------------------------//

function quest10 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    grep1.checked = false
    grep2.checked = false
    grep3.checked = false
    grep1.onclick = repv
    grep2.onclick = repf
    grep3.onclick = repf  
    imgind.src = "../../img/indice/general/general10.jpg"
    bsuiv.addEventListener('click',result)

    nquest.textContent = "Question 10"
    quest.textContent = "De quel appareil Cameron Mitchell était il pilote avant d'intégrer SG-1 ?"
    idrep1.textContent = "F-302" 
    idrep2.textContent = "X-303"
    idrep3.textContent = "F-301"
}

//----RESULTAT---------------------------------------------------------------------------------------------------//

function result () {
    
    rvf.remove()
    idrep1.remove()
    idrep2.remove()
    idrep3.remove()
    grep1.remove()
    grep2.remove()
    grep3.remove()
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

    if(nomjgo == localStorage.getItem('joueurgo1')){localStorage.setItem('scorej1g',score)}    
    if(nomjgo == localStorage.getItem('joueurgo2')){localStorage.setItem('scorej2g',score)}    
    if(nomjgo == localStorage.getItem('joueurgo3')){localStorage.setItem('scorej3g',score)}

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