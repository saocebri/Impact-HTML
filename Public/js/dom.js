"use strict"
// alert("Olá Mundo");


//Buscado o objeto do html(caixa de texto) com evento click do botão

let botao = document.querySelector('.btn');
botao.addEventListener('click', (event) => {
    let objNome = document.querySelector('.input-name');
    let nome = objNome.value;
    let divError = document.querySelector('.error');
    let buscaCarateres = RegExp('@', 'i')
    let testReg = buscaCarateres.test(nome);

    if (nome === '') {
        divError.innerHTML = 'Erro: Campo Vazio';
        // objNome.classList('m-error');
    }
    else if (nome.length < 6) {
        divError.innerHTML = 'Nome não pode ser menor que 6 caracteres';
    }
    else if (testReg) {
        divError.innerHTML = 'Não pode usar o @'
    }
    else {
        divError.innerHTML = 'Tudo certo';
    }
    event.preventDefault();
});



