// -----CONTROL DIV----------------------------------------------------------------------------------------------------------//

const mouseEvent = document.querySelector('.mouseEvent')
const controlDisplay = document.querySelector('.controlDisplay')
const x = document.getElementById('controlx')
const y = document.getElementById('controly')

mouseEvent.addEventListener('click', control)
function control(){
    controlDisplay.textContent = 'cliquer pour fixer'
    mouseEvent.addEventListener('mousemove', (e) => {
        mouseEvent.style.backgroundColor = 'green'
        mouseEvent.style.position = 'absolute'
        let ex = e.x
        let ey = e.y
        x.textContent = ex
        y.textContent = ey
        console.log(ex,ey)
        mouseEvent.style.left = e.x / window.innerWidth * 100 - 2.5 + '%'
        mouseEvent.style.top = e.y / window.innerHeight * 100 - 5 + '%'
    }) 

    mouseEvent.addEventListener('click', () => {
        console.log(mouseEvent)
        mouseEvent.removeEventListener('click', control)
        mouseEvent.style.pointerEvents = 'none'
        mouseEvent.style.backgroundColor = 'blue'
        controlDisplay.textContent = 'survoler pour prendre'
        setTimeout(() => {mouseEvent.style.pointerEvents = 'auto'}, 1000)
    })
}





