"use strict"

/*let qty = 10;
let tab = 9
for (let i = 1; i <= qty; i++) {
    let res = i * tab;
    console.log(i, "x", tab, "=", res);
}*/

console.log("---------------Estrutura sem função-------------------------------")

let salario1 = 2000;
let aumento1 = 10 / 100;
let novoSalario1 = salario1 + salario1 * aumento1;
console.log(`Salario: ${salario1}`);
console.log(`Novo Salário: ${novoSalario1}`);

console.log("---------------Estrutura com função--------------------------------------")

function aumentoSalario(salario, porcentagem) {
    let aumento = salario + salario * porcentagem / 100;
    return aumento;
}

function printMensagem(salario) {
    console.log(`Novo Salario ${salario}`);
}
console.log("---------------Estrutura para exbibir armazenando na variavel-----------")
let novoSalario = aumentoSalario(2000, 10);
console.log(`Novo Salário: ${novoSalario}`);
console.log()
console.log("---------------Estrutura para exbibir direto sem armazenar na variavel---")
console.log(`Novo Salario 2: ${aumentoSalario(3000, 15)}`);

console.log("---------------Estrutura usando a função printMensagem---")
printMensagem(aumentoSalario(3500, 10));

console.log("---------------Estrutura de função criada dentro de uma variavel para ir direto na função criada ---")
// Ela só funciona e caso vc chame a função depois de declarada na variavel, diferente da anterior que le em qualquer situção;
let express = function () {
    console.log("Expressão");
}
express()

console.log("---------------Estrutura de função Arrow ----------------------------------")

let arrowFunc = () => false;

let retorno = arrowFunc();
console.log(retorno);

let subtrai2 = n1 => {
    let subtrai = 40 - n1;
    console.log(subtrai)
}
subtrai2(3);

console.log("---------------Estrutura de objetos------------------------")

let Pessoa = {
    nome: "Matheus",
    idade: 45,
    mensagem: function () {
        console.log("Olá Mundo");
    }
}

//Transforma o objeto em json
let json = JSON.stringify(Pessoa);
console.log(json);
let convert = JSON.parse(json);


let Usuario = {
    admin: true,
    login: "saocebri",

    __proto__: Pessoa,
}
console.log(Usuario.idade);
console.log(Usuario.mensagem());

let lista = [1, 2, 3]

let j = lista.join(',');
console.log(j);

// Callback

function alerta(callback) {
    callback();
}

let resposta = function () {
    console.log("Olá você venceu");
}
resposta();
alerta(resposta);

// Callback de outra forma

function alerta2(ola, mundo, msnola, msmundo = "Mundo") {
    ola(msnola);
    mundo(msmundo);
}
alerta2(msn => console.log(msn), msn => console.log(msn), "Olá");

//Operador NEW / Construtor





let x = 1;
