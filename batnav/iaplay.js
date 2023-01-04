/* -----IA------------------------------------------------------------------------------------------------------------------------ */

function iaplay(){
    //PAS DE CLIC PENDANT LE TOUR IA
    grid.style.pointerEvents = 'none'
    //TOUR JOUEUR COULEUR TABLEAU
    roundPlayer.style.backgroundColor = 'white'
    scorePlayer.style.backgroundColor = 'white'
    targetListPlayer.style.backgroundColor = 'white'
    //TOUR IA COULEUR TABLEAU
    roundIa.style.backgroundColor = "red"
    scoreIa.style.backgroundColor = "red"
    targetListIa.style.backgroundColor = 'crimson'
    //TOUR IA +1 ET AFFICHE
    roundIaVar++
    roundIa.textContent = roundIaVar
    //ACTION TOUR IA APRES DELAI 1/2 SECONDE
    setTimeout(() => {
        //RETOUR DU CLIC
        grid.style.pointerEvents = 'auto'
        //TOUR JOUEUR +1 ET AFFICHE
        roundPlayerVar++
        roundPlayer.textContent = roundPlayerVar
        //TOUR JOUEUR COULEUR TABLEAU
        roundPlayer.style.backgroundColor = 'blue'
        scorePlayer.style.backgroundColor = 'blue'
        targetListPlayer.style.backgroundColor = 'lightblue'
        //TOUR IA COULEUR TABLEAU
        roundIa.style.backgroundColor = "white"
        scoreIa.style.backgroundColor = "white"
        targetListIa.style.backgroundColor = 'white'
        //CREATION MARQUE IA
        const marq = document.createElement('div')   
        marq.style.height = '10px'
        marq.style.width = '10px'
        marq.style.margin = 'auto auto' 
        marq.style.borderRadius = '30px'
        marq.style.backgroundColor = 'red'
        //CHOIX IA CASE       
        let choiceIterate = 1
        choice()
        function choice(){
            numbox = Math.floor(Math.random()*225)
            choiceIa = game[numbox]
            console.log(`Choix IA n°${choiceIterate} :`,choiceIa) 
                if(!exit.includes(choiceIa)){
                    choiceIterate = 0
                    console.log('Choix IA non present dans exit :',!exit.includes(choiceIa))
                    console.log('Tableau exit :',exit)
                    exit.unshift(choiceIa)
                    boxNumVar--
                    console.log('Cases restantes :',boxNumVar)
                    choiceIa.appendChild(marq)
                    choiceIa.style.pointerEvents = 'none'
                    if(choiceIa.style.backgroundColor === 'blue'){choiceIa.style.backgroundColor = 'orange';scoreIaVar++}
                }else{choiceIterate++;choice(choiceIa)}
        }
        roundIa.textContent = roundIaVar
        scoreIa.textContent = scoreIaVar
    },500)
    
}