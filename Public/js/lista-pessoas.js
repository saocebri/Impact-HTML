
let listaPessoas = document.querySelector('.lista-pessoas');

let pessoas = Pessoas;
let lista = pessoas.lista;

//Usando o função "map"

lista.map(function(lista2){
    listaPessoas.innerHTML += `<div>${lista2.id} => ${lista2.nome} ==> ${lista2.email}</div>`
})

//usando "for"

// for (let i = 0; i < lista.length; i++) {
    
//     listaPessoas.innerHTML += `<div>${lista[i].id} => ${lista[i].nome} ==> ${lista[i].email}</div>`
    
// }
