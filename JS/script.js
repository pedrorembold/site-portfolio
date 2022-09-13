var botaoSaibaMais = document.querySelector(".btn-saiba_mais");
var descricao = document.querySelector(".descricao-projetos");

botaoSaibaMais.addEventListener('click', function(){
    
    if(descricao.style.display === 'block'){
        descricao.style.display = 'none';
        botaoSaibaMais.innerHTML = "Saiba Mais"
        botaoSaibaMais.classList.remove("btn-saiba_mais_ativo");
    } else {
        descricao.style.display = 'block';
        botaoSaibaMais.innerHTML = "Saiba Menos";
        botaoSaibaMais.classList.add("btn-saiba_mais_ativo");
        
    }});
    

