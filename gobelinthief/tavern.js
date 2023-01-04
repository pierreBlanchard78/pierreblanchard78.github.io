let tavern = 2


// QUEST VALIDATION
let questValidInnkeeper = false
let questValidRogue = false
// NAVIGATION DIALOG FUNCTION FOR ANSWER 1
console.log(`Quete taverne validée : ${questValidInnkeeper}`)
console.log(`Quete rogue validée : ${questValidRogue}`)
function functionAnswerTavern1(){ //Fonction de navigation réponse 1; Si dialogue affiché === dialogue#, passer au suivant
    if(displayDialogue.textContent.length===arrayStringDialogueTavern1[0].length || displayDialogue.textContent.length===arrayStringDialogueTavernElse[0].length){// Lancer dialogue mission
        dialog(arrayStringDialogueTavern1a2, arrayStringAnswersTavern1a2, arrayStringTitleTavern, arrayStringParagraphTavern)
        console.log(`Quete taverne validée : ${questValidInnkeeper}`)
        console.log(`Quete rogue validée : ${questValidRogue}`)
    }
    if(displayDialogue.textContent.length===arrayStringDialogueTavern1a2[0].length){ // Suite dialogue mission reponse 1
        dialog(arrayStringDialogueTavern1a2a3, arrayStringAnswersTavern1a2a3, arrayStringTitleTavern, arrayStringParagraphTavern)      
    }
    if(displayDialogue.textContent.length===arrayStringDialogueTavern1a2a3[0].length){ // dialogue acceptation de la quete reponse 1 
        dialog(arrayStringDialogueTavern1a2a3a4, arrayStringAnswersTavern1a2a3a4, arrayStringTitleTavern, arrayStringParagraphTavern)      
    }
    if(displayDialogue.textContent.length===arrayStringDialogueTavern1a2a3a4[0].length){ // Confirmation prise quete
        dialog(arrayStringDialogueTavernElse, arrayStringAnswersTavern1, arrayStringTitleTavern, arrayStringParagraphTavern)
        questValidInnkeeper = true
        answer1.classList.remove('answer1')
        answer1.classList.add('disabled')
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuy[0]||displayDialogue.textContent===arrayStringDialogueTavernBuyInventoryFull[0]){ // Confirmation achat lait de chèvre
        dialog(arrayStringDialogueTavernBuyGoatsmilk, arrayStringAnswersTavernBuy, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuyGoatsmilk[0]){ // Réponse 'oui' achat lait de chèvre
        if(emplacement6.innerHTML===''){
            dialog(arrayStringDialogueTavernBuy, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)
            goatsMilkAcquisition()
        }else{dialog(arrayStringDialogueTavernBuyInventoryFull, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)}
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuyMead[0]){ // Réponse 'oui' achat hydromel
        if(emplacement6.innerHTML===''){
            dialog(arrayStringDialogueTavernBuy, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)
            meadAcquisition()
        }else{dialog(arrayStringDialogueTavernBuyInventoryFull, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)}
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuyPissofdragon[0]){ // Réponse 'oui' achat pisse de dragon
        if(emplacement6.innerHTML===''){
            dialog(arrayStringDialogueTavernBuy, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)
            pissofdragonAcquisition()
        }else{dialog(arrayStringDialogueTavernBuyInventoryFull, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)}
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernHelp[0]||displayDialogue.textContent===arrayStringDialogueTavernHelpBuy[0]||displayDialogue.textContent===arrayStringDialogueTavernHelpRogue[0]){ // Question menant au dialogue mission
        dialog(arrayStringDialogueTavernHelpRogue, arrayStringAnswersTavernHelp, arrayStringTitleTavern, arrayStringParagraphTavern)
        questValidRogue = true
        answer1.classList.remove('answer1')
        answer1.classList.add('disabled')
        buttonInterlocutor.style.visibility = 'visible'
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernRestBuy[0]){ // Restauration réponse 'oui' ('Au pieu')
        dialog(arrayStringDialogueTavernHelp, arrayStringAnswersTavernHelp, arrayStringTitleTavern, arrayStringParagraphTavern)
        if(health<100){ // Si vies inférieur a 100, alors clignotements respectifs, vies au max, or moins 5,sinon , clignotements rouge vies
            numberHealth.classList.add('lumGreen');setTimeout(()=>{numberHealth.classList.remove('lumGreen')},1000)
            numberGold.classList.add('lumRed');setTimeout(()=>{numberGold.classList.remove('lumRed')},1000)
            health += maximumHealth-health
            numberHealth.textContent = health
            gold = gold-5
            numberGold.textContent = gold
        }else{numberHealth.classList.add('lumRed');setTimeout(()=>{numberHealth.classList.remove('lumRed')},1000)}
    }
}
// NAVIGATION DIALOG FUNCTION FOR ANSWER 2
function functionAnswerTavern2(){ // Fonction de navigation réponse 2; Si dialogue affiché === dialogue#, passer au suivant
    if(displayDialogue.textContent===arrayStringDialogueTavern1[0] || displayDialogue.textContent.length===arrayStringDialogueTavernElse[0].length){ // lancement dialogues d'achats
        dialog(arrayStringDialogueTavernBuy, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)
        // if(questValidInnkeeper===true){
        //     answer1.classList.remove('disabled')
        //     answer1.classList.add('answer1')
        // }
    }
    if(displayDialogue.textContent===arrayStringDialogueTavern1a2[0]){ // Suite dialogue mission reponse 2
        dialog(arrayStringDialogueTavern1a2a3, arrayStringAnswersTavern1a2a3, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent.length===arrayStringDialogueTavern1a2a3[0].length){ // dialogue acceptation de la quete reponse 2 
        dialog(arrayStringDialogueTavern1a2a3a4, arrayStringAnswersTavern1a2a3a4, arrayStringTitleTavern, arrayStringParagraphTavern)      
    }
    if(displayDialogue.textContent.length===arrayStringDialogueTavern1a2a3a4[0].length){ // Réponse 2 fin dialogue mission
        dialog(arrayStringDialogueTavernElse, arrayStringAnswersTavern1, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuy[0]||displayDialogue.textContent===arrayStringDialogueTavernBuyInventoryFull[0]){ // Confirmation achat hydromel
        dialog(arrayStringDialogueTavernBuyMead, arrayStringAnswersTavernBuy, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuyGoatsmilk[0]){ // Réponse 'non' achat lait de chèvre
        dialog(arrayStringDialogueTavernBuy, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuyMead[0]){ // Réponse 'non' achat hydromel
        dialog(arrayStringDialogueTavernBuy, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuyPissofdragon[0]){ // Réponse 'non' achat pisse de dragon
        dialog(arrayStringDialogueTavernBuy, arrayStringAnswersTavernBuyChoice, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernHelp[0]||displayDialogue.textContent===arrayStringDialogueTavernHelpRogue[0]||displayDialogue.textContent===arrayStringDialogueTavernHelpBuy[0]){ // Dialogue demande 'ou acheter' ('helpBuy')
        dialog(arrayStringDialogueTavernHelpBuy, arrayStringAnswersTavernHelp, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernRestBuy[0]){ // Réponse repos 'non' ('On verra plus tard')
        dialog(arrayStringDialogueTavernHelp, arrayStringAnswersTavernHelp, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
}
// NAVIGATION DIALOG FUNCTION FOR ANSWER 3
function functionAnswerTavern3(){ // Fonction de navigation réponse 3; Si dialogue affiché === dialogue#, passer au suivant
    if(displayDialogue.textContent===arrayStringDialogueTavern1a2[0]){ // Dialogue rembarre
        dialog(arrayStringDialogueTavernElse, arrayStringAnswersTavern1, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
    if(displayDialogue.textContent===arrayStringDialogueTavern1[0] || displayDialogue.textContent.length===arrayStringDialogueTavernElse[0].length){ // Dialogues demande info (help)
        dialog(arrayStringDialogueTavernHelp, arrayStringAnswersTavernHelp, arrayStringTitleTavern, arrayStringParagraphTavern)
        if(questValidRogue===true){
            answer1.classList.remove('answer1')
            answer1.classList.add('disabled')
        }
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernHelp[0]||displayDialogue.textContent===arrayStringDialogueTavernHelpBuy[0]||displayDialogue.textContent===arrayStringDialogueTavernHelpRogue[0]){ // Dialogue demande repos
        dialog(arrayStringDialogueTavernRestBuy, arrayStringAnswersTavernRest, arrayStringTitleTavern, arrayStringParagraphTavern)
        if(questValidInnkeeper===true||questValidRogue===true){
            answer1.classList.remove('disabled')
            answer1.classList.add('answer1')
        }
    }
    if(displayDialogue.textContent.length===arrayStringDialogueTavern1a2a3[0].length){ // dialogue acceptation de la quete reponse 3 
        dialog(arrayStringDialogueTavern1a2a3a4, arrayStringAnswersTavern1a2a3a4, arrayStringTitleTavern, arrayStringParagraphTavern)      
    }
    if(displayDialogue.textContent===arrayStringDialogueTavernBuy[0]||displayDialogue.textContent===arrayStringDialogueTavernBuyInventoryFull[0]){ // Confirmation achat pisse de dragon
        dialog(arrayStringDialogueTavernBuyPissofdragon, arrayStringAnswersTavernBuy, arrayStringTitleTavern, arrayStringParagraphTavern)
    }
}   



let goatsMilk = ''
let mead = ''
let pissofdragon = ''

function goatsMilkAcquisition(){
    // GOATSMILK CONSTRUCTION
    goatsMilk = document.createElement('div')
    goatsMilk.classList.add('goatsMilk')
    let bottleGoatsMilk = document.createElement('div')
    bottleGoatsMilk.classList.add('bottleGoatsMilk')
    let bottleGoatsMilkContent = document.createElement('div')
    bottleGoatsMilkContent.classList.add('bottleGoatsMilkContent')
    // GOATSMILK ASSEMBLY
    goatsMilk.appendChild(bottleGoatsMilk)
    bottleGoatsMilk.textContent = 'I'
    bottleGoatsMilk.appendChild(bottleGoatsMilkContent)
    inventoryInsert(goatsMilk)
}

function meadAcquisition(){
    // MEAD CONSTRUCTION
    mead = document.createElement('div')
    mead.classList.add('mead')
    let bottleMead = document.createElement('div')
    bottleMead.classList.add('bottleMead')
    let bottleMeadContent = document.createElement('div')
    bottleMeadContent.classList.add('bottleMeadContent')
    // MEAD ASSEMBLY
    mead.appendChild(bottleMead)
    bottleMead.textContent = 'I'
    bottleMead.appendChild(bottleMeadContent)
    inventoryInsert(mead)
}

function pissofdragonAcquisition(){
    // PISSOFDRAGON CONSTRUCTION
    pissofdragon = document.createElement('div')
    pissofdragon.classList.add('pissofdragon')
    let bottlePissofdragon = document.createElement('div')
    bottlePissofdragon.classList.add('bottlePissofdragon')
    let bottlePissofdragonContent = document.createElement('div')
    bottlePissofdragonContent.classList.add('bottlePissofdragonContent')
    // PISSOFDRAGON ASSEMBLY
    pissofdragon.appendChild(bottlePissofdragon)
    bottlePissofdragon.textContent = 'I'
    bottlePissofdragon.appendChild(bottlePissofdragonContent)
    inventoryInsert(pissofdragon)
}
//INSERT ITEM IN INVENTORY
function inventoryInsert(item){
    console.log(item.classList)
    if(emplacement1.innerHTML==''){
        emplacement1.appendChild(item)
    }else if(emplacement2.innerHTML==''){emplacement2.appendChild(item)
    }else if(emplacement3.innerHTML==''){emplacement3.appendChild(item)
    }else if(emplacement4.innerHTML==''){emplacement4.appendChild(item)
    }else if(emplacement5.innerHTML==''){emplacement5.appendChild(item)
    }else if(emplacement6.innerHTML==''){emplacement6.appendChild(item)
    }else {
        return ('Inventaire Plein')}
    //PAYMENT
    if(item===goatsMilk){
        gold--
        numberGold.textContent = gold
        numberGold.classList.add('lumRed');setTimeout(()=>{numberGold.classList.remove('lumRed')},1000)
    }
    if(item===mead){
        gold = gold-3
        numberGold.textContent = gold
        numberGold.classList.add('lumRed');setTimeout(()=>{numberGold.classList.remove('lumRed')},1000)
    }
    if(item===pissofdragon){
        gold = gold-6
        numberGold.textContent = gold
        numberGold.classList.add('lumRed');setTimeout(()=>{numberGold.classList.remove('lumRed')},1000)
    }
}


