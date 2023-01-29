// MAIN
const main = document.querySelector('.main')
// CARACTERS CONSTANTS
const innkeeper = document.querySelector('.innkeeper')
const rogueBack = document.querySelector('.rogueBack')
const rogue = document.querySelector('.rogue')
const merchant = document.querySelector('.merchant')
const troll = document.querySelector('.troll')
const gobelin = document.querySelector('.gobelin')
// DISPLAY CONSTANTS
const display = document.querySelector('.display')
const displayTitle = document.querySelector('.displayTitle')
const displayParagraph = document.querySelector('.displayParagraph')
const displayDialogue = document.querySelector('.displayDialogue')
const displayAnswers = document.querySelector('.displayAnswers')
const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const buttonPass = document.getElementById('buttonPass')
const buttonBack = document.getElementById('buttonBack')
const buttonQuit = document.getElementById('buttonQuit')
const buttonInterlocutor = document.getElementById('buttonInterlocutor')
const hud = document.querySelector('.hud')

// VARIABLE ZONE
let place
let menu = 0
village = 1



// PLACE FUNCTION
actualPlace(menu)
function actualPlace(placeName){// Fonction de definition de la zone actuelle et de ses évènements initiaux
    place = placeName
    if(place===0){
        dialog(arrayStringDialogueMenu, arrayStringAnswersMenu, arrayStringTitleMenu, arrayStringParagraphMenu)

        main.style.background = 'url(img/place/path.jpg)no-repeat center/cover'
        display.style.transform = 'translate(0%,0%)'

        innkeeper.style.transform = 'translate(-110%,20%)'
        rogue.style.transform = 'translate(-90%,-20%)'
        troll.style.transform = 'translate(-50%,20%)'
        merchant.style.transform = 'translate(-90%,30%)'
        gobelin.style.transform = 'translate(50%,30%)'

        innkeeper.style.animationPlayState = 'paused'
        rogue.style.animationPlayState = 'paused'
        troll.style.animationPlayState = 'paused'
        merchant.style.animationPlayState = 'paused'

        buttonBack.style.visibility = 'hidden'
        buttonQuit.style.visibility = 'hidden'
        buttonInterlocutor.style.visibility = 'hidden'

        hud.style.transform = 'translate(0%,100%)'
        }
    if(place===1){
        dialog(arrayStringDialogueVillage1, arrayStringAnswersVillage1, arrayStringTitleVillage, arrayStringParagraphVillage)
        setTimeout(()=>{rogueBack.style.transform = 'translate(60%,40%)'},1000)
        setTimeout(()=>{display.style.transform = 'translate(0%,0%)'},10)
        main.style.background = 'url(img/place/village.jpg)'
        }
    if(place===2){
        rogueBack.style.transform = 'translate(70%,50%)'
        setTimeout(()=>{innkeeper.style.transform = 'translate(-100%,0%)';dialog(arrayStringDialogueTavern1, arrayStringAnswersTavern1, arrayStringTitleTavern, arrayStringParagraphTavern)},1000)
        setTimeout(()=>{display.style.transform = 'translate(0%,0%)'},500)
        main.style.background = 'url(img/place/tavern.jpg)'
        buttonBack.style.visibility = 'visible'
        buttonQuit.style.visibility = 'visible'
    }
}

function functionAnswerMenu(){
    innkeeper.style.transform = 'translate(-300%,0%)'
    rogue.style.transform = 'translate(-300%,0%)'
    troll.style.transform = 'translate(-300%,0%)'
    merchant.style.transform = 'translate(-300%,0%)'
    gobelin.style.transform = 'translate(-300%,0%)'
    gobelin.style.animation = 'paused'

    innkeeper.style.animationPlayState = 'running'
    rogue.style.animationPlayState = 'running'
    troll.style.animationPlayState = 'running'
    merchant.style.animationPlayState = 'running'

    hud.style.transform = 'translate(0%,0%)'
    setTimeout(() => {
    actualPlace(village)    
    }, 1000);
    
}

//DIALOGUE FUNCTION
function dialog(dialogPlay, arrayStringAnswers, arrayStringTitle, arrayStringParagraph){// Départ de la fonction principale de dialogue

    // DISPLAY TITLE & PARAGRAPH
    displayTitle.textContent = ''
    displayParagraph.textContent = ''
    displayTitle.textContent+=arrayStringTitle
    displayParagraph.textContent+=arrayStringParagraph

    buttonPass.style.display = 'contents' // (bloc) Affiche bouton 'passer', dissimule bouton 'retour', vide affichage dialogue et réponse
    buttonBack.style.display = 'none'
    displayDialogue.textContent = ''
    answer1.textContent = ''
    answer2.textContent = ''
    answer3.textContent = ''
    answer1.removeEventListener('click', functionAnswerMenu)
    answer1.removeEventListener('click', functionAnswerVillage1)
    answer2.removeEventListener('click', functionAnswerVillage2)
    answer3.removeEventListener('click', functionAnswerVillage3)
    answer1.removeEventListener('click', functionAnswerTavern1)
    answer2.removeEventListener('click', functionAnswerTavern2)
    answer3.removeEventListener('click', functionAnswerTavern3)
    buttonPass.removeEventListener('click',()=>{ 
    functionIntervalDialogEnd() 
    })

    for(d=0;d<dialogPlay[0].lentgh;d++){}// Boucle de parcourt de la ligne de dialogue chargée en paramètre
    let intervalDialogue = setInterval(functionIntervalDialog,100) // Variable de l'interval d'affichage des caractères de la ligne de dialogue
// console.log(dialogPlay[0])
       function functionIntervalDialog(){ // Départ fonction interval d'affichage des caractères de la ligne de dialogue
          displayDialogue.textContent+=dialogPlay[0][d++] //Ajoute les caractères a l'élément d'affichage
          if(dialogPlay[0][d]===undefined){functionIntervalDialogEnd()} // Si caractère non défini, lancer fonction de fin d'interval
        }// Fin fonction interval d'affichage des caractères de la ligne de dialogue

        console.log(`dialogue avant pass : ${dialogPlay}`)
        buttonPass.addEventListener('click',()=>{
          console.log(`dialogue après pass : ${dialogPlay}`)      // Evènement bouton, lance fonction fin d'interval et affiche totalité ligne de dialogue     // Evènement bouton, lance fonction fin d'interval et affiche totalité ligne de dialogue
          functionIntervalDialogEnd()                             //PROBLEME\\ réaffiche tout les dialogue déja joué avant dialogue cible
        })

       function functionIntervalDialogEnd(){ // Fonction de fin d'interval, supprime interval, dissimule 'passer', affiche 'retour', affiche réponses, supprime evenemnt bouton
            clearInterval(intervalDialogue)
            displayDialogue.textContent = ''                
            displayDialogue.textContent+=dialogPlay[0]
            buttonPass.style.display = 'none'
            buttonBack.style.display = 'contents'
            answer1.textContent = arrayStringAnswers[0]
            answer2.textContent = arrayStringAnswers[1]
            answer3.textContent = arrayStringAnswers[2]
            if(place===0){
                answer1.addEventListener('click', functionAnswerMenu)
            }
            if(place===1){
                answer1.addEventListener('click', functionAnswerVillage1)
                answer2.addEventListener('click', functionAnswerVillage2)
                answer3.addEventListener('click', functionAnswerVillage3)
            }
            if(place===2){
                answer1.addEventListener('click', functionAnswerTavern1)
                answer2.addEventListener('click', functionAnswerTavern2)
                answer3.addEventListener('click', functionAnswerTavern3)
            }
       } // Fin de la Fonction de fin d'interval
}// Fin de la fonction principale de dialogue



// BACK BUTTON
buttonBack.addEventListener('click',()=>{
    if(place===2){
        dialog(arrayStringDialogueTavernElse, arrayStringAnswersTavern1, arrayStringTitleTavern, arrayStringParagraphTavern)
        console.log(questValidInnkeeper===true||questValidRogue===true)
        if(questValidInnkeeper===true||questValidRogue===true){
            answer1.classList.remove('disabled')
            answer1.classList.add('answer1')
        }
        if(questValidRogue===true){
            answer1.classList.remove('disabled')
            answer1.classList.add('answer1')
        }
        console.log(`Quete taverne validée : ${questValidInnkeeper}`)
        console.log(`Quete rogue validée : ${questValidRogue}`)
    }
})


buttonQuit.addEventListener('click',()=>{
    if(place===1){
        
    }
    if(place===2){
        if(questValidInnkeeper===true){
            answer1.classList.remove('disabled')
            answer1.classList.add('answer1')
        }

        buttonBack.style.visibility = 'hidden'
        buttonQuit.style.visibility = 'hidden'
        innkeeper.style.transform = 'translate(-300%,0%)'
        setTimeout(() => {actualPlace(village)}, 1000);
    }
})

buttonInterlocutor.addEventListener('click', () => {
    if(place===2){
        innkeeper.style.transform = 'translate(-300%,0%)'
        rogueBack.style.transform = 'translate(-300%,50%)'
        rogue.style.transform = 'translate(-100%,0%)'
        buttonInterlocutor.style.visibility = 'hidden'
        answer1.classList.remove('disabled')
        answer1.classList.add('answer1')

        dialog(arrayStringDialogueTavernRogue, arrayStringAnswersTavernRogue, arrayStringTitleTavernRogue, arrayStringParagraphTavernRogue)
    }
})