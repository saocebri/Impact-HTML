/*
Tipos de Dados
--------------------------------
number = Numeros inteiros e decimais
string =  texto
boolean = true e false
null = nenhuma informação
undefined = é uma variavel é declarada, mas não tem valor atribuido
object = 
*/
"use strict"

const COLOR_RED = "#ff0000"; // Declaração de variavel constante (nunca muda)
let nome = "10" * 10; // O java consegue converter um string(numeros) em variavel tipo numero
let numero = 10;
let boolean = true;
let convertBoolean = Boolean(0);
let encontrandoTipo = typeof nome;
let idade = Number("25") // forma de converter uma string para number
let idade2 = String(25) //Forma de converter um number em string
let nota1 = 10;
let nota2 = 5;
let somaN1N2 = nota1 + nota2; // " + - * / % (mod) resto "
let media = (nota1 + nota2) / 2;
let faltas = 0;
let aluno = "Carlos";


// se media >=7 e faltas = 0 aprovado 
// se media <7 reprovado 
//" > >= <= < != == === !=="
// && (and) || (or) !(NEgação, deixar a condição com a logica invertida)

console.log("----------------------------------")

if (media >= 7 && faltas === 0) {
    console.log("Olá", aluno, "sua media é", media, "voce está Aprovado")
} else {
    console.log("Olá", aluno, "sua media é", media, "voce está Reprovado")
}
console.log("----------------------------------")
//Tipo ternario
console.log(!(10 > 7)) ? "10 é maio que 7" : "10 é menor que 7"; //Condição é verdadeira, mas com o operador de negação "!" ele deixa a condição false

console.log("--------------Usando While--------------------")
let i = 1;
while (i <= 10) {
    // if (i === 5) {
    //     break;
    // }
    if (media >= 7 && faltas === 0) {
        console.log("Olá", aluno, "sua media é", media, "voce está Aprovado")
    } else {
        console.log("Olá", aluno, "sua media é", media, "voce está Reprovado")
    }
    i++
}

console.log("----------Usando FOR-----------------------")


for (let i = 1; i <= 10; i++) {
    if (media >= 7 && faltas === 0) {
        console.log("Olá", aluno, "sua media é", media, "voce está Aprovado")
    } else {
        console.log("Olá", aluno, "sua media é", media, "voce está Reprovado")
    }
}

console.log("----------Usando FOR/Array-----------------------")

let alunos = ["Pedro", "Paulo", "Jonas", "Amanda", "Bianca", "Eduardo", "Maria"];

for (let i = 0; i < alunos.length; i++) {
    if (media >= 7 && faltas === 0) {
        console.log("Olá", alunos[i], "sua media é", media, "voce está Aprovado")
    } else {
        console.log("Olá", alunos[i], "sua media é", media, "voce está Reprovado")
    }
}

console.log("----------Usando FOR/Array dentro do Array-----------------------")

let alunos2 = [["Pedro", "Paulo", "Jonas"]];
console.log(alunos2[0][0]);
console.log(alunos2[0][1]);
console.log(alunos2[0][2]);

let alunos3 = ["Pedro", "Paulo", "Jonas", "Amanda", "Bianca", "Eduardo", "Maria"];
let semestre1 = [10, 5, 3, 8, 1, 9, 4];
let semestre2 = [10, 5, 3, 8, 1, 9, 4];
let faltas2 = 0;

for (let i = 0; i < alunos3.length; i++) {
    let mediaSemestre = (semestre1[i] + semestre2[i]) / 2;
    let mensagem;
    let nomeDoAluno = alunos3[i];
    if (mediaSemestre >= 7 && faltas2 === 0) {
        mensagem = `Olá ${nomeDoAluno} sua media é:  ${mediaSemestre} voce está Aprovado`;
    }
    else if (mediaSemestre > 3 && faltas2 === 0) {
        mensagem = `Olá ${nomeDoAluno} sua media é:  ${mediaSemestre} voce está Recuperação`;
    }

    else {
        mensagem = `Olá ${nomeDoAluno} sua media é:  ${mediaSemestre} voce está  Reprovado`;
    }
    console.log(mensagem);
}

console.log("----------Usando Switch Case-----------------------")

switch (media) {
    case (media >= 7):
        console.log("Aprovado");
        break;
    case (media < 3):
        console.log("Recuperação");
        break;
    default:
        console.log("Reprovado");
        break;
}





// console.log("tipo:", typeof nome, nome);
// console.log("tipo:", typeof numero, numero);
// console.log("tipo:", typeof boolean, boolean);
// console.log("tipo:", typeof idade, idade);
// console.log("tipo:", typeof idade2, idade2);
// console.log("tipo:", encontrandoTipo);
// console.log(somaN1N2);
// console.log(media);
// console.log("tipo:", convertBoolean);



