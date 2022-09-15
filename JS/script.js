var botaoSaibaMais = document.querySelectorAll(".btn-saiba_mais");
var descricao = document.querySelector(".descricao-projetos");


for(let i = 0; i < botaoSaibaMais.length; i++) {
    const botao = botaoSaibaMais[i]

    botao.onclick = function(){

            if(descricao.style.display === 'block'){
            descricao.style.display = 'none';
            botao.innerHTML = "Saiba Mais";
            botao.classList.remove("btn-saiba_mais_ativo");
        } else {
            descricao.style.display = 'block';
            botao.innerHTML = "Saiba Menos";
            botao.classList.add("btn-saiba_mais_ativo");

        }};
}







