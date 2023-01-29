// Ce fichier accède au LOCAL STORAGE contenant les données des joueurs et les chargent sur la page.

//-----SAUVEGARDE JOUEUR 1---------------------------------------------------------------------------------------//

if (localStorage.getItem('nouveau joueur1','nom1')){ // SI JOUEUR 1 EXISTE...
    // ECRAN 1 AFFICHAGE DONNEES JOUEUR
    j1.textContent = nom1
    g1.textContent = gradej1
    pts1.textContent = scorej1
    baff1.style.visibility = 'visible'
    j1.style.pointerEvents = 'none'
    // PROFILS PREETABLI
    if(nom1 == 'BLANCHARD'){
        scorej1ot = 10
        scorej1p = 10
        scorej1rp = 10
        scorej1g = 10
        scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g)
        if(scorej1 == 40){gradej1 = 'General'}
        pts1.textContent = scorej1
        g1.textContent = gradej1 
        }
    if(nom1 == "O'NEILL"){
        scorej1p = 10
        scorej1rp = 10
        scorej1g = 10
        scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g) + Number(scorej1sgo)
        if(scorej1 >= 30){gradej1 = 'Colonel'}
        if(scorej1 == 40){gradej1 = 'General'}
        pts1.textContent = scorej1
        g1.textContent = gradej1  
        }
    if(nom1 == 'JACKSON'){
        scorej1rp = 10
        scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g) + Number(scorej1sgj)
        pts1.textContent = scorej1
        g1.textContent = 'Civil'  
        }
    if(nom1 == 'CARTER'){
        scorej1ot = 10
        scorej1g = 10
        scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g) + Number(scorej1sgc)
        if(scorej1 >= 20){gradej1 = 'Major'}
        if(scorej1 >= 30){gradej1 = 'Colonel'}
        if(scorej1 == 40){gradej1 = 'General'}
        pts1.textContent = scorej1
        g1.textContent = gradej1 
        }
    if(nom1 == "TEAL'C"){
        scorej1 = Number(scorej1ot) + Number(scorej1p) + Number(scorej1rp) + Number(scorej1g) + Number(scorej1sgt)
        pts1.textContent = scorej1
        g1.textContent = 'CLASSIFIE'  
        }
    // EVENT 
    if(scorej1 == 40){
        titre1.style.color = 'transparent'
        titre1.style.textShadow = 'none'
        titre2.style.color = 'transparent'
        titre2.style.textShadow = 'none'
        // sevent.style.visibility = 'visible'
        }
}           

if (localStorage.getItem('joueurgo1')){ // SI JOUEUR AFFECTE 1 EXISTE...
    // ECRAN 2 AFFICHAGE DONNEES JOUEUR
    jlauch.textContent = nom1
    grd.textContent = gradej1
    // CREATION CARTE ACCES
    card.appendChild(cardj)
    cardj.style.height = '155px'
    cardj.style.marginTop = '15px'
    cardj.style.marginRight = '130px'
    cardj.style.marginLeft = '130px'
    logo.style.visibility = 'hidden'
    // SELECTION CARTE SELON SCORE
    if(scorej1 < 10){cardj.src = 'img/card/capo.jpg'}   
    if(scorej1 >= 10){cardj.src = 'img/card/lieu.jpg'}    
    if(scorej1 >= 15){cardj.src = 'img/card/capi.jpg' }
    if(scorej1 >= 20){cardj.src = 'img/card/majo.jpg'}    
    if(scorej1 >= 30){cardj.src = 'img/card/colo.jpg'}    
    if(scorej1 == 40){cardj.src = 'img/card/gene.jpg'}
    // SELECTION CARTE SI PROFIL PREETABLI
    if(nom1 == 'BLANCHARD'){{cardj.src = 'img/card/blan.jpg'}}
    if(nom1 == "O'NEILL"){{cardj.src = 'img/card/oneill.jpg'}}
    if(nom1 == 'JACKSON'){{cardj.src = 'img/card/jackson.jpg'}}
    if(nom1 == 'CARTER'){{cardj.src = 'img/card/carter.jpg'}}
    if(nom1 == "TEAL'C"){{cardj.src = 'img/card/tealc.jpg'}}
    // ETAT BCOMM SI SCORE 
    if(scorej1ot >= 1){
        bcomm1.appendChild(imgdec1)
        imgdec1.src = 'img/declass.png'
        imgdec1.style.height = '73px'
        imgdec1.style.position = 'center'
        bcomm1.style.pointerEvents = "none"
        bcomm1.style.opacity = '50%'
        }
        else{        
            bcomm1.style.pointerEvents = "auto"
            bcomm1.style.opacity = '100%'
            imgdec1.remove()
            }

    if(scorej1p >= 1){
        bcomm2.appendChild(imgdec2)
        imgdec2.src = 'img/declass.png'
        imgdec2.style.height = '73px'
        imgdec2.style.position = 'center'
        bcomm2.style.pointerEvents = "none"
        bcomm2.style.opacity = '50%'
        }
        else{        
            bcomm2.style.pointerEvents = "auto"
            bcomm2.style.opacity = '100%'
            imgdec2.remove()
            }

    if(scorej1rp >= 1){
        bcomm3.appendChild(imgdec3)
        imgdec3.src = 'img/declass.png'
        imgdec3.style.height = '73px'
        imgdec3.style.position = 'center'
        bcomm3.style.pointerEvents = "none"
        bcomm3.style.opacity = '50%'
        }
        else{        
            bcomm3.style.pointerEvents = "auto"
            bcomm3.style.opacity = '100%'
            imgdec3.remove()
            }
    
    if(scorej1g >= 1){
        bcomm4.appendChild(imgdec4)
        imgdec4.src = 'img/declass.png'
        imgdec4.style.height = '73px'
        imgdec4.style.position = 'center'
        bcomm4.style.pointerEvents = "none"
        bcomm4.style.opacity = '50%'
        }
        else{        
            bcomm4.style.pointerEvents = "auto"
            bcomm4.style.opacity = '100%'
            imgdec4.remove()
            }
    if(scorej1sgc == 10){
        bcommc.appendChild(imgdec5)
        imgdec5.src = 'img/declass.png'
        imgdec5.style.height = '73px'
        imgdec5.style.position = 'center'
        bcommc.style.pointerEvents = "none"
        bcommc.style.opacity = '50%'
        
        }
        else{        
            bcommc.style.pointerEvents = "auto"
            bcommc.style.opacity = '100%'
            imgdec5.remove()
            }
    if(scorej1sgt == 10){
        bcommt.appendChild(imgdec6)
        imgdec6.src = 'img/declass.png'
        imgdec6.style.height = '73px'
        imgdec6.style.position = 'center'
        bcommt.style.pointerEvents = "none"
        bcommt.style.opacity = '50%'
        }
        else{        
            bcommt.style.pointerEvents = "auto"
            bcommt.style.opacity = '100%'
            imgdec6.remove()
            }
    if(scorej1sgo == 10){
        bcommo.appendChild(imgdec7)
        imgdec7.src = 'img/declass.png'
        imgdec7.style.height = '73px'
        imgdec7.style.position = 'center'
        bcommo.style.pointerEvents = "none"
        bcommo.style.opacity = '50%'
        }
        else{        
            bcommo.style.pointerEvents = "auto"
            bcommo.style.opacity = '100%'
            imgdec7.remove()
            }
    if(scorej1sgj == 10){
        bcommj.appendChild(imgdec8)
        imgdec8.src = 'img/declass.png'
        imgdec8.style.height = '73px'
        imgdec8.style.position = 'center'
        bcommj.style.pointerEvents = "none"
        bcommj.style.opacity = '50%'
        }
        else{        
            bcommj.style.pointerEvents = "auto"
            bcommj.style.opacity = '100%'
            imgdec8.remove()
            }

    // ETAT BCOMM SI PROFIL PREETABLI
    if(nom1 == "O'NEILL"){
        bcommo.style.visibility = 'visible'
        }
        else{
            bcommo.style.visibility = 'hidden'
            bcommo.style.pointerEvents = 'none'
            bcommo.style.opacity = '50%'
            }
    if(nom1 == 'JACKSON'){
        bcommj.style.visibility = 'visible'
        }
        else{
            bcommj.style.visibility = 'hidden'
            bcommj.style.pointerEvents = 'none'
            bcommj.style.opacity = '50%'
            }
    if(nom1 == 'CARTER'){
        bcommc.style.visibility = 'visible'
        }
        else{
            bcommc.style.visibility = 'hidden'
            bcommc.style.pointerEvents = 'none'
            bcommc.style.opacity = '50%'
            }
    if(nom1 == "TEAL'C"){
        bcommt.style.visibility = 'visible'
        }
        else{
            bcommt.style.visibility = 'hidden'
            bcommt.style.pointerEvents = 'none'
            bcommt.style.opacity = '50%'
            }
}

//-----SAUVEGARDE JOUEUR 2---------------------------------------------------------------------------------------//

if (localStorage.getItem('nouveau joueur2','nom2')){
    j2.textContent = nom2
    g2.textContent = gradej2
    pts2.textContent = Number(scorej2)
    baff2.style.visibility = 'visible'
    j2.style.pointerEvents = 'none'

    if(nom2 == 'BLANCHARD'){
        scorej2ot = 10
        scorej2p = 10
        scorej2rp = 10
        scorej2g = 10
        scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g)
        if(scorej2 == 40){gradej2 = 'General'}
        pts2.textContent = scorej2
        g2.textContent = gradej2
        }
    if(nom2 == "O'NEILL"){
        scorej2p = 10
        scorej2rp = 10
        scorej2g = 10
        scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g) + Number(scorej2sgo)
        if(scorej2 >= 30){gradej2 = 'Colonel'}
        if(scorej2 == 40){gradej2 = 'General'}
        pts2.textContent = scorej2
        g2.textContent = gradej2  
        }
    if(nom2 == 'JACKSON'){
        scorej2rp = 10
        scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g) + Number(scorej2sgj)
        pts2.textContent = scorej2
        g2.textContent = 'Civil'  
        }
    if(nom2 == 'CARTER'){
        scorej2ot = 10
        scorej2g = 10
        scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g) + Number(scorej2sgc)
        if(scorej2 >= 20){gradej2 = 'Major'}
        if(scorej2 >= 30){gradej2 = 'Colonel'}
        if(scorej2 == 40){gradej2 = 'General'}
        pts2.textContent = scorej2
        g2.textContent = gradej2
        }
    if(nom2 == "TEAL'C"){
        scorej2 = Number(scorej2ot) + Number(scorej2p) + Number(scorej2rp) + Number(scorej2g) + Number(scorej2sgt)
        pts2.textContent = scorej2
        gradej2 = 'CLASSIFIE'
        g2.textContent = 'CLASSIFIE'  
        }

    if(scorej2 == 40){
        titre1.style.color = 'transparent'
        titre1.style.textShadow = 'none'
        titre2.style.color = 'transparent'
        titre2.style.textShadow = 'none'
        // sevent.style.visibility = 'visible'
        }
}

if (localStorage.getItem('joueurgo2')){   
    jlauch.textContent = nom2
    grd.textContent = gradej2
    card.appendChild(cardj)
    cardj.style.height = '155px'
    cardj.style.marginTop = '15px'
    cardj.style.marginRight = '130px'
    cardj.style.marginLeft = '130px'
    logo.style.visibility = 'hidden'

    if(scorej2 < 10){cardj.src = 'img/card/capo.jpg'}    
    if(scorej2 >= 10){cardj.src = 'img/card/lieu.jpg'}    
    if(scorej2 >= 15){cardj.src = 'img/card/capi.jpg'}
    if(scorej2 >= 20){cardj.src = 'img/card/majo.jpg'}    
    if(scorej2 >= 30){cardj.src = 'img/card/colo.jpg'}
    if(scorej2 == 40){cardj.src = 'img/card/gene.jpg'}
    
    if(nom2 == 'BLANCHARD'){{cardj.src = 'img/card/blan.jpg'}}
    if(nom2 == "O'NEILL"){{cardj.src = 'img/card/oneill.jpg'}}
    if(nom2 == 'JACKSON'){{cardj.src = 'img/card/jackson.jpg'}}
    if(nom2 == 'CARTER'){{cardj.src = 'img/card/carter.jpg'}}
    if(nom2 == "TEAL'C"){{cardj.src = 'img/card/tealc.jpg'}}

    if(scorej2ot >= 1){
        bcomm1.appendChild(imgdec1)
        imgdec1.src = 'img/declass.png'
        imgdec1.style.height = '73px'
        imgdec1.style.position = 'center'
        bcomm1.style.pointerEvents = "none"
        bcomm1.style.opacity = '50%'
        }
        else{        
            bcomm1.style.pointerEvents = "auto"
            bcomm1.style.opacity = '100%'
            imgdec1.remove()
            }

    if(scorej2p >= 1){
        bcomm2.appendChild(imgdec2)
        imgdec2.src = 'img/declass.png'
        imgdec2.style.height = '73px'
        imgdec2.style.position = 'center'
        bcomm2.style.pointerEvents = "none"
        bcomm2.style.opacity = '50%'
        }
        else{        
            bcomm2.style.pointerEvents = "auto"
            bcomm2.style.opacity = '100%'
            imgdec2.remove()
            }

    if(scorej2rp >= 1){
        bcomm3.appendChild(imgdec3)
        imgdec3.src = 'img/declass.png'
        imgdec3.style.height = '73px'
        imgdec3.style.position = 'center'
        bcomm3.style.pointerEvents = "none"
        bcomm3.style.opacity = '50%'
        }
        else{        
            bcomm3.style.pointerEvents = "auto"
            bcomm3.style.opacity = '100%'
            imgdec3.remove()
            }
    
    if(scorej2g >= 1){
        bcomm4.appendChild(imgdec4)
        imgdec4.src = 'img/declass.png'
        imgdec4.style.height = '73px'
        imgdec4.style.position = 'center'
        bcomm4.style.pointerEvents = "none"
        bcomm4.style.opacity = '50%'
        }
        else{        
            bcomm4.style.pointerEvents = "auto"
            bcomm4.style.opacity = '100%'
            imgdec4.remove()
            }
    if(scorej2sgc == 10){
        bcommc.appendChild(imgdec5)
        imgdec5.src = 'img/declass.png'
        imgdec5.style.height = '73px'
        imgdec5.style.position = 'center'
        bcommc.style.pointerEvents = "none"
        bcommc.style.opacity = '50%'
        }
        else{        
            bcommc.style.pointerEvents = "auto"
            bcommc.style.opacity = '100%'
            imgdec5.remove()
            }
    if(scorej2sgt == 10){
        bcommt.appendChild(imgdec6)
        imgdec6.src = 'img/declass.png'
        imgdec6.style.height = '73px'
        imgdec6.style.position = 'center'
        bcommt.style.pointerEvents = "none"
        bcommt.style.opacity = '50%'
        }
        else{        
            bcommt.style.pointerEvents = "auto"
            bcommt.style.opacity = '100%'
            imgdec6.remove()
            }
    if(scorej2sgo == 10){
        bcommo.appendChild(imgdec7)
        imgdec7.src = 'img/declass.png'
        imgdec7.style.height = '73px'
        imgdec7.style.position = 'center'
        bcommo.style.pointerEvents = "none"
        bcommo.style.opacity = '50%'
        }
        else{        
            bcommo.style.pointerEvents = "auto"
            bcommo.style.opacity = '100%'
            imgdec7.remove()
            }
    if(scorej2sgj == 10){
        bcommj.appendChild(imgdec8)
        imgdec8.src = 'img/declass.png'
        imgdec8.style.height = '73px'
        imgdec8.style.position = 'center'
        bcommj.style.pointerEvents = "none"
        bcommj.style.opacity = '50%'
        }
        else{        
            bcommj.style.pointerEvents = "auto"
            bcommj.style.opacity = '100%'
            imgdec8.remove()
            }

    if(nom2 == "O'NEILL"){
        bcommo.style.visibility = 'visible'
        }
        else{
            bcommo.style.visibility = 'hidden'
            bcommo.style.pointerEvents = 'none'
            bcommo.style.opacity = '50%'
            }
    if(nom2 == 'JACKSON'){
        bcommj.style.visibility = 'visible'
        }
        else{
            bcommj.style.visibility = 'hidden'
            bcommj.style.pointerEvents = 'none'
            bcommj.style.opacity = '50%'
            }
    if(nom2 == 'CARTER'){
        bcommc.style.visibility = 'visible'
        }
        else{
            bcommc.style.visibility = 'hidden'
            bcommc.style.pointerEvents = 'none'
            bcommc.style.opacity = '50%'
            }
    if(nom2 == "TEAL'C"){
        bcommt.style.visibility = 'visible'
        }
        else{
            bcommt.style.visibility = 'hidden'
            bcommt.style.pointerEvents = 'none'
            bcommt.style.opacity = '50%'
            }
}    

//-----SAUVEGARDE JOUEUR 3---------------------------------------------------------------------------------------//

if (localStorage.getItem('nouveau joueur3','nom3')) {
    j3.textContent = nom3
    g3.textContent = gradej3
    pts3.textContent = Number(scorej3)
    baff3.style.visibility = 'visible'
    j3.style.pointerEvents = 'none'

    if(nom3 == 'BLANCHARD'){
        scorej3ot = 10
        scorej3p = 10
        scorej3rp = 10
        scorej3g = 10
        scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g)
        if(scorej3 == 40){gradej3 = 'General'}
        pts3.textContent = scorej3
        g3.textContent = gradej3
        }
    if(nom3 == "O'NEILL"){
        scorej3p = 10
        scorej3rp = 10
        scorej3g = 10
        scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g) + Number(scorej3sgo)
        if(scorej3 >= 30){gradej3 = 'Colonel'}
        if(scorej3 == 40){gradej3 = 'General'}
        pts3.textContent = scorej3
        g3.textContent = gradej3  
        }
    if(nom3 == 'JACKSON'){
        scorej3g = 10
        scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g) + Number(scorej3sgj)
        pts3.textContent = scorej3
        g3.textContent = 'Civil'  
        }
    if(nom3 == 'CARTER'){
        scorej3ot = 10
        scorej3g = 10
        scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g) + Number(scorej3sgc)
        if(scorej3 >= 20){gradej3 = 'Major'}
        if(scorej3 >= 30){gradej3 = 'Colonel'}
        if(scorej3 == 40){gradej3 = 'General'}
        pts3.textContent = scorej3
        g3.textContent = gradej3  
        }
    if(nom3 == "TEAL'C"){
        scorej3 = Number(scorej3ot) + Number(scorej3p) + Number(scorej3rp) + Number(scorej3g) + Number(scorej3sgt)
        pts3.textContent = scorej3
        g3.textContent = 'CLASSIFIE'  
        }

    if(scorej3 == 40){
        titre1.style.color = 'transparent'
        titre1.style.textShadow = 'none'
        titre2.style.color = 'transparent'
        titre2.style.textShadow = 'none'
        // sevent.style.visibility = 'visible'
        }
}

if (localStorage.getItem('joueurgo3')) {
    jlauch.textContent = nom3
    grd.textContent = gradej3
    card.appendChild(cardj)
    cardj.style.height = '155px'
    cardj.style.marginTop = '15px'
    cardj.style.marginRight = '130px'
    cardj.style.marginLeft = '130px'
    logo.style.visibility = 'hidden'

    if(scorej3 < 10){cardj.src = 'img/card/capo.jpg'}    
    if(scorej3 >= 10){cardj.src = 'img/card/lieu.jpg'}    
    if(scorej3 >= 15){cardj.src = 'img/card/capi.jpg' }
    if(scorej3 >= 20){cardj.src = 'img/card/majo.jpg'}    
    if(scorej3 >= 30){cardj.src = 'img/card/colo.jpg'}
    if(scorej3 == 40){cardj.src = 'img/card/gene.jpg'}
    
    if(nom3 == 'BLANCHARD'){{cardj.src = 'img/card/blan.jpg'}}
    if(nom3 == "O'NEILL"){{cardj.src = 'img/card/oneill.jpg'}}
    if(nom3 == 'JACKSON'){{cardj.src = 'img/card/jackson.jpg'}}
    if(nom3 == 'CARTER'){{cardj.src = 'img/card/carter.jpg'}}
    if(nom3 == "TEAL'C"){{cardj.src = 'img/card/tealc.jpg'}}

    if(scorej3ot >= 1){
        bcomm1.appendChild(imgdec1)
        imgdec1.src = 'img/declass.png'
        imgdec1.style.height = '73px'
        imgdec1.style.position = 'center'
        bcomm1.style.pointerEvents = "none"
        bcomm1.style.opacity = '50%'
        }
        else{        
            bcomm1.style.pointerEvents = "auto"
            bcomm1.style.opacity = '100%'
            imgdec1.remove()
            }

    if(scorej3p >= 1){
        bcomm2.appendChild(imgdec2)
        imgdec2.src = 'img/declass.png'
        imgdec2.style.height = '73px'
        imgdec2.style.position = 'center'
        bcomm2.style.pointerEvents = "none"
        bcomm2.style.opacity = '50%'
        }
        else{        
            bcomm2.style.pointerEvents = "auto"
            bcomm2.style.opacity = '100%'
            imgdec2.remove()
            }

    if(scorej3rp >= 1){
        bcomm3.appendChild(imgdec3)
        imgdec3.src = 'img/declass.png'
        imgdec3.style.height = '73px'
        imgdec3.style.position = 'center'
        bcomm3.style.pointerEvents = "none"
        bcomm3.style.opacity = '50%'
        }
        else{        
            bcomm3.style.pointerEvents = "auto"
            bcomm3.style.opacity = '100%'
            imgdec3.remove()
            }
    
    if(scorej3g >= 1){
        bcomm4.appendChild(imgdec4)
        imgdec4.src = 'img/declass.png'
        imgdec4.style.height = '73px'
        imgdec4.style.position = 'center'
        bcomm4.style.pointerEvents = "none"
        bcomm4.style.opacity = '50%'
        }
        else{        
            bcomm4.style.pointerEvents = "auto"
            bcomm4.style.opacity = '100%'
            imgdec4.remove()
            }
    if(scorej3sgc == 10){
        bcommc.appendChild(imgdec5)
        imgdec5.src = 'img/declass.png'
        imgdec5.style.height = '73px'
        imgdec5.style.position = 'center'
        bcommc.style.pointerEvents = "none"
        bcommc.style.opacity = '50%'
        }
        else{        
            bcommc.style.pointerEvents = "auto"
            bcommc.style.opacity = '100%'
            imgdec5.remove()
            }
    if(scorej3sgt == 10){
        bcommt.appendChild(imgdec6)
        imgdec6.src = 'img/declass.png'
        imgdec6.style.height = '73px'
        imgdec6.style.position = 'center'
        bcommt.style.pointerEvents = "none"
        bcommt.style.opacity = '50%'
        }
        else{        
            bcommt.style.pointerEvents = "auto"
            bcommt.style.opacity = '100%'
            imgdec6.remove()
            }
    if(scorej3sgo == 10){
        bcommo.appendChild(imgdec7)
        imgdec7.src = 'img/declass.png'
        imgdec7.style.height = '73px'
        imgdec7.style.position = 'center'
        bcommo.style.pointerEvents = "none"
        bcommo.style.opacity = '50%'
        }
        else{        
            bcommo.style.pointerEvents = "auto"
            bcommo.style.opacity = '100%'
            imgdec7.remove()
            }
    if(scorej3sgj == 10){
        bcommj.appendChild(imgdec8)
        imgdec8.src = 'img/declass.png'
        imgdec8.style.height = '73px'
        imgdec8.style.position = 'center'
        bcommj.style.pointerEvents = "none"
        bcommj.style.opacity = '50%'
        }
        else{        
            bcommj.style.pointerEvents = "auto"
            bcommj.style.opacity = '100%'
            imgdec8.remove()
            }

    if(nom3 == "O'NEILL"){
        bcommo.style.visibility = 'visible'
        }
        else{
            bcommo.style.visibility = 'hidden'
            bcommo.style.pointerEvents = 'none'
            bcommo.style.opacity = '50%'
            }
    if(nom3 == 'JACKSON'){
        bcommj.style.visibility = 'visible'
        }
        else{
            bcommj.style.visibility = 'hidden'
            bcommj.style.pointerEvents = 'none'
            bcommj.style.opacity = '50%'
            }
    if(nom3 == 'CARTER'){
        bcommc.style.visibility = 'visible'
        }
        else{
            bcommc.style.visibility = 'hidden'
            bcommc.style.pointerEvents = 'none'
            bcommc.style.opacity = '50%'
            }
    if(nom3 == "TEAL'C"){
        bcommt.style.visibility = 'visible'
        }
        else{
            bcommt.style.visibility = 'hidden'
            bcommt.style.pointerEvents = 'none'
            bcommt.style.opacity = '50%'
            }
}