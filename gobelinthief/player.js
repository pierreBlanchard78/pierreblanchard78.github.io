// CONSTANTS DISPLAY INFOS PLAYER
const numberHealth = document.querySelector('.numberHealth')
const numberGold = document.querySelector('.numberGold')
// CONSTANTS INVENTORY PLAYER
const emplacement1 = document.querySelector('.emplacement1')
const emplacement2 = document.querySelector('.emplacement2')
const emplacement3 = document.querySelector('.emplacement3')
const emplacement4 = document.querySelector('.emplacement4')
const emplacement5 = document.querySelector('.emplacement5')
const emplacement6 = document.querySelector('.emplacement6')
// CONSTANTS PRINCIPALS ITEMS
const principalItem1 = document.querySelector('.principalItem1')
const principalItem2 = document.querySelector('.principalItem2')
// VARIABLE INFOS PLAYER
let maximumHealth = 100
let health = 50
let gold = 100
let inventory = []
// DISPLAY INFOS PLAYER
numberHealth.textContent = health
numberGold.textContent = gold

// DAGGER CONSTRUCTION
let dagger = document.createElement('div')
dagger.textContent = 'I'
dagger.classList.add('dagger')
principalItemInsert(dagger)

function principalItemInsert(item){
    if(principalItem1.innerHTML==''){
        principalItem1.appendChild(item)
    }else if(principalItem2.innerHTML==''){principalItem2.appendChild(item)
    }else {
        return ('Inventaire Plein')
    }
}

