/* -----VARIABLES----------------------------------------------------------------------------------------------------------------------- */
/* -----START----------------------------------------------------------------------------------------------------------------------- */
/* -----PLAYER-------------------------------------------------------------------------------------------------------------------------- */

/* -----VARIABLES----------------------------------------------------------------------------------------------------------------------- */

let roundPlayerVar = 0
let roundIaVar = 0
let scorePlayerVar = 0
let scoreIaVar = 0
let boxNumVar = 225
let boatDestroy = 0

/* -----START------------------------------------------------------------------------------------------------------------------------ */

startButton.addEventListener('click', () => {// LAUCH
    startButton.style.display = 'none'
    selectGame.style.border = 'transparent'
    selectGame.style.appearance = 'none'
    selectGame.style.pointerEvents = 'none'
    roundPlayer.style.backgroundColor = "blue"
    scorePlayer.style.backgroundColor = "blue"
    targetListPlayer.style.backgroundColor = "lightblue"
    roundIa.style.backgroundColor = "white"
    scoreIa.style.backgroundColor = "white"
    targetListIa.style.backgroundColor = "white"
    roundPlayerVar++
    roundPlayer.textContent = roundPlayerVar
    grid.style.pointerEvents = 'auto'
    // CONDITION CHOICE GAME
    if(selectGame.value==='game1'){
        startPlayer(gamePlayer1)
        startIa(gameIa1)
    }
    if(selectGame.value==='game2'){
        startPlayer(gamePlayer2)
        startIa(gameIa2)
    }
    if(selectGame.value==='game3'){
        startPlayer(gamePlayer3)
        startIa(gameIa3)
    }
    if(selectGame.value==='game4'){
        startPlayer(gamePlayer4)
        startIa(gameIa4)
    }
    if(selectGame.value==='game5'){
        startPlayer(gamePlayer5)
        startIa(gameIa5)
    }
})

function startPlayer(gamePlayer){// DISPLAY BOATS PLAYER
    for(iPlayer=0;iPlayer<gamePlayer.length;iPlayer++){
        for(iPlayerbox=0;iPlayerbox<gamePlayer[iPlayer].length;iPlayerbox++){
            gamePlayer[iPlayer][iPlayerbox].style.backgroundColor = 'blue'
            gamePlayer[iPlayer][iPlayerbox].style.pointerEvents = 'none'
        }
    }
}

function startIa(gameIa){// DISPLAY BOATS IA
    for(iIa=0;iIa<gameIa.length;iIa++){
        console.log(gameIa[iIa])
        for (iIabox=0;iIabox<gameIa[iIa].length;iIabox++){
            gameIa[iIa][iIabox].style.backgroundColor = 'white'
            exit.push(gameIa[iIa][iIabox])
        }
    }
}

/* -----PLAYER------------------------------------------------------------------------------------------------------------------------ */

for (boxClick=0;boxClick<game.length;boxClick++){// BROWSE GRID
    game[boxClick].addEventListener('click',(event)=>{
        let boxPlay = event.target
        exit.unshift(boxPlay)
        const marq = document.createElement('div')
        marq.style.height = '10px'
        marq.style.width = '10px'
        marq.style.margin = 'auto auto' 
        marq.style.borderRadius = '30px'
        marq.style.backgroundColor = 'blue'
        boxPlay.style.pointerEvents = 'none'
        boxPlay.appendChild(marq)
        console.clear()
        boxNumVar--
        if(boxPlay.style.backgroundColor == 'white'){
            boxPlay.style.backgroundColor = 'orange'
            scorePlayerVar++
            scorePlayer.textContent = scorePlayerVar
        }
        destroyVerif()
        iaplay()
    })
}



function destroyVerif(){// CHECK THAT THE BOATS ARE DESTROYED, IF SO, FUNCTION WIN OR LOSE

    if(selectGame.value==='game1'){
        //TARGET DESTROY IA VALID
        displayDestroyAircraftCarrier(aircraftCarrierIa,E2,E3,E4,E5,E6)
        displayDestroyCruiser(cruiserIa,G6,H6,I6,J6)
        displayDestroySubmarine(submarineIa1,H10,I10,J10)
        displayDestroySubmarine(submarineIa2,A8,A9,A10)
        displayDestroyTorpedoBoat(torpedoBoatIa1,A3,B3)
        displayDestroyTorpedoBoat(torpedoBoatIa2,M1,M2)
        displayDestroyTorpedoBoat(torpedoBoatIa3,M15,N15)
        //TARGET DESTROY PLAYER VALID
        displayDestroyAircraftCarrier(aircraftCarrierPlayer,I12,J12,K12,L12,M12)
        displayDestroyCruiser(cruiserPlayer,O2,O3,O4,O5)
        displayDestroySubmarine(submarinePlayer1,B12,B13,B14)
        displayDestroySubmarine(submarinePlayer2,I1,I2,I3)
        displayDestroyTorpedoBoat(torpedoBoatPlayer1,H8,I8)
        displayDestroyTorpedoBoat(torpedoBoatPlayer2,E12,E13)
        displayDestroyTorpedoBoat(torpedoBoatPlayer3,B5,C5)
    }
    if(selectGame.value==='game2'){
        //TARGET DESTROY IA VALID
        displayDestroyAircraftCarrier(aircraftCarrierIa,O11,O12,O13,O14,O15)
        displayDestroyCruiser(cruiserIa,O2,O3,O4,O5)
        displayDestroySubmarine(submarineIa1,F6,G6,H6)
        displayDestroySubmarine(submarineIa2,G2,G3,G4)
        displayDestroyTorpedoBoat(torpedoBoatIa1,C10,D10)
        displayDestroyTorpedoBoat(torpedoBoatIa2,A2,B2)
        displayDestroyTorpedoBoat(torpedoBoatIa3,I11,I12)
        //TARGET DESTROY PLAYER VALID
        displayDestroyAircraftCarrier(aircraftCarrierPlayer,I2,J2,K2,L2,M2)
        displayDestroyCruiser(cruiserPlayer,H8,I8,J8,K8)
        displayDestroySubmarine(submarinePlayer1,B15,C15,D15)
        displayDestroySubmarine(submarinePlayer2,G10,G11,G12)
        displayDestroyTorpedoBoat(torpedoBoatPlayer1,K12,K13)
        displayDestroyTorpedoBoat(torpedoBoatPlayer2,C5,C6)
        displayDestroyTorpedoBoat(torpedoBoatPlayer3,N7,N8)
    }
    if(selectGame.value==='game3'){
        //TARGET DESTROY IA VALID
        displayDestroyAircraftCarrier(aircraftCarrierIa,B8,B9,B10,B11,B12)
        displayDestroyCruiser(cruiserIa,D2,D3,D4,D5)
        displayDestroySubmarine(submarineIa1,N10,N11,N12)
        displayDestroySubmarine(submarineIa2,H14,I14,J14)
        displayDestroyTorpedoBoat(torpedoBoatIa1,G7,G8)
        displayDestroyTorpedoBoat(torpedoBoatIa2,J4,K4)
        displayDestroyTorpedoBoat(torpedoBoatIa3,A15,B15)
        //TARGET DESTROY PLAYER VALID
        displayDestroyAircraftCarrier(aircraftCarrierPlayer,O9,O10,O11,O12,O13)
        displayDestroyCruiser(cruiserPlayer,N1,N2,N3,N4)
        displayDestroySubmarine(submarinePlayer1,I10,J10,K10)
        displayDestroySubmarine(submarinePlayer2,I1,I2,I3)
        displayDestroyTorpedoBoat(torpedoBoatPlayer1,A3,B3)
        displayDestroyTorpedoBoat(torpedoBoatPlayer2,G2,G3)
        displayDestroyTorpedoBoat(torpedoBoatPlayer3,N15,O15)
    }
    if(selectGame.value==='game4'){
        //TARGET DESTROY IA VALID
        displayDestroyAircraftCarrier(aircraftCarrierIa,B1,B2,B3,B4,B5)
        displayDestroyCruiser(cruiserIa,J6,K6,L6,M6)
        displayDestroySubmarine(submarineIa1,O7,O8,O9)
        displayDestroySubmarine(submarineIa2,B7,C7,D7)
        displayDestroyTorpedoBoat(torpedoBoatIa1,M12,M13)
        displayDestroyTorpedoBoat(torpedoBoatIa2,F12,F13)
        displayDestroyTorpedoBoat(torpedoBoatIa3,M2,M3)
        //TARGET DESTROY PLAYER VALID
        displayDestroyAircraftCarrier(aircraftCarrierPlayer,L1,L2,L3,L4,L5)
        displayDestroyCruiser(cruiserPlayer,C8,D8,E8,F8)
        displayDestroySubmarine(submarinePlayer1,B10,B11,B12)
        displayDestroySubmarine(submarinePlayer2,F1,G1,H1)
        displayDestroyTorpedoBoat(torpedoBoatPlayer1,C3,D3)
        displayDestroyTorpedoBoat(torpedoBoatPlayer2,G12,G13)
        displayDestroyTorpedoBoat(torpedoBoatPlayer3,J9,K9)
    }
    if(selectGame.value==='game5'){
        //TARGET DESTROY IA VALID
        displayDestroyAircraftCarrier(aircraftCarrierIa,F13,G13,H13,I13,J13)
        displayDestroyCruiser(cruiserIa,I8,J8,K8,L8)
        displayDestroySubmarine(submarineIa1,I10,J10,K10)
        displayDestroySubmarine(submarineIa2,I6,J6,K6)
        displayDestroyTorpedoBoat(torpedoBoatIa1,L12,M12)
        displayDestroyTorpedoBoat(torpedoBoatIa2,N8,O8)
        displayDestroyTorpedoBoat(torpedoBoatIa3,L4,M4)
        //TARGET DESTROY PLAYER VALID
        displayDestroyAircraftCarrier(aircraftCarrierPlayer,F3,G3,H3,I3,J3)
        displayDestroyCruiser(cruiserPlayer,D8,E8,F8,G8)
        displayDestroySubmarine(submarinePlayer1,E10,F10,G10)
        displayDestroySubmarine(submarinePlayer2,E6,F6,G6)
        displayDestroyTorpedoBoat(torpedoBoatPlayer1,C12,D12)
        displayDestroyTorpedoBoat(torpedoBoatPlayer2,A8,B8)
        displayDestroyTorpedoBoat(torpedoBoatPlayer3,C4,D4)
    }

    //FUNCTIONS TARGET DESTROY VALID
    function displayDestroyAircraftCarrier(boat,box1,box2,box3,box4,box5){
        if(
            box1.style.backgroundColor==='orange'&&
            box2.style.backgroundColor==='orange'&&
            box3.style.backgroundColor==='orange'&&
            box4.style.backgroundColor==='orange'&&
            box5.style.backgroundColor==='orange'){
            boat.textContent = '\u274c'
        }
    }
    function displayDestroyCruiser(boat,box1,box2,box3,box4){
        if(
            box1.style.backgroundColor==='orange'&&
            box2.style.backgroundColor==='orange'&&
            box3.style.backgroundColor==='orange'&&
            box4.style.backgroundColor==='orange'){
            boat.textContent = '\u274c'
        }
    }
    function displayDestroySubmarine(boat,box1,box2,box3){
        if(
            box1.style.backgroundColor==='orange'&&
            box2.style.backgroundColor==='orange'&&
            box3.style.backgroundColor==='orange'){
            boat.textContent = '\u274c'
        }
    }
    function displayDestroyTorpedoBoat(boat,box1,box2){
        if(
            box1.style.backgroundColor==='orange'&&
            box2.style.backgroundColor==='orange'){
            boat.textContent = '\u274c'
        }
    }

    if( // IF ALL BOATS IA DESTROYED, LAUCH WIN FUNCTION
        aircraftCarrierIa.textContent==='\u274c'&& 
        cruiserIa.textContent==='\u274c'&& 
        submarineIa1.textContent==='\u274c'&& 
        submarineIa2.textContent==='\u274c'&& 
        torpedoBoatIa1.textContent==='\u274c'&& 
        torpedoBoatIa2.textContent==='\u274c'&& 
        torpedoBoatIa3.textContent==='\u274c'
        ){
            console.log('Tu a gagné')
            console.log('L\'ia a perdu')
            win()
    }
    if( // IF ALL BOATS PLAYER DESTROYED, LAUCH LOSE FUNCTION
        aircraftCarrierPlayer.textContent==='\u274c'&& 
        cruiserPlayer.textContent==='\u274c'&& 
        submarinePlayer1.textContent==='\u274c'&& 
        submarinePlayer2.textContent==='\u274c'&& 
        torpedoBoatPlayer1.textContent==='\u274c'&& 
        torpedoBoatPlayer2.textContent==='\u274c'&& 
        torpedoBoatPlayer3.textContent==='\u274c'
        ){
            console.log('l\'ia a gagné')
            console.log('Tu a perdu')
            lose()
    }
}


function win(){
    setTimeout(() => {grid.style.pointerEvents = 'none'}, 10);
    console.log(grid.style.pointerEvents)
    winOrLose.append('WIN !')
}
function lose(){
    setTimeout(() => {grid.style.pointerEvents = 'none'}, 10);
    winOrLose.style.color = 'red'
    winOrLose.append('LOSE !')
}

