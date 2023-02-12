// HTML ARTICLE ELEMENTS
const roomplayArticleBox = document.querySelector('.roomplayArticleBox')
const roomplayArticle = document.querySelector('.roomplayArticle')
const roomplayArticleImage = document.querySelector('.roomplayArticleImage')
const roomplayArticleText = document.querySelector('.roomplayArticleText')
const articleTitle = document.querySelector('.articleTitle')  
const articlePara1 = document.querySelector('.articlePara1')  
const articlePara2 = document.querySelector('.articlePara2')
const buttonScroll = document.querySelectorAll('.buttonScroll')
// ARTICLES LIST
const articles = [
    article1 = {
        image:"img/articles/sgquizz.jpg",
        alt:'sgquizz.jpg',
        title:'SG-Quizz',
        para1:'Le Sg-Quizz est ma première idée de projet pour m\'aider a me lancer dans le developpement.',
        para2:'Il contient pas loin de cent questions sur le thème de la série TV de science-fiction Stargate SG-1, avec la possibilité d\'enregistrement de 3 profils de joueurs avec noms, grades et score evolutifs, et est régit dynamiquement par javascript.',
        target: 'sgquizz'
    },
    article2 = {
        image:"img/articles/batnav.jpg",
        alt:'batnav.jpg',
        title:'Bataille Navale',
        para1:'Une bataille navale en javascript.',
        para2:'Il reste encore a developper la réponse automatique (IA) qui se contente de frapper au hasard sans aucune stratégie... Des connaissances restent a acquérir.',
        target: 'batnav'
    },
    article3 = {
        image:"img/articles/mach.jpg",
        alt:'mach.jpg',
        title:'Machine a sous',
        para1:'Un petit programme simulant une machine a sous en javascript.',
        para2:'Reste encore a améliorer les taux de gains beaucoup trop elevés.',
        target: 'machine'
    },
    article4 = {
        image:"img/articles/gobelinthief.jpg",
        alt:'gobelinthief.jpg',
        title:'Gobelin Thief',
        para1:'Un petit jeu de role fantasy.',
        para2:'En production.',
        target: 'gobelinthief'
    }
]
// ARTICLES MOUSE LIGHTING
roomplayArticle.addEventListener('mouseenter', (e) => {
    roomplayArticleImage.style.boxShadow = '0px 0px 100px white'
})
roomplayArticle.addEventListener('mouseleave', (e) => {
    roomplayArticleImage.style.boxShadow = 'none'
})
// SCROLL ARTICLES BUTTON CLICK
for(buttonFocus of buttonScroll) {
    buttonFocus.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'buttonScrollDown': buttonScrollDownClick ();scroll (e.target.id);break;
            case 'buttonScrollUp': buttonScrollUpClick ();scroll (e.target.id);break;
        }
    })
}
// SCROLL ARTICLES MOUSEWHEEL
roomplayArticleBox.addEventListener('mousewheel', (e) => {
    if(e.deltaY === 100) {
        buttonScrollDownClick ()
        scroll(e.deltaY)
    }
    if(e.deltaY === -100) {
        buttonScrollUpClick ()
        scroll(e.deltaY)
    }
})
// BUTTONS ANIMATION
function buttonScrollUpClick () {
    buttonScrollUp.style.marginTop = '15px'
    buttonScrollUp.style.border = 'none'
    buttonScrollUp.style.height = '25px'
    buttonScrollUp.style.color = 'yellowgreen'
    setTimeout(() => {
        buttonScrollUp.style.marginTop = '10px'
        buttonScrollUp.style.borderBottom = '5px solid grey'
        buttonScrollUp.style.height = '30px'
        buttonScrollUp.style.color = 'grey'
    }, 200);
}
function buttonScrollDownClick () {
    buttonScrollDown.style.marginTop = '20px'
    buttonScrollDown.style.border = 'none'
    buttonScrollDown.style.height = '25px'
    buttonScrollUp.style.marginBottom = '5px'
    buttonScrollDown.style.color = 'yellowgreen'
    setTimeout(() => {
        buttonScrollDown.style.marginTop = '10px'
        buttonScrollDown.style.borderBottom = '5px solid grey'
        buttonScrollDown.style.height = '30px'
        buttonScrollUp.style.marginBottom = '10px'
        buttonScrollDown.style.color = 'grey'
    }, 200);
}
// SCROLLING LOGIC
displayArticle(articles[0])
let focu = 0
function scroll(buttonIs) {

    if(buttonIs === 'buttonScrollDown') {
        focu += 1
    }
    if(buttonIs === 'buttonScrollUp') {
        focu -= 1
    }

    if(buttonIs === 100) {
        focu += 1
    }
    if(buttonIs === -100) {
        focu -= 1
    }

    if (focu === articles.length) {
        focu = 0
    }
    if (focu < 0) {
        focu = articles.length - 1
    }

    switch (focu) {
        case 0:displayArticle(articles[0]);break;
        case 1:displayArticle(articles[1]);break;
        case 2:displayArticle(articles[2]);break;
        case 3:displayArticle(articles[3]);break;
    }
}
// DISPLAY ARTICLES FUNCTION
function displayArticle (article) {
    roomplayArticleImage.src = article.image
    roomplayArticleImage.alt = article.alt
    articleTitle.textContent = article.title
    articlePara1.textContent = article.para1
    articlePara2.textContent = article.para2
    roomplayArticle.setAttribute('onclick', onclick=function nav(e){
        for(elem1 of roomplayArticle.childNodes){
            for(elem2 of roomplayArticleText.childNodes){
                if (e.target === roomplayArticle||e.target === elem1||e.target === elem2) {
                    window.location.href=`${article.target}/index.html`;
                    roomplayArticleText.style.color = 'yellowgreen'
                    return
                }
            }
        }
    })
}




