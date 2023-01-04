// -----CLOCK----------------------------------------------------------------------------------------------------------//

// CLOCK ELEMENTS CREATION
const dateTime = document.createElement('div')
const displayDate = document.createElement('div')
const cadran = document.createElement('div')
const displayHours = document.createElement('div')
const displayMinutes = document.createElement('div')
const displaySecondes = document.createElement('div')
// CLOCK ELEMENTS PLACEMENTS IN HTML
sidebarRight.prepend(dateTime)// CHANGE ELEMENT WHERE DISPLAY CLOCK 
dateTime.append(displayDate)
dateTime.append(cadran)
cadran.append(displayHours)
cadran.append(':')
cadran.append(displayMinutes)
cadran.append(':')
cadran.append(displaySecondes)
// DIV
dateTime.style.display = 'flex'
dateTime.style.flexDirection = 'column'
dateTime.style.alignItems = 'center'
// CADRAN
cadran.style.display = 'flex'
cadran.style.justifyContent = 'center'
cadran.style.alignItems = 'center'
cadran.style.height = '30px'
cadran.style.width = '100px'
cadran.style.margin = '10px auto'
cadran.style.border = '3px solid black'
cadran.style.backgroundColor = 'rgb(32, 32, 32)'
// cadran.style.color = 'white'
// HOURS
displayHours.style.textAlign = 'center'
displayHours.style.height = '25px'
displayHours.style.width = '30px'
displayHours.style.backgroundColor = 'black'
displayHours.style.fontSize = '20px'
// MINUTES
displayMinutes.style.textAlign = 'center'
displayMinutes.style.height = '25px'
displayMinutes.style.width = '30px'
displayMinutes.style.backgroundColor = 'black'
displayMinutes.style.fontSize = '20px'
// SECONDES
displaySecondes.style.textAlign = 'center'
displaySecondes.style.height = '25px'
displaySecondes.style.width = '30px'
displaySecondes.style.backgroundColor = 'black'
displaySecondes.style.fontSize = '20px'
// DATE CONSTRUCTION
const temp = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
const date = temp.toLocaleDateString('fr-FR',options)
// FUNCTION CLOCK INTERVAL
let t1 = setInterval(time, 1000)
function time() {
    displayDate.textContent = date
    let hours = displayHours.textContent = temp.getHours()
    let minutes = displayMinutes.textContent = temp.getMinutes()
    let secondes = displaySecondes.textContent = temp.getSeconds()

    if(hours < 10){
        displayHours.textContent = '0'+hours 
    }
    if(minutes < 10){
        displayMinutes.textContent = '0'+minutes
    }
    if(secondes < 10){
        displaySecondes.textContent = '0'+secondes
    }
    temp.setSeconds(temp.getSeconds()+1)
}
