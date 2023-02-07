
//-----CONSTANTS---------------------------------------------------------------------------------------------------------------------------------------------//

const body = document.getElementById('body')
const main = document.getElementById('main')
//-----COMMENTS------------------------------------------------------------------------------------------------------------------------------------------------------------//
const commentsUser = document.getElementById('commentsUser')
const lastComments = document.querySelector('.lastComments')
const buttonPostComment = document.querySelector('.buttonPostComment')
const limitChar = document.querySelector('.limitChar')
// NAVIGATION
const navigation = document.getElementById('navigation')
const signature = document.getElementById('signature')
// BUTTONS NAVIGATION
const boxButtonsNavigation = document.querySelector('.boxButtonsNavigation')
const buttonNavigation = document.querySelectorAll('.buttonNavigation')
// BUTTONS BACK NAVIGATION
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
// CV TITLES
const experiencesTitle = document.querySelector('.experiencesTitle')
const experiencesPageTitle = document.querySelectorAll('.experiencesPageTitle')
const formationPageTitle1 = document.getElementById('formationPageTitle1')
// CV EXPERIENCES PAGE
const experiencesPage = document.querySelectorAll('.experiencesPage')
const formationPage1 = document.getElementById('formationPage1')

//-----WELCOME MESSAGE------------------------------------------------------------------------------------------------------------------------------------------------------------//

let userName = localStorage.getItem('userName', 'pseudo.value')
let spanUser = document.createElement('span')
spanUser.textContent = userName
spanUser.classList.add('spanUser')
welcomeMessage.textContent = 'Bienvenue '
if(userName = localStorage.getItem('userName', 'pseudo.value')){
    welcomeMessage.append(spanUser)
}else{welcomeMessage.append('?????')}
localStorage.clear


//-----COMMENTS------------------------------------------------------------------------------------------------------------------------------------------------------------//

buttonPostComment.addEventListener('click', () => {postComment(userName, commentsUser.value)})

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
        let delay = 60
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
    }else {
        limitChar.classList.add('limitCharBlinking')
        setTimeout(()=>{limitChar.classList.remove('limitCharBlinking')},500)}
}

//-----NAVIGATION------------------------------------------------------------------------------------------------------------------------------------------------------------//

// BOUTONS NAVIGATION

for(button of buttonNavigation) {
    button.addEventListener('click', (e) => {
        switch(e.target.id) {
            case 'buttonNavigation1': sort(pagePresentation);break;
            case 'buttonNavigation2': sort(pageCv);break;
            case 'buttonNavigation3': sort(pageContactInformation);break;
            case 'buttonNavigation4': sort(pageProjects);break;
        }
        function sort(pageSelect) {
            for(page of navigationPage) {
                if(page!==pageSelect){
                    page.style.top = '-2000px'
                }
            }
            if(pageSelect.style.top==='0px') {
                        
                pageSelect.style.top = '-2000px'
            }else{
                pageSelect.style.top = '0px'
            }
        }
    })
}

// BOUTONS RETOUR

for(elem of buttonBackNavigation) {
    elem.addEventListener('click', (e) => {
        for(el of navigationPage) {
            switch(e.target.id) {
                case 'buttonBackNavigation1': pagePresentation.style.top = '-2000px';break;
                case 'buttonBackNavigation2': pageCv.style.top = '-2000px';break;
                case 'buttonBackNavigation3': pageContactInformation.style.top = '-2000px';break;
                case 'buttonBackNavigation4': pageProjects.style.top = '-2000px';break;
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
        if(e.target.style.height==='600px'){
            
            e.target.style.height = '80px'
        }else {
            e.target.style.height = '600px'
        }
        for(element of portfolioArticles){
            if(element!==e.target){
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

