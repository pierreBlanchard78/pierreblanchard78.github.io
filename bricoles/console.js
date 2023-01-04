const j1 = document.querySelector('#j1')
const j2 = document.querySelector('#j2')
const j3 = document.querySelector('#j3')

const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')
const s3 = document.getElementById('s3')

const bcj1 = document.querySelector('#bcj1')
const bcj2 = document.querySelector('#bcj2')
const bcj3 = document.querySelector('#bcj3')

const bte = document.querySelector('#bte')
const btr = document.querySelector('#btr')
const btf = document.querySelector('#btf')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')

const ecran = document.querySelector('#ecran')
const affich = document.querySelector('#affich')

//-----CONSOLE-------------------------------------------------------------------------------------------------------//

// ENTREE NOM

j1.addEventListener('click', () => {
    let nom1 = prompt ('Entrez nom')
    j1.textContent = nom1
    j1.style.pointerEvents = 'none'
    console.log(j1.textContent)
})

j2.addEventListener('click', () => {
    let nom2 = prompt ('Entrez nom')
    j2.textContent = nom2
    j2.style.pointerEvents = 'none'
})

j3.addEventListener('click', () => {
    let nom3 = prompt ('Entrez nom')
    j3.textContent = nom3
    j3.style.pointerEvents = 'none'
})

// BOUTONS CHARGER

bcj1.addEventListener('click', ()=> {
    let nom1 = j1.textContent
    if(j1.textContent == nom1)
    {
        affich.textContent = nom1
    }
})
bcj2.addEventListener('click', ()=> {
    let nom2 = j2.textContent
    if(j2.textContent == nom2)
    {
        affich.textContent = nom2
    }
})
bcj3.addEventListener('click', ()=> {
    let nom3 = j3.textContent
    if(j3.textContent == nom3)
    {
        affich.textContent = nom3
    }
})

// BOUTON ECRAN

bte.addEventListener('click', () => {
    if(ecran.style.top === '40px'){
        ecran.style.top = '330px'
        ecran.style.boxShadow = 'none'
    }
    else{
        ecran.style.boxShadow = '0px 0px 50px lightcyan'
        ecran.style.top = '40px'
        ecran.style.background ='rgba(80, 221, 179, 0.300)'
        ecran.style.fontFamily = 'sairai'
        ecran.style.color = 'gold'
        ecran.style.textShadow = '3px 3px 3px brown'

        bcj1.style.color = 'gold'
        bcj1.style.textShadow = '3px 3px 3px brown'
        bcj1.style.fontFamily = 'sairai'
        bcj2.style.color = 'gold'
        bcj2.style.textShadow = '3px 3px 3px brown'
        bcj2.style.fontFamily = 'sairai'
        bcj3.style.color = 'gold'
        bcj3.style.textShadow = '3px 3px 3px brown'
        bcj3.style.fontFamily = 'sairai'
    }
})
// BOUTON RESET

btr.addEventListener('click', ()=> {
    j1.textContent = 'NouveauJoueur'
    j1.style.pointerEvents = 'auto'
    j2.textContent = 'NouveauJoueur'
    j2.style.pointerEvents = 'auto'
    j3.textContent = 'NouveauJoueur'
    j3.style.pointerEvents = 'auto'
    affich.textContent = ''
})

// BOUTON FONCTION

btf.addEventListener('click', () => {

})

// BOUTONS THEME

bt1.addEventListener('click', () => {
    ecran.style.background = 'radial-gradient( darkcyan,cyan,white,cyan,darkcyan)'
    ecran.style.fontFamily = 'saira'
    ecran.style.color = 'darkSlateGrey'
    ecran.style.textShadow = '3px 3px 3px white'
    j1.style.fontFamily = 'saira'
    j2.style.fontFamily = 'saira'
    j3.style.fontFamily = 'saira'
    bcj1.style.color = 'darkSlateGrey'
    bcj1.style.textShadow = '3px 3px 3px white'
    bcj1.style.fontFamily = 'saira'
    bcj2.style.color = 'darkSlateGrey'
    bcj2.style.textShadow = '3px 3px 3px white'
    bcj2.style.fontFamily = 'saira'
    bcj3.style.color = 'darkSlateGrey'
    bcj3.style.textShadow = '3px 3px 3px white'
    bcj3.style.fontFamily = 'saira'
})

bt2.addEventListener('click', () => {
    ecran.style.background = 'radial-gradient(white,darkmagenta,darkblue)'
    ecran.style.fontFamily = 'imp'
    ecran.style.color = 'darkblue'
    ecran.style.textShadow = '3px 3px 3px black'
    j1.style.fontFamily = 'darkblue'
    j2.style.fontFamily = 'darkblue'
    j3.style.fontFamily = 'darkblue'
    bcj1.style.color = 'darkblue'
    bcj1.style.textShadow = '3px 3px 3px black'
    bcj1.style.fontFamily = 'imp'
    bcj2.style.color = 'darkblue'
    bcj2.style.textShadow = '3px 3px 3px black'
    bcj2.style.fontFamily = 'imp'
    bcj3.style.color = 'darkblue'
    bcj3.style.textShadow = '3px 3px 3px black'
    bcj3.style.fontFamily = 'imp'
})

bt3.addEventListener('click', () => {
    ecran.style.background = 'black'
    ecran.style.fontFamily = 'mat'
    ecran.style.color = 'green'
    ecran.style.textShadow = 'none'
    j1.style.fontFamily = 'mat'
    j2.style.fontFamily = 'mat'
    j3.style.fontFamily = 'mat'
    s1.style.fontFamily = 'mat'
    s2.style.fontFamily = 'mat'
    s3.style.fontFamily = 'mat'
    bcj1.style.color = 'green'
    bcj1.style.textShadow = 'none'
    bcj1.style.fontFamily = 'mat'
    bcj2.style.color = 'green'
    bcj2.style.textShadow = 'none'
    bcj2.style.fontFamily = 'mat'
    bcj3.style.color = 'green'
    bcj3.style.textShadow = 'none'
    bcj3.style.fontFamily = 'mat'
})

