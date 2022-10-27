const projeto = document.querySelector('#valorhub');

projeto.addEventListener('mouseenter', function(){
    projeto.classList.add("blur");
})

projeto.addEventListener('mouseleave', function(){
    projeto.classList.remove("blur"); 
})




