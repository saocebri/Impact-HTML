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

let nome = "10" * 10; // O java consegue converter um string(numeros) em variavel tipo numero
let numero = 10;
let boolean = true;
let encontrandoTipo = typeof nome;
let idade = Number ("25") // forma de converter uma string para number
let idade2 = String(25) //Forma de converter um number em string

const COLOR_RED = "#ff0000"; // Declaração de variavel constante (nunca muda)



console.log("tipo:", typeof nome, nome);
console.log("tipo:", typeof numero, numero);
console.log("tipo:", typeof boolean, boolean);
console.log("tipo:", typeof idade, idade);
console.log("tipo:", typeof idade2, idade2);
console.log("tipo:", encontrandoTipo);



