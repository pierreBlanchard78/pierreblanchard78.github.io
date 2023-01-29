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

const otrep1 = document.getElementById('otrep1')
const otrep2 = document.getElementById('otrep2')
const otrep3 = document.getElementById('otrep3')

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
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repf
    otrep2.onclick = repf
    otrep3.onclick = repv      
    imgind.src = "../../img/indice/objets&technologies/objets&technologies1.jpg"
    bsuiv.addEventListener('click',quest2)

    nquest.textContent = "Question 1"
    quest.textContent = "Quelle est la prononciation du nom de l'arme de poing Goa'uld ?"
    idrep1.textContent = "Zak'tik'nel" 
    idrep2.textContent = "Zal'kin'tel"
    idrep3.textContent = "Zat'nik'tel"
}

//----QUESTION 2---------------------------------------------------------------------------------------------------//

function quest2 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repv
    otrep2.onclick = repf
    otrep3.onclick = repf 
    ind.style.visibility = "hidden"
    imgind.src = "../../img/indice/objets&technologies/objets&technologies2.jpg"
    bsuiv.addEventListener('click',quest3)

    nquest.textContent = "Question 2"
    quest.textContent = "Quelle est l'utilité du dispositif 'Clé de voûte' ?"
    idrep1.textContent = "Contrôler le climat"
    idrep2.textContent = "Faciliter l'agriculture"
    idrep3.textContent = "Combattre les Goa'uld"   
}

//----QUESTION 3---------------------------------------------------------------------------------------------------//

function quest3 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repf
    otrep2.onclick = repf
    otrep3.onclick = repv 
    imgind.src = "../../img/indice/objets&technologies/objets&technologies3.jpg"
    bsuiv.addEventListener('click',quest4)

    nquest.textContent = "Question 3"
    quest.textContent = "Quel est le nom du vaisseau Goa'uld de type bombardier ?"
    idrep1.textContent = "Ha'tak"
    idrep2.textContent = "Planeur de la mort"
    idrep3.textContent = "Al'kesh"
}  

//----QUESTION 4---------------------------------------------------------------------------------------------------//

function quest4 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repf
    otrep2.onclick = repv
    otrep3.onclick = repf 
    imgind.src = "../../img/indice/objets&technologies/objets&technologies4.jpg" 
    bsuiv.addEventListener('click',quest5)

    nquest.textContent = "Question 4"
    quest.textContent = "Dans l'épisode 'Invasion', les aliens ont un dispositif placé sur le torse. A quoi sert-il ?"
    idrep1.textContent = "A lire dans les pensées"
    idrep2.textContent = "A changer d'apparence"
    idrep3.textContent = "A devenir invisible"
}

//----QUESTION 5---------------------------------------------------------------------------------------------------//

function quest5 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repf
    otrep2.onclick = repv
    otrep3.onclick = repf 
    imgind.src = "../../img/indice/objets&technologies/objets&technologies5.jpg"
    bsuiv.addEventListener('click',quest6)

    nquest.textContent = "Question 5"
    quest.textContent = "Qu'est-ce que 'le Vengeur', mis au point par le Dr Felger ?"
    idrep1.textContent = "Un vaisseau spatial" 
    idrep2.textContent = "Un virus informatique"
    idrep3.textContent = "Une arme laser"
}

//----QUESTION 6---------------------------------------------------------------------------------------------------//

function quest6 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repv
    otrep2.onclick = repf
    otrep3.onclick = repf 
    imgind.src = "../../img/indice/objets&technologies/objets&technologies6.jpg"
    bsuiv.addEventListener('click',quest7)

    nquest.textContent = "Question 6"
    quest.textContent = "A quoi sert l'appareil que son inventeur Ma'chello utilise sur Daniel Jackson ?"
    idrep1.textContent = "Il interverti l'esprit de deux corps" 
    idrep2.textContent = "Il modifie L'ADN"
    idrep3.textContent = "A controler l'esprit"
}

//----QUESTION 7---------------------------------------------------------------------------------------------------//

function quest7 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repf
    otrep2.onclick = repv
    otrep3.onclick = repf 
    imgind.src = "../../img/indice/objets&technologies/objets&technologies7.jpg"
    bsuiv.addEventListener('click',quest8)

    nquest.textContent = "Question 7"
    quest.textContent = "A quoi ressemble le San Greal, ou saint-Graal ?"
    idrep1.textContent = "Une grande épée" 
    idrep2.textContent = "Un joyau rouge"
    idrep3.textContent = "Une coupe"
}

//----QUESTION 8---------------------------------------------------------------------------------------------------//

function quest8 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repf
    otrep2.onclick = repf
    otrep3.onclick = repv 
    imgind.src = "../../img/indice/objets&technologies/objets&technologies8.jpg"
    bsuiv.addEventListener('click',quest9)

    nquest.textContent = "Question 8"
    quest.textContent = "Quel est le sigle de l'extracteur de potentiel de point zero ?"
    idrep1.textContent = "EPZP" 
    idrep2.textContent = "E2PP"
    idrep3.textContent = "E2PZ"
}

//----QUESTION 9---------------------------------------------------------------------------------------------------//

function quest9 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repv
    otrep2.onclick = repf
    otrep3.onclick = repf 
    imgind.src = "../../img/indice/objets&technologies/objets&technologies9.jpg"
    bsuiv.addEventListener('click',quest10)

    nquest.textContent = "Question 9"
    quest.textContent = "Quel objet l'oncle de Daniel Jackson, Nicolas Ballard, a t-il regardé, qui l'a téléporté sur une autre planète ?"
    idrep1.textContent = "Un Crane de cristal" 
    idrep2.textContent = "Une statue"
    idrep3.textContent = "Un miroir"
}

//----QUESTION 10---------------------------------------------------------------------------------------------------//

function quest10 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    otrep1.checked = false
    otrep2.checked = false
    otrep3.checked = false
    otrep1.onclick = repf
    otrep2.onclick = repf
    otrep3.onclick = repv 
    imgind.src = "../../img/indice/objets&technologies/objets&technologies10.jpg"
    bsuiv.addEventListener('click',result)

    nquest.textContent = "Question 10"
    quest.textContent = "Comment nomme-ton les robots d'exploration envoyés par le SG-C ?"
    idrep1.textContent = "F.A.L.P." 
    idrep2.textContent = "T.A.R.C."
    idrep3.textContent = "M.A.L.P."
}

//----RESULTAT---------------------------------------------------------------------------------------------------//

function result () {

    rvf.remove()
    idrep1.remove()
    idrep2.remove()
    idrep3.remove()
    otrep1.remove()
    otrep2.remove()
    otrep3.remove()
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

    if(nomjgo == localStorage.getItem('joueurgo1')){localStorage.setItem('scorej1ot',score)}    
    if(nomjgo == localStorage.getItem('joueurgo2')){localStorage.setItem('scorej2ot',score)}    
    if(nomjgo == localStorage.getItem('joueurgo3')){localStorage.setItem('scorej3ot',score)}

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




