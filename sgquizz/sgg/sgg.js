//-----SGG-----------------------------------------------------------------------------------------------//

const body = document.getElementById('body')
const mg = document.getElementById('maingame')
const aim = document.getElementById('aim')
const aff1 = document.getElementById('aff1')
const aff2 = document.getElementById('aff2')
const btc = document.getElementById('btc')
const comm = document.getElementById('comm')
const bmg = document.getElementById('bmg')
const atk1 = src='img/atk1.png'
const atk2 = src='img/atk2.png'
const atk3 = src='img/atk3.png'
const plan = src='img/plan.png'
const mere = src='img/mere.png'
const exp = src='img/exp.gif'

let ptsg = 0// SCORE
//AIM
body.addEventListener('mousemove', (e) => {
    aim.style.position = 'absolute'
    let ex = e.x
    let ey = e.y
    aim.style.left = e.x / window.innerWidth * 100 - 2.6 + '%'
    aim.style.top = e.y / window.innerHeight * 100 - 5.9 + '%'
})
//EVENEMENT LANCEMENT JEU
btc.addEventListener('click', () => {
    btc.style.visibility = 'hidden'
    //FONCTION AT'AK
    let atkf = setInterval(atkfall, 1000)
    function atkfall(){ 
        const cible1 = document.createElement('img')
        const array = [atk1,atk2,atk3]
        cible1.src = array[Math.floor(Math.random()*3)]
        cible1.classList.add('cible1')
        cible1.style.cursor = 'none'
        cible1.style.left = Math.random() * window.innerWidth + 'px'
        cible1.style.animationDuration = Math.random() + 1 * 2 + 's'
        mg.appendChild(cible1)

        setTimeout(() => {cible1.remove()},6000)
        //EVENEMENT CLIC AT'AK
        cible1.addEventListener('click', () => {
            cible1.style.animationPlayState = 'paused'
            cible1.src = exp
            cible1.style.marginTop = '-300px'
            setTimeout(() => {cible1.remove()},1000)
            ptsg = ptsg + 10
            aff1.textContent = ptsg
            //CONDITION SELON SCORE
            if(ptsg == 50){aff2.textContent = "Tu a l'air motivé...";setTimeout(() => {aff2.textContent = ""},5000)}
            if(ptsg == 70){aff2.textContent = "T'en a pas marre ?";setTimeout(() => {aff2.textContent = ""},5000)}
            if(ptsg == 100){aff2.textContent = "Sérieux, arrête, ce jeu est merdique...";setTimeout(() => {aff2.textContent = ""},5000)}
            if(ptsg == 120){aff2.textContent = "Tu a vraiment que ca a foutre ?";setTimeout(() => {aff2.textContent = ""},5000)}
            if(ptsg == 150 || ptsg == 155 || ptsg == 160){
                cible1.addEventListener('click', boss())
                mg.style.pointerEvents = 'none'
                clearInterval(planf)
                clearInterval(atkf)
            } 
        })
        //FIN EVENEMENT CLIC AT'AK
    }
    //FIN FONCTION AT'AK
    //FONCTION PLANEUR
    let planf = setInterval(planfall, 600)
    function planfall(){
        const cible2 = document.createElement('img')
        cible2.src = plan
        cible2.classList.add('cible2')
        cible2.style.cursor = 'none'
        cible2.style.top = Math.random() * window.innerWidth + 'px'
        cible2.style.animationDuration = Math.random() + 1 * 4 + 's'
        mg.appendChild(cible2)

        setTimeout(() => {cible2.remove()},6000)
        //EVENEMENT CLIC PLANEUR
        cible2.addEventListener('click', () => {
            cible2.style.animationPlayState = 'paused'
            cible2.src = exp
            cible2.style.marginTop = '-100px'
            setTimeout(() => {cible2.remove()},1000)
            ptsg += 5
            aff1.textContent = ptsg
            //CONDITION SELON SCORE
            if(ptsg == 50){aff2.textContent = "Tu a l'air motivé...";setTimeout(() => {aff2.textContent = ""},5000)}
            if(ptsg == 70){aff2.textContent = "T'en a pas marre ?";setTimeout(() => {aff2.textContent = ""},5000)}
            if(ptsg == 100){aff2.textContent = "Sérieux, arrête, ce jeu est merdique...";setTimeout(() => {aff2.textContent = ""},5000)}
            if(ptsg == 120){aff2.textContent = "Tu a vraiment que ca a foutre ?";setTimeout(() => {aff2.textContent = ""},5000)}
            if(ptsg == 150 || ptsg == 155 || ptsg == 160){
                cible2.addEventListener('click', boss())
                mg.style.pointerEvents = 'none'
                clearInterval(planf)
                clearInterval(atkf)
            }
        })
        //FIN EVENEMENT CLIC PLANEUR
    }
    //FIN FONCTION PLANEUR
    //FONCTION BOSS
    function boss(){
        //SETTIMEOUT FONCTION BOSS
        setTimeout(() => {  
            mg.style.pointerEvents = 'auto'     
            const cible3 = document.createElement('img')
            cible3.src = mere
            cible3.classList.add('cible3')
            cible3.style.top = '-200px'
            cible3.style.transition = '3s'
            setTimeout(() => {cible3.style.top = '200px'})
            mg.appendChild(cible3)
            //EVENEMENT CLIC BOSS
            cible3.addEventListener('click', () => {
                cible3.style.animationPlayState = 'paused'
                const touch = document.createElement('img')
                mg.appendChild(touch)
                touch.src = exp
                touch.style.position = 'absolute'
                touch.style.top = '200px'
                touch.style.left = '650px'
                setTimeout(() => {
                    mg.removeChild(touch)
                    cible3.style.animationPlayState = 'running'
                }, 1000)
                //ANIMATION EXPLOSION BOSS    
                if(ptsg >= 200){
                    cible3.style.animationPlayState = 'paused'             
                    const expf = setInterval(expff, 400)
                    //FONCTION EXPLOSION
                    function expff(){
                        setTimeout(() => {
                            const touch1 = document.createElement('img')
                            mg.appendChild(touch1)
                            touch1.src = exp
                            touch1.style.position = 'absolute'
                            touch1.style.top = '200px'
                            touch1.style.left = '650px'
                            setTimeout(() => {touch1.remove()},1000)
                        }, 0)
                        setTimeout(() => {
                            const touch2 = document.createElement('img')
                            mg.appendChild(touch2)
                            touch2.src = exp
                            touch2.style.position = 'absolute'
                            touch2.style.top = '210px'
                            touch2.style.left = '660px'
                            setTimeout(() => {touch2.remove()},1000)
                        }, 100)
                        setTimeout(() => {
                            const touch3 = document.createElement('img')
                            mg.appendChild(touch3)
                            touch3.src = exp
                            touch3.style.position = 'absolute'
                            touch3.style.top = '190px'
                            touch3.style.left = '640px'
                            setTimeout(() => {touch3.remove()},1000)
                        }, 200)
                        setTimeout(() => {
                            const touch3 = document.createElement('img')
                            mg.appendChild(touch3)
                            touch3.src = exp
                            touch3.style.position = 'absolute'
                            touch3.style.top = '200px'
                            touch3.style.left = '650px'
                            setTimeout(() => {touch3.remove()},1000)
                        }, 300)

                        setTimeout(() => {clearInterval(expf)},5000)
                        setTimeout(() => {cible3.remove()},5000)
                    }
                    if(ptsg >= 200){
                        setTimeout(() => {
                            aff2.innerHTML = 'Félicitation ! <br /> Profils SG Enregistrés : <br /> "O\'NEILL" <br /> "CARTER" <br /> "JACKSON" <br /> "TEAL\'C"'
                        }, 6000)
                    }
                    //FIN FONCTION EXPLOSION
                }
                //FIN ANIMATION EXPLOSION
            ptsg += 10
            aff1.textContent = ptsg
            })
            //FIN EVENT BOSS
        }, 4000)
        //FIN SETTIMEOUT FONCTION BOSS
    }
    //FIN FONCTION BOSS
})
//FIN EVENEMENT LANCEMENT JEU


