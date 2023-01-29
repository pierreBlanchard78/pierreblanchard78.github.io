//-----VISOR POINTER------------------------------------------------------------------------------------------------------------------------------------------------------------//

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
pointer.append(squarex)
pointer.append(squarey)
pointer.append(circle)
// POINTER STYLE ATTRIBUTS
pointer.style.position = 'absolute'
pointer.style.display = 'flex'
pointer.style.justifyContent = 'center'
pointer.style.alignItems = 'center'
pointer.style.pointerEvents = 'none'
pointer.style.zIndex = '10'
// SQUARE X STYLE ATTRIBUTES
squarex.style.position = 'absolute'
squarex.style.height = '30px'
squarex.style.width = '30px'
squarex.style.border = '1px solid darkcyan'
squarex.style.borderRadius = '10%'
squarex.style.pointerEvents = 'none'
// SQUARE Y STYLE ATTRIBUTES
squarey.style.position = 'absolute'
squarey.style.height = '30px'
squarey.style.width = '30px'
squarey.style.border = '1px solid darkcyan'
squarey.style.borderRadius = '10%'
squarey.style.pointerEvents = 'none'
// CIRCLE STYLE ATTRIBUTES
circle.style.position = 'absolute'
circle.style.height = '15px'
circle.style.width = '15px'
circle.style.border = '1px solid red'
circle.style.borderRadius = '50%'
circle.style.pointerEvents = 'none'
circle.style.zIndex = '10'
// POINTER VARIABLES POSITION
centx = pointer.style.left/2
centy = pointer.style.height/2
// MOUSEMOVE LISTENER
window.addEventListener('mousemove', (e) => {
    pointer.style.position = 'absolute'
    pointer.style.left = e.pageX - centx + 'px'
    pointer.style.top = e.pageY - centy + 'px'
})
// CLICK EVENT AND FUNCTION ANIMATION
document.addEventListener('click', click) 
function click(){
    let animationDelay = 1300
    squarey.style.border = '1px solid darkgoldenrod'
    squarey.style.boxShadow = '0px 0px 5px gold'
    setTimeout(() => {
        squarey.style.border = '1px solid darkcyan'
        squarey.style.boxShadow = 'none'
    }, animationDelay);

    squarex.animate([
        {
            transform: 'rotate(0deg)',
            border: '3px solid cyan',
            boxShadow: '0px 0px 5px cyan'
        },
        {
            scale: '0.5'
        },
        {
            scale: '1'
        },
        {
            transform: 'rotate(0deg)'
        },
        {
            transform: 'rotate(360deg)',
            border: '3px solid cyan',
            boxShadow: '0px 0px 5px cyan'
        },
        {            
            border: '3px solid darkCyan',
            boxShadow: 'none'
        }
        ], {
        duration: animationDelay,
        iterations: 1
    })

    circle.animate([
        {
            transform: 'rotate(0deg)',
            border: '2px dotted red'
        },
        {
            scale: '0.5'
        },
        {
            scale: '1'
        },
        {
            transform: 'rotate(0deg)'
        },
        {
            transform: 'rotate(360deg)',
            border: '2px dotted red'
        },
        {
            border: '1px solid red'
        }
        ], {
        duration: animationDelay,
        iterations: 1
    })
}