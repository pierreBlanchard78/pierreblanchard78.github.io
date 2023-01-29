//-----KEY POINTER------------------------------------------------------------------------------------------------------------------------------------------------------------//

// CANCEL DEFAULT CURSOR IN DOM
let elements = document.getElementsByTagName('*')
for(elem of elements){
    elem.style.cursor = 'none'  
}
// POINTER ELEMENTS CREATION
const pointer = document.createElement('div')
const squarex = document.createElement('div')
const squarey = document.createElement('div')
const circle = document.createElement('div')
// POINTER ELEMENTS PLACEMENTS IN HTML
document.body.appendChild(pointer)
circle.append(squarex)
circle.append('.')
circle.append(squarey)
pointer.append(circle)
// POINTER STYLE ATTRIBUTS
pointer.style.position = 'absolute'
pointer.style.pointerEvents = 'none'
pointer.style.zIndex = '10'
// SQUARE X STYLE ATTRIBUTES
squarex.style.position = 'absolute'
squarex.style.height = '5px'
squarex.style.width = '35px'
squarex.style.top = '12px'
squarex.style.left = '30px'
squarex.style.backgroundColor = 'red'
squarex.style.pointerEvents = 'none'
squarex.style.visibility = 'hidden'
squarex.style.transition = '1s'
// SQUARE Y STYLE ATTRIBUTES
squarey.style.position = 'absolute'
squarey.style.height = '35px'
squarey.style.width = '5px'
squarey.style.top = '-1px'
squarey.style.left = '12.5px'
squarey.style.backgroundColor = 'red'
squarey.style.pointerEvents = 'none'
squarey.style.visibility = 'hidden'
squarey.style.transition = '1s'
// CIRCLE STYLE ATTRIBUTES
circle.style.position = 'absolute'
circle.style.height = '30px'
circle.style.width = '30px'
circle.style.border = '5px solid red'
circle.style.borderRadius = '50%'
circle.style.pointerEvents = 'none'
circle.style.color = 'red'
circle.style.fontSize = '50px'
circle.style.lineHeight = '0.05'
circle.style.textAlign = 'center'
circle.style.transition = '1s'
// VARIABLES POSITION
centx = 18
centy = 18
// MOVE EVENT
window.addEventListener('mousemove', (e) => {
    pointer.style.left = e.pageX - centx + 'px'
    pointer.style.top = e.pageY - centy + 'px'
})
// CLIC
document.addEventListener('click', () => {
    squarex.style.visibility = 'visible'
    squarex.style.backgroundColor = 'green'
    squarex.style.left = '-4px'
    squarey.style.visibility = 'visible'
    squarey.style.backgroundColor = 'green'
    squarey.style.top = '32px'
    circle.style.border = '5px solid green'
    circle.style.color = 'transparent'

    setTimeout(() => {
        squarex.style.transform = 'rotate(180deg)'
        squarey.style.transform = 'rotate(180deg)'
    }, 1000)
    setTimeout(() => {
        squarex.style.left ='32px'
        squarex.style.visibility = 'hidden'
        squarey.style.top ='-4px'
        squarey.style.visibility = 'hidden'

    }, 2000)
    setTimeout(() => {
        squarex.style.transform = 'rotate(0deg)'
        squarey.style.transform = 'rotate(0deg)'
        squarex.style.backgroundColor = 'red'
        squarey.style.backgroundColor = 'red'
        circle.style.color = 'red'
        circle.style.border = '5px solid red'
    }, 3000)
}) 