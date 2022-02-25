"use strict"

//Method Fetch - Outro metodo de fazer uma requisição
//Função Fetch é uma Promises
let o = {}

let fetchData = function (url) {
    fetch(url).then(function (resp) {
        return resp.json();
    }).then(function (data) {
        data.map((dataArray) => {
            document.querySelector('.pessoas').innerHTML += '<br>' + dataArray.name;
        });
        // document.querySelector(".pessoas").append(data[0].name);
        console.log(data[0].name);
    }).catch(function (erro) {
        console.log("Algo deu Errado")
    });
}

fetchData('https://jsonplaceholder.typicode.com/users');

//Salvar dados na memoria do navegador local

function saveStore(dados) {
    localStorage.setItem('email', 'carlos@teste.com.br');
}

function getStore() {
    return localStorage.getItem('email')
}

document.querySelector('.email').innerHTML = getStore();

saveStore();

//Criar uma requisição Ajax via XMLHttpRequest() /  usado para API ou arquivos externos

function getCep(cep) {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.status == 200) {
            let endereco = JSON.parse(this.responseText);
            document.querySelector('.input-name').value = endereco.cep;
        }
    }
    http.open('GET', `https://viacep.com.br/ws/${cep}/json/`, true);
    http.send();
}
let botaoBuscaCep = document.querySelector('.busca-cep');
botaoBuscaCep.addEventListener('click', function (event) {
    getCep('18132380');
    event.preventDefault();
})


//Evento (keyup) pelo ID / Criando um contador de caracteres / Encapsulando a função
//Sempre adicione comentário para explicar o que a função executa.

function contadorDeCaracteres(id) {
    let objectArea = document.getElementById(id);
    let objectdivContar = document.querySelector('.contar');
    objectArea.addEventListener('keyup', (event) => {
        let contador = objectArea.value.length;
        objectdivContar.innerHTML = contador;
    });
}
// Enviado o nome do ID do HTML para a função contador
contadorDeCaracteres('txt');

//Manipulando Object do CSS/HTML direto pelo JavaScript

let objectLi = document.querySelectorAll('li');
let objectImage = document.querySelector('.img');
for (let i = 0; i < objectLi.length; i++) {
    objectLi[i].addEventListener('mouseover', function (event) {
        this.classList.add('active');
        objectImage.src = 'img/art.png';

    });
    objectLi[i].addEventListener('mouseout', function (event) {
        this.classList.remove('active');
        objectImage.src = 'img/banana.svg';

    })
}


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
    else if (test) {
        divError.innerHTML = 'Não pode usar o @'
    }
    else {
        divError.innerHTML = 'Tudo certo';
    }
    event.preventDefault();
});



