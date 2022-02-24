let Pessoa = function (nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.fullName = function () {
        console.log(`${this.nome} ${this.sobreNome}`);
    }
}

let pessoa1= new Pessoa("José","da Siva");
let pessoa2 = new Pessoa("Pedro","Rodrigues");
let data = new Date;

console.log(data);
pessoa1.fullName();
pessoa2.fullName();
