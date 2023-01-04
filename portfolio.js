//-----CONSTANTS---------------------------------------------------------------------------------------------------------------------------------------------//
//-----CURSOR-----------------------------------------------------------------------------------------------------------------------------------------------//
//-----NAVIGATION---------------------------------------------------------------------------------------------------------------------------------------------//
//-----CV-----------------------------------------------------------------------------------------------------------------------------------------------------//
//-----THEME--------------------------------------------------------------------------------------------------------------------------------------------------//
//-----PORTFOLIO 2--------------------------------------------------------------------------------------------------------------------------------------------//


//-----CONSTANTS---------------------------------------------------------------------------------------------------------------------------------------------//

const body = document.getElementById('body')
const main = document.getElementById('main')
// NAVIGATION
const navigation = document.getElementById('navigation')
const signature = document.getElementById('signature')
// BUTTONS NAVIGATION
const boxButtonsNavigation = document.querySelector('.boxButtonsNavigation')
// const buttonNavigation1 = document.getElementById('buttonNavigation1')
// const buttonNavigation2 = document.getElementById('buttonNavigation2')
// const buttonNavigation3 = document.getElementById('buttonNavigation3')
// const buttonNavigation4 = document.getElementById('buttonNavigation4')
// const buttonNavigation5 = document.getElementById('buttonNavigation5')
// const buttonNavigationTheme = document.getElementById('buttonNavigationTheme')
const buttonNavigation = document.querySelectorAll('.buttonNavigation')
// BUTTONS BACK NAVIGATION
// const buttonBackNavigation1 = document.getElementById('buttonBackNavigation1')
// const buttonBackNavigation2 = document.getElementById('buttonBackNavigation2')
// const buttonBackNavigation3 = document.getElementById('buttonBackNavigation3')
// const buttonBackNavigation4 = document.getElementById('buttonBackNavigation4')

const buttonBackNavigation = document.querySelectorAll('.buttonBackNavigation')
// SIDEBARS
const sidebarLeft = document.getElementById('sidebarLeft')
const sidebarRight = document.getElementById('sidebarRight')
const welcomeMessage = document.querySelector('.welcomeMessage')
const sidebarMessage = document.getElementById('sidebarMessage')
const navigationMessage = document.getElementById('navigationMessage')
// PORTFOLIO
const pagePortfolio = document.getElementById('pagePortfolio')
const portfolioTitle = document.querySelector('.portfolioTitle')
const portfolioArticles = document.querySelectorAll('.portfolioArticles')
// NAVIGATION PAGES
const navigationPage = document.querySelectorAll('.navigationPage')

// const pagePresentation = document.getElementById('pagePresentation')
// const pageCv = document.getElementById('pageCv')
// const pageContactInformation = document.getElementById('pageContactInformation')
// const pageProjects = document.getElementById('pageProjects')
// CV TITLES
const experiencesTitle = document.querySelector('.experiencesTitle')
const experiencesPageTitle = document.querySelectorAll('.experiencesPageTitle')
// CV EXPERIENCES PAGE
const experiencesPage = document.querySelectorAll('.experiencesPage')
const formationPage1 = document.getElementById('formationPage1')

//-----WELCOME MESSAGE------------------------------------------------------------------------------------------------------------------------------------------------------------//

let userName = localStorage.getItem('userName', 'pseudo.value')
let spanUser = document.createElement('span')
spanUser.textContent = userName
spanUser.classList.add('spanUser')
welcomeMessage.textContent = 'Bienvenue '
welcomeMessage.append(spanUser)

//-----COMMENTS------------------------------------------------------------------------------------------------------------------------------------------------------------//
const commentsUser = document.getElementById('commentsUser')
const lastComments = document.querySelector('.lastComments')
const buttonPostComment = document.querySelector('.buttonPostComment')
const limitChar = document.querySelector('.limitChar')

// commentsUser.addEventListener('keydown', (e) => {
//     const choiceKey = e.key
//     if (choiceKey === 'Enter') {
//         e.target.blur()
//         buttonPostComment.focus()
//     }
// })

buttonPostComment.addEventListener('click',()=>{postComment(userName, commentsUser.value)})
function postComment(userOfPost, post){
    if(post.length>=10&&post.indexOf('<')===-1&&post.indexOf('>')===-1){
        // DATETIME OF POST CONSTRUCTION
        let temp = new Date()
        const date = temp.toLocaleDateString('fr-FR')
        const time = temp.toLocaleTimeString('fr-FR')
        // ELEMENT OF POST
        const spanUserPost = document.createElement('div')
        const divPost = document.createElement('div')
        const divInfoPost = document.createElement('div')
        const divStringPost = document.createElement('div')
        const infoPost = `Le ${date} a ${time} par`
        const stringPost = `<br>${post}<br>------------------------<br><br>`

        spanUserPost.style.color = 'darkCyan'
        spanUserPost.style.fontSize = '15px'
        spanUserPost.style.margin = '0px 5px'
        spanUserPost.innerHTML += userOfPost
        divStringPost.style.color = 'darkBlue'
        divStringPost.style.fontSize = '1.2em'

        divInfoPost.innerHTML += infoPost
        divInfoPost.style.display = 'flex'
        divInfoPost.style.alignItems = 'center'
        divInfoPost.append(spanUserPost)  

        divStringPost.innerHTML += stringPost
        divPost.append(divStringPost)
        divPost.prepend(divInfoPost)

        lastComments.prepend(divPost)

        commentsUser.value = ''
        buttonPostComment.style.pointerEvents = 'none'
        buttonPostComment.style.opacity = '50%'
        let intervalDelay = setInterval(postDelay,1000)
        let delay = 1
        function postDelay(){
            buttonPostComment.innerHTML = `${delay} secondes`
            delay--
            if(delay===0){
                clearInterval(intervalDelay)
                buttonPostComment.style.pointerEvents = 'auto'
                buttonPostComment.style.opacity = '100%'
                buttonPostComment.innerHTML = 'Poster'
            }
        }
    }else{
        limitChar.classList.add('limitCharBlinking')
        setTimeout(()=>{limitChar.classList.remove('limitCharBlinking')},500)}
}

//-----NAVIGATION------------------------------------------------------------------------------------------------------------------------------------------------------------//

// BOUTONS NAVIGATION

// for(let elementButton=0;elementButton<buttonNavigation.length;elementButton++){
//     for(elementNavigationPage=0;elementNavigationPage<navigationPage.length;elementNavigationPage++){
//         buttonNavigation[elementButton].addEventListener('click',(e)=>{
//             if(elementButton===elementNavigationPage){
//                 if(navigationPage[elementNavigationPage].style.top==='0px'){
//                 navigationPage[elementNavigationPage].style.top = '-2000px'
//                 }else{
//                     navigationPage[elementNavigationPage].style.top = '0px'
//                 }
//             }
//         })
//     }
// }





buttonNavigation1.addEventListener('click', () => {
    if(pagePresentation.style.top==='0px'){pagePresentation.style.top = '-2000px'}
    else{pagePresentation.style.top='0px'}
    pagePresentation.style.transition = '0.5s'
    pageCv.style.top = '-2000px'
    pageCv.style.transition = '0.5s'
    pageContactInformation.style.top = '-2000px'
    pageContactInformation.style.transition = '0.5s'
    pageProjects.style.top = '-2000px'
    pageProjects.style.transition = '0.5s'
})

buttonNavigation2.addEventListener('click', () => {
    if(pageCv.style.top==='0px'){pageCv.style.top = '-2000px'}
    else{pageCv.style.top='0px'}
    pagePresentation.style.top = '-2000px'
    pagePresentation.style.transition = '0.5s'
    pageCv.style.transition = '0.5s'
    pageContactInformation.style.top = '-2000px'
    pageContactInformation.style.transition = '0.5s'
    pageProjects.style.top = '-2000px'
    pageProjects.style.transition = '0.5s'
})

buttonNavigation3.addEventListener('click', () => {
    if(pageContactInformation.style.top==='0px'){pageContactInformation.style.top = '-2000px'}
    else{pageContactInformation.style.top='0px'}
    pagePresentation.style.top = '-2000px'
    pagePresentation.style.transition = '0.5s'
    pageCv.style.top = '-2000px'
    pageCv.style.transition = '0.5s'
    pageContactInformation.style.transition = '0.5s'
    pageProjects.style.top = '-2000px'
    pageProjects.style.transition = '0.5s'
})

buttonNavigation4.addEventListener('click', () => {
    if(pageProjects.style.top==='0px'){pageProjects.style.top = '-2000px'}
    else{pageProjects.style.top='0px'}
        pagePresentation.style.top = '-2000px'
        pagePresentation.style.transition = '0.5s'
        pageCv.style.top = '-2000px'
        pageCv.style.transition = '0.5s'
        pageContactInformation.style.top = '-2000px'
        pageContactInformation.style.transition = '0.5s'
        pageProjects.style.transition = '0.5s' 
})
// BOUTONS RETOUR
// buttonBackNavigation1.addEventListener('click', () => {pagePresentation.style.top = '-2000px', pagePresentation.style.transition = '0.5s'})
// buttonBackNavigation2.addEventListener('click', () => {pageCv.style.top = '-2000px', pageCv.style.transition = '0.5s'})
// buttonBackNavigation3.addEventListener('click', () => {pageContactInformation.style.top = '-2000px', pageContactInformation.style.transition = '0.5s'})
// buttonBackNavigation4.addEventListener('click', () => {pageProjects.style.top = '-2000px', pageProjects.style.transition = '0.5s'})

for(buttonBack=0;buttonBack<buttonBackNavigation.length;buttonBack++){
    
    buttonBackNavigation[buttonBack].addEventListener('click',()=>{
        for(navPage=0;navPage<navigationPage.length;navPage++){
            if(buttonBack===navPage){
                console.log(navigationPage[navPage])
                navigationPage[navPage].style.top = '-2000px'
            }
        }
    })
}


//-----TEXTE NAVIGATION GAUCHE-----------------------------------------------------------------------------------------------------------------------------------------------//

const sidebarMessageString1 = [' "Je m\'appelle Pierre BLANCHARD. Actuellement en formation developpeur web, j\'ai developpé ce site dans le but de présenter mon projet ainsi que mes créations."']
for(iMessage=0;iMessage<sidebarMessageString1.length-1;iMessage++){}
let sidebarMessageIntervalVar = setInterval(sidebarMessageInterval,100)
function sidebarMessageInterval(){
    sidebarMessage.textContent+=sidebarMessageString1[0][iMessage++]
    if(sidebarMessageString1[0][iMessage]===undefined){clearInterval(sidebarMessageIntervalVar)}
}

//-----TEXTE CODE NAVIGATION------------------------------------------------------------------------------------------------------------------------------------------------------//

// const sidebarMessageString2 = [" setInterval(()=>{for(o=0;o<array2.length;o++) setTimeout(()=>{o=0;clearInterval(lcode1);lcode1=null;},16100)let lcode1=setInterval(tcode1,100)function tcode1(){code.innerHTML+=array2[0][o++]}code.textContent=''},17000)"]
// let navigationMessageIntervalVar = setInterval(navigationMessageInterval,100)
// function navigationMessageInterval(){navigationMessage.innerHTML+=sidebarMessageString2[0][o++]}
// for(o=0;o<sidebarMessageString2.length;o++)
// setInterval(()=>{
//     for(o=0;o<sidebarMessageString2.length;o++)
//     setTimeout(()=>{o=0;clearInterval(navigationMessageIntervalVar);navigationMessageIntervalVar=null;},10000)
//     let navigationMessageIntervalVar = setInterval(navigationMessageInterval,100)
//     navigationMessage.textContent = ''
// },10000);

const sidebarMessageString2 = [' for(iCode=0;iCode<sidebarMessageString2.length;iCode++) letintervalDialogue=setInterval(functionIntervalDialog,100)function functionIntervalDialog(){ navigationMessage.innerHTML+=sidebarMessageString2[0][iCode++]']
for(iCode=0;iCode<sidebarMessageString2.length;iCode++){}
let intervalDialogue = setInterval(functionIntervalDialog,100) 
function functionIntervalDialog(){ 
navigationMessage.innerHTML+=sidebarMessageString2[0][iCode++] 
if(sidebarMessageString2[0][iCode]===undefined){
    iCode=0
    clearInterval(intervalDialogue)
    navigationMessage.textContent = ''
    intervalDialogue = setInterval(functionIntervalDialog,100)}}

//-----PORTFOLIO-------------------------------------------------------------------------------------------------------------------------------------------------------------//

for(element of portfolioArticles){
    element.addEventListener('click',(e)=>{
        if(e.path[0].style.height==='600px'){
            e.path[0].style.height = '80px'
        }else {
            e.path[0].style.height = '600px'
        }
        for(element of portfolioArticles){
            if(element!==e.path[0]){
                element.style.height = '80px'
            }
        }
    })
}

//-----CV--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// CV MENUS DEROULANTS

for(let elementTitle=0;elementTitle<experiencesPageTitle.length;elementTitle++){
    experiencesPageTitle[elementTitle].addEventListener('click',(e)=>{
        if(experiencesPage[elementTitle].style.height==='500px'){
            experiencesPage[elementTitle].style.height = '50px'
            experiencesPage[elementTitle].style.overflowY = 'hidden'
        }else {
            experiencesPage[elementTitle].style.height = '500px'
            experiencesPage[elementTitle].style.overflowY = 'visible'
        }
        for(elementPage=0;elementPage<experiencesPage.length;elementPage++){
            if(elementPage!==elementTitle){
                experiencesPage[elementPage].style.height = '50px'
                experiencesPage[elementPage].style.overflowY = 'hidden'
            }
        }
    })
}



