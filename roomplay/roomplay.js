// HTML ELEMENTS
const roomplayArticles = document.querySelectorAll('.roomplayArticles')
const roomplayArticlesImage = document.querySelectorAll('.roomplayArticlesImage')
const buttonNavigationroomplay = document.querySelectorAll('.buttonNavigationroomplay')
const boxPhoto = document.querySelector('.boxPhoto')
const boxMessage = document.querySelector('.boxMessage')
// MESSAGE ELEMENTS
const welcomeMessageString = ['"Bonjour et Bienvenu sur mon salon de jeux. Ce site rassemble des applications de minis-jeu developpées dans le cadre de mon apprentissage de developpeur web"']
const whoamiMessageString = ['"Je m\'appelle Pierre BLANCHARD. Actuellement en formation developpeur web, j\'ai developpé ce site dans le but de présenter mon projet ainsi que mes créations."']

    const projectsMessageString1 = document.createElement('p')
    const projectsMessageString2 = document.createElement('p')
    const projectsMessageString3 = document.createElement('p')
    const projectsMessageString4 = document.createElement('p')
    const projectsMessageString5 = document.createElement('p')

    projectsMessageString1.innerHTML = 'FORMATION'
    projectsMessageString2.innerHTML = '--- Graduate Développeur web full stack ---'
    projectsMessageString3.innerHTML = 'Depuis le 23 septembre 2022'
    projectsMessageString4.innerHTML = 'Sur la plateforme :'
    projectsMessageString5.innerHTML = 'STUDY.COM'

    projectsMessageString1.style.margin = '0'
    projectsMessageString2.style.margin = '0'
    projectsMessageString3.style.margin = '0'
    projectsMessageString4.style.margin = '0'
    projectsMessageString5.style.margin = '0'

const projectsMessageString = [
    projectsMessageString1, 
    projectsMessageString2, 
    projectsMessageString3, 
    projectsMessageString4,
    projectsMessageString5
]

    const link1 = document.createElement('a')
    const link2 = document.createElement('a')
    const link3 = document.createElement('a')
    const link4 = document.createElement('a')

    link1.href = 'https://www.youtube.com/c/FromScratchD%C3%A9veloppementWeb'
    link2.href = 'https://developer.mozilla.org/fr/'
    link3.href = 'https://flexbox.help/'
    link4.href = 'https://github.com/'

    link1.innerHTML = 'From Scratch - Developpement Web'
    link2.innerHTML = 'MDN Webdocs'
    link3.innerHTML = 'Flexbox'
    link4.innerHTML = 'Github'

const links = [link1, link2, link3, link4]

message(welcomeMessageString)// START
// MESSAGE FUNCTION
function message(messageString) {
    let MessageIntervalVar = ''
    for(buttonsNone of buttonNavigationroomplay) {
        buttonsNone.style.pointerEvents = 'none'
    }    
    boxMessage.textContent = ''
    for(iMessage=0;iMessage<messageString.length-1;iMessage++){}
    if(messageString===welcomeMessageString||messageString===whoamiMessageString){
        MessageIntervalVar = setInterval(MessageInterval,10)
        function MessageInterval(){
            boxMessage.textContent+=messageString[0][iMessage++]
            if(messageString[0][iMessage]===undefined){
                for(buttonsAuto of buttonNavigationroomplay) {
                    buttonsAuto.style.pointerEvents = 'auto'
                }
                clearInterval(MessageIntervalVar)
            }
        }
    }else{
        let ms = 0
        let time = 0
        MessageInst()
        function MessageInst() {
            let messageStringMs = messageString[ms]
            setTimeout(() => {boxMessage.append(messageStringMs)}, time)
            ms += 1
            time += 200
            if(ms===messageString.length){
                    setTimeout(() => {
                        for(buttons of buttonNavigationroomplay) {
                            buttons.style.pointerEvents = 'auto'
                        }
                    }, time)
                return
            }else{MessageInst()}
            
        }
    }
}

// BUTTONS NAVIGATION
for(button of buttonNavigationroomplay) {
    button.addEventListener('click', (e) => {
        // ANIME
        e.target.classList.add('buttonNavClicked')
        setTimeout(() => {
            e.target.classList.remove('buttonNavClicked')
        }, 500);
        // NAVIGATION
        switch(e.target.id) {
            case 'buttonNavigationroomplaya': removePhoto();createPhoto();message(whoamiMessageString);break;
            case 'buttonNavigationroomplayb': removePhoto();message(projectsMessageString);break;
            case 'buttonNavigationroomplayc': removePhoto();message(links);break;
            case 'buttonNavigationroomplayd': removePhoto();boxMessage.innerHTML = '';boxMessage.append(vsDiv);break;
            case 'buttonNavigationroomplaye': removePhoto();break;
        }
    }) 
}

function createPhoto() {
    const photo = document.createElement('img')
    photo.src = '../img/pb.jpg'
    photo.id = 'photo'
    photo.style.height = '100px'
    photo.style.transition = '1s'
    photo.style.opacity = '0%'
    photo.style.borderRadius = '50%'
    boxPhoto.prepend(photo)
    setTimeout(() => {
        photo.style.opacity = '100%'
    }, 0);
}

function removePhoto() {
    if(boxPhoto.firstChild.id === 'photo'){
        if(boxPhoto.firstChild.src.substr(-3,3)==='jpg'){
            console.log(boxPhoto.firstChild)
            boxPhoto.firstChild.remove()
        }
    }
}

// ARTICLES ANIME
for(article of roomplayArticles) {
    // ARTICLES MOUSE LIGHT
    for(elem of roomplayArticlesImage) {
        article.style.transition = '1s'
        article.addEventListener('mouseenter', (e) => {
            switch(e.target.id) {
                case 'roomplayArticles1': roomplayArticlesImage[0].style.boxShadow = '0px 0px 100px white';break;
                case 'roomplayArticles2': roomplayArticlesImage[1].style.boxShadow = '0px 0px 100px white';break;
                case 'roomplayArticles3': roomplayArticlesImage[2].style.boxShadow = '0px 0px 100px white';break;
                case 'roomplayArticles4': roomplayArticlesImage[3].style.boxShadow = '0px 0px 100px white';break;
                case 'roomplayArticles5': roomplayArticlesImage[4].style.boxShadow = '0px 0px 100px white';break;
            }
        })
        article.addEventListener('mouseleave', (e) => {
            switch(e.target.id) {
                case 'roomplayArticles1': roomplayArticlesImage[0].style.boxShadow = 'none';break;
                case 'roomplayArticles2': roomplayArticlesImage[1].style.boxShadow = 'none';break;
                case 'roomplayArticles3': roomplayArticlesImage[2].style.boxShadow = 'none';break;
                case 'roomplayArticles4': roomplayArticlesImage[3].style.boxShadow = 'none';break;
                case 'roomplayArticles5': roomplayArticlesImage[4].style.boxShadow = 'none';break;
            }
        })
    }   
    // ARTICLES DISPLAY SCROLL
    roomplayArticles[0].style.transform = 'translate(-200%,0%)'
    roomplayArticles[2].style.transform = 'translate(-200%,0%)'
    roomplayArticles[4].style.transform = 'translate(-200%,0%)'
    roomplayArticles[1].style.transform = 'translate(200%,0%)'
    roomplayArticles[3].style.transform = 'translate(200%,0%)'

    window.addEventListener('scroll', () => {
        // DISPLAY
        if(scrollY>=1){roomplayArticles[0].style.transform = 'translate(0%,0%)'}
        if(scrollY>=300){roomplayArticles[1].style.transform = 'translate(90%,0%)'}
        if(scrollY>=600){roomplayArticles[2].style.transform = 'translate(0%,0%)'}
        if(scrollY>=1000){roomplayArticles[3].style.transform = 'translate(90%,0%)'}
        if(scrollY>=1600){roomplayArticles[4].style.transform = 'translate(0%,0%)'}
        // REMOVE
        if(scrollY<=1){roomplayArticles[0].style.transform = 'translate(-200%,0%)'}
        if(scrollY<=300){roomplayArticles[1].style.transform = 'translate(200%,0%)'}
        if(scrollY<=600){roomplayArticles[2].style.transform = 'translate(-200%,0%)'}
        if(scrollY<=1000){roomplayArticles[3].style.transform = 'translate(200%,0%)'}
        if(scrollY<=1600){roomplayArticles[4].style.transform = 'translate(-200%,0%)'}
    })
}