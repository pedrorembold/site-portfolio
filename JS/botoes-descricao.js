const botao1 = document.querySelector('[data-botao1]');
const botao2 = document.querySelector('[data-botao2]');

const descricao1=document.querySelector('[data-desc1]');
const descricao2=document.querySelector('[data-desc2]');

botao1.addEventListener('click', function(){
    if(descricao1.style.display === 'block'){
                    descricao1.style.display = 'none';
                    botao1.innerHTML = "Saiba Mais";
                    botao1.classList.remove("btn-saiba_mais_ativo");
                } else {
                    descricao1.style.display = 'block';
                    botao1.innerHTML = "Saiba Menos";
                    botao1.classList.add("btn-saiba_mais_ativo");
                }});

botao2.addEventListener('click', function(){
    if(descricao2.style.display === 'block'){
                    descricao2.style.display = 'none';
                    botao2.innerHTML = "Saiba Mais";
                    botao2.classList.remove("btn-saiba_mais_ativo");
                } else {
                    descricao2.style.display = 'block';
                    botao2.innerHTML = "Saiba Menos";
                    botao2.classList.add("btn-saiba_mais_ativo");
                }});
                



















// const conteiner1 = document.querySelector('[data-conteiner1]')
// const conteiner2 = document.querySelector('[data-conteiner2]')

// const p1 = document.createElement("p")
// const textoP1 = document.createTextNode("Projeto criado para melhor conhecimento do JavaScript com o DOM, manipulando os dados através dos botões na tela.");

// const p2 = document.createElement("p")
// const textoP2 = document.createTextNode("rolou!");

// p1.appendChild(textoP1);
// p2.appendChild(textoP2);

// botao1.addEventListener('click', function() {
//     conteiner1.appendChild(p1)
// })

// botao2.addEventListener('click', function() {
//     conteiner2.appendChild(p2);
// })














// var botaoSaibaMais = document.querySelectorAll(".btn-saiba_mais");
// var descricao = document.querySelector(".descricao-projetos");


// for(let i = 0; i < botaoSaibaMais.length; i++) {
//     const botao = botaoSaibaMais[i]

//     botao.onclick = function(){

//             if(descricao.style.display === 'block'){
//             descricao.style.display = 'none';
//             botao.innerHTML = "Saiba Mais";
//             botao.classList.remove("btn-saiba_mais_ativo");
//         } else {
//             descricao.style.display = 'block';
//             botao.innerHTML = "Saiba Menos";
//             botao.classList.add("btn-saiba_mais_ativo");

//         }};
// }







