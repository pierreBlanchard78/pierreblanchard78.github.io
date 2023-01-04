const pagePortfolio2 = document.getElementById('pagePortfolio2')
const headerPortfolio2 = document.getElementById('headerPortfolio2')
const bannerPortfolio2Message = document.getElementById('bannerPortfolio2Message')

const sidebarMessageString1 = [" 'Je m'appelle Pierre BLANCHARD. Actuellement en formation developpeur web, j'ai developpé ce site dans le but de présenter mon projet ainsi que mes créations.'"]

const buttonNavigationPortfolio2a = document.getElementById('buttonNavigationPortfolio2a')
const buttonNavigationPortfolio2b = document.getElementById('buttonNavigationPortfolio2b')
const buttonNavigationPortfolio2c = document.getElementById('buttonNavigationPortfolio2c')
const buttonNavigationPortfolio2d = document.getElementById('buttonNavigationPortfolio2d')

const bloc = document.getElementById('bloc')
const face1 = document.getElementById('face1')
const face2 = document.getElementById('face2')
const face3 = document.getElementById('face3')

const portfolio2Articles1 = document.getElementById('portfolio2Articles1')
const portfolio2Articles2 = document.getElementById('portfolio2Articles2')
const portfolio2Articles3 = document.getElementById('portfolio2Articles3')
const portfolio2Articles4 = document.getElementById('portfolio2Articles4')
const portfolio2Articles5 = document.getElementById('portfolio2Articles5')
const portfolio2Articles6 = document.getElementById('portfolio2Articles6')

//-----PORTFOLIO 2-----------------------------------------------------------------------------------------------------------------------------------------------------------------//

// POINTER 2

const pointer = document.querySelector('.pointer')
const squarex = document.querySelector('.squarex')
const squarey = document.querySelector('.squarey')
const circle = document.querySelector('.circle')

// centx = pointer.style.left
// centy = pointer.style.height
centx = 18
centy = 18

// POINTER DEFAUT (POINTER 2)
squarex.classList.add('squarex2')
squarey.classList.add('squarey2')
circle.classList.add('circle2')

window.addEventListener('mousemove', (e) => {
    pointer.style.position = 'absolute'
    pointer.style.left = e.pageX - centx + 'px'
    pointer.style.top = e.pageY - centy + 'px'
})
document.addEventListener('click', () => {
    squarex.classList.remove('pointer1clic1')
    squarey.classList.remove('pointer1clic2')
    circle.classList.remove('circleclic1')
    squarex.classList.add('pointer2clic1')
    squarey.classList.add('pointer2clic2')
    circle.classList.add('circleclic2')
    setTimeout(() => {
        squarex.classList.remove('pointer2clic1')
        squarey.classList.remove('pointer2clic2')
        circle.classList.remove('circleclic2')
    }, 2100)
})   



// BLOC PAGE SORTIE/ENTREE
buttonNavigationPortfolio2a.addEventListener('click', () => {//BLEU
    if(face1.style.top == '60%'){
        setTimeout(() => {
        face1.style.transition = '1s'
        face1.style.top = '-70%'
        face1.style.left = '-150%'
        face1.style.height = '40%'
        face1.style.width = '40%'
        face1.style.fontSize = '2px'
        }, 250)

        setTimeout(() => {
        face1.style.transition = '1s'
        face1.style.top = '25%'
        face1.style.left = '25%'
        face1.style.height = '40%'
        face1.style.width = '40%'
        }, 500)
    }else{
        setTimeout(() => {
        face1.style.transition = '1s'
        face1.style.top = '-70%'
        face1.style.left = '-150%'
        face1.style.height = '40%'
        face1.style.width = '40%'}, 250)

        setTimeout(() => {
        face1.style.transition = '1s'
        face1.style.top = '60%'
        face1.style.left = '-500%'
        face1.style.height = '350%'
        face1.style.width = '400%'
        face1.style.fontSize = '20px'},500)
        }
})
buttonNavigationPortfolio2b.addEventListener('click', () => {//ROUGE
    if(face2.style.top == '60%'){
        setTimeout(() => {
        face2.style.transition = '1s'
        face2.style.top = '-70%'
        face2.style.left = '-150%'
        face2.style.height = '40%'
        face2.style.width = '40%'
        face2.style.fontSize = '2px'}, 250)

        setTimeout(() => {
        face2.style.transition = '1s'
        face2.style.top = '20%'
        face2.style.left = '20%'
        face2.style.height = '40%'
        face2.style.width = '40%'}, 500)
    }else{
        setTimeout(() => {
        face2.style.transition = '1s'
        face2.style.top = '-70%'
        face2.style.left = '-150%'
        face2.style.height = '40%'
        face2.style.width = '40%'}, 250)

        setTimeout(() => {
        face2.style.transition = '1s'
        face2.style.top = '60%'
        face2.style.left = '-500%'
        face2.style.height = '300%'
        face2.style.width = '300%'
        face2.style.fontSize = '20px'},500)
        }
})
buttonNavigationPortfolio2c.addEventListener('click', () => {//VERT
    if(face3.style.top == '60%'){
        setTimeout(() => {
        face3.style.transition = '1s'
        face3.style.top = '-70%'
        face3.style.left = '-150%'
        face3.style.height = '40%'
        face3.style.width = '40%'
        face3.style.fontSize = '2px'
        }, 250)

        setTimeout(() => {
        face3.style.transition = '1s'
        face3.style.top = '15%'
        face3.style.left = '15%'
        face3.style.height = '40%'
        face3.style.width = '40%'
        }, 500)
    }else{
        setTimeout(() => {
        face3.style.transition = '1s'
        face3.style.top = '-70%'
        face3.style.left = '-150%'}, 250)

        setTimeout(() => {
        face3.style.transition = '1s'
        face3.style.top = '60%'
        face3.style.left = '-500%'
        face3.style.height = '300%'
        face3.style.width = '300%'
        face3.style.fontSize = '20px'},500)
        }
})

//DEFILEMENT SCROLL
portfolio2Articles1.style.transform = 'translate(-200%,0%)'
portfolio2Articles2.style.transform = 'translate(200%,0%)'
portfolio2Articles3.style.transform = 'translate(-200%,0%)'
portfolio2Articles4.style.transform = 'translate(200%,0%)'
portfolio2Articles5.style.transform = 'translate(-200%,0%)'
portfolio2Articles6.style.transform = 'translate(200%,0%)'

window.addEventListener('scroll', () => {
    if(scrollY>=1){portfolio2Articles1.style.transform = 'translate(0%,0%)';portfolio2Articles1.style.transition = '1s'}
    if(scrollY>=300){portfolio2Articles2.style.transform = 'translate(90%,0%)';portfolio2Articles2.style.transition = '1s'}
    if(scrollY>=600){portfolio2Articles3.style.transform = 'translate(0%,0%)';portfolio2Articles3.style.transition = '1s'}
    if(scrollY>=1000){portfolio2Articles4.style.transform = 'translate(90%,0%)';portfolio2Articles4.style.transition = '1s'}
    if(scrollY>=1600){portfolio2Articles5.style.transform = 'translate(0%,0%)';portfolio2Articles5.style.transition = '1s'}
    if(scrollY>=2000){portfolio2Articles6.style.transform = 'translate(90%,0%)';portfolio2Articles6.style.transition = '1s'}

    if(scrollY<=1){portfolio2Articles1.style.transform = 'translate(-200%,0%)';portfolio2Articles1.style.transition = '1s'}
    if(scrollY<=300){portfolio2Articles2.style.transform = 'translate(200%,0%)';portfolio2Articles2.style.transition = '1s'}
    if(scrollY<=600){portfolio2Articles3.style.transform = 'translate(-200%,0%)';portfolio2Articles3.style.transition = '1s'}
    if(scrollY<=1000){portfolio2Articles4.style.transform = 'translate(200%,0%)';portfolio2Articles4.style.transition = '1s'}
    if(scrollY<=1600){portfolio2Articles5.style.transform = 'translate(-200%,0%)';portfolio2Articles5.style.transition = '1s'}
    if(scrollY<=2000){portfolio2Articles6.style.transform = 'translate(200%,0%)';portfolio2Articles6.style.transition = '1s'}
    
})