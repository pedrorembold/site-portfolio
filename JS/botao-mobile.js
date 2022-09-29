const botaoMobile = document.querySelector(".botao-mobile");

botaoMobile.addEventListener('click', function(){
    let menuMobile = document.querySelector('.menu-mobile')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
});

//-------------------------------------------------------------
const linkMenu = document.querySelector("[data-fechaMenu]")
linkMenu.addEventListener('click', function(){
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    }
})
