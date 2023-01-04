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

const crep1 = document.getElementById('crep1')
const crep2 = document.getElementById('crep2')
const crep3 = document.getElementById('crep3')

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
    crep1.checked = false
    crep2.checked = false
    crep3.checked = false
    crep1.onclick = repv
    crep2.onclick = repf
    crep3.onclick = repf   
    imgind.src = "../../img/indice/carter/carter1.jpg"
    bsuiv.addEventListener('click',quest2)

    nquest.textContent = "Question 1"
    quest.textContent = "Quel est le grade de Sam au début de l'aventure ?"
    idrep1.textContent = "Capitaine" 
    idrep2.textContent = "Major"
    idrep3.textContent = "Lieutenant-colonel"
}

//----QUESTION 2-----------------------------------------------------------------------------------------------------//

    function quest2 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        crep1.checked = false
        crep2.checked = false
        crep3.checked = false
        crep1.onclick = repv
        crep2.onclick = repf
        crep3.onclick = repf
        ind.style.visibility = "hidden"       
        imgind.src = "../../img/indice/carter/carter2.jpg"
        bsuiv.addEventListener('click',quest3)

        nquest.textContent = "Question 2"
        quest.textContent = "Quel scientifique empoté tombe amoureux de Sam ?"
        idrep1.textContent = "Jay Felger"
        idrep2.textContent = "Orlin"
        idrep3.textContent = "Rodney Mckay"   
    }

//----QUESTION 3---------------------------------------------------------------------------------------------------//

    function quest3 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        crep1.checked = false
        crep2.checked = false
        crep3.checked = false
        crep1.onclick = repf
        crep2.onclick = repv
        crep3.onclick = repf      
        imgind.src = "../../img/indice/carter/carter3.jpg"
        bsuiv.addEventListener('click',quest4)

        nquest.textContent = "Question 3"
        quest.textContent = "Comment s'appelle le petit ami de Sam ?"
        idrep1.textContent = "Jack O'Neill"
        idrep2.textContent = "Pete Shanahan"
        idrep3.textContent = "Narim"
    }  

//----QUESTION 4---------------------------------------------------------------------------------------------------//

    function quest4 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        crep1.checked = false
        crep2.checked = false
        crep3.checked = false
        crep1.onclick = repv
        crep2.onclick = repf
        crep3.onclick = repf       
        imgind.src = "../../img/indice/carter/carter4.jpg"       
        bsuiv.addEventListener('click',quest5)

        nquest.textContent = "Question 4"
        quest.textContent = "Quel être ayant accompli l'ascension tombe amoureux de Sam ?"
        idrep1.textContent = "Orlin"
        idrep2.textContent = "Jay Felger"
        idrep3.textContent = "Rodney Mckay"
    }

//----QUESTION 5---------------------------------------------------------------------------------------------------//

    function quest5 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        crep1.checked = false
        crep2.checked = false
        crep3.checked = false
        crep1.onclick = repv
        crep2.onclick = repf
        crep3.onclick = repf      
        imgind.src = "../../img/indice/carter/carter5.jpg"
        bsuiv.addEventListener('click',quest6)

        nquest.textContent = "Question 5"
        quest.textContent = "Quel Tok'Ra prend possession du corps de Sam ?"
        idrep1.textContent = "Jolinar" 
        idrep2.textContent = "Egeria"
        idrep3.textContent = "Selmac"
    }

//----QUESTION 6---------------------------------------------------------------------------------------------------//

function quest6 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    crep1.checked = false
    crep2.checked = false
    crep3.checked = false
    crep1.onclick = repf
    crep2.onclick = repv
    crep3.onclick = repf  
    imgind.src = "../../img/indice/carter/carter6.jpg"
    bsuiv.addEventListener('click',quest7)

    nquest.textContent = "Question 6"
    quest.textContent = "De qui Sam est elle éprise sans pouvoir concrétiser ses sentiments ?"
    idrep1.textContent = "Daniel Jackson" 
    idrep2.textContent = "Jack O'Neill"
    idrep3.textContent = "Teal'c"
}

//----QUESTION 7---------------------------------------------------------------------------------------------------//

function quest7 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    crep1.checked = false
    crep2.checked = false
    crep3.checked = false
    crep1.onclick = repf
    crep2.onclick = repf
    crep3.onclick = repv  
    imgind.src = "../../img/indice/carter/carter7.jpg"
    bsuiv.addEventListener('click',quest8)

    nquest.textContent = "Question 7"
    quest.textContent = "Quel est le grade de Sam a la fin de l'aventure ?"
    idrep1.textContent = "Lieutenant-colonel" 
    idrep2.textContent = "Major"
    idrep3.textContent = "Colonel"
}

//----QUESTION 8---------------------------------------------------------------------------------------------------//

function quest8 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    crep1.checked = false
    crep2.checked = false
    crep3.checked = false
    crep1.onclick = repf
    crep2.onclick = repv
    crep3.onclick = repf   
    imgind.src = "../../img/indice/carter/carter8.jpg"
    bsuiv.addEventListener('click',quest9)

    nquest.textContent = "Question 8"
    quest.textContent = "Selon Sam, le fait que ses organes reproducteurs soient situés a l'intérieur de son corps de signifie pas :"
    idrep1.textContent = "Qu'elle est capitaine" 
    idrep2.textContent = "Qu'elle est inférieure"
    idrep3.textContent = "Qu'elle est belle"
}

//----QUESTION 9---------------------------------------------------------------------------------------------------//

function quest9 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    crep1.checked = false
    crep2.checked = false
    crep3.checked = false
    crep1.onclick = repv
    crep2.onclick = repf
    crep3.onclick = repf  
    imgind.src = "../../img/indice/carter/carter9.jpg"
    bsuiv.addEventListener('click',quest10)

    nquest.textContent = "Question 9"
    quest.textContent = "Quel scientifique alergique au citron tombe amoureux de Sam ?"
    idrep1.textContent = "Rodney Mckay" 
    idrep2.textContent = "Jay Felger"
    idrep3.textContent = "Orlin"
}

//----QUESTION 10---------------------------------------------------------------------------------------------------//

function quest10 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    crep1.checked = false
    crep2.checked = false
    crep3.checked = false
    crep1.onclick = repf
    crep2.onclick = repf
    crep3.onclick = repv  
    imgind.src = "../../img/indice/carter/carter10.jpg"
    bsuiv.addEventListener('click',result)

    nquest.textContent = "Question 10"
    quest.textContent = "Quelle est la couleur de la robe de sam dans l'épisode 'dimension parallèle' ?"
    idrep1.textContent = "Bleu" 
    idrep2.textContent = "Rouge"
    idrep3.textContent = "Noire"
}

//----RESULTAT---------------------------------------------------------------------------------------------------//

function result () {
    
    rvf.remove()
    idrep1.remove()
    idrep2.remove()
    idrep3.remove()
    crep1.remove()
    crep2.remove()
    crep3.remove()
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

    if(nomjgo == localStorage.getItem('joueurgo1')){localStorage.setItem('scorej1sgc',score)}    
    if(nomjgo == localStorage.getItem('joueurgo2')){localStorage.setItem('scorej2sgc',score)}    
    if(nomjgo == localStorage.getItem('joueurgo3')){localStorage.setItem('scorej3sgc',score)}

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