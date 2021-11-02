function openMenu(){
    let menuArea = document.querySelector('.menu-mobile');
    let hamburgerImg = document.querySelector('.hamburger')
    let crossImg = document.querySelector('.cross')
    if(menuArea.style.display == 'flex'){
        menuArea.style.display = 'none'
        crossImg.style.display = 'none'
        hamburgerImg.style.display = 'flex'
    }else{
        menuArea.style.display = 'flex'
        crossImg.style.display = 'flex'
        hamburgerImg.style.display = 'none'
    }

}

function openStates(){
    let statesArea = document.querySelector('.states')
    let setaRotate = document.querySelector('.rotate')
    if(statesArea.style.display == 'flex'){
        statesArea.style.display = 'none'
        setaRotate.animate([
            {transform:'rotate(0deg)'},
            {transform:'rotate(0deg)'}, 
          ], {
            duration: 1000,
            iterations:Infinity,
        });
    }else{
        statesArea.style.display = 'flex'
        setaRotate.animate([
            {transform:'rotate(-180deg)'},
            {transform:'rotate(-180deg)'}, 
          ], {
            duration: 1000,
            iterations:Infinity,
        });
        
    }
}
function openStatesCompany(){
    let statesArea = document.querySelector('.states-company')
    let setaRotate = document.querySelector('.rotate-company')
    if(statesArea.style.display == 'flex'){
        statesArea.style.display = 'none'
        setaRotate.animate([
            {transform:'rotate(0deg)'},
            {transform:'rotate(0deg)'}, 
          ], {
            duration: 1000,
            iterations:Infinity,
        });
    }else{
        statesArea.style.display = 'flex'
        setaRotate.animate([
            {transform:'rotate(-180deg)'},
            {transform:'rotate(-180deg)'}, 
          ], {
            duration: 1000,
            iterations:Infinity,
        });
        
    }
}

function openStatesProduct(){
    let statesArea = document.querySelector('.states-product')
    let setaRotate = document.querySelector('.rotate-product')
    if(statesArea.style.display == 'flex'){
        statesArea.style.display = 'none'
        setaRotate.animate([
            {transform:'rotate(0deg)'},
            {transform:'rotate(0deg)'}, 
          ], {
            duration: 1000,
            iterations:Infinity,
        });
    }else{
        statesArea.style.display = 'flex'
        setaRotate.animate([
            {transform:'rotate(-180deg)'},
            {transform:'rotate(-180deg)'}, 
          ], {
            duration: 1000,
            iterations:Infinity,
        });
        
    }
}

function openStatesMobile(){
    let statesAreaMobile = document.querySelector('.states-mobile')
    let setaRotateMobile = document.querySelector('.rotate-mobile')
    let areaCompany = document.querySelector('.states-company-mobile')
    let areaProduct = document.querySelector('.states-product-mobile')
    if(statesAreaMobile.style.display == 'flex'){
        statesAreaMobile.style.display = 'none'
        setaRotateMobile.animate([
            {transform:'rotate(0deg)'},
            {transform:'rotate(0deg)'},
        ],{
            duration:1000,
            iterations:Infinity,
        });
    }else{
        statesAreaMobile.style.display = 'flex'
        areaCompany.style.display = 'none'
        areaProduct.style.display = 'none'
        setaRotateMobile.animate([
            {transform:'rotate(-180deg)'},
            {transform:'rotate(-180deg)'},
        ],{
            duration:1000,
            iterations:Infinity,
        })
    }
}

function openStatesCompanyMobile(){
    let statesAreaMobile = document.querySelector('.states-company-mobile')
    let setaRotateMobile = document.querySelector('.rotate-company-mobile')
    let areaStates = document.querySelector('.states-mobile')
    let areaProduct = document.querySelector('.states-product-mobile')
    if(statesAreaMobile.style.display == 'flex'){
        statesAreaMobile.style.display = 'none'
        statesAreaMobile.classList.add('active-mobile')
        setaRotateMobile.animate([
            {transform:'rotate(0deg)'},
            {transform:'rotate(0deg)'},
        ],{
            duration:1000,
            iterations:Infinity,
        });
    }else{
        statesAreaMobile.style.display = 'flex'
        areaStates.style.display = 'none'
        areaProduct.style.display = 'none'
        setaRotateMobile.animate([
            {transform:'rotate(-180deg)'},
            {transform:'rotate(-180deg)'},
        ],{
            duration:1000,
            iterations:Infinity,
        })
    }
}

function openStatesProductMobile(){
    let statesAreaMobile = document.querySelector('.states-product-mobile')
    let setaRotateMobile = document.querySelector('.rotate-product-mobile')
    let areaCompany = document.querySelector('.states-company-mobile')
    let areaStates = document.querySelector('.states-mobile')
    if(statesAreaMobile.style.display == 'flex'){
        statesAreaMobile.style.display = 'none'
        setaRotateMobile.animate([
            {transform:'rotate(0deg)'},
            {transform:'rotate(0deg)'},
        ],{
            duration:1000,
            iterations:Infinity,
        });
    }else{
        statesAreaMobile.style.display = 'flex'
        areaCompany.style.display = 'none'
        areaStates.style.display = 'none'
        setaRotateMobile.animate([
            {transform:'rotate(-180deg)'},
            {transform:'rotate(-180deg)'},
        ],{
            duration:1000,
            iterations:Infinity,
        })
    }
}