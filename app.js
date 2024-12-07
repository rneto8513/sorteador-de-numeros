function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value); // partseInt para declarar a variavel como número inteiro 
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de,ate);
        
        while (sorteados.includes(numero)) { // .includes serve pra retornar um número booleano
            numero = obterNumeroAleatorio(de,ate);
        } 
        sorteados.push(numero);
    } 

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`; // .textContent poderia ser usado no lugar do innerHTML
    alterarStatusBotao();
}

function obterNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) { //.classlist = para exibir as clases do elemento  .contains para verificar se a classe existe
        botao.classList.remove("container__botao-desabilitado"); //.remove para remover a classe
        botao.classList.add("container__botao"); //.add para adicionar a classe
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }   
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
}