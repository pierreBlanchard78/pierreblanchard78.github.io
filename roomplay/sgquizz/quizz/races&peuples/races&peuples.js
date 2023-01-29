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

const rprep1 = document.getElementById('rprep1')
const rprep2 = document.getElementById('rprep2')
const rprep3 = document.getElementById('rprep3')

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

//----REPONSE VRAI--------------------------------------------------------------------------------------------------//

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

//----REPONSE FAUSSE------------------------------------------------------------------------------------------------//

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

//----QUESTION 1---------------------------------------------------------------------------------------------------//

function quest1 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    rprep1.checked = false
    rprep2.checked = false
    rprep3.checked = false
    rprep1.onclick = repf
    rprep2.onclick = repf
    rprep3.onclick = repv           
    imgind.src = "../../img/indice/races&peuples/races&peuples1.jpg"
    bsuiv.addEventListener('click',quest2)

    nquest.textContent = "Question 1"
    quest.textContent = "Quelle est la race connue pour maitriser l'invisibilité ?"
    idrep1.textContent = "Les Goa'uld" 
    idrep2.textContent = "Les Kelownien"
    idrep3.textContent = "Les Nox"
}

//----QUESTION 2---------------------------------------------------------------------------------------------------//

    function quest2 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        rprep1.checked = false
        rprep2.checked = false
        rprep3.checked = false
        rprep1.onclick = repf
        rprep2.onclick = repv
        rprep3.onclick = repf  
        ind.style.visibility = "hidden"    
        imgind.src = "../../img/indice/races&peuples/races&peuples2.jpg"
        bsuiv.addEventListener('click',quest3)

        nquest.textContent = "Question 2"
        quest.textContent = "Quelle espèce? invisible a l'oeil nu, a pour projet l'élimination de tout les hôtes des Goa'uld ?"
        idrep1.textContent = "Les Nox"
        idrep2.textContent = "Les Reetous"
        idrep3.textContent = "Les Asgards"   
    }

//----QUESTION 3---------------------------------------------------------------------------------------------------//

    function quest3 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        rprep1.checked = false
        rprep2.checked = false
        rprep3.checked = false
        rprep1.onclick = repv
        rprep2.onclick = repf
        rprep3.onclick = repf       
        imgind.src = "../../img/indice/races&peuples/races&peuples3.jpg"
        bsuiv.addEventListener('click',quest4)

        nquest.textContent = "Question 3"
        quest.textContent = "Quel peuple, bien que similaire au Goa'uld, cherche a abattre leur système de domination ?"
        idrep1.textContent = "La Tok'Ra"
        idrep2.textContent = "Les réplicateurs"
        idrep3.textContent = "Les Oris"
    }  

//----QUESTION 4---------------------------------------------------------------------------------------------------//

    function quest4 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        rprep1.checked = false
        rprep2.checked = false
        rprep3.checked = false
        rprep1.onclick = repf
        rprep2.onclick = repf
        rprep3.onclick = repv      
        imgind.src = "../../img/indice/races&peuples/races&peuples4.jpg"       
        bsuiv.addEventListener('click',quest5)

        nquest.textContent = "Question 4"
        quest.textContent = "A quelle race appartient le mystérieux lieutenant Tyler, de l'épisode 'Le cinquième homme' ?"
        idrep1.textContent = "Les Furlings"
        idrep2.textContent = "Les Eurondiens"
        idrep3.textContent = "Les Réols"
    }

//----QUESTION 5---------------------------------------------------------------------------------------------------//

    function quest5 () {
        rvf.textContent = ""
        rvf.style.border = 'none'
        mf.style.pointerEvents = 'auto'
        bsuiv.style.pointerEvents = 'none'
        rprep1.checked = false
        rprep2.checked = false
        rprep3.checked = false
        rprep1.onclick = repf
        rprep2.onclick = repv
        rprep3.onclick = repf       
        imgind.src = "../../img/indice/races&peuples/races&peuples5.jpg"
        bsuiv.addEventListener('click',quest6)

        nquest.textContent = "Question 5"
        quest.textContent = "Quelle race tente d'anéantir la terre par la stérilisation de sa population ?"
        idrep1.textContent = "Les Gadmeers" 
        idrep2.textContent = "Les Aschens"
        idrep3.textContent = "Les Jaffas"
    }

//----QUESTION 6---------------------------------------------------------------------------------------------------//

function quest6 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    rprep1.checked = false
    rprep2.checked = false
    rprep3.checked = false
    rprep1.onclick = repv
    rprep2.onclick = repf
    rprep3.onclick = repf   
    imgind.src = "../../img/indice/races&peuples/races&peuples6.jpg"
    bsuiv.addEventListener('click',quest7)

    nquest.textContent = "Question 6"
    quest.textContent = "A quelle race appartient Ayiana ?"
    idrep1.textContent = "Les Anciens" 
    idrep2.textContent = "Le peuple de Tagrea"
    idrep3.textContent = "Les Nox"
}

//----QUESTION 7---------------------------------------------------------------------------------------------------//

function quest7 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    rprep1.checked = false
    rprep2.checked = false
    rprep3.checked = false
    rprep1.onclick = repf
    rprep2.onclick = repf
    rprep3.onclick = repv    
    imgind.src = "../../img/indice/races&peuples/races&peuples7.jpg"
    bsuiv.addEventListener('click',quest8)

    nquest.textContent = "Question 7"
    quest.textContent = "Quelle sont les deux races organisant des courses de vaisseaux dans leur système ?"
    idrep1.textContent = "Les Asgard et les Abydossiens" 
    idrep2.textContent = "Les Goa'uld et la Tok'Ra"
    idrep3.textContent = "Les Serrakins et les Hébridiens"
}

//----QUESTION 8---------------------------------------------------------------------------------------------------//

function quest8 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    rprep1.checked = false
    rprep2.checked = false
    rprep3.checked = false
    rprep1.onclick = repf
    rprep2.onclick = repv
    rprep3.onclick = repf    
    imgind.src = "../../img/indice/races&peuples/races&peuples8.jpg"
    bsuiv.addEventListener('click',quest9)

    nquest.textContent = "Question 8"
    quest.textContent = "Quel race protège les cimmériens grâce a L'Œil de pierre ?"
    idrep1.textContent = "Les Nox" 
    idrep2.textContent = "Les Asgards"
    idrep3.textContent = "Les Anciens"
}

//----QUESTION 9---------------------------------------------------------------------------------------------------//

function quest9 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    rprep1.checked = false
    rprep2.checked = false
    rprep3.checked = false
    rprep1.onclick = repf
    rprep2.onclick = repv
    rprep3.onclick = repf   
    imgind.src = "../../img/indice/races&peuples/races&peuples9.jpg"
    bsuiv.addEventListener('click',quest10)

    nquest.textContent = "Question 9"
    quest.textContent = "Quel peuple a inventé la trétonine ?"
    idrep1.textContent = "Les Bedrosiens" 
    idrep2.textContent = "Les Pangariens"
    idrep3.textContent = "Les Unas"
}

//----QUESTION 10---------------------------------------------------------------------------------------------------//

function quest10 () {
    rvf.textContent = ""
    rvf.style.border = 'none'
    mf.style.pointerEvents = 'auto'
    bsuiv.style.pointerEvents = 'none'
    rprep1.checked = false
    rprep2.checked = false
    rprep3.checked = false
    rprep1.onclick = repv
    rprep2.onclick = repf
    rprep3.onclick = repf   
    imgind.src = "../../img/indice/races&peuples/races&peuples10.jpg"
    bsuiv.addEventListener('click',result)

    nquest.textContent = "Question 10"
    quest.textContent = "Quel peuple, sensible a la lumière du soleil, SG-1 aide t-il a s'installer sur une planète au conditions propices ?"
    idrep1.textContent = "Les Enkarans" 
    idrep2.textContent = "Les Abydossiens"
    idrep3.textContent = "Les Réplicateurs"
}

//----RESULTAT---------------------------------------------------------------------------------------------------//

function result () {
    
    rvf.remove()
    idrep1.remove()
    idrep2.remove()
    idrep3.remove()
    rprep1.remove()
    rprep2.remove()
    rprep3.remove()
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

    if(nomjgo == localStorage.getItem('joueurgo1')){localStorage.setItem('scorej1rp',score)}    
    if(nomjgo == localStorage.getItem('joueurgo2')){localStorage.setItem('scorej2rp',score)}    
    if(nomjgo == localStorage.getItem('joueurgo3')){localStorage.setItem('scorej3rp',score)}

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