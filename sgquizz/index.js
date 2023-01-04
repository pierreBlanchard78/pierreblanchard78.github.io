//-----VARIABLES------------------------------------------------------------------------------------------------//
//-----CONSTANTES-----------------------------------------------------------------------------------------------//
//-----TABLE GRADES JOUEUR 1------------------------------------------------------------------------------------//
//-----TABLE GRADES JOUEUR 2------------------------------------------------------------------------------------//
//-----TABLE GRADES JOUEUR 3------------------------------------------------------------------------------------//
//-----CONSOLE LOGS---------------------------------------------------------------------------------------------//
//-----ANIMATION ARRIVEE ELEMENTS-------------------------------------------------------------------------------//
//-----ENREGISTREMENT NOM JOUEUR 1------------------------------------------------------------------------------//
//-----ENREGISTREMENT NOM JOUEUR 2------------------------------------------------------------------------------//
//-----ENREGISTREMENT NOM JOUEUR 3------------------------------------------------------------------------------//
//-----CHARGEMENT JOUEUR 1--------------------------------------------------------------------------------------//
//-----CHARGEMENT JOUEUR 2--------------------------------------------------------------------------------------//
//-----CHARGEMENT JOUEUR 3--------------------------------------------------------------------------------------//
//-----REMOVE---------------------------------------------------------------------------------------------------//
//-----REGLES---------------------------------------------------------------------------------------------------//
//-----FONCTIONNEMENT-------------------------------------------------------------------------------------------//
//-----THEME ECRANS---------------------------------------------------------------------------------------------//


//-----VARIABLES------------------------------------------------------------------------------------------------//
// NOM JOUEURS
let nom1 = localStorage.getItem('nouveau joueur1','nom1')
let nom2 = localStorage.getItem('nouveau joueur2','nom2')
let nom3 = localStorage.getItem('nouveau joueur3','nom3')
// GRADES JOUEURS
let gradej1 = 'Caporal'
let gradej2 = 'Caporal'
let gradej3 = 'Caporal'
// SCORE JOUEUR 1 SECTION 
let scorej1ot = localStorage.getItem('scorej1ot','score')
let scorej1p = localStorage.getItem('scorej1p','score')
let scorej1rp = localStorage.getItem('scorej1rp','score')
let scorej1g = localStorage.getItem('scorej1g','score')
let scorej1sgc = localStorage.getItem('scorej1sgc','score')
let scorej1sgt = localStorage.getItem('scorej1sgt','score')
let scorej1sgo = localStorage.getItem('scorej1sgo','score')
let scorej1sgj = localStorage.getItem('scorej1sgj','score')
// SCORE JOUEUR 2 SECTION
let scorej2ot = localStorage.getItem('scorej2ot','score')
let scorej2p = localStorage.getItem('scorej2p','score')
let scorej2rp = localStorage.getItem('scorej2rp','score')
let scorej2g = localStorage.getItem('scorej2g','score')
let scorej2sgc = localStorage.getItem('scorej2sgc','score')
let scorej2sgt = localStorage.getItem('scorej2sgt','score')
let scorej2sgo = localStorage.getItem('scorej2sgo','score')
let scorej2sgj = localStorage.getItem('scorej2sgj','score')
// SCORE JOUEUR 3 SECTION
let scorej3ot = localStorage.getItem('scorej3ot','score')
let scorej3p = localStorage.getItem('scorej3p','score')
let scorej3rp = localStorage.getItem('scorej3rp','score')
let scorej3g = localStorage.getItem('scorej3g','score')
let scorej3sgc = localStorage.getItem('scorej3sgc','score')
let scorej3sgt = localStorage.getItem('scorej3sgt','score')
let scorej3sgo = localStorage.getItem('scorej3sgo','score')
let scorej3sgj = localStorage.getItem('scorej3sgj','score')
//SCORE JOUEURS
let scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g) + Number(scorej1sgc) + Number(scorej1sgt) + Number(scorej1sgo) + Number(scorej1sgj)
let scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g) + Number(scorej2sgc) + Number(scorej2sgt) + Number(scorej2sgo) + Number(scorej2sgj)
let scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g) + Number(scorej3sgc) + Number(scorej3sgt) + Number(scorej3sgo) + Number(scorej3sgj)

//-----CONSTANTES------------------------------------------------------------------------------------------------//
// BODY
const body = document.getElementById('body')
// TITRE/SIGNATURE/EVENT
const titre = document.getElementById('titre')
const titre1 = document.getElementById('titre1')
const titre2 = document.getElementById('titre2')
const sign = document.getElementById('sign')
const sevent = document.getElementById('sevent')
// ECRANS
const ecran1 = document.getElementById('ecran1')
const ecran2 = document.getElementById('ecran2')
// BOUTONS ECRAN 1
const brem = document.getElementById('brem')
const ecreg = document.getElementById('ecreg')
const breg = document.getElementById('breg')
const brreg = document.getElementById('brreg')
const bth = document.getElementById('bth')
// BOUTONS ECRAN 1 PAGES FONCTIONNEMENT
const bfonc = document.getElementById('bfonc')
const bfon1 = document.getElementById('bfon1')
const bfon2 = document.getElementById('bfon2')
const bfon3 = document.getElementById('bfon3')
const bfon4 = document.getElementById('bfon4')
const bfon5 = document.getElementById('bfon5')
// PAGES FONCTIONNEMENT
const ecfon1 = document.getElementById('ecfon1')
const ecfon2 = document.getElementById('ecfon2')
const ecfon3 = document.getElementById('ecfon3')
const ecfon4 = document.getElementById('ecfon4')
// CASES NOMS TABLEAU
const j1 = document.getElementById('j1')
const j2 = document.getElementById('j2')
const j3 = document.getElementById('j3')
// CASES GRADE TABLEAU
const g1 = document.getElementById('g1')
const g2 = document.getElementById('g2')
const g3 = document.getElementById('g3')
// CASES POINTS JOUEURS
const pts1 = document.getElementById('pts1')
const pts2 = document.getElementById('pts2')
const pts3 = document.getElementById('pts3')
// BOUTONS CHARGEMENT JOUEURS
const baff1 = document.getElementById('baff1')
const baff2 = document.getElementById('baff2')
const baff3 = document.getElementById('baff3')
// ECRAN 2 DONNEES JOUEURS
const grd = document.getElementById('grd')
const jlauch = document.getElementById('jlauch')
const card = document.getElementById('card')
const cardj = document.createElement('img')
const logo = document.getElementById('logo')
// BOUTONS COMMENCER
const bcom1 = document.getElementById('bcom1')
const bcom2 = document.getElementById('bcom2')
const bcomm1 = document.getElementById('bcomm1')
const bcomm2 = document.getElementById('bcomm2')
const bcomm3 = document.getElementById('bcomm3')
const bcomm4 = document.getElementById('bcomm4')
// BOUTONS COMMENCER SG1
const bcommo = document.getElementById('bcommo')
const bcommj = document.getElementById('bcommj')
const bcommc = document.getElementById('bcommc')
const bcommt = document.getElementById('bcommt')
// IMAGE DECLASSIFIED
const imgdec1 = document.createElement('img')
const imgdec2 = document.createElement('img')
const imgdec3 = document.createElement('img')
const imgdec4 = document.createElement('img')
const imgdec5 = document.createElement('img')
const imgdec6 = document.createElement('img')
const imgdec7 = document.createElement('img')
const imgdec8 = document.createElement('img')

//-----TABLE GRADES JOUEUR 1------------------------------------------------------------------------------------//

if(scorej1 < 10){gradej1 = 'Caporal'}
if(scorej1 >= 10){gradej1 = 'Lieutenant'}
if(scorej1 >= 15){gradej1 = 'Capitaine'}
if(scorej1 >= 20){gradej1 = 'Major'}
if(scorej1 >= 30){gradej1 = 'Colonel'}
if(scorej1 == 40){gradej1 = 'General'}

//-----TABLE GRADES JOUEUR 2------------------------------------------------------------------------------------//

if(scorej2 < 10){gradej2 = 'Caporal'}
if(scorej2 >= 10){gradej2 = 'Lieutenant'}
if(scorej2 >= 15){gradej2 = 'Capitaine'}
if(scorej2 >= 20){gradej2 = 'Major'}
if(scorej2 >= 30){gradej2 = 'Colonel'}
if(scorej2 == 40){gradej2 = 'General'}

//-----TABLE GRADES JOUEUR 3------------------------------------------------------------------------------------//

if(scorej3 < 10){gradej3 = 'Caporal'}
if(scorej3 >= 10){gradej3 = 'Lieutenant'}
if(scorej3 >= 15){gradej3 = 'Capitaine'}
if(scorej3 >= 20){gradej3 = 'Major'}
if(scorej3 >= 30){gradej3 = 'Colonel'}
if(scorej3 == 40){gradej3 = 'General'}

//-----CONSOLE LOGS---------------------------------------------------------------------------------------------//

console.log('joueur 1 :' + '\u00a0' + localStorage.getItem('nouveau joueur1','nom1'))
console.log('joueur 2 :' + '\u00a0' + localStorage.getItem('nouveau joueur2','nom2'))
console.log('joueur 3 :' + '\u00a0' + localStorage.getItem('nouveau joueur3','nom3'))
console.log('grade joueur 1 :' + '\u00a0' +  gradej1)
console.log('grade joueur 2 :' + '\u00a0' +  gradej2)
console.log('grade joueur 3 :' + '\u00a0' +  gradej3)
console.log('score joueur 1 :' + '\u00a0' +  scorej1)
console.log('score joueur 2 :' + '\u00a0' +  scorej2)
console.log('score joueur 3 :' + '\u00a0' +  scorej3)
console.log('joueur chargé 1 :' + '\u00a0' + localStorage.getItem('joueurgo1'))
console.log('joueur chargé 2 :' + '\u00a0' + localStorage.getItem('joueurgo2'))
console.log('joueur chargé 3 :' + '\u00a0' + localStorage.getItem('joueurgo3'))
console.log(localStorage)

//-----ANIMATION ARRIVEE ELEMENTS-------------------------------------------------------------------------------//

titre.style.transform = 'translate(0%,-300%)'
setTimeout(() => {
  titre.style.transform = 'translate(0%,0%)'
  titre.style.transitionDuration = '0.5s'
}, 10)

bcom1.style.transform = 'translate(-300%,0%)'
setTimeout(() => {
  bcom1.style.transform = 'translate(0%,0%)'
  bcom1.style.transitionDuration = '0.5s'
}, 10)

bcom2.style.transform = 'translate(300%,0%)'
setTimeout(() => {
  bcom2.style.transform = 'translate(0%,0%)'
  bcom2.style.transitionDuration = '0.5s'
}, 10)

sign.style.transform = 'translate(0%,-300%)'
setTimeout(() => {
  sign.style.transform = 'translate(0%,0%)'
  sign.style.transitionDuration = '0.5s'
}, 1000)

ecran1.style.transform = 'translate(-300%,0%)'
setTimeout(() => {
  ecran1.style.transform = 'translate(0%,0%)'
  ecran1.style.transitionDuration = '0.5s'
}, 2000)

ecran2.style.transform = 'translate(300%,0%)'
setTimeout(() => {
  ecran2.style.transform = 'translate(0%,0%)'
  ecran2.style.transitionDuration = '0.5s'
}, 2000)

//-----ENREGISTREMENT NOM JOUEUR 1--------------------------------------------------------------------------------//

j1.addEventListener("click", () => {
  let nom1 = prompt ('Nouveau joueur (Nom de famille en majuscule de préférence)')
  j1.textContent = nom1
  j1.style.pointerEvents = 'none'
  g1.textContent = gradej1
  pts1.textContent = scorej1
  localStorage.setItem('nouveau joueur1',nom1,)
  localStorage.setItem('grade joueur1',gradej1,)
  baff1.style.visibility = 'visible'

  if(nom1 == 'BLANCHARD'){
    scorej1ot = 10
    scorej1p = 10
    scorej1rp = 10
    scorej1g = 10
    scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g)
    if(scorej1 == 40){gradej1 = 'General'}
    pts1.textContent = scorej1
    g1.textContent = gradej1
    }
  if(nom1 == "O'NEILL"){
    scorej1p = 10
    scorej1rp = 10
    scorej1g = 10
    scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g)
    if(scorej1 >= 30){gradej1 = 'Colonel'}
    if(scorej1 == 40){gradej1 = 'General'}
    pts1.textContent = scorej1
    g1.textContent = gradej1  
    }
  if(nom1 == 'JACKSON'){
    scorej1rp = 10
    scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g)
    pts1.textContent = scorej1
    g1.textContent = 'Civil'  
    }
  if(nom1 == 'CARTER'){
    scorej1ot = 10
    scorej1g = 10
    scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g)
    if(scorej1 >= 20){gradej1 = 'Major'}
    if(scorej1 >= 30){gradej1 = 'Colonel'}
    if(scorej1 == 40){gradej1 = 'General'}
    pts1.textContent = scorej1
    g1.textContent = gradej1 
    }
  if(nom1 == "TEAL'C"){
    scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g)
    pts1.textContent = scorej1
    gradej1 = 'CLASSIFIE'
    g1.textContent = 'CLASSIFIE'  
    }

  if(scorej1 == 40){
    titre1.style.color = 'transparent'
    titre1.style.textShadow = 'none'
    titre2.style.color = 'transparent'
    titre2.style.textShadow = 'none'
    sevent.style.visibility = 'visible'
    }
  console.log(scorej1ot)
  console.log(scorej1p)
  console.log(scorej1rp)
  console.log(scorej1g)
  console.log(scorej1)
})

//-----ENREGISTREMENT NOM JOUEUR 2--------------------------------------------------------------------------------//

j2.addEventListener("click", () => {
  let nom2 = prompt ('Nouveau joueur (Nom de famille en majuscule de préférence)')
  j2.textContent = nom2
  j2.style.pointerEvents = 'none'
  g2.textContent = gradej2
  pts2.textContent = scorej2
  localStorage.setItem('nouveau joueur2',nom2)
  localStorage.setItem('grade joueur2',gradej2,)
  baff2.style.visibility = 'visible'

  if(nom2 == 'BLANCHARD'){
    scorej2ot = 10
    scorej2p = 10
    scorej2rp = 10
    scorej2g = 10
    scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g)
    if(scorej2 == 40){gradej2 = 'General'}
    pts2.textContent = scorej2
    g2.textContent = gradej2
    }
  if(nom2 == "O'NEILL"){
    scorej2p = 10
    scorej2rp = 10
    scorej2g = 10
    scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g)
    if(scorej2 >= 30){gradej2 = 'Colonel'}
    if(scorej2 == 40){gradej2 = 'General'}
    pts2.textContent = scorej2
    g2.textContent = gradej2  
    }
  if(nom2 == 'JACKSON'){
    scorej2rp = 10
    scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g)
    pts2.textContent = scorej2
    g2.textContent = 'Civil'  
    }
  if(nom2 == 'CARTER'){
    scorej2ot = 10
    scorej2g = 10
    scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g)
    if(scorej2 >= 20){gradej2 = 'Major'}
    if(scorej2 >= 30){gradej2 = 'Colonel'}
    if(scorej2 == 40){gradej2 = 'General'}
    pts2.textContent = scorej2
    g2.textContent = gradej2  
    }
  if(nom2 == "TEAL'C"){
    scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g)
    pts2.textContent = scorej2
    g2.textContent = 'CLASSIFIE'  
    }

  if(scorej2 == 40){
    titre1.style.color = 'transparent'
    titre1.style.textShadow = 'none'
    titre2.style.color = 'transparent'
    titre2.style.textShadow = 'none'
    sevent.style.visibility = 'visible'
    }
})

//-----ENREGISTREMENT NOM JOUEUR 3--------------------------------------------------------------------------------//

j3.addEventListener("click", () => {
  let nom3 = prompt ('Nouveau joueur (Nom de famille en majuscule de préférence)')
  j3.textContent = nom3
  j3.style.pointerEvents = 'none'
  g3.textContent = gradej3
  pts3.textContent = scorej3
  localStorage.setItem('nouveau joueur3',nom3)
  localStorage.setItem('grade joueur3',gradej3,) 
  baff3.style.visibility = 'visible'

  if(nom3 == 'BLANCHARD'){
    scorej3ot = 10
    scorej3p = 10
    scorej3rp = 10
    scorej3g = 10
    scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g)
    if(scorej3 == 40){gradej3 = 'General'}
    pts3.textContent = scorej3
    g3.textContent = gradej3
    }
  if(nom3 == "O'NEILL"){
    scorej3p = 10
    scorej3rp = 10
    scorej3g = 10
    scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g)
    if(scorej3 >= 30){gradej3 = 'Colonel'}
    if(scorej3 == 40){gradej3 = 'General'}
    pts3.textContent = scorej3
    g3.textContent = gradej3  
    }
  if(nom3 == 'JACKSON'){
    scorej3rp = 10
    scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g)
    pts3.textContent = scorej3
    g3.textContent = 'Civil'  
    }
  if(nom3 == 'CARTER'){
    scorej3ot = 10
    scorej3g = 10
    scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g)
    if(scorej3 >= 20){gradej3 = 'Major'}
    if(scorej3 >= 30){gradej3 = 'Colonel'}
    if(scorej3 == 40){gradej3 = 'General'}
    pts3.textContent = scorej3
    g3.textContent = gradej3  
    }
  if(nom3 == "TEAL'C"){
    scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g)
    pts3.textContent = scorej3
    g3.textContent = 'CLASSIFIE'  
    }

  if(scorej3 == 40){
    titre1.style.color = 'transparent'
    titre1.style.textShadow = 'none'
    titre2.style.color = 'transparent'
    titre2.style.textShadow = 'none'
    sevent.style.visibility = 'visible'
    }
})

//-----CHARGEMENT JOUEUR 1-------------------------------------------------------------------------------------//

baff1.addEventListener('click', () => {
  let nom1 = localStorage.getItem('nouveau joueur1','nom1')
  if(jlauch == '','nom2', 'nom3'){
    localStorage.removeItem('joueurgo2')
    localStorage.removeItem('joueurgo3')
    localStorage.removeItem('grade joueurgo2')
    localStorage.removeItem('grade joueurgo3')
    jlauch.textContent = nom1
    grd.textContent = gradej1

    card.appendChild(cardj)
    cardj.style.height = '155px'
    cardj.style.marginTop = '15px'
    cardj.style.marginRight = '130px'
    cardj.style.marginLeft = '130px'
    logo.style.visibility = 'hidden'

    if(scorej1 < 10){cardj.src = 'img/card/capo.jpg'}   
    if(scorej1 >= 10){cardj.src = 'img/card/lieu.jpg'}    
    if(scorej1 >= 15){cardj.src = 'img/card/capi.jpg' }
    if(scorej1 >= 20){cardj.src = 'img/card/majo.jpg'}    
    if(scorej1 >= 30){cardj.src = 'img/card/colo.jpg'}
    if(scorej1 == 40){cardj.src = 'img/card/gene.jpg'}

    if(nom1 == 'BLANCHARD'){{cardj.src = 'img/card/blan.jpg'}}
    if(nom1 == "O'NEILL"){{cardj.src = 'img/card/oneill.jpg'}}
    if(nom1 == 'JACKSON'){{cardj.src = 'img/card/jackson.jpg'}}
    if(nom1 == 'CARTER'){{cardj.src = 'img/card/carter.jpg'}}
    if(nom1 == "TEAL'C"){{cardj.src = 'img/card/tealc.jpg'}}

    if(nom1 == "O'NEILL"){
      bcommo.style.visibility = 'visible'
      bcommo.style.pointerEvents = 'auto'
      bcommo.style.opacity = '100%'
      }
      else{
          bcommo.style.visibility = 'hidden'
          bcommo.style.pointerEvents = 'none'
          bcommo.style.opacity = '50%'
          }
    if(nom1 == 'JACKSON'){
      bcommj.style.visibility = 'visible'
      bcommj.style.pointerEvents = 'auto'
      bcommj.style.opacity = '100%'
      }
      else{
          bcommj.style.visibility = 'hidden'
          bcommj.style.pointerEvents = 'none'
          bcommj.style.opacity = '50%'
          }
    if(nom1 == 'CARTER'){
      bcommc.style.visibility = 'visible'
      bcommc.style.pointerEvents = 'auto'
      bcommc.style.opacity = '100%'
      }
      else{
          bcommc.style.visibility = 'hidden'
          bcommc.style.pointerEvents = 'none'
          bcommc.style.opacity = '50%'
          }
    if(nom1 == "TEAL'C"){
      bcommt.style.visibility = 'visible'
      bcommt.style.pointerEvents = 'auto'
      bcommt.style.opacity = '100%'
      }
      else{
          bcommt.style.visibility = 'hidden'
          bcommt.style.pointerEvents = 'none'
          bcommt.style.opacity = '50%'
          }
    localStorage.setItem('joueurgo1',nom1)
    localStorage.setItem('grade joueurgo1',gradej1)
  }

  if(scorej1ot >= 1){
    bcomm1.appendChild(imgdec1)
    imgdec1.src = 'img/declass.png'
    imgdec1.style.height = '73px'
    imgdec1.style.position = 'center'
    bcomm1.style.pointerEvents = "none"
    bcomm1.style.opacity = '50%'
    }
    else{        
        bcomm1.style.pointerEvents = "auto"
        bcomm1.style.opacity = '100%'
        imgdec1.remove()
        }

  if(scorej1p >= 1){
    bcomm2.appendChild(imgdec2)
    imgdec2.src = 'img/declass.png'
    imgdec2.style.height = '73px'
    imgdec2.style.position = 'center'
    bcomm2.style.pointerEvents = "none"
    bcomm2.style.opacity = '50%'
    }
    else{        
        bcomm2.style.pointerEvents = "auto"
        bcomm2.style.opacity = '100%'
        imgdec2.remove()
        }

  if(scorej1rp >= 1){
    bcomm3.appendChild(imgdec3)
    imgdec3.src = 'img/declass.png'
    imgdec3.style.height = '73px'
    imgdec3.style.position = 'center'
    bcomm3.style.pointerEvents = "none"
    bcomm3.style.opacity = '50%'
    }
    else{        
        bcomm3.style.pointerEvents = "auto"
        bcomm3.style.opacity = '100%'
        imgdec3.remove()
        }

  if(scorej1g >= 1){
    bcomm4.appendChild(imgdec4)
    imgdec4.src = 'img/declass.png'
    imgdec4.style.height = '73px'
    imgdec4.style.position = 'center'
    bcomm4.style.pointerEvents = "none"
    bcomm4.style.opacity = '50%'
    }  
    else{        
        bcomm4.style.pointerEvents = "auto"
        bcomm4.style.opacity = '100%'
        imgdec4.remove()
        }
  if(scorej1sgc == 10){
    bcommc.appendChild(imgdec5)
    imgdec5.src = 'img/declass.png'
    imgdec5.style.height = '73px'
    imgdec5.style.position = 'center'
    bcommc.style.pointerEvents = "none"
    bcommc.style.opacity = '50%'
    }
    else{        
        bcommc.style.pointerEvents = "auto"
        bcommc.style.opacity = '100%'
        imgdec5.remove()
        }
  if(scorej1sgt == 10){
    bcommt.appendChild(imgdec6)
    imgdec6.src = 'img/declass.png'
    imgdec6.style.height = '73px'
    imgdec6.style.position = 'center'
    bcommt.style.pointerEvents = "none"
    bcommt.style.opacity = '50%'
    }
    else{        
        bcommt.style.pointerEvents = "auto"
        bcommt.style.opacity = '100%'
        imgdec6.remove()
        }
  if(scorej1sgo == 10){
    bcommo.appendChild(imgdec7)
    imgdec7.src = 'img/declass.png'
    imgdec7.style.height = '73px'
    imgdec7.style.position = 'center'
    bcommo.style.pointerEvents = "none"
    bcommo.style.opacity = '50%'
    }
    else{        
        bcommo.style.pointerEvents = "auto"
        bcommo.style.opacity = '100%'
        imgdec7.remove()
        }
  if(scorej1sgj == 10){
    bcommj.appendChild(imgdec8)
    imgdec8.src = 'img/declass.png'
    imgdec8.style.height = '73px'
    imgdec8.style.position = 'center'
    bcommj.style.pointerEvents = "none"
    bcommj.style.opacity = '50%'
    }
    else{        
        bcommj.style.pointerEvents = "auto"
        bcommj.style.opacity = '100%'
        imgdec8.remove()
        }
  console.log('joueur chargé 1 :' + '\u00a0' + localStorage.getItem('joueurgo1'))
  console.log('joueur chargé 2 :' + '\u00a0' + localStorage.getItem('joueurgo2'))
  console.log('joueur chargé 3 :' + '\u00a0' + localStorage.getItem('joueurgo3'))
})

//-----CHARGEMENT JOUEUR 2-------------------------------------------------------------------------------------//

baff2.addEventListener('click', () => {
  let nom2 = localStorage.getItem('nouveau joueur2','nom2')
  if(jlauch == '','nom1','nom3'){
    localStorage.removeItem('joueurgo1')
    localStorage.removeItem('joueurgo3')
    localStorage.removeItem('grade joueurgo1')
    localStorage.removeItem('grade joueurgo3')
    jlauch.textContent = nom2
    grd.textContent = gradej2

    card.appendChild(cardj)
    cardj.style.height = '155px'
    cardj.style.marginTop = '15px'
    cardj.style.marginRight = '130px'
    cardj.style.marginLeft = '130px'
    logo.style.visibility = 'hidden'

    if(scorej2 < 10){cardj.src = 'img/card/capo.jpg'}   
    if(scorej2 >= 10){cardj.src = 'img/card/lieu.jpg'}    
    if(scorej2 >= 15){cardj.src = 'img/card/capi.jpg' }
    if(scorej2 >= 20){cardj.src = 'img/card/majo.jpg'}    
    if(scorej2 >= 30){cardj.src = 'img/card/colo.jpg'}
    if(scorej2 == 40){cardj.src = 'img/card/gene.jpg'}

    if(nom2 == 'BLANCHARD'){{cardj.src = 'img/card/blan.jpg'}}
    if(nom2 == "O'NEILL"){{cardj.src = 'img/card/oneill.jpg'}}
    if(nom2 == 'JACKSON'){{cardj.src = 'img/card/jackson.jpg'}}
    if(nom2 == 'CARTER'){{cardj.src = 'img/card/carter.jpg'}}
    if(nom2 == "CARTR1"){{cardj.src = 'sgg/img/cartr1.gif'}}
    if(nom2 == "TEAL'C"){{cardj.src = 'img/card/tealc.jpg'}}

    if(nom2 == "O'NEILL"){
      bcommo.style.visibility = 'visible'
      bcommo.style.pointerEvents = 'auto'
      bcommo.style.opacity = '100%'
      }
      else{
          bcommo.style.visibility = 'hidden'
          bcommo.style.pointerEvents = 'none'
          bcommo.style.opacity = '50%'
          }
    if(nom2 == 'JACKSON'){
      bcommj.style.visibility = 'visible'
      bcommj.style.pointerEvents = 'auto'
      bcommj.style.opacity = '100%'
      }
      else{
          bcommj.style.visibility = 'hidden'
          bcommj.style.pointerEvents = 'none'
          bcommj.style.opacity = '50%'
          }
    if(nom2 == 'CARTER'){
      bcommc.style.visibility = 'visible'
      bcommc.style.pointerEvents = 'auto'
      bcommc.style.opacity = '100%'
      }
      else{
          bcommc.style.visibility = 'hidden'
          bcommc.style.pointerEvents = 'none'
          bcommc.style.opacity = '50%'
          }
    if(nom2 == "TEAL'C"){
      bcommt.style.visibility = 'visible'
      bcommt.style.pointerEvents = 'auto'
      bcommt.style.opacity = '100%'
      }
      else{
          bcommt.style.visibility = 'hidden'
          bcommt.style.pointerEvents = 'none'
          bcommt.style.opacity = '50%'
          }
    localStorage.setItem('joueurgo2',nom2)
    localStorage.setItem('grade joueurgo2',gradej2)
  }

  if(scorej2ot >= 1){
    bcomm1.appendChild(imgdec1)
    imgdec1.src = 'img/declass.png'
    imgdec1.style.height = '73px'
    imgdec1.style.position = 'center'
    bcomm1.style.pointerEvents = "none"
    bcomm1.style.opacity = '50%'
    }
    else{        
        bcomm1.style.pointerEvents = "auto"
        bcomm1.style.opacity = '100%'
        imgdec1.remove()
        }

  if(scorej2p >= 1){
    bcomm2.appendChild(imgdec2)
    imgdec2.src = 'img/declass.png'
    imgdec2.style.height = '73px'
    imgdec2.style.position = 'center'
    bcomm2.style.pointerEvents = "none"
    bcomm2.style.opacity = '50%'
    }
    else{        
        bcomm2.style.pointerEvents = "auto"
        bcomm2.style.opacity = '100%'
        imgdec2.remove()
        }

  if(scorej2rp >= 1){
    bcomm3.appendChild(imgdec3)
    imgdec3.src = 'img/declass.png'
    imgdec3.style.height = '73px'
    imgdec3.style.position = 'center'
    bcomm3.style.pointerEvents = "none"
    bcomm3.style.opacity = '50%'
    }
    else{        
        bcomm3.style.pointerEvents = "auto"
        bcomm3.style.opacity = '100%'
        imgdec3.remove()
        }
    
  if(scorej2g >= 1){
    bcomm4.appendChild(imgdec4)
    imgdec4.src = 'img/declass.png'
    imgdec4.style.height = '73px'
    imgdec4.style.position = 'center'
    bcomm4.style.pointerEvents = "none"
    bcomm4.style.opacity = '50%'
    }
    else{        
        bcomm4.style.pointerEvents = "auto"
        bcomm4.style.opacity = '100%'
        imgdec4.remove()
        }

  if(scorej2sgc == 10){
    bcommc.appendChild(imgdec5)
    imgdec5.src = 'img/declass.png'
    imgdec5.style.height = '73px'
    imgdec5.style.position = 'center'
    bcommc.style.pointerEvents = "none"
    bcommc.style.opacity = '50%'
    }
    else{        
        bcommc.style.pointerEvents = "auto"
        bcommc.style.opacity = '100%'
        imgdec5.remove()
        }
  if(scorej2sgt == 10){
    bcommt.appendChild(imgdec6)
    imgdec6.src = 'img/declass.png'
    imgdec6.style.height = '73px'
    imgdec6.style.position = 'center'
    bcommt.style.pointerEvents = "none"
    bcommt.style.opacity = '50%'
    }
    else{        
        bcommt.style.pointerEvents = "auto"
        bcommt.style.opacity = '100%'
        imgdec6.remove()
        }
  if(scorej2sgo == 10){
    bcommo.appendChild(imgdec7)
    imgdec7.src = 'img/declass.png'
    imgdec7.style.height = '73px'
    imgdec7.style.position = 'center'
    bcommo.style.pointerEvents = "none"
    bcommo.style.opacity = '50%'
    }
    else{        
        bcommo.style.pointerEvents = "auto"
        bcommo.style.opacity = '100%'
        imgdec7.remove()
        }
  if(scorej2sgj == 10){
    bcommj.appendChild(imgdec8)
    imgdec8.src = 'img/declass.png'
    imgdec8.style.height = '73px'
    imgdec8.style.position = 'center'
    bcommj.style.pointerEvents = "none"
    bcommj.style.opacity = '50%'
    }
    else{        
        bcommj.style.pointerEvents = "auto"
        bcommj.style.opacity = '100%'
        imgdec8.remove()
        }
    console.log('joueur chargé 1 :' + '\u00a0' + localStorage.getItem('joueurgo1'))
    console.log('joueur chargé 2 :' + '\u00a0' + localStorage.getItem('joueurgo2'))
    console.log('joueur chargé 3 :' + '\u00a0' + localStorage.getItem('joueurgo3'))
})

//-----CHARGEMENT JOUEUR 3-------------------------------------------------------------------------------------//

baff3.addEventListener('click', () => {
  let nom3 = localStorage.getItem('nouveau joueur3','nom3')
  if(jlauch == '','nom1', 'nom2'){
    localStorage.removeItem('joueurgo1')
    localStorage.removeItem('joueurgo2')
    localStorage.removeItem('grade joueurgo1')
    localStorage.removeItem('grade joueurgo2')
    jlauch.textContent = nom3
    grd.textContent = gradej3

    card.appendChild(cardj)
    cardj.style.height = '155px'
    cardj.style.marginTop = '15px'
    cardj.style.marginRight = '130px'
    cardj.style.marginLeft = '130px'
    logo.style.visibility = 'hidden'

    if(scorej3 < 10){cardj.src = 'img/card/capo.jpg'}   
    if(scorej3 >= 10){cardj.src = 'img/card/lieu.jpg'}    
    if(scorej3 >= 15){cardj.src = 'img/card/capi.jpg' }
    if(scorej3 >= 20){cardj.src = 'img/card/majo.jpg'}    
    if(scorej3 >= 30){cardj.src = 'img/card/colo.jpg'}
    if(scorej3 == 40){cardj.src = 'img/card/gene.jpg'}

    if(nom3 == 'BLANCHARD'){{cardj.src = 'img/card/blan.jpg'}}
    if(nom3 == "O'NEILL"){{cardj.src = 'img/card/oneill.jpg'}}
    if(nom3 == 'JACKSON'){{cardj.src = 'img/card/jackson.jpg'}}
    if(nom3 == 'CARTER'){{cardj.src = 'img/card/carter.jpg'}}
    if(nom3 == "TEAL'C"){{cardj.src = 'img/card/tealc.jpg'}}

    if(nom3 == "O'NEILL"){
      bcommo.style.visibility = 'visible'
      bcommo.style.pointerEvents = 'auto'
      bcommo.style.opacity = '100%'
      }
      else{
          bcommo.style.visibility = 'hidden'
          bcommo.style.pointerEvents = 'none'
          bcommo.style.opacity = '50%'
          }
    if(nom3 == 'JACKSON'){
      bcommj.style.visibility = 'visible'
      bcommj.style.pointerEvents = 'auto'
      bcommj.style.opacity = '100%'
      }
      else{
          bcommj.style.visibility = 'hidden'
          bcommj.style.pointerEvents = 'none'
          bcommj.style.opacity = '50%'
          }
    if(nom3 == 'CARTER'){
      bcommc.style.visibility = 'visible'
      bcommc.style.pointerEvents = 'auto'
      bcommc.style.opacity = '100%'
      }
      else{
          bcommc.style.visibility = 'hidden'
          bcommc.style.pointerEvents = 'none'
          bcommc.style.opacity = '50%'
          }
    if(nom3 == "TEAL'C"){
      bcommt.style.visibility = 'visible'
      bcommt.style.pointerEvents = 'auto'
      bcommt.style.opacity = '100%'
      }
      else{
          bcommt.style.visibility = 'hidden'
          bcommt.style.pointerEvents = 'none'
          bcommt.style.opacity = '50%'
          }
    localStorage.setItem('joueurgo3',nom3)
    localStorage.setItem('grade joueurgo3',gradej3)
  }

  if(scorej3ot >= 1){
    bcomm1.appendChild(imgdec1)
    imgdec1.src = 'img/declass.png'
    imgdec1.style.height = '73px'
    imgdec1.style.position = 'center'
    bcomm1.style.pointerEvents = "none"
    bcomm1.style.opacity = '50%'
    }
    else{        
        bcomm1.style.pointerEvents = "auto"
        bcomm1.style.opacity = '100%'
        imgdec1.remove()
        }

  if(scorej3p >= 1){
    bcomm2.appendChild(imgdec2)
    imgdec2.src = 'img/declass.png'
    imgdec2.style.height = '73px'
    imgdec2.style.position = 'center'
    bcomm2.style.pointerEvents = "none"
    bcomm2.style.opacity = '50%'
    }
    else{        
        bcomm2.style.pointerEvents = "auto"
        bcomm2.style.opacity = '100%'
        imgdec2.remove()
        }

  if(scorej3rp >= 1){
    bcomm3.appendChild(imgdec3)
    imgdec3.src = 'img/declass.png'
    imgdec3.style.height = '73px'
    imgdec3.style.position = 'center'
    bcomm3.style.pointerEvents = "none"
    bcomm3.style.opacity = '50%'
    }
    else{        
        bcomm3.style.pointerEvents = "auto"
        bcomm3.style.opacity = '100%'
        imgdec3.remove()
        }
  
  if(scorej3g >= 1){
    bcomm4.appendChild(imgdec4)
    imgdec4.src = 'img/declass.png'
    imgdec4.style.height = '73px'
    imgdec4.style.position = 'center'
    bcomm4.style.pointerEvents = "none"
    bcomm4.style.opacity = '50%'
    }
    else{        
        bcomm4.style.pointerEvents = "auto"
        bcomm4.style.opacity = '100%'
        imgdec4.remove()
        }
          
  if(scorej3sgc == 10){
    bcommc.appendChild(imgdec5)
    imgdec5.src = 'img/declass.png'
    imgdec5.style.height = '73px'
    imgdec5.style.position = 'center'
    bcommc.style.pointerEvents = "none"
    bcommc.style.opacity = '50%'
    }
    else{        
        bcommc.style.pointerEvents = "auto"
        bcommc.style.opacity = '100%'
        imgdec5.remove()
        }
  if(scorej3sgt == 10){
    bcommt.appendChild(imgdec6)
    imgdec6.src = 'img/declass.png'
    imgdec6.style.height = '73px'
    imgdec6.style.position = 'center'
    bcommt.style.pointerEvents = "none"
    bcommt.style.opacity = '50%'
    }
    else{        
        bcommt.style.pointerEvents = "auto"
        bcommt.style.opacity = '100%'
        imgdec6.remove()
        }
  if(scorej3sgo == 10){
    bcommo.appendChild(imgdec7)
    imgdec7.src = 'img/declass.png'
    imgdec7.style.height = '73px'
    imgdec7.style.position = 'center'
    bcommo.style.pointerEvents = "none"
    bcommo.style.opacity = '50%'
    }
    else{        
        bcommo.style.pointerEvents = "auto"
        bcommo.style.opacity = '100%'
        imgdec7.remove()
        }
  if(scorej3sgj == 10){
    bcommj.appendChild(imgdec8)
    imgdec8.src = 'img/declass.png'
    imgdec8.style.height = '73px'
    imgdec8.style.position = 'center'
    bcommj.style.pointerEvents = "none"
    bcommj.style.opacity = '50%'
    }
    else{        
        bcommj.style.pointerEvents = "auto"
        bcommj.style.opacity = '100%'
        imgdec8.remove()
        }
    console.log('joueur chargé 1 :' + '\u00a0' + localStorage.getItem('joueurgo1'))
    console.log('joueur chargé 2 :' + '\u00a0' + localStorage.getItem('joueurgo2'))
    console.log('joueur chargé 3 :' + '\u00a0' + localStorage.getItem('joueurgo3'))
})

//-----REMOVE------------------------------------------------------------------------------------------------//

brem.addEventListener('click', ()=> {
  localStorage.clear()
  cardj.remove()
  logo.style.visibility = 'visible'
  imgdec1.remove()
  imgdec2.remove()
  imgdec3.remove()
  imgdec4.remove()

  titre1.style.color = 'black'
  titre1.style.textShadow = '3px 3px 3px cyan'
  titre2.style.color = 'black'
  titre2.style.textShadow = '3px 3px 3px cyan'
  // sevent.style.visibility = 'hidden'

  bcomm1.style.pointerEvents = 'none'
  bcomm1.style.opacity = '50%'

  bcomm2.style.pointerEvents = 'none'
  bcomm2.style.opacity = '50%'

  bcomm3.style.pointerEvents = 'none'
  bcomm3.style.opacity = '50%'

  bcomm4.style.pointerEvents = 'none'
  bcomm4.style.opacity = '50%'

  bcommo.style.visibility = 'hidden'
  bcommo.style.pointerEvents = 'none'

  bcommj.style.visibility = 'hidden'
  bcommj.style.pointerEvents = 'none'

  bcommc.style.visibility = 'hidden'
  bcommc.style.pointerEvents = 'none'

  bcommt.style.visibility = 'hidden'
  bcommt.style.pointerEvents = 'none'

  baff1.style.visibility = 'hidden'
  baff2.style.visibility = 'hidden'
  baff3.style.visibility = 'hidden'

  j1.textContent = 'NouveauJoueur'
  j1.style.pointerEvents = 'auto'
  j2.textContent = 'NouveauJoueur'
  j2.style.pointerEvents = 'auto'
  j3.textContent = 'NouveauJoueur'
  j3.style.pointerEvents = 'auto'
  g1.textContent = '>'
  g2.textContent = '>'
  g3.textContent = '>'
  pts1.textContent = '>'
  pts2.textContent = '>'
  pts3.textContent = '>'
  grd.textContent = ''
  jlauch.textContent = ''

  gradej1 = 'Caporal'
  gradej2 = 'Caporal'
  gradej3 = 'Caporal'

  scorej1 = 0
  scorej2 = 0
  scorej3 = 0

  scorej1ot = 0
  scorej1p = 0
  scorej1rp = 0
  scorej1g = 0

  scorej2ot = 0
  scorej2p = 0
  scorej2rp = 0
  scorej2g = 0

  scorej3ot = 0
  scorej3p = 0
  scorej3rp = 0
  scorej3g = 0

  console.log('joueur 1 :' + '\u00a0' + localStorage.getItem('nouveau joueur1','nom1'))
  console.log('joueur 2 :' + '\u00a0' + localStorage.getItem('nouveau joueur2','nom2'))
  console.log('joueur 3 :' + '\u00a0' + localStorage.getItem('nouveau joueur3','nom3'))
  console.log('grade joueur 1 :' + '\u00a0' +  gradej1)
  console.log('grade joueur 2 :' + '\u00a0' +  gradej2)
  console.log('grade joueur 3 :' + '\u00a0' +  gradej3)
  console.log('score joueur 1 :' + '\u00a0' +  scorej1)
  console.log('score joueur 2 :' + '\u00a0' +  scorej2)
  console.log('score joueur 3 :' + '\u00a0' +  scorej3)
  console.log('joueur chargé 1 :' + '\u00a0' + localStorage.getItem('joueurgo1'))
  console.log('joueur chargé 2 :' + '\u00a0' + localStorage.getItem('joueurgo2'))
  console.log('joueur chargé 3 :' + '\u00a0' + localStorage.getItem('joueurgo3'))
  console.log(localStorage)
})

//-----REGLES------------------------------------------------------------------------------------------------//

breg.addEventListener('click', () => {
  if (ecreg.style.visibility === "visible"){ecreg.style.visibility = "hidden"}
	else{ecreg.style.visibility = 'visible'}
})

brreg.addEventListener('click', () => {
  if (ecreg.style.visibility === "hidden"){ecreg.style.visibility = "visible"}
	else{ecreg.style.visibility = "hidden"}
})

//-----FONCTIONNEMENT-----------------------------------------------------------------------------------------//

bfonc.addEventListener('click', () => {
  if (ecfon1.style.visibility === "visible"){
		ecfon1.style.visibility = "hidden"}
	else{ecfon1.style.visibility = "visible"}
})

bfon1.addEventListener('click', () => {
	ecfon1.style.visibility = "hidden"
})

bfon2.addEventListener('click', () => {
  ecfon2.style.visibility = "visible"
})

bfon3.addEventListener('click', () => {
	ecfon3.style.visibility = "visible"
  ecfon2.style.visibility = "hidden"
})

bfon4.addEventListener('click', () => {
	ecfon4.style.visibility = "visible"
  ecfon3.style.visibility = "hidden"
})

bfon5.addEventListener('click', () => {
  ecfon1.style.visibility = "visible"
  ecfon2.style.visibility = "hidden"
  ecfon3.style.visibility = "hidden"
  ecfon4.style.visibility = "hidden"
})

//-----THEME ECRANS-----------------------------------------------------------------------------------------------//

bth.addEventListener('click',() => {
  if(ecran1.style.color === 'white'){

  ecran1.style.background = 'black'
  ecran1.style.color = 'green'

  brem.style.color = 'green'

  ecreg.style.background = 'black'
  ecreg.style.color = 'green'
  breg.style.color = 'green'

  brreg.style.background = 'black'
  brreg.style.border = 'black'
  brreg.style.color = 'green'

  ecfon1.style.background = 'black'
  ecfon1.style.color = 'green'
  ecfon2.style.background = 'black'
  ecfon2.style.color = 'green'
  ecfon3.style.background = 'black'
  ecfon3.style.color = 'green'
  ecfon4.style.background = 'black'
  ecfon4.style.color = 'green'

  bfonc.style.color = 'green'

  bfon1.style.background = 'black'
  bfon1.style.border = 'black'
  bfon1.style.color = 'green'

  bfon2.style.background = 'black'
  bfon2.style.border = 'black'
  bfon2.style.color = 'green'

  bfon3.style.background = 'black'
  bfon3.style.border = 'black'
  bfon3.style.color = 'green'

  bfon4.style.background = 'black'
  bfon4.style.border = 'black'
  bfon4.style.color = 'green'

  bfon5.style.background = 'black'
  bfon5.style.border = 'black'
  bfon5.style.color = 'green'

  bth.style.color = 'green'

  baff1.style.color = 'green'
  baff2.style.color = 'green'
  baff3.style.color = 'green'

  ecran2.style.color = 'green'
  ecran2.style.background = 'black'

  baff1.onmouseover = function(){baff1.style.color = "red";}
  baff1.onmouseout = function(){baff1.style.color = "green";}
  
  baff2.onmouseover = function(){baff2.style.color = "red";}
  baff2.onmouseout = function(){baff2.style.color = "green";}
  
  baff3.onmouseover = function(){baff3.style.color = "red";}
  baff3.onmouseout = function(){baff3.style.color = "green";}
  
  brem.onmouseover = function(){brem.style.color = "red";}
  brem.onmouseout = function(){brem.style.color = "green";}

  breg.onmouseover = function(){breg.style.color = "red";}
  breg.onmouseout = function(){breg.style.color = "green";}
  
  brreg.onmouseover = function(){brreg.style.color = "red";}
  brreg.onmouseout = function(){brreg.style.color = "green";}

  bfonc.onmouseover = function(){bfonc.style.color = "red";}
  bfonc.onmouseout = function(){bfonc.style.color = "green";}

  bfon1.onmouseover = function(){bfon1.style.color = "red";}
  bfon1.onmouseout = function(){bfon1.style.color = "green";}

  bfon2.onmouseover = function(){bfon2.style.color = "red";}
  bfon2.onmouseout = function(){bfon2.style.color = "green";}

  bfon3.onmouseover = function(){bfon3.style.color = "red";}
  bfon3.onmouseout = function(){bfon3.style.color = "green";}

  bfon4.onmouseover = function(){bfon4.style.color = "red";}
  bfon4.onmouseout = function(){bfon4.style.color = "green";}

  bfon5.onmouseover = function(){bfon5.style.color = "red";}
  bfon5.onmouseout = function(){bfon5.style.color = "green";}
  
  bth.onmouseover = function(){bth.style.color = "red";}
  bth.onmouseout = function(){bth.style.color = "green";} 
  }
  else{
    ecran1.style.color = 'white'
    ecran1.style.background = 'skyblue'

    brem.style.color = 'white'

    ecreg.style.background = 'skyblue'
    ecreg.style.color = 'white'
    breg.style.color = 'white'

    brreg.style.background = 'skyblue'
    brreg.style.border = 'none'
    brreg.style.color = 'white'

    ecfon1.style.background = 'skyblue'
    ecfon1.style.color = 'white'
    ecfon2.style.background = 'skyblue'
    ecfon2.style.color = 'white'
    ecfon3.style.background = 'skyblue'
    ecfon3.style.color = 'white'
    ecfon4.style.background = 'skyblue'
    ecfon4.style.color = 'white'

    bfonc.style.color = 'white'

    bfon1.style.background = 'skyblue'
    bfon1.style.border = 'skyblue'
    bfon1.style.color = 'white'

    bfon2.style.background = 'skyblue'
    bfon2.style.border = 'skyblue'
    bfon2.style.color = 'white'

    bfon3.style.background = 'skyblue'
    bfon3.style.border = 'skyblue'
    bfon3.style.color = 'white'

    bfon4.style.background = 'skyblue'
    bfon4.style.border = 'skyblue'
    bfon4.style.color = 'white'

    bfon5.style.background = 'skyblue'
    bfon5.style.border = 'skyblue'
    bfon5.style.color = 'white'
    
    bth.style.color = 'white'

    baff1.style.color = 'white'
    baff2.style.color = 'white'
    baff3.style.color = 'white'

    ecran2.style.color = 'white'
    ecran2.style.background = 'skyblue'

    
    baff1.onmouseover = function(){baff1.style.color = "red";}
    baff1.onmouseout = function(){baff1.style.color = "white";}

    baff2.onmouseover = function(){baff2.style.color = "red";}
    baff2.onmouseout = function(){baff2.style.color = "white";}
    
    baff3.onmouseover = function(){baff3.style.color = "red";}
    baff3.onmouseout = function(){baff3.style.color = "white";}
    
    brem.onmouseover = function(){brem.style.color = "red";}
    brem.onmouseout = function(){brem.style.color = "white";}

    breg.onmouseover = function(){breg.style.color = "red";}
    breg.onmouseout = function(){breg.style.color = "white";}
    
    brreg.onmouseover = function(){brreg.style.color = "red";}
    brreg.onmouseout = function(){brreg.style.color = "white";}
    
    bfonc.onmouseover = function(){bfonc.style.color = "red";}
    bfonc.onmouseout = function(){bfonc.style.color = "white";}
    
    bfon1.onmouseover = function(){bfon1.style.color = "red";}
    bfon1.onmouseout = function(){bfon1.style.color = "white";}
    
    bfon2.onmouseover = function(){bfon2.style.color = "red";}
    bfon2.onmouseout = function(){bfon2.style.color = "white";}
    
    bfon3.onmouseover = function(){bfon3.style.color = "red";}
    bfon3.onmouseout = function(){bfon3.style.color = "white";}
    
    bfon4.onmouseover = function(){bfon4.style.color = "red";}
    bfon4.onmouseout = function(){bfon4.style.color = "white";}
    
    bfon5.onmouseover = function(){bfon5.style.color = "red";}
    bfon5.onmouseout = function(){bfon5.style.color = "white";}
    
    bth.onmouseover = function(){bth.style.color = "red";}
    bth.onmouseout = function(){bth.style.color = "white";}
  }
})









